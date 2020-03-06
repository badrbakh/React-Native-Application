import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import {
  Item,
  Label,
  Input,
  Content,
  Container,
  Form,
  Button,
  Icon
} from "native-base";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    text: ""
  };

  addTodo = text => {
    this.props.dispatch(addTodo(text));
    this.setState({ text: "" });
  };

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 5,
          marginTop: 5
        }}
      >
        <Content>
          <Item floatingLabel style={{ height: 70 }}>
            <Label>New Todo</Label>
            <Input
              onChangeText={text => {
                this.setState({ text });
              }}
              value={this.state.text}
            />
          </Item>
        </Content>
        <Button
          rounded
          danger
          onPress={() => {
            console.log("added");
            this.addTodo(this.state.text);
          }}
        >
          <Icon name="add" style={{ fontSize: 22 }} />
        </Button>
      </View>
    );
  }
}

export default connect()(AddTodo);
