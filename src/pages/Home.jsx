// src/pages/Home.jsx
function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-pink-900 text-white font-sans">
      <div className="container mx-auto px-6 py-24 text-center">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-pink-400 to-pink-500 drop-shadow-lg">
          Welcome to My Portfolio
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-pink-200 mb-10 max-w-2xl mx-auto leading-relaxed">
          Crafting digital experiences with <span className="text-pink-400 font-semibold">passion</span> and <span className="text-pink-400 font-semibold">precision</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition-all duration-300 shadow hover:shadow-pink-500/40"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-pink-400 text-pink-200 hover:bg-pink-800/30 rounded-lg font-medium transition-all duration-300 hover:shadow hover:shadow-pink-500/10"
          >
            Contact Me
          </a>
        </div>

        {/* Animated Element */}
        <div className="flex justify-center">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-500 to-pink-800 shadow-xl shadow-pink-500/20 animate-float flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-pink-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
        </div>

        {/* Footer Quote */}
        <p className="mt-20 text-pink-300/80 max-w-2xl mx-auto text-sm sm:text-base">
          Let’s collaborate and turn your ideas into{" "}
          <span className="text-pink-400 font-medium">stunning digital realities</span>.
        </p>
      </div>
    </div>
  );
}

export default Home;
