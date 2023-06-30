import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, StyleSheet, View, FlatList } from "react-native";

const RandomNumber = () => {
  return Math.ceil(Math.random() * 6);
};

const diceImages = {
  1: require("../../assets/Images/1.png"),

  2: require("../../assets/Images/2.png"),

  3: require("../../assets/Images/3.png"),

  4: require("../../assets/Images/4.png"),

  5: require("../../assets/Images/5.png"),

  6: require("../../assets/Images/6.png"),
};

const Dice = ({ number }) => {
  const imageSource = diceImages[number];
  console.log(number);
  return <Image width={200} height={200} source={imageSource} />;
};

const Dice2 = ({ number }) => {
  const imageSource = diceImages[number];
  console.log(number);
  return <Image width={200} height={200} source={imageSource} />;
};

export default function Testi2() {
  const [dice, setDice] = useState(RandomNumber());
  const [dice2, setDice2] = useState(RandomNumber());
  return (
    <View style={styles.container}>
      <View style={styles.dize}>
        <Dice number={dice} />
      </View>
      <View style={styles.dize}>
        <Dice2 number={dice2} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Heitä noppoo!"
          color="#123524"
          onPress={() => {
            setDice(RandomNumber());

            setDice2(RandomNumber());
          }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
7;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#228C22",
    alignItems: "center",
    justifyContent: "center",
  },
  dize: {
    padding: 10,
  },

  buttonContainer: {
    marginTop: 10,
  },
});
