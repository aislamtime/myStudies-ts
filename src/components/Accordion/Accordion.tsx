import React, { useState } from 'react';

type AccordionPropsType = {
	collapsed: boolean;
	setCollapsed: (collapsed: boolean) => void;
};

export const Accordion: React.FC<AccordionPropsType> = ({
	collapsed,
	setCollapsed,
}) => {
	const collapsing = () => setCollapsed(!collapsed);

	return (
		<div>
			<AccordionTitle title={'-- Menu --'} onCollapse={collapsing} />
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
