import Slide from "../../../../base/Slide/Slide";

import classes from './InterestingCases.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function InterestingCases() {
    return (
        <>
            <Slide>
                <h2>Переходим к интересным случаям</h2>
            </Slide>

            <Slide>
                <h2>У свойства display есть два значения</h2>
                <error>поднимите руки кто знал</error>
            </Slide>

            <Slide>
                <h2>Синтаксис</h2>
                <code>display = [ ＜display-outside> || ＜display-inside> ] | ＜display-listitem> | ＜display-internal> | ＜display-box> | ＜display-legacy></code>
            </Slide>

            <Slide>
                <error>ссылка на мою статью и кратко про синтаксис</error>
            </Slide>

            <Slide>
                <error>вообще интересно как это описано в спеке, вот скрин и ссылка</error>
            </Slide>

            <Slide>
                <h2>А нас интересует вот это</h2>
                <pre className={''}>
                    <code>display = [ ＜display-outside> || ＜display-inside> ]</code>
                    <code>    | ＜display-legacy></code>
                    <code>＜display-outside>  = block | inline | run-in</code>
                    <code>＜display-inside> = flow | flow-root | table </code>
                    <code>    | flex | grid | ruby</code>
                    <b><code>＜display-legacy> = inline-block | inline-table </code>
                    <code>    | inline-flex | inline-grid</code></b>
                </pre>
            </Slide>

            <Slide>
                <h2>Не пишите старо</h2>
                <pre className={''}>
                    <code className={'false'}>display: inline-flex</code>
                </pre>
                <h2>Пишите ново</h2>
                <pre>
                    <code className={'true'}>display: inline flex</code>
                </pre>
                <error>про поддержку https://web-platform-dx.github.io/web-features-explorer/features/two-value-display/</error>
            </Slide>

            <Slide>
                <h2>Про позиционирование</h2>
                <error>примеры</error>
            </Slide>
        </>
    )
}