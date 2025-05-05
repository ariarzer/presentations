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
                        <code>    color: red;</code>
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
                        <code>  div {'{'}</code>
                        <code>    content: 'color';</code>
                        <code>    color: red;</code>
                        <code>  {'}'}</code>
                        <code>＜/style></code>
                    </pre>
                    <center>
                        <span className={cx('example')}>color</span>
                    </center>
                </div>
            </Slide>

            <Slide>
            <h2>Пытались ли вы когда-нибудь обратится к псевдоэлементу из JavaScript ?</h2>
            </Slide>

            <Slide>
                <h2>Их нет дома (в DOM)</h2>
                <img src="/assets/boxes-and-trees/who_is_there.png" alt="" className={cx("picture")}/>
            </Slide>

            <Slide>
                <h2>На самом деле, CSS стилизует на HTML</h2>
            </Slide>

            <Slide className={'center'}>
                    <blockquote style={{width: '60%'}}>CSS берет исходный html-документ, организованный как <b>дерево
                        элементов и текстовых узлов</b>, и отображает его на холсте.
                        <error>добавить снизу ссылку для красивости</error></blockquote>

            </Slide>

            <Slide className={'center'}>
                <blockquote style={{width: '50%'}}>Для этого он генерирует промежуточную структуру - <b>дерево боксов</b>.
               <error>добавить снизу ссылку для красивости</error></blockquote>

            </Slide>

            <Slide className={'center'}>
                <blockquote style={{width: '50%'}}>Для создания <b>дерева боксов</b> CSS сначала использует
                    каскадирование и наследование, чтобы назначить вычисленное значение для каждого свойства CSS
                    каждому элементу и текстовому узлу в исходном дереве.
               <error>добавить снизу ссылку для красивости</error></blockquote>

            </Slide>

            <Slide className={'center'}>
                <blockquote style={{width: '50%'}}>Затем для каждого элемента CSS генерирует ноль или более боксов,
                    как указано в свойстве <code>display</code> этого элемента.
               <error>добавить снизу ссылку для красивости</error></blockquote>
            </Slide>

        </>
    )
}