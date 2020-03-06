import React, { Component } from "react";
import { Alert } from "react-native";
import {
  View,
  Icon,
  List,
  ListItem,
  Text,
  Left,
  Body,
  Right,
  Button
} from "native-base";

class Products extends Component {
  renderProducts = products => {
    return products.map(product => {
      return (
        <ListItem key={product.id} thumbnail>
          <Left>
            <Text style={{ fontSize: 20 }}>{product.id}</Text>
          </Left>
          <Body>
            <Text>{product.name}</Text>
            <Text note numberOfLines={1}>
              RM {product.price}
            </Text>
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => this.props.onPress(product)}
              title={product.name + " - " + product.price}
              // onPress={
              //   (console.log(product), () => this.props.onPress(product))
              //   // () =>
              //   // Alert.alert(
              //   //   "Success!",
              //   //   "Item added to cart",
              //   //   [
              //   //     {
              //   //       text: "OK",
              //   //       onPress: product => this.props.onPress(product)
              //   //     }
              //   //   ],
              //   //   { cancelable: false }
              //   // )
              // }
            >
              <Text>
                <Icon name="cart" />
                {"  "} Add to cart
              </Text>
            </Button>
          </Right>
        </ListItem>
      );
    });
  };

  render() {
    return <View>{this.renderProducts(this.props.products)}</View>;
  }
}

export default Products;
