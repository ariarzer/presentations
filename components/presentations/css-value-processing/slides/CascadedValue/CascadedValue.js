import Slide from "../../../../base/Slide/Slide";
import CascadeLevelsList from "./CascadeLevelsList/CascadeLevelsList";

import classes from './CascadedValue.module.css'
import Transition from "../../demos/Transition/Transition";

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function CascadedValue() {
    return (
        <>
            <Slide>
                <h2 className={'shout'}>Cascading <br/>Style <br/>Sheets</h2>
            </Slide>

            <Slide>
                <h2 className={'shout'}>Что такое каскад?</h2>
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
                <table className={classes.CascadedValue__compareTable}>
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
                <h2>Уровни объявления</h2>
                <table className={classes.CascadedValue__compareTable}>
                    <tbody>
                    <tr>
                        <td>Декларации из Transition</td>
                        <td>transition</td>
                    </tr>

                    <tr>
                        <td>!important декларации user-агента</td>
                        <td><b>!</b> user-agent</td>
                    </tr>
                    <tr>
                        <td>!important декларации пользователя</td>
                        <td><b>!</b> user</td>
                    </tr>
                    <tr>
                        <td>!important декларации автора (то есть разработчика)</td>
                        <td><b>!</b> author</td>

                    </tr>
                    <tr>
                        <td>Animation декларации</td>
                        <td>animation</td>
                    </tr>
                    <tr>
                        <td>Декларации автора (то есть разработчика)</td>
                        <td>author</td>
                    </tr>
                    <tr>
                        <td>Декларации пользователя</td>
                        <td>user</td>
                    </tr>
                    <tr>
                        <td>Декларации user-агента</td>
                        <td>user-agent</td>
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
                        <code>{'.blue {'}</code>
                        <code>    color: blue;</code>
                        <code>{"}"}</code>
                        <code>{'.red {'}</code>
                        <code>    color: red;</code>
                        <code>{"}"}</code>
                    </pre>
                    <div className={classes['CascadedValue__example--author']}>CSS</div>
                </div>
            </Slide>

            <Slide>
                <h2>Декларации автора</h2>
                <CascadeLevelsList active={[5, 3]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code>{'.blue {'}</code>
                        <code>    color: blue;</code>
                        <code>{"}"}</code>
                        <code>{'.red {'}</code>
                        <code>    color: red !important;</code>
                        <code>{"}"}</code>
                    </pre>
                    <div className={classes['CascadedValue__example--author']}>CSS</div>
                </div>
            </Slide>

            <Slide id='animation_declaration'>
                <h2>Декларации анимаций</h2>
                <CascadeLevelsList active={[4]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code>{'.blue {'}</code>
                        <code>{'    color: red;'}</code>
                        <code>{'    animation: anim 3s infinite;'}</code>
                        <code>{'}'}</code>
                        <code>{'@keyframes anim {'}</code>
                        <code>{'    50% {color: green;}'}</code>
                        <code>{"}"}</code>
                    </pre>
                    <div className={classes['CascadedValue__example--animation']}>CSS</div>
                </div>
            </Slide>

            <Slide id='animation_declaration'>
                <h2>Декларации анимаций</h2>
                <CascadeLevelsList active={[4, 3]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code>{'.blue {'}</code>
                        <code>{'    color: red !important;'}</code>
                        <code>{'    animation: anim 3s infinite;'}</code>
                        <code>{'}'}</code>
                        <code>{'@keyframes anim {'}</code>
                        <code>{'    50% {color: green;}'}</code>
                        <code>{"}"}</code>
                    </pre>
                    <div className={classes['CascadedValue__example--animationImportant']}>CSS</div>
                </div>
            </Slide>

            <Slide>
                <h2>Декларации переходов</h2>
                <CascadeLevelsList active={[0]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code>{'.red {'}</code>
                        <code>{'    color: red;'}</code>
                        <code>{'    transition: color 1s;'}</code>
                        <code>{'}'}</code>
                        <code>{'.green'}</code>
                        <code>{'    color: green;'}</code>
                        <code>{'}'}</code>
                    </pre>
                    <Transition className={classes.CascadedValue__example}/>
                </div>
            </Slide>

            <Slide>
                <h2>Декларации переходов</h2>
                <CascadeLevelsList active={[0]}/>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code>{'.red {'}</code>
                        <code>{'    color: red;'}</code>
                        <code>{'    transition: color 1s;'}</code>
                        <code>{'}'}</code>
                        <code>{'.green'}</code>
                        <code>{'    color: green !important;'}</code>
                        <code>{'}'}</code>
                    </pre>
                    <Transition className={classes.CascadedValue__example}/>
                </div>
            </Slide>

            <Slide>
                <h2>Декларации пользователя</h2>
                <img src="/assets/css-value-processing/user_style.png" alt="" className={'picture'}/>
            </Slide>

            <Slide>
                <h2>Уровни объявления</h2>
                <table className={classes.CascadedValue__compareTable}>
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
                <h2 className={"shout"}>История</h2>
            </Slide>

            <Slide id='animation_declaration'>
                <h2>Декларации анимаций в 2020</h2>
                <div className={'columns two'}>
                    <pre lang='css'>
                        <code>{'.blue {'}</code>
                        <code>{'    color: red !important;'}</code>
                        <code>{'    animation: anim 3s infinite;'}</code>
                        <code>{'}'}</code>
                        <code>{'@keyframes anim {'}</code>
                        <code>{'    50% {color: green;}'}</code>
                        <code>{"}"}</code>
                    </pre>
                    <div className={classes['CascadedValue__example--animation']}>CSS</div>
                </div>
            </Slide>

            <Slide>
                <img src="/assets/css-value-processing/chrome_bug.png" alt="" className={"full_image"}/>
            </Slide>

            <Slide>

                {/*<iframe id="twitter-widget-0" scrolling="no" frameBorder="0" allowTransparency="true"*/}
                {/*        allowFullScreen="true" className="centerAbsolute" title="X Post"*/}
                {/*        src="https://platform.twitter.com/embed/Tweet.html?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1230055869234188289&amp;lang=en&amp;origin=https%3A%2F%2Fpublish.twitter.com%2F%3Furl%3Dhttps%3A%2F%2Ftwitter.com%2Faria_rzer%2Fstatus%2F1230055869234188289%23&amp;sessionId=96e004792d400269fc4c38c3990fceec822faede&amp;theme=light&amp;widgetsVersion=2615f7e52b7e0%3A1702314776716&amp;width=550px"*/}
                {/*        style={{width: '550px', height: '400px'}}*/}
                {/*        data-tweet-id="1230055869234188289"></iframe>*/}

                <img src="/assets/css-value-processing/tweet_bug_chrome.png"
                     alt=""
                     className={"full_image"}
                     style={{"width": "70%"}}/>
            </Slide>

            <Slide>
                <img src="/assets/css-value-processing/chrome_bug_comment.png"
                     alt=""
                     className={"full_image"}/>
            </Slide>

            <Slide>
                <img src="/assets/css-value-processing/chrome_bug_fixed.png"
                     alt=""
                     className={"full_image"}/>
            </Slide>

            <Slide>
                <h3>Выводы из истории:</h3>
                <h2 className={cx('shout', 'shrink')}>
                    Не молчите <br/>о проблеме
                </h2>
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
                <h2>
                    Слои <code>@layer</code>
                </h2>
                <p>Способ создать уровни объявления внутри стилей автора.</p>
            </Slide>

            <Slide>
                <pre>
                    <code>@layer default, components, theme;</code>
                    <code>{"@layer default {"}</code>
                    <code>{"   button {  color: red; }"}</code>
                    <code>{"}"}</code>
                    <code>{"@import url('theme.css') layer(theme); }"}</code>
                    <code>{"@layer components {"}</code>
                    <code>{"   button { color: green; }"}</code>
                    <code>{"}"}</code>
            </pre>
            </Slide>

            <Slide>
                <iframe className={cx("CascadedValue__iframe")} src="https://www.youtube.com/embed/TDQMI03MOFI?si=aR1_izN_FLng90gb"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Slide>

            <Slide>
                <h2 className={'shout'} style={{'font-size': '90px'}}>
                    А что, если у нас две декларации на одном уровне?
                </h2>
            </Slide>

            <Slide>
                <h2>Две декларации на одном уровне?</h2>
                <pre>
                    <code>{'<div class="red" id="blue">'}</code>
                    <code>{'    '}
                        <span className={classes.CascadedValue__gradientText}
                        > CSS</span>
                    </code>
                    <code>{'</div>'}</code>
                    <code>{'<style>'}</code>
                    <code>{'  #blue { color: blue; }'}</code>
                    <code>{'  .red { color: red; }'}</code>
                    <code>{'</style>'}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Две декларации на одном уровне?</h2>
                <pre>
                    <code>{'<div class="red" id="blue">'}</code>
                    <code>{'    '}
                        <span className={classes.CascadedValue__gradientText}
                        > CSS</span>
                    </code>
                    <code>{'</div>'}</code>
                    <code>{'<style>'}</code>
                    <code>{'  #blue { color: blue !important; }'}</code>
                    <code>{'  .red { color: red !important; }'}</code>
                    <code>{'</style>'}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Здесь нет конфликта селекторов</h2>
                <CascadeLevelsList active={[5, 3]}/>
                <pre lang='css'>
                    <code>{'<div class="red" id="blue">'}</code>
                    <code>{'    '}
                        <span style={{
                            'font-size': '1.5em',
                            'font-weight': 'bold',
                            'color': 'red'
                        }}
                        > CSS</span>
                    </code>
                    <code>{'</div>'}</code>
                    <code>{'<style>'}</code>
                    <code>{'  .red { color: red !important; }'}</code>
                    <code>{"  #id { color: blue; }"}</code>
                    <code>{'</style>'}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Коэффициент специфичности</h2>
                <p>Набор чисел, позволяющий определить приоритет селектора.</p>
                <ul>
                    <li>как разряды в числе</li>
                    <li>как семантическое версионирование</li>
                </ul>
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
                <table className={classes.CascadedValue__table}>
                    <tbody>
                    <tr>
                        <td><code>#id</code></td>
                        <td>1 * 100</td>
                        <td>0 * 10</td>
                        <td>0 * 1</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td><code>.class</code>, <code>:hover</code>,<code>[name="value"]</code></td>
                        <td>0 * 100</td>
                        <td>1 * 10</td>
                        <td>0 * 1</td>
                        <td>010</td>
                    </tr>
                    <tr>
                        <td><code>::before</code>, <code>div</code></td>
                        <td>0 * 100</td>
                        <td>0 * 10</td>
                        <td>1 * 1</td>
                        <td>001</td>
                    </tr>
                    </tbody>
                </table>
            </Slide>

            <Slide>
                <h2>Коэффициент специфичности</h2>
                <table className={classes.CascadedValue__table}>
                    <tbody>
                    <tr>
                        <td>span</td>
                        <td>0 * 100</td>
                        <td>0 * 10</td>
                        <td>1 * 1</td>
                        <td>001</td>
                    </tr>
                    <tr>
                        <td>.class #id</td>
                        <td>1 * 100</td>
                        <td>1 * 10</td>
                        <td>0 * 1</td>
                        <td>110</td>
                    </tr>
                    <tr className="next next-light true">
                        <td>.class #id::before:hover</td>
                        <td>1 * 100</td>
                        <td>2 * 10</td>
                        <td>1 * 1</td>
                        <td>121</td>
                    </tr>
                    <tr>
                        <td>#id [name="value"]</td>
                        <td>1 * 100</td>
                        <td>1 * 10</td>
                        <td>0 * 1</td>
                        <td>110</td>
                    </tr>
                    </tbody>
                </table>
            </Slide>
            <Slide>
                <h2>Коэффициент специфичности</h2>
                <img src="/assets/css-value-processing/selectors.png" alt="" className="picture"/>
            </Slide>

            <Slide>
                <h2>А почему это плохо?</h2>
                <p>Сравним 11 классов и один идентификатор:</p>
                <p><code>#id</code> = <code>1 * 10^2</code> + <code>0 * 10^1</code> + <code>0 *
                    10^0</code> = <code>100</code></p>
                <p><code>.a.b.c.d.e.f.e.r.g.t.h</code> =
                    <br/> = <code>0 * 10^2</code> + <code>11 * 10^1</code> + <code>0 * 10^0</code> = <code>110</code>
                </p>
            </Slide>

            <Slide className={cx("noBadge", "ruby")}>
                <h2 className={cx("shout", "shrink")}>
                    <ruby>⁕
                        <rt>ч</rt>
                    </ruby>
                    <ruby>⁕
                        <rt>т</rt>
                    </ruby>
                    <ruby>⁕
                        <rt>о</rt>
                    </ruby>

                    <span>  </span>

                    <ruby>⁕
                        <rt>ж</rt>
                    </ruby>
                    <ruby>⁕
                        <rt>е</rt>
                    </ruby>

                    <br/>
                    <ruby>⁕
                        <rt>т</rt>
                    </ruby>
                    <ruby>⁕
                        <rt>а</rt>
                    </ruby>
                    <ruby>⁕
                        <rt>к</rt>
                    </ruby>
                    <ruby>⁕
                        <rt>о</rt>
                    </ruby>
                    <ruby>⁕
                        <rt>е</rt>
                    </ruby>
                    ?????
                </h2>
            </Slide>

            <Slide>
                <h2 className={'shout'}>11 классов больше идентификатора???</h2>
            </Slide>

            <Slide>
                <h2>На самом деле чуть-чуть не так</h2>
                <p>Используется степень двойки.</p>
                <p style={{textDecoration: 'line-through'}}><code>1 * 10^2</code> + <code> 1 * 10^1</code> + <code>1 *
                    10^0</code></p>
                <p><code>1 * 2^24</code> + <code> 1 * 2^16</code> + <code>1 * 2^8</code></p>
            </Slide>

            <Slide className={"noBadge"}>
                <img src="/assets/css-value-processing/habr_256.png"
                     alt="" className="full_image"
                     style={{width: '90%', "objectFit": "cover", "object-position" : "right top;"}}
                />
            </Slide>

            <Slide className={classes.CascadedValue__ruby}>
                <h2>Семантическое версионирование</h2>
                <code className={cx('shout', 'CascadedValue__rubyCode')}>
                    <ruby>1
                        <rt>major</rt>
                    </ruby>
                    .
                    <ruby>0
                        <rt>minor</rt>
                    </ruby>
                    .
                    <ruby>2
                        <rt>patch</rt>
                    </ruby>
                </code>
            </Slide>

            <Slide>
                <h2>Коэффициент специфичности</h2>
                <table>
                    <thead>
                    <tr>
                        <td>селектор</td>
                        <td>major</td>
                        <td>minor</td>
                        <td>patch</td>
                        <td>результат</td>
                    </tr>
                    </thead>
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
                <h2>Коэффициент специфичности</h2>
                <table>
                    <thead>
                    <tr>
                        <td>селектор</td>
                        <td>major</td>
                        <td>minor</td>
                        <td>patch</td>
                        <td>результат</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="next next-light true">
                        <td>#id</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1.0.0</td>
                    </tr>
                    <tr>
                        <td>.a.b.c.d.e.f.e.r.g.t.h</td>
                        <td>0</td>
                        <td>11</td>
                        <td>0</td>
                        <td>0.11.0</td>
                    </tr>
                    </tbody>
                </table>
            </Slide>

            <Slide>
                <h2><a
                    href="https://polypane.app/css-specificity-calculator/">polypane.app/css-specificity-calculator/</a>
                </h2>
                <img src="/assets/css-value-processing/polypane.png" alt="" className='picture' style={{}}/>
            </Slide>

            <Slide>
                <img src="/assets/css-value-processing/specify_in_chrome.jpg" alt="" className='picture' style={{}}/>
            </Slide>

            <Slide>
                <h2>Атрибут style</h2>
                <p>Считается специфичнее всего для целей этого этапа.</p>
                <pre>
                    <code>{'<div id="id" style="color:red">'}
                        <span style={{'font-style': 'bold', color: 'red'}}>CSS</span>
                        {'</div>'}</code>
                    <code>{'<style>'}</code>
                    <code>{'  #id { color: blue; }'}</code>
                    <code>{'<style>'}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Порядок объявления</h2>
                <p>А что, если у нас два селектора одной специфичности?</p>
                <pre>
                    <code>{'<div class="red blue">'}
                        CSS
                        {'</div>'}
                    </code>
                    <code>{'<style>'}</code>
                    <code>{'  .blue { color: blue; }'}</code>
                    <code>{'  .red { color: red; }'}</code>
                    <code>{'</style>'}</code>
                </pre>
                <a href="https://twitter.com/mxstbr/status/1038073603311448064"
                   hidden={true}>https://twitter.com/mxstbr/status/1038073603311448064</a>
            </Slide>

            <Slide>
                <h2>Порядок объявления</h2>
                <p>Чем ближе к концу документа, тем приоритетнее</p>
                <pre>
                    <code>{'<div class="red blue">'}
                        <span style={{'font-style': 'bold', color: 'red'}}>CSS</span>
                        {'</div>'}
                    </code>
                    <code>{'<style>'}</code>
                    <code>{'  .blue { color: blue; }'}</code>
                    <code>{'  .red { color: red; }'}</code>
                    <code>{'</style>'}</code>
                </pre>
                <a href="https://twitter.com/mxstbr/status/1038073603311448064"
                   hidden={true}>https://twitter.com/mxstbr/status/1038073603311448064</a>
            </Slide>

            <Slide>
                <h2>Выбрали одну декларацию</h2>
                <table>
                    <thead>
                    <tr>
                        <td>свойство</td>
                        <td>значение</td>
                        <td>селектор</td>
                        <td>место</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>height</td>
                        <td>100px</td>
                        <td><code>#abc</code></td>
                        <td>index.html:12</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>10em</td>
                        <td><code>#id</code></td>
                        <td>style.css:14</td>
                    </tr>
                    <tr className={'true'}>
                        <td>height</td>
                        <td>calc(50% - 25px)</td>
                        <td>-</td>
                        <td>style=""</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>50%</td>
                        <td><code>[n='4']</code></td>
                        <td>style.css:6</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>1vh</td>
                        <td><code>.a</code></td>
                        <td>style.css:123</td>
                    </tr>
                    </tbody>
                </table>
            </Slide>
        </>
    )
}