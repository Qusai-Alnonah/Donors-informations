'use strict';
let leftImageElement =document.getElementById('left-imafe');
let rightImageElement =document.getElementById('right image');
let counts = 0;
let maxAttempts =10;
let leftIndex;
let rightIndex;

function Goat(name,source){
    this.name =name;
    this.source =source;
    this .votes =0 ;
    Goat.allImages.push(this);

}

Goat.allImage =[];
new Goat('cruisin-goat','../image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
new Goat('goat away','/image');
console.log(Goat.allImages);

function renderTowImages(){
    leftIndex= genrateRandomIndex();
    rightIndex=genrateRandomIndex();

    while (leftIndex === rightIndex){
        leftIndex =genrateRandomIndex();
    } {
        leftImageElement.src =Goat.allImage[leftIndex].source;
        rightImageElement.src= Goat.allImage[rightIndex].source;

    }
    renderTwoImage();
    leftImageElement.addEventListener('click',handleClicking(event){
        counts++;
        if (maxAttempts >= counts){
            if (event.target.id=== 'lef-image'){
                Goat.allImages[leftIndex].votes++;

            }else if(event.target.id === right-image){
                Goat.allImages[rightIndex].votes++;

            }
            renderTowImage();
            console.log(Goat.allImages);

        }else{
            renderList()
            leftImageElement.removeEventListener('click',handleClicking);
        }
    }

    function renderList(){
        Let ul = document.getElementById('unList');
        for (let i =0 ;i<Goat.allImages.length,i++){
            let li = document.createElement('li');
            ul.appendChild(li)
            li.textContent = `${Goat.allImages[i].name} it has ${Goat.allImafes[i].votes} Votes;
            `
        }
    }

function genrateRandomIndex(){
    return Math.floor(Math.random()Goat.allImage.length);
}

}