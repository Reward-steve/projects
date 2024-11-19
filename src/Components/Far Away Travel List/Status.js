function Status({ item }) {
  if (!item.length) {
    return (
      <>
        <footer className="stats">
          <em>Start Adding something to Chart 🚀</em>
        </footer>
      </>
    );
  }

  const status = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / status) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You've got everything ready to go ✈`
          : `💼 You have ${status} items on your List and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

export default Status;
