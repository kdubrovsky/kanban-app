import css from './RadioButton.module.scss'

function RadioButton({
    title,
    value,
    id,
    name,
    idSelected,
    onClickHandler

}) {
    return (
        <li className={css.radiobutton} onClick={onClickHandler}>
            <input
                type='radio'
                name={name}
                id={id}
                value={value}
                checked={idSelected === id}
            />
            <label htmlFor={id}>
                {title}
            </label>
        </li>
    );
}

export default RadioButton;