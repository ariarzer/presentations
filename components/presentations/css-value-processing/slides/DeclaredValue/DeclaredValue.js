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
                </div>
            </Slide>

            <Slide>
                <h2>Селектор</h2>
                <pre>
                    <code>{'<div class="a">CSS</div>'}</code>
                    <code>{'<style>'}</code>
                    <code className={'next next-light false'}>{'  #id { /* ... */ }'}</code>
                    <code className={'next next-light true'}>{'  .a { /* ... */ }'}</code>
                    <code className={'next next-light true'}>{'  div { /* ... */ }'}</code>
                    <code>{'</style>'}</code>
                </pre>
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
                </div>
            </Slide>

            <Slide>
                <h2>Условия</h2>
                <pre>
                    <code>{'<div class="a">Safari IOs</div>'}</code>
                    <code>{'<style>'}</code>
                    <code className={'next next-light true'}>{'  @media (max-width: 600px) {}'}</code>
                    <code className={'next next-light true'}>{'  @supports (display: flex) {}'}</code>
                    <code className={'next next-light false'}>{'  @media (min-width: 1200px) {}'}</code>
                    <code>{'</style>'}</code>
                </pre>
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
                </div>
            </Slide>

            <Slide>
                <h2 className={'noMargin'}>Проверка типа</h2>
                <pre>
                    <code>{'<div class="a">CSS</div>'}</code>
                    <code>{'<style>'}</code>
                    <code>{'  .a {'}</code>
                    <code className={'next next-light false'}>{'    height: 12ms;'}</code>
                    <code className={'next next-light true'}>{'    height: 12em;'}</code>
                    <code>{'  }'}</code>
                    <code>{'</style>'}</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Проверка типа</h2>

                <a href="https://www.youtube.com/watch?v=o3oFkckaJGo&list=PLcXJ90eZ2bxjlewIlnsC_dQZeX7BHtnut&index=3"
                   className="next">подробнее про типы данных в CSS</a>
                <img src="/assets/css-value-processing/css_height.png" alt="" className="picture"/>
            </Slide>

            <Slide>
                <img src="/assets/css-value-processing/declared_value.png"
                     alt=""
                     className="picture center"
                     style={{'border': '1px solid'}}
                />
            </Slide>

            <Slide>
                <h2>Короткие свойства (shorthand) 🦖</h2>
                <img src="/assets/css-value-processing/long_hand.png"
                     alt=""
                     className="picture center"
                     style={{'border': '1px solid'}}
                />
            </Slide>

            <Slide>
                <h2>Короткие свойства (shorthand) 🦖</h2>
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
                <img src="/assets/css-value-processing/bg-color.png"
                     alt=""
                     className="full_image"
                     style={{'border': '1px solid', width: '80%'}}
                />
            </Slide>
            <Slide>
                <h2>Выбрали декларации</h2>
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
                    <tr className={'next next-light false'}>
                        <td>border-left-color</td>
                        <td>red</td>
                        <td><code>#abc</code></td>
                        <td>cssWritingModes.html:12</td>
                    </tr>
                    <tr>
                        <td>border-left-style</td>
                        <td>solid</td>
                        <td><code>#id</code></td>
                        <td>style.css:14</td>
                    </tr>
                    <tr>
                        <td>height</td>
                        <td>10px</td>
                        <td>-</td>
                        <td>style attribute</td>
                    </tr>
                    <tr>
                        <td>color</td>
                        <td>green</td>
                        <td><code>[attr='value']</code></td>
                        <td>style.css:6</td>
                    </tr>
                    <tr className={'next next-light false'}>
                        <td>border-left-color</td>
                        <td>red</td>
                        <td><code>.a</code></td>
                        <td>style.css:123</td>
                    </tr>
                    </tbody>
                </table>
            </Slide>
        </>
    )
}