import Slide from "../../../../base/Slide/Slide";

export default function DeclaredValue() {
    return (
        <>
            <Slide>
                <h2>Declared value</h2>
                <p>Список всех значений, подходящих этому элементу.</p>
                <ul>
                    <li>Селектор</li>
                    <li>Условия</li>
                    <li>Проверка типа</li>
                </ul>
            </Slide>

            <Slide>
                <h2>Declared value</h2>
                <p>Список всех значений, подходящих этому элементу.</p>
                <div className={'columns two'}>
                    <ul className={'nextList'}>
                        <li className={'active'}>Селектор</li>
                        <li>Условия</li>
                        <li>Проверка типа</li>
                    </ul>
                    <pre className={'smaller'}>
                        <code>{'<div class="a">CSS</div>'}</code>
                        <code>{'<style>'}</code>
                        <code className={'next next-light false'}>{'  #id { /* ... */ }'}</code>
                        <code className={'next next-light true'}>{'  .a { /* ... */ }'}</code>
                        <code className={'next next-light true'}>{'  div { /* ... */ }'}</code>
                        <code>{'</style>'}</code>
                    </pre>
                </div>
            </Slide>
            <Slide>
                <h2>Declared value</h2>
                <p>Сбор всех деклараций свойства, применимых к элементу</p>
                <div className={'columns two'}>
                    <ul className={'nextList'}>
                        <li>Селектор</li>
                        <li className={'active'}>Условия</li>
                        <li>Проверка типа</li>
                    </ul>
                    <pre className={'smaller'}>
                        <code>{'<div class="a">Safari IOs</div>'}</code>
                        <code>{'<style>'}</code>
                        <code className={'next next-light false'}>{'  @media (max-width: 600px) {}'}</code>
                        <code className={'next next-light true'}>{'  @supports (display: flex) {}'}</code>
                        <code className={'next next-light true'}>{'  @media (min-width: 1200px) {}'}</code>
                        <code>{'</style>'}</code>
                    </pre>
                </div>
            </Slide>
            <Slide>
                <h2>Declared value</h2>
                <p>Сбор всех деклараций свойства, применимых к элементу</p>
                <div className={'columns two'}>
                    <ul className={'nextList'}>
                        <li>Селектор</li>
                        <li>Условия</li>
                        <li className={'active'}>Проверка типа</li>
                    </ul>
                    <pre className={'smaller'}>
                        <code>{'<div class="a">CSS</div>'}</code>
                        <code>{'<style>'}</code>
                        <code>{'  .a {'}</code>
                        <code className={'next next-light false'}>{'    height: 12ms;'}</code>
                        <code className={'next next-light true'}>{'    height: 12em;'}</code>
                        <code className={'next next-light true'}>{'    height: calc(50%);'}</code>
                        <code>{'  }'}</code>
                        <code>{'</style>'}</code>
                    </pre>
                </div>
            </Slide>
            <Slide>
                <h2>Проверка типа</h2>
                <img src="/assets/css-value-processing/css_height.png" alt="" className="picture"/>
            </Slide>
            {/*<Slide>*/}
            {/*    <h2>Value Definition Syntax</h2>*/}
            {/*    <p></p>*/}
            {/*</Slide>*/}
            <Slide>
                <h2>Проверка типа</h2>
                <img src="/assets/css-value-processing/text_shadow.png" alt="" className="picture"/>
            </Slide>
            <Slide>
                <h2>Проверка типа</h2>
                <pre lang="vds">
                <code>&lt;'text-shadow'> = </code>
                <code>{'  none | [ <color>? && <length>{2,3} ]#'}</code>
                </pre>
                <pre lang="css">
                    <code className="next true next-light">text-shadow: black 0.1em 0.1em 0.2em;</code>
                    <code className="next true next-light">text-shadow: 0.1em 0.1em black;</code>
                    <code className="next false next-light">text-shadow: 0.1em;</code>
                </pre>
                <a href="https://www.youtube.com/watch?v=o3oFkckaJGo&list=PLcXJ90eZ2bxjlewIlnsC_dQZeX7BHtnut&index=3"
                   className="next">подробнее про типы данных в CSS</a>
            </Slide>
            <Slide>
                <img src="/assets/css-value-processing/declared_value.png"
                     alt=""
                     className="picture center"
                     style={{'border': '1px solid'}}
                />
            </Slide>

            <Slide>
                <h2>Короткие свойства (shorthand)</h2>
                <img src="/assets/css-value-processing/long_hand.png"
                     alt=""
                     className="picture center"
                     style={{'border': '1px solid'}}
                />
            </Slide>

            <Slide>
                <h2>Короткие свойства (shorthand)</h2>
                <pre>
                    <code>background: url('image.svg');</code>
                </pre>
                <p> то же самое, что:</p>
                <pre>
                    <code>background-image: url('image.svg');</code>
                    <code>background-color: initial;</code>
                    <code>background-origin: initial;</code>
                    <code>....</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Короткие свойства (shorthand)</h2>
                <div className={'columns two'}>
                <pre>
                    <code><b>border-left</b>:</code>
                    <code>    10px solid red;</code>
                    <code><b>border-color</b>:</code>
                    <code>    purple;</code>
                    <code><b>border</b>:</code>
                    <code>    5px solid;</code>
                </pre>
                    <div style={{
                        'border-left': '10px dashed red',
                        'border-color': 'purple',
                        'border': '5px solid',
                    }}/>
                </div>
            </Slide>

            <Slide>
                <h2>Вернемся к вопросу с фоном</h2>
            </Slide>
            <Slide>
                <h2>Выбрили декларации для этого блока</h2>
                <table>
                    <thead>
                    <tr>
                        <td>свойство</td>
                        <td>значение</td>
                        <td>селектор</td>
                        <td>место</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>border-left-color</td>
                        <td>red</td>
                        <td>.class</td>
                        <td>index.html:12</td>
                    </tr>
                    <tr>
                        <td>border-left-style</td>
                        <td>solid</td>
                        <td>#id</td>
                        <td>style.css:14</td>
                    </tr>
                    <tr>
                        <td>border-left-width</td>
                        <td>10px</td>
                        <td>-</td>
                        <td>style attribute</td>
                    </tr>
                    </tbody>
                </table>
            </Slide>
        </>
    )
}