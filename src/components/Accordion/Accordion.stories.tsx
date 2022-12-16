import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { Accordion } from "./Accordion";

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        setCollapsed: { action: 'setCollapsed' },
        onClickItem: { action: 'onClickItem' },
        titleColor: {
            table: {
                category: 'colors'
            }
        }
    }
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

//const changeCollapse = (collapse: boolean) => console.log('Accordion want to change');

const menuItems = [
    { title: 'pizza', value: 1 },
    { title: 'burger', value: 2 },
    { title: 'tea', value: 3 },
    { title: 'popcorn', value: 4 },
]
export const MenuUnCollapsed = Template.bind({})
MenuUnCollapsed.args = {
    title: "-- Menu --",
    collapsed: false,
    //setCollapsed: changeCollapse,
    items: menuItems,
}

const usersItems = [
    { title: 'Tima', value: 1 },
    { title: 'Andrey', value: 2 },
    { title: 'Nik', value: 3 },
    { title: 'Tolya', value: 4 },
]

export const UsersCollapsed = Template.bind({})
UsersCollapsed.args = {
    title: "-- Users --",
    collapsed: true,
    //setCollapsed: changeCollapse,
    items: usersItems,
}

const randomItems = [
    { title: 'car', value: 1 },
    { title: 'purple', value: 2 },
    { title: 'flower', value: 3 },
    { title: 'you are king', value: 4 },
]
export const ChangeMode = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <Accordion
            title={"-- Click me --"}
            collapsed={collapsed}
            setCollapsed={collapse => setCollapsed(collapse)}
            items={randomItems}
            onClickItem={() => console.log('Item was clicked')} />
    )
}
