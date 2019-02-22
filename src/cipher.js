window.cipher = {
  encode: (offset,string) => {
    for (let i = 0; i < string.length; i++) {
      if (string[i].charCodeAt()>=65 && string[i].charCodeAt()<=90) {
        let numberAscii = ((string[i].charCodeAt())-65+offset)%26+65;
        let lettercipher = String.fromCharCode(numberAscii);
        newMessage = newMessage + lettercipher;
      } else {
      newMessage = newMessage+string[i];
      }
    }
    return newMessage;
  },

  decode: () => {
    /* Acá va tu código */
  }
};
