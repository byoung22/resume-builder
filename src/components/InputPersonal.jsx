import AddInput from "./AddInput";

export default function InputPersonal({ personalInfo, changePersonal }) {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <AddInput
          label={"Full Name: "}
          id={"name"}
          value={personalInfo.fullName}
          onChange={changePersonal}
          dataKey={"fullName"}
        />
        <AddInput
          type={"email"}
          label={"Email: "}
          id={"email"}
          value={personalInfo.email}
          onChange={changePersonal}
          dataKey={"email"}
        />
        <AddInput
          label={"Phone Number: "}
          id={"phone"}
          value={personalInfo.phoneNumber}
          onChange={changePersonal}
          dataKey={"phoneNumber"}
        />
        <AddInput
          label={"Address: "}
          id={"address"}
          value={personalInfo.address}
          onChange={changePersonal}
          dataKey={"address"}
        />
        <AddInput
          label={"Portfolio: "}
          id={"portfolio"}
          value={personalInfo.portfolio}
          onChange={changePersonal}
          dataKey={"portfolio"}
        />
      </form>
    </div>
  );
}
