function EducationInfo(props) {
    return (
      <div>
        <h1>{props.section}</h1>
        <label htmlFor="course">Course</label>
        <input
        type="text"
        id="course"
        name="course"
        value={props.formData.course}
        onChange={props.handleChange}
      />
      {props.errors.course && <div className="error">{props.errors.course}</div>}
        
      </div>
    );
  }
  export default EducationInfo;