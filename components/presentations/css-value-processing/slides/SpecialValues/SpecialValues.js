import Slide from "../../../../base/Slide/Slide";

export default function DeclaredValue() {
    return (
        <>
            <Slide>
                <h2>Некоторые специальные значение</h2>
                <ul>
                    <li><code>initial</code></li>
                    <li><code>inherit</code></li>
                    <li><code>revert</code></li>
                    <li><code>unset</code></li>
                </ul>
            </Slide>

            <Slide>
                <h2><code>initial</code></h2>
                <img src="/assets/css-value-processing/border-color-define.png" alt="" className={'picture'}/>
            </Slide>

            <Slide>
                <h2><code>inherit</code></h2>
                <p>Берем CascadedValue родителя (наследованное значение).</p>
            </Slide>

            <Slide>
                <h2><code>unset</code></h2>
                <p>Берем наследованное значение, если свойство наследуется, и initial, если не наследуется.</p>
            </Slide>

            <Slide>
                <h2><code>revert</code></h2>
                <p>Берем наследованное значение, если свойство наследуется, и значение из UserAgent-а, если не наследуется.</p>
            </Slide>

        </>
    )
}