// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft(){
    let leftNumber = dodger.style.left.replace('px', '');
    let number = parseInt(leftNumber, 10);

    if (number > 0){
        dodger.style.left = `${number - 1}px`;
    }
}

function moveDodgerRight(){
    let leftNumber = dodger.style.left.replace('px', '');
    let number = parseInt(leftNumber, 10);



    if (number > 0){
        dodger.style.left = `${number + 1}px`;
    }
}

document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }
    else if (e.key === 'ArrowRight'){
        moveDodgerRight();
    }
});