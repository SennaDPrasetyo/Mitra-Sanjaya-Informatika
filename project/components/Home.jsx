import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocation } from "../store/actions";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Alert,
  Text,
  TouchableOpacity,
} from "react-native";
import Autocomplete from "react-native-autocomplete-input";

function Home({ navigation }) {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.reducer.dataLocation);
  const [selectedValue, setSelectedValue] = useState({});
  const [filteredLoc, setFilteredLoc] = useState([]);

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);

  const findLocation = (query) => {
    if (query) {
      const regex = new RegExp(`${query.trim()}`, "i");
      setFilteredLoc(
        locations.filter((location) => location.kota.search(regex) >= 0)
      );
    } else {
      setFilteredLoc([]);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Autocomplete
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.autocompleteContainer}
        data={filteredLoc}
        defaultValue={
          JSON.stringify(selectedValue) === "{}" ? "" : selectedValue.title
        }
        onChangeText={(text) => findLocation(text)}
        placeholder="Enter the location"
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setSelectedValue(item);
              setFilteredLoc([]);
            }}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      <View style={styles.fixToText}>
        <Button
          title="Find Doctor"
          onPress={() => navigation.navigate("Lists")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  autocompleteContainer: {
    backgroundColor: "#ffffff",
    borderWidth: 0,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});

export default Home;
