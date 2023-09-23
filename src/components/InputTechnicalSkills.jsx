export default function InputTechnicalSkills({
  technicalSkills,
  changeSection,
  selectItemId,
}) {
  return (
    <div>
      {technicalSkills.map((skill) => {
        return (
          <div key={skill[0]}>
            <input
              onChange={changeSection}
              onFocus={selectItemId}
              value={skill[1]}
              data-key={skill[0]}
            />
          </div>
        );
      })}
    </div>
  );
}
