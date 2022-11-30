import React, { ChangeEvent } from 'react';
import s from './SetCounter.module.css';

type SetCountPropsType = {
	error: boolean;
	maxCount: number;
	minCount: number;
	changeCounts: () => void;
	changeMaxCount: (newMaxCount: number) => void;
	changeStartCount: (newCount: number) => void;
};

export const SetCounter: React.FC<SetCountPropsType> = ({
	error,
	maxCount,
	minCount,
	changeCounts,
	changeMaxCount,
	changeStartCount,
}) => {
	const maxInputRef = React.createRef<HTMLInputElement>();
	const minInputRef = React.createRef<HTMLInputElement>();

	const changeCountsHandler = () => {
		changeCounts();
	};

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
					Max Value:
					<input
						className={s.input}
						type='number'
						value={maxCount}
						onChange={onMaxCountChangeHandler}
						ref={maxInputRef}
					/>
				</div>
				<div className={s.inputBlock}>
					Min Value:
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
				<button
					className='button'
					onClick={changeCountsHandler}
					disabled={error}
				>
					Set
				</button>
			</div>
		</div>
	);
};
