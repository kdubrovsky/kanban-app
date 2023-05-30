import { useState } from 'react'
import React from 'react';
import css from './RadioButtonGroup.module.scss'

function RadioButtonGroup({
    name,
    defaultSelected,
    children
}) {

    const [idSelected, setIdSelected] = useState(defaultSelected);

    const onClickHandler = e => {
        setIdSelected(e.target.id)
    }

    return (
        <ul className={css.radiobuttonGroup}
        >
            {children.map(item =>
                React.cloneElement(item,
                    { name, idSelected, onClickHandler })
            )}
        </ul>
    );
}

export default RadioButtonGroup;