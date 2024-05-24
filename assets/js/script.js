
let taskList=[];
let inputTodo=document.querySelector("#inputTodo");
function addTodo(){
    let value=inputTodo.value;
    // taskList.push(value);
    taskList.unshift(value);
   inputTodo.value='';
   displayList();
}
function displayList(){
    let listBox=document.querySelector("#listBox");
    let newList="";
    for(let i=0; i<taskList.length;i++)
    {
        newList+=`
        <li class="listitem">
                    <span>${taskList[i]}</span>
                    <span class="deletebtn" onclick="taskList.splice(${i},1); displayList();">&#x1f5d1;</span>
        </li>
        `
    }
    listBox.innerHTML=newList;
}