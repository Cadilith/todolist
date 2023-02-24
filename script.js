// create close button on each new list line
let myList = document.getElementById(li);
var i = 0;
for (i = 0; i < myList.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myList[i].appendChild(span);
}

//when close button clicked, hide this item. (keep it for later to DONE list maybe ?)
let close = document.getElementsByClassName("close");
var i = 0;
for (i = 0; i < close.length; i++){
    close[i].onclick = function(){
        let elementOfList = this.parentNode;
        elementOfList.style.display = "none";
    }
}

//add checked symbol on click

//create a new list item when clicking on the add button fonction addNewListItem()

