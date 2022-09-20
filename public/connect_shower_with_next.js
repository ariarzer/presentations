const showerContainer = document.querySelector('.shower');

document.body.addEventListener('keydown', (e) => {
    showerContainer.dispatchEvent( new KeyboardEvent('keydown', {
        keyCode: e.keyCode,
        code: e.code,
        key: e.key,
    }));
})