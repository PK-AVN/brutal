"use client";
import { useRouter } from "next/navigation";
import { GetStartedButton } from "./header/GetStarted";

const Hero = () => {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push("/dashboard");
  };
  return (
    <section className="bg-gradient-to-b from-teal-600 to-teal-400 text-white h-screen flex flex-col justify-center">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Track Your Mood, Every Day
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Use smileys to reflect your feelings daily and see how your mood
          changes over time.
        </p>
        <div className="flex space-x-4">
          <GetStartedButton onClick={handleGetStarted} />
          <button className="border border-white text-white font-semibold py-3 px-6 rounded hover:bg-white hover:text-teal-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
