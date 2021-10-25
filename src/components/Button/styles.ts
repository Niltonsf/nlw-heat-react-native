import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
	button: {
		width: '100%',
		height: 48,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
	},
	title: {
		fontSize: 14,
		fontFamily: FONTS.BOLD
	},
	icon: {
		marginRight: 12
	}
});