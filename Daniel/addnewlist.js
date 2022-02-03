
button = document.createElement("button");

//initialize counters
listind = 2;
listcounter = 2;

function doButton() {
    alert("Adding new list!");
    //testing to see that the command goes through

    listbx = document.querySelector(".list");
    newlistbx = document.body.appendChild(listbx.cloneNode(false));
    document.querySelector(".background").appendChild(newlistbx);
    //add list to page

    listind += 1;
    listcounter += 1;
    //update number of lists and next number to make list ID

    newlistbx.id = "list" + listind;
    //set id so it's different than the others

    numlist = document.createTextNode(listind);
    newlistbx.appendChild(numlist);
    //add list id number to list next to title

    title = document.querySelector(".title");
    newlistbx.appendChild(title.cloneNode(false));
    //add title line to list

    let xb = document.createElement("button");
    xb.type = ".xbutton";
    xb.innerHTML = "X";
    xid = newlistbx.id;
    xb.onclick = function() {
        x = String(newlistbx.id)
        xButton(x);
    }
    newlistbx.appendChild(xb);
    //add remove button to list
}

function xButton(id) {

    if (listcounter > 1) {
        listnum = "list" + prompt("Enter List Number to remove:");
        //ask the user what list they want to remove based on ID printed
        //next to list title

        lnum = String(listnum);
        listToRemove = document.getElementById(lnum);
        listToRemove.remove();
        //remove list by specified ID

        listcounter -= 1;
        //decrease counter for number of active lists
    }
    else {
        alert("ERROR: Can not remove if only one list!");
        //so that there is always a list to clone, make
        //sure that there is at more than one list in the page
    }

}