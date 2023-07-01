import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import styles from "./todolist.style";

export default function TodoListScreen() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.length > 0) {
      const newTodo = {
        id: Date.now().toString(),
        todo: todo,
        todoDate: new Date().toLocaleString(),
      };

      setTodos([...todos, newTodo]);

      setTodo("");
    }
  };

  const handleDeleteTodo = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);

    setTodos(filteredTodos);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add todo"
        onChangeText={(text) => setTodo(text)}
        value={todo}
      />

      <Button title="Add" onPress={handleAddTodo} />

      <FlatList
        style={styles.list}
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.todo}>
            <Text style={styles.todoText}>{item.todo}</Text>
            <Text style={styles.todoText}>{item.todoDate}</Text>

            <Button title="Delete" onPress={() => handleDeleteTodo(item.id)} />
          </View>
        )}
      />
    </View>
  );
}
