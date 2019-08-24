import React from 'react'
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native'
import DefaultStyles from '../constants/defaultStyles'
import Colors from '../constants/colors';
import MainButton from '../components/MainButton'

const GameOverScreen = ({roundsNum, userNumber, onNewGame}) => {
  return (
      <ScrollView>
        <View style={styles.screen}>
        <Text style={DefaultStyles.title}>Game is Over</Text>
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/success.png')} 
            // source={{uri: 'https://cdn.wccftech.com/wp-content/uploads/2016/01/AMD-Summit-Ridge.jpg'}}
            style={styles.image} 
            resizeMode="cover" 
          />
        </View>
        <Text style={DefaultStyles.bodyText}>Your phone needed <Text style={styles.highlight}>{roundsNum}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text></Text>
        <MainButton onPress={onNewGame} >New Game</MainButton>
      </View>
      </ScrollView>    
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').width * 0.7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height /30
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  }
})

export default GameOverScreen