describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(cipher.encode(33,"ABCDEFGHIJKLMNOPQRSTUVWXYZ"),"HIJKLMNOPQRSTUVWXYZABCDEFG");
    it('deberia retornar " " para " " con offest 33');
    assert.equal(cipher.encode(33," ")," ");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33',()=>{
      assert.equal(cipher.encode(33,"abcdefghijklmnopqrstuvwxyz"),"hijklmnopqrstuvwxyzabcdefg");
    it('deberia retornar " " para " " con offest 33');
    assert.equal(cipher.encode(33," ")," ");
    });
    it('debería retornar "456789012" para "123456789" con offset 33',()=>{
      assert.equal(cipher.encode(33,"123456789"),"456789012");
    it('deberia retornar " " para " " con offest 33');
    assert.equal(cipher.encode(33," ")," ");
    });
    it('debería retornar "Zz" para "Aa" con offset -1',()=>{
      assert.equal(cipher.encode(-1,"Aa"),"Zz");
    it('deberia retornar " " para " " con offest -1');
    assert.equal(cipher.encode(-1," ")," ");
    });
    it('debería retornar "efghijklmnopqrstuvwxyzabcdEFGHIJKLMNOPQRSTUVWXYZABCD" para "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 30',()=>{
      assert.equal(cipher.encode(30,"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),"efghijklmnopqrstuvwxyzabcdEFGHIJKLMNOPQRSTUVWXYZABCD");
    it('deberia retornar " " para " " con offest 30');
    assert.equal(cipher.encode(30," ")," ");
    });
    it('debería retornar "ó" para "ñ" con offset 2',()=>{
      assert.equal(cipher.encode(2,"ñ"),"ó");
    it('deberia retornar " " para " " con offest 2');
    assert.equal(cipher.encode(2," ")," ");
    });
  });



  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
    assert.equal(cipher.decode(33,"HIJKLMNOPQRSTUVWXYZABCDEFG"),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    it('deberia retornar " " para " " con offest 33');
    assert.equal(cipher.decode(33," ")," ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33',()=>{
      assert.equal(cipher.decode(33,"hijklmnopqrstuvwxyzabcdefg"),"abcdefghijklmnopqrstuvwxyz");
    it('deberia retornar " " para " " con offest 33');
      assert.equal(cipher.decode(33," ")," ");
    });
    it('debería retornar "123456789" para "456789012" con offset 33',()=>{
      assert.equal(cipher.decode(33,"456789012"),"123456789");
    it('deberia retornar " " para " " con offest 33');
      assert.equal(cipher.decode(33," ")," ");
    });
    it('debería retornar "Aa" para "Zz" con offset -1',()=>{
      assert.equal(cipher.decode(-1,"Zz"),"Aa");
    it('deberia retornar " " para " " con offest -1');
    assert.equal(cipher.decode(-1," ")," ");
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ" para "efghijklmnopqrstuvwxyzabcdEFGHIJKLMNOPQRSTUVWXYZABCD" con offset 30',()=>{
      assert.equal(cipher.decode(30,"efghijklmnopqrstuvwxyzabcdEFGHIJKLMNOPQRSTUVWXYZABCD"),"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    it('deberia retornar " " para " " con offest 30');
    assert.equal(cipher.decode(30," ")," ");
    });
    it('debería retornar "ñ" para "ó" con offset 2',()=>{
      assert.equal(cipher.decode(2,"ó"),"ñ");
    it('deberia retornar " " para " " con offest 2');
    assert.equal(cipher.decode(2," ")," ");
    });
  });
})
