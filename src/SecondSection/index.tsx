import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Button, Icon } from "@rneui/themed";
import Card from "../Card";

export default function SecondSection() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonList}>
        <Button buttonStyle={styles.button} type="solid">
          <Icon name="flight" color="white" />
        </Button>
        <Button buttonStyle={styles.button} type="solid">
          <Icon name="home" color="white" />
        </Button>
        <Button buttonStyle={styles.button} type="solid">
          <Icon name="local-dining" color="white" />
        </Button>
        <Button buttonStyle={styles.button} type="solid">
          <Icon name="directions-car" color="white" />
        </Button>
        <Button buttonStyle={styles.button} type="solid">
          <Icon name="build" color="white" />
        </Button>
      </View>
      <Card text={"Pizza(R$ 30)"} date={"20/01/2020"}/>
      <Card text={"Coca-Cola(R$ 10)"} date={"20/01/2020"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7EBE8",
  },
  buttonList: {
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#444140",
    width: 60,
    height: 50,
    borderRadius: 5
  },
});
