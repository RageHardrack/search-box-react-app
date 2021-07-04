export default function SearchResultsItem({ name, email }) {
  return (
    <div
      style={{
        backgroundColor: "#e8e7e7",
        marginTop: "1rem",
        marginBottom: "1rem",
        padding: 10,
        width: "100%",
      }}
    >
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
}
