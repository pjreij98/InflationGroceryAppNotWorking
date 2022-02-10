import { Image, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'Home'>) {
  const onClick = () => {
    navigation.navigate('Item', { itemName: "Steak" });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Pressable style={{borderColor: 'white'}} onPress={onClick}>
        <Image style={{ justifyContent: 'center', width: 407.33, height: 271.33 }} source={{ uri: "https://img.search.brave.com/x0BqOS5mHfy5OMq-muL9frlIsSyEHV_RIfSdyucSOa4/rs:fit:1200:900:1/g:ce/aHR0cHM6Ly9jZG4w/LnZveC1jZG4uY29t/L3RodW1ib3IvQ3l1/WmdYVXVWM0UtUWx0/cTJVZkEtUkx4bVJr/PS8weDIwMjozOTA4/eDI0MDAvMTYwMHg5/MDAvY2RuMC52b3gt/Y2RuLmNvbS91cGxv/YWRzL2Nob3J1c19p/bWFnZS9pbWFnZS81/MzQ2MTQzMy9zaHV0/dGVyc3RvY2tfMTE0/ODI1MzEuMC5qcGc" }} />
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
