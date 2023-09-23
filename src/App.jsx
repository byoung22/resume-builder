import "./styles/index.css";
import "./styles/App.css";
import Preview from "./components/Preview.jsx";
import sample from "./sample-data";
import InputPersonal from "./components/InputPersonal";
import InputEducation from "./components/InputEducation";
import InputTechnicalSkills from "./components/InputTechnicalSkills";
import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';
import AddInput from "./components/AddInput";

// label,
// id,
// value,
// onChange,
// dataKey,
// type = "text",
// dataArr = null,

function InputExperience({}) {
  return (
    <div>

    </div>
  )
}

export default function App() {
  // Change resume info
  const [personalInfo, setPersonalInfo] = useState(sample.personalInfo);
  const [education, setEducation] = useState(sample.education);
  const [technicalSkills, setTechnicalSkills] = useState(
    sample.technicalSkills,
  );
  const [workExperience, setWorkExperience] = useState(sample.workExperience);
  const [projectExperience, setProjectExperience] = useState(
    sample.projectExperience,
  );

  // Change selection
  const [category, setCategory] = useState("personalInfo");
  const [itemId, setItemId] = useState(null);

  // Reset data
  function reset() {
    setPersonalInfo({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      portfolio: "",
    });
    setEducation([]);
    setTechnicalSkills([]);
    setWorkExperience([]);
    setProjectExperience([]);

    setItemId(null);
    setCategory("personalInfo");
  }

  // Load Preset
  function loadSample() {
    setPersonalInfo(sample.personalInfo);
    setEducation(sample.education);
    setTechnicalSkills(sample.technicalSkills);
    setWorkExperience(sample.workExperience);
    setProjectExperience(sample.projectExperience);
  }

  // Current selected category & item
  function selectCategory(e) {
    setCategory(e.target.dataset.key);
    setItemId(null); // Selecting another category unfocuses item
  }
  function selectItemId(e) {
    setItemId(e.currentTarget.dataset.key);
    console.log(e.currentTarget.dataset.key);
  }

  // Change data when input is manipulated
  function changePersonal(e) {
    const key = e.target.dataset.key;
    const value = e.target.value;
    setPersonalInfo({ ...personalInfo, [key]: value });
  }

  function changeSection(e) {
    // The data object is in the following format
    // category => find the matching ID => key: value
    
    const key = e.target.dataset.key;
    const value = e.target.value;
    if (category === "education") {
      const copy = [...education];
      copy.forEach((school) => {
        if (itemId === school.id) school[key] = value;
      });
      setEducation(copy);
    }
    if (category === "technicalSkills") {
      const copy = [...technicalSkills];
      copy.forEach((skill) => {
        if (itemId === skill[0]) skill[1] = value;
      });
      setTechnicalSkills(copy);
    }
  }

  return (
    <div className="main-container">
      <div className="editor">
        <div className="reset-container">
          <button onClick={reset}>Reset</button>
          <button onClick={loadSample}>Load Example</button>
        </div>
        <button onClick={selectCategory} data-key="personalInfo">
          Personal Information
        </button>
        {category === "personalInfo" &&
          <InputPersonal
            selectCategory={selectCategory}
            personalInfo={personalInfo}
            changePersonal={changePersonal}
          />
        }
        <button onClick={selectCategory} data-key="education">
          Education
        </button>
        {category === "education" && 
          <InputEducation
            education={education}
            changeSection={changeSection}
            itemId={itemId}
            selectItemId={selectItemId}
          />
        }
        <button onClick={selectCategory} data-key="technicalSkills">
          Technical Skills
        </button>
        {category === "technicalSkills" && 
          <InputTechnicalSkills
            technicalSkills={technicalSkills}
            changeSection={changeSection}
            selectItemId={selectItemId}
          />
        }
        <button onClick={selectCategory} data-key="workExperience">
          Work Experience
        </button>
        {category === "projectExperience" &&
          <InputExperience
            experience={projectExperience}

          />
        }
        <button onClick={selectCategory} data-key="projectExperience">
          Project Experience
        </button>
      </div>
      <Preview
        personalInfo={personalInfo}
        education={education}
        technicalSkills={technicalSkills}
        workExperience={workExperience}
        projectExperience={projectExperience}
      />
    </div>
  );
}
