import Slide from "../../../../base/Slide/Slide";

import classes from './ComputedValue.module.css';

export default function ComputedValue() {
    return (<>
            <Slide>
                <h2>Computed value</h2>
                <p>Значение, которое наследуется.</p>
            </Slide>
            <Slide>
                <h2>Computed value</h2>
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
            <Slide>
                <h2>Computed value</h2>
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
                    <li>Проценты не вычисляются. Остальные зависимые величины да.</li>
                </ol>
            </Slide>
            <Slide>
                <h2>Computed value</h2>
                <div className={classes.ComputedValue__border}>
                    <pre lang="css">
                        <code>--c: tomato;</code>
                    </pre>
                    <div className={classes.ComputedValue__border}>
                        <pre lang="css">
                            <code>color: var(--c);<span className="next"> // => tomato <span
                                className="next"> CV=tomato </span></span></code>
                        </pre>
                        <div className={classes.ComputedValue__border}>
                            <pre lang="css" className="no-code" style={{'margin-bottom': '0 !important'}}>
                                <code>--c: gold;</code>
                                <code>color: inherit;<span className="next"> // => tomato <span
                                    className="next"> CV=tomato </span></span> </code>
                            </pre>
                        </div>
                    </div>
                </div>
            </Slide>
            <Slide>
                <h2>Computed value</h2>
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
                    <li>Проценты не вычисляются. Остальные зависимые величины да.</li>
                    <li>Подставляются переменные.</li>
                </ol>

                <p className={'next'}>После этого этапа у нас есть значение, в котором посчитано все, что можно
                    посчитать без отрисовки документа.</p>
            </Slide>

            <Slide>
                здесь будет про кальк, если у меня есть время
            </Slide>
        </>);
}