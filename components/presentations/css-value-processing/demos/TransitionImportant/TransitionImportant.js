import classes from './TransitionImportant.module.css';
import {useState} from 'react';

export default function TransitionImportant({className}) {
    const [textColor, setColor] = useState('red');
    let textColorClassName = classes[textColor];
    const onChange = (e) => {
        setColor(e.target.value);
    }

    return (
        <form className={className}>
            <label>
                <input
                    type="radio"
                    name={'TransitionImportant__example'}
                    value={'red'}
                    onChange={(e) => onChange(e)}
                    checked={textColor === 'red'}
                />
                red
            </label>
            <label>
                <input
                    type="radio"
                    name={'TransitionImportant__example'}
                    value={'green'}
                    onChange={(e) => onChange(e)}
                    checked={textColor === 'green'}
                />
                blue
            </label>
            <span className={classes['TransitionImportant__text'] + ' ' + textColorClassName}>
                CSS
            </span>
        </form>
    )
}