import Layout from "../../components/base/Layuot/Layuot";
import Slide from "../../components/base/Slide/Slide";

import Intro from "../../components/base/Intro/Intro";
import Conclusion from '../../components/base/Сonclusion';

export default function index() {
    return (
        <Layout
            lang={'en'}
            header={'Writing modes in CSS and their support'}
        >
            <Intro/>

            <Conclusion/>
        </Layout>
    );
}