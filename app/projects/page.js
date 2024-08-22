import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";

const activeProjects = {
  project1: {
    title: 'Discord LeetCode Bot',
    description: "Discord bot that posts the daily LeetCode challenge via LeetCode's GraphQL API",
    link: 'https://github.com/HunterHester/Discord-LeetCode-Bot?tab=readme-ov-file#discord-leetcode-bot'
  },
  project2: {
    title: 'Fusion Fables',
    description: 'Forum for writers to collaborate by posting short stories, allowing others to comment for additional inspirations/feedback',
    link: 'https://github.com/HunterHester/fusion-fables?tab=readme-ov-file#fusion-fables'
  },
  project3: {
    title: 'Schedaddy',
    description: 'Customer Relationship Management platform built to handle scheduling for businesses',
    link: 'https://github.com/HunterHester/Schedaddy?tab=readme-ov-file#schedaddy'
  },
}

export default function projects() {
    return (
  
      <main className="flex flex-col justify-center items-center h-screen bg-slate-100">
        
      <Nav />
      
      {Object.keys(activeProjects).map((key) => (
        <ProjectCard
        key={key}
        title={activeProjects[key].title}
        description={activeProjects[key].description}
        link={activeProjects[key].link}
        />
      ))}

      </main>
    )
  }