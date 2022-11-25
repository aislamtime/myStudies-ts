import React from 'react';
import { Button } from './Button';
import { useState } from 'react';

export type MoneyType = {
	banknots: string;
	value: number;
	number: string;
};

type FilterPropsType = {
	money: Array<MoneyType>;
};

type FilterType = 'all' | 'dollars' | 'rubls';

export function Filter(props: FilterPropsType) {
	const [filter, setFilter] = useState<FilterType>('all');

	let currentMoney = props.money;

	if (filter === 'rubls') {
		currentMoney = props.money.filter((e) => e.banknots === 'RUBLS');
	}
	if (filter === 'dollars') {
		currentMoney = props.money.filter((e) => e.banknots === 'Dollars');
	}

	//let kak = props.money.filter((e) => e.banknots === 'RUBLS');

	const onclickFilterHandler = (buttonName: FilterType) => {
		setFilter(buttonName);
	};

	return (
		<>
			<ul>
				{currentMoney.map((objFromMoneyArr, index) => {
					return (
						<li key={index}>
							<span> {objFromMoneyArr.banknots} </span>
							<span> {objFromMoneyArr.value} </span>
							<span> {objFromMoneyArr.number} </span>
						</li>
					);
				})}
			</ul>
			<Button name={'all'} callBack={() => onclickFilterHandler('all')} />
			<Button
				name={'dollars'}
				callBack={() => onclickFilterHandler('dollars')}
			/>
			<Button name={'rubls'} callBack={() => onclickFilterHandler('rubls')} />
		</>
	);
}
