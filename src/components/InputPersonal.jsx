import AddInput from "./AddInput";

export default function InputPersonal({ personalInfo, changeSection }) {
  return (
    <div className="form">
      <AddInput
        label={"Full Name: "}
        id={"name"}
        value={personalInfo.fullName}
        onChange={changeSection}
        dataKey={"fullName"}
      />
      <AddInput
        type={"email"}
        label={"Email: "}
        id={"email"}
        value={personalInfo.email}
        onChange={changeSection}
        dataKey={"email"}
      />
      <AddInput
        label={"Phone Number: "}
        id={"phone"}
        value={personalInfo.phoneNumber}
        onChange={changeSection}
        dataKey={"phoneNumber"}
      />
      <AddInput
        label={"Address: "}
        id={"address"}
        value={personalInfo.address}
        onChange={changeSection}
        dataKey={"address"}
      />
      <AddInput
        label={"Portfolio: "}
        id={"portfolio"}
        value={personalInfo.portfolio}
        onChange={changeSection}
        dataKey={"portfolio"}
      />
    </div>
  );
}
