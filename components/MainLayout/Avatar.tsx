import React, { useEffect, useState } from 'react';

// Redux Stuff
import { useSelector } from 'react-redux';
import { RootState } from '@myReduxConfiguration/store';

// Styling
import { AvatarImage } from '@styles/MainPageStyles';

type Props = {
	source?: string;
	style?: object;
};

const Avatar = (props: Props) => {
	const [photo, setPhoto] = useState(
		'https://thedavid.plitz7.com/uploads/plitz-sq-logo-rounded.jpg'
	);

	const { userInfo } = useSelector((state: RootState) => state.globalReducer);

	useEffect(() => {
		if (userInfo.photo !== '') {
			setPhoto(userInfo.photo);
		}
	}, [userInfo]);

	return (
		<AvatarImage
			source={{ uri: photo }}
			style={props.style}
		/>
	);
};

export default Avatar;
