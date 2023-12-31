import "../styles/index.css";
import "../styles/Preview.css";

function Header({ personalInfo }) {
  return (
    <div className="header">
      <div className="header-top">
        <h1 className="fullName">{personalInfo.fullName}</h1>
        <p>
          Portfolio:{" "}
          <a href={personalInfo.portfolio}>{personalInfo.portfolio}</a>
        </p>
      </div>
      <div className="header-divide"></div>
      <div className="header-bot">
        <p className="contact-info">
          {personalInfo.address +
            " | " +
            personalInfo.phoneNumber +
            " | " +
            personalInfo.email}
        </p>
      </div>
    </div>
  );
}

function SchoolList({ arr }) {
  return arr.map((school) => {
    return (
      <div key={school.id}>
        <h3 className="bolded">{school.degree + " | " + school.school}</h3>
        <ul>
          <li className="description">
            {school.startDate + " - " + school.endDate}
          </li>
        </ul>
      </div>
    );
  });
}

function Education({ education }) {
  return (
    <div className="education">
      <h2 className="section-header">Education</h2>
      <SchoolList arr={education} />
    </div>
  );
}

function SkillList({ arr }) {
  return arr.map((skill) => {
    return (
      <div key={skill.id} className="skill">
        - {skill.skill}
      </div>
    );
  });
}

function Skills({ technicalSkills }) {
  return (
    <div className="technical-skills">
      <h2 className="section-header">Technical Skills</h2>
      <div className="skill-container">
        <SkillList arr={technicalSkills} />
      </div>
    </div>
  );
}

function Experience({ arr }) {
  return arr.map((experience) => {
    return (
      <div key={experience.id}>
        <h3 className="bolded">
          {experience.position + " | " + experience.organization}
        </h3>
        <div className="experience-info">
          <p>{experience.department}</p>
          <p>{experience.startDate + " - " + experience.endDate}</p>
        </div>
        <pre className="description">{experience.description}</pre>
      </div>
    );
  });
}

function Work({ workExperience }) {
  return (
    <div className="work">
      <h2 className="section-header">Work Experience</h2>
      <Experience arr={workExperience} />
    </div>
  );
}
function Project({ projectExperience }) {
  return (
    <div className="project">
      <h2 className="section-header">Project Experience</h2>
      <Experience arr={projectExperience} />
    </div>
  );
}

export default function Preview({
  personalInfo,
  education,
  technicalSkills,
  workExperience,
  projectExperience,
}) {
  return (
    <div className={"preview"}>
      <div className="paper">
        <div className="paper-content">
          <Header personalInfo={personalInfo} />
          {education.length !== 0 && <Education education={education} />}
          {technicalSkills.length !== 0 && (
            <Skills technicalSkills={technicalSkills} />
          )}
          {workExperience.length !== 0 && (
            <Work workExperience={workExperience} />
          )}
          {projectExperience.length !== 0 && (
            <Project projectExperience={projectExperience} />
          )}
        </div>
      </div>
    </div>
  );
}
