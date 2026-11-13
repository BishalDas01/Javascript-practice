document.getElementById("b_id").addEventListener(
    "click", (event) => {
        console.log("Hello event listener!")
    }
)

document.getElementById("b_id").addEventListener(
    "click", (event) => {
        const showType = document.getElementById("one").value 
        console.log(showType)
    }
)