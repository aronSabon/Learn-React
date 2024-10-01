
import {useEffect, useState} from "react";


export default function(){
  const [advice, setAdvice] = useState("this text gets updated");
  const [buttonPressedCount, setButtonPressedcount] = useState(0);

async function getAdvice(){
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data);
  console.log(data.slip.advice);
  console.log(data.slip);
  setAdvice(data.slip.advice);
  setButtonPressedcount( (c) => c+1);
}
useEffect(function () {
  getAdvice();
}, [])

  return (
    <>
    <h2>{advice}</h2>
    <p>welcome to react course</p>
    <p>button Pressed count : {buttonPressedCount} times</p>
    <button onClick={getAdvice}>Get response</button>
    <Message count = {buttonPressedCount} />
    </>
  )
}

function Message(value){
  return <p>button Pressed count : {value.count} times</p>;

}