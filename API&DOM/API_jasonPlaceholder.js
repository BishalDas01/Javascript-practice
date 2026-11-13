fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    displayData(data);
})

.catch((err) => {
    console.log("Error");
});

const displayData = (userData) => {
    const dataContainer = document.getElementById("userData-container");
    
    userData.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("eachDiv");
        userDiv.innerText = user;
        dataContainer.appendChild(userDiv);

        userDiv.innerHTML = `
        <h2>Title</h2>
        <p>Description</p>
        <button>Details</button>
        `
    });
}