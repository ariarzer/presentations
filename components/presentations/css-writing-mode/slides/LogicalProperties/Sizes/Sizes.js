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
                <pre><code>border-block: 0.2em solid;</code></pre>
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
        </>
    )
}