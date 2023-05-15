import classnames from 'classnames';
import css from './Userpic.module.scss';

function Userpic({
    img,
    username,
    size = 'small'
}) {

    const classNames = classnames(css.userpic, css[size]);

    return (
        <div className={classNames}>
            {img && <img src={img} alt={username} />}
            <span>
                {username ? username[0] : '🙂'}
            </span>
        </div>
    )
}

export default Userpic;
