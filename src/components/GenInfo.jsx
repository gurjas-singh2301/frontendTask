import React from "react";

function GenInfo(props) {
  return (
    <div >
    <h1>{props.section}</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={props.formData.name}
        onChange={props.handleChange}
      />
      {props.errors.name && <div className="error">{props.errors.name}</div>}

      <label htmlFor="percentage">Percentage</label>
      <input
        type="number"
        id="percentage"
        name="percentage"
        value={props.formData.percentage}
        onChange={props.handleChange}
      />
      {props.errors.percentage && <div className="error">{props.errors.percentage}</div>}

      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        value={props.formData.age}
        onChange={props.handleChange}
      />
      {props.errors.age && <div className="error">{props.errors.age}</div>}


      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={props.formData.email}
        onChange={props.handleChange}
      />
      {props.errors.email && <div className="error">{props.errors.email}</div>}
    
    </div>
  );
}
export default GenInfo;
