import Slide from "../../../../base/Slide/Slide";

import classes from './Outside.module.css'

import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

export default function Outside() {
    return (
        <>
            <Slide>
                <h2>Bidirection</h2>
                <p></p>

                <p><a href="https://drafts.csswg.org/css-writing-modes/#unicode-bidi">Ссылка</a></p>
            </Slide>

            <Slide>
                здесь будет еще немного интересного если я уложусь во время
            </Slide>
        </>
    )
}