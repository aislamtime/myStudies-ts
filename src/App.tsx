import React, { useState } from 'react';
import './App.css';

import { Button } from './components/Button';
import { Input } from './components/Input';
import { Filter, MoneyType } from './components/Filter';
import { CounterMain } from './components/CounterMain/CounterMain';

import { Rating } from './components/Rating/Rating';
import { Accordion } from './components/Accordion/Accordion';
import { ValueType } from './components/Rating/Star/Star';
import { OnOff } from './components/OnOff/OnOff';

function App() {
    const [ratingValue, setRatingValue] = useState<ValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [onoffActive, setOnoffActive] = useState<boolean>(true);

    const menuItems = [
        { title: 'pizza', value: 1 },
        { title: 'burger', value: 2 },
        { title: 'tea', value: 3 },
        { title: 'popcorn', value: 4 },
    ]

    return (
        <div className='App'>
            {/*<CounterMain />*/}

            <OnOff active={onoffActive} setActive={setOnoffActive} />

            <Accordion
                title={'-- MENU --'}
                collapsed={accordionCollapsed}
                setCollapsed={setAccordionCollapsed}
                titleColor={'purple'}
                onClickItem={() => {
                    console.log('Item was klicked');
                }}
                items={menuItems}
            />

            <Rating value={ratingValue} setValue={setRatingValue} />
        </div>
    );
}

export default App;
