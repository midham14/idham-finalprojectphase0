var getInput = document.getElementById("input-baru")
var getSubmit = document.getElementById("submit-baru").value
var listTugas = document.getElementById("list-tugas")

let datas = []

function onClickSubmit(){
    listTugas.innerHTML = ''
    datas.push(getInput.value)



    for(var i = 0; i<datas.length;i++){
        var newTagDiv = document.createElement("div")
        newTagDiv.setAttribute("id", `list-selesai`)
        var newTagP = document.createElement("p")
        newTagP.className = "close"
        var newDelete = document.createTextNode('X')
        newTagP.appendChild(newDelete)
        newTagP.addEventListener("click", function(ev){
            // console.log(ev.path[1].tagName)
            if(ev.path[1].tagName === 'DIV'){
                ev.path[1].style.display = 'none'
            }
            // console.log(ev.path[1])
        })
        var newTask = document.createTextNode(datas[i])
        newTagDiv.appendChild(newTask)
        newTagDiv.appendChild(newTagP)
        listTugas.appendChild(newTagDiv)
    }



    // function deleteItem(){
    //     console.log(document.gettag)
    // }


    // console.log(datas)
}