import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import SectionScreen from '@screens/SectionScreen';
import TabNavigator from './TabNavigator';

// Create Navigation
const ScreensStack = createStackNavigator();

type NavigationProps = {};

const AppNavigator = (props: NavigationProps) => {
	return (
		<ScreensStack.Navigator>
			<ScreensStack.Screen
				name='Home'
				component={TabNavigator}
				options={{
					headerShown: false,
				}}
			/>
			<ScreensStack.Screen
				name='Section Screen'
				component={SectionScreen}
				options={{
					presentation: 'card',
					headerShown: false,
				}}
			/>
		</ScreensStack.Navigator>
	);
};

export default AppNavigator;
