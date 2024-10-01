import Slide from "../../../../base/Slide/Slide";

import classes from './UsedValue.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function UsedValue() {
    return (
        <>
            <Slide>
                <h2 className={"shout"}>Used value</h2>
            </Slide>

            <Slide>
                <h2>Считаем проценты</h2>
                <pre>
                    <code>height: 50%; </code>
                    <code>    /* CV = 50% */</code>
                    <code>    /* UV = 25px */</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Считаем <code>calc()</code></h2>
                <pre>
                    <code>width: calc(100px - 50%); </code>
                    <code>    /* CV = calc(100px - 50%) */</code>
                    <code>    /* UV = 25px */</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Немного про <code>calc()</code></h2>
                <pre>
                    <code className={"true next next-light"}>width: calc(-50px); </code>
                    <code className={"false next next-light"}>width: calc(2s); </code>
                    <code className={"true next next-light"}>width: calc(50% - 50px); </code>
                </pre>
            </Slide>

            <Slide className={"noBadge"}>
                <div className={classes.UsedValue__border}>
                    <pre lang="css">
                        <code>width: 100px; <span className="next">// => 100px</span></code>
                    </pre>
                    <div className={classes.UsedValue__border}>
                        <pre lang="css">
                            <code>width: calc(50% - 25px); <span className="next"> // => UV = 25px</span></code>
                        </pre>
                        <div className={classes.UsedValue__border}>
                            <pre lang="css">
                                <code>width: inherit;<span className="next"> // => -12.5px ???</span> </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Range Checking (Проверка диапазона)</h2>
                <p>Приводим к ближайшему допустимому.</p>
            </Slide>

            <Slide className={"noBadge"}>
                <img src="/assets/css-value-processing/width_range.png"
                     alt=""
                     className={"full_image"}/>
            </Slide>

            <Slide className={"noBadge"}>
                <div className={classes.UsedValue__border}>
                    <pre lang="css">
                        <code>width: 100px; <span className="">// => 100px</span></code>
                    </pre>
                    <div className={classes.UsedValue__border}>
                        <pre lang="css">
                            <code>width: calc(50% - 25px); <span className="">// => UV = 25px</span></code>
                        </pre>
                        <div className={classes.UsedValue__border}>
                            <pre lang="css">
                                <code>width: inherit;<span className="next"> // => 0px</span> </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Считаем <code>calc-size()</code></h2>
                <pre>
                    <code>height: calc-size(auto, size - 50%);</code>
                    <code>    /* CV = calc-size(auto, size - 50%) */</code>
                    <code>    /* UV = 25px */</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Справка про <code>calc-size()</code></h2>
                <pre>
                    <code>calc-size( &lt;calc-size-basis>, &lt;calc-sum> )</code>
                </pre>
                <ol>
                    <li>Базис</li>
                    <li>Выражение для вычисления</li>
                </ol>
            </Slide>

            <Slide>
                <h2>Справка про <code>calc-size()</code></h2>
                <pre>
                    <code>width: calc-size(max-content, size / 2);</code>
                </pre>
                <div className={cx('demo')}><span></span></div>
            </Slide>

            <Slide>
                <iframe src="https://ru.ariarzer.dev/2024/notes/calc-size-2024/"
                        frameborder="0"
                        style={{"width": '70%', "height": '80%'}}
                        className={"full_image"}
                ></iframe>
                {/*<img src="/assets/css-value-processing/article_calc_size.png"*/}
                {/*     alt=""*/}
                {/*     className={"full_image"}*/}
                {/*/>*/}
            </Slide>
        </>
    )
}