import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { DefaultTheme, useTheme } from 'styled-components/native';

// Styles
import {
	IconView,
	ItemText,
	ItemTitle,
	MenuItemContainer,
	MenuItemContent,
} from '@styles/MenuStyles';

interface MenuItemProps {
	icon: any;
	title: string;
	text: string;
}

interface ThemeProps {
	secondaryColor?: string;
}

const MenuItem = (props: MenuItemProps) => {
	const theme: ThemeProps = useTheme();

	return (
		<MenuItemContainer>
			<IconView>
				<Ionicons
					name={props.icon}
					size={24}
					color={theme.secondaryColor}
				/>
			</IconView>
			<MenuItemContent>
				<ItemTitle>{props.title}</ItemTitle>
				<ItemText>{props.text}</ItemText>
			</MenuItemContent>
		</MenuItemContainer>
	);
};

export default MenuItem;
