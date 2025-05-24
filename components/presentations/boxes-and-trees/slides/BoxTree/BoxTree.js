import React from "react";
import Slide from "../../../../base/Slide/Slide";

import classes from './BoxTree.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function BoxTree() {
    const [isOpen, setIsOpen] = React.useState(false);

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
                <h2>Обычно один бокс</h2>
                <div className="columns two">
                    <ul>
                        <li><code>inline</code></li>
                        <li><code>block</code></li>
                        <li><code>inline-block</code></li>
                        <li><code>flex</code></li>
                        <li><code>.......</code></li>
                    </ul>
                    <center>
                        <span className={cx('example', 'principal')}></span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2>Обычно один бокс</h2>
                <div className="columns two">
                   <p>Главный бокс</p>
                    <center>
                        <span className={cx('example', 'principal')}></span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2 className={cx('shout', 'shrink')}>Иногда 0 боксов</h2>
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
                <h2 className={cx('shout', 'shrink')}>Иногда 0 боксов для себя</h2>
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
                <div className={cx('menuExample')}>
                    <div className={cx('menuExample__List')}>
                        <div className={cx('menuExample__item', 'menuExample__item--logo')}>logo</div>
                        <div className={cx('menuExample__item')}>link</div>
                        <div className={cx('menuExample__item')}>link</div>
                        <div className={cx('menuExample__item')}>link</div>
                        <div className={cx('menuExample__item', 'menuExample__item--sign')}>sign in</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Зачем это нужно?</h2>
                <div className={cx('mobileExample')}>
                    <div className={cx('menuExample__List')}>
                        <div className={cx('menuExample__item', 'menuExample__item--logo')}>logo</div>
                        <button className={cx('burger', {
                            'closed': !isOpen,
                            'opened': isOpen
                        })} onClick={() => setIsOpen(!isOpen)}></button>
                        <div className={cx('mobileExample__menu')}>
                            <div className={cx('menuExample__item')}>link</div>
                            <div className={cx('menuExample__item')}>link</div>
                            <div className={cx('menuExample__item')}>link</div>
                            <div className={cx('menuExample__item', 'menuExample__item--sign')}>sign in</div>
                        </div>
                    </div>
                </div>
            </Slide>

            <Slide className={'noBadge'}>
                <div className={'columns two'}>
                    <pre className={'smaller'}>
                        <code>＜div class='menu'></code>
                        <code>  ＜div class='logo'> logo ＜/div></code>
                        <code>  ＜div class='link'> link ＜/div></code>
                        <code>  ＜div class='link'> link ＜/div></code>
                        <code>  ＜div class='link'> link ＜/div></code>
                        <code>  ＜div class='signIn'> sign in ＜/div></code>
                        <code>＜/div></code>
                    </pre>
                    <div className={cx('menuExample')} style={{'zoom': '0.5'}}>
                        <div className={cx('menuExample__List')}>
                            <div className={cx('menuExample__item', 'menuExample__item--logo')}>logo</div>
                            <div className={cx('menuExample__item')}>link</div>
                            <div className={cx('menuExample__item')}>link</div>
                            <div className={cx('menuExample__item')}>link</div>
                            <div className={cx('menuExample__item', 'menuExample__item--sign')}>sign in</div>
                        </div>
                    </div>
                </div>
            </Slide>

            <Slide className={'noBadge'}>

                <div className={'columns two'}>
                    <pre className={'smaller'}>
                        <code>＜div class='menu'></code>
                        <code>  ＜div class='logo'> logo ＜/div></code>
                        <code>  ＜div class='burger'>＜/div></code>
                        <code>＜/div></code>
                        <code>＜div class='mobile-menu'></code>
                        <code>  ＜div class='link'> link ＜/div></code>
                        <code>  ＜div class='link'> link ＜/div></code>
                        <code>  ＜div class='link'> link ＜/div></code>
                        <code>  ＜div class='signIn'> sign in ＜/div></code>
                        <code>＜/div></code>
                    </pre>

                    <div className={cx('mobileExample')} style={{'zoom': 0.5}}>
                        <div className={cx('menuExample__List')}>
                            <div className={cx('menuExample__item', 'menuExample__item--logo')}>logo</div>
                            <button className={cx('burger', {
                                'closed': !isOpen,
                                'opened': isOpen
                            })} onClick={() => setIsOpen(!isOpen)}></button>
                            <div className={cx('mobileExample__menu')}>
                                <div className={cx('menuExample__item')}>link</div>
                                <div className={cx('menuExample__item')}>link</div>
                                <div className={cx('menuExample__item')}>link</div>
                                <div className={cx('menuExample__item', 'menuExample__item--sign')}>sign in</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <pre className={'smaller'}>
                    <code>＜div class='menu'></code>
                    <code>  ＜div class='logo'> logo ＜/div></code>
                    <code>  ＜div class='burger'>＜/div></code>
                    <code>  ＜div class='mobile-menu'></code>
                    <code>    ＜div class='link'> link ＜/div></code>
                    <code>    ＜div class='link'> link ＜/div></code>
                    <code>    ＜div class='link'> link ＜/div></code>
                    <code>    ＜div class='signIn'> sign in ＜/div></code>
                    <code>  ＜/div></code>
                    <code>＜/div></code>
                </pre>
            </Slide>

            <Slide>
                <div className={'columns two'}>
                    <pre className={'smaller'}>
                        <code>.menu {'{'}</code>
                        <code>  position: relative;</code>
                        <code>{'}'}</code>
                        <code>.mobile-menu {'{'}</code>
                        <code>    position: absolute;</code>
                        <code>    top: 60px;</code>
                        <code>    left: 200px;</code>
                        <code>{'}'}</code>
                        <code>.open .mobile-menu {'{'}</code>
                        <code>    transform: translateX(-200px);</code>
                        <code>{'}'}</code>
                    </pre>

                    <div className={cx('mobileExample')} style={{'zoom': 0.5}}>
                        <div className={cx('menuExample__List')}>
                            <div className={cx('menuExample__item', 'menuExample__item--logo')}>logo</div>
                            <button className={cx('burger', {
                                'closed': !isOpen,
                                'opened': isOpen
                            })} onClick={() => setIsOpen(!isOpen)}></button>
                            <div className={cx('mobileExample__menu')}>
                                <div className={cx('menuExample__item')}>link</div>
                                <div className={cx('menuExample__item')}>link</div>
                                <div className={cx('menuExample__item')}>link</div>
                                <div className={cx('menuExample__item', 'menuExample__item--sign')}>sign in</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

            <Slide  className={'noBadge'}>
                <div className={'columns two'}>
                    <pre className={'smaller'}>
                        <code>.burger {'{display: none}'}</code>
                        <code>.menu {'{'}</code>
                        <code>  display: grid;</code>
                        <code>  grid-template-columns: </code>
                        <code>    1fr 100px 100px 100px 1fr;</code>
                        <code>{'}'}</code>
                        <code> .mobile-menu {'{'}</code>
                        <code>    display: contents;</code>
                        <code>{'}'}</code>
                    </pre>
                    <div className={cx('menuExample')} style={{'zoom': '0.5'}}>
                        <div className={cx('menuExample__List')}>
                            <div className={cx('menuExample__item', 'menuExample__item--logo')}>logo</div>
                            <div className={cx('menuExample__item')}>link</div>
                            <div className={cx('menuExample__item')}>link</div>
                            <div className={cx('menuExample__item')}>link</div>
                            <div className={cx('menuExample__item', 'menuExample__item--sign')}>sign in</div>
                        </div>
                    </div>
                </div>
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
                        <span className={cx('example', 'principal')}>
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