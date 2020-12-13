import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  StatusBar,
  Button,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, RouteProp } from "@react-navigation/native";
import firebase from "firebase";
import { useFocusEffect } from "@react-navigation/native";
// import moment from "moment";
// import Icon from "react-native-vector-icons/FontAwesome";


type MainScreenRouteProps = RouteProp<RootStackParamList, "Main">;
type Props = {
  navigation: StackNavigationProp<RootStackParamList, "part">;
  route: MainScreenRouteProps;
};

export function MainScreen(props : Props) {
  const { navigation } = props;
  const toHowto1 = () => {
    navigation.push("Howto1",{howto1: "arm"});
  };

  const currentUser = props.route.params.user;
  // const [part, setPart] = useState<partInfo>(initialPart);
  //const toHowto1 = () => {
  //  navigation.navigate("Howto1");
  //};
  const toSignin = () => {
    navigation.navigate("SignIn");
  };
  const back = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, color: "#00ced1" }}>
        triplethereeアプリ登録
      </Text>
      {/* <Text>{currentUser.email}でログイン中</Text> */}
      <View style={styles.container}>
        <TouchableOpacity onPress={toHowto1}>
          <Button
            title="腕を鍛えたい"
            onPress={() => {
              toHowto1();
            }}
          />
          <Button
            title="胸を鍛えたい"
            onPress={() => {
              toHowto1();
            }}
          />
          <Button
            title="腰を鍛えたい"
            onPress={() => {
              toHowto1();
            }}
          />
          <Button
            title="お尻を鍛えたい"
            onPress={() => {
              toHowto1();
            }}
          />
          <Button
            title="脚を鍛えたい"
            onPress={() => {
              toHowto1();
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.spacer}>
        <Button
          title="Back"
          onPress={() => {
            back();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "#66cdaa",
    flex: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    color: "#66cdaa",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "blue",
    width: "80%",
    height: 80,
  },
  buttonText: {
    color: "#66cdaa",
    flex: 1,
    fontSize: 20,
    textAlign: "center",
  },

  spacer: {
    color: "#66cdaa",
    flex: 1,
    height: 20,
    marginBottom: 10,
  },
});
