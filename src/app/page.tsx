import NavBar from "./component/navBar";

export default function Home() {
  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* We can leave NavBar here, but note that it's already in layout.tsx! */}
      {/* If you keep it in layout.tsx, you can remove it from here to avoid duplicates. */}
      {/* <NavBar /> */}

      {/* Scroll Sections */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <h1 className="text-4xl font-bold font-serif text-primary">Home Section</h1>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center bg-secondary/30 rounded-xl my-4">
        <h2 className="text-3xl font-bold font-serif">Skills Section</h2>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold font-serif">Projects Section</h2>
      </section>

      <section id="education" className="min-h-screen flex items-center justify-center bg-secondary/30 rounded-xl my-4">
        <h2 className="text-3xl font-bold font-serif">Education Section</h2>
      </section>

      <section id="achievements" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-bold font-serif">Achievements Section</h2>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-secondary/30 rounded-xl my-4">
        <h2 className="text-3xl font-bold font-serif">Contact Section</h2>
      </section>
    </div>
  );
}
