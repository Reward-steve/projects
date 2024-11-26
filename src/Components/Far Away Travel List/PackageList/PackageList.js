import { useState } from "react";
import Item from "./Item";

function PackageList({
  initialItems,
  removeItem,
  onClickCheck,
  setOnclickClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  const onChangeInput = (e) => {
    setSortBy(e.target.value);
  };

  let sortedItems;

  if (sortBy === "input") sortedItems = initialItems;

  if (sortBy === "description")
    sortedItems = initialItems
      .slice()
      .sort(
        (a, b) => a.description.localeCompare() - b.description.localeCompare()
      );
  if (sortBy === "quantity")
    sortedItems = initialItems.slice().sort((a, b) => a.quantity - b.quantity);

  // if (sortBy === "packed")
  //   sortedItems = initialItems
  //     .slice()
  //     .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((items, id) => {
          return (
            <Item
              items={items}
              key={id + 1}
              removeItem={removeItem}
              idNum={items.id}
              onClickCheck={onClickCheck}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={onChangeInput}>
          <option value={"input"}>Sort by Input</option>
          <option value={"description"}>Sort by Description</option>
          <option value={"quantity"}>Sort by quantity</option>
          {/* <option value={"packed"}>Sort by Packed</option> */}
        </select>
      </div>
      <div className="actions">
        <button onClick={setOnclickClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackageList;
