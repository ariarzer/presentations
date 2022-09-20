import Script from "next/script";

export default function Layout({children, header}) {

    return (
        <main className={'shower list'}>
            <div className="caption">
                <h1>{header}</h1>
                <p>София Валитова, CSS-инженер</p>
            </div>
            {children}
            <Script src="/shower/shower.js"/>
            <Script src="/connect_shower_with_next.js"/>
            <div className="progress"/>
        </main>
    )
}