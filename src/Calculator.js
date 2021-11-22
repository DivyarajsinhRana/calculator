import React, {useState} from "react";
import Button from "./Button";
import CalculatorTitle from "./CalculatorTitle";
import OutputScreenRow from "./OutputScreenRow";

export default function Calculator() {
    const [state, setState] = useState('');
    function handleClick(event){
        var v = event.target.value;
        // console.log(v);
        switch(v){
            case '=': {
                if(state !== '')
                {
                    var ans;
                    ans = eval(state);
                    console.log(ans);
                    
                    setState(state+v+ans);
                    // let a = '';
                    // setState({a: ans, state: ''});
                }
                break;
            }
            case 'Clear':{
                setState('');
                break;
            }
            case 'Delete':{
                var str = state;
                str = str.substr(0, str.length-1);
                setState(str);
                break;
            }
            default:{
                setState(state+v);
                break;
            }
        }
    }

  return (
    <div className="frame">
      <CalculatorTitle value="Calculator" />
      <div className="mainCalc">
        <OutputScreenRow value={state}/>
        <div className="button-row">
          <Button handleClick={handleClick} label={"Clear"}/>
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
          <Button handleClick={handleClick} label={"6"} />
          <Button handleClick={handleClick} label={"-"} />
        </div>
        <div className="button-row">
          <Button handleClick={handleClick} label={"1"} />
          <Button handleClick={handleClick} label={"2"} />
          <Button handleClick={handleClick} label={"3"} />
          <Button handleClick={handleClick} label={"+"} />
        </div>
        <div className="button-row">
          <Button handleClick={handleClick} label={"0"} />
          <Button handleClick={handleClick} label={"="} />
        </div>
      </div>
    </div>
  );
}
