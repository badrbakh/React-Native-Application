import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container } from "native-base";
import AppHeader from "../components/AppHeader";

export default function Home({ navigation }) {
  return (
    <Container>
      <AppHeader navigation={navigation} title={"Home"} />
      <View style={styles.container}>
        <Text>This is Home Screen</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
