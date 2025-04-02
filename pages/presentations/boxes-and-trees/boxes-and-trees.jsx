import Layout from "../../../components/base/Layuot/Layuot";
import Slide from "../../../components/base/Slide/Slide";

import classNames from 'classnames/bind';
import classes from './boxes-and-trees.module.css';

const cx = classNames.bind(classes);

export default function index() {
    return (
        <Layout header={'Деревья и коробки'} theme={'webStorm'} appearance={'dark'}>
            <Slide className={cx('myself','noBadge')}>
                <h3>Валитова София</h3>
                <h2>Деревья и коробки</h2>
                <div className={cx("tags")}>
                    <span className={"next"}>🇫🇮</span>
                    <span className={"next"}>
                        DCM
                    </span>
                    <span className={"next"}>
                        <img src="/assets/logo.svg"/>
                    </span>
                    <span className={"next"}>🏊🏻‍🧊</span>
                    <span className={"next"}>🎌</span>
                </div>
            </Slide>


            <Slide>
                <h2>Источники</h2>
                <ul>
                    <li>Спецификация <a target="_blank"
                                        href="https://www.w3.org/TR/css-cascade-4/">css-cascade-4</a></li>
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