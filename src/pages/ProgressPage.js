import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions
} from 'react-native';

var { width } = Dimensions.get('window');
var available_width = width - 40 - 12;

export default class ProgressPage extends Component {
  
  constructor(props) {
    super(props);
    this.progress = new Animated.Value(0);
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    this.progress.setValue(0);
    this.progress.addListener((progress) => {
      this.setState({
        progress: parseInt(progress.value) + '%'
      });
    });

    Animated.timing(this.progress, {
      duration: 7000,
      toValue: 100
    }).start(() => {
      this.setState({
        progress: 'done!'
      })
    });
  }

  getProgressStyles() {
    var animated_width = this.progress.interpolate({
      inputRange: [0, 50, 100],
      outputRange: [0, available_width / 2, available_width]
    });
   
    const color_animation = this.progress.interpolate({
      inputRange: [0, 50, 100],
      outputRange: ['rgb(199, 45, 50)', 'rgb(224, 150, 39)', 'rgb(101, 203, 25)']
    });

    return {
      width: animated_width,
      height: 50,
      backgroundColor: color_animation
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={styles.progress_container}>
            <Animated.View
              style={[this.getProgressStyles.call(this)]}
            > 
            </Animated.View>
          </View>
          <Text style={styles.progress_status}>
          { this.state.progress }
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  progress_container: {
    borderWidth: 6,
    borderColor: '#333',
    backgroundColor: '#ccc'
  },
  progress_status: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});