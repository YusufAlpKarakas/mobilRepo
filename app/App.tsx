import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Kutuphane from './(tabs)/kutuphane'; // Kutuphane sayfasını içe aktar
import UrunDetay from './UrunDetay'; // UrunDetay sayfasını içe aktar

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Kutuphane"
          component={Kutuphane}
          options={{ title: 'Kitaplar' }}
        />
        <Stack.Screen
          name="UrunDetay"
          component={UrunDetay}
          options={({ route }) => ({
            title: route?.params?.product?.name || 'Ürün Detay',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
