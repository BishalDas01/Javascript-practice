document.getElementById("b_id").addEventListener(
    "click", (event) => {
        const inputValue = document.getElementById("one").value;

        const container = document.getElementById("container");
        const p_tag = document.createElement("p");
        p_tag.classList.add("child");

        p_tag.innerText = inputValue;

        container.appendChild(p_tag);
        
        document.getElementById("one").value = "";
        
        const allChild = document.getElementsByClassName("child");
        console.log(allChild);

        for (const element of allChild) {   //for(const i=0; i<allChild.length; i++)
            element.addEventListener("click", (e) => {
                // e.target.parentNode.remove(element);
                e.target.remove(element); 
            })
        }
    }
)