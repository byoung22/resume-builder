import AddInput from "./AddInput";

function EducationList({ arr, selectItemId }) {
  return arr.map((school) => {
    return (
      <div key={school.id}>
        <button onClick={selectItemId} data-key={school.id}>
          {school.school}<br/>
          {school.degree}
        </button>
      </div>
    );
  });
}

export default function InputEducation({
  education,
  changeSection,
  itemId,
  selectItemId,
}) {
  function findValue(id, info) {
    let value;
    education.forEach((school) => {
      if (school.id === id) value = school[info];
    });
    return value;
  }

  return (
    <div>
      <EducationList arr={education} selectItemId={selectItemId} />
      {itemId !== null && (
        <>
          <AddInput
            label={'School: '}
            id={"edu-school"}
            value={findValue(itemId, "school")}
            onChange={changeSection}
            dataKey={"school"}
          />
          <AddInput
          label={'Degree: '}
            id={"edu-degree"}
            value={findValue(itemId, "degree")}
            onChange={changeSection}
            dataKey={"degree"}
          />
          <AddInput
            label={'Start Date: '}
            id={"edu-start"}
            value={findValue(itemId, "startDate")}
            onChange={changeSection}
            dataKey={"startDate"}
          />
          <AddInput
            label={'End Date: '}
            id={"edu-end"}
            value={findValue(itemId, "endDate")}
            onChange={changeSection}
            dataKey={"endDate"}
          />
        </>
      )}
    </div>
  );
}
