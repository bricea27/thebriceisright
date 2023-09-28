export default function Link(props) {
  return (
    <a
      className="hover:text-text-secondary"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
