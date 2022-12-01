import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OnOff, OnOffPropsType } from './OnOff';

export default {
	title: 'OnOff',
	component: OnOff,
} as ComponentMeta<typeof OnOff>;

const Template: ComponentStory<typeof OnOff> = (args: OnOffPropsType) => (
	<OnOff {...args} />
);

let onoffActive = true;
const setOnoffActive = (active: boolean) => !onoffActive;

export const Primary = Template.bind({});
Primary.args = {
	active: onoffActive,
	setActive: setOnoffActive,
};
