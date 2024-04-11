/**Variables base */

const sortButton = document.getElementById("sort");


/**FUNCIONES */

const sortInputArray = (event) =>{
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown)=>Number(dropdown.value));
    // console.log(inputValues);

    // const sortedValues  = bubbleSort (inputValues);
    const sortedValues   = selectionSort (inputValues);
    // console.log(sortedValues);
    updateUI(sortedValues);
}

const updateUI  = (array = [])=>{ //Se pasa un parametro con un valor alternativo en caso de que no se le pase nada en el argumento
  array.forEach((num,i) => {
    // console.log(num, " " +i);
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  });
}


//Algoritmos de clasificacion de Burbuja

const bubbleSort  =(array) =>{
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length-1; j++) {
        // console.log(array, array[j] ,array[j+1])
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
  }
  return array;
}


//Algoritmo de clasificacion por seleccion [Busca el elemento mas pequño y lo colaca en la primera posicion]

const selectionSort  = (array) =>{
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++){
        // console.log(array, array[j], array[minIndex])
        if(array[j] < array[minIndex]){
          minIndex = j;
        }
    }
    const temp = array[i]; // Guardo el valor
    array[i] = array[minIndex]; //le paso el valor del Minimo al array[i];
    array[minIndex] = temp; 
  }
  return array;
}





/** EVENTOS **/

sortButton.addEventListener("click", sortInputArray)    