const User = {
  ola (nome: string) {
    if (/^([aA-zZ\s]+)$/.test(nome)) {
      console.log(`Ola usuario ${nome}`);
    }
  }
};

export { User };
