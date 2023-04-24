function PersonalInfo(props) {
    return (
      <div>
        <h1>{props.section}</h1>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={props.formData.gender}
          onChange={props.handleChange}
        >
          <option value="">-- Please select --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {props.errors.gender && (
          <div className="error">{props.errors.gender}</div>
        )}
  
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={props.formData.dob}
          onChange={props.handleChange}
        />
        {props.errors.dob && <div className="error">{props.errors.dob}</div>}
      </div>
    );
  }
  export default PersonalInfo;