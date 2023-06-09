import Icon from '../Icon/Icon';

import css from './Button.module.scss';
import classnames from 'classnames';

function Button({
    type = 'button',        // submit or button
    style,                  // style:      'main', 'ghost', 'round', 'dropdown'
    priority,               // priority:  'primary','secondary'
    size = 'standard',      // size:      'standard', 'small'
    shortcut,               // shortcut text
    icon,                   // svg icon
    onClick,                // onClick handler
    title,                  // button title
    disabled = false
}) {

    const classNames = classnames(css[style], css[priority], css[size]);
    const shortcutJSX = (style === 'main' && shortcut) &&
        <span className={css.shortcut}>
            {shortcut}
        </span>

    return (
        <button
            className={classNames}
            type={type}
            onClick={onClick}
            disabled={(style === 'main') && disabled}
        >
            {icon && <Icon name={icon} />}
            {style != 'round' && title}
            {shortcutJSX}
        </button>
    )

}

export default Button;