import React, { useState } from 'react';
import {
	Keyboard,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import { BlurView } from 'expo-blur';

// Styles
import {
	ButtonText,
	IconEmail,
	IconLock,
	LoginContainer,
	Logo,
	Modal,
	SubmitButton,
	TextInput,
	TextIntro,
} from '@styles/ModalLoginStyles';

// Static Assets
import LogoPlitz from '@assets/plitz-sq-logo-rounded.jpg';
import IconEmailSvg from '@assets/envelope-solid.png';
import IconEmailFocused from '@assets/envelope-open-text-solid.png';
import IconLockSvg from '@assets/lock-solid.png';
import IconLockFocused from '@assets/unlock-solid.png';

type ModalLoginProps = {};

const ModalLogin = (props: ModalLoginProps) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [iconEmail, setIconEmail] = useState(IconEmailSvg);
	const [iconLock, setIconLock] = useState(IconLockSvg);

	const handleLogin = () => {
		console.log(email, password);
	};

	const focusEmail = () => {
		setIconEmail(IconEmailFocused);
		setIconLock(IconLockSvg);
	};

	const focusPassword = () => {
		setIconEmail(IconEmailSvg);
		setIconLock(IconLockFocused);
	};

	const tapBrackground = () => {
		Keyboard.dismiss();
	};

	return (
		<LoginContainer>
			<TouchableWithoutFeedback onPress={tapBrackground}>
				<BlurView
					tint='default'
					intensity={100}
					style={{ position: 'absolute', width: '100%', height: '100%' }}
				/>
			</TouchableWithoutFeedback>
			<Modal>
				<Logo source={LogoPlitz} />
				<TextIntro>Norm's App. Access Premium Content.</TextIntro>
				<TextInput
					onChangeText={(text) => setEmail(text)}
					placeholder='Email'
					keyboardType='email-address'
					autoComplete='email'
					value={email}
					onFocus={focusEmail}
				/>
				<TextInput
					placeholder='Password'
					secureTextEntry={true}
					autoComplete='password'
					onChangeText={(text) => setPassword(text)}
					value={password}
					onFocus={focusPassword}
				/>
				<IconEmail source={iconEmail} />
				<IconLock source={iconLock} />
				<TouchableOpacity onPress={handleLogin}>
					<SubmitButton>
						<ButtonText>Log In</ButtonText>
					</SubmitButton>
				</TouchableOpacity>
			</Modal>
		</LoginContainer>
	);
};

export default ModalLogin;
