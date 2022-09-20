import Slide from "../../../../base/Slide/Slide";

export default function SpecialIntro() {
    return (
        <>
            <Slide>
                <h2 className={'shout'}>От декларации до отображения</h2>
            </Slide>

            <Slide>
                <h2 className={'shout'}>Несколько вопросов</h2>
            </Slide>

            <Slide>
                <h2>
                    1. Будет ли видна анимация на блоке .blue ?</h2>
                <pre>
                    <code>{'.blue {'}</code>
                    <code>{'    color: blue !important;'}</code>
                    <code>{'    animation: animation 2s infinite;'}</code>
                    <code>{'}'}</code>
                    <code>{'@keyframes animation {'}</code>
                    <code>{'    50% { color: red; }'}</code>
                    <code>{'}'}</code>
                </pre>
            </Slide>

            <Slide>
                <iframe id="twitter-widget-2" scrolling="no" frameBorder="0" allowTransparency="true"
                        allowFullScreen="true" className="centerAbsolute"
                        style={{width: '550px', height: '500px'}}
                        title="Twitter Tweet"
                        src="https://platform.twitter.com/embed/Tweet.html?dnt=true&embedId=twitter-widget-5&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvZmYiLCJ2ZXJzaW9uIjpudWxsfX0%3D&frame=false&hideCard=false&hideThread=true&id=1569636624102735873&lang=en&origin=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps%253A%252F%252Ftwitter.com%252Fariarzer%252Fstatus%252F1572137832441081857%26widget%3DTweet&sessionId=21db47a21481359700ad93b0d0d6b413ed3c9a70&theme=light&widgetsVersion=1bfeb5c3714e8%3A1661975971032&width=550px"
                        data-tweet-id="1572137832441081857"/>
            </Slide>

            <Slide>
                <h2>
                    2. Какого цвета будет блок .class?</h2>
                <pre>
                    <code>{'.class {'}</code>
                    <code>{'    background-color: red;'}</code>
                    <code>{'    background: url(\'image.svg\');'}</code>
                    <code>{'}'}</code>
                </pre>
            </Slide>

            <Slide>
                <iframe id="twitter-widget-2" scrolling="no" frameBorder="0" allowTransparency="true"
                        allowFullScreen="true" className="centerAbsolute"
                        style={{width: '550px', height: '500px'}}
                        title="Twitter Tweet"
                        src="https://platform.twitter.com/embed/Tweet.html?dnt=true&embedId=twitter-widget-4&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19jaGluX3BpbGxzXzE0NzQxIjp7ImJ1Y2tldCI6ImNvbG9yX2ljb25zIiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9yZXN1bHRfbWlncmF0aW9uXzEzOTc5Ijp7ImJ1Y2tldCI6InR3ZWV0X3Jlc3VsdCIsInZlcnNpb24iOm51bGx9LCJ0Zndfc2Vuc2l0aXZlX21lZGlhX2ludGVyc3RpdGlhbF8xMzk2MyI6eyJidWNrZXQiOiJpbnRlcnN0aXRpYWwiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2V4cGVyaW1lbnRzX2Nvb2tpZV9leHBpcmF0aW9uIjp7ImJ1Y2tldCI6MTIwOTYwMCwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvZmYiLCJ2ZXJzaW9uIjpudWxsfX0%3D&frame=false&hideCard=false&hideThread=true&id=1570399446336434176&lang=en&origin=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps%253A%252F%252Ftwitter.com%252Fariarzer%252Fstatus%252F1572137832441081857%26widget%3DTweet&sessionId=21db47a21481359700ad93b0d0d6b413ed3c9a70&theme=light&widgetsVersion=1bfeb5c3714e8%3A1661975971032&width=550px"
                        data-tweet-id="1572137832441081857"/>
            </Slide>

            <Slide>
                <h2>Как это вообще происходит?</h2>
                <div className='columns three'>
                    <pre>
                        <code>{'.class { color: red;}'}</code>
                        <code>{'#id { color: green;}'}</code>
                        <code>{':hover { '}</code>
                        <code>{'  color: purple !important;}'}</code>
                        <code>{'}'}</code>
                    </pre>
                    <center class={'biggest'}>=>🪄=></center>
                    <center style={{color: 'green'}} className='biggest bold'>CSS</center>
                </div>
            </Slide>

            <Slide>
                <h2>Какого цвета блок?</h2>
                <div className={'columns two'}>
                    <div>
                        <span>index.html</span>
                        <pre className={'smallest'}>
                            <code>{'<link rel="stylesheet" href="style.css"/>'}</code>
                            <code>{'<div '}</code>
                            <code>{'   class="red blue"'}</code>
                            <code>{'   id="block"'}</code>
                            <code>{'   style="color: red"'}</code>
                            <code>{'>CSS</div>'}</code>
                            <code>{'<style>'}</code>
                            <code>{'   .red { color: red;}'}</code>
                            <code>{'   .red.blue { color: green; !important}'}</code>
                            <code>{'   .blue { color: blue !important;}'}</code>
                            <code>{'   @import "custom.css";'}</code>
                            <code>{'</style>'}</code>
                        </pre>
                    </div>

                    <div>
                        <span>style.css</span>
                        <pre className={'smallest'}>
                            <code>{'#block.red'}</code>
                            <code>{'   color: red;'}</code>
                            <code>{'}'}</code>
                        </pre>
                        <span>custom.css</span>
                        <pre className={'smallest'}>
                            <code>{'.blue {'}</code>
                            <code>{'  color: blue;'}</code>
                            <code>{'}'}</code>
                            <code>{'@media (min-width: 600px) {'}</code>
                            <code>{'  [class="blue"] {'}</code>
                            <code>{'    color: blue;'}</code>
                            <code>{'  }'}</code>
                            <code>{'}'}</code>
                        </pre>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Кратко</h2>
                <ul>
                    <li>Выбрать декларации, которые подходят для заданного элемента</li>
                    <li>Выбрать из них одно, которое подходит, по заданным правилам</li>
                    <li>Наследовать</li>
                    <li>Отрисовать</li>
                </ul>
            </Slide>

            <Slide>
                <h2>Выбрать декларации</h2>
                <div className={'columns two'}>
                    <div>
                        <span>index.html</span>
                        <pre className={'smallest'}>
                            <code style={{opacity: 0.3}}>{'<link rel="stylesheet" href="style.css"/>'}</code>
                            <code style={{opacity: 0.3}}>{'<div '}</code>
                            <code style={{opacity: 0.3}}>{'   class="red blue"'}</code>
                            <code style={{opacity: 0.3}}>{'   id="block"'}</code>
                            <code style={{opacity: 1}}>{'   style="color: red"'}</code>
                            <code style={{opacity: 0.3}}>{'>CSS</div>'}</code>
                            <code style={{opacity: 0.3}}>{'<style>'}</code>
                            <code style={{opacity: 0.3}}>{'<style>'}</code>
                            <code style={{opacity: 1}}>{'   .red { color: red;}'}</code>
                            <code style={{opacity: 1}}>{'   .red.blue { color: green; !important}'}</code>
                            <code style={{opacity: 1}}>{'   .blue { color: blue !important;}'}</code>
                            <code style={{opacity: 0.3}}>{'   @import "custom.css";'}</code>
                            <code style={{opacity: 0.3}}>{'</style>'}</code>
                        </pre>
                    </div>
                    <div>
                        <span>style.css</span>
                        <pre className={'smallest'}>
                            <code style={{opacity: 0.3}}>{'#block.red'}</code>
                            <code style={{opacity: 1}}>{'   color: red;'}</code>
                            <code style={{opacity: 0.3}}>{'}'}</code>
                        </pre>
                        <span>custom.css</span>
                        <pre className={'smallest'}>
                            <code style={{opacity: 0.3}}>{'.blue {'}</code>
                            <code style={{opacity: 1}}>{'  color: blue;'}</code>
                            <code style={{opacity: 0.3}}>{'}'}</code>
                            <code style={{opacity: 0.3}}>{'@media (min-width: 600px) {'}</code>
                            <code style={{opacity: 0.3}}>{'  [class="blue"] {'}</code>
                            <code style={{opacity: 1}}>{'    color: blue;'}</code>
                            <code style={{opacity: 0.3}}>{'  }'}</code>
                            <code style={{opacity: 0.3}}>{'}'}</code>
                        </pre>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Выбрать одну из списка</h2>
                <div className={'columns two'}>
                    <div>
                        <span>index.html</span>
                        <pre className={'smallest'}>
                            <code style={{opacity: 0.3}}>{'<link rel="stylesheet" href="style.css"/>'}</code>
                            <code style={{opacity: 0.3}}>{'<div '}</code>
                            <code style={{opacity: 0.3}}>{'   class="red blue"'}</code>
                            <code style={{opacity: 0.3}}>{'   id="block"'}</code>
                            <code style={{opacity: 0.3}}>{'   style="color: red"'}</code>
                            <code style={{opacity: 0.3}}>{'>CSS</div>'}</code>
                            <code style={{opacity: 0.3}}>{'<style>'}</code>
                            <code style={{opacity: 0.3}}>{'<style>'}</code>
                            <code style={{opacity: 0.3}}>{'   .red { color: red;}'}</code>
                            <code style={{opacity: 1}}>{'   .red.blue { color: green; !important}'}</code>
                            <code style={{opacity: 0.3}}>{'   .blue { color: blue !important;}'}</code>
                            <code style={{opacity: 0.3}}>{'   @import "custom.css";'}</code>
                            <code style={{opacity: 0.3}}>{'</style>'}</code>
                        </pre>
                    </div>
                    <div>
                        <span>style.css</span>
                        <pre className={'smallest'}>
                            <code style={{opacity: 0.3}}>{'#block.red'}</code>
                            <code style={{opacity: 0.3}}>{'   color: red;'}</code>
                            <code style={{opacity: 0.3}}>{'}'}</code>
                        </pre>
                        <span>custom.css</span>
                        <pre className={'smallest'}>
                            <code style={{opacity: 0.3}}>{'.blue {'}</code>
                            <code style={{opacity: 0.3}}>{'  color: blue;'}</code>
                            <code style={{opacity: 0.3}}>{'}'}</code>
                            <code style={{opacity: 0.3}}>{'@media (min-width: 600px) {'}</code>
                            <code style={{opacity: 0.3}}>{'  [class="blue"] {'}</code>
                            <code style={{opacity: 0.3}}>{'    color: blue;'}</code>
                            <code style={{opacity: 0.3}}>{'  }'}</code>
                            <code style={{opacity: 0.3}}>{'}'}</code>
                        </pre>
                    </div>
                </div>
            </Slide>

            <Slide>
                <h2>Наследовать</h2>
                <pre>
                    <code>color: blue;</code>
                    <code>  ⇥  color: inherit;</code>
                </pre>
            </Slide>

            <Slide>
                <h2>Отрисовать</h2>

                <p><code>color: blue;</code></p>
                <p>* представим, что там была высота <br/><code>height: 15.9px; /* => 16px */</code></p>

            </Slide>

            <Slide>
                <h2>По спецификации</h2>
                <p>6 последовательных значений:</p>
                <ol>
                    <li>Declared value</li>
                    <li>Cascaded value</li>
                    <li>Specified value</li>
                    <li>Computed value</li>
                    <li>Used Value</li>
                    <li>Actual Value</li>
                </ol>
            </Slide>
        </>
    )
}