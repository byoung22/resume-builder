import AddInput from "./AddInput";
import { v4 as uuidv4 } from 'uuid';

function ExperienceList({ arr, selectItemId, deleteSection }) {
  return arr.map((item) => {
    return (
      <div key={item.id} className="item-container">
        <button onClick={selectItemId} data-id={item.id} className="item">
          {item.position}
          <br />
          {item.organization}
        </button>
        <button onClick={() => deleteSection(item.id)}>-</button>
      </div>
    );
  });
}

export default function InputExperience({
  experience,
  changeSection,
  deleteSection,
  addSection,
  itemId,
  selectItemId,
}) {
  // Form manipulation
  function loadValue(id, info) {
    let value;
    experience.forEach((obj) => {
      if (obj.id === id) value = obj[info];
    });
    return value;
  }
  function addValue() {
    const obj = {
      id: uuidv4(),
      department: '',
      organization: '',
      position: '',
      startDate: '',
      endDate: '',
      description: ''
    }
    addSection(obj)
  }
  return (
    <div>
      <ExperienceList
        arr={experience}
        itemId={itemId}
        selectItemId={selectItemId}
        deleteSection={deleteSection}
      />
      <button onClick={addValue} className="add-button">+</button>
      {itemId !== null && (
        <div className="form">
          <AddInput
            label={"Position: "}
            id={itemId + "-position"}
            value={loadValue(itemId, "position")}
            onChange={changeSection}
            dataKey={"position"}
          />
          <AddInput
            label={"Organization: "}
            id={itemId + "-organization"}
            value={loadValue(itemId, "organization")}
            onChange={changeSection}
            dataKey={"organization"}
          />
          <AddInput
            label={"Department: "}
            id={itemId + "-department"}
            value={loadValue(itemId, "department")}
            onChange={changeSection}
            dataKey={"department"}
          />
          <AddInput
            label={"Start Date: "}
            id={itemId + "-startDate"}
            value={loadValue(itemId, "startDate")}
            onChange={changeSection}
            dataKey={"startDate"}
          />
          <AddInput
            label={"End Date: "}
            id={itemId + "-endDate"}
            value={loadValue(itemId, "endDate")}
            onChange={changeSection}
            dataKey={"endDate"}
          />
          <label htmlFor={itemId + "-description"}>Description: </label>
          <textarea
            id={itemId + "-description"}
            value={loadValue(itemId, "description")}
            onChange={changeSection}
            data-key={"description"}
          />
        </div>
      )}
    </div>
  );
}
