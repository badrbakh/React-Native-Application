import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, Icon } from "native-base";
import { connect } from "react-redux";

class CounterApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            width: 300,
            justifyContent: "space-around"
          }}
        >
          <Button rounded danger onPress={() => this.props.decreaseCounter()}>
            <Text>Decrease</Text>
          </Button>
          <Text style={{ fontSize: 30 }}>{this.props.counter}</Text>
          <Button rounded success onPress={() => this.props.increaseCounter()}>
            <Text>Increase</Text>
          </Button>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "black",
    fontSize: 50
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
