import React from 'react';

type CounterPropsType = {
	count: number;
	maxCount: number;
	countInc: () => void;
	countReset: () => void;
};

export const Counter: React.FC<CounterPropsType> = ({
	count,
	maxCount,
	countInc,
	countReset,
}) => {
	return (
		<div className={'main'}>
			<div className={`counter ${count === maxCount ? 'end' : ''}`}>
				{count}
			</div>
			<div className={'buttons'}>
				<button
					className={'button'}
					onClick={countInc}
					disabled={count === maxCount}
				>
					inc
				</button>
				<button
					className={'button'}
					onClick={countReset}
					disabled={count === 0}
				>
					reset
				</button>
			</div>
		</div>
	);
};
