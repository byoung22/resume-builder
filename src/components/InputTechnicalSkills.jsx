export default function InputTechnicalSkills({
  technicalSkills,
  changeSection,
  selectItemId,
}) {
  return (
    <div>
      {technicalSkills.map((skill) => {
        return (
          <div key={skill.id} data-key={skill.id} onClick={selectItemId}>
            <input
              onChange={changeSection}
              value={skill.skill}
              data-key={"skill"}
            />
          </div>
        );
      })}
    </div>
  );
}
