window.cipher = {
  encode: (offset,string) => {

    let newMessage ='';
    string = string.toUpperCase(); // es para volver mayuscula //
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90) {
        let numberAscii = ((string[i].charCodeAt())-65+offset)%26+65;
        let lettercipher = String.fromCharCode(numberAscii);
        lettercipher = lettercipher.toLowerCase();// es para volver minuscula //
        newMessage = newMessage + lettercipher;
      } else {
      newMessage = newMessage+string[i];
      }
    }
    return newMessage;
  },

  decode: (offset,string) => {

    let newMessage ='';
    string = string.toUpperCase();
    for (let i = 0; i < string.length; i++) {
      if(string[i].charCodeAt() >= 65 && string[i].charCodeAt() <=90) {
        let numberAscii = ((string[i].charCodeAt())-90-offset)%26+90;
        let lettercipher = String.fromCharCode(numberAscii);
        lettercipher = lettercipher.toLowerCase();
        newMessage = newMessage + lettercipher;
      } else {
       newMessage = newMessage + string[i];
      }
    }
    return newMessage;
}
}
