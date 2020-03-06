import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container } from "native-base";
import { Provider } from "react-redux";
import TodoApp from "./TodoApp";
import store from "./store";
import AppHeader from "../components/AppHeader";

export default function Todo({ navigation }) {
  return (
    <Provider store={store}>
      <AppHeader navigation={navigation} title={"Todo App"} />
      <View>
        <TodoApp />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
