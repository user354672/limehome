import React, { useRef } from "react";
import { ScrollView, Text, View, Image, SafeAreaView } from "react-native";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { ApartmentContext } from "../../store/ApartmentsContext";

const ApartmentScreen = () => {
  const navigation = useNavigation();
  const { apartment } = React.useContext(ApartmentContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.slider}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: apartment?.images[0].url,
          }}
        />
        <View style={styles.crossBtn}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Entypo
              name="cross"
              size={22}
              color="black"
              style={{
                paddingRight: 3,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.description}>
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
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>4.5</Text>
          <MaterialIcons
            name="star"
            size={26}
            color="#b26422"
            style={{
              paddingLeft: 3,
            }}
          />
        </View>

        <Text style={styles.text}>{apartment.description}</Text>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.subtitle}>
          Room types avaliable in this location
        </Text>

        <View style={styles.roomContainer}>
          {apartment?.unit_groups.map((el) => (
            <View style={styles.roomType}>
              <Text>
                {el.max_guests}*{el.bedroom_count} Bedroom suites
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.exploreContainer}>
        <Text style={styles.price}>
          From
          <Text style={{ color: "#b26422" }}>
            <Text style={{ fontWeight: "600" }}> 55.00</Text>
            <Text>/ per night</Text>
          </Text>
        </Text>
        <TouchableOpacity style={styles.exploreBtn}>
          <Text style={styles.exploreText}>EXPLORE</Text>
          <AntDesign
            name="arrowright"
            size={24}
            color="white"
            style={{
              paddingLeft: 8,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ApartmentScreen;
