import Layout from "../components/base/Layuot/Layuot";
import Slide from "../components/base/Slide/Slide";

import CascadedValue from "../components/presentations/css-value-processing/slides/CascadedValue/CascadedValue.js"
import DeclaredValue from "../components/presentations/css-value-processing/slides/DeclaredValue/DeclaredValue"
import ComputedValue from "../components/presentations/css-value-processing/slides/ComputedValue/ComputedValue.js"
import SpecifiedValue from "../components/presentations/css-value-processing/slides/SpecifiedValue/SpecifiedValue.js"
import UsedValue from "../components/presentations/css-value-processing/slides/UsedValue/UsedValue.js"
import ActualValue from "../components/presentations/css-value-processing/slides/ActualValue/ActualValue.js"
import Intro from "../components/presentations/Intro/Intro";
import SpecialIntro from "../components/presentations/css-value-processing/slides/Intro/Intro";

export default function index() {
    return (
        <Layout header={'От декларации до отображения'}>
            <Intro/>

            <SpecialIntro/>

            <DeclaredValue/>
            <CascadedValue/>
            <SpecifiedValue/>

            <Slide>
                <h2 className={'shout'}>Теперь у свойства точно есть значение</h2>
            </Slide>
            <ComputedValue/>
            <UsedValue/>
            <ActualValue/>

            <Slide>
                <h2>Итого</h2>
                <error>дописать</error>
            </Slide>

            <Slide>
                <h2>Источники</h2>
                <ul>
                    <ul>
                        <li>Спецификация <a target="_blank" href="https://www.w3.org/TR/css-cascade-4/">css-cascade-4</a></li>
                        <li><a href="https://ru.ariarzer.dev/articles/2021/value-definition-syntax.html">Про Value Definition Syntax</a></li>
                        <li><a href="https://ru.ariarzer.dev/articles/2020/css-value-processing.html">Про Value Procesing</a></li>
                        <li><a target="_blank" href="https://lists.w3.org/Archives/Public/www-style/">Почтовая расслыка</a> www-style</li>
                    </ul>
                </ul>
            </Slide>

            <Slide>
                <h2>София Валитова из <a href="https://cube.dev/">Cube</a></h2>
                <ul className="smaller">
                    <li><a>ariarzer@gmail.com</a></li>
                    <li>Twitter – <a href="https://twitter.com/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>ВКонтакте – <a href="https://vk.com/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>Telegram – <a href="https://t.me/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>Мой канал про css – <a href="https://t.me/css_mind" target="_blank">@css_mind</a></li>
                    <li>Мой блог про css – <a href="https://ru.ariarzer.dev" target="_blank">ariarzer.dev</a></li>
                    <li>Patreon – <a href="https://www.patreon.com/ariarzer" target="_blank">@ariarzer</a></li>
                </ul>

                <p className="small">Презентация сделана с помощью <a href="https://shwr.me/">Shower</a>.</p>
            </Slide>
        </Layout>
);
}