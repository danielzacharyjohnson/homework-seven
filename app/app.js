function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return e.target || e.srcElement;
}

var viewInfo = document.querySelector('main');
viewInfo.addEventListener('click', displayInfo, false);

function displayInfo(e) {
    var target = getTarget(e);
    if (target.tagName == "H2") {
        var tParent = target.parentNode;
        var parentDiv = tParent.children;
        console.log(parentDiv[1]);
        if (parentDiv[1].style.display == "none") {
            parentDiv[1].style.display = "block";
        } else {
            parentDiv[1].style.display = "none";
        }
    }
}

function addTrashcan () {
    let listItems = document.querySelectorAll('#codeList li');
    let itemNumber = listItems.length;
    console.log(itemNumber);
    console.log(listItems);
    for (let i = 0; i < itemNumber; i++) {
        let trashcan = document.createElement('img');
        trashcan.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png';
        trashcan.className = 'listIcon';
        listItems[i].appendChild(trashcan);
        // trashcan.addEventListener('click', removeItem, false);
    }
}

addTrashcan();

var myList = document.querySelector("#codeList ul");
var addBtn = document.getElementsByTagName('input')[0];

addBtn.addEventListener('click', addItem, false);

function addItem() {
    var newItem = prompt("New Item:");
    var newLI = document.createElement('li');
    var newLIText = document.createTextNode(newItem);
    newLI.appendChild(newLIText);
    myList.appendChild(newLI);

    let trashcan = document.createElement('img');
    trashcan.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/27019/trashcanIcon.png';
    trashcan.className = 'listIcon';
    newLI.appendChild(trashcan);
}

myList.addEventListener('click', removeItem, false);

function removeItem(e) {
    let target = getTarget(e);
    let targetParent = target.parentNode;
    //console.log(targetParent.tagName);
    if (targetParent.tagName == "LI") {
        var itemToRemove = targetParent;
        myList.removeChild(itemToRemove);
    }
    else if (targetParent.tagName == "UL") {
        // console.log(targetParent.style.backgroundColor);
        // if (target.style.backgroundColor == "mediumseagreen") {
        //     target.style.backgroundColor = "grey";
        // }
        // else if (target.style.backgroundColor == "grey") {
        //     target.style.backgroundColor = "mediumseagreen";
        // }

        if (target.classList.contains('selected')) {
            target.classList.remove('selected');
        }
        else {
            target.classList.add('selected');
        }
    }
}