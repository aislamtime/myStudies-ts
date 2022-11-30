import React, { ChangeEvent } from 'react';
import s from './SetCounter.module.css';

type SetCountPropsType = {
	maxCount: number;
	minCount: number;
	changeMaxCount: (newMaxCount: number) => void;
	changeStartCount: (newCount: number) => void;
};

export const SetCounter: React.FC<SetCountPropsType> = ({
	maxCount,
	minCount,
	changeMaxCount,
	changeStartCount,
}) => {
	const maxInputRef = React.createRef<HTMLInputElement>();
	const minInputRef = React.createRef<HTMLInputElement>();

	const SetCountsHandler = () => {};

	const onMaxCountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		changeMaxCount(JSON.parse(e.currentTarget.value));
	};
	const onMinCountChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		changeStartCount(JSON.parse(e.currentTarget.value));
	};

	return (
		<div className={s.main}>
			<div className={'counter'}>
				<div className={s.inputBlock}>
					Max Value:{' '}
					<input
						className={s.input}
						type='number'
						value={maxCount}
						onChange={onMaxCountChangeHandler}
						ref={maxInputRef}
					/>
				</div>
				<div className={s.inputBlock}>
					Min Value:{' '}
					<input
						className={s.input}
						type='number'
						value={minCount}
						onChange={onMinCountChangeHandler}
						ref={maxInputRef}
					/>
				</div>
			</div>
			<div className={`buttons ${s.buttons}`}>
				<button className='button' onClick={SetCountsHandler}>
					Set
				</button>
			</div>
		</div>
	);
};
