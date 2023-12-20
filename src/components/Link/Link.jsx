export default function Link(props) {
  return (
    <a
      className="text-slate-900 dark:text-slate-100 hover:text-slate-600 dark:hover:text-slate-300 transition-all inline-flex gap-2 items-center"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
