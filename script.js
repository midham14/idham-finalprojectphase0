var getInput = document.getElementById("input-baru")
var getSubmit = document.getElementById("submit-baru").value
var listTugas = document.getElementById("list-tugas")


function onClickSubmit(){
    var newTag = document.createElement("div")
    var newTask = document.createTextNode(getInput.value)
    newTag.appendChild(newTask)
    listTugas.appendChild(newTag)
}