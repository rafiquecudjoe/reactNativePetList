import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function Card({name, category, age, address,image}) {
  return (
    <View style={styles.maincont}>
      <View style={styles.image}>
        <Image
          source={image}
          style={{ height: 200, width: 180, borderRadius: 10 }}
        />
      </View>
      <View style={styles.petinfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.cate}>{category}</Text>
        <Text style={styles.age}>{age}</Text>
        <View style={styles.add}>
          <EvilIcons
            style={styles.icon}
            name="location"
            size={20}
            color="grey"
          />
          <Text style={styles.address}>{address}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincont: {
    flex: 1,
    paddingTop: 30,
    marginHorizontal: 30,
    flexDirection: "row",
  },

  petinfo: {
    marginTop: 20,
    backgroundColor: "white",
    height: 160,
    width: 160,
    justifyContent: "center",
    borderRadius: 10,
    marginLeft: -1,
  },
  name: {
    marginLeft: 20,
    fontSize: 25,
    fontWeight: "bold",
      marginBottom: 3,
    color:'#14279B'
  },
  age: {
    marginLeft: 20,
    fontSize: 15,
    marginBottom: 3,
    color: "grey",
  },
  address: {
    fontSize: 15,
    marginBottom: 3,
    color: "grey",
  },
  cate: {
    marginLeft: 20,
    fontSize: 15,
    marginBottom: 3,
    color: "grey",
  },
  add: {
    flexDirection: "row",
    marginLeft: 15,
  },
  icon: {
    marginTop: 5,
  },
});
