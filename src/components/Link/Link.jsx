export default function Link(props) {
  return (
    <a
      className="text-link hover:text-link-hover font-bold transition-all inline-flex gap-2 items-center"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
