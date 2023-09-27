export default function AddInput({
  label,
  id,
  value,
  onChange,
  dataKey,
  type = "text",
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        data-key={dataKey}
      />
    </>
  );
}
