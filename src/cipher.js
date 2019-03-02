window.cipher = {
  encode: (offset, string) => {
    let newMessage = '';
    
    for (let i = 0; i < string.length; i++) {
      let a;
      let b;
      if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
        a = 65;
        b = 26;
      } else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
        a = 97;
        b = 26;
      } else if (string[i].charCodeAt() >= 48 && string[i].charCodeAt() <= 57) {
        a = 48;
        b = 10;
      } else if (string[i].charCodeAt() >= 140 && string[i].charCodeAt() <= 165) {
        a = 140;
        b = 26;
      } else {
        newMessage = newMessage + string[i];
        continue;
      }
      const numberAscii = (((string[i].charCodeAt()) - a + offset) % b + b) % b + a;
      let lettercipher = String.fromCharCode(numberAscii);
      newMessage = newMessage + lettercipher;
    }
    return newMessage; 
  }
};


// window.cipher = {
//   encode: (offset, string) => {
//     let newMessage = '';
//     for (let i = 0; i < string.length; i++) {
//       if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
//         let numberAscii = (((string[i].charCodeAt()) - 65 + offset) % 26 + 26) % 26 + 65;
//         let lettercipher = String.fromCharCode(numberAscii);
//         newMessage = newMessage + lettercipher; // LETRAS MAYUSCULAS //
//       } else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
//         let numberAscii = (((string[i].charCodeAt()) - 97 + offset) % 26 + 26) % 26 + 97;
//         let lettercipher = String.fromCharCode(numberAscii);
//         newMessage = newMessage + lettercipher; // LETRAS MINUSCULAS //
//       } else if (string[i].charCodeAt() >= 48 && string[i].charCodeAt() <= 57) {
//         let numberAscii = ((string[i].charCodeAt()) - 48 + offset) % 10 + 48;
//         let lettercipher = String.fromCharCode(numberAscii);
//         newMessage = newMessage + lettercipher; // NUMEROS //
//       } else {
//         newMessage = newMessage + string[i];
//       }
//     }
//     return newMessage;
//   },

//   decode: (offset, string) => {

//     let newMessage = '';
//     for (let i = 0; i < string.length; i++) {
//       if (string[i].charCodeAt() >= 65 && string[i].charCodeAt() <= 90) {
//         let numberAscii = (((string[i].charCodeAt()) - 90 - offset) % 26 - 26) % 26 + 90;
//         let lettercipher = String.fromCharCode(numberAscii);
//         newMessage = newMessage + lettercipher; // LETRAS MAYUSCULAS //
//       } else if (string[i].charCodeAt() >= 97 && string[i].charCodeAt() <= 122) {
//         let numberAscii = (((string[i].charCodeAt()) - 122 - offset) % 26 - 26) % 26 + 122;
//         let lettercipher = String.fromCharCode(numberAscii);
//         newMessage = newMessage + lettercipher; // LETRAS MINUSCULAS //
//       } else if (string[i].charCodeAt() >= 48 && string[i].charCodeAt() <= 57) {
//         let numberAscii = ((string[i].charCodeAt()) - 57 - offset) % 10 + 57;
//         let lettercipher = String.fromCharCode(numberAscii);
//         newMessage = newMessage + lettercipher; // NUMEROS //
//       } else {
//         newMessage = newMessage + string[i];
//       }
//     }
//     return newMessage;
//   }
// }
