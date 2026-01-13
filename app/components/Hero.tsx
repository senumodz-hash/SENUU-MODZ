export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Animated Text */}
        <div className="inline-block mb-6">
          <div className="flex items-center justify-center space-x-2 text-primary mb-4">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <span className="text-sm font-mono">AI & BOT DEVELOPER</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-8xl font-bold mb-6">
          <span className="block">SENU</span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-cyan-400 bg-clip-text text-transparent">
            MODZ
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Building the future with <span className="text-primary font-semibold">AI-powered bots</span> and 
          <span className="text-secondary font-semibold"> cutting-edge tech solutions</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#projects" 
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-all transform hover:-translate-y-1"
          >
            Explore My Bots
          </a>
          <a 
            href="#contact" 
            className="px-8 py-3 glass-effect rounded-lg font-semibold hover:bg-gray-800 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: '10+', label: 'Bots Built' },
            { value: '24/7', label: 'Uptime' },
            { value: '100%', label: 'Satisfaction' },
            { value: '∞', label: 'Innovation' },
          ].map((stat, index) => (
            <div key={index} className="glass-effect p-4 rounded-xl">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-primary opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-6 h-6 rounded-full bg-secondary opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  )
}
