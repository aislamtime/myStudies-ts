import React, { useState } from 'react';
import s from './CounterMain.module.css';
import { Counter } from './Counter/Counter';
import { SetCounter } from './SetCounter/SetCounter';

export function CounterMain() {
	let [count, setCount] = useState<number>(0);
	let [maxCount, setMaxCount] = useState(5);
	let [minCount, setMinCount] = useState(0);
	let [error, setError] = useState(false);

	const countInc = () => setCount((count += 1));
	const countReset = () => setCount(0);

	const changeMaxCount = (newMaxCount: number) => setMaxCount(newMaxCount);
	const changeStartCount = (newMinCount: number) => setMinCount(newMinCount);

	return (
		<div className={s.counterWrap}>
			<SetCounter
				minCount={minCount}
				maxCount={maxCount}
				changeMaxCount={changeMaxCount}
				changeStartCount={changeStartCount}
			/>
			<Counter
				count={count}
				maxCount={maxCount}
				countInc={countInc}
				countReset={countReset}
			/>
		</div>
	);
}
