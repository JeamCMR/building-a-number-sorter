/**Variables base */

const sortButton = document.getElementById("sort");


/**FUNCIONES */

const sortInputArray = (event) =>{
    event.preventDefault();
    const inputValues = [...document.getElementsByClassName("values-dropdown")].map((dropdown)=>Number(dropdown.value));
    // console.log(inputValues);

    // const sortedValues  = bubbleSort (inputValues);

    // const sortedValues   = selectionSort (inputValues);

    // const sortedValues   = insertionSort (inputValues);

    const sortedValues   = inputValues.sort();
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


//Algoritmo de clasificacion por insercion [Comienza la matriz ordenada con el primer elemento 
//Luego inspecciona el siguiente elemento y lo intercambia hacia atrás en la matriz ordenada hasta 
//que esté en una posición ordenada, y así sucesivamente.]

const insertionSort  = (array) =>{
  for (let i = 1; i < array.length; i++ ){
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue ){
        array[j + 1] = array[j];
        j--
      }
      array[j + 1] = currValue;
  }
  return array;
}


/** EVENTOS **/

sortButton.addEventListener("click", sortInputArray)    