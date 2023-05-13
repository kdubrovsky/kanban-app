import css from './Button.module.scss';

function Button({
    type = 'button',  // submit or button
    style,            // style:      'main', 'ghost', 'round', 'select'
    priority,         // priority:  'primary','secondary'
    size,             // size:      'standard', 'small'
    shortcut,         // shortcut text
    icon,             // svg icon
    onClick,          // onClick handler
    title             // button title
}) {

    return (
        <button
            className={css.main}
            type={type}
            onClick={onClick}
        >
            {title}
            {shortcut && <span className={css.shortcut}>{shortcut}</span>}
        </button>
    )

}

export default Button;