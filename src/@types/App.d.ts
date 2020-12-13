type signedInUser = {
  email: string;
  uid: string;
};

type RootStackParamList = {
  Main: { user: signedInUser }; //ここを書き換え
  SignIn: undefined;
  SignUp: undefined;
  Howto1: { howto1: string };
  part: { part: part };
  Howto3: undifined;
  Howto4: undifined;
  Howto5: undifined;
};
