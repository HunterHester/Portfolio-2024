function ProjectCard({ title, description, link }) {
    return (
        
        <a href={link} className="max-w-2xl overflow-hidden shadow-sm bg-white mb-2 w-screen">
            <header className="my-2">
                <h4 className="font-medium text-slate-800 text-xl">{title}</h4>
            </header>

            <main>
                <p className="font-light text-slate-800">{description}</p>
            </main>

            <footer className="mt-1">
                <p className="font-light text-slate-800">
                    LEARN MORE →
                </p>
            </footer>
            {/* <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Learn more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a> */}
        </a>
    )
}

export default ProjectCard;