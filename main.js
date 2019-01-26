const wrapper = document.querySelector('.wrapper');

wrapper.addEventListener('click', (ev) => {
    const moveElement = ev.target.classList;
    let positionRight = document.querySelector('.right');
    let positionLeft = document.querySelector('.left');
    let positionRight2 = document.querySelector('.right2');
    let positionLeft2 = document.querySelector('.left2');

    if (!ev.target.classList.contains('live-block')){
        return
    } 

    if (moveElement.contains('left')){
        if (positionLeft2 !== null){
            moveElement.add('right');
            moveElement.remove('left');
            positionLeft2.classList.add('left');
            positionLeft2.classList.remove('left2');
        } else {
            moveElement.add('right2');
            moveElement.remove('left');
        }
    } else if (moveElement.contains('right')) {
        if (positionRight2 !== null ){
            moveElement.add('left');
            moveElement.remove('right');
            positionRight2.classList.remove('right2');
            positionRight2.classList.add('right');
        } else {
            moveElement.add('left2');
            moveElement.remove('right');
        }  
    } else if (moveElement.contains('right2')) {
        if (positionLeft !== null){
            moveElement.remove('right2');
            moveElement.add('left');
        }
    } else if (moveElement.contains('left2')) {
        if (positionRight !== null){
            moveElement.remove('left2');
            moveElement.add('right');
        }
    }























    // 
//     else if (classR.contains('right')){
//         classR.add('left2');
//         classR.remove('right');
//     }

    // if (moveElement.contains('left')){
    //     if (positionRight.classList.contains('right')) {
    //         moveElement.add('right2');
    //         moveElement.remove('left');
    //     } else {
    //         moveElement.add('right');
    //         moveElement.remove('left');
    //     }
    // } else if (moveElement.contains('right') ){
    //     moveElement.add('left');
    //     moveElement.remove('right');
    //     if( positionRight2 !== null ){
    //         positionRight2.classList.add('right');
    //         positionRight2.classList.remove('right2');
    //     } else {
    //         if(positionLeft !== null){
    //             moveElement.add('left2');
    //             moveElement.remove('right');
    //         }
    //     }
    // }  else if (moveElement.contains('right2') ){
    //     moveElement.add('left');
    //     moveElement.remove('right2');
    // }


// ----------
    
    // else if (classR.contains('right')) {

    //     if (positionLeft.classList.contains('left')) {
    //         classR.add('left2');
    //         classR.remove('right');
    //     } else {
    //         classR.add('left');
    //         classR.remove('right');
    //     }
    // }
    // else if (classL.contains('left') && positionLeft2.classList.contains('left2')){
    //     classL.add('right');
    //     classL.remove('left');
    //     positionLeft2.classList.add('left');
    //     positionLeft2.classList.remove('left2');
    // }
    // else if (classR.contains('left2') && positionLeft.classList.contains('left')){
    //     classR.add('right');
    //     classR.remove('left2');
    // }

});

