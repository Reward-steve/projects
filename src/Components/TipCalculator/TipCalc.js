import { useState } from "react";
import Output from "./Output";
import SelectPercentage from "./SelectPer";

export default function TipCalc() {
  const [bill, setbill] = useState("");
  const [myOpt, setmyOpt] = useState(0);
  const [friendOpt, setFriendOpt] = useState(0);

  const ResetTipCalc = () => {
    setbill("");
    setmyOpt(0);
    setFriendOpt(0);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onClick={(e) => e.preventDefault()}
        style={{
          width: "60%",
          boxShadow: "0 5px 5px",
          borderRadius: "10px",
          height: "70%",
          backdropFilter: "brightness(.9)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p> How much was the bill?</p>
        <input
          type="text"
          placeholder="Bill value"
          value={bill}
          style={{ color: "white", background: "gray", outline: "none" }}
          onChange={(e) => Number(setbill(e.target.value))}
        />
        <SelectPercentage
          question={"How did you like the service?"}
          ChangeOption={setmyOpt}
          opt={myOpt}
        />
        <SelectPercentage
          question={"How did your friend like the service?"}
          ChangeOption={setFriendOpt}
          opt={friendOpt}
        />
        {bill && (
          <Output
            bill={bill}
            myTip={myOpt}
            frdTip={friendOpt}
            onclickReset={ResetTipCalc}
          />
        )}
      </form>
    </div>
  );
}
