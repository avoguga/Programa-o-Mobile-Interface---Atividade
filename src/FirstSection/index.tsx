import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function FirstSection() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bem vindo, Carlos</Text>
      <View style={{ marginTop: 50 }}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Você gastou hoje</Text>
        <Text style={{ color: "#fff", fontSize: 28 }}>R$ 500,00</Text>
      </View>
      <View style={{justifyContent: "center", alignItems: "center", marginTop: 70}}>
        <Text style={[styles.selectionText, {marginBottom: 10}]}>ESCOLHER PERÍODO:</Text>
        <View style={{flexDirection: "row"}}>
          <Text style={[styles.selectionText, { marginRight: 70}]}>Hoje</Text>
          <Text style={[styles.selectionText, { marginRight: 70}]}>Essa Semana</Text>
          <Text style={styles.selectionText}>Esse Mês</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E54B4B",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    textDecorationColor: "#fff",
    alignItems: "center"
  },
  welcomeText: {
    color: "#fff",
    fontSize: 36,
    marginTop: 60
  },
  selectionText: {
      fontSize: 16,
      color: "#fff",
  },
});
