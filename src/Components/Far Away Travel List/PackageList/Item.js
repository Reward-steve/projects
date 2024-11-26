export default function Item({ items, removeItem, idNum, onClickCheck }) {
  return (
    <li>
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => onClickCheck(idNum)}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.quantity} {items.description}
      </span>
      <button onClick={() => removeItem(idNum)}>❌</button>
    </li>
  );
}
