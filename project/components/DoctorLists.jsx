import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import { fetchDoctor } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

function DoctorLists({ navigation }) {
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.reducer.dataDoctor);
  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    dispatch(fetchDoctor(pagination));
  }, [dispatch, pagination]);

  function toDetail(id) {
    navigation.navigate("Detail", id);
  }

  function prevPage() {
    if (pagination > 0) {
      setPagination(pagination - 1);
    } else {
      Alert.alert("Oops no more page", "no more page, click next");
    }
  }

  function nextPage() {
    setPagination(pagination + 1);
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      {doctors?.map((doctor, index) => (
        <View style={styles.rowStyle} key={index}>
          <TouchableOpacity onPress={() => toDetail(doctor.id)}>
            <Image style={styles.picture} source={doctor.foto} />
          </TouchableOpacity>
          <View style={{ flexDirection: "column", marginBottom: 20 }}>
            <Text>{doctor.nama}</Text>
            <Text>{doctor.daerah}</Text>
            <Text>{doctor.profesi}</Text>
            <Text>{doctor.jasa}</Text>
          </View>
        </View>
      ))}
      <View style={{ flexDirection: "row" }}>
        <Button onPress={prevPage} title="Prev"></Button>
        <View style={{ marginLeft: 5 }}>
          <Button onPress={nextPage} title="Next"></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: "row",
  },
  picture: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
});

export default DoctorLists;
