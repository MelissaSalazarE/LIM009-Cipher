window.cipher = {
  encode: (offset,string) => {
    let newMessage ='';
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90) { 
        let numberAscii = (((string[i].charCodeAt())-65+offset)%26+26)%26+65;
        let lettercipher = String.fromCharCode(numberAscii);
        newMessage = newMessage + lettercipher; // LETRAS MAYUSCULAS //
      }else if(string[i].charCodeAt()>=97 && string[i].charCodeAt()<=122) {
        let numberAscii = (((string[i].charCodeAt())-97+offset)%26+26)%26+97;
        let lettercipher = String.fromCharCode(numberAscii);
        newMessage = newMessage + lettercipher; // LETRAS MINUSCULAS //
      }else if(string[i].charCodeAt()>=48 && string[i].charCodeAt()<=57) {
        let numberAscii = ((string[i].charCodeAt())-48+offset)%10+48;
        let lettercipher = String.fromCharCode(numberAscii);
        newMessage = newMessage + lettercipher; // NUMEROS //
    } else {
      newMessage = newMessage+string[i];  
    }
    }
    return newMessage;
  },

  decode: (offset,string) => {
    
    let newMessage ='';
    for (let i = 0; i < string.length; i++) {
      if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <=90) {
        let numberAscii = (((string[i].charCodeAt())-90-offset)%26-26)%26+90;
        let lettercipher = String.fromCharCode(numberAscii);
        newMessage = newMessage + lettercipher; // LETRAS MAYUSCULAS //
      }else if(string[i].charCodeAt()>=97 && string[i].charCodeAt()<=122) {
        let numberAscii = (((string[i].charCodeAt())-122-offset)%26-26)%26+122;
        let lettercipher = String.fromCharCode(numberAscii);
        newMessage = newMessage + lettercipher; // LETRAS MINUSCULAS //
      }else if(string[i].charCodeAt()>=48 && string[i].charCodeAt()<=57) {
        let numberAscii = ((string[i].charCodeAt())-57-offset)%10+57;
        let lettercipher = String.fromCharCode(numberAscii);
        newMessage = newMessage + lettercipher; // NUMEROS //
      } else {
       newMessage = newMessage + string[i];
      }
    }
    return newMessage;
}
}

