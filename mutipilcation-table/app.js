let inputtext = document.getElementById('input-text');
let runbutton = document.getElementById('run-button');
let showtext  = document.getElementById('show-text');

function mutipilcation() {
    let number = Number(inputtext.value);
    let outputHtml = '';

    if (number == 0) {
        showtext.innerHTML = '0 ไม่มีค่า';
        return;
    }

    for (let i = 1; i <= 12; i++) {
        let sum = number*i
        outputHtml += '<p>';
        outputHtml += number +'x' + i + '=' + sum ;
        outputHtml += '</p>';
        
    }
    showtext.innerHTML =outputHtml
}

runbutton.addEventListener('click',mutipilcation);

