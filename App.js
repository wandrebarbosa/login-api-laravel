import { StyleSheet, View } from 'react-native';
import SignIn from './src/Login/';
import Title from './src/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <SignIn />
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
