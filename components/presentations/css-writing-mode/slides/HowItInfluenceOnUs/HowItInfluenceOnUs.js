import Slide from "../../../../base/Slide/Slide";

import classes from './HowItInfluenceOnUs.module.css'

import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

export default function HowItInfluenceOnUs() {
    return (
        <>
            <Slide>
                <h2>Flex</h2>
                <div className="columns two">
                    <pre>
                        <code>display: flex;</code>
                        <code>gap: 1em;</code>
                    </pre>
                    <div className={cx("flex_demo")}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Flex</h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li className={cx("active")}>writing-mode: horizontal-tb</li>
                        <li>direction: rlt</li>
                        <li>writing-mode: vertical-lr</li>
                    </ul>
                    <div className={cx("flex_demo")}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Flex</h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>writing-mode: horizontal-tb</li>
                        <li className={cx("active")}>direction: rlt</li>
                        <li>writing-mode: vertical-lr</li>
                    </ul>
                    <div className={cx("flex_demo", "arabic")}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Flex</h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>writing-mode: horizontal-tb</li>
                        <li>direction: rlt</li>
                        <li className={cx("active")}>writing-mode: vertical-lr</li>
                    </ul>
                    <div className={cx("flex_demo", "japanese")}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Flex</h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>writing-mode: horizontal-tb</li>
                        <li>direction: rlt</li>
                        <li className={cx("active")}>writing-mode: vertical-lr</li>
                    </ul>
                    <div className={cx("flex_demo", "japanese")}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Grid</h2>
                <div className="columns two">
                    <pre>
                        <code>display: grid;</code>
                        <code>grid-template-columns: </code>
                        <code>  repeat(auto-fill, 2em);</code>
                        <code>grid-template-rows: </code>
                        <code>  repeat(auto-fill, 2em);</code>
                        <code>gap: 1em;</code>
                    </pre>
                    <div className={cx("grid_demo")}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Grid</h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li className={cx("active")}>writing-mode: horizontal-tb</li>
                        <li>direction: rlt</li>
                        <li>writing-mode: vertical-lr</li>
                    </ul>
                    <div className={cx("grid_demo")}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Grid</h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>writing-mode: horizontal-tb</li>
                        <li className={cx("active")}>direction: rlt</li>
                        <li>writing-mode: vertical-lr</li>
                    </ul>
                    <div className={cx("grid_demo", "arabic")}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Grid</h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>writing-mode: horizontal-tb</li>
                        <li>direction: rlt</li>
                        <li className={cx("active")}>writing-mode: vertical-lr</li>
                    </ul>
                    <div className={cx("grid_demo", "japanese")}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Таблицы</h2>
                <div className={"columns three"}>
                    <table className={cx("eng")}>
                        <tbody>
                        <tr>
                            <td>cell 1</td>
                            <td>cell 2</td>
                        </tr>
                        <tr>
                            <td>cell 3</td>
                            <td>cell 4</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className={cx("arabic")}>
                        <tbody>
                        <tr>
                            <td>خلية 1</td>
                            <td>خلية 2</td>
                        </tr>
                        <tr>
                            <td>خلية 3</td>
                            <td>خلية 4</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className={cx("japanese")}>
                        <tbody>
                        <tr>
                            <td>セル 1</td>
                            <td>セル 2</td>
                        </tr>
                        <tr>
                            <td>セル 3</td>
                            <td>セル 4</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Slide>

            <Slide>
                <h2>Текст</h2>
                <h2>Списки</h2>
                <h2>Контролы</h2>
            </Slide>

            <Slide>
                <h2 className={"shout shrink"}>Просто не мешайте браузеру</h2>
            </Slide>
        </>
    )
}