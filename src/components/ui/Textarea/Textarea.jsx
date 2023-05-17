import css from './Textarea.module.scss';

function TextArea({
    id,
    name,
    placeholder = '',
}) {
    return (
        <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            className={css.textarea}
        />
    )
}

export default TextArea;




