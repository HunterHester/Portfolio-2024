function ProjectCard({ title, description, link }) {
    return (
        <div className="max-w-2xl mb-2 w-screen">
            <hr className="border-t border-gray-300 my-4" />
            
            <header>
                <h4 className="font-medium text-slate-800 text-xl">{title}</h4>
            </header>
            
            <main>
            <p className="font-light text-slate-800">{description}</p>
        </main>

        <footer className="my-1">
            <a href={link} className="font-light text-slate-800">
                LEARN MORE →
            </a>
        </footer>

        </div>
    )
}

export default ProjectCard;