import Button from "./Button";

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p style={{ color: "red" }}>
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p style={{ color: "green" }}>
          {friend.name} owes you {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>{friend.name} and you are even</p>}
      <Button>Select</Button>
    </li>
  );
}

export default Friend;
