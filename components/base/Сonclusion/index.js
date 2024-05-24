import Slide from "../Slide/Slide";

import { LanguageContext } from '../LanguageContext';
import { useContext } from 'react';


import classes from './index.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function Conclusion() {
    const lang = useContext(LanguageContext);
    if (lang === 'ru') {
         return (
             <Slide>
                 <h2>София Валитова из <a href="https://www.kiskolabs.com/en/">KiskoLabs</a></h2>
                 <div className={"columns two"}>
                     <ul className="smaller">
                         <li><a href="mailto:ariarzer@gmail.com">ariarzer@gmail.com</a></li>
                         <li>Twitter – <a href="https://twitter.com/ariarzer" target="_blank">@ariarzer</a></li>
                         <li>Telegram – <a href="https://t.me/ariarzer" target="_blank">@ariarzer</a></li>
                         <li>Мой канал про css – <a href="https://t.me/css_mind" target="_blank">@css_mind</a></li>
                         <li>Мой блог про css – <a href="https://ru.ariarzer.dev" target="_blank">ariarzer.dev</a></li>
                         <li>Patreon – <a href="https://www.patreon.com/ariarzer" target="_blank">@ariarzer</a></li>
                     </ul>

                     <img src="/assets/css-writing-mode/CodeFest%20Feedback.gif" alt="" className={cx("feedback")}/>
                 </div>

                 <p className="small">Презентация сделана с помощью <a href="https://shwr.me/">Shower</a>.</p>
             </Slide>
         );
    } else if (lang === 'en') {
        return (
            <Slide>
                <h2>Sofi Valitova from <a href="https://www.kiskolabs.com/en/">KiskoLabs</a></h2>
                <ul>
                    <li><a>ariarzer@gmail.com</a></li>
                    <li>Twitter – <a href="https://twitter.com/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>Telegram – <a href="https://t.me/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>Blog – <a href="https://ru.ariarzer.dev" target="_blank">ariarzer.dev</a></li>
                    <li>Patreon – <a href="https://www.patreon.com/ariarzer" target="_blank">@ariarzer</a></li>
                </ul>

                <p className="small">Presentation is made with <a href="https://shwr.me/">Shower</a>.</p>
            </Slide>
        )
    }
    return (
        <>
            <Slide id="myself">
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