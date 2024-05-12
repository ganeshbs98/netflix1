import {
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  const [emailtext, setEmailtext] = useState("");
  const [passwordtext, setPasswordtext] = useState("");
  return (
    <SafeAreaView style={styles.Logincontainer}>
      <KeyboardAvoidingView>
        <View style={styles.imageConatiner}>
          <Image
            style={styles.netfliximage}
            source={{
              uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
            }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            value={emailtext}
            onChangeText={(text) => setEmailtext(text)}
            style={styles.emailtext}
            placeholder=" Email"
            placeholderTextColor={"white"}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            autoCapitalize="none"
            value={passwordtext}
            onChangeText={(text) => setPasswordtext(text)}
            style={styles.emailtext}
            placeholder=" Password"
            secureTextEntry={true}
            placeholderTextColor={"white"}
          />
        </View>

        <View>
          <Pressable
            style={[
              styles.signinconatiner,
              passwordtext.length > 4 ? styles.redbgc : null,
            ]}
          >
            <Text style={styles.textSignin}>Sign In</Text>
          </Pressable>
          <Pressable
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.signup}> New to Netflix?sign up now </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  Logincontainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
    alignItems: "center",
  },
  imageConatiner: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  netfliximage: {
    width: 200,
    height: 70,
    marginTop: 60,
  },
  inputContainer: {
    width: 300,
    borderBottomWidth: 0,
    margin: 20,
  },
  emailtext: {
    fontSize: 18,
    width: 300,
    height: 50,
    borderRadius: 10,
    color: "white",
    backgroundColor: "gray",
    gap: 10,
    padding: 10,
  },
  signinconatiner: {
    marginTop: 20,
    width: 300,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "white",
  },
  redbgc: {
    backgroundColor: "red",
  },
  textSignin: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  signup: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
