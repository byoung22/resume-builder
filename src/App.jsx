import "./styles/index.css";
import "./styles/App.css";
import Preview from "./components/Preview.jsx";
import sample from "./sample-data";
import InputPersonal from "./components/InputPersonal";
import InputEducation from "./components/InputEducation";
import InputTechnicalSkills from "./components/InputTechnicalSkills";
import InputExperience from "./components/InputExperience";
import { useState } from "react";

export default function App() {
  // Initialize selection
  const [category, setCategory] = useState("personalInfo");
  const [itemId, setItemId] = useState(null);

  // Ititialize data
  const [personalInfo, setPersonalInfo] = useState(sample.personalInfo);
  const [education, setEducation] = useState(sample.education);
  const [technicalSkills, setTechnicalSkills] = useState(sample.technicalSkills);
  const [workExperience, setWorkExperience] = useState(sample.workExperience);
  const [projectExperience, setProjectExperience] = useState(sample.projectExperience);

  // Reset data/selection function
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

  // Load preset data function
  function loadSample() {
    setPersonalInfo(sample.personalInfo);
    setEducation(sample.education);
    setTechnicalSkills(sample.technicalSkills);
    setWorkExperience(sample.workExperience);
    setProjectExperience(sample.projectExperience);
  }

  // Change selection
  function selectCategory(e) {
    setCategory(e.target.dataset.key);
    setItemId(null);  // Selecting another category unfocuses item
  }
  function selectItemId(e) {
    // Selecting the same item unfocuses the item IF NOT ON TECHNICAL SKILLS
    const id = e.target.dataset.id;
    (id === itemId && category !== 'technicalSkills') ? setItemId(null) : setItemId(id);
  }

  // Change data
  function changeSection(e) {
    // The data object is in the following format
    // category => find the matching ID => key: value

    const key = e.target.dataset.key;
    const value = e.target.value;

    function findChangedItem(arr, cb) {
      const copy = [...arr];
      copy.forEach((item) => {
        if (itemId === item.id) item[key] = value;
      });
      cb(copy);
    }

    if (category === 'personalInfo') setPersonalInfo({ ...personalInfo, [key]: value });
    if (category === "education") findChangedItem(education, setEducation);
    if (category === "technicalSkills") findChangedItem(technicalSkills, setTechnicalSkills);
    if (category === "workExperience") findChangedItem(workExperience, setWorkExperience);
    if (category === "projectExperience") findChangedItem(projectExperience, setProjectExperience);

    // Uncomment to check if its targetting the right property
    // console.table({category: category, itemId: itemId, key: key, value: value})
  }
  function deleteSection(deletedId) {
    function findItem(arr, cb) {
      const copy = [];
      arr.forEach((item) => {
        if (deletedId !== item.id) copy.push(item);
      });
      cb(copy);
    }

    if (category === "education") findItem(education, setEducation);
    if (category === "technicalSkills") findItem(technicalSkills, setTechnicalSkills);
    if (category === "workExperience") findItem(workExperience, setWorkExperience);
    if (category === "projectExperience") findItem(projectExperience, setProjectExperience);
  
    // If you delete the selected item, the form will need to be empty
    if(deletedId === itemId) setItemId(null);
  }
  function addSection(newObj) {
    function pushNewObj(arr, cb) {
      const copy = [...arr];
      copy.push(newObj);
      cb(copy);
      setItemId(newObj.id);
    }

    if (category === "education") pushNewObj(education, setEducation);
    if (category === "technicalSkills") pushNewObj(technicalSkills, setTechnicalSkills);
    if (category === "workExperience") pushNewObj(workExperience, setWorkExperience);
    if (category === "projectExperience") pushNewObj(projectExperience, setProjectExperience);
  }

  return (
    <div className="main-container">
      <div className="editor">
        <div className="reset-container container">
          <button onClick={reset}>Reset</button>
          <button onClick={loadSample}>Load Example</button>
        </div>
        <button onClick={selectCategory} data-key="personalInfo">
          Personal Information
        </button>
        {category === "personalInfo" && (
          <InputPersonal
            selectCategory={selectCategory}
            personalInfo={personalInfo}
            changeSection={changeSection}
          />
        )}
        <button onClick={selectCategory} data-key="education">
          Education
        </button>
        {category === "education" && (
          <InputEducation
            education={education}
            changeSection={changeSection}
            deleteSection={deleteSection}
            addSection={addSection}
            itemId={itemId}
            selectItemId={selectItemId}
          />
        )}
        <button onClick={selectCategory} data-key="technicalSkills">
          Technical Skills
        </button>
        {category === "technicalSkills" && (
          <InputTechnicalSkills
            technicalSkills={technicalSkills}
            changeSection={changeSection}
            deleteSection={deleteSection}
            addSection={addSection}
            selectItemId={selectItemId}
          />
        )}
        <button onClick={selectCategory} data-key="workExperience">
          Work Experience
        </button>
        {category === "workExperience" && (
          <InputExperience
            experience={workExperience}
            changeSection={changeSection}
            deleteSection={deleteSection}
            addSection={addSection}
            itemId={itemId}
            selectItemId={selectItemId}
          />
        )}
        <button onClick={selectCategory} data-key="projectExperience">
          Project Experience
        </button>
        {category === "projectExperience" && (
          <InputExperience
            experience={projectExperience}
            changeSection={changeSection}
            deleteSection={deleteSection}
            addSection={addSection}
            itemId={itemId}
            selectItemId={selectItemId}
          />
        )}
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
