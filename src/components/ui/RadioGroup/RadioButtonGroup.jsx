import css from './RadioButtonGroup.module.scss'

function RadioButtonGroup({
    name,
    defaultSelected,   // !!!
    children
}) {
    return (
        <ul className={css.radiobuttonGroup}
            name={name}
        >
            {children}
        </ul>
    );
}

export default RadioButtonGroup;