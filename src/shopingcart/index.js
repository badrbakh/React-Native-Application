import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container, Icon, Badge } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider, connect } from "react-redux";
import AppHeader from "../components/AppHeader";
import Electronics from "./screens/Electronics";
import Books from "./screens/Books";
import Cart from "./screens/Cart";
import store from "./store";

class ShopingCart extends Component {
  render() {
    return (
      <Container>
        <AppHeader
          navigation={this.props.navigation}
          title={"Shoping Cart App"}
        />
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Electronics") {
                iconName = "md-laptop";
              } else if (route.name === "Books") {
                iconName = "md-book";
              } else if (route.name === "Cart") {
                return (
                  <CartIconWithBadge
                    name="md-cart"
                    size={size}
                    color={color}
                    cartItems={this.props.cartItems}
                  />
                );
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={size} color={color} />;
            }
          })}
          tabBarOptions={{
            activeTintColor: "blue",
            inactiveTintColor: "gray"
          }}
        >
          <Tab.Screen name="Electronics" component={Electronics} />
          <Tab.Screen name="Books" component={Books} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </Container>
    );
  }
}
const Tab = createBottomTabNavigator();

function CartIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return (
    <IconWithBadge
      {...props}
      badgeCount={
        props.cartItems.length
        // 2
      }
    />
  );
}

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "blue",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

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

export default connect(mapStateToProps)(ShopingCart);
