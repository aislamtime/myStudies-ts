import React from 'react';
import s from './Counter.module.css';

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
		<div className={s.main}>
			<div className={`${s.counter} ${count === maxCount ? s.end : ''}`}>
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
