import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  ScrollView,
  RefreshControl
} from 'react-native';

import NewsItem from '../components/NewsItem';

export default class NewsPage extends Component {

	constructor(props) {
		super(props);
		this.opacityValue = new Animated.Value(0);
		this.state = {
			is_news_refreshing: false,
			news_items: [
				{
					title: 'CTO Mentor Network – a virtual peer-to-peer network of CTOs',
					website: 'ctomentor.network',
					url: 'https://ctomentor.network/'
				},
				{
					title: 'The No More Ransom Project',
					website: 'nomoreransom.org',
					url: 'https://www.nomoreransom.org/'
				},
				{
					title: 'NASA Scientists Suggest We’ve Been Underestimating Sea Level Rise',
					website: 'vice.com',
					url: 'http://motherboard.vice.com/read/nasa-scientists-suggest-weve-been-underestimating-sea-level-rise'
				},
				{
					title: 'Buttery Smooth Emacs',
					website: 'facebook.com',
					url: 'https://www.facebook.com/notes/daniel-colascione/buttery-smooth-emacs/10155313440066102/'
				},
				{
					title: 'Elementary OS',
					website: 'taoofmac.com',
					url: 'http://taoofmac.com/space/blog/2016/10/29/2240'
				},
				{
					title: 'The Strange Inevitability of Evolution',
					website: 'nautil.us',
					url: 'http://nautil.us/issue/41/selection/the-strange-inevitability-of-evolution-rp'
				},
			]
		}
	}

	opacity() {
		this.opacityValue.setValue(0);
		Animated.timing(
		  this.opacityValue,
		  {
		    toValue: 1,
		    duration: 3500,
		    easing: Easing.linear
		  }
		).start();
	}

	renderNewsItems() {
		return this.state.news_items.map((news, index) => {
			return (
				<NewsItem key={index} index={index} news={news} />
			);
		});
	}

	refreshNews() {
		this.opacity();
		this.setState({is_news_refreshing: true});
		setTimeout(() => {
			this.setState({is_news_refreshing: false});
		}, 3000);
	}

	render() {

		const opacity = this.opacityValue.interpolate({
		  inputRange: [0, 0.5, 1],
		  outputRange: [1, 0, 1]
		});

		return (
			<View style={styles.container}>
				<View style={styles.header}>
				</View>
				<ScrollView 
					refreshControl={
						<RefreshControl
							colors={['#1e90ff']}
			            	refreshing={this.state.is_news_refreshing}
			            	onRefresh={this.refreshNews.bind(this)}
			          	/>
					}
					style={styles.news_container}>
					<Animated.View style={[{opacity}]}>
						{ this.renderNewsItems() }
					</Animated.View>
				</ScrollView>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		backgroundColor: '#FFF',
		padding: 20,
		justifyContent: 'space-between',
		borderBottomColor: '#E1E1E1',
		borderBottomWidth: 1
	},
	news_container: {
		flex: 1,
	}
});