import Slide from "../Slide/Slide";

import { LanguageContext } from '../LanguageContext';
import { useContext } from 'react';

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
                        <img src="/assets/logo.svg" alt="" className="logo"/>
                    </div>
                </center>
            </Slide>
        </>
    )
}