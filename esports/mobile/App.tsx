import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return (
    <TouchableOpacity style={styles.button}>
      <Text>
      </Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aoba Pessoar</Text>
      <StatusBar style="auto" backgroundColor='cyan'/>
      <Button title='Olá'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8528ac',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    color:'#fff',
    fontSize: 32,
    fontWeight: 'bold'
  },

  button:{
    margin:'10px',
    color:'#000',
    backgroundColor: '#fff'
  }
});
