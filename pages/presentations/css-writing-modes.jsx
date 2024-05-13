import Layout from "../../components/base/Layuot/Layuot";
import Slide from "../../components/base/Slide/Slide";

import Intro from "../../components/base/Intro/Intro";
import Conclusion from '../../components/base/Сonclusion';
import Overview from "../../components/presentations/css-writing-mode/slides/Overview/Overview";
import Problem from "../../components/presentations/css-writing-mode/slides/Problem/Problem";
import Theory from "../../components/presentations/css-writing-mode/slides/Theory/Theory";
import HowToInfluenceOnIT from "../../components/presentations/css-writing-mode/slides/HowToInfluenceOnIT/HowToInfluenceOnIT";
import HowItInfluenceOnUs from "../../components/presentations/css-writing-mode/slides/HowItInfluenceOnUs/HowItInfluenceOnUs";
import LogicalProperties
    from "../../components/presentations/css-writing-mode/slides/LogicalProperties/LogicalProperties";
import Outside from "../../components/presentations/css-writing-mode/slides/Outside/Outside";

export default function index() {
    return (
        <Layout
            lang={'ru'}
            header={'Режимы написания в CSS'}
        >
            <Slide className={"noBadge"}>
                <h2 className={"shout shrink"}>Режимы написания <br/>в CSS</h2>
            </Slide>

            <Intro/>

            <Overview/>
            <Problem />
            <Theory />
            <HowToInfluenceOnIT />
            <HowItInfluenceOnUs />
            <LogicalProperties />
            <Outside />

            <Slide>
                <h2>Итого</h2>
                <ul>
                    <li>Языков много</li>
                    <li>Физическая система координат не походит для стилизации текста</li>
                    <li>Удобнее использовать flows relative</li>
                    <li>Её осями можно управлять</li>
                    <li>Лучше использовать логические свойства, чем не использовать</li>
                    <li>Не только, потому что они зависимы от потока</li>
                </ul>
            </Slide>

            <Conclusion/>
        </Layout>
    );
}