import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Details({ navigation }) {
  return (
    <View>
      <Image source={require("../../assets/Media.png")} />
      <View style={styles.infoContainer}>
        <Text preset="h2" style={{ color: colors.navyBlue }}>
          Boston Lettuce
        </Text>

        <View style={styles.price}>
          <Text preset="h2" style={{ color: colors.navyBlue }}>
            1.10
          </Text>
          <Text preset="h3" style={{ color: colors.mateGrey, marginLeft: 15 }}>
            € / piece
          </Text>
        </View>

        <Text
          preset="h4"
          style={{ color: colors.mateGreen, marginVertical: 6 }}
        >
          ~ 150 gr / piece
        </Text>

        <Text preset="h4" style={{ color: colors.navyBlue, marginTop: 20 }}>
          Spain
        </Text>
        <Text preset="h4" style={styles.details}>
          Lettuce is an annual plant of the daisy family, Asteraceae. It is most
          often grown as a leaf vegetable, but sometimes for its stem and seeds.
          Lettuce is most often used for salads, although it is also seen in
          other kinds of food, such as soups, sandwiches and wraps; it can also
          be grilled.
        </Text>

        <View style={styles.btnContainer}>
          <View style={styles.fvrtBtn}>
            <MaterialIcons name="favorite-outline" size={24} color="black" />
          </View>
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={styles.addToCart}
          >
            <Text preset="h4" style={styles.button}>
              Add To Cart
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    backgroundColor: colors.gray,
    padding: spacing[5],
    borderRadius: 30,
  },
  price: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  details: {
    color: colors.mateGrey,
    marginVertical: spacing[4],
  },
  btnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addToCart: {
    backgroundColor: colors.mateGreen,
    width: 250,
    alignItems: "center",
    padding: spacing[3],
    borderRadius: 10,
    marginTop: 20,
  },
  button: {
    color: colors.white,
    textTransform: "uppercase",
  },
  fvrtBtn: {
    marginTop: 20,
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
});
