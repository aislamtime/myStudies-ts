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
    color?: string
};

export const Accordion: React.FC<AccordionPropsType> = ({
    title,
    collapsed,
    setCollapsed,
    color,
}) => {
    const collapsing = () => setCollapsed(!collapsed);

    return (
        <div>
            <AccordionTitle title={title} onCollapse={collapsing} color={color} />
            {!collapsed && <AccordionBody />}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string;
    onCollapse: () => void;
    color?: string
};

function AccordionTitle(props: AccordionTitlePropsType) {
    const styles = {
        color: props.color ? props.color : 'black'
    }
    const onClickHandler = () => props.onCollapse();
    return <h2 onClick={onClickHandler} style={styles} >{props.title}</h2>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}
