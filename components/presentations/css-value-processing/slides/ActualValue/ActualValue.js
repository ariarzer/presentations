import Slide from "../../../../base/Slide/Slide";


export default function ActualValue() {
    return (
        <>
            <Slide>
                <h2>Actual value</h2>
                <p>Преобразования на основе ограничений среды.</p>
                <ul>
                    <li>Округление пикселей до целых.</li>
                    <li>Приведение цвета в тот, который может отобразить экран.</li>
                </ul>
            </Slide>
        </>
    )
}