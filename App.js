import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import Torch from 'react-native-torch';

const App = () => {
  const [isTorchOn, setIsTorchOn] = useState(false);

  const handlePress = () => {
    Torch.switchState(!isTorchOn);
    setIsTorchOn(!isTorchOn);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperView}>
        <Image
          source={require('./src/assets/images/icon.png')}
          style={styles.iconImage}></Image>
      </View>
      <View style={styles.torchView}>
        <View style={{flex: 0.5}}>
          <Text style={styles.buttonTextStyle}>
            {isTorchOn ? 'ON' : 'OFF'}
          </Text>
        </View>
        <View style={styles.imageButton}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={handlePress}>
            <Image
              source={require('./src/assets/images/Torch.png')}
              style={
                isTorchOn ? styles.torchOnImage : styles.torchOfImage
              }></Image>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282412',
    padding: 20,
  },
  upperView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 50,
  },
  torchView: {
    flex: 3,
    justifyContent: 'center',
  },
  imageButton: {
    flex: 2, 
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  buttonStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 280,
    height: 280,
    borderRadius: 150,
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 30
  },
  torchOnImage: {
    width: 300,
    height: 300
  },
  iconImage: {
    width: 150,
    height: 150,
  },
  torchOfImage: {
    width: 300,
    height: 300,
    opacity: 0.3,
  },
});
