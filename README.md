# blockchain

NOTAS DE VERSION README

librerioa de sha 256

https://www.npmjs.com/package/sha256

para correr node dev/test.js

Realizar un debug de el hash creator


# Introduccion 

Es un ejercicio de javascript para desentralizar las finanzas en el peru, usando la logica mediante javascript vamos a desarollar e implementar una moneda en el mercado peruano el cual va a ser equivalente al sol peruano, en una segunda etapa se va a implementar una infrestructura de manera de monedero virtual para que se puedan hacer transaciones entre peronas mediante una webapp. El motor de la economia de un pais es que sea muy productivo es decir que su sociedad produzca servicios, recursos entre otros de valor para otro grupo de persoonas, actualmente con la presencia del estado opresor ha usurpado funciones y se ha metido en nuestras vidas para controlarnos hasta el punto en como vendemos y hacemos transaciones del dia a dia de los peruanos de apie, por ello por el principio de libertad mediante este nuevo sol peruano desentralizar el control del doble gasto 

 ### pruebas de la blockachain

 el el codigo de pruebas >>>>

 `` console.log(bitcoin); ``

``node archivodeconsulta.js ``
 Blockchain { chain: [], newTransactions: [] }

 nos muestra una blockchain con una cadena vacia con transaciones vacias


 - falta implementar el proof of work

 deberia seguir la siguiente logica >>


 ```
 
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

  ```

### Acciones que se pueden hacer con la moneda



## Crear un bloque

``` 
bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');
```
se le pasa el nonce, el hash anterior y el hash actual
#### reporte de la moneda

Blockchain {
  chain: [
    {
      index: 1,
      timestamp: 1645460828978,
      transactions: [],
      nonce: 100,
      hash: '0',
      previousBlockHash: '0'
    }
  ],
  pendingTransactions: [],
  currentNodeUrl: undefined,
  networkNodes: []
}*/




## creamos otro bloque 
se le pasa el nonce, el hash anterior y el hash actual

```


bitcoin.createNewBlock(2389, '78s97d4x6dsf', 'gsjhahdhagtafd');
```

#### reporte de la moneda
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


### generamos transacciones

```

// se crean 2 transaciones 

bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');

// se mina un bloque 
bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');


// Nuevas transaciones pero como todavia no estan minadas son pendientes pero son transaciones

bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');

 ```
### reporte de la blockain
 Blockchain {
  chain: [
    {
      index: 1,
      timestamp: 1645571635967,
      transaction: undefined,
      nonce: undefined,
      hash: undefined,
      previousBlockHash: undefined
    },
    {
      index: 3,
      timestamp: 1645571635967,
      transaction: [Array], // nos devuelve un arreglo con las transaciones generadas ya en el bloque 
      nonce: 2389,
      hash: 'gsjhahdhagtafd',
      previousBlockHash: '78s97d4x6dsf'
    },
  ],
  newTransactions: [],

    TRANSACCIONES PENDIENTES>>>>>>>>

  pendingTransaction: [
    {
      amount: 100,
      sender: 'ALEXH845SJ5TKCJ2',
      recipient: 'JENN5BG5DF6HTGFAD'
    },
    {
      amount: 100,
      sender: 'ALEXH845SJ5TKCJ2',
      recipient: 'JENN5BG5DF6HTGFAD'
    },
    {
      amount: 100,
      sender: 'ALEXH845SJ5TKCJ2',
      recipient: 'JENN5BG5DF6HTGFAD'
    }
  ]
}

Hash actual >>
1ddb2641be700e79f66b45d9486085be7c69087c64486ff8ce6d2e159a7beeef

Viene a ser el ultimo hash generado en referencia a el bloque generado que hace de funcion de un id


# API REST - NUEVOSOL

vamos a implemntar el desarollo de modelo vista controlador para la generacion de los endpoints



