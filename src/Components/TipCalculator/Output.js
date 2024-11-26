export default function Output({ bill, myTip, frdTip, onclickReset }) {
  let AvgTip = (Number(myTip) + Number(frdTip)) / 2;
  let CalTip = (AvgTip / 100) * Number(bill);
  let summedBillAndTip = Number(bill) + CalTip;

  const roundNum = (num) => {
    return num ? Math.round(num) : num;
  };
  return (
    <>
      <h4>{`You paid $${roundNum(summedBillAndTip)} ($${roundNum(
        bill
      )} + $${roundNum(CalTip)}tip)`}</h4>
      <button
        style={{ background: "gray", color: "white" }}
        onClick={onclickReset}
      >
        Reset
      </button>
    </>
  );
}
