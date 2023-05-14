import css from './Badge.module.scss';
import classnames from 'classnames';

function Badge({
    type = 'status',        // 'status', 'priority','kanban'
    priority = 'normal',    // 'normal', 'minor', 'major', 'critical'
    status = 'new',         // 'new', 'inprogress', 'paused', 'done'
    compact = false,              
    title,                  // badge title
}) {

    const classNames = classnames(
        css.badge,
        css[type],
        { [css[status]]: type === 'status' || 'kanban' },
        { [css[priority]]: type === 'priority' },
        { [css.compact]: compact });

    return (
        <div className={classNames} title={title}>
            {compact ? title[0] : title}
        </div>
    )
}

export default Badge;