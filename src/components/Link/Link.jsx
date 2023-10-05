export default function Link(props) {
  return (
    <a
      className="text-text hover:opacity-80 font-bold transition-all flex gap-2 items-center"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
