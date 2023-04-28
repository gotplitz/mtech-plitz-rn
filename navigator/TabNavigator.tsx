import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

// Screens
import MainPage from '@screens/MainPage';
import CoursesScreen from '@screens/CoursesScreen';
import ProjectsScreen from '@screens/ProjectsScreen';

const Tabs = createBottomTabNavigator();

type TabNavigatorProps = {};
interface ThemeProps {
	secondaryColor?: string;
	accentColor?: string;
}

const TabNavigator = (props: TabNavigatorProps) => {
	const theme: ThemeProps = useTheme();

	// Set colors for icons from theme
	const activeColor = theme.secondaryColor;
	const inactiveColor = theme.accentColor;

	return (
		<Tabs.Navigator>
			<Tabs.Screen
				name='MainPage'
				component={MainPage}
				options={{
					headerShown: false,
					tabBarLabel: 'Home',
					tabBarIcon: ({ focused }) => {
						return (
							<Ionicons
								name='ios-home'
								size={26}
								color={focused ? activeColor : inactiveColor}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='Courses'
				component={CoursesScreen}
				options={{
					headerShown: false,
					tabBarLabel: 'Courses',
					tabBarIcon: ({ focused }) => {
						return (
							<Ionicons
								name='ios-albums'
								size={26}
								color={focused ? activeColor : inactiveColor}
							/>
						);
					},
				}}
			/>
			<Tabs.Screen
				name='Projects'
				component={ProjectsScreen}
				options={{
					headerShown: false,
					tabBarLabel: 'Projects',
					tabBarIcon: ({ focused }) => {
						return (
							<Ionicons
								name='ios-folder'
								size={26}
								color={focused ? activeColor : inactiveColor}
							/>
						);
					},
				}}
			/>
		</Tabs.Navigator>
	);
};

export default TabNavigator;
