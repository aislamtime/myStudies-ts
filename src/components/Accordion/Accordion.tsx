import React from 'react';

export type AccordionPropsType = {
    title: string,
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
};

export const Accordion: React.FC<AccordionPropsType> = ({
    title,
    collapsed,
    setCollapsed,
}) => {
    const collapsing = () => setCollapsed(!collapsed);

    return (
        <div>
            <AccordionTitle title={title} onCollapse={collapsing} />
            {!collapsed && <AccordionBody />}
        </div>
    );
};

type AccordionTitlePropsType = {
    title: string;
    onCollapse: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => props.onCollapse();
    return <h2 onClick={onClickHandler}>{props.title}</h2>;
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
