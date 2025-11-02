/* esportare due funzioni: 

la prima funzione accetta due parametri (un oggetto e poi una lista di nomi) e 
restituisce lo stesso oggetto ma con una nuova proprietà chiamata contatti che sarà valorizzata con la lista di nomi */

const info = {
    nome: 'Alessia',
    età: 24,
    id: 1
}

const listaNomi = [ 'Federico', 'Simone', 'Martina', 'Sara', 'Marco' ];

const newInfo = (info, listaNomi) => {
    info.contatti = listaNomi;
    return info;
}

console.log(newInfo(info, listaNomi));

export default newInfo;

// La seconda funzione accetta come parametro i contatti di un oggetto (ricordate il destructuring) e restituisce una stringa con l'elenco dei contatti.

export const totContatti = ({contatti}) => `I contatti sono ${contatti.join(', ')}`;
console.log(totContatti(info));

