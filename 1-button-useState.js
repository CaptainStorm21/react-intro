// function logRandom() {
//   console.log(Math.random())
// }

function Button () {
  // useState() results;
  // state object (getter)
  //update function (setter)
  //const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue);
  const [counter, setCounter] = useState(0);
  return <div><button onClick={() => setCounter(counter+1)}> {counter} </button></div>
}

ReactDOM.render(
<Button/>,
  document.getElementById('mountNode')
)


// <button onClick={() => console.log(Math.random())}> {counter} </button> 
