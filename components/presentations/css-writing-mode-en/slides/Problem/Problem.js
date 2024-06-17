import Slide from "../../../../base/Slide/Slide";

import classes from './Problem.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function Overview() {
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
                <h2>Для английского</h2>
                <pre>
                    <code>.span {"{"}</code>
                    <code>  border-left: 3px solid;</code>
                    <code>{"}"}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Для арабского</h2>
                <pre>
                    <code>.span {"{"}</code>
                    <code>  border-right: 3px solid;</code>
                    <code>{"}"}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Для японского</h2>
                <pre>
                    <code>.span {"{"}</code>
                    <code>  border-top: 3px solid;</code>
                    <code>{"}"}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Как бы это объединить?</h2>
                <pre className={"next"}>
                    <code>.span:dir(ltr) {"{"}</code>
                    <code>  border-left: 3px solid;</code>
                    <code>{"}"}</code>
                    <code>.span:dir(rtl) {"{"}</code>
                    <code>  border-right: 3px solid;</code>
                    <code>{"}"}</code>
                </pre>
            </Slide>

            <Slide>
                <h2 className={"shout shrink"}>Для вертикального режима письма пседвоклассов нет</h2>
            </Slide>

            <Slide>
                <h2 className={"shout shrink"}>??????</h2>
            </Slide>

            <Slide>
                <h2 className={"shout shrink"}>Почему у нас вообще есть такие проблемы?</h2>
            </Slide>
        </>
    )
}