# blockchain


librerioa de sha 256

https://www.npmjs.com/package/sha256

para correr node dev/test.js

Realizar un debug de el hash creator


 ### pruebas de la blockachain

 el el codigo de pruebas >>>>

 `` console.log(bitcoin); ``

``node archivodeconsulta.js ``
 Blockchain { chain: [], newTransactions: [] }


 -- falta implementar el proof of work

 deberia seguir la siguiente logica 


 `` 
 
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData) {
	let nonce = 0;//numero peligroso de seguridad
	let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
	while (hash.substring(0, 4) !== '0000') {
		nonce++;//iteraciones del bucle while que busca el hash con 0000 iniciales
		hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
		console.log(hash);
	}

	return nonce;
	//el sistema te los cuenta 
};

  ``
