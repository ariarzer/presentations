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
            <Intro/>

            <Slide className={"noBadge"}>
                <h2 className={"shout shrink"}>Режимы написания <br/>в CSS</h2>
            </Slide>

            <Overview/>
            <Problem />
            <Theory />
            <HowToInfluenceOnIT />
            <HowItInfluenceOnUs />
            <LogicalProperties />
            {/*<Outside />*/}

            <Slide>
                <h2>Итого</h2>
                <ul>
                    <li className={"next"}>Языков много</li>
                    <li className={"next"}>Физическая система координат не походит для стилизации текста</li>
                    <li className={"next"}>Удобнее использовать зависимую от текста</li>
                    <li className={"next"}>Её осями можно управлять</li>
                    <li className={"next"}>Лучше использовать логические свойства, чем не использовать</li>
                    <li className={"next"}>Не только, потому что они зависимы от потока</li>
                </ul>
            </Slide>

            <Conclusion/>
        </Layout>
    );
}