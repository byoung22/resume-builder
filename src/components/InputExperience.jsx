import AddInput from "./AddInput";

function ExperienceList({ arr, selectItemId }) {
  return arr.map((item) => {
    return (
      <div key={item.id}>
        <button onClick={selectItemId} data-key={item.id}>
          {item.position}<br/>
          {item.organization}
        </button>
      </div>
    );
  });
}

export default function InputExperience({ experience, changeSection, itemId, selectItemId }) {
  function loadValue(id, info) {
    let value;
    experience.forEach((obj) => {
      if(obj.id === id) value = obj[info]
    });
    return value;
  }
  return (
    <div>
      <ExperienceList
        arr={experience}
        itemId={itemId}
        selectItemId={selectItemId}
      />
      {itemId !== null &&
        <>
          <AddInput
            label={'Position: '}
            id={itemId+'-position'}
            value={loadValue(itemId, 'position')}
            onChange={changeSection}
            dataKey={'position'}
          />
          <AddInput
            label={'Organization: '}
            id={itemId+'-organization'}
            value={loadValue(itemId, 'organization')}
            onChange={changeSection}
            dataKey={'organization'}
          />
          <AddInput
            label={'Department: '}
            id={itemId+'-department'}
            value={loadValue(itemId, 'department')}
            onChange={changeSection}
            dataKey={'department'}
          />
          <AddInput
            label={'Start Date: '}
            id={itemId+'-startDate'}
            value={loadValue(itemId, 'startDate')}
            onChange={changeSection}
            dataKey={'startDate'}
          />
          <AddInput
            label={'End Date: '}
            id={itemId+'-endDate'}
            value={loadValue(itemId, 'endDate')}
            onChange={changeSection}
            dataKey={'endDate'}
          />
          <label htmlFor={itemId+"-description"}></label>
          <textarea
            id={itemId+"-description"}
            value={loadValue(itemId, 'description')}
            onChange={changeSection}
            data-key={'description'}
          />
        </>
      }
    </div>
  )
}