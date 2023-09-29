import AddInput from "./AddInput";
import { v4 as uuidv4 } from 'uuid';

function EducationList({ arr, selectItemId, deleteSection }) {
  return arr.map((school) => {
    return (
      <div key={school.id}>
        <button onClick={selectItemId} data-id={school.id}>
          {school.school}
          <br />
          {school.degree}
        </button>
        <button onClick={() => deleteSection(school.id)}>-</button>
      </div>
    );
  });
}

export default function InputEducation({
  education,
  changeSection,
  deleteSection,
  addSection,
  itemId,
  selectItemId,
}) {
  // Form manipulation
  function loadValue(id, info) {
    let value;
    education.forEach((school) => {
      if (school.id === id) value = school[info];
    });
    return value;
  }
  function addValue() {
    const obj = {
      id: uuidv4(),
      degree: '',
      school: '',
      startDate: '',
      endDate: ''
    }
    addSection(obj);
  }

  return (
    <div>
      <EducationList arr={education} selectItemId={selectItemId} deleteSection={deleteSection}/>
      <button onClick={addValue}>+</button>
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
    </div>
  );
}
