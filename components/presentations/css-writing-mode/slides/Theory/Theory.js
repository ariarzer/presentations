import Slide from "../../../../base/Slide/Slide";

import classes from './Theory.module.css'

import classNames from 'classnames/bind';

const cx = classNames.bind(classes);

export default function Theory() {
    return (
        <>
            <Slide>
                <h2 className={"shout shrink"}>Потому что мы используем физическую систему координат</h2>
            </Slide>

            <Slide>
                <img src="/assets/css-writing-mode/phisical_coord.png" alt=""
                     className={cx("full_image")}/>
            </Slide>

            <Slide>
                <h2>Как можно описать режим письма?</h2>
                <ul>
                    <li className={"next"}>Куда направлена строка.</li>
                    <li className={"next"}>Куда будет переноситься строка, если в одну строку текст не влезет.</li>
                    <li className={"next"}>Куда ориентированы буквы в строке.</li>
                </ul>
                <p className={"next"}>* с точки зрения блочной модели</p>
            </Slide>

            <Slide>
                <h2>Как можно описать режим письма?</h2>
                <div className={cx("columns")}>
                    <p className={cx("", "")}>今は午後3時15分です。</p>
                    <p className={cx("", "japanese")}>今は午後3時15分です。</p>
                    <p className={cx("", "japanese")}>
                        <span>
                            <span>今</span>
                            <span>は</span>
                            <span>午</span>
                            <span>後</span>
                            <span className={cx("", "japanese", "upright")}>3</span>
                            <span>時</span>
                            <span className={cx("", "japanese", "upright")}>15</span>
                            <span>分</span>
                            <span>で</span>
                            <span>す。</span>
                        </span>
                    </p>
                </div>
            </Slide>

            <Slide>
                <h2>Как можно описать режим письма?</h2>
                <ul>
                    <li className={""}>Куда направлена строка.</li>
                    <li className={""}>Куда будет переноситься строка, если в одну строку текст не влезет.</li>
                    <li className={""}>Куда ориентированы буквы в строке.</li>
                </ul>
                <p className={""}>* с точки зрения блочной модели</p>
            </Slide>

            <Slide className={"noBadge"}>
                <img src="https://pbs.twimg.com/media/FahcWSqUYAA5hpp?format=png&name=large" alt=""
                     className={cx("full_image")}/>
            </Slide>

            <Slide className={"noBadge"}>
                <h2>Направление потока блоков</h2>
                <img src="https://ru.ariarzer.dev/articles/2022/img/css-coordinate-system/block-flow-vertical_2024.png"
                     alt="" className={cx("full_image")}/>
            </Slide>

            <Slide className={"noBadge"}>
                <h2>Направление потока блоков</h2>
                <img
                    src="https://ru.ariarzer.dev/articles/2022/img/css-coordinate-system/block-flow-horizontal_2024.png"
                    alt="" className={cx("full_image")}/>
            </Slide>

            <Slide className={"noBadge"}>
                <h2>Направление строки</h2>
                <img src="https://ru.ariarzer.dev/articles/2022/img/css-coordinate-system/inline-base_2024.png"
                     alt="" className={cx("full_image")}/>
            </Slide>

            <Slide className={"noBadge"}>
                <h2>Ориентация строки</h2>
                <img src="/assets/css-writing-mode/inline-base_%20jap.png"
                     alt="" className={cx("full_image")}/>
            </Slide>

            <Slide className={"noBadge"}>
                <h2>Ориентация строки</h2>
                <img src="https://ru.ariarzer.dev/articles/2022/img/css-coordinate-system/line-orientation_2024.png"
                     alt="" className={cx("full_image")}/>
            </Slide>

            <Slide className={"noBadge"}>
                <h2>Собака в штанах</h2>
                <img src="/assets/css-writing-mode/dog_in_pants.png"
                     alt="" className={cx("full_image")}/>
            </Slide>

            <Slide className={"noBadge"}>
                <img src="https://pbs.twimg.com/media/FahcWSqUYAA5hpp?format=png&name=large" alt=""
                     className={cx("full_image")}/>
            </Slide>

            <Slide>
                <h2 className="shout shrink small">Как можно влиять <br/>на эти три оси?</h2>
            </Slide>
        </>
    )
}