import ResumeButton from "./resumebutton";
import ContactButton from "./contactbutton";

export default function Intro() {
  return (
    <section className="flex flex-col ml-40 justify-center px-14 max-w-2xl h-screen">
      
      
      <span className="text-lg uppercase tracking-widest text-gray-500 mb-4">
        Computer Science Freshman at UC San Diego
      </span>

      {/* Headline */}
      <h1 className="text-5xl leading-tight font-semibold mb-6">
        Hi, I’m <span className="underline underline-offset-4">Shreyaan Chhabra</span>.
        <br />
        I build thoughtful, impactful software.
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-xl font-light tracking-wide">
        I'm passionate about AI, full-stack development, and turning ideas into
        well-engineered products. Currently pursuing my CS degree at UCSD and exploring
        opportunities to apply my skills to real-world problems.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <ResumeButton />
        <ContactButton />
      </div>
      
    </section>
  );
}