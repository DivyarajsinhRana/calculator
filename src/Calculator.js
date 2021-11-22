import React, { useState } from "react";
import Calc from "./Calc";
import OutputScreen from "./OutputScreen";
import Button from "./Button";

export default function Calculator() {
  const [result, setResult] = useState("");
  function handleClick(event) {
    var val = event.target.value;
    setResult(val);
    console.log(val);

      switch (val) {
        case '=':
          if (result!=="")
          {
            let data;

            data=eval(result);
            setResult(data);
            // console.log(data);
          }
          break;
          
          case 'Clear': {
            setResult('');
            break;
        }
        case 'Delete':{
            var str = result;
            str = str.substr(0, str.length-1);
            setResult(str);
            break;
        }
       
        
        default:
             setResult(result+val);
          
        }
  }

  return (
    <div className="frame">
      <Calc value="Calculator" />
      <div className="mainCalc">
        <OutputScreen a={result}/>

        <div className="button-row">
          <Button handleClick={handleClick} label={"Clear"} />
          <Button handleClick={handleClick} label={"Delete"} />
          <Button handleClick={handleClick} label={"."} />
          <Button handleClick={handleClick} label={"/"} />
        </div>
        <div className="button-row">
          <Button handleClick={handleClick} label={"7"} />
          <Button handleClick={handleClick} label={"8"} />
          <Button handleClick={handleClick} label={"9"} />
          <Button handleClick={handleClick} label={"*"} />
        </div>
        <div className="button-row">
          <Button handleClick={handleClick} label={"4"} />
          <Button handleClick={handleClick} label={"5"} />
          <Button handleClick={handleClick} label={"6" }/>
          <Button handleClickk={handleClick} label={"-"} />
        </div>
        <div className="button-row">
          <Button handleClick={handleClick} label={"1"} />
          <Button handleClick={handleClick} label={"2"} />
          <Button handleClick={handleClick} label={"3"} />
          <Button handleClick={handleClick} label={"+" }/>
        </div>
        <div className="button-row">
          <Button handleClick={handleClick} label={"0"} />
          <Button handleClick={handleClick} label={"="} />
        </div>
      </div>
    </div>
  )
}