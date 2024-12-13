import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
};

type UrunDetayRouteProp = RouteProp<
  { UrunDetay: { product?: Product } },
  'UrunDetay'
>;

interface UrunDetayProps {
  route?: UrunDetayRouteProp; // Optional olarak işaretleniyor
}

export default function UrunDetay({ route }: UrunDetayProps) {
  const product = route?.params?.product;

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Ürün bilgisi bulunamadı. Lütfen tekrar deneyin.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/kitap.png')} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productCategory}>{`Kategori: ${product.category}`}</Text>
      <Button title="Satın Al" onPress={() => alert('Satın alma işlemi')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productCategory: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
});
