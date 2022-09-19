import { StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: wp("100%"),
    height: hp("100%"),
  },
  markerContainer: {
    alignItems: "center",
  },
  marker: {
    width: 45,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  markerText: {
    color: "white",
  },
  selectedMarker: {
    backgroundColor: "#b26422",
    borderRadius: 15,
  },
  pointer: {
    width: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 9,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "gray",
  },
  selectedPointer: {
    borderTopColor: "#b26422",
  },
});
