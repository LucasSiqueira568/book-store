import React from "react";

import { Image, Text, View, StatusBar } from "react-native";
import { MotiView } from "moti";

import { styles } from "./style";
import Button from "../../components/Button";
import { COLORS } from "../../theme/theme";

export default function WellCome({ navigation }) {
  return (
    <MotiView
      style={styles.container}
      from={{
        opacity: 0,
        left: -200,
      }}
      animate={{
        opacity: 1,
        left: 0,
      }}
    >
       <StatusBar backgroundColor="white" barStyle="dark-content" />
      <View style={styles.containerText}>
        <Image
          style={{ width: "100%", height: "60%" }}
          source={require("../../assets/wellcome.png")}
        />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Bem-vindo(a) ao Booklive</Text>
        </View>
        <View style={styles.containerSubtitle}>
          <Text style={styles.subTitle}>
            Chegou a hora de deixar seus livros velhos de lado e vir conferir os
            melhores livros da atualidade
          </Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <MotiView
          style={{ width: "100%", alignItems: "center" }}
          from={{
            opacity: 0,
            left: -200,
          }}
          animate={{
            opacity: 1,
            left: 0,
          }}
          transition={{
            type: "timing",
            duration: 300,
          }}
        >
          <Button
            title="CRIAR MINHA CONTA"
            color={COLORS.secondary}
            backgroundColor={COLORS.primary}
            onPress={() => navigation.navigate("Signup")}
          />
        </MotiView>

        <MotiView
          style={{ width: "100%", alignItems: "center" }}
          from={{
            opacity: 0,
            left: -200,
          }}
          animate={{
            opacity: 1,
            left: 0,
          }}
          transition={{
            type: "timing",
            duration: 400,
          }}
        >
          <Button
            title="LOGIN"
            color={COLORS.black}
            backgroundColor={COLORS.secondary}
            onPress={() => navigation.navigate("Signin")}
          />
        </MotiView>
      </View>
    </MotiView>
  );
}
