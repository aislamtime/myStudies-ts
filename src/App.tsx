import React, { useState } from 'react';
import './App.css';

import { Button } from './components/Button';
import { Input } from './components/Input';
import { Filter, MoneyType } from './components/Filter';
import { CounterMain } from './components/CounterMain/CounterMain';

function App() {
	//const [money, setMoney] = useState([
	//	{ banknots: 'Dollars', value: 100, number: ' a1234567890' },
	//	{ banknots: 'Dollars', value: 50, number: ' z1234567890' },
	//	{ banknots: 'RUBLS', value: 100, number: ' w1234567890' },
	//	{ banknots: 'Dollars', value: 100, number: ' e1234567890' },
	//	{ banknots: 'Dollars', value: 50, number: ' c1234567890' },
	//	{ banknots: 'RUBLS', value: 100, number: ' r1234567890' },
	//	{ banknots: 'Dollars', value: 50, number: ' x1234567890' },
	//	{ banknots: 'RUBLS', value: 50, number: ' v1234567890' },
	//]);

	const [message, setMessage] = useState([
		{ message: 'message 1' },
		{ message: 'message 2' },
		{ message: 'message 3' },
	]);

	let [title, setTitle] = useState('');

	const addMessage = () => {
		let newMEssage = setMessage([{ message: title }, ...message]);
		setTitle('');
	};

	return (
		<div className='App'>
			<CounterMain />

			{/*<Input change={setTitle} title={title} />
			<Button name='+' callBack={addMessage} />

			<div>
				{message.map((el, index) => {
					return <div key={index}>{el.message}</div>;
				})}
			</div>*/}

			{/*<Filter money={money} />*/}
		</div>
	);
}

export default App;
