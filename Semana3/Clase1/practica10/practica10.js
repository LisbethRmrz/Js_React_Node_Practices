let diskArray = [];
let diskGroup1 = document.getElementById('diskGroup1');
let diskGroup1Childs = diskGroup1.children;

let diskArray2 = [];
let diskGroup2 = document.getElementById('diskGroup2');
let diskGroup2Childs = diskGroup2.children;

for(let i = 0 ; i< diskGroup1Childs.length; i++){
    diskArray.push(diskGroup1Childs[i]);
}

function moveElementToSecondStick(){

    let disk = diskArray[0].textContent;
    let getDiskNumber = diskArray[0];
    diskGroup1.removeChild(getDiskNumber);
    diskArray.shift();

    let newChild = document.createElement(`div`);
    newChild.className = `disk${disk}`;
    let firstChild = diskGroup2.firstChild;
    let lastChild = diskGroup2.lastChild;
    
    // if(firstChild.textContent > disk){
    
        (diskGroup2Childs.length > 0) ? diskGroup2.insertBefore(newChild, firstChild) : diskGroup2.insertBefore(newChild, null);
    // }
    // else{
    //     console.log("No se puede mover")
    // }

    let text = document.createTextNode(`${disk}`);
    newChild.appendChild(text);
    diskArray2.push(newChild);
}

let button1 = document.getElementById( 'buttonStick1' );
button1.addEventListener( 'click', moveElementToSecondStick, true );