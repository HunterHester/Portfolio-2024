function Nav() {
    return (
        <>
            <a href="/" className="fixed top-6">
                <h1 className="text-4xl font-medium text-slate-800">HH</h1>
            </a>
            <nav className="fixed top-2 right-16 m-4">
                <ul className="flex space-x-4">
                    <li className="hover:bg-gray-200">
                        <a href="/projects" className="text-2xl font-light text-slate-800">Projects</a>
                    </li>
                    <li className="hover:bg-gray-200">
                        <a href="./Hunter Hester Resume - 2024.pdf" className="text-2xl font-light text-slate-800">Resume</a>
                    </li>
                    <li className="hover:bg-gray-200">
                        <a href="/about" className="text-2xl font-light text-slate-800">About</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav;
