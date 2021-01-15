var hello = 'Hello';
var hello = 'Hello +';
let world = 'Hello World';
let world = 'Hello World+';
const helloworld = 'Hello World!';

const anotherfunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloworld);
};

anotherfunction();

const helloWolrd = () => {
  globalVar = 'im global';
};

helloWolrd();
console.log(globalVar);

const anotherFunction = () => {
  var localVar = (globalVar = 'Im Global');
};

anotherFunction();
console.log(globalVar);
