import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f1e9",
  },
  exploreText: {
    color: "white",
    fontSize: 20,
  },
  exploreContainer: {
    height: 60,
    width: wp("100%"),
    backgroundColor: "#c9cbab",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  exploreBtn: {
    backgroundColor: "#4d6447",
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    padding: 10,
  },
  crossBtn: {
    position: "absolute",
    backgroundColor: "#f7f1e9",
    top: 20,
    left: 20,
    borderRadius: 3,
    padding: 8,
  },
  roomContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 15,
    paddingBottom: 30,
  },
  roomType: {
    backgroundColor: "#c9cbab",
    marginRight: 10,
    marginBottom: 10,
    padding: 8,
    borderRadius: 5,
  },
  description: {
    paddingTop: 15,
    paddingHorizontal: 15,
  },
  slider: {
    width: "100%",
    height: hp("30%"),
  },
  horizontalLine: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginTop: 15,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    paddingTop: 20,
  },
  ratingContainer: {
    padding: 5,
    position: "absolute",
    backgroundColor: "#f7f1e9",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 3,
    right: 0,
    top: 0,
    borderWidth: 1,
    borderColor: "black",
  },
  distanceContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  imageWrapper: {
    width: "30%",
  },
  image: {
    flex: 1,
  },
  infoContainer: {
    width: "70%",
    padding: 10,
  },
  rating: {
    fontSize: 18,
    fontWeight: "600",
  },
  title: {
    fontSize: 26,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  distance: {
    fontSize: 14,
  },
  price: {
    fontSize: 14,
  },
  bold: {
    fontWeight: "600",
  },
});
