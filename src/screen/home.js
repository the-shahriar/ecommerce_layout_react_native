import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/D.png")} />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.vector}>
          <Image source={require("../../assets/Vector.png")} />
        </View>
        <Text preset="h2" style={{ color: colors.navyBlue }}>
          Non - Contact
        </Text>
        <Text preset="h2" style={{ color: colors.navyBlue }}>
          Deliveries
        </Text>
        <Text preset="h4" style={styles.details}>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>
        <Pressable
          onPress={() => {
            navigation.navigate("Details");
          }}
          style={styles.buttonContainer}
        >
          <Text preset="h4" style={styles.button}>
            Order Now
          </Text>
        </Pressable>
        <Text
          preset="h5"
          style={{ color: colors.mateGrey, marginTop: 20, fontSize: 16 }}
        >
          DISMISS
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
  logoContainer: {
    marginTop: 100,
    left: 25,
    backgroundColor: colors.white,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  infoContainer: {
    marginTop: 130,
    height: 550,
    backgroundColor: colors.gray,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing[8],
  },
  vector: {
    backgroundColor: colors.white,
    padding: spacing[4],
    borderRadius: 50,
  },
  details: {
    color: colors.mateGrey,
    textAlign: "center",
    marginVertical: spacing[4],
  },
  buttonContainer: {
    backgroundColor: colors.mateGreen,
    width: 250,
    alignItems: "center",
    padding: spacing[3],
    borderRadius: 10,
    marginTop: 60,
  },
  button: {
    color: colors.white,
    textTransform: "uppercase",
  },
});
