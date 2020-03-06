import React, { Component } from "react";
import { Alert } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import {
  Container,
  ListItem,
  Left,
  Body,
  Right,
  Button,
  Icon
} from "native-base";
import { connect } from "react-redux";
class Cart extends Component {
  render() {
    return (
      <Container>
        {this.props.cartItems.length > 0 ? (
          this.props.cartItems.map(item => {
            return (
              <ListItem
                key={item.id}
                thumbnail
                style={{ marginHorizontal: 10 }}
              >
                <Body>
                  <Text>{item.name}</Text>
                  <Text note numberOfLines={1}>
                    RM {item.price}
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={this.props.removeItem}>
                    <Text>
                      <Icon name="md-trash" style={{ color: "red" }} />
                    </Text>
                  </Button>
                </Right>
              </ListItem>
            );
          })
        ) : (
          <View style={styles.container}>
            <Text>No item in your cart</Text>
          </View>
        )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeItem: item => {
      console.log("item: " + item.payload);
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: item
      });
    }
  };
};
const mapStateToProps = state => {
  return {
    cartItems: state
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
