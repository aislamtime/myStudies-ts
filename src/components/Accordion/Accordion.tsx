import { link } from 'fs';
import React from 'react';

export type AccordionPropsType = {
    /**
     * Accondion title
     */
    title: string,
    /**
     * Responsible for showing the acordion (true -> collapsed, false -> not collapsed)
     */
    collapsed: boolean;
    /**
     * Changes the value of the collapsed to what came in the parameters
     * @param collapsed Takes a Boolean value
     * @returns void
     */
    setCollapsed: (collapsed: boolean) => void;
    /**
     * Accordion title background color
     */
    items: string[]
    titleColor?: string
};

export const Accordion: React.FC<AccordionPropsType> = ({
    title,
    collapsed,
    setCollapsed,
    items,
    titleColor,
}) => {
    const collapsing = () => setCollapsed(!collapsed);

    return (
        <div>
            <AccordionTitle title={title} onCollapse={collapsing} titleColor={titleColor} />
            {!collapsed && <AccordionBody items={items} />}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string;
    onCollapse: () => void;
    titleColor?: string
};

function AccordionTitle(props: AccordionTitlePropsType) {
    const styles = {
        color: props.titleColor ? props.titleColor : 'black'
    }
    const onClickHandler = () => props.onCollapse();
    return <h2 onClick={onClickHandler} style={styles} >{props.title}</h2>;
}

type AccordionBodyPropsType = {
    items: string[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(item => <li>{item}</li>)}
        </ul>
    );
}
