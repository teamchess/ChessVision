import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {ImagePicker} from 'expo';

export default class App extends React.Component {
  state = {
    image: null,
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Pick image"
          onPress={this.pickImage}
        />
        {image && 
         <Image source={{uri: image}} style={{width: 200, heigh: 200}} />}
      </View>
    );
  }
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,  
      aspect: [4,3],
    });
    console.log(result);
    if (!result.cancelled) {
      this.setState({image: result.uri})
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
