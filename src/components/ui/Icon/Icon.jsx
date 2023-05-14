function Icon({
    name, size = 16
}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
            <use xlinkHref={`/spritemap.svg#icon-${name}-${size}px`} />
        </svg>
    )
}

export default Icon;