import Slide from "../../../../base/Slide/Slide";

import classes from './HowToInfluenceOnIT.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function HowToInfluenceOnIT() {
    return (
        <>
            <Slide>
                <h2><code className="small">direction</code></h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li className={cx("active")}>ltr</li>
                        <li>rtl</li>
                    </ul>
                    <img src="/assets/css-writing-mode/ltr.svg" alt="" className={cx("side_image")}/>
                </div>
            </Slide>
            <Slide>
                <h2><code className="small">direction</code></h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>ltr</li>
                        <li className={cx("active")}>rtl</li>
                    </ul>
                    <img src="/assets/css-writing-mode/rtl.svg" alt="" className={cx("side_image")}/>
                </div>
            </Slide>

            <Slide>
                <h2><code className="small">writing-mode</code></h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li className={cx("active")}>horizontal-tb</li>
                        <li>vertical-lr</li>
                        <li>vertical-rl</li>
                        <li>sideways-rl</li>
                        <li>sideways-lr</li>
                    </ul>
                    <img src="/assets/css-writing-mode/horisontal-tb.svg" alt="" className={cx("side_image")}/>
                </div>
            </Slide>

            <Slide>
                <h2><code className="small">writing-mode</code></h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>horizontal-tb</li>
                        <li className={cx("active")}>vertical-lr</li>
                        <li>vertical-rl</li>
                        <li>sideways-rl</li>
                        <li>sideways-lr</li>
                    </ul>
                    <img src="/assets/css-writing-mode/vertical-lr.svg" alt="" className={cx("side_image")}/>
                </div>
            </Slide>

            <Slide>
                <h2><code className="small">writing-mode</code></h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>horizontal-tb</li>
                        <li>vertical-lr</li>
                        <li className={cx("active")}>vertical-rl</li>
                        <li>sideways-rl</li>
                        <li>sideways-lr</li>
                    </ul>
                    <img src="/assets/css-writing-mode/vertical-rl.svg" alt="" className={cx("side_image")}/>
                </div>
            </Slide>

            <Slide>
                <h2><code className="small">writing-mode</code></h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>horizontal-tb</li>
                        <li>vertical-lr</li>
                        <li>vertical-rl</li>
                        <li className={cx("active")}>sideways-rl</li>
                        <li className={cx("active")}>sideways-lr</li>
                    </ul>
                </div>
            </Slide>

            <Slide>
                <h2>Типографический режим</h2>
                <p>Это концепция, отличающая вертикальный набор текста от горизонтального набора с поворотом.</p>
            </Slide>

            <Slide>
                <h2>Типографический режим</h2>
                <div className={cx("columns two", 'typo_mode')}>
                    <div>
                        <p className={cx("example_side", "next", "next_style")}>Этот текст просто повернут на бок.</p>
                        <p className={cx("smaller")}>Этот текст просто повернут на бок</p>
                    </div>
                    <div>
                        <p className={cx("example_vertical", "next", "next_style")}>
                            Этот текст написан в вертикальном режиме письма.</p>
                        <p className={cx("smaller")}>Этот текст написан в вертикальном режиме</p>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2><code className="small">writing-mode</code></h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>horizontal-tb</li>
                        <li>vertical-lr</li>
                        <li>vertical-rl</li>
                        <li className={cx("active")}>sideways-rl</li>
                        <li>sideways-lr</li>
                    </ul>
                    <img src="/assets/css-writing-mode/sideways-rl.svg" alt="" className={cx("side_image")}/>
                </div>
            </Slide>

            <Slide>
                <h2><code className="small">writing-mode</code></h2>
                <div className="columns two">
                    <ul className={cx("activeList")}>
                        <li>horizontal-tb</li>
                        <li>vertical-lr</li>
                        <li>vertical-rl</li>
                        <li>sideways-rl</li>
                        <li className={cx("active")}>sideways-lr</li>
                    </ul>
                    <img src="/assets/css-writing-mode/sideways-lr.svg" alt="" className={cx("side_image")}/>
                </div>
            </Slide>

            <Slide>
                <h2>Теперь мы можем управлять осями.</h2>
                <h2 className="next">А как они управляют нами?</h2>
            </Slide>
        </>
    )
}