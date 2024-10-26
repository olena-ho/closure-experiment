import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Experimenting with closure</h1>
<p>results are in the console</p>
`;

const createCounter = () => {
  let count = 0;
  return () => {
    return count++;
  };
};

const counter = createCounter();
const counter2 = createCounter();
console.log(counter(), counter(), counter(), counter(), counter());
console.log(counter2(), counter2(), counter2());
