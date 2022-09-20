import classes from './Transition.module.css';
import {useState} from 'react';

export default function Transition({className}) {
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
                    name={'Transition__example'}
                    value={'red'}
                    onChange={(e) => onChange(e)}
                    checked={textColor === 'red'}
                />
                red
            </label>
            <label>
                <input
                    type="radio"
                    name={'Transition__example'}
                    value={'green'}
                    onChange={(e) => onChange(e)}
                    checked={textColor === 'green'}
                />
                green
            </label>
            <span className={classes['Transition__text'] + ' ' + textColorClassName}>
                CSS
            </span>
        </form>
    )
}