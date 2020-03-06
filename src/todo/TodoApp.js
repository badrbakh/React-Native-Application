import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import AddTodo from "./containers/AddTodo";
import { Header, H1 } from "native-base";
import VisibleTodos from "./containers/VisibleTodos";

class TodoApp extends Component {
  state = {
    todos: [],
    visibilityFilter: "SHOW_ALL_TODOS"
  };

  render() {
    return (
      <View>
        <AddTodo />
        <View>
          <VisibleTodos />
        </View>
      </View>
    );
  }
}

export default TodoApp;
