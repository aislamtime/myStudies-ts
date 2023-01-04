import React, { useState } from 'react'
import './App.css'

import { Button } from './components/Button'
import { Input } from './components/Input'
import { Filter, MoneyType } from './components/Filter'
import { CounterMain } from './components/CounterMain/CounterMain'

import { Rating } from './components/Rating/Rating'
import { Accordion } from './components/Accordion/Accordion'
import { ValueType } from './components/Rating/Star/Star'
import { OnOff } from './components/OnOff/OnOff'
import { Select } from './components/Select/Select'
import { UseMemo } from './hooks/useMemo'

function App() {
	const [ratingValue, setRatingValue] = useState<ValueType>(0)
	const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
	const [onoffActive, setOnoffActive] = useState<boolean>(true)
	const [selectTitle, setSelectTitle] = useState<string>('Menu')

	const menuItems = [
		{ title: 'Pizza', value: 1 },
		{ title: 'Tea', value: 2 },
		{ title: 'Cola', value: 3 },
		{ title: 'Coffe', value: 4 },
	]

	const onSelectTitleChange = (value: any) => {
		const menuItem = menuItems.find((i) => i.value === value)
		setSelectTitle(menuItem ? menuItem.title : '')
	}

	return (
		<div className='App'>
			{/*<CounterMain />*/}

			{/*<OnOff active={onoffActive} setActive={setOnoffActive} />*/}

			{/*<Accordion
				title={'-- MENU --'}
				collapsed={accordionCollapsed}
				setCollapsed={setAccordionCollapsed}
				titleColor={'purple'}
				onClickItem={() => {
					console.log('Item was klicked')
				}}
				items={menuItems}
			/>*/}

			{/*<Rating value={ratingValue} setValue={setRatingValue} />*/}

			{/*<Select title={selectTitle} items={menuItems} onChange={onSelectTitleChange} />*/}

			<div>
				{
					//! --------------------- HOOKS --------------------------
				}
				<UseMemo />
			</div>
		</div>
	)
}

export default App
