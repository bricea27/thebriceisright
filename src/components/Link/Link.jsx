export default function Link(props) {
  return (
    <a
      className="font-black text-neutral-400 hover:text-neutral-800 transition-all inline-flex gap-2 items-center"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
