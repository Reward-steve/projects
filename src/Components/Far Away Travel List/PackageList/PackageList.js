import { useState } from "react";
import Item from "./Item";

function PackageList({ initialItems, removeItem, onClickCheck }) {
  const [sortBy, setSortBy] = useState("input");

  const onChangeInput = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="list">
      <ul>
        {initialItems.map((items, id) => {
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
          <option value={"packed"}>Sort by Packed Status</option>
        </select>
      </div>
    </div>
  );
}

export default PackageList;
