import { View } from 'react-native';
import { Header } from '../../components/Header';
import React from 'react';
import styles from './styles';

export function Home() {
	return(
		<View style={styles.container}>
			<Header />
		</View>
	);
}