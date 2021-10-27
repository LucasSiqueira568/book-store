import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import { MaterialIcons,  Entypo, Feather  } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../theme/theme";

export default function Details({ navigation, route }) {
  const book = route.params;
  const [icon, setIcon] = useState(true)
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
        }}
      >
          <Image
            source={{ uri: book.url }}
            style={{ width: "100%", height: "100%", position: "relative" }}
            resizeMode="cover"
          />
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          }}
        ></View>
        <View style={{ top: 20, position: "absolute",}}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            // top: 20,
            position: "relative",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" color={COLORS.secondary} size={35} style={{ marginLeft: 15 }}/>
          </TouchableOpacity>

          <Text style={{ fontSize: SIZES.body2, marginLeft: 90 , color: COLORS.secondary }}>Detalhes do Livro</Text>

          <TouchableOpacity onPress={() => setIcon(!icon)}>
              {
                  icon ? ( <Entypo name="heart" color={COLORS.secondary} size={35} style={{ marginRight: 15, marginLeft: 95}} />
                  ) : (<Entypo name="heart-outlined" color={COLORS.secondary} size={35} style={{ marginRight: 15, marginLeft: 95}} />
                  )}
          </TouchableOpacity>
        </View>
        </View>
        <View
          style={{justifyContent: "center", alignItems: "center", width: "100%", height: "60%",position: "absolute",}}>
          <Image source={{ uri: book.url }} style={{ width: 150, height: 220, marginTop: 20 }} resizeMode="contain" />
          {/* View para Nome e preço do livro */}
          <View
            style={{marginTop: 10,}}>
            <Text style={{ color: COLORS.secondary, fontSize: SIZES.body2}}>{book.name}</Text>
            <Text style={{ color: COLORS.secondary, fontSize: SIZES.body3, textAlign: 'center'}}>R$ {book.price.toFixed(2).replace(".", ",")}</Text>
          </View>
        </View>

        {/* View de descrição dos livros */}

        <View style={{
            width: '100%',
            height: '45%',
            backgroundColor: COLORS.black,
            position: 'absolute',
            bottom: 0,
            right: 0,
            left: 0,
        }}>
            <View>
                <Text style={{color: COLORS.secondary, fontSize: SIZES.body2, marginLeft: 15, marginTop: 15}}>Descrição</Text>
                <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                
                contentContainerStyle={{
                  // backgroundColor: COLORS.start
                }}>
                    <Text style={{color: COLORS.grey, fontSize: SIZES.body4, marginLeft: 15, marginRight: 15, marginTop: 5, backfaceVisibility: 'visible'}}>{book.description}</Text>
                </ScrollView>
            </View>
            {/* <View style={{width: '100%', height: 80, alignItems: "center", flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity style={{width: 70, height: 70, backgroundColor: COLORS.grey, borderRadius: 10, alignItems: "center", justifyContent: 'center', marginLeft: 15, marginTop: 10}}>
                <Feather name="bookmark" color={COLORS.secondary} size={SIZES.body1}/>
            </TouchableOpacity>

            <TouchableOpacity style={{width: 180, height: 70, backgroundColor: COLORS.primary, borderRadius: 10, alignItems: "center", justifyContent: 'center', marginRight: 15, marginTop: 10}}>
                <Text style={{fontSize: SIZES.body3, color: COLORS.secondary, fontWeight: "bold"}}>Comprar</Text>
            </TouchableOpacity>
            </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
}
