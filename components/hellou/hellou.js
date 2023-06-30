import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { style, Sizes } from "../../constants";
import styles from "./hellou.style";
import { StyleSheet } from "react-native";

const types = [
  { key: 0, navigationTitle: "Info", navigationName: "testi/testi" },
  {
    key: 1,
    navigationTitle: "To Do List",
    navigationName: "todolist/todolist",
  },
  { key: 2, navigationTitle: "Dizegame", navigationName: "dizegame/dizegame" },
];

const Hellou = () => {
  const navigation = useRouter();
  const [type, setType] = useState();

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>React Native Harjoitus</Text>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={types}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(type, item)}
              onPress={() => {
                setType(item.navigationTitle);
                navigation.push(`${item.navigationName}`);
              }}
            >
              <Text style={styles.tabText(type, item.navigationTitle)}>
                {item.navigationTitle}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.key.toString()}
          contentContainerStyle={{ columnGap: Sizes.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Hellou;
