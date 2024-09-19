import Script from "next/script";
import { LanguageContext } from '../LanguageContext';

import classNames from 'classnames/bind';
import classes from './Layout.module.css';

const cx = classNames.bind(classes);

export default function Layout({children, header, lang, appearance = '', theme = ''}) {
    return (
        <main className={cx('shower','list', theme, appearance)}>
            <LanguageContext.Provider value={lang}>
                <div className="caption">
                    <h1>{header}</h1>
                    {lang === "ru"
                        ? <p>София Валитова, CSS-инженер</p>
                        : <p>Sofi Valitova, CSS-engineer</p>
                    }
                </div>
                {children}
                <Script src="/shower/shower.js"/>
                <Script src="/connect_shower_with_next.js"/>
                <div className="progress"/>
            </LanguageContext.Provider>
        </main>
    )
}