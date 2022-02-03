
function dragElement(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function whileDragElement(event) {
    event.preventDefault();
}

function dropElement(event) {
    const data = event.dataTransfer.getData("text");
    const element = document.getElementById(data);
    const drop = event.target;
    drop.appendChild(element);
    event.dataTransfer.clearData();
}