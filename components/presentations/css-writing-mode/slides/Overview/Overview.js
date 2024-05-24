import Slide from "../../../../base/Slide/Slide";

import classes from './Overview.module.css'

import classNames from 'classnames/bind';
const cx = classNames.bind(classes);

export default function Overview() {
    return (
        <>
            <Slide>
                <h2>Мы будем говорить про:</h2>
                <ul>
                    <li>режимы написания текста</li>
                    <li>их поддержку в интерфейсах</li>
                </ul>
            </Slide>

            <Slide>
                <h2 className="shout shrink">7151 язык</h2>
            </Slide>

            <Slide>
                <h2 className="shout shrink small">120-500 письменностей</h2>
            </Slide>

            <Slide>
                <h2 className="shout shrink small">4 режима письма</h2>
            </Slide>

            <Slide>
                <h2>Слева направо cверху вниз - LTR</h2>
                <p>What do we need to make a cake:</p>
                <ul>
                    <li>flour</li>
                    <li>eggs</li>
                    <li>milk</li>
                </ul>
                <p> Everything must be mixed in equal proportions and baked in the oven over low heat. Serve with fruit
                    and whipped cream.</p>
            </Slide>
            <Slide>
                <h2>Справа налево cверху вниз - RTL</h2>
                <div className={classes.arabic}>
                    <p>ماذا نحتاج لعمل كعكة:</p>
                    <ul>
                        <li>دقيق</li>
                        <li>بيض</li>
                        <li>الحليب</li>
                    </ul>
                    <p> يجب خلط كل شيء بنسب متساوية وخبزه في الفرن على نار خفيفة. تقدم مع الفاكهة والكريمة المخفوقة.</p>
                </div>
            </Slide>
            <Slide>
                <h2>Сверху вниз справа налево</h2>
                <div className={classes.japanese}>
                    <p> ケーキを作るために必要なもの：</p>
                    <ul>
                        <li>小麦粉</li>
                        <li>卵</li>
                        <li>ミルク</li>
                    </ul>
                    <p> すべてを同じ割合で混ぜ合わせ、弱火でオーブンで焼く必要があります。
                        フルーツとホイップクリームを添えて。</p>
                </div>
            </Slide>
            <Slide>
                <h2>Сверху вниз слева направо</h2>
                <img src="/assets/css-writing-mode/mongolian_site.png"
                     alt=""
                     className={cx("full_image", classes.img)}
                     width={"60%"}
                />
            </Slide>

            <Slide>
                <iframe src="https://president.mn/mng/" frameborder="0" className={cx("full_image", classes.iframe)} />
            </Slide>

            <Slide>
                <h2>Контролы</h2>
                <div className={cx("columns", "three", "controls")} >
                    <div className={classes.eng}>
                        <input type="text" placeholder={"enter text"}/>
                        <input type="range" min={"0"} max={"100"}/>
                        <textarea name="" id="" cols="25" rows="10" placeholder={"enter text"}/>
                        <table>
                            <tbody>
                            <tr>
                                <td>cell 1</td>
                                <td>cell 2</td>
                            </tr>
                            <tr>
                                <td>cell 3</td>
                                <td>cell 4</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={classes.arabic}>
                        <input type="text" placeholder={"كتب النص"}/>
                        <input type="range" min={"0"} max={"100"}/>
                        <textarea name="" id="" cols="25" rows="10" placeholder={"كتب النص"}/>
                        <table>
                            <tbody>
                            <tr>
                                <td>خلية 1</td>
                                <td>خلية 2</td>
                            </tr>
                            <tr>
                                <td>خلية 3</td>
                                <td>خلية 4</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={classes.japanese}>
                        <input type="text" placeholder={"テキストを書く"}/>
                        <input type="range" min={"0"} max={"100"}/>
                        <textarea name="" id="" cols="25" rows="10" placeholder={"テキストを書く"}/>
                        <table>
                            <tbody>
                            <tr>
                                <td>セル 1</td>
                                <td>セル 2</td>
                            </tr>
                            <tr>
                                <td>セル 3</td>
                                <td>セル 4</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </Slide>
        </>
    )
}