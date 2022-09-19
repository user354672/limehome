import React, { useRef, useState } from "react";
import { Text, View, SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import styles from "./styles";

import ApartmentInfo from "../../components/ApartmentInfo";
import { useEffect } from "react";
import { ApartmentContext } from "../../store/ApartmentsContext";

const MapScreen = ({ navigation }) => {
  const [selectedApartment, setSelectedApartment] = useState(null);

  const { apartments, setApartments, setApartment } =
    React.useContext(ApartmentContext);

  const initialCoord = {
    latitude: 52.520008,
    longitude: 13.404954,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const getApartmentDetails = (id) => {
    setSelectedApartment(apartments.find((el) => el.id === id));
    fetch(`https://api.limehome.com/properties/v1/public/properties/${id}`)
      .then((response) => response.json())
      .then((data) => setApartment(data.payload));
  };

  useEffect(() => {
    fetch(
      "https://api.limehome.com/properties/v1/public/properties/?cityId=32&adults=1"
    )
      .then((response) => response.json())
      .then((data) => setApartments(data.payload));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <MapView
        initialRegion={initialCoord}
        userInterfaceStyle="light"
        style={styles.map}
      >
        {apartments.map(({ id, location }) => {
          return (
            <Marker
              onPress={() => {
                getApartmentDetails(id);
              }}
              key={id}
              coordinate={{ latitude: location.lat, longitude: location.lng }}
            >
              <View style={styles.markerContainer}>
                <View
                  style={[
                    styles.marker,
                    id === selectedApartment?.id && styles.selectedMarker,
                  ]}
                >
                  <Text style={styles.markerText}>55€</Text>
                </View>
                <View
                  style={[
                    styles.pointer,
                    id === selectedApartment?.id && styles.selectedPointer,
                  ]}
                />
              </View>
            </Marker>
          );
        })}
      </MapView>

      {selectedApartment && <ApartmentInfo apartment={selectedApartment} />}
    </SafeAreaView>
  );
};

export default MapScreen;
