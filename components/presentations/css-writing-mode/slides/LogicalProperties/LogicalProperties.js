import Slide from "../../../../base/Slide/Slide";

import classes from './LogicalProperties.module.css'

import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

export default function LogicalProperties() {
    return (
        <>
            <Slide>
                <h2>Простой пример</h2>
                <div className={classes.flex}>
                    <div>
                        <h3>Header</h3>
                        <span>Small text text text</span>
                    </div>
                    <div className={classes.japanese}>
                        <h3>タイトル</h3>
                        <span>小さい 文章 文章 文章</span>
                    </div>
                    <div className={classes.arabic}>
                        <h3>عنوان</h3>
                        <span>نص نص صغير</span>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2 className={"shout shrink"}>А если все-таки нужно?</h2>
            </Slide>

            <Slide>
                <h2 className={"shout shrink"}>Логические 🥰💄🥳 <br/> 🤩🥵💅свойства</h2>
            </Slide>

            <Slide>
                <img src="/assets/css-writing-mode/sizing-ltr-tb.svg" alt="" className="full_image"/>
            </Slide>

            <Slide>
                <img src="/assets/css-writing-mode/sizing-ttb-rl.svg" alt="" className="full_image"/>
            </Slide>

            <Slide className="slide">
                <h2>Логические 🥰💄🥳 свойства 🤩🥵💅</h2>
                <div className="columns two">
            <pre className="smaller">
                <code>div {"{"}</code>
                    <code>  border-color: lavender;</code>
                    <code>  border-width: 3px;</code>
                    <code>{"}"}</code>
                <code>div:dir(ltr) {"{"}</code>
                    <code>  border-left-style: solid;</code>
                    <code>{"}"}</code>
                <code>div:dir(rtl) {"{"}</code>
                    <code>  border-right-style: solid;</code>
                    <code>{"}"}</code>
            </pre>
                    <pre className="small">
                <code>div {"{"}</code>
                    <code>  border-inline-start: </code>
                    <code>    0.2em solid lavender;</code>
                    <code>{"}"}</code>
            </pre>
                </div>
            </Slide>

            <Slide>
                <h2>Границы</h2>
                <div className={cx("columns", "five")}>
                    <code>border</code>
                    <div className={cx("flexColumn")}>
                        <code>-left</code>
                        <code>-right</code>
                        <code>-top</code>
                        <code>-bottom</code>
                    </div>
                    <div>=></div>
                    <code>border</code>
                    <div className={cx("flexColumn")}>
                        <code>-inline-start</code>
                        <code>-inline-end</code>
                        <code>-block-start</code>
                        <code>-block-end</code>
                    </div>
                </div>
            </Slide>

            <Slide>
                <div className={cx("columns", "five", "smaller")}>
                    <code>border</code>
                    <div className={cx("flexColumn")}>
                        <code>-left-width</code>
                        <code>-right-width</code>
                        <code>-top-width</code>
                        <code>-bottom-width</code>
                    </div>
                    <div>=></div>
                    <code>border</code>
                    <div className={cx("flexColumn")}>
                        <code>-inline-start-width</code>
                        <code>-inline-end-width</code>
                        <code>-block-start-width</code>
                        <code>-block-end-width</code>
                    </div>
                </div>

                <div className={cx("columns", "five", "smaller")}>
                    <code>border</code>
                    <div className={cx("flexColumn")}>
                        <code>-left-style</code>
                        <code>-right-style</code>
                        <code>-top-style</code>
                        <code>-bottom-style</code>
                    </div>
                    <div>=></div>
                    <code>border</code>
                    <div className={cx("flexColumn")}>
                        <code>-inline-start-style</code>
                        <code>-inline-end-style</code>
                        <code>-block-start-style</code>
                        <code>-block-end-style</code>
                    </div>
                </div>

                <div className={cx("columns", "five", "smaller")}>
                    <code>border</code>
                    <div className={cx("flexColumn")}>
                        <code>-left-color</code>
                        <code>-right-color</code>
                        <code>-top-color</code>
                        <code>-bottom-color</code>
                    </div>
                    <div>=></div>
                    <code>border</code>
                    <div className={cx("flexColumn")}>
                        <code>-inline-start-color</code>
                        <code>-inline-end-color</code>
                        <code>-block-start-color</code>
                        <code>-block-end-color</code>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Границы</h2>
                <pre>
            <code></code>
            <code>border-inline: 0.2em solid;</code>
        </pre>
                <div className={cx("flex", 'example')}>
                    <div>
                        <h3>Header</h3>
                        <span>Small text text text</span>
                    </div>
                    <div className={classes.japanese}>
                        <h3>タイトル</h3>
                        <span>小さい 文章 文章 文章</span>
                    </div>
                    <div className={classes.arabic}>
                        <h3>عنوان</h3>
                        <span>نص نص صغير</span>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Границы</h2>
                <pre>
            <code></code>
            <code>border-block: 0.2em solid;</code>
        </pre>
                <div className={cx("flex", 'example2')}>
                    <div>
                        <h3>Header</h3>
                        <span>Small text text text</span>
                    </div>
                    <div className={classes.japanese}>
                        <h3>タイトル</h3>
                        <span>小さい 文章 文章 文章</span>
                    </div>
                    <div className={classes.arabic}>
                        <h3>عنوان</h3>
                        <span>نص نص صغير</span>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Отступы</h2>
                <div className={cx("columns", "five")}>
                    <code>margin</code>
                    <div className={cx("flexColumn")}>
                        <code>-left</code>
                        <code>-right</code>
                        <code>-top</code>
                        <code>-bottom</code>
                    </div>
                    <div>=></div>
                    <code>margin</code>
                    <div className={cx("flexColumn")}>
                        <code>-inline-start</code>
                        <code>-inline-end</code>
                        <code>-block-start</code>
                        <code>-block-end</code>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Отступы</h2>
                <div className={cx("columns three", "margin")}>
                    <code>margin: 0 10px;</code>
                    <span>🤔🤔🤔🤔</span>
                    <code>margin: 10px 0;</code>
                </div>
                <div className={cx("next", "center")}>
                    <span>🥳<code>margin-inline: 10px 0;</code>🥳</span>
                </div>
            </Slide>

            <Slide>
                <h2>Позиционирование</h2>
                <div className={cx("columns three", "positioning")}>
                    <div className={cx("flexColumn")}>
                        <code>left</code>
                        <code>right</code>
                        <code>top</code>
                        <code>bottom</code>
                    </div>
                    <div>=></div>
                    <div className={cx("flexColumn")}>
                        <code>inset-inline-start</code>
                        <code>inset-inline-end</code>
                        <code>inset-block-start</code>
                        <code>inset-block-end</code>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Позиционирование: <code>inset</code></h2>
                <div className="columns two">
            <pre>
                <code>position: absolute;</code>
                <code>left: 0</code>
                <code>right: 0</code>
                <code>top: 0</code>
                <code>bottom: 0</code>
            </pre>
                    <div className={cx("inset_example")}/>
                </div>
            </Slide>

            <Slide>
                <h2>Позиционирование: <code>inset</code></h2>
                <div className="columns two">
            <pre>
                <code>position: absolute;</code>
                <code>inset: 0</code>
                <span>🥳🥳🥳🥳</span>
            </pre>
                    <div className={cx("inset_example")}/>
                </div>
            </Slide>

            <Slide>
                <h2>Позиционирование: <code>inset</code></h2>
                <div className="columns two">
            <pre>
                <code>position: absolute;</code>
                <code>inset: 0</code>
                <span>🥳🥳🥳🥳</span>
            </pre>
                    <div className={cx("inset_example")}/>
                </div>
            </Slide>

            <Slide>
                <h2>Новые значение</h2>
                <ol className={cx("activeList")}>
                    <li className={cx("active")}><code>caption-side</code></li>
                    <li><code>float, clear</code></li>
                    <li><code>text-align</code></li>
                </ol>
                <div className="columns two">
                    <p>
                        <code>top</code>,<code>bottom</code>
                    </p>
                    <div className={cx("flexColumn")}>
                        <code>block-start</code>
                        <code>block-end</code>
                        <code>inline-start</code>
                        <code>inline-end</code>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Новые значение</h2>
                <ol className={cx("activeList")}>
                    <li><code>caption-side</code></li>
                    <li className={cx("active")}><code>float, clear</code></li>
                    <li><code>text-align</code></li>
                </ol>

                <div className="columns two">
                    <p>
                        <code>left</code>,<code>right</code>
                    </p>
                    <div className={cx("flexColumn")}>
                        <code>inline-start</code><code>inline-end</code>
                    </div>
                </div>
            </Slide>

            <section className="slide">
                <h2>Новые значение</h2>
                <ol className={cx("activeList")}>
                    <li><code>caption-side</code></li>
                    <li><code>float, clear</code></li>
                    <li className={cx("active")}><code>text-align</code></li>
                </ol>

                <div className="columns two">
                    <p>
                        <code>left</code>,<code>right</code>
                    </p>
                    <div className={cx("flexColumn")}>
                        <code>inline-start</code><code>inline-end</code>
                    </div>
                </div>
            </section>

            <Slide className="slide">
                <h3>Всё про box sizing</h3>
                <p> Размеры, отступы, границы</p>
                <h3>Всё про box model</h3>
                <p> Розиционирование, обтекание</p>
            </Slide>

            <Slide className="slide">
                <h2 className={"shout shrink"}>А нужно ли мне это прямо сейчас?</h2>
            </Slide>


            <Slide className="slide">
                <h2 className={"shout shrink"}>Скорее всего нет.</h2>
            </Slide>
        </>
    )
}