const inputbox = document.getElementById('input-box');
const container = document.getElementById('list-containers');

function addJob(){
    if (inputbox.value == ''){
        alert('Please Add Task!-----𝑴𝒂𝒅𝒆 𝑩𝒚 𝑨𝒃𝒅𝒖𝒍');
    }else {
        let li = document.createElement('li');
        li.innerHTML = inputbox.value;
        container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    data();
} 

container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        data();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        data();
    }
}, false);

function data(){
    localStorage.setItem("data", container.innerHTML);
}

function showTask(){
    container.innerHTML = localStorage.getItem("data");
}
showTask();