import "react-native-gesture-handler";
import React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Container } from "native-base";
// import AppHeader from "./src/components/AppHeader";
import Home from "./src/home/index";
import Todo from "./src/todo/index";
import Counter from "./src/counter/index";
import ShopingCart from "./src/shopingcart/index";
import { Provider } from "react-redux";
import store from "./src/shopingcart/store";

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Container>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Todo" component={Todo} />
          <Drawer.Screen name="Counter" component={Counter} />
          <Drawer.Screen name="Shoping Cart" component={ShopingCartApp} />
        </Drawer.Navigator>
      </Container>
    </NavigationContainer>
  );
};

const ShopingCartApp = props => {
  return (
    <Provider store={store}>
      <ShopingCart navigation={props.navigation} />
    </Provider>
  );
};

const Drawer = createDrawerNavigator();

export default App;
