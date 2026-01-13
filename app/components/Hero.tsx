export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Main content container */}
      <div className="container mx-auto px-4 relative z-10 text-center max-w-6xl">
        {/* Status badge */}
        <div className="inline-flex items-center justify-center gap-2 text-cyan-400 mb-8 px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-800">
          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
          <span className="text-sm font-mono">AI & BOT DEVELOPER</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6">
          <span className="block text-white">SENU</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
            MODZ
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Building the future with <span className="font-semibold text-cyan-300">AI-powered bots</span> and{' '}
          <span className="font-semibold text-purple-300">cutting-edge tech solutions</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a 
            href="#projects" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            🚀 Explore My Bots
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 bg-gray-900/50 backdrop-blur-sm rounded-xl font-semibold text-lg hover:bg-gray-800/50 transition-all border border-gray-800"
          >
            📞 Get in Touch
          </a>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {[
            { value: '10+', label: 'Bots Built', color: 'text-cyan-400' },
            { value: '24/7', label: 'Uptime', color: 'text-green-400' },
            { value: '100%', label: 'Satisfaction', color: 'text-purple-400' },
            { value: '∞', label: 'Innovation', color: 'text-yellow-400' },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-cyan-400/20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 rounded-full bg-purple-400/20 animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
}
