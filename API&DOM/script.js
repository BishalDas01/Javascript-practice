const target = document.getElementById("welcomeTitle");
target.style.color = "purple";  

const allBox = document.getElementsByClassName("box")
for(let i=0; i<allBox.length; i++){
    allBox[i].style.backgroundColor = "purple"

    if(allBox[i].innerText == "box-4")
        allBox[i].style.backgroundColor = "red"  
}