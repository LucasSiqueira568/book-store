import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Octicons } from '@expo/vector-icons'
import { styles } from "./style";
import { Header } from "../../components/Header";
import { COLORS, SIZES } from "../../theme/theme";
import { books, books_recomend } from "../../../data/books";

export default function Home({ navigation }) {
  const CardBook = ({ book }) => {
    return (
      <View>
        <TouchableOpacity
          style={{ marginLeft: 15, marginTop: 10 }}
          onPress={() => navigation.navigate("Details", book)}
        >
          <Image
            source={{ uri: book.url }}
            style={{ width: 130, height: 200, borderRadius: 10 }}
          />
          <Text
            style={{
              fontSize: SIZES.body5,
              fontFamily: "Roboto_400Regular",
              marginTop: 5,
            }}
          >
            {book.name}
          </Text>
          <Text
            style={{
              fontSize: SIZES.body3,
              fontWeight: "bold",
            }}
          >
            R$ {book.price.toFixed(2).replace(".", ",")}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const CardsRecommended = ({ book }) => {
    return (
      <View style={{paddingLeft: 15, flex: 1, height: '50%'}} >
      <TouchableOpacity style={{flexDirection: 'row', marginBottom: 15}} onPress={() => navigation.navigate("Details", book)}>
        <Image source={{ uri: book.url }} style={{width: 100, height: 170, borderRadius: 10}} resizeMode="contain"/>
        <View style={{marginLeft: 5, paddingTop: 10, flexWrap: 'wrap', height: 180, width: '100%'}}>
          <View>
          <Text style={{fontSize: SIZES.body2}}>{book.name}</Text>
          <Text style={{fontSize: SIZES.body3, marginTop: 5, marginBottom: 5}}>R$ {book.price.toFixed(2).replace(".", ",")}</Text>
        </View>
          <View style={{flexDirection: 'row', height: 20, flexWrap: 'wrap'}}>
            <Octicons name="star" color={COLORS.start} size={SIZES.body2}/>
            <Octicons name="star" color={COLORS.start} size={SIZES.body2}/>
            <Octicons name="star" color={COLORS.start} size={SIZES.body2}/>
            <Octicons name="star" color={COLORS.start} size={SIZES.body2}/>
          </View>

        {/* <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', marginLeft: 15}}>
        <Feather name="bookmark" color={COLORS.black} size={SIZES.body1}/>
        </TouchableOpacity> */}
        </View>
      </TouchableOpacity>
    </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{  }}>
        {/* Header da aplicação */}
        <Header />
        <View style={styles.containerCard}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: SIZES.body3,
                marginLeft: 15,
              }}
            >
              Em destaque
            </Text>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  "Desculpe 😪, esta funcionalidade ainda não esta disponível."
                )
              }
            >
              <Text style={{ marginRight: 15, color: COLORS.grey }}>
                Ver todos
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 15,
            }}
            data={books}
            renderItem={({ item }) => {
              return <CardBook book={item} />;
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>

            {/* View com os livros recomendados */}
        <View style={{ height: '50%'}}>
          <View>
            <Text style={{marginLeft: 15, marginTop: 10, fontSize: SIZES.body3}}>Recomendados para você</Text>
          </View>
        <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: 15,
              paddingBottom: 170,
              marginTop: 20,
            }}
            data={books_recomend}
            renderItem={({ item }) => {
              return <CardsRecommended book={item}/>
            }}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
