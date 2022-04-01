import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.welcome, {flex: 5 ,backgroundColor:'yellow'}]} >React Native</Text>
      <Text style={[styles.welcome, {flex: 4 ,backgroundColor:'red'}]} >React Native</Text>
      <Text style={[styles.welcome, {flex: 3,backgroundColor:'blue'}]} >React Native</Text>
      <Text style={[styles.welcome, {flex: 2 ,backgroundColor:'green'}]} >React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'orange'
  },
  welcome:{
      fontSize: 20,
      textAlign: 'center',
      margin: 10
  },
});
