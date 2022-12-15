import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OnOff, OnOffPropsType } from './OnOff';

export default {
    title: 'components/OnOff',
    component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args: OnOffPropsType) => (
    <OnOff {...args} />
);

const onChange = () => console.log('OnOff want to change');

export const On = Template.bind({});
On.args = {
    active: true,
    setActive: onChange
};

export const Off = Template.bind({});
Off.args = {
    active: false,
    setActive: onChange
};

export const ChangeMode = () => {
    let [active, setActive] = useState(false)
    return <OnOff active={active} setActive={active => setActive(active)} />
}
