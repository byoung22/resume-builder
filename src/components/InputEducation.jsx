import AddInput from "./AddInput";
import { v4 as uuidv4 } from "uuid";

function EducationList({ arr, selectItemId, deleteSection }) {
  return arr.map((school) => {
    return (
      <div className="item-container" key={school.id}>
        <button className="item" onClick={selectItemId} data-id={school.id}>
          {school.school}
          <br />
          {school.degree}
        </button>
        <button onClick={() => deleteSection(school.id)} className="delete">
          🗑️
        </button>
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
      degree: "",
      school: "",
      startDate: "",
      endDate: "",
    };
    addSection(obj);
  }

  return (
    <div className="section">
      <EducationList
        arr={education}
        selectItemId={selectItemId}
        deleteSection={deleteSection}
      />
      <button onClick={addValue} className="add-button">
        +
      </button>
      {itemId !== null && (
        <div className="form">
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
        </div>
      )}
    </div>
  );
}
