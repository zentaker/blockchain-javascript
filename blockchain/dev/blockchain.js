function Blockchain () {
	this.chain = []; //donde la cadena se va a almacenar los bloques que se minen
	this.newTransactions =[]; // donde se van a retener todas las transaciones antes de bloque
}

// creacion de un metodo para la creacion de bloques mediante un prototype object 

Blockchain.prototype.createNewBlock = function( nonce, previousBlockHash, hash ){ // se le dan 3 parametros a la funcion 
	const newBlock = { // aca es donde toda las propiedades se va a almacenar 
		
		index: this.chain.length + 1, // el numero del bloque 
		timestamp: Date.now(), // para saber cuando el bloque fue creado 
		transaction: this.pendingTransaction, // para crear el bloque y este sea introducido y no se pueda cambiar 
		nonce: nonce, // viene del prof of work
		hash: hash, 
		previousBlockHash: previousBlockHash,
	}; 

	
	this.pendingTransaction = []; // para poder crear un nuevo bloque de cero 
	this.chain.push(newBlock); // para empujarla en la cadena 
	return newBlock;
	
};	

// creando el metodo del ultimo bloque 

Blockchain.prototype.getLastBlock = function(){ 

	return this.chain[this.chain.length - 1]; // define la posicion del bloque anterios al negarlo en 1
};

// creando el metodo para la nueva transicion 

Blockchain.prototype.createNewTransaction = function( amount, sender, recipient ) {
	const newTransaction = {
		amount: amount, //este parametro de cuanto se esta enviando en la transacion 
		sender: sender, // este va a tomar la direccion del que envia 
		recipient: recipient, //tomar la direccion del que recive
	}
	this.pendingTransaction.push(newTransaction);
	return this.getLastBlock()['index'] =1;

//return newTransaction;

}


// hashBlock method

Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) { // es la data que se va a juntar para crear el hash

	const sha256 = require('sha256'); // importar la libreria SHA256
	const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
	const hash = sha256(dataAsString); // asi es como se crea el hash del bloque y todos los demas que pasan por la funcion
	
	return hash;

}


module.exports = Blockchain; // para exportar la constructor function

