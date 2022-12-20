import React, { useState, KeyboardEvent } from 'react';
import s from './Select.module.css';

type ItemType = {
	title: string;
	value?: any;
};
type SelectPropsType = {
	title: string;
	items: ItemType[];
	onChange: (value: any) => void;
};

export function Select(props: SelectPropsType) {
	const [collapsed, setCollapsed] = useState<boolean>(true);
	const [hoveredItem, setHoveredItem] = useState<any>(null);

	const toggleCollapse = () => (collapsed ? setCollapsed(false) : setCollapsed(true));
	const onItemClick = (value: any) => {
		props.onChange(value);
		setCollapsed(true);
	};
	const onSelectBlur = () => onItemClick(hoveredItem);

	const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
		setHoveredItem(hoveredItem ? hoveredItem : 1);
		for (let i = 0; i < props.items.length; i++) {
			if (e.key === 'Enter' || e.key === 'Escape') {
				onItemClick(props.items[i].value);
				break;
			}
			if (props.items[i].value === hoveredItem) {
				if (e.key === 'ArrowDown') {
					if (props.items[i + 1]) {
						props.onChange(props.items[i + 1].value);
						setHoveredItem(props.items[i + 1].value);
						break;
					}
				}
				if (e.key === 'ArrowUp') {
					if (props.items[i - 1]) {
						props.onChange(props.items[i - 1].value);
						setHoveredItem(props.items[i - 1].value);
						break;
					}
				}
			}
		}
	};

	return (
		<div
			className={s.select}
			onKeyUp={onKeyUp}
			onBlur={hoveredItem ? onSelectBlur : () => setCollapsed(true)}
			tabIndex={0}
		>
			<div className={`${s.select__title} ${collapsed ? '' : s.collapsed}`} onClick={toggleCollapse}>
				{props.title}
			</div>

			{!collapsed ? (
				<div className={s.select__items}>
					{props.items.map((item, index) => (
						<div
							className={s.select__item + ' ' + (item.value === hoveredItem ? s.hovered : '')}
							key={index}
							onMouseEnter={() => setHoveredItem(item.value)}
							onClick={() => onItemClick(item.value)}
						>
							{item.title}
						</div>
					))}
				</div>
			) : (
				<div style={{ display: 'none' }}></div>
			)}
		</div>
	);
}
