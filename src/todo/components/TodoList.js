import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TodoList = ({ todos, toggleTodo }) => (
  <View style={{ padding: 10 }}>
    {todos.map(todo => (
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text
          style={{
            fontSize: 20,
            textDecorationLine: todo.completed ? "line-through" : "none"
          }}
        >
          {todo.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

export default TodoList;
