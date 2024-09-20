import Slide from "../../../../base/Slide/Slide";


export default function UsedValue() {
    return (
        <>
            <Slide>
                <h2 className={"shout"}>Used value</h2>
            </Slide>

            <Slide>
                <h2>Считаем проценты</h2>
                <pre>
                    <code>height: 50%; </code>
                    <code>    /* CV = 50% */</code>
                    <code>    /* UV = 25px */</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Считаем <code>calc()</code></h2>
                <pre>
                    <code>width: calc(100px - 50%); /* UV = 25px */</code>
                    <code>    /* CV = calc(100px - 50%) */</code>
                    <code>    /* UV = 25px */</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Считаем <code>calc-size()</code></h2>
                <pre>
                    <code>height: calc-size(auto, size - 50%);</code>
                    <code>    /* CV = calc-size(auto, size - 50%);</code>
                    <code>    /* UV = 25px */</code>
                </pre>
            </Slide>
        </>
    )
}