import AddInput from "./AddInput";

function EducationList({ arr, selectItemId }) {
  return arr.map((school) => {
    return (
      <div key={school.id}>
        <button onClick={selectItemId} data-key={school.id}>
          {school.school}
          <br />
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
  function loadValue(id, info) {
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
            label={"School: "}
            id={"edu-school"}
            value={loadValue(itemId, "school")}
            onChange={changeSection}
            dataKey={"school"}
          />
          <AddInput
            label={"Degree: "}
            id={"edu-degree"}
            value={loadValue(itemId, "degree")}
            onChange={changeSection}
            dataKey={"degree"}
          />
          <AddInput
            label={"Start Date: "}
            id={"edu-start"}
            value={loadValue(itemId, "startDate")}
            onChange={changeSection}
            dataKey={"startDate"}
          />
          <AddInput
            label={"End Date: "}
            id={"edu-end"}
            value={loadValue(itemId, "endDate")}
            onChange={changeSection}
            dataKey={"endDate"}
          />
        </>
      )}
      <button>+</button>
    </div>
  );
}
