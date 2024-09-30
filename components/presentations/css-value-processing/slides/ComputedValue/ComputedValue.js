import Slide from "../../../../base/Slide/Slide";

import classes from './ComputedValue.module.css';

export default function ComputedValue() {
    return (<>
            <Slide>
                <h2>Computed value</h2>
                <p className={"next"}>Значение, которое наследуется.</p>
            </Slide>
            <Slide className={"noBadge"}>
                <div className={classes.ComputedValue__border}>
                    <pre lang="css">
                        <code>height: 100px;<span className="next"> // => 100px</span></code>
                    </pre>
                    <div className={classes.ComputedValue__border}>
                            <pre lang="css">
                                <code>height: inherit<span className="next"> // => 100px </span></code>
                            </pre>
                    </div>
                </div>
            </Slide>
            <Slide className={"noBadge"}>
                <div className={classes.ComputedValue__border}>
                    <pre lang="css">
                        <code>font-size: 10px;</code>
                    </pre>
                    <div className={classes.ComputedValue__border}>
                        <pre lang="css">
                            <code>height: 5em;<span className="next"> // => 50px<span className="next"> CV=50px </span></span></code>
                        </pre>
                        <div className={classes.ComputedValue__border}>
                            <pre lang="css" className="no-code" style={{'margin-bottom': '0 !important'}}>
                                <code>font-size: 20px;</code>
                                <code>height: inherit;<span className="next"> // => 50px <span
                                    className="next"> CV=50px </span></span> </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide>
                <h2>Computed value</h2>
                <ol>
                    <li>Вычисляются зависимые величины.</li>
                </ol>
            </Slide>
            <Slide className={"noBadge"}>
                <div className={classes.ComputedValue__border}>
                        <pre lang="css">
                            <code>height: 100px; <span className="next">// => 100px</span></code>
                        </pre>
                    <div className={classes.ComputedValue__border}>
                                <pre lang="css">
                                    <code>height: 50%; <span className="next">// => 50px<span
                                        className="next"> CV = 50%</span></span></code>
                                </pre>
                        <div className={classes.ComputedValue__border}>
                                    <pre lang="css">
                                        <code>height: inherit;<span className="next"> // => 25px<span className="next"> CV = 50%</span></span> </code>
                                    </pre>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide>
                <h2>Computed value</h2>
                <ol>
                    <li>Вычисляются зависимые величины. <b>Кроме процентов!</b></li>
                </ol>
            </Slide>
            <Slide className={"noBadge"}>
                <div className={classes.ComputedValue__border}>
                    <pre lang="css">
                        <code>--h: 100px;</code>
                    </pre>
                    <div className={classes.ComputedValue__border}>
                        <pre lang="css">
                            <code>height: var(--h);<span className="next"> // => 100px <span
                                className="next"> CV=100px </span></span></code>
                        </pre>
                        <div className={classes.ComputedValue__border}>
                            <pre lang="css" className="no-code" style={{'margin-bottom': '0 !important'}}>
                                <code>--h: 10px;</code>
                                <code>height: inherit;<span className="next"> // => 100px <span
                                    className="next"> CV=100px </span></span> </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide>
                <h2>Computed value</h2>
                <ol>
                    <li>Проценты не вычисляются. Но остальные зависимые величины вычисляются.</li>
                    <li>Подставляются переменные.</li>
                </ol>

                <p className={'next'}>После этого этапа у нас есть значение, в котором посчитано все, что можно
                    посчитать без отрисовки документа.</p>
            </Slide>
        </>);
}