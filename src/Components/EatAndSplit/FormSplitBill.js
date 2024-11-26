import Button from "./Button";
import styles from "./FriendsList.module.css";
function FormSplitBill() {
  return (
    <div>
      <h2>Split a Bill with X</h2>
      <form className={styles.FormSplitBill}>
        <label>Bill Value</label>
        <input type="text" />
        <label>Your Expense</label>
        <input type="text" />
        <label>X's Expense:</label>
        <input type="text" disabled />
        <label>Who is paying the bill?</label>
        <select>
          <option value={"You"}>You</option>
          <option value={"X"}>X</option>
        </select>
        <Button>Split Bill</Button>
      </form>
    </div>
  );
}

export default FormSplitBill;
