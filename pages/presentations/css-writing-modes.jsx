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

export default function index() {
    return (
        <Layout
            lang={'ru'}
            header={'Режимы написания в CSS'}
        >
            <Intro/>

            <Overview />
            <Problem />
            <Theory />
            <HowToInfluenceOnIT />
            <HowItInfluenceOnUs />
            <LogicalProperties />

            <Conclusion/>
        </Layout>
    );
}