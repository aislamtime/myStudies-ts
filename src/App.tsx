import React, { useState } from 'react';
import './App.css';

import { Button } from './components/Button';
import { Input } from './components/Input';
import { Filter, MoneyType } from './components/Filter';
import { CounterMain } from './components/CounterMain/CounterMain';

import { Rating } from './components/Rating/Rating';
import { Accordion } from './components/Accordion/Accordion';
import { ValueType } from './components/Rating/Star/Star';

function App() {
	const [ratingValue, setRatingValue] = useState<ValueType>(0);
	const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);

	return (
		<div className='App'>
			{/*<CounterMain />*/}

			<Accordion
				collapsed={accordionCollapsed}
				setCollapsed={setAccordionCollapsed}
			/>

			<Rating value={ratingValue} setValue={setRatingValue} />
		</div>
	);
}

export default App;
