export default function Slide({children, id = '', className = ''}) {
    return (
        <section className={'slide' + ' ' + className} id={id}>
            {children}
        </section>
    )
}