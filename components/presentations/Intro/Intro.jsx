import Slide from "../../base/Slide/Slide";

export default function Intro() {
    return (
        <>
            <Slide className={'noBadge'}>
                <img src="./assets/css-value-processing/bg.jpg" style={{
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}/>
            </Slide>
            
            <Slide id="myself">
                <center>
                    <div>
                        <h2>Меня зовут София. Я - CSS инженер.</h2>
                        <img src="/assets/logo.svg" alt="" className="logo"/>
                    </div>
                </center>
            </Slide>
        </>
    )
}