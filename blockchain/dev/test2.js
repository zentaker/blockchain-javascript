const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

/*


prueba de el hash del bloque 


*/


//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));


//Manejo de bloques de una cadena
//PRUEBA PARA VER LAS TRANSEACIONES GENERADAS 

//ASECCO PARA INSPECIONAR EL >>>>
console.log(bitcoin);// numero es la cadena de bloques creados en el tiempo

bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');

bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');


bitcoin.createNewBlock(2389, '78s97d4x6dsf', 'gsjhahdhagtafd');



bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');

bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');


bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');

//console.log(bitcoin.chain[1]);
//TODO: no esta recibiendo o alojando las transaciones


//Acciones //>>>>>>>>MAS ACCIONES<<<<<<<<<<
//cREAR UN NUEVO BLOQUE
//nonce , hash previo , hash actual >> se graba en piedra
bitcoin.createNewBlock(2389, '78s97d4x6dsf', 'gsjhahdhagtafd');

bitcoin.createNewBlock(2389, 'gsjhahdhagtafd', 'AHSGDFGwudduwhw');

/*  

Hash actual
1ddb2641be700e79f66b45d9486085be7c69087c64486ff8ce6d2e159a7beeef

Reporte de la moneda 
- 1 ACCION SE CREO UN BLOQUE
Blockchain {
  chain: [
    {
      index: 1,
      timestamp: 1645460828978,
      transactions: [],
      nonce: 100,
      hash: '0',
      previousBlockHash: '0'
    },
    //NUEVO BLOQUE 
    >>>>>>>>>>>>>>>>>>>>>>>>>
    {
      index: 2,
      timestamp: 1645460828981,
      transactions: [],
      nonce: 2389,
      hash: '78s97d4x6dsf',
      previousBlockHash: 'OIUOEREEDHKDE'
    }<<<<<<<<<<<<<<<<<<<<<<
  ],
  pendingTransactions: [],
  currentNodeUrl: undefined,
  networkNodes: []
}*/


//PARA INSPECIONAR LA MONEDA, O LA CADENA DE TRANSACIOONES GENERADAS EN EL TIEMPO
//Asiento contable de tu moneda





//console.log(bitcoin)

// acciones para interactuar con la cadena de bloques 


//POdemos crear un bloque cpm 
bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');

bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');

bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');

bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(60, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(400, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');

bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');

























//bitcoin.hashBlock();//no hay que llemarlo aca por que no se ha generaro una transacion

previousBlockHash = '687765DA6CCF0668238C1D372737DS11';
//no hay evidencia rapida de que a mayor transaciones mas tiemop en conseguir hash
//eevidencia de a mayor transaciones mayor capacidad de computacion
 const currentBlockData = [{
	amount: 10,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
},
{
	amount: 20,
    //smart contract
    //string
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
},
{
	amount: 10,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
},
{
	amount: 10,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
},
{
	amount: 10,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
},
{
	amount: 10,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
}
];



/*PARAMETRO SE ACTIVAS PARA LA PRUEBA DE OBTENER EL HASH ACTUAL*/ 
const nonce =100;// se le puede poner un parametro inicial al contador 

/* PARA PRUEBA HASH DESACTIVAR LA PRUEBA DE PROOF OF WORK */
console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));

//llamando a este metod0o puedes ver el hash actual 
bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce))

