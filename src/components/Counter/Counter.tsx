import React, { useState } from 'react';
import s from './Counter.module.css';

export function Counter() {
	let [count, setCount] = useState<number>(0);

	const maxCount = 3;

	const countInc = () => setCount((count += 1));
	const countReset = () => setCount(0);

	return (
		<div className={s.counterWrap}>
			<div className={s.main}>
				<div className={`${s.counter} ${count === maxCount ? s.end : ''}`}>
					{count}
				</div>
				<div className={s.buttons}>
					<button
						className={`${s.button}`}
						onClick={countInc}
						disabled={count === maxCount}
					>
						inc
					</button>
					<button
						className={`${s.button}`}
						onClick={countReset}
						disabled={count === 0}
					>
						reset
					</button>
				</div>
			</div>
		</div>
	);
}

//${counter === maxCount ? s.disabled : ''}

//${disable ? '' : s.disabled}
