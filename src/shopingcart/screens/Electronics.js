import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { electronics } from "../Data";
import Products from "../components/Products";

class Electronics extends Component {
  render() {
    return (
      <Products products={electronics} onPress={this.props.addItemToCart} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    addItemToCart: product =>
      dispatch({
        type: "ADD_TO_CART",
        payload: product
      })
  };
};

export default connect(null, mapDispatchToProps)(Electronics);
