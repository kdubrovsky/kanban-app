import css from './RadioButton.module.scss'

function RadioButton({
    value,
    title,
    id,
    checked
}) {
    return (
        <li className={css.radiobutton}>
            <input
                type='radio'
                id={id}
                value={value}
                checked={checked}
            />
            <label htmlFor={id}>
                {title}
            </label>
        </li>
    );
}

export default RadioButton;