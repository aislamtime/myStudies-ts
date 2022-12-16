import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { Accordion } from "./Accordion";

export default {
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        setCollapsed: { action: 'setCollapsed' },
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
    'pizza',
    'burger',
    'tea',
    'popcorn'
]
export const MenuUnCollapsed = Template.bind({})
MenuUnCollapsed.args = {
    title: "-- Menu --",
    collapsed: false,
    //setCollapsed: changeCollapse,
    items: menuItems,
}

const usersItems = [
    'Tima',
    'Andrey',
    'Nik',
    'Tolya'
]
export const UsersCollapsed = Template.bind({})
UsersCollapsed.args = {
    title: "-- Users --",
    collapsed: true,
    //setCollapsed: changeCollapse,
    items: usersItems,
}

const randomItems = [
    'car',
    'purple',
    'flower',
    'you are king'
]

export const ChangeMode = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <Accordion
            title={"-- Click me --"}
            collapsed={collapsed}
            setCollapsed={collapse => setCollapsed(collapse)}
            items={randomItems} />
    )
}
