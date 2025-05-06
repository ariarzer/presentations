import Slide from "../../../../base/Slide/Slide";

import classes from './InterestingCases.module.css'
import classes2 from '../BoxTree/BoxTree.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind({...classes, ...classes2});

export default function InterestingCases() {
    return (
        <>
            <Slide>
                <h2 className={'shout smaller'}>Переходим к интересным случаям</h2>
            </Slide>

            <Slide>
                <h2 className={'shout'}>У свойства display есть два значения</h2>
            </Slide>

            <Slide>
                <h2>Синтаксис</h2>
                <pre>
                    <code>display = [ ＜display-outside> || ＜display-inside> ] </code>
                    <code>    | ＜display-listitem> | ＜display-internal></code>
                    <code>    | ＜display-box> | ＜display-legacy></code>
                </pre>
            </Slide>

            <Slide>
                <img src="/assets/boxes-and-trees/value-definition-screen.png" alt="" className={cx('screen')}/>
                <p className={cx('article_link')}>Почитать можно {' '}
                    <a href="https://ru.ariarzer.dev/articles/2021/value-definition-syntax.html">тут</a>.</p>
            </Slide>

            <Slide>
                <h2>Как это описано в спецификации:</h2>
                <img src="/assets/boxes-and-trees/display-screen-spec.png" alt="" className={cx('spec_screen')}/>
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
                <div className="columns two">
                    <div>
                        <pre className={'smaller'}>
                            <code>＜div class=class1></code>
                            <code>    content1</code>
                            <code>    ＜div class=class2></code>
                            <code>        content2</code>
                            <code>    ＜/div></code>
                            <code>＜/div></code>
                        </pre>
                    </div>
                    <center>
                         <span className={cx('example', 'principal')}>
                            <span className={cx('example', 'principal')}>
                                content1
                                <span className={cx('example', 'principal')}>content2</span>
                            </span>
                        </span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <error>про содержащий блок</error>
                <error>что на самом деле проценты чаще всего считаются не от родителя, а от него</error>
            </Slide>
        </>
    )
}