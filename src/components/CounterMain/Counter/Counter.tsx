import React from 'react';
import s from './Counter.module.css';

type CounterPropsType = {
	error: boolean;
	count: number;
	minCount: number;
	maxCount: number;
	countInc: () => void;
	countReset: () => void;
};

export const Counter: React.FC<CounterPropsType> = ({
	error,
	count,
	minCount,
	maxCount,
	countInc,
	countReset,
}) => {
	return (
		<div className={s.main}>
			<div className={`${s.counter} ${count === maxCount ? s.end : ''}`}>
				{count}
			</div>
			<div className={'buttons'}>
				<button
					className={'button'}
					onClick={countInc}
					disabled={count === maxCount || error}
				>
					inc
				</button>
				<button
					className={'button'}
					onClick={countReset}
					disabled={count === minCount || error}
				>
					reset
				</button>
			</div>
		</div>
	);
};
