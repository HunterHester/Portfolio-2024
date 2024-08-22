import Nav from "../components/Nav";

export default function About() {
    return (
      
      <main className="flex flex-col md:flex-row justify-center items-start md:items-center h-screen bg-slate-100">

      <Nav />

      <section className="flex flex-col items-center md:items-start md:w-1/2 p-4 md:ml-16">
          <p className="font-light text-center text-slate-800 text-l md:text-xl">
              My name is Hunter, and I'm a Software Engineer specializing in Full-Stack development. I graduated from the University of Texas at Austin's Full-Stack Web Development Bootcamp in 2023, and since then, I've been actively building web applications to expand my skills. When I'm not coding, I enjoy brewing coffee, practicing voice acting, and playing the piano.
          </p>
      </section>

      </main>
    )
  }