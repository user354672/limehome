import { StyleSheet } from "react-native";

export default StyleSheet.create({
  label: {
    margin: 0,
    padding: 10,
  },
  tabBar: {
    height: 70,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: "absolute",
    overflow: "hidden",
  },
  tabBarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 70,
    height: 56,
    borderRadius: 5,
  },
  icon: {
    paddingLeft: "auto",
    paddingRight: "auto",
  },

  imageWrapper: {
    width: 120,
  },
  image: {
    flex: 1,
  },
  infoContainer: {
    width: "70%",
    padding: 10,
  },
  rating: {
    fontSize: 12,
  },
  title: {
    fontSize: 26,
  },
  distance: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 5,
  },
  bold: {
    fontWeight: "600",
  },
});
