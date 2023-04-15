// a variável 'message' fica isolada nesse arquivo, e não consigo usar ela em outro lugar. Se chamar ela no main.js dá erro undefined

const message = "mensagem asdf" 
// alert(message)

// c export default na origem e 'import qqname from' no destino é possível usá-la
// // export default message

// ----------------------------
// pode exportar qq coisa: 
// um texto/número, uma função
// // export default 'qualquer texto direto pelo export'

// uma função, porém no destino é preciso executá-la usando ()
// export default function () {
//   return 'alo'
// }

// ----------------------------
// só pode usar um default por arquivo
// p exportar mais de 1 elemento eles devem ser nomeados
// const msg = 'msg zzzzz'
// const outraMsg = 'outra msg'

// export { msg, outraMsg }

// ----------------------------
// pode exportar direto
// export const msg = 'msg xxxxx'
// export const outraMsg = 'outra msg xxxxx'

// ----------------------------
// pode exportar misturando os 2 jeitos
// const data = new Date()
// const outraMsg2 = name => `hello ${name}`

// export default function (argument) {
//   console.log(data, outraMsg2(argument));
// }

// export { data, outraMsg2 };

// ----------------------------
// pode exportar renomeando c 'export as'
// export function sum(a, b) {
//   return a + b;
// }

// ----------------------------
// pode exportar vários os renomeando c 'export * as'
export const sum = (a, b) => a + b
export const multiply = (a, b) => a * b
export const subtract = (a, b) => a - b
export const divide = (a, b) => a / b
// ou
// export { sum, multiply, subtract, divide }