import { memo } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ApartmentInfo = ({ apartment }) => {
  const { navigate } = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate("ApartmentScreen")}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: apartment?.images[0].url,
          }}
          resizeMode="cover"
          style={styles.image}
        />
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.5</Text>
          <MaterialIcons
            name="star"
            size={14}
            color="#b26422"
            style={{
              paddingLeft: 3,
            }}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{apartment?.name}</Text>
        <View style={styles.distanceContainer}>
          <MaterialIcons
            name="location-pin"
            size={16}
            color="#b26422"
            style={{
              paddingRight: 3,
            }}
          />
          <Text style={styles.distance}>
            {apartment?.distance.toFixed(1)} km from the center
          </Text>
        </View>

        <View style={styles.horizontalLine}></View>
        <Text style={styles.price}>
          From
          <Text style={{ color: "#b26422" }}>
            <Text style={{ fontWeight: "600" }}> 55.00</Text>
            <Text>/ per night</Text>
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default memo(ApartmentInfo);
