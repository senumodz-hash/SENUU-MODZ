import { Bot, Cpu, Database, Globe } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'SENU-AI Assistant',
    description: 'Advanced Discord bot with AI-powered commands, moderation tools, and custom features.',
    icon: Bot,
    tech: ['Node.js', 'Discord.js', 'OpenAI'],
    status: 'Active',
    link: 'https://github.com/senumodz/senu-ai-bot',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    id: 2,
    name: 'MODZ Dashboard',
    description: 'Central management panel for monitoring all automation scripts and bot services.',
    icon: Cpu,
    tech: ['Next.js', 'FastAPI', 'PostgreSQL'],
    status: 'Live',
    link: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Database Manager Bot',
    description: 'Telegram bot for managing databases with natural language commands.',
    icon: Database,
    tech: ['Python', 'MongoDB', 'Telegram API'],
    status: 'Active',
    link: '#',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 4,
    name: 'Web Scraper Suite',
    description: 'Collection of bots for automated data collection and processing.',
    icon: Globe,
    tech: ['Python', 'Selenium', 'Redis'],
    status: 'In Development',
    link: '#',
    color: 'from-orange-500 to-red-500',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Creations</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my collection of innovative bots and tech solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div 
                key={project.id} 
                className="glass-effect rounded-2xl p-6 hover:transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Active' || project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gray-800/50 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group-hover:translate-x-2 duration-300"
                >
                  View Details
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
