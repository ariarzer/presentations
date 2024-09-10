import Slide from "../../../../base/Slide/Slide";

import classNames from 'classnames/bind';
import classes from './Intro.module.css';

const cx = classNames.bind(classes);

export default function SpecialIntro() {
    return (
        <>
            <Slide>
                <div className='columns three'>
                    <pre className={'smaller'}>
                        <code>{':root { color: yellow;}'}</code>
                        <code>{'div { color: 40px;}'}</code>
                        <code>{'.class { color: gold !important;}'}</code>
                        <code>{'#id { color: 1ms;}'}</code>
                        <code>{'@keyframes color {'}</code>
                        <code>{'  from { color: fuchsia; }'}</code>
                        <code>{'  to { color: tomato; }'}</code>
                        <code>{'}'}</code>
                        <code>{':has(.class, #id) { '}</code>
                        <code>{'  color: purple !important;}'}</code>
                        <code>{'}'}</code>
                        <code>{'* { animation: color 2s infinite; }'}</code>
                    </pre>
                    <center class={'biggest'}>=>🪄=></center>
                    <center style={{color: 'Gold'}} className='biggest bold'>CSS</center>
                </div>
            </Slide>
            
            <Slide>
                <img src="/assets/css-value-processing/swim.png" alt="" className={"full_image"}/>
            </Slide>

            <Slide>
                <h2 className={"shout"}>Поплыли!</h2>
            </Slide>

            <Slide>
                <h2>Value processing</h2>
                <ol>
                    <li>Declared value</li>
                    <li>Cascaded value</li>
                    <li>Specified value</li>
                    <li>Computed value</li>
                    <li>Used Value</li>
                    <li>Actual Value</li>
                </ol>
            </Slide>
        </>
    )
}