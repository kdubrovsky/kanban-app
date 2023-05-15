import classNames from "classnames";
import css from './Input.module.scss';

function Input({
    id,
    name,
    placeholder = '',
    // initialValue = ''    // waits for real state handling
}) {

    return (
        <input
            type='text'
            name={name}
            id={id}
            class={css.input}
            // value={initialValue}  // waits for real state handling
            placeholder={placeholder} />
    )
}

export default Input;