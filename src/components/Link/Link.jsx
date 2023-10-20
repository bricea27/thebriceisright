export default function Link(props) {
  return (
    <a
      className="text-slate-900 hover:text-slate-700 transition-all inline-flex gap-2 items-center"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
