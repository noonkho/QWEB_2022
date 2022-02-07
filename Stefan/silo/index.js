
function addCard(){

    var div = document.createElement("div");
    div.classList.add('test');

    let newElement = document.createElement('input');
    newElement.placeholder = 'Enter a title for this card';

    div.appendChild(newElement);
    

    let btnElem = document.createElement("button");
    btnElem.type = "button";
    btnElem.textContent = "-";
    btnElem.addEventListener('click', removeUrlBox);
    div.appendChild(btnElem);

    document.getElementById("main").appendChild(div);

}

function removeUrlBox(){
    this.closest('.test').remove();

}



