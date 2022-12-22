import { link } from 'fs';
import React from 'react';

type ItemType = {
	title: string;
	value: any;
};

export type AccordionPropsType = {
	/**
	 * Accondion title
	 */
	title: string;
	/**
	 * Responsible for showing the acordion (true -> collapsed, false -> uncollapsed)
	 */
	collapsed: boolean;
	/**
	 * Changes the value of the collapsed to what came in the parameters
	 * @param collapsed Takes a Boolean value
	 * @returns void
	 */
	setCollapsed: (collapsed: boolean) => void;
	items: ItemType[];
	onClickItem: (value: any) => void;
	/**
	 * Accordion title background color
	 */
	titleColor?: string;
};

export const Accordion: React.FC<AccordionPropsType> = ({
	title,
	collapsed,
	setCollapsed,
	items,
	onClickItem,
	titleColor,
}) => {
	return (
		<div>
			<AccordionTitle title={title} onCollapse={() => setCollapsed(!collapsed)} titleColor={titleColor} />
			{!collapsed && <AccordionBody items={items} onClick={onClickItem} />}
		</div>
	);
};

type AccordionTitlePropsType = {
	title: string;
	onCollapse: () => void;
	titleColor?: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
	const styles = {
		color: props.titleColor ? props.titleColor : 'black',
	};
	const onClickHandler = () => props.onCollapse();
	return (
		<h2 onClick={onClickHandler} style={styles}>
			{props.title}
		</h2>
	);
}

type AccordionBodyPropsType = {
	items: ItemType[];
	onClick: (value: any) => void;
};

function AccordionBody(props: AccordionBodyPropsType) {
	return (
		<ul>
			{props.items.map((item, index) => (
				<li key={index} onClick={() => props.onClick(item.value)}>
					{item.title}
				</li>
			))}
		</ul>
	);
}
