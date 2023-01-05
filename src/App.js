import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // console.log("Print here!");
  const name = 'Diana';
  return (
    <View style={styles.container}>
      <Text style={{
      backgroundColor: '#eee',
      color: 'blue',
      fontSize: 20,
    }}>Hello, 
        {(() => {
          if (name === 'Diana') return ' Diana';
          else return ' React Native';
        })()}
      </Text>
      {name === 'Diana' && <Text>Welcome to Bookend</Text>}
      {name === 'Diana' || <Text>Congratulation!!</Text>}
      {/* 주석 작성 */}
      <Text	// style={}
      >
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});