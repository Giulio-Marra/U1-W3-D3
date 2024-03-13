document.addEventListener("DOMContentLoaded", function() {
    const main = document.querySelector("main");

    const handleSubmit = (e) => {
        e.preventDefault();

        const itemFlist = document.getElementById("foodName");

        const candidate = {
            foodName: itemFlist.value
        };

        const foodNameElement = document.createElement("h2");
        foodNameElement.innerText = candidate.foodName;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        
        deleteButton.addEventListener("click", function() {
            main.removeChild(foodNameElement); 
            main.removeChild(deleteButton); 
        });

        main.appendChild(foodNameElement);
        main.appendChild(deleteButton);

        itemFlist.value = "";
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
});
