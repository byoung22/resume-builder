import { v4 as uuidv4 } from "uuid";

export default function InputTechnicalSkills({
  technicalSkills,
  changeSection,
  deleteSection,
  addSection,
  selectItemId,
}) {
  function addValue() {
    const obj = {
      id: uuidv4(),
      skill: "",
    };
    addSection(obj);
  }
  return (
    <div className="section">
      {technicalSkills.map((skill) => {
        return (
          <div className="item-container" key={skill.id}>
            <input
              onFocus={selectItemId}
              onChange={changeSection}
              value={skill.skill}
              data-key={"skill"}
              data-id={skill.id}
              className="item"
            />
            <button onClick={() => deleteSection(skill.id)} className="delete">
              🗑️
            </button>
          </div>
        );
      })}
      <button onClick={addValue} className="add-button">
        +
      </button>
    </div>
  );
}
