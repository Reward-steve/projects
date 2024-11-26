import styles from "./FriendsList.module.css";
function Button({ children }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
