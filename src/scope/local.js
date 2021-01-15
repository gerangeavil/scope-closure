const helloWorld = () => {
  const hello = 'Hello World';
  console.log(hello);
};

helloWorld();

var scope = 'im global';

const functionScope = () => {
  var scope = 'im just local';
  const func = () => {
    return scope;
  };
  console.log(func());
};

functionScope();
console.log(scope);
