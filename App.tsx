
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.contenedor}>
      <StatusBar
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />

      <View style={styles.encabezado}>
        <Text style={styles.titulo}>
          🍔 Menú de Pedidos SENA
        </Text>
      </View>

      <ScrollView contentContainerStyle={styles.contenido}>

        <View style={styles.tarjeta}>
          <Text style={styles.nombreProducto}>
            Hamburguesa Artesanal
          </Text>

          <Text style={styles.precio}>
            $ 18.000 COP
          </Text>

          <View style={styles.cantidad}>
            <View style={styles.boton}>
              <Text style={styles.textoBoton}>-</Text>
            </View>

            <Text style={styles.numero}>1</Text>

            <View style={styles.boton}>
              <Text style={styles.textoBoton}>+</Text>
            </View>
          </View>
        </View>

        <View style={styles.tarjeta}>
          <Text style={styles.nombreProducto}>
            Pizza Personal
          </Text>

          <Text style={styles.precio}>
            $ 15.000 COP
          </Text>

          <View style={styles.cantidad}>
            <View style={styles.boton}>
              <Text style={styles.textoBoton}>-</Text>
            </View>

            <Text style={styles.numero}>1</Text>

            <View style={styles.boton}>
              <Text style={styles.textoBoton}>+</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#eaddff87',
  },

  encabezado: {
    backgroundColor: '#ddcdf388',
    marginTop: 35,
    marginHorizontal: 15,
    paddingVertical: 25,
    alignItems: 'center',
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },

  contenido: {
    padding: 15,
    paddingBottom: 30,
    gap: 20,
  },

  tarjeta: {
    backgroundColor: '#efe7fa89',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ad35fd',
    paddingVertical: 35,
    paddingHorizontal: 15,
    alignItems: 'center',
    minHeight: 280,
    justifyContent: 'center',
  },

  nombreProducto: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 15,
  },

  precio: {
    fontSize: 22,
    color: '#000000',
    marginBottom: 35,
  },

  cantidad: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35,
  },

  boton: {
    backgroundColor: '#26866A',
    width: 70,
    height: 70,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textoBoton: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ffffff',
  },

  numero: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000000',
  },
});
