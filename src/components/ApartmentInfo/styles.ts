import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#f7f1e9",
    borderWidth: 1,
    borderColor: "#9d9e9f",
    borderRadius: 3,
    height: 120,
    width: wp("90%"),
    bottom: 150,
  },
  ratingContainer: {
    padding: 2,
    position: "absolute",
    backgroundColor: "#f7f1e9",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    right: 5,
    top: 5,
  },
  distanceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
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
    fontSize: 22,
    marginRight: 10,
  },
  distance: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
  },
  horizontalLine: {
    width: "90%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 5,
  },
  bold: {
    fontWeight: "600",
  },
});
