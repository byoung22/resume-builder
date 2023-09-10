import './styles/index.css';
import './styles/App.css';
import Preview from './components/Preview.jsx';
import sample from './sample-data';
import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

export default function App() {
    const [personalInfo, setPersonalInfo] = useState(sample.personalInfo);
    const [education, setEducation] = useState(sample.education);
    const [workExperience, setWorkExperience] = useState(sample.workExperience);
    const [projectExperience, setProjectExperience] = useState(sample.projectExperience);
    const [technicalSkills, setTechnicalSkills] = useState(sample.technicalSkills);

    function reset() {
        setPersonalInfo({
            fullName: '',
            email: '',
            phoneNumber: '',
            address: '',
            portfolio: ''
        });
        setEducation([]);
        setWorkExperience([]);
        setProjectExperience([]);
        setTechnicalSkills([]);
    }
    function loadSample() {
        setPersonalInfo(sample.personalInfo);
        setEducation(sample.education);
        setWorkExperience(sample.workExperience);
        setProjectExperience(sample.projectExperience);
        setTechnicalSkills(sample.technicalSkills);
    }

    return (
        <div className='main-container'>
            <div className='editor'>
                <div className='reset-container'>
                    <button onClick={reset}>Reset</button>
                    <button onClick={loadSample}>Load Example</button>
                </div>
            </div>
            <Preview
            personalInfo={personalInfo}
            education={education}
            workExperience={workExperience}
            projectExperience={projectExperience}
            technicalSkills={technicalSkills}
            />
        </div>
    )
}