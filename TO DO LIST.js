const input=document.getElementById("input-box");
const listc=document.getElementById("list");
 function Add_Task(){
    if(input.value===''){
        alert("You Must Write Something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        listc.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    input.value="";
    savedata();
 }
 listc.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
 }, false);
 function savedata(){
    localStorage.setItem("data",listc.innerHTML);
 }
 function show(){
    listc.innerHTML=localStorage.getItem("data");
 }
 show();