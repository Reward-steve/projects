export default function SelectPercentage({ question, opt, ChangeOption }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "20%",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <p> {question}</p>
      <select value={opt} onChange={(e) => ChangeOption(e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing! (20%)</option>
      </select>
    </div>
  );
}
