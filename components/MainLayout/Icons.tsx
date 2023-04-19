import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

interface IconsGlobal extends SvgProps {
	color?: string;
}

export const NotificationsIcon = (props: IconsGlobal) => (
	<Svg
		width={24}
		height={24}
		fill='none'
		{...props}
	>
		<G
			fill={props.color}
			clipPath='url(#a)'
		>
			<Path d='M20 10V8A8 8 0 0 0 4 8v2a4.441 4.441 0 0 1-1.547 3.193A4.183 4.183 0 0 0 1 16c0 2.5 4.112 4 11 4s11-1.5 11-4a4.183 4.183 0 0 0-1.453-2.807A4.44 4.44 0 0 1 20 10ZM9.145 21.9a2.992 2.992 0 0 0 5.71 0c-.894.066-1.844.1-2.855.1s-1.961-.032-2.855-.1Z' />
		</G>
		<Defs>
			<ClipPath id='a'>
				<Path
					fill='#fff'
					d='M0 0h24v24H0z'
				/>
			</ClipPath>
		</Defs>
	</Svg>
);

export const CloseIcon = (props: IconsGlobal) => (
	<Svg
		viewBox='0 0 384 512'
		width={24}
		height={24}
		fill={props.color}
		{...props}
	>
		<Path d='M324.5 411.1c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L214.6 256l132.5-132.5c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L192 233.4 59.5 100.9c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L169.4 256 36.9 388.5c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6l132.5 132.5z' />
	</Svg>
);
