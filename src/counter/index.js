import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container } from "native-base";
import { createStore } from "redux";
import { Provider } from "react-redux";
import CounterApp from "./CounterApp";
import AppHeader from "../components/AppHeader";

export default function Counter({ navigation }) {
  return (
    <Provider store={store}>
      <Container>
        <AppHeader navigation={navigation} title={"Counter App"} />
        <CounterApp />
      </Container>
    </Provider>
  );
}

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return { counter: state.counter + 1 };
    case "DECREASE_COUNTER":
      return { counter: state.counter - 1 };
  }
  return state;
};
const store = createStore(reducer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
