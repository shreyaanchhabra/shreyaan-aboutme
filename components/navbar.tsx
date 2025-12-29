const links = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];

export default function VerticalNav() {
  return (
    <nav className="flex flex-col justify-center gap-10 pl-4 mr-40 -ml-20 text-default tracking-wide relative">
      {/* Added 'relative' to the nav */}
      <div className="absolute -left-6 top-0 h-full w-px bg-black/20" />
      {links.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-3xl font-semibold tracking-wide
            underline underline-offset-8 decoration-black/40
            hover:decoration-black
            transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}