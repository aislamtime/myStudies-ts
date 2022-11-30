import React, { useState } from 'react';
import s from './CounterMain.module.css';
import { Counter } from './Counter/Counter';
import { SetCounter } from './SetCounter/SetCounter';

export function CounterMain() {
	let [count, setCount] = useState<number>(0);
	let [maxCount, setMaxCount] = useState(5);
	let [minCount, setMinCount] = useState(0);
	let [error, setError] = useState<boolean>(false);

	const countInc = () => setCount((count += 1));
	const countReset = () => setCount(minCount);

	const changeMaxCount = (newMaxCount: number) => {
		if (maxCount <= minCount && !error) {
			setError(true);
			console.log('max if');
		} else {
			console.log('max else');

			setError(false);
			setMaxCount(newMaxCount);
		}
	};
	const changeStartCount = (newMinCount: number) => {
		if (maxCount <= minCount) {
			setError(true);
		} else {
			setError(false);
			setMinCount(newMinCount);
		}
	};

	const changeCounts = () => {
		setCount(minCount);
	};

	return (
		<div className={s.counterWrap}>
			<SetCounter
				error={error}
				minCount={minCount}
				maxCount={maxCount}
				changeCounts={changeCounts}
				changeMaxCount={changeMaxCount}
				changeStartCount={changeStartCount}
			/>
			<Counter
				error={error}
				count={count}
				minCount={minCount}
				maxCount={maxCount}
				countInc={countInc}
				countReset={countReset}
			/>
		</div>
	);
}
