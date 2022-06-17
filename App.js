import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons"
import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  // console.log(text);

  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={require("./assets/logo.png")} />

      <View style={styles.inputs}>

        <Feather name="user" size={20} color="#FFF" />

        <TextInput
          type="text"
          placeholder="Enter Username"
          style={styles.inputUser}
          placeholderTextColor="grey"
          onChangeText={(text) => setText(text)}
          value={text}
          autoCorrect={true}
          spellCheck={true} // para corregir errores
        />

        <View style={styles.inputPassTop}>
          <Feather name="lock" size={20} color="#FFF" />
          <TextInput
            type="password"
            placeholder="Enter Password"
            style={styles.inputPass}
            placeholderTextColor="grey"
            secureTextEntry={true} //Para poder ingresar contraseñas y que no se mire lo que escribes
          />
        </View>
      </View>

      <View style={styles.botones}>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.login}>
          <Text style={styles.textButton}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.icono}>
        <Ionicons name="finger-print-outline" size={40} color="#FFF" />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121314",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logo: { 
    width: 280,
    height: 280,
  },
  inputUser: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    color: "#CCC",
  },
  inputPassTop: {
    marginTop: 10,
  },
  inputPass: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    color: "#CCC",
  },
  inputs: {
    // backgroundColor: "green",
    flex: 1,
    maxHeight: "20%",
    minWidth: "75%",
  },
  botones: {
    flex: 1,
    // backgroundColor: "blue",
    justifyContent: "space-evenly",
    alignItems: "space-evenly",
    maxHeight: 140,
    marginTop: -60,
  },
  login: {
    justifyContent: "center",
    alignItems: "center",
    width: 190,
    height: 32,
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 20,
    // backgroundColor: "red"
    // marginTop: 40,
  },
  textButton: {
    color: "#CCC",
  },
  icono: {
    // backgroundColor: "red",
  }
});
