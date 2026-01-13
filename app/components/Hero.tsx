export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background - FIXED */}
      <div className="gradient-bg"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 text-cyan-400 mb-8 px-4 py-2 glass-effect rounded-full">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="text-sm font-mono">AI & BOT DEVELOPER</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-8xl font-bold mb-6">
          <span className="block text-white">SENU</span>
          <span className="block text-gradient">MODZ</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Building the future with <span className="text-cyan-300 font-semibold">AI-powered bots</span> and{' '}
          <span className="text-purple-300 font-semibold">cutting-edge tech solutions</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105"
          >
            Explore My Bots
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 glass-effect rounded-xl font-semibold text-lg hover:bg-gray-800/50 transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: '10+', label: 'Bots Built', color: 'text-cyan-400' },
            { value: '24/7', label: 'Uptime', color: 'text-green-400' },
            { value: '100%', label: 'Satisfaction', color: 'text-purple-400' },
            { value: '∞', label: 'Innovation', color: 'text-yellow-400' },
          ].map((stat, index) => (
            <div key={index} className="glass-effect p-6 rounded-xl">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-cyan-400/20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-purple-400/20 animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
}
