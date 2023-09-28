import "./styles/index.css";
import "./styles/App.css";
import Preview from "./components/Preview.jsx";
import sample from "./sample-data";
import InputPersonal from "./components/InputPersonal";
import InputEducation from "./components/InputEducation";
import InputTechnicalSkills from "./components/InputTechnicalSkills";
import InputExperience from "./components/InputExperience";
import { useState } from "react";
// import { v4 as uuidv4 } from 'uuid';


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
    // console.log(e.currentTarget.dataset.key)
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
    
    function findChangedItem(obj, cb) {
      const copy = [...obj];
      copy.forEach((item) => {
        if (itemId === item.id) item[key] = value;
      });
      cb(copy);
    }

    if (category === "education") findChangedItem(education, setEducation);
    if (category === "technicalSkills") findChangedItem(technicalSkills, setTechnicalSkills);
    if (category === 'workExperience') findChangedItem(workExperience, setWorkExperience);
    if (category === 'projectExperience') findChangedItem(projectExperience, setProjectExperience);

    // console.table({category: category, itemId: itemId, key: key, value: value})
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
        {category === "workExperience" &&
          <InputExperience
            experience={workExperience}
            changeSection={changeSection}
            itemId={itemId}
            selectItemId={selectItemId}
          />
        }
        <button onClick={selectCategory} data-key="projectExperience">
          Project Experience
        </button>
        {category === "projectExperience" &&
          <InputExperience
            experience={projectExperience}
            changeSection={changeSection}
            itemId={itemId}
            selectItemId={selectItemId}
          />
        }
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
