export default function Example({array}) {
        const code = [
                '<link rel="stylesheet" href="style.css"/>',
                '<div ',
                '   class="red blue"',
                '   id="block"',
                '   style="color: red"',
                '>CSS</div>',
                '<style>'
        ]
    return (
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
        </pre>);
}