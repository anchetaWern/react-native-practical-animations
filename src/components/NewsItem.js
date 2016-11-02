import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from './Button';

const NewsItem = ({ news, index }) => {

	function onPress(news) {
		//do anything you want
	}
	
	return (
		<Button
			key={index}
			noDefaultStyles={true}
			onPress={onPress.bind(this, news)}
		>
			<View style={styles.news_item}>
				<Text style={styles.title}>{news.title}</Text>
				<Text>{news.website}</Text>
			</View>
		</Button>
	);
}

const styles = StyleSheet.create({
	news_item: {
		flex: 1,
		flexDirection: 'column',
		paddingRight: 20,
		paddingLeft: 20,
		paddingTop: 30,
		paddingBottom: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#E4E4E4'
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold'
	}
});

export default NewsItem;