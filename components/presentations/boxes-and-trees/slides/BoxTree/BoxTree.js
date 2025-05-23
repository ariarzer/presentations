import Slide from "../../../../base/Slide/Slide";

import classes from './BoxTree.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function BoxTree() {
    return (
        <>

            <Slide className={'center'}>
                <blockquote style={{width: '60%'}}>Для создания <b>дерева боксов</b> CSS сначала использует
                    каскадирование и наследование, чтобы назначить <b>вычисленное значение</b> для каждого свойства CSS
                    каждому элементу и текстовому узлу в исходном дереве.
                </blockquote>
                <div className={cx('spec_link')}>Источник: <a
                    href="https://www.w3.org/TR/css-display-3/#intro">css-display-3</a></div>
            </Slide>

            <Slide className={'center'}>
                <blockquote style={{width: '60%'}}>Затем для каждого элемента CSS генерирует ноль или более боксов,
                    как указано в свойстве <code>display</code> этого элемента.
                </blockquote>
                <div className={cx('spec_link')}>Источник: <a
                    href="https://www.w3.org/TR/css-display-3/#intro">css-display-3</a></div>
            </Slide>

            <Slide>
                <h2>Обычно один бокс</h2>
                <div className="columns two">
                    <pre className={'smaller'}>
                        <code>＜div>＜/div></code>
                        <code>＜style></code>
                        <code>  div {'{'}</code>
                        <code>    border: 10px solid green;</code>
                        <code>    width: 100px;</code>
                        <code>    height: 100px;</code>
                        <code>  {'}'}</code>
                        <code>＜/style></code>
                    </pre>
                    <center>
                        <span className={cx('example', 'principal')}></span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2>Иногда 0 боксов</h2>
                <error>вопрос в аудиторию а вы как думаете когда так</error>
            </Slide>

            <Slide>
                <h2><code>display: none</code></h2>
                <div className="columns two">
                    <pre className={''}>
                        <code>＜div>любой контент＜/div></code>
                        <code>＜style></code>
                        <code>  div {'{'}</code>
                        <code>    display: none;</code>
                        <code>  {'}'}</code>
                        <code>＜/style></code>
                    </pre>
                    <center>
                        <span></span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2><code>display: contents</code></h2>
                <div className="columns two">
                    <pre className={''}>
                        <code>＜div></code>
                        <code>  ＜span>котики＜/span></code>
                        <code>  ＜span>не котики＜/span></code>
                        <code>＜/div></code>
                    </pre>
                    <center>
                        <span className={cx('example', 'principal')}>
                            <span className={cx('example', 'principal')}>котики</span>
                            <span className={cx('example', 'principal')}>не котики</span>
                        </span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2><code>display: contents</code></h2>
                <div className="columns two">
                    <pre className={'smaller'}>
                        <code>＜div></code>
                        <code>  ＜span>котики＜/span></code>
                        <code>  ＜span>не котики＜/span></code>
                        <code>＜/div></code>
                        <code>＜style></code>
                        <code>  div {'{'}</code>
                        <code>    display: contents;</code>
                        <code>  {'}'}</code>
                        <code>＜/style></code>
                    </pre>
                    <center>
                        <span>
                            <span className={cx('example', 'principal')}>котики</span>
                            <span className={cx('example', 'principal')}>не котики</span>
                        </span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2>Зачем это нужно?</h2>

            </Slide>

            <Slide>
                <h2>Иногда больше одного бокса</h2>
                <div className="columns two">
                    <pre className={''}>
                        <code>＜div>＜/div></code>
                        <code>＜style></code>
                        <code>  div::before {'{'}</code>
                        <code>    content: '';</code>
                        <code>  {'}'}</code>
                        <code>＜/style></code>
                    </pre>
                    <center>
                        <span className={cx('example','principal')}>
                            <span className={cx('example', 'before')}></span>
                        </span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2>Иногда больше одного бокса</h2>
                <div className="columns two">
                    <pre className={'smaller'}>
                        <code>＜div></code>
                        <code>  ＜span>котики＜/span></code>
                        <code>＜/div></code>
                        <code>＜style></code>
                        <code>  div::before {'{'}</code>
                        <code>    content: '';</code>
                        <code>  {'}'}</code>
                        <code>＜/style></code>
                    </pre>
                    <center>
                         <span className={cx('example', 'principal')}>
                            <span className={cx('example', 'before')}></span>
                            <span className={cx('example', 'principal')}>котики</span>
                        </span>
                    </center>
                </div>
            </Slide>


            <Slide>
                <h2><code>display: contents</code></h2>
                <div className="columns two">
                    <pre className={'smaller'}>
                        <code>＜div></code>
                        <code>  ＜span>котики＜/span></code>
                        <code>＜/div></code>
                        <code>＜style></code>
                        <code>  div {'{ display: contents; }'}</code>
                        <code>  div::after {'{'}</code>
                        <code>    content: '';</code>
                        <code>  {'}'}</code>
                        <code>＜/style></code>
                    </pre>
                    <center>
                        <span>
                            <span className={cx('example', 'principal')}>котики</span>
                        </span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2>Иногда больше одного бокса</h2>
                <div className="columns two">
                    <div>
                        <pre className={'smaller'}>
                            <code>＜li></code>
                            <code>    ＜span></code>
                            <code>         котики</code>
                            <code>    ＜/span></code>
                            <code>＜/li></code>
                        </pre>
                        <li>котики</li>
                    </div>
                    <center>
                         <span className={cx('example', 'principal')}>
                            <span className={cx('example', 'marker')}></span>
                            <span className={cx('example', 'principal')}>котики</span>
                        </span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2>Иногда больше одного бокса</h2>
                <div className="columns two">
                    <div>
                        <pre className={'smaller'}>
                            <code>＜li>＜span>котики＜/span>＜/li></code>
                            <code>＜style></code>
                            <code>  li::marker {'{'}</code>
                            <code>    color: green;</code>
                            <code>  {'}'}</code>
                            <code>＜/style></code>
                        </pre>
                        <li className={cx('markerExample')}>котики</li>
                    </div>
                    <center>
                         <span className={cx('example', 'principal')}>
                            <span className={cx('example', 'marker')}></span>
                            <span className={cx('example', 'principal')}>котики</span>
                        </span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2>Иногда больше одного бокса</h2>
                <div className="columns two">
                    <div>
                        <pre className={'smaller'}>
                            <code>＜li>＜span>котики＜/span>＜/li></code>
                            <code>＜style></code>
                            <code>  li::after {'{'}</code>
                            <code>    content: '123';</code>
                            <code>  {'}'}</code>
                            <code>＜/style></code>
                        </pre>
                        <li className={cx('markerExample', 'afterMarker')}>котики</li>
                    </div>
                    <center>
                         <span className={cx('example', 'principal')}>
                            <span className={cx('example', 'marker')}></span>
                            <span className={cx('example', 'principal')}>котики</span>
                            <span className={cx('example', 'after')}></span>
                        </span>
                    </center>
                </div>
            </Slide>

            {/*<Slide>*/}
            {/*    <h2>Таблицы</h2>*/}
            {/*    <error>вы можно подумали что я скажу здесь что-то про таблицы, но нет</error>*/}
            {/*</Slide>*/}

            {/*<Slide>*/}
            {/*    <h2>Анонимные блоки</h2>*/}
            {/*    <error>пример</error>*/}
            {/*</Slide>*/}

            {/*<Slide>*/}
            {/*    <h2>фрагментация</h2>*/}
            {/*    <error>пример</error>*/}
            {/*</Slide>*/}
        </>
    )
}