export default function Link(props) {
  return (
    <a
      className="text-link hover:text-link-hover font-bold transition-all flex gap-2 items-center text-base lg:text-xl"
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}
