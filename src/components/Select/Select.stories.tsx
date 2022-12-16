import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "./Select";

export default {
    title: 'components/Select',
    component: Select,
    argTypes: {
        onChange: {
            action: 'onChange'
        },
        setCollapsed: {
            action: 'setCollapsed'
        }
    }
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

const menuItems = [
    { title: 'Pizza', value: 1 },
    { title: 'Tea', value: 2 },
    { title: 'Cola', value: 3 },
    { title: 'Coffe', value: 4 },
]
export const MenuSelect = Template.bind({})
MenuSelect.args = {
    title: 'Menu',
    items: menuItems,
}

export const ChangeMode = () => {
    const [selectTitle, setSelectTitle] = useState<string>('Menu')
    const [selectCollapsed, setSelectCollapsed] = useState<boolean>(false);

    const onSelectTitleChange = (title: string) => {
        setSelectTitle(title)
        setSelectCollapsed(true)
    }

    return <Select
        title={selectTitle}
        items={menuItems}
        onChange={onSelectTitleChange}
        collapsed={selectCollapsed}
        setCollapsed={setSelectCollapsed} />
}
