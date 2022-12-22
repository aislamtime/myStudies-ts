import React, { useState, KeyboardEvent, useReducer } from 'react';
import { reduser, TOGGLE, TO_COLLAPSE } from './reduser';
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
	const [state, dispatch] = useReducer(reduser, { collapsed: true });
	const [hoveredItem, setHoveredItem] = useState<any>(null);

	const toggleCollapse = () => dispatch({ type: TOGGLE });
	const onItemClick = (value: any) => {
		props.onChange(value);
		dispatch({ type: TO_COLLAPSE });
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
			onBlur={hoveredItem ? onSelectBlur : () => dispatch({ type: TO_COLLAPSE })}
			tabIndex={0}
		>
			<div className={`${s.select__title} ${state.collapsed ? '' : s.collapsed}`} onClick={toggleCollapse}>
				{props.title}
			</div>

			{!state.collapsed ? (
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
