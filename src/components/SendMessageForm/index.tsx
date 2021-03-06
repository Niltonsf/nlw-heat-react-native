import React, { useState } from 'react';
import {
	View,
	TextInput
} from 'react-native';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';

export function SendMessageForm(){

	const [ message, setMessage ] = useState('');
	const [ sendingMessage, setSendingMessage ] = useState(false);

	return (
		<View style={styles.container}>
			<TextInput 
				keyboardAppearance='dark'
				placeholder='What is your expectations?'
				placeholderTextColor={COLORS.GRAY_PRIMARY}
				multiline
				maxLength={140}
				style={styles.textInput}
				onChangeText={setMessage}
				value={message}
				editable={!sendingMessage}
			/>

			<Button title="Send message" backgroundColor={COLORS.PINK} color={COLORS.WHITE}/>
		</View>
	);
}