///get <ul>
var listBox = document.getElementById("listBox")
function addTodo(){
    var input = document.getElementById("input")

    if(input.value.length > 2){
          ///create element and li text//
    var li = document.createElement("li")
    var liTxt = document.createTextNode(input.value)
    li.setAttribute("class" , "li1")
    // li.innerHTML = input.value

    
    li.appendChild(liTxt)


    ////create edit btn

    var  editBtn = document.createElement("button")
    var editBtnTxt = document.createTextNode("Edit")
    editBtn.setAttribute("onclick" , "editList(this)")
    editBtn.setAttribute("class" , "editBtn")
    editBtn.appendChild(editBtnTxt)
    li.appendChild(editBtn)


    ////create del btn 
    var removeBtn = document.createElement("button")
    var removeBtnTxt = document.createTextNode("Remove")
    removeBtn.setAttribute("onclick" , "delList(this)")
    removeBtn.setAttribute("class" ,"removeBtn")

    removeBtn.appendChild(removeBtnTxt)
    li.appendChild(removeBtn)

    //li append in ul
    listBox.appendChild(li)

    input.value = ""  

    }else{
        alert("enter correct value")
    }

}

function delAll(){
            listBox.innerHTML = ""
    }

function editList(e){
    var litxt = e.parentNode.firstChild.nodeValue
    var editLiTxt = prompt("EDIT TODO" , litxt )
    console.log(editLiTxt)
    e.parentNode.firstChild.nodeValue = editLiTxt
}
function delList(e){
    e.parentNode.remove()

}


