import Layout from "../../../components/base/Layuot/Layuot";
import Slide from "../../../components/base/Slide/Slide";

import CascadedValue from "../../../components/presentations/css-value-processing/slides/CascadedValue/CascadedValue.js"
import DeclaredValue from "../../../components/presentations/css-value-processing/slides/DeclaredValue/DeclaredValue"
import ComputedValue from "../../../components/presentations/css-value-processing/slides/ComputedValue/ComputedValue.js"
import SpecifiedValue
    from "../../../components/presentations/css-value-processing/slides/SpecifiedValue/SpecifiedValue.js"
import UsedValue from "../../../components/presentations/css-value-processing/slides/UsedValue/UsedValue.js"
import ActualValue from "../../../components/presentations/css-value-processing/slides/ActualValue/ActualValue.js"
import SpecialIntro from "../../../components/presentations/css-value-processing/slides/Intro/Intro";

import classNames from 'classnames/bind';
import classes from './css-value-processing.module.css';

const cx = classNames.bind(classes);

export default function index() {
    return (
        <Layout header={'От декларации до отображения'} theme={'webStorm'} appearance={'dark'}>
            {/*<Slide id="myself" className={'noBadge'}>*/}
            {/*    <center>*/}
            {/*        <div>*/}
            {/*            <h2>Меня зовут София. Я - CSS инженер.</h2>*/}
            {/*            <img src="/assets/logo_dark.svg" alt="" className={cx("logo")}/>*/}
            {/*        </div>*/}
            {/*    </center>*/}
            {/*</Slide>*/}
            <Slide className={cx('myself','noBadge')}>
                <h3>Валитова София</h3>
                <h2>От декларации <br/>до отображения</h2>
            </Slide>

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
                <h2>Один слайд, чтобы править всеми</h2>
                <ul>
                    <li>Отбираем декларации</li>
                    <li>Выбираем одну</li>
                    <li>Наследуем её</li>
                    <li>Вычисляем</li>
                    <li>Отрисовываем на устройстве</li>
                </ul>
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
                <h2>София Валитова из <a href="https://www.kiskolabs.com/en//">KiskoLabs</a></h2>
                <ul className="smaller">
                    <li><a>ariarzer@gmail.com</a></li>
                    <li>Twitter – <a href="https://twitter.com/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>ВКонтакте – <a href="https://vk.com/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>Telegram – <a href="https://t.me/ariarzer" target="_blank">@ariarzer</a></li>
                    <li>Мой канал про css – <a href="https://t.me/css_mind" target="_blank">@css_mind</a></li>
                    <li>Мой блог про css – <a href="https://ru.ariarzer.dev" target="_blank">ariarzer.dev</a></li>
                    <li>Patreon – <a href="https://www.patreon.com/ariarzer" target="_blank">@ariarzer</a></li>
                </ul>

                <svg width="300" height="300" fill="none" xmlns="http://www.w3.org/2000/svg" className={cx("qr")}>
                    <g fill="currentColor">
                        <circle cx="6" cy="126" r="6"/>
                        <circle cx="6" cy="162" r="6"/>
                        <circle cx="6" cy="174" r="6"/>
                        <circle cx="6" cy="186" r="6"/>
                        <circle cx="6" cy="198" r="6"/>
                        <circle cx="18" cy="102" r="6"/>
                        <circle cx="18" cy="114" r="6"/>
                        <circle cx="18" cy="126" r="6"/>
                        <circle cx="18" cy="162" r="6"/>
                        <circle cx="18" cy="174" r="6"/>
                        <circle cx="18" cy="186" r="6"/>
                        <circle cx="30" cy="102" r="6"/>
                        <circle cx="30" cy="174" r="6"/>
                        <circle cx="42" cy="114" r="6"/>
                        <circle cx="42" cy="150" r="6"/>
                        <circle cx="54" cy="102" r="6"/>
                        <circle cx="54" cy="114" r="6"/>
                        <circle cx="54" cy="126" r="6"/>
                        <circle cx="54" cy="150" r="6"/>
                        <circle cx="54" cy="162" r="6"/>
                        <circle cx="54" cy="186" r="6"/>
                        <circle cx="54" cy="198" r="6"/>
                        <circle cx="66" cy="102" r="6"/>
                        <circle cx="66" cy="126" r="6"/>
                        <circle cx="66" cy="150" r="6"/>
                        <circle cx="66" cy="186" r="6"/>
                        <circle cx="66" cy="198" r="6"/>
                        <circle cx="78" cy="102" r="6"/>
                        <circle cx="78" cy="126" r="6"/>
                        <circle cx="78" cy="150" r="6"/>
                        <circle cx="78" cy="174" r="6"/>
                        <circle cx="78" cy="198" r="6"/>
                        <circle cx="90" cy="102" r="6"/>
                        <circle cx="90" cy="126" r="6"/>
                        <circle cx="90" cy="138" r="6"/>
                        <circle cx="102" cy="6" r="6"/>
                        <circle cx="102" cy="18" r="6"/>
                        <circle cx="102" cy="42" r="6"/>
                        <circle cx="102" cy="78" r="6"/>
                        <circle cx="102" cy="90" r="6"/>
                        <circle cx="102" cy="138" r="6"/>
                        <circle cx="102" cy="150" r="6"/>
                        <circle cx="102" cy="174" r="6"/>
                        <circle cx="102" cy="186" r="6"/>
                        <circle cx="102" cy="198" r="6"/>
                        <circle cx="102" cy="222" r="6"/>
                        <circle cx="102" cy="234" r="6"/>
                        <circle cx="102" cy="246" r="6"/>
                        <circle cx="102" cy="270" r="6"/>
                        <circle cx="102" cy="282" r="6"/>
                        <circle cx="114" cy="6" r="6"/>
                        <circle cx="114" cy="18" r="6"/>
                        <circle cx="114" cy="30" r="6"/>
                        <circle cx="114" cy="102" r="6"/>
                        <circle cx="114" cy="114" r="6"/>
                        <circle cx="114" cy="138" r="6"/>
                        <circle cx="114" cy="150" r="6"/>
                        <circle cx="114" cy="198" r="6"/>
                        <circle cx="114" cy="210" r="6"/>
                        <circle cx="114" cy="222" r="6"/>
                        <circle cx="114" cy="294" r="6"/>
                        <circle cx="126" cy="6" r="6"/>
                        <circle cx="126" cy="18" r="6"/>
                        <circle cx="126" cy="30" r="6"/>
                        <circle cx="126" cy="54" r="6"/>
                        <circle cx="126" cy="78" r="6"/>
                        <circle cx="126" cy="90" r="6"/>
                        <circle cx="126" cy="138" r="6"/>
                        <circle cx="126" cy="150" r="6"/>
                        <circle cx="126" cy="198" r="6"/>
                        <circle cx="126" cy="210" r="6"/>
                        <circle cx="126" cy="222" r="6"/>
                        <circle cx="126" cy="246" r="6"/>
                        <circle cx="126" cy="282" r="6"/>
                        <circle cx="126" cy="294" r="6"/>
                        <circle cx="138" cy="6" r="6"/>
                        <circle cx="138" cy="30" r="6"/>
                        <circle cx="138" cy="42" r="6"/>
                        <circle cx="138" cy="54" r="6"/>
                        <circle cx="138" cy="66" r="6"/>
                        <circle cx="138" cy="90" r="6"/>
                        <circle cx="138" cy="114" r="6"/>
                        <circle cx="138" cy="126" r="6"/>
                        <circle cx="138" cy="138" r="6"/>
                        <circle cx="138" cy="150" r="6"/>
                        <circle cx="138" cy="162" r="6"/>
                        <circle cx="138" cy="210" r="6"/>
                        <circle cx="150" cy="6" r="6"/>
                        <circle cx="150" cy="78" r="6"/>
                        <circle cx="150" cy="90" r="6"/>
                        <circle cx="150" cy="102" r="6"/>
                        <circle cx="150" cy="126" r="6"/>
                        <circle cx="150" cy="138" r="6"/>
                        <circle cx="150" cy="150" r="6"/>
                        <circle cx="150" cy="198" r="6"/>
                        <circle cx="150" cy="222" r="6"/>
                        <circle cx="150" cy="258" r="6"/>
                        <circle cx="150" cy="282" r="6"/>
                        <circle cx="150" cy="294" r="6"/>
                        <circle cx="162" cy="54" r="6"/>
                        <circle cx="162" cy="66" r="6"/>
                        <circle cx="162" cy="114" r="6"/>
                        <circle cx="162" cy="138" r="6"/>
                        <circle cx="162" cy="174" r="6"/>
                        <circle cx="162" cy="210" r="6"/>
                        <circle cx="162" cy="222" r="6"/>
                        <circle cx="162" cy="234" r="6"/>
                        <circle cx="162" cy="258" r="6"/>
                        <circle cx="162" cy="270" r="6"/>
                        <circle cx="162" cy="294" r="6"/>
                        <circle cx="174" cy="6" r="6"/>
                        <circle cx="174" cy="42" r="6"/>
                        <circle cx="174" cy="54" r="6"/>
                        <circle cx="174" cy="78" r="6"/>
                        <circle cx="174" cy="114" r="6"/>
                        <circle cx="174" cy="126" r="6"/>
                        <circle cx="174" cy="138" r="6"/>
                        <circle cx="174" cy="150" r="6"/>
                        <circle cx="174" cy="162" r="6"/>
                        <circle cx="174" cy="198" r="6"/>
                        <circle cx="174" cy="234" r="6"/>
                        <circle cx="174" cy="246" r="6"/>
                        <circle cx="174" cy="270" r="6"/>
                        <circle cx="174" cy="294" r="6"/>
                        <circle cx="186" cy="18" r="6"/>
                        <circle cx="186" cy="30" r="6"/>
                        <circle cx="186" cy="66" r="6"/>
                        <circle cx="186" cy="102" r="6"/>
                        <circle cx="186" cy="138" r="6"/>
                        <circle cx="186" cy="162" r="6"/>
                        <circle cx="186" cy="174" r="6"/>
                        <circle cx="186" cy="198" r="6"/>
                        <circle cx="186" cy="246" r="6"/>
                        <circle cx="186" cy="282" r="6"/>
                        <circle cx="198" cy="6" r="6"/>
                        <circle cx="198" cy="18" r="6"/>
                        <circle cx="198" cy="30" r="6"/>
                        <circle cx="198" cy="42" r="6"/>
                        <circle cx="198" cy="78" r="6"/>
                        <circle cx="198" cy="114" r="6"/>
                        <circle cx="198" cy="126" r="6"/>
                        <circle cx="198" cy="138" r="6"/>
                        <circle cx="198" cy="162" r="6"/>
                        <circle cx="198" cy="186" r="6"/>
                        <circle cx="198" cy="198" r="6"/>
                        <circle cx="198" cy="210" r="6"/>
                        <circle cx="198" cy="222" r="6"/>
                        <circle cx="198" cy="234" r="6"/>
                        <circle cx="198" cy="246" r="6"/>
                        <circle cx="198" cy="258" r="6"/>
                        <circle cx="198" cy="270" r="6"/>
                        <circle cx="210" cy="102" r="6"/>
                        <circle cx="210" cy="126" r="6"/>
                        <circle cx="210" cy="150" r="6"/>
                        <circle cx="210" cy="162" r="6"/>
                        <circle cx="210" cy="186" r="6"/>
                        <circle cx="210" cy="198" r="6"/>
                        <circle cx="210" cy="246" r="6"/>
                        <circle cx="210" cy="258" r="6"/>
                        <circle cx="210" cy="294" r="6"/>
                        <circle cx="222" cy="102" r="6"/>
                        <circle cx="222" cy="126" r="6"/>
                        <circle cx="222" cy="162" r="6"/>
                        <circle cx="222" cy="174" r="6"/>
                        <circle cx="222" cy="186" r="6"/>
                        <circle cx="222" cy="198" r="6"/>
                        <circle cx="222" cy="222" r="6"/>
                        <circle cx="222" cy="246" r="6"/>
                        <circle cx="222" cy="258" r="6"/>
                        <circle cx="222" cy="282" r="6"/>
                        <circle cx="222" cy="294" r="6"/>
                        <circle cx="234" cy="114" r="6"/>
                        <circle cx="234" cy="126" r="6"/>
                        <circle cx="234" cy="174" r="6"/>
                        <circle cx="234" cy="186" r="6"/>
                        <circle cx="234" cy="198" r="6"/>
                        <circle cx="234" cy="246" r="6"/>
                        <circle cx="234" cy="258" r="6"/>
                        <circle cx="234" cy="270" r="6"/>
                        <circle cx="234" cy="282" r="6"/>
                        <circle cx="234" cy="294" r="6"/>
                        <circle cx="246" cy="114" r="6"/>
                        <circle cx="246" cy="138" r="6"/>
                        <circle cx="246" cy="150" r="6"/>
                        <circle cx="246" cy="174" r="6"/>
                        <circle cx="246" cy="198" r="6"/>
                        <circle cx="246" cy="210" r="6"/>
                        <circle cx="246" cy="222" r="6"/>
                        <circle cx="246" cy="234" r="6"/>
                        <circle cx="246" cy="246" r="6"/>
                        <circle cx="246" cy="258" r="6"/>
                        <circle cx="246" cy="282" r="6"/>
                        <circle cx="258" cy="102" r="6"/>
                        <circle cx="258" cy="150" r="6"/>
                        <circle cx="258" cy="186" r="6"/>
                        <circle cx="258" cy="198" r="6"/>
                        <circle cx="258" cy="234" r="6"/>
                        <circle cx="258" cy="246" r="6"/>
                        <circle cx="258" cy="258" r="6"/>
                        <circle cx="258" cy="270" r="6"/>
                        <circle cx="270" cy="114" r="6"/>
                        <circle cx="270" cy="150" r="6"/>
                        <circle cx="270" cy="162" r="6"/>
                        <circle cx="270" cy="210" r="6"/>
                        <circle cx="270" cy="234" r="6"/>
                        <circle cx="270" cy="246" r="6"/>
                        <circle cx="270" cy="270" r="6"/>
                        <circle cx="270" cy="294" r="6"/>
                        <circle cx="282" cy="102" r="6"/>
                        <circle cx="282" cy="114" r="6"/>
                        <circle cx="282" cy="126" r="6"/>
                        <circle cx="282" cy="138" r="6"/>
                        <circle cx="282" cy="162" r="6"/>
                        <circle cx="282" cy="198" r="6"/>
                        <circle cx="282" cy="258" r="6"/>
                        <circle cx="294" cy="102" r="6"/>
                        <circle cx="294" cy="138" r="6"/>
                        <circle cx="294" cy="162" r="6"/>
                        <circle cx="294" cy="186" r="6"/>
                        <circle cx="294" cy="198" r="6"/>
                        <circle cx="294" cy="210" r="6"/>
                        <circle cx="294" cy="222" r="6"/>
                        <circle cx="294" cy="234" r="6"/>
                        <circle cx="294" cy="282" r="6"/>
                        <circle cx="294" cy="294" r="6"/>
                    </g>
                    <path
                        d="M0 30v24a30 30 0 0 0 30 30h54V30A30 30 0 0 0 54 0H0zm30-18h24a18 18 0 0 1 18 18v42H30a18 18 0 0 1-18-18V12z"
                        clip-rule="evenodd" fill="currentColor"/>
                    <path
                        d="M40.615 25.855c.803-1.218 2.659-1.218 3.462 0l4.846 7.283c.277.416.72.72 1.219.859l8.667 2.188c1.44.36 2.022 2.049 1.08 3.184l-5.677 6.702a1.94 1.94 0 0 0-.47 1.357l.526 8.64c.083 1.44-1.413 2.492-2.797 1.966l-8.363-3.13a1.995 1.995 0 0 0-1.496 0l-8.363 3.13c-1.384.526-2.88-.526-2.797-1.966l.526-8.64a1.856 1.856 0 0 0-.47-1.357l-5.677-6.702c-.942-1.107-.388-2.797 1.08-3.184l8.667-2.188c.499-.139.942-.415 1.219-.859l4.846-7.283z"
                        clip-rule="evenodd" fill="currentColor"/>
                    <path
                        d="M216 30v24a30 30 0 0 0 30 30h54V30a30 30 0 0 0-30-30h-54zm30-18h24a18 18 0 0 1 18 18v42h-42a18 18 0 0 1-18-18V12z"
                        clip-rule="evenodd" fill="currentColor"/>
                    <path
                        d="M256.615 25.855c.803-1.218 2.659-1.218 3.462 0l4.846 7.283c.277.416.72.72 1.219.859l8.667 2.188c1.44.36 2.022 2.049 1.08 3.184l-5.677 6.702a1.94 1.94 0 0 0-.47 1.357l.526 8.64c.083 1.44-1.413 2.492-2.797 1.966l-8.363-3.13a1.995 1.995 0 0 0-1.496 0l-8.363 3.13c-1.384.526-2.88-.526-2.797-1.966l.526-8.64a1.856 1.856 0 0 0-.47-1.357l-5.677-6.702c-.942-1.107-.388-2.797 1.08-3.184l8.667-2.188c.499-.139.942-.415 1.219-.859l4.846-7.283z"
                        clip-rule="evenodd" fill="currentColor"/>
                    <path
                        d="M0 246v24a30 30 0 0 0 30 30h54v-54a30 30 0 0 0-30-30H0zm30-18h24a18 18 0 0 1 18 18v42H30a18 18 0 0 1-18-18v-42z"
                        clip-rule="evenodd" fill="currentColor"/>
                    <path
                        d="M40.615 241.855c.803-1.218 2.659-1.218 3.462 0l4.846 7.283c.277.416.72.72 1.219.859l8.667 2.188c1.44.36 2.022 2.049 1.08 3.184l-5.677 6.702a1.94 1.94 0 0 0-.47 1.357l.526 8.64c.083 1.44-1.413 2.492-2.797 1.966l-8.363-3.13a1.995 1.995 0 0 0-1.496 0l-8.363 3.13c-1.384.526-2.88-.526-2.797-1.966l.526-8.64a1.856 1.856 0 0 0-.47-1.357l-5.677-6.702c-.942-1.107-.388-2.797 1.08-3.184l8.667-2.188c.499-.139.942-.415 1.219-.859l4.846-7.283z"
                        clip-rule="evenodd" fill="currentColor"/>
                </svg>

                <p className="small">Презентация сделана с помощью <a href="https://shwr.me/">Shower</a>.</p>
            </Slide>
        </Layout>
    );
}