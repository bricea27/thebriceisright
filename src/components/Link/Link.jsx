export default function Link(props) {
  return (
    <a
      className="hover:text-text-secondary font-bold transition-all"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
