/**Variables base */

const sortButton = document.getElementById("sort");


/**FUNCIONES */

const sortInputArray = (event) =>{
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown)=>Number(dropdown.value));
    console.log(inputValues);
}


/** EVENTOS **/

sortButton.addEventListener("click", sortInputArray)    