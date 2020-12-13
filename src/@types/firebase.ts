import analytics from "@react-native-firebase/analytics";

export async function logEvent(
  name: string,
  params: {
    [key: string]: string | number | boolean;
  } = {}
) {
  await analytics().logEvent(name, params);
}
