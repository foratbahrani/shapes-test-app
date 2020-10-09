import React from 'react';
import { Rectangle, Circle, Ellipse, Triangle } from 'react-shapes';
import './Shape.scss';

const Shape = ({ shape, color, size }) => {
	const perimeter = size === 'lg' ? 100 : 30;

	switch (shape) {
		case 'square':
			return (
				<Rectangle
					width={perimeter}
					height={perimeter}
					fill={{ color: color }}
				/>
			);
		case 'round':
			return <Circle r={perimeter / 2} fill={{ color: color }} />;
		case 'triangle':
			return (
				<Triangle
					width={perimeter}
					height={perimeter}
					fill={{ color: color }}
				/>
			);
		case 'oval':
			return (
				<Ellipse
					rx={perimeter / 2}
					ry={perimeter / 2.5}
					fill={{ color: color }}
				/>
			);
		case 'rectangle':
			return (
				<Rectangle
					width={perimeter}
					height={perimeter / 1.5}
					fill={{ color: color }}
				/>
			);
		default:
			return null;
	}
};

export default Shape;
