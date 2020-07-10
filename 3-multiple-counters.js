
function Button (props) {
  // const handleClick = () => setCounter(counter+1);
  const handleClick = ()=> props.onClickFunction(props.increment);
  return (
    <button onClick={handleClick}> 
      +{props.increment}
    </button>
  );
}

function Display(props){
  return (
    <div>{props.message}</div>
  )
}

function App () {
    const [counter, setCounter] = useState(42);
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
  return (
    <>
    <Button onClickFunction = {incrementCounter} increment = {1}/>
   <Button onClickFunction = {incrementCounter} increment = {12}/>
   <Button onClickFunction = {incrementCounter} increment = {1}/>
   <Button onClickFunction = {incrementCounter} increment = {100}/>
    <Display message = {counter}/>
    </>
  )
}
ReactDOM.render(
  <>
    <App/>
  </>,
  document.getElementById('mountNode')
)


// <button onClick={() => console.log(Math.random())}> {counter} </button> 
