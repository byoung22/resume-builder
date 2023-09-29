export default function InputTechnicalSkills({
  technicalSkills,
  changeSection,
  deleteSection,
  selectItemId,
}) {
  return (
    <div>
      {technicalSkills.map((skill) => {
        return (
          <div key={skill.id}>
            <input
              onFocus={selectItemId}
              onChange={changeSection}
              value={skill.skill}
              data-key={"skill"}
              data-id={skill.id}
            />
            <button onClick={() => deleteSection(skill.id)}>-</button>
          </div>
        );
      })}
      <button>+</button>
    </div>
  );
}
