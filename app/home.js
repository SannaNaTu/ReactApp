import { useState } from "react";
import { SafeAreaView, View } from "react-native";

import { Hellou } from "../components";

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Hellou />
      </View>
    </SafeAreaView>
  );
};

export default Home;
