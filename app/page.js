import Nav from "./components/Nav";

export default function Home() {
  return (

      <main className="flex flex-col md:flex-row justify-center items-center h-screen bg-slate-100">
        
        <Nav />
        
        <section className="flex flex-col items-center mb-8 md:mb-0">
        
          <img src="./images/hunter hester.jpg" className="w-48 h-48 md:w-72 md:h-72" alt='Hunter Hester Headshot'></img>
        
        </section>

        <section className="flex flex-col items-center md:ml-16">
          
          <h2 className="font-medium text-slate-800 text-4xl md:text-6xl">Hunter Hester</h2>
          
          <p className="font-light text-center text-slate-800 text-2xl md:text-4xl">Software Engineer</p>
          
          <div className="flex flex-row justify-center mt-4 space-x-4">
          
            <a href="https://github.com/HunterHester">
              <img src="./images/github_icon.svg" className="w-10 h-10 md:w-12 md:h-12" alt="GitHub Icon"></img>
            </a>

            <a href="mailto:hunter.hester15@gmail.com">
              <img src="./images/email_icon.svg" className="w-10 h-10 md:w-12 md:h-12" alt="Email Icon"></img>
            </a>

            <a href="https://www.linkedin.com/in/hunterhester/">
              <img src="./images/linkedin_icon.svg" className="w-10 h-10 md:w-12 md:h-12" alt="LinkedIn Icon"></img>
            </a>
          </div>
        </section>
      </main>

  );
}
