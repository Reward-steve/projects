import Button from "./Button";
import styles from "./FriendsList.module.css";
function FormAddFriend() {
  return (
    <form className={styles.formaddfriend}>
      <label>Friends Name</label>
      <input type="text" />

      <label>Image URL</label>
      <input type="text" />
      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
