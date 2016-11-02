import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import Button from '../components/Button';
import ScalingButton from '../components/ScalingButton';
import StatefulButton from '../components/StatefulButton';

export default class ButtonsPage extends Component {
	press() {
		//do anything you want
	}

	render() {
		return (
			<View style={styles.container}>
				<Button 
					underlayColor={'#ccc'} 
					label="Ordinary Button" 
					onPress={this.press.bind(this)}
					styles={{button: styles.ordinary_button, label: styles.button_label}} />

				<ScalingButton 
					label="Scaling Button" 
					onPress={this.press.bind(this)}
					styles={{button: styles.animated_button, label: styles.button_label}}
					 />

				<StatefulButton 
					label="Stateful Button" 
					onPress={this.press.bind(this)}
					styles={{button: styles.stateful_button, label: styles.button_label}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		padding: 30
	},
	ordinary_button: {
		backgroundColor: '#4caf50',
	},
	animated_button: {
		backgroundColor: '#ff5722'	
	},
	button_label: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold'
	}
});