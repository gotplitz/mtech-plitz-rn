import React, { useEffect, useState } from 'react';
import {
	Alert,
	Animated,
	Dimensions,
	Keyboard,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import { BlurView } from 'expo-blur';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@myReduxConf/store';
import { closeLogin } from '@myReduxConf/actions/globalActions';

// Styles
import {
	AnimatedLoginContainer,
	AnimatedModal,
	ButtonText,
	IconEmail,
	IconLock,
	Logo,
	SubmitButton,
	TextInput,
	TextIntro,
} from '@styles/ModalLoginStyles';

// Firebase
import { firebaseAuth } from '@libs/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Static Assets
import LogoPlitz from '@assets/plitz-sq-logo-rounded.jpg';
import IconEmailSvg from '@assets/envelope-solid.png';
import IconEmailFocused from '@assets/envelope-open-text-solid.png';
import IconLockSvg from '@assets/lock-solid.png';
import IconLockFocused from '@assets/unlock-solid.png';
import Success from './Success';
import Loading from './Loading';

type ModalLoginProps = {};

const ModalLogin = (props: ModalLoginProps) => {
	const screenHeight = Dimensions.get('window').height;

	const [top] = useState(new Animated.Value(screenHeight));
	const [scale] = useState(new Animated.Value(1.3));
	const [translateY] = useState(new Animated.Value(0));

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [iconEmail, setIconEmail] = useState(IconEmailSvg);
	const [iconLock, setIconLock] = useState(IconLockSvg);
	const [isSuccessful, setIsSuccessful] = useState(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const { openLogin } = useSelector((state: RootState) => state.globalReducer);
	const dispatch: AppDispatch = useDispatch();

	const handleLogin = () => {
		setIsLoading(true);

		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then((response) => {
				setIsLoading(false);
				if (response) {
					setIsSuccessful(true);

					setTimeout(() => {
						dispatch(closeLogin());
						setIsSuccessful(false);
					}, 2000);
				}
			})
			.catch((error) => {
				const errorCode = error.code && 'Authentication Failed';
				const errorMessage = error.code.includes('invalid')
					? 'The information you entered is invalid'
					: 'You entered the wrong information';

				Alert.alert(errorCode, errorMessage);

				setTimeout(() => {
					setIsLoading(false);
				}, 2000);
			});
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
		dispatch(closeLogin());
	};

	useEffect(() => {
		if (openLogin) {
			Animated.timing(top, {
				toValue: 0,
				duration: 0,
				useNativeDriver: false,
			}).start();

			Animated.spring(scale, {
				toValue: 1,
				useNativeDriver: false,
			}).start();

			Animated.timing(translateY, {
				toValue: 0,
				duration: 0,
				useNativeDriver: false,
			}).start();
		}

		if (!openLogin) {
			setTimeout(() => {
				Animated.timing(top, {
					toValue: screenHeight,
					duration: 0,
					useNativeDriver: false,
				}).start();

				Animated.spring(scale, {
					toValue: 1.3,
					useNativeDriver: false,
				}).start();
			}, 500);

			Animated.timing(translateY, {
				toValue: 1000,
				duration: 500,
				useNativeDriver: false,
			}).start();
		}
	}, [openLogin]);

	return (
		<AnimatedLoginContainer style={{ top }}>
			<TouchableWithoutFeedback onPress={tapBrackground}>
				<BlurView
					tint='default'
					intensity={100}
					style={{ position: 'absolute', width: '100%', height: '100%' }}
				/>
			</TouchableWithoutFeedback>
			<AnimatedModal style={{ transform: [{ scale }, { translateY }] }}>
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
			</AnimatedModal>
			<Success isActive={isSuccessful} />
			<Loading isActive={isLoading} />
		</AnimatedLoginContainer>
	);
};

export default ModalLogin;
