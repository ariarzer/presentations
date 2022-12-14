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
            <div className={classes.Transition__inputBlock}>
                <label>
                    <input
                        type="radio"
                        name={'Transition__example'}
                        className={classes.Transition__input}
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
                        className={classes.Transition__input}
                        value={'green'}
                        onChange={(e) => onChange(e)}
                        checked={textColor === 'green'}
                    />
                    green
                </label>
            </div>
            <span className={classes['Transition__text'] + ' ' + textColorClassName}>
                CSS
            </span>
        </form>
    )
}