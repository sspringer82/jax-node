// funktioniert nicht wegen scoping

const obj2 = {
  payload: 'asdf',
  doSth() {
    setTimeout(function() {
      console.log(this.payload);
    }, 1000);
  },
};

obj2.doSth();

const obj = {
  payload: 'asdf',
  doSth() {
    setTimeout(() => {
      console.log(this.payload);
    }, 1000);
  },
};

obj.doSth();

[1, 2, 3].map(value => value * value);
