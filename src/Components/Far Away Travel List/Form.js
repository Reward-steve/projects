export default function Form({
  item,
  setItemOnChange,
  addList,
  setSelect,
  select,
}) {
  return (
    <form className="add-form" onSubmit={addList}>
      <h3>What do you need for your 😍 trip?</h3>
      <select value={select} onChange={setSelect}>
        {Array.from({ length: 2024 }, (_, i) => i + 1).map((num) => {
          return (
            <option value={num} key={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={item}
        onChange={setItemOnChange}
      />
      <button>Add</button>
    </form>
  );
}
