export default function Link(props) {
  return (
    <a
      className="text-neutral-100 hover:text-neutral-300 transition-all inline-flex gap-2 items-center"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
