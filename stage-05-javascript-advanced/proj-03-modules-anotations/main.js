// nessa linha ele importa e já executa o arquivo
// // import './utils.js'
// console.log(message);  // erro, 'message' tá isolada no utils.js

// import qualquerNome from './utils.js'
// console.log(qualquerNome)

// importanto uma função é preciso executá-la c ()
// import qqfuncao from './utils.js'
// console.log(qqfuncao)
// console.log( qqfuncao() )

// import { msg, outraMsg } from './utils.js'
// console.log(msg, outraMsg)

// import funcaoPadrao, { data, outraMsg2 } from './utils.js';
// console.log(data);
// console.log(outraMsg2('mic'))
// funcaoPadrao('mayk')

// import { sum as soma } from './utils.js'
// console.log(soma(2, 3))

import * as calculator from './utils.js'
console.log(calculator.multiply(3, 5))
console.log(calculator.divide(40, 5))
