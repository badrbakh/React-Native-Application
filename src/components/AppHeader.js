import React, { Component } from "react";
import { Header, Left, Button, Icon, Body, Title } from "native-base";

export default function AppHeader({ navigation, title }) {
  return (
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.openDrawer()}>
          <Icon name="menu" />
        </Button>
      </Left>
      <Body>
        <Title>{title}</Title>
      </Body>
    </Header>
  );
}
