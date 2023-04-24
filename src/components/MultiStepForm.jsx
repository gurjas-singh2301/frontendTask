import React, { useState } from "react";
import GenInfo from "./GenInfo";
import EducationInfo from "./EducationInfo";
import PersonalInfo from "./PersonalInfo";
function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    percentage: "",
    age: "",
    email: "",
    course: "",
    gender: "",
    dob: ""
  });
  const [errors, setErrors] = useState({});
  const sections = ["General","Education","Personal"]


  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  };

  const validateGenInfo = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.percentage.trim()) {
      errors.percentage = "Percentage is required";
      isValid = false;
    }  else if (formData.percentage < 0) {
      errors.percentage = "Please enter valid percentage";
      isValid = false;
    }

    if (!formData.age.trim()) {
      errors.age = "Age is required";
    } else if (formData.age < 0) {
        console.log("formData.age",formData.age);
      errors.age = "Please enter valid age";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const validateEducationInfo = () => {
    let errors = {};
    let isValid = true;

    if (!formData.course.trim()) {
      errors.course = "Course name is required";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const validatePersonalInfo = () => {
    let errors = {};
    let isValid = true;

    if (!formData.gender.trim()) {
      errors.gender = "Gender is required";
      isValid = false;
    }

    if (!formData.dob.trim()) {
      errors.dob = "Date of Birth is required";
      isValid = false;
    }

    setErrors(errors);

    return isValid;
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (validateGenInfo()) {
        setCurrentStep(2);
      }
    } else if (currentStep === 2) {
      if (validateEducationInfo()) {
        setCurrentStep(3);
      }
    } else if (currentStep === 3) {
      if (validatePersonalInfo()) {
        alert("Thankyou for submission")
      }
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const renderTabContent = () => {
    if (currentStep === 1) {
      return (
        <GenInfo
          section={sections[currentStep-1]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      );
    } else if (currentStep === 2) {
      return (
        <EducationInfo
        section={sections[currentStep-1]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      );
    } else if (currentStep === 3) {
      return (
        <PersonalInfo
        section={sections[currentStep-1]}
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      );
    } else {
      return <div>Thank you for submitting the form!</div>;
    }
  };

  return (
    <form >
      {renderTabContent()}
      {currentStep < 4 && (
        <div>
          <button
            type="button"
            onClick={handleBack}
            disabled={currentStep === 1}
          >
            Back
          </button>
          <button type="button" onClick={handleNext}>
          {currentStep === sections.length ? "Submit" : "Next"}
          </button>
        </div>
      )}
      {currentStep === 4 && <button type="submit">Submit</button>}
    </form>
  );
}

export default MultiStepForm;

