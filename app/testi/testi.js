import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";

const ToDoList = () => {
  const router = useRouter();

  return (
    <View>
      <View>
        <Text>Tämä on vain testisivu reititystä varten.</Text>
      </View>
    </View>
  );
};
export default ToDoList;
