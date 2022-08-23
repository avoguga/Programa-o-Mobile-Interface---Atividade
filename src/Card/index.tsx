import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Card({text, date}) {
  return (
    <View style={styles.card}>
        <Text style={[styles.cardText, {marginRight: 60}]}>{text}</Text>
        <Text style={styles.cardText}>{date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#FFF",
        width: 370,
        height: 70,
        borderRadius: 15,
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      },
      cardText: {
          color: "#444140",
          fontSize: 16
      }
  });