import Slide from "../../../../base/Slide/Slide";

import classes from './Intro.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function Into() {
    return (
        <>
            <Slide>
                <h2>Принято считать...</h2>
                <p>CSS придает внешний вид HTML-элементам</p>
                <div className="columns two">
                    <pre className={'smaller'}>
                        <code>＜div>color＜/div></code>
                        <code>＜style></code>
                        <code>  div {'{'}</code>
                        <code>    color: orange;</code>
                        <code>  {'}'}</code>
                        <code>＜/style></code>
                    </pre>
                    <center>
                        <span className={cx('example')}>color</span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2>А что на счет псевдоэлементов?</h2>
                <div className="columns two">
                    <pre className={'smaller'}>
                        <code>＜div>＜/div></code>
                        <code>＜style></code>
                        <code>  div::after {'{'}</code>
                        <code>    content: 'color';</code>
                        <code>    color: orange;</code>
                        <code>  {'}'}</code>
                        <code>＜/style></code>
                    </pre>
                    <center>
                        <span className={cx('example')}>color</span>
                    </center>
                </div>
            </Slide>

            <Slide>
                <h2 className={cx('smallHeader', 'shout', 'shrink')}>Пытались ли вы когда-нибудь <br/>обратится к
                    псевдоэлементу <br/>из JavaScript ?</h2>
            </Slide>

            <Slide>
                <h2 className={cx('querySelector', 'shout')}><code>document.querySelector("div::before");</code></h2>
            </Slide>

            <Slide>
                <h2>Их нет дома (в DOM)</h2>
                <img src="/assets/boxes-and-trees/who_is_there.png" alt="" className={cx("picture")}/>
            </Slide>

            <Slide>
                <h2 className={'shout'}>На самом деле, CSS <br/>стилизует нe HTML</h2>
            </Slide>

            <Slide>
                <h2>Позиционирование</h2>
                <div className={cx('example', 'principal')}>
                    <div className={cx('example', 'principal')}>
                        <div className={cx('example', 'principal')}></div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Позиционирование</h2>
                <div className={cx('example', 'relative')}>
                    <div className={cx('example', 'principal')} style={{width:'70%'}}>
                        <div className={cx('example', 'absolute')}></div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Позиционирование</h2>
                <div className={cx('example', 'relative')}>
                    <div className={cx('example', 'principal')} style={{width: '70%'}}>
                        <div className={cx('example', 'absolute')} style={{width: '120%'}}>width: 100%;</div>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2 className={'shout'}>Существует какой-то еще порядок вложенности <br/>блоков чем как в DOM</h2>
            </Slide>

            <Slide>
                <h2 className={'shout'}>Идём в спецификацию</h2>
            </Slide>

            <Slide className={'center'}>
                <blockquote style={{width: '60%'}}>CSS берет исходный html-документ, организованный как <b>дерево
                        элементов и текстовых узлов</b>, и отображает его на холсте.
                    </blockquote>
                    <div className={cx('spec_link')}>Источник: <a href="https://www.w3.org/TR/css-display-3/#intro">css-display-3</a></div>
            </Slide>

            <Slide className={'center'}>
                <blockquote style={{width: '60%'}}>Для этого он генерирует промежуточную структуру - <b>дерево
                    боксов</b>.</blockquote>

                <div className={cx('spec_link')}>Источник: <a
                    href="https://www.w3.org/TR/css-display-3/#intro">css-display-3</a></div>
            </Slide>

            <Slide className={'center'}>
                <blockquote style={{width: '60%'}}>Для создания <b>дерева боксов</b> CSS сначала использует
                    каскадирование и наследование, чтобы назначить <b>вычисленное значение</b> для каждого свойства CSS
                    каждому элементу и текстовому узлу в исходном дереве.
                </blockquote>
                <div className={cx('spec_link')}>Источник: <a
                    href="https://www.w3.org/TR/css-display-3/#intro">css-display-3</a></div>
            </Slide>

            <Slide className={'center'}>
                <blockquote style={{width: '60%'}}>Затем для каждого элемента CSS генерирует ноль или более боксов,
                    как указано в свойстве <code>display</code> этого элемента.
                </blockquote>
                <div className={cx('spec_link')}>Источник: <a
                    href="https://www.w3.org/TR/css-display-3/#intro">css-display-3</a></div>
            </Slide>

        </>
    )
}