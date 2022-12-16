import React, { useState } from "react";
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    title: string
    items: ItemType[]
    onChange: (title: string) => void
    collapsed: boolean
    setCollapsed: (collapse: boolean) => void
}


export function Select(props: SelectPropsType) {

    const onClickHandler = () => props.collapsed ? props.setCollapsed(false) : props.setCollapsed(true)
    const onBlurHandler = () => props.setCollapsed(true)

    return (
        <div className={s.select} >
            <h3
                className={`${s.select__title} ${props.collapsed ? '' : s.collapsed}`}
                onClick={onClickHandler}
                onBlur={onBlurHandler} >
                {props.title}
            </h3>
            {
                !props.collapsed
                    ? props.items.map((item, index) =>
                        <div
                            className={s.select__item}
                            key={index}
                            onClick={() => props.onChange(item.title)} >
                            {item.title}
                        </div>)
                    : ''
            }
        </div>
    )
}