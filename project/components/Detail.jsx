import React, { useEffect } from "react";
import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchOne } from "../store/actions";
import MapView from "react-native-maps";

function Detail({ route }) {
  const dispatch = useDispatch();
  const oneDoctor = useSelector((state) => state.reducer.dataOneDoctor);
  const id = route.params;

  useEffect(() => {
    dispatch(fetchOne(id));
  }, [dispatch]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {oneDoctor ? (
        <View style={styles.rowStyle}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.picture} source={oneDoctor.foto} />
            <View style={{ marginLeft: 10 }}>
              <Text>{oneDoctor.rekomendasi}</Text>
              <Text>Recommendations</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text>{oneDoctor.nama}</Text>
            <Text>{oneDoctor.daerah}</Text>
            <Text>{oneDoctor.profesi}</Text>
            <Text>{oneDoctor.jasa}</Text>
            <Text>{oneDoctor.bio}</Text>
          </View>
        </View>
      ) : null}
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "column",
  },
  picture: {
    width: 50,
    height: 50,
  },
});

export default Detail;
