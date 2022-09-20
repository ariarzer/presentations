import Slide from "../../../../base/Slide/Slide";


export default function UsedValue() {
    return (
        <>
            <Slide>
                <h2>Used value</h2>
                <p>На этом этапе считаем оставшееся.</p>
                <pre>
                    <code>height: 50%; /* UV = 25px */</code>
                    <code>width: calc(100px - 50%); /* UV = 25px */</code>
                </pre>
            </Slide>
        </>
    )
}