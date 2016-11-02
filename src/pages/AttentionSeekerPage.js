import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import ScalingButton from '../components/ScalingButton';

var animations = [
  ['bounce', '#62B42C'],
  ['flash', '#316BA7'],
  ['jello', '#A0A0A0'],
  ['pulse', '#FFC600'],
  ['rotate', '#1A7984'],
  ['rubberBand', '#435056'],
  ['shake', '#FF6800'],
  ['swing', '#B4354F'],
  ['tada', '#333333']
];

export default class AttentionSeekerPage extends Component {

  stopAnimation(animation) {
    this.refs[animation].stopAnimation();
  }

  renderBoxes(start) {
    var selected_animations = animations.slice(start, start + 3);
    return selected_animations.map((animation, index) => {
      return (

        <ScalingButton 
          key={index}
          onPress={this.stopAnimation.bind(this, animation[0])} 
          noDefaultStyles={true}
        >
          <Animatable.View 
            ref={animation[0]}
            style={[styles.box, { backgroundColor: animation[1] }]}
            animation={animation[0]} 
            iterationCount={"infinite"}>
            <Text style={styles.box_text}>{ animation[0] }</Text>
          </Animatable.View>
        </ScalingButton>

      );
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.row}>
          { this.renderBoxes(0) }
        </View>

        <View style={styles.row}>
          { this.renderBoxes(3) }
        </View>

        <View style={styles.row}>
          { this.renderBoxes(6) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    backgroundColor: '#ccc'
  },
  box_text: {
    color: '#FFF'
  }
});