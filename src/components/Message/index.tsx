import React from 'react';

import {
	View,
	Text
} from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export interface MessageProps {
	id: string;
	text: string;
	user: {
		name: string;
		avatar_url: string;
	}
}

interface Props {
	data: MessageProps;
}

export function Message({ data }: Props){
	return (
		<View style={styles.container}>
			<Text style={styles.message}>
				{data.text}
			</Text>

			<View style={styles.footer}>
				<UserPhoto 
					imageUri={data.user.avatar_url}
					sizes='Small'
				/>

				<Text style={styles.userName}>
					{data.user.name}
				</Text>
			</View>
		</View>
	);
}