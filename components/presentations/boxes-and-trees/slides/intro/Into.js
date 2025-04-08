import Slide from "../../../../base/Slide/Slide";

export default function Into() {
    return (
        <>
            <Slide>
                <h2>CSS придает внешний вид HTML-элементам</h2>
            </Slide>

            <Slide>
                <h2>А что на счет псевдоэлементов?</h2>
                <error>пример</error>
            </Slide>

            <Slide>
                <h2>На самом деле то, что мы видим - не совсем html</h2>
                <error>пример</error>
            </Slide>

            <Slide>
                <h2>CSS берет исходный html-документ, организованный как <b>дерево элементов и текстовых узлов</b>,
                    и отображает его на холсте.</h2>
                <error>пример</error>
            </Slide>

            <Slide>
                <h2>Для этого он генерирует промежуточную структуру, <b>дерево боксов</b></h2>
                <error>пример</error>
            </Slide>

            <Slide>
                <h2>боксы, прогоны, узлы</h2>
                <error>пример</error>
            </Slide>

            <Slide>
                <h2>но сначала мы считаем все значения</h2>
                <error>пример</error>
            </Slide>

            <Slide>
                <h2>0 или больше боксов, зависит от display</h2>
                <error>пример</error>
            </Slide>

            <Slide>
                <h2>Анонимные блоки</h2>
                <error>пример</error>
            </Slide>

            <Slide>
                <h2>фрагментация</h2>
                <error>пример</error>
            </Slide>
        </>
    )
}