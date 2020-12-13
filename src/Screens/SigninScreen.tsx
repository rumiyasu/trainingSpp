import { StatusBar as ExpoStatusBar } from "expo-status-bar"; //書き換え
import React, { useState } from "react"; //追加：後で使います
import {
  StyleSheet,
  Text,
  View,
  Button, //これ以下の要素を追加
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase"; //追加

export function SigninScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const toMain = (user: signedInUser) => {
    navigation.navigate("Main", { user: user });
  };
  const toSignup = () => {
    navigation.navigate("SignUp");
  };
  const pressedSignIn = (email: string, password: string) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        // userがnullかもしれない対策(firebaseモジュールの仕様？)
        if (!user) throw new Error("user is empty");
        if (!user.user) throw new Error("user.user is empty");
        if (!user.user.email) throw new Error("user.user.email is empty");

        Alert.alert("サインイン！", "正常にサインインできました。");
        const currentUser: signedInUser = {
          email: user.user.email,
          uid: user.user.uid,
        };
        toMain(currentUser);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("エラー！", error);
      });
  };
  //Submitが押されたときにSign Up(登録処理)する関数
  // const pressedSubmit = (email: string, password: string, name: string) => {
  //   //ここでFirebaseでの登録
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     //name入れるとエラーのためいれない
  //     .then((user) => {
  //       //登録成功したらログイン画面に戻る
  //       Alert.alert("登録成功！", "サインインできるようになりました");
  //       back();
  //     })
  //     .catch((error) => {
  //       //エラーが返ってきたらその内容をアラートで表示
  //       console.log(error);
  //       Alert.alert("エラー", error);
  //     });
  // };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <Text style={{ fontSize: 20, color: "#00ced1" }}>
           
        </Text>
        <Text style={{ fontSize: 20, color: "#00ced1" }}>
          triplethree会員アプリ
        </Text>
        <View style={styles.titleAndFieldView}>
          <TextInput
            style={styles.inputField}
            placeholder="メールアドレスを入力"
            onChangeText={(email) => {
              setEmail(email);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputField}
            placeholder="^パスワードを入力"
            onChangeText={(password) => {
              setPassword(password);
            }}
            keyboardType="visible-password"
            secureTextEntry={true}
          />
          <TextInput
            style={styles.inputField}
            placeholder="名前を入力"
            onChangeText={(name) => {
              setName(name);
            }}
            keyboardType="default"
            autoCapitalize="none"
          />
          <ExpoStatusBar style="auto" />
        </View>
        <View style={styles.includeButtons}>
          <Button
            title="Sign In"
            onPress={() => {
              pressedSignIn(email, password);
            }}
          />
          <View style={styles.spacer}></View>
          <Button
            title="Sign Up"
            onPress={() => {
              toSignup();
            }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  titleAndFieldView: {
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    flex: 5,
  },
  screenTitle: {
    fontSize: 30,
    marginBottom: 50,
  },
  inputField: {
    width: "80%",
    marginBottom: 20,
    height: 35,
    backgroundColor: "lightgray",
  },
  includeButtons: {
    flex: 4,
    marginVertical: 10,
  },

  spacer: {
    height: 30,
  },
});
