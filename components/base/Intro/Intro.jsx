import Slide from "../Slide/Slide";

import { LanguageContext } from '../LanguageContext';
import { useContext } from 'react';

import classNames from 'classnames/bind';

import classes from './Intro.module.css'
const cx = classNames.bind(classes);

export default function Intro() {
    const lang = useContext(LanguageContext);
    return (
        <>
            <Slide id="myself" className={'noBadge'}>
                <center>
                    <div>
                        {lang === 'ru'
                            ? <h2>Меня зовут София. Я - CSS инженер.</h2>
                            : <h2>My name is Sofi. I am CSS engineer.</h2>
                        }
                        <img src="/assets/logo_dark.svg" alt="" className={cx("logo")}/>
                    </div>
                </center>
            </Slide>
            <Slide className={"noBadge"}>
                <iframe src="https://www.kiskolabs.com/en/" className={cx("full_image", classes.iframe)} />
            </Slide>
        </>
    )
}