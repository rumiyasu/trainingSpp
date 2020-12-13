import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { WebView } from "react-native-webview";

export function HowtoScreen1() {
  const [isLoading, setIsLoading] = useState(false); //追加
  const loadingView = <Text>now loading</Text>; //追加
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? loadingView : null}
      <View style={styles.container}>
        <Text style={{ fontSize: 100 }}> </Text>
        <Text style={{ fontSize: 25, color: "#00ced1" }}>腕の鍛え方</Text>
        {isLoading ? loadingView : null}
      </View>
      <View style={styles.webviewContainer}>
        <WebView
          style={{ marginTop: 60, marginBottom: 0, width: 350, height: 100 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{ uri: "https://www.youtube.com/embed/AXjP-WP4m2U" }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 40, color: "#00ced1" }}>アームカール</Text>
        <Text style={{ fontSize: 15 }}> </Text>
        <Text style={{ fontSize: 35, color: "#00ced1" }}> × 左右20回</Text>
      </View>
      <View style={styles.textHow}>
        <Text
          style={{
            marginLeft: 30,
            marginRight: 20,
            fontSize: 18,
            color: "#00ced1",
          }}
        >
          ●2Lペットボトルを肩幅で持つ。{"\n"}
          ●背筋を伸ばし、頭の位置を固定。{"\n"}
          ●肘を腰より前に出し、持ち上げる。{"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    color: "#66cdaa",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  textContainer: {
    flex: 10,
    textAlign: "center",
    fontSize: 30,
    color: "#0000ff",
    justifyContent: "center",
    fontWeight: "600",
  },
  webviewContainer: {
    flex: 10,
    color: "blue",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
  },
  textHow: {
    flex: 5,
    color: "#66cdaa",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "800",
  },
});
