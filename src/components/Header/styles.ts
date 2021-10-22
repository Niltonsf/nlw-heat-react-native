import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../theme';

export const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20
	},
	logOutButton: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	logoutText: {
		marginRight: 20,
		fontSize: 15,
		fontFamily: FONTS.REGULAR,
		color: COLORS.WHITE,
	}
});