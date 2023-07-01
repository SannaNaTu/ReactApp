import { StyleSheet } from "react-native";

import { Colors, Sizes } from "../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  title: {
    fontSize: 25,
    color: Colors.primary,
    marginTop: 2,
    textAlign: "center",
  },
  tabsContainer: {
    width: "100%",
    marginTop: Sizes.medium,
  },
  tab: (type, item) => ({
    paddingVertical: Sizes.small / 2,
    paddingHorizontal: Sizes.small,
    borderRadius: Sizes.medium,
    borderWidth: 1,
    borderColor: type === item ? Colors.secondary : Colors.gray2,
  }),
  tabText: (type, item) => ({
    color: type === item ? Colors.secondary : Colors.gray2,
  }),
});

export default styles;
