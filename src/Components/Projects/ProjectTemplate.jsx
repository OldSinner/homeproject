export default function ProjectTemplate({
  title,
  children,
  footer,
  backdrop,
  techStack,
}) {
  return (
    <div className="bg-zinc-800 h-4/6 w-4/5 md:w-1/4 rounded-xl flex flex-col shadow-md m-10">
      <h1 className="text-left text-lg border-b-2 border-zinc-500 text-zinc-400 p-2 ">
        {title}
      </h1>
      <div className={`${backdrop} h-4/6 bg-cover`}>{children}</div>
      <div className="flex flex-col">
        <div className="flex flex-row items-start">{techStack}</div>
        <div className="flex flex-row items-start">{footer}</div>
      </div>
    </div>
  );
}

export function TechStack({ children }) {
  return (
    <div className="text-center rounded-xl border-zinc-500 border-2 w-14 m-2 text-sm p-1">
      {children}
    </div>
  );
}
