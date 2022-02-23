const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

//bitcoin.hashBlock();

 previousBlockHash = '687765DA6CCF0668238C1D372737DS11';

const currentBlockData = [{
	amount: 10,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
},
{
	amount: 20,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
},
{
	amount: 10,
	sender: 'B4CEE9C0E571',
	recipient: '3A3FG6E462D48E9',
}];

const nonce = 100;





bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));



bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');

bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');

bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');

bitcoin.createNewTransaction(100, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(60, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');
bitcoin.createNewTransaction(400, 'ALEXH845SJ5TKCJ2', 'JENN5BG5DF6HTGFAD');

bitcoin.createNewBlock(2389, 'OIUOEREEDHKDE', '78s97d4x6dsf');








console.log(bitcoin); 