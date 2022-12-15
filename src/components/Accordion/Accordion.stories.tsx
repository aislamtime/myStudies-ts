import { Story } from "@storybook/react";
import React, { useState } from "react";
import { Accordion, AccordionPropsType } from "./Accordion";

export default {
    title: 'components/Accordion',
    component: Accordion
};

const changeCollapse = (collapse: boolean) => console.log('Accordion want to change');

const Template: Story<AccordionPropsType> = (args: AccordionPropsType) => <Accordion {...args} />;

export const NotCollapsed = Template.bind({})
NotCollapsed.args = {
    title: "-- MENU --",
    collapsed: false,
    setCollapsed: changeCollapse,
}
export const Collapsed = Template.bind({})
Collapsed.args = {
    title: "-- MENU --",
    collapsed: true,
    setCollapsed: changeCollapse,
}

export const ChangeMode = () => {
    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <Accordion
            title={"-- Click me --"}
            collapsed={collapsed}
            setCollapsed={collapse => setCollapsed(collapse)} />
    )
}
