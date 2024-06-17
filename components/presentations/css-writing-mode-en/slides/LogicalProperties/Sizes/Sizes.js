import Slide from "../../../../../base/Slide/Slide";

import classes from './Sizes.module.css'

import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

export default function Sizes() {
    return (
        <>
            <Slide>
                <h2>Размеры</h2>
                <div className={cx("columns three", "positioning")}>
                    <div className={cx("flexColumn")}>
                        <code>width</code>
                        <code>height</code>
                    </div>
                    <div>=></div>
                    <div className={cx("flexColumn")}>
                        <code>inline-size</code>
                        <code>block-size</code>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Размеры</h2>
                <pre><code>width: 300px;</code></pre>
                <div className={cx("flex", 'example1', 'example')}>
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
                <h2>Размеры</h2>
                <pre><code>inline-size: 300px;</code></pre>
                <div className={cx("flex", 'example2', 'example')}>
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
                <h2>Размеры</h2>
                <pre><code>width: 300px;</code></pre>
                <div className={cx("flex", 'example3', "example")}>
                    <div className={cx("rotate")}>
                        <h3>rotate: 90deg</h3>
                        <p>text text text</p>
                    </div>
                    <div className={cx("writing")}>
                        <h3>writing-mode</h3>
                        <p>text text text</p>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Размеры</h2>
                <pre><code>inline-size: 300px;</code></pre>
                <div className={cx("flex", 'example4', "example")}>
                    <div className={cx("rotate")}>
                        <h3>rotate: 90deg</h3>
                        <p>text text text</p>
                    </div>
                    <div className={cx("writing")}>
                        <h3>writing-mode</h3>
                        <p>text text text</p>
                    </div>
                </div>
            </Slide>
        </>
    )
}