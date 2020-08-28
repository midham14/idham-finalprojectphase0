var getInput = document.getElementById("input-baru")
var getSubmit = document.getElementById("submit-baru").value
var listTugas = document.getElementById("list-tugas")


function onClickSubmit(){
    var newTagDiv = document.createElement("div")
    var newTagP = document.createElement("p")
    var newDelete = document.createTextNode('X')
    newTagP.appendChild(newDelete)
    newTagP.addEventListener("click", deleteItem)
    var newTask = document.createTextNode(getInput.value)
    newTagDiv.appendChild(newTask)
    newTagDiv.appendChild(newTagP)
    listTugas.appendChild(newTagDiv)


    function deleteItem(){
        console.log('tes masuk')
    }

}