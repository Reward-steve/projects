import Friend from "./Friend";

export default function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((friends, i) => {
        return <Friend friend={friends} key={friends.id} />;
      })}
    </ul>
  );
}
