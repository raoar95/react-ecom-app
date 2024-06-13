import React from "react";

// INPUT WITH LABEL COMPONENT

const MyInput = (props) => {
  return (

        <>
          <label for={props.id} className={props.labelClass}>{props.lableName}</label> 
          <input type={props.type} id={props.id} className={props.inputClass} placeholder={props.placeholder} autoComplete={props.autocomplete} name={props.lableName} onClick={props.clickFunc} onChange={props.chngFunc} value={props.lableValue} required={props.attReq} disabled={props.attDis} readOnly={props.attRead} /> 
        </>

  );
}


// INPUT WITH NO LABEL COMPONENT

const InputNoLabel = (props) => {
  return (

        <>
          <input type={props.type} id={props.id} className={props.class} placeholder={props.placeholder} autoComplete={props.autoComplete} name={props.name} onClick={props.clickFunc} onChange={props.chngFunc} value={props.lableValue} autoFocus={props.autoFocus} required={props.attReq} disabled={props.attDis} readOnly={props.attRead} /> 
        </>

  );
}




// SUBMIT COMPONENT

const Submit = (props) => {
  return (

        <>
          <input type="submit" id={props.id} className={props.class} onClick={props.clickFunc} value={props.value} /> 
        </>

  );
}




// CHECKBOX COMPONENT (INCLUDE DIV AS PER NEED)

const Checkbox = (props) => {
  return (
      <>
        <input type="checkbox" id={props.id} name={props.name} className={props.CheckboxClass} value={props.lableValue} onClick={props.InputClickFunc} onChange={props.changeFunc} required={props.attReq} disabled={props.attDis} readOnly={props.attRead} checked={props.checked}/>
        <label for={props.id} className={props.labelClass} onClick={props.labelClickFunc}>{props.labelValue}</label><br />
     </> 
  );
}




// RADIO COMPONENT (INCLUDE DIV AS PER NEED)

const Radio = (props) => {
  return (
      <>
        <input type="radio" id={props.lableName} name={props.radioName} className={props.radioClass} required={props.attReq} disabled={props.attDis} readOnly={props.attRead} defaultChecked={props.attChecked} />
        <label for={props.lableName} className={props.labelClass} onClick={props.clickFunc}>{props.name}</label><br />
     </> 
  );
}




// INPUT WITH LABEL & ICON COMPONENT

const IconInput = (props) => {
    return (
            <div className="InputComp IconInputComp"> 
              <lable for={props.lableName} className={props.labelClass}>{props.name}</lable>
                <div className="accInputCont">
                  <i class={props.faIconClass}></i>
                  <input className={props.class} type={props.type} placeholder={props.placeholder} autoComplete={props.autocomplete} name={props.lableName} value={props.value} required={props.attReq} disabled={props.attDis} readOnly={props.attRead} />
                </div>
                {props.moreInput}
            </div>
       );
 }


// SELECT COMPONENT

const Select = (props) => {
    return (

        <>
           <lable for={props.lableName} className={props.labelClass}>{props.name}</lable>
             <select id="category" name={props.lableName} required={props.attReq} disabled={props.attDis} readOnly={props.attRead}>
             {props.option} 
             </select>
        </>

    );
}


// TEXTAREA COMPONENT

const Textarea = (props) => {
    return (

          <>
            <lable for={props.lableName} className={props.labelClass}>{props.name}</lable>
            <textarea name={props.lableName} placeholder={props.placeholder} row="10" required={props.attReq} disabled={props.attDis} readOnly={props.attRead}></textarea>
          </>

    );
}


export { MyInput, Checkbox, Radio, IconInput, Select, Textarea, Submit, InputNoLabel };


// Note: Use InputComp class in input container.