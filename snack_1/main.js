/* Snack 1:
Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine */

const zucchine = [
    {
        varietà: 'varieta1',
        peso: 400,
        lunghezza: 100
    },
    {
        varietà: 'varieta1',
        peso: 445,
        lunghezza: 100
    },
    {
        varietà: 'varieta1',
        peso: 423,
        lunghezza: 100
    },
    {
        varietà: 'varieta1',
        peso: 359,
        lunghezza: 100
    },
    {
        varietà: 'varieta1',
        peso: 985,
        lunghezza: 100
    },
    {
        varietà: 'varieta1',
        peso: 321,
        lunghezza: 100
    },
    {
        varietà: 'varieta1',
        peso: 903,
        lunghezza: 100
    },
    {
        varietà: 'varieta1',
        peso: 222,
        lunghezza: 100
    },
    {
        varietà: 'varieta1',
        peso: 111,
        lunghezza: 100
    },
    {
        varietà: 'varieta1',
        peso: 453,
        lunghezza: 100
    }
];

/*Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine */
let sum = 0;

zucchine.forEach(zucchina => {
    //console.log(zucchina.peso);
    sum += zucchina.peso;
});

console.log(sum + ' g');