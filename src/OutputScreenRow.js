import React from 'react'

export default function OutputScreenRow(props) {
    // let q = Button.value;
    // console.log(q);

    return (
        <div className="screen-row">
            <input type="text" readOnly value={props.value}/>
        </div>
    )
}

