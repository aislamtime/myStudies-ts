import React, { useState } from 'react';
import s from './Counter.module.css';

export function Counter() {
	let [counter, setCounter] = useState<number>(0);
	let [end, setEnd] = useState<boolean>(false);
	let [disable, setDisable] = useState<boolean>(false);

	const maxCount = 10;

	const onIncClickHandler = () => {
		if (counter < maxCount - 1) {
			setCounter((counter += 1));
			setDisable(true);
		} else if (counter === maxCount - 1) {
			setCounter((counter += 1));
			setEnd(true);
			setDisable(true);
		}
	};
	const onResetClickHandler = () => {
		setCounter(0);
		setEnd(false);
		setDisable(false);
	};

	return (
		<div className={s.counterWrap}>
			<div className={s.main}>
				<div className={`${s.counter} ${end ? s.end : ''}`}>{counter}</div>
				<div className={s.buttons}>
					<div
						className={`${s.button} ${counter === maxCount ? s.disabled : ''}`}
						onClick={onIncClickHandler}
					>
						inc
					</div>
					<div
						className={`${s.button} ${disable ? '' : s.disabled}`}
						onClick={onResetClickHandler}
					>
						reset
					</div>
				</div>
			</div>
		</div>
	);
}
