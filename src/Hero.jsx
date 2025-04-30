import { useState } from "react";

const randomTexts = [
  {
    headline: "Transform your ideas into reality",
    subheadline: "Empower your creativity with Stunning’s AI tools"
  },
  {
    headline: "Design without limits",
    subheadline: "Build, create, and scale effortlessly"
  },
  {
    headline: "Innovation starts here",
    subheadline: "Unleash the power of next-gen design"
  }
];

function Hero() {
  const [content, setContent] = useState({
    ...randomTexts[0],
    image: `https://picsum.photos/600/400?random=${Date.now()}`
  });

  const regenerateContent = () => {
    const newContent = randomTexts[Math.floor(Math.random() * randomTexts.length)];
    const newImage = `https://picsum.photos/600/400?random=${Date.now()}`;
    setContent({ ...newContent, image: newImage });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-slate-100 to-indigo-50 text-gray-900">
      {/* Branding */}
      <header className="absolute top-4 left-6 text-2xl font-bold text-indigo-700 select-none tracking-wide">
        Stunning Vibes
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 py-20 max-w-7xl mx-auto">
        {/* Text Area */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
            contentEditable
            suppressContentEditableWarning={true}
          >
            {content.headline}
          </h1>
          <p
            className="text-lg sm:text-xl text-gray-700"
            contentEditable
            suppressContentEditableWarning={true}
          >
            {content.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-4 items-center sm:items-start space-y-3 sm:space-y-0 pt-4">
            {/* Get Started Button */}
            <button
              onClick={() => {
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-full transition duration-300 shadow-md"
            >
              Get Started
            </button>

            {/* Regenerate Button */}
            <button
              onClick={regenerateContent}
              className="text-indigo-600 bg-white border border-indigo-200 px-4 py-2 rounded-full shadow-sm hover:bg-indigo-50 hover:text-indigo-800 transition duration-300"
            >
              Regenerate with AI
            </button>
          </div>
        </div>

        {/* Image Area */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={content.image}
            alt="Hero"
            className="w-full max-w-lg rounded-2xl shadow-2xl transition duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 text-center bg-white px-6">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Why choose Stunning?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stunning helps creators and teams launch faster with AI-powered design tools,
          live content editing, and beautiful UI components. Everything you need to build your dream faster and smarter.
        </p>
      </section>
    </div>
  );
}

export default Hero;
