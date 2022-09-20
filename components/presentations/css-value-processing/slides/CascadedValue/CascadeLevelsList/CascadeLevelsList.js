import classes from './CascadeLevelsList.module.css';

export default function CascadeLevelsList({active = [], className = ''}) {
    const levels = [
        'transition',
        <><b>!</b> user-agent</>,
        <><b>!</b> user</>,
        <><b>!</b> author</>,
        'animation',
        'author',
        'user',
        'user-agent'
    ];
    return (
        <ul className={`${classes.CascadeLevelsList} ${className}`}>
            {levels.map((item, index) => {
                let cl;
                active.forEach((item) => {
                    if (item === index) {
                        cl = classes['CascadeLevelsList__item--active'];
                    }
                });
                return <li className={cl}>{item}</li>
            })}
        </ul>
    )
}