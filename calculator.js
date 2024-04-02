document.addEventListener('DOMContentLoaded', () => {
    let text = document.getElementById('visible');
    document.addEventListener('click', (c) => {
        if (c.target.tagName === 'BUTTON') {
            let btnText = c.target.innerText;
            let string = text.value;
            switch (btnText) {
                case '=':
                    text.value = eval(string);
                    break;
                case 'AC':
                    text.value = "";
                    break;
                case 'DEL':
                    text.value = string.slice(0, -1);
                    break;
                default:
                    text.value += btnText;
            }
        }
    });
});






