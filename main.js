const body = document.querySelector('body');

const blockField = document.createElement('div');
blockField.classList.add('blockField');
body.appendChild(blockField);

const blockPositionFirst = document.createElement('div');
blockPositionFirst.classList.add('blockPositionFirst');
blockField.appendChild(blockPositionFirst);
const button = document.createElement('button');
button.classList.add('button');
blockPositionFirst.appendChild(button);

const blockPositionSecond = document.createElement('div');
blockPositionSecond.classList.add('blockPositionSecond');
blockField.appendChild(blockPositionSecond);

const buttonOne = document.createElement('button');
buttonOne.classList.add('buttonOne');
blockPositionSecond.appendChild(buttonOne);

const blockCenter = document.createElement('div');
blockCenter.classList.add('blockCenter');
blockField.appendChild(blockCenter);


button.addEventListener('click', (e) => {
    if (blockPositionSecond.offsetLeft === 810 ) {
        blockPositionFirst.classList.add('moveRightLong');
        button.style.transform = 'rotate(180deg)';
    } else {
        blockPositionFirst.classList.add('moveRightShot');
        button.style.transform = 'rotate(180deg)';
    }
});
buttonOne.addEventListener('click', (e) => {
    if (blockPositionFirst.offsetLeft === 200 ) {
        blockPositionSecond.classList.add('moveLeftLong');
        buttonOne.style.transform = 'rotate(180deg)';
    } else {
        blockPositionSecond.classList.add('moveLeftShort');
        buttonOne.style.transform = 'rotate(180deg)';
    }
});