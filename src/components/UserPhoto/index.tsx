import React from 'react';
import {
	Image
} from 'react-native';
import { styles } from './styles';
import AvatarDefaultImg from '../../assets/avatar.png';

const Sizes = {
	Small: {
		containerSize: 32,
		avatarSize: 28
	},
	Normal: {
		containerSize: 48,
		avatarSize: 42
	}
}

interface UserPhotoProps {
	imageUri: string | undefined;
	sizes?: 'Small' | 'Normal';
}

export function UserPhoto({ imageUri, sizes = 'Normal' }: UserPhotoProps){

	const { containerSize, avatarSize } = Sizes[sizes];

	const AvatarDefault = Image.resolveAssetSource(AvatarDefaultImg).uri;

	return (
		<Image 
			source={{ uri: imageUri || AvatarDefault }}
			style={[
				styles.avatar,
				{
					width: avatarSize,
					height: avatarSize,
					borderRadius: avatarSize / 2,
				}
			]}
		/>
	);
}