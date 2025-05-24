import Layout from "../../../components/base/Layuot/Layuot";
import Slide from "../../../components/base/Slide/Slide";

import classNames from 'classnames/bind';
import BoxTree from "../../../components/presentations/boxes-and-trees/slides/BoxTree/BoxTree";
import InterestingCases
    from "../../../components/presentations/boxes-and-trees/slides/InterestingCases/InterestingCases";
import Into from "../../../components/presentations/boxes-and-trees/slides/intro/Into";
import Values from "../../../components/presentations/boxes-and-trees/slides/Values/Values";
import classes from './boxes-and-trees.module.css';

const cx = classNames.bind(classes);

export default function index() {
    return (
        <Layout header={'Деревья и коробки'} theme={'webStorm'} appearance={'dark'}>
            <Slide className={cx('myself','noBadge')}>
                <h3>Валитова София</h3>
                <h2>Деревья и коробки</h2>
                <div className={cx("tags")}>
                    <span className={"next"}>
                        <img src="/assets/logo.svg"/>
                    </span>
                    <span className={"next"}>🇫🇮</span>
                    <span className={"next"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330"><line fill="#00c6ff" x1="194.78"
                                                                                            y1="194.46" x2="278.81"
                                                                                            y2="279.67"></line><path
                            d="M278.81,298.63a18.91,18.91,0,0,1-13.41-5.55l-99.24-99.24A19,19,0,1,1,193,167l99.23,99.23a19,19,0,0,1-13.41,32.38Z"
                            fill="#00c6ff"></path><circle fill="#00c6ff" cx="163.82" cy="159.27" r="126.56"></circle><circle
                            fill="#0058a1" cx="163.82" cy="159.27" r="94.77"></circle><path fill="#fff"
                                                                                            d="M142.88,183.21a9.56,9.56,0,0,1-6.78-2.81l-28.28-28.29a9.57,9.57,0,0,1,0-13.55l28.28-28.29a9.59,9.59,0,0,1,13.56,13.56l-21.51,21.5,21.51,21.51a9.59,9.59,0,0,1-6.78,16.37Z"></path><path
                            fill="#fff"
                            d="M184.75,211.07A9.59,9.59,0,0,1,178,194.7l21.51-21.5L178,151.69a9.59,9.59,0,0,1,13.56-13.56l28.28,28.29a9.58,9.58,0,0,1,0,13.56l-28.28,28.28A9.56,9.56,0,0,1,184.75,211.07Z"></path></svg>
                        DCM
                    </span>
                    <span className={"next"}>🏊🏻‍🧊</span>
                    <span className={"next"}>🎌</span>
                </div>
            </Slide>

            <Into/>
            <Values/>
            <BoxTree/>
            <InterestingCases/>

            <Slide>
                <h2>Выводы</h2>
                <p>CSS оперирует не блоками, которые вы видите в html, но боксами, сгенерированными на их основе.</p>
                <ul>
                    <li>Количеством боксов можно управлять и это иногда полезно.</li>
                    <li>Порядок вычисления относительных размеров не по DOM.</li>
                </ul>
            </Slide>

            <Slide>
                <h2>Источники</h2>
                <ul>
                    <li>Спецификация <a target="_blank"
                                        href="https://www.w3.org/TR/css-display-3/">css-display-3</a></li>
                    <li><a href="https://ru.ariarzer.dev/articles/2021/value-definition-syntax.html">Про Value
                        Definition Syntax</a></li>
                    <li><a href="https://ru.ariarzer.dev/articles/2020/css-value-processing.html">Про Value
                        Processing</a></li>
                    <li><a target="_blank" href="https://lists.w3.org/Archives/Public/www-style/">Почтовая
                        рассылка</a> www-style
                    </li>
                </ul>
            </Slide>

            <Slide>
                <h2>София Валитова из <a href="https://dcm.dev/">DCM</a></h2>
                <ul className="smaller">
                    <li><a>ariarzer@gmail.com</a></li>
                    <li>Twitter – <a href="https://twitter.com/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>Telegram – <a href="https://t.me/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>Мой канал про css – <a href="https://t.me/css_mind" target="_blank">@css_mind</a></li>
                    <li>Мой блог про css – <a href="https://ru.ariarzer.dev" target="_blank">ariarzer.dev</a></li>
                </ul>

                <p className="small">Презентация сделана с помощью <a href="https://shwr.me/">Shower</a>.</p>
            </Slide>
        </Layout>
    );
}