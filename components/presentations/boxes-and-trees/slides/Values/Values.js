import Slide from "../../../../base/Slide/Slide";
import Transition from "../../../css-value-processing/demos/Transition/Transition";
import CascadeLevelsList from "../../../css-value-processing/slides/CascadedValue/CascadeLevelsList/CascadeLevelsList";

import classes from './Values.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function Values() {
    return (
        <>
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
            <Slide>
                <h2>Declared value</h2>
                <p>Список всех значений, подходящих этому элементу.</p>
                <ul>
                    <li>Селектор</li>
                    <li>Условия</li>
                    <li>Проверка типа</li>
                </ul>
            </Slide>
            <Slide>
                <h2>Селектор</h2>
                <pre>
                    <code className={`language-html`}>{'<div class="a">CSS</div>'}</code>
                    <code className={`language-html`}>{'<style>'}</code>
                    <code className={'next next-light false language-css'}>{'  #id { /* ... */ }'}</code>
                    <code className={'next next-light true language-css'}>{'  .a { /* ... */ }'}</code>
                    <code className={'next next-light true language-css'}>{'  div { /* ... */ }'}</code>
                    <code className={`language-html`}>{'</style>'}</code>
                </pre>
            </Slide>
            <Slide>
                <h2>Условия</h2>
                <pre>
                    <code className={`language-html`}>{'<div class="a">Safari IOs</div>'}</code>
                    <code className={`language-html`}>{'<style>'}</code>
                    <code className={'next next-light true language-css'}>{'  @media (max-width: 600px) {}'}</code>
                    <code className={'next next-light true language-css'}>{'  @supports (display: flex) {}'}</code>
                    <code className={'next next-light false language-css'}>{'  @media (min-width: 1200px) {}'}</code>
                    <code className={`language-html`}>{'</style>'}</code>
                </pre>
            </Slide>
            <Slide>
                <h2 className={'noMargin'}>Проверка типа</h2>
                <pre>
                    <code className={`language-html`}>{'<div class="a">CSS</div>'}</code>
                    <code className={`language-html`}>{'<style>'}</code>
                    <code className={`language-css`}>{'  .a {'}</code>
                    <code className={'next next-light false language-css'}>{'    height: 12ms;'}</code>
                    <code className={'next next-light true language-css'}>{'    height: 12em;'}</code>
                    <code className={`language-css`}>{'  }'}</code>
                    <code className={`language-html`}>{'</style>'}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Cascaded value</h2>
            </Slide>

            <Slide>
                <h2 className={cx('shout', 'shrink')}>Cascading <br/>Style <br/>Sheets</h2>
            </Slide>

            <Slide>
                <h2 className={cx('shout', 'shrink')}>Что такое каскад?</h2>
            </Slide>

            <Slide>
                <h2>Cascaded value</h2>
                <p>Каскад принимает неупорядоченный список объявленных значений, сортирует их по приоритету их
                    объявления, и выводит одно значение.</p>
            </Slide>

            <Slide>
                <h2>Cascaded value</h2>
                <ul>
                    <li>Уровни объявления</li>
                    <li>Слои <code>@layer</code></li>
                    <li>Специфичность селекторов</li>
                    <li>Порядок объявления</li>
                </ul>
            </Slide>

            <Slide>
                <h2>Уровни объявления</h2>
                <table className={'smaller'}>
                    <tbody>
                    <tr>
                        <td>Декларации из Transition</td>
                    </tr>
                    <tr>
                        <td>!important декларации user-агента</td>
                    </tr>
                    <tr>
                        <td>!important декларации пользователя</td>
                    </tr>
                    <tr>
                        <td>!important декларации автора (то есть разработчика)</td>
                    </tr>
                    <tr>
                        <td>Animation декларации</td>
                    </tr>
                    <tr>
                        <td>Декларации автора (то есть разработчика)</td>
                    </tr>
                    <tr>
                        <td>Декларации пользователя</td>
                    </tr>
                    <tr>
                        <td>Декларации user-агента</td>
                    </tr>
                    </tbody>
                </table>
            </Slide>

            <Slide>
                <h2>Декларации user-агента</h2>
                <CascadeLevelsList active={[7]}/>
                <img src="/assets/css-value-processing/user_agent.png" alt="" style={{width: '90%'}}/>
            </Slide>

            <Slide>
                <h2>Декларации user-агента</h2>
                <CascadeLevelsList active={[1]}/>
                <img src="/assets/css-value-processing/important_user_agent.png" alt="" style={{width: '90%'}}/>
            </Slide>

            <Slide>
                <h2>Декларации автора</h2>
                <CascadeLevelsList active={[5]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code className={`language-css`} >{'.blue {'}</code>
                        <code className={`language-css`} >    color: blue;</code>
                        <code className={`language-css`} >{"}"}</code>
                        <code className={`language-css`} >{'.orange {'}</code>
                        <code className={`language-css`} >    color: orange;</code>
                        <code className={`language-css`} >{"}"}</code>
                    </pre>
                    <div className={classes['CascadedValue__example--author']}>CSS</div>
                </div>
            </Slide>

            <Slide>
                <h2>Декларации автора</h2>
                <CascadeLevelsList active={[5, 3]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code className={`language-css`}>{'.blue {'}</code>
                        <code className={`language-css`}>    color: blue;</code>
                        <code className={`language-css`}>{"}"}</code>
                        <code className={`language-css`}>{'.orange {'}</code>
                        <code className={`language-css`}>    color: orange !important;</code>
                        <code className={`language-css`}>{"}"}</code>
                    </pre>
                    <div className={classes['CascadedValue__example--author']}>CSS</div>
                </div>
            </Slide>

            <Slide id='animation_declaration'>
                <h2>Декларации анимаций</h2>
                <CascadeLevelsList active={[4]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code className={`language-css`}>{'.class {'}</code>
                        <code className={`language-css`}>{'    color: orange;'}</code>
                        <code className={`language-css`}>{'    animation: anim 3s infinite;'}</code>
                        <code className={`language-css`}>{'}'}</code>
                        <code className={`language-css`}>{'@keyframes anim {'}</code>
                        <code className={`language-css`}>{'    50% {color: green;}'}</code>
                        <code className={`language-css`}>{"}"}</code>
                    </pre>
                    <div className={classes['CascadedValue__example--animation']}>CSS</div>
                </div>
            </Slide>

            <Slide id='animation_declaration'>
                <h2>Декларации анимаций</h2>
                <CascadeLevelsList active={[4, 3]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code className={`language-css`}>{'.class {'}</code>
                        <code className={`language-css`}>{'    color: orange !important;'}</code>
                        <code className={`language-css`}>{'    animation: anim 3s infinite;'}</code>
                        <code className={`language-css`}>{'}'}</code>
                        <code className={`language-css`}>{'@keyframes anim {'}</code>
                        <code className={`language-css`}>{'    50% {color: green;}'}</code>
                        <code className={`language-css`}>{"}"}</code>
                    </pre>
                    <div className={classes['CascadedValue__example--animationImportant']}>CSS</div>
                </div>
            </Slide>

            <Slide>
                <h2>Декларации переходов</h2>
                <CascadeLevelsList active={[0]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code className={`language-css`} >{'.red {'}</code>
                        <code className={`language-css`} >{'    color: red;'}</code>
                        <code className={`language-css`} >{'    transition: color 1s;'}</code>
                        <code className={`language-css`} >{'}'}</code>
                        <code className={`language-css`} >{'.green'}</code>
                        <code className={`language-css`} >{'    color: green;'}</code>
                        <code className={`language-css`} >{'}'}</code>
                    </pre>
                    <Transition className={classes.CascadedValue__example}/>
                </div>
            </Slide>

            <Slide>
                <h2>
                    Слои <code>@layer</code>
                </h2>
                <p>Способ создать уровни объявления внутри стилей автора.</p>
            </Slide>

            <Slide>
                <pre>
                    <code className={`language-css`}>@layer default, components, theme;</code>
                    <code className={`language-css`}>{"@layer default {"}</code>
                    <code className={`language-css`}>{"   button {  color: red; }"}</code>
                    <code className={`language-css`}>{"}"}</code>
                    <code className={`language-css`}>{"@import url('theme.css') layer(theme);"}</code>
                    <code className={`language-css`}>{"@layer components {"}</code>
                    <code className={`language-css`}>{"   button { color: green; }"}</code>
                    <code className={`language-css`}>{"}"}</code>
            </pre>
            </Slide>

            <Slide>
                <iframe className={cx('iframe')} src="https://www.youtube.com/embed/TDQMI03MOFI?si=wzJEMTlt1dgX93Xl"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
                </iframe>
            </Slide>

            <Slide>
                <h2>Селекторы</h2>
                <p>Коэффициент специфичности - набор чисел, позволяющий определить приоритет селектора.</p>
            </Slide>

            <Slide>
                <h2>Коэффициент специфичности</h2>
                <p>Селектора делятся на 3 уровня:</p>
                <table>
                    <tbody>
                    <tr>
                        <td><code>#id</code></td>
                        <td>+1</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><code>.class</code>, <code>:hover</code>,<code>[name="value"]</code></td>
                        <td>0</td>
                        <td>+1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td><code>::before</code>, <code>div</code></td>
                        <td>0</td>
                        <td>0</td>
                        <td>+1</td>
                    </tr>
                    </tbody>
                </table>
            </Slide>

            <Slide>
                <h2>Коэффициент специфичности</h2>
                <p>Селектора делятся на 3 уровня:</p>
                <table>
                    <tbody>
                    <tr>
                        <td>span</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0.0.1</td>
                    </tr>
                    <tr>
                        <td>.class #id</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                        <td>1.1.0</td>
                    </tr>
                    <tr className="next next-light true">
                        <td>.class #id::before:hover</td>
                        <td>1</td>
                        <td>2</td>
                        <td>1</td>
                        <td>1.2.1</td>
                    </tr>
                    <tr>
                        <td>#id [name="value"]</td>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1.1.0</td>
                    </tr>
                    </tbody>
                </table>
            </Slide>

            <Slide>
                <h2>Порядок объявления</h2>
                <p>Чем ближе к концу документа, тем приоритетнее</p>
                <pre>
                    <code className={`language-html`}>{'<div class="red blue">'}
                        <span style={{'font-style': 'bold', color: 'red'}}>CSS</span>
                        {'</div>'}
                    </code>
                    <code className={`language-html`}>{'<style>'}</code>
                    <code className={`language-css`}>{'  .blue { color: blue; }'}</code>
                    <code className={`language-css`}>{'  .red { color: red; }'}</code>
                    <code className={`language-html`}>{'</style>'}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Specified value</h2>
                <p>А что, если свойство не указали ни мы, ни юзер-агент?</p>
            </Slide>

            <Slide>
            <h2>Specified value</h2>
                <p>А что, если свойство не указали ни мы, ни юзер-агент?</p>

                <h2>Берем initial value</h2>
                <img src="/assets/css-value-processing/border-color-define.png" alt="" className={'picture'}/>
            </Slide>

            <Slide>
                <h2>Computed value</h2>
                <p className={"next"}>Значение, которое наследуется.</p>

                <ol>
                    <li className={"next"}>Вычисляются зависимые величины кроме процентов.</li>
                    <li className={"next"}>Подставляются переменные.</li>
                </ol>

                <p className={'next'}>После этого этапа у нас есть значение, в котором посчитано все, что можно
                    посчитать без отрисовки документа.</p>
            </Slide>

            <Slide className={"noBadge"}>
                <div className={classes.ComputedValue__border}>
                    <pre lang="css">
                        <code className={`language-css`} >height: 100px;<span className="next">{" // => 100px"}</span></code>
                    </pre>
                    <div className={classes.ComputedValue__border}>
                            <pre lang="css">
                                <code className={`language-css`}>height: inherit<span className="next">{" // => 100px "}</span></code>
                            </pre>
                    </div>
                </div>
            </Slide>

            <Slide className={"noBadge"}>
                <div className={classes.ComputedValue__border}>
                    <pre lang="css">
                        <code className={`language-css`}>font-size: 10px;</code>
                    </pre>
                    <div className={classes.ComputedValue__border}>
                        <pre lang="css">
                            <code className={`language-css`}>height: 5em;<span className="next">{" // => 50px"}<span className="next"> CV=50px </span></span></code>
                        </pre>
                        <div className={classes.ComputedValue__border}>
                            <pre lang="css" className="no-code" style={{'margin-bottom': '0 !important'}}>
                                <code className={`language-css`}>font-size: 20px;</code>
                                <code className={`language-css`}>height: inherit;<span className="next">{" // => 50px "}<span
                                    className="next"> CV=50px </span></span> </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </Slide>


            <Slide className={"noBadge"}>
                <div className={classes.ComputedValue__border}>
                        <pre lang="css">
                            <code className={`language-css`}>height: 100px; <span className="next">{"// => 100px"}</span></code>
                        </pre>
                    <div className={classes.ComputedValue__border}>
                                <pre lang="css">
                                    <code className={`language-css`}>height: 50%; <span className="next">{"// => 50px"}<span
                                        className="next"> CV = 50%</span></span></code>
                                </pre>
                        <div className={classes.ComputedValue__border}>
                                    <pre lang="css">
                                        <code className={`language-css`}>height: inherit;<span className="next">{" // => 25px"}<span className="next"> CV = 50%</span></span> </code>
                                    </pre>
                        </div>
                    </div>
                </div>
            </Slide>

            <Slide className={"noBadge"}>
                <div className={classes.ComputedValue__border}>
                    <pre lang="css">
                        <code className={`language-css`}>--h: 100px;</code>
                    </pre>
                    <div className={classes.ComputedValue__border}>
                        <pre lang="css">
                            <code className={`language-css`}>height: var(--h);<span className="next">{" // => 100px "}<span
                                className="next"> CV=100px </span></span></code>
                        </pre>
                        <div className={classes.ComputedValue__border}>
                            <pre lang="css" className="no-code" style={{'margin-bottom': '0 !important'}}>
                                <code className={`language-css`}>--h: 10px;</code>
                                <code className={`language-css`}>height: inherit;<span className="next">{" // => 100px "}<span
                                    className="next"> CV=100px </span></span> </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </Slide>

            <Slide className={"noBadge"}>
                <div className={classes.ComputedValue__border}>
                    <pre lang="css">
                        <code className={`language-css`}>display: block;<span className="next">{" // => block"}</span></code>
                    </pre>
                    <div className={classes.ComputedValue__border}>
                            <pre lang="css">
                                <code className={`language-css`}>display: inherit<span className="next">{" // => blocks "}</span></code>
                            </pre>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Used value</h2>
                <h3>Считаем все, что осталось</h3>
            </Slide>

            <Slide>
                <h2>Used value</h2>
                    <h3>Считаем проценты</h3>
                    <pre>
                    <code className={`language-css`}>height: 50%; </code>
                    <code className={`language-css`}>    /* CV = 50% */</code>
                    <code className={`language-css`}>    /* UV = 25px */</code>
                    </pre>
            </Slide>

            <Slide>
                <h2>Used value</h2>
                    <h3>Считаем <code>calc()</code></h3>
                    <pre>
                    <code className={`language-css`}>width: calc(100px - 50%); </code>
                    <code className={`language-css`}>    /* CV = calc(100px - 50%) */</code>
                    <code className={`language-css`}>    /* UV = 25px */</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Actual value</h2>
                <p>Преобразования на основе ограничений среды.</p>
                <ul>
                    <li>Округление пикселей до целых.</li>
                    <li>Приведение цвета в тот, который может отобразить экран.</li>
                </ul>
            </Slide>
        </>
    )
}