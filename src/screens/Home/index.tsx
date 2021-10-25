import { View } from 'react-native';
import { Header } from '../../components/Header';
import React from 'react';
import styles from './styles';
import { MessageList } from '../../components/MessageList';
import { SignInBox } from '../../components/SignInBox';

export function Home() {
	return(
		<View style={styles.container}>
			<Header />
			<MessageList />
			<SignInBox />
		</View>
	);
}