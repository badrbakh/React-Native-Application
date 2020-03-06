import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { books } from "../Data";
import Products from "../components/Products";

class Books extends Component {
  render() {
    return <Products products={books} onPress={this.props.addItemToCart} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product =>
      dispatch({
        type: "ADD_TO_CART",
        payload: product
      })
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(null, mapDispatchToProps)(Books);
