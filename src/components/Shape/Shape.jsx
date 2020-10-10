import React from 'react';
import { Rectangle, Circle, Ellipse, Triangle } from 'react-shapes';
import './Shape.scss';

const Shape = ({ shape, color, size, isActive = false }) => {
	let perimeter = size === 'lg' ? 200 : 30;
	if (isActive) perimeter -= 4; // 4px will be reserved for border width

	const getColor = () => {
		switch (color) {
			case 'red':
				return '#ea3323';
			case 'blue':
				return '#5197f7';
			case 'green':
				return '#62c654';
			case 'yellow':
				return '#edcb59';
			case 'purple':
				return '#76147b';
			default:
				return '#000000';
		}
	};

	switch (shape) {
		case 'square':
			return (
				<Rectangle
					width={perimeter}
					height={perimeter}
					fill={{ color: getColor() }}
					stroke={{ color: '#000000' }}
					strokeWidth={isActive ? 2 : 0}
				/>
			);
		case 'round':
			return <Circle r={perimeter / 2} fill={{ color: getColor() }} />;
		case 'triangle':
			return (
				<Triangle
					width={perimeter}
					height={perimeter}
					fill={{ color: getColor() }}
					stroke={{ color: '#000000' }}
					strokeWidth={isActive ? 2 : 0}
				/>
			);
		case 'oval':
			return (
				<Ellipse
					rx={perimeter / 2}
					ry={perimeter / 2.5}
					fill={{ color: getColor() }}
					stroke={{ color: '#000000' }}
					strokeWidth={isActive ? 2 : 0}
				/>
			);
		case 'rectangle':
			return (
				<Rectangle
					width={perimeter}
					height={perimeter / 1.5}
					fill={{ color: getColor() }}
					stroke={{ color: '#000000' }}
					strokeWidth={isActive ? 2 : 0}
				/>
			);
		default:
			return null;
	}
};

export default Shape;
