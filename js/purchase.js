"use script";

console.log('js is running');

//defining variables to find the class for each of the dropdown options and storing in variable 
let dropdownBlue = document.querySelector('.dropdown-content a:first-child');
let dropdownRed = document.querySelector('.dropdown-content a:nth-child(2)');
let dropdownBlack = document.querySelector('.dropdown-content a:last-child');

//variable of glasses image that will be changed 
let baseImg = document.querySelector('.colour-img');

//adding event listener to each class to detect a click
dropdownBlue.addEventListener('click', function(){
    console.log('blue click ');
    
    
    if(baseImg.classList.contains('blue-img')){
        baseImg.classList.remove('blue-img');

     
    } else{

        //changes the color to the blue and removes the red and black image since blue was clicked 
        baseImg.classList.remove('red-img');
        baseImg.classList.remove('black-img');
        baseImg.classList.add('blue-img');
    }
}
)

dropdownRed.addEventListener('click', function(){
    console.log('red click ');
   

    if(baseImg.classList.contains('red-img')){
        baseImg.classList.remove('red-img');
    } else{
        //changes the color of img to red and removes blue and black image
        baseImg.classList.remove('black-img');
        baseImg.classList.remove('blue-img');
        baseImg.classList.add('red-img');
    }
}
)
dropdownBlack.addEventListener('click', function(){
    console.log('black click ');
   
    if(baseImg.classList.contains('black-img')){
        baseImg.classList.remove('black-img');
    } else{

        //changes the color of img to black and removes the blue and red image
        baseImg.classList.remove('blue-img');
        baseImg.classList.remove('red-img');
        baseImg.classList.add('black-img');
    }
}
)


