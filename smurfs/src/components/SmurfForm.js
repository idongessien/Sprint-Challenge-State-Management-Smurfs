import React, { useState } from "react";

const SmurfForm = props => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height:"",
  });

  const handleChanges = e => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value
    });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewSmurf(smurf);
  };

  return (
    <form onSubmit={submitForm}>
      <input
        id="name"
        type="text"
        placeholder="Name"
        onChange={handleChanges}
        name="name"
        value={smurf.name}
      />

       <input
        id="age"
        type="text"
        placeholder="age"
        onChange={handleChanges}
        name="age"
        value={smurf.age}
      />

       <input
        id="height"
        type="text"
        placeholder="height"
        onChange={handleChanges}
        name="height"
        value={smurf.height}
      />
      
      <button type="submit">Add Smurf</button>
    </form>
  );
};

export default SmurfForm;