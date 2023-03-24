/* Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b" */

const array_5 = ['qui' , 'quo' , 'qua', 'conan', 'goku', 'banane'];
const param_a = 2;
const param_b = array_5.length;

const newArray = [cacao(array_5 , param_a , param_b)];


function cacao(array_5 , param_a , param_b ) {
    let intermediateValue = [];
    let valueX = 0;
    for(let i = 0; i < param_b - param_a; i++){
        valueX = param_b - 1;
    }


    intermediateValue.push(valueX);
    

    return  intermediateValue;
} 