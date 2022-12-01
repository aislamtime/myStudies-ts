import React, { useState } from 'react';
import s from './OnOff.module.css';

type OnOffType = {
	active: boolean;
	setActive: (active: boolean) => void;
};

export function OnOff(props: OnOffType) {
	//const [active, setActive] = useState(true);

	return (
		<div className={s.onoff}>
			<div
				className={`${s.on} ${props.active ? s.active : ''}`}
				onClick={() => props.setActive(true)}
			>
				On
			</div>
			<div
				className={`${s.off} ${props.active ? '' : s.active}`}
				onClick={() => props.setActive(false)}
			>
				Off
			</div>
			<div className={`${s.check} ${props.active ? s.active : ''}`}></div>
		</div>
	);
}
