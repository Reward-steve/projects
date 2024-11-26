import { useState } from "react";
import "../../Components/Far Away Travel List/FarAwayTList.css";
import Form from "../../Components/Far Away Travel List/Form";
import Logo from "../../Components/Far Away Travel List/Logo";
import PackageList from "../../Components/Far Away Travel List/PackageList/PackageList";
import Status from "../../Components/Far Away Travel List/Status";

function FarAwayTravelList() {
  const [item, setItem] = useState("");
  const [select, setSelect] = useState(2);
  const [itemList, setItemList] = useState([]);

  const onChangeSetItem = (e) => {
    setItem(e.target.value);
  };

  const AddItemToList = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!item) return;
    const newArray = {
      id: Date.now(),
      description: item,
      quantity: select,
      packed: false,
    };

    setItemList((item) => [...item, newArray]);
    console.log(itemList);
    setItem("");
    setSelect(1);
  };

  const onClickClearList = () => {
    const confirmed = window.confirm("Are you sure you want to clear List 😀");
    if (confirmed) setItemList([]);
  };
  const onClickRemoveList = (id) => {
    setItemList((item) => item.filter((item) => item.id !== id));
  };

  const onClickSetSelect = (e) => {
    setSelect(e.target.value);
  };

  const addClickCheckBox = (id) => {
    setItemList((item) =>
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div>
      <Logo />
      <Form
        item={item}
        select={select}
        setItemOnChange={onChangeSetItem}
        addList={AddItemToList}
        setSelect={onClickSetSelect}
      />
      <PackageList
        initialItems={itemList}
        removeItem={onClickRemoveList}
        onClickCheck={addClickCheckBox}
        setOnclickClearList={onClickClearList}
      />
      <Status item={itemList} />
    </div>
  );
}

export default FarAwayTravelList;
