import Head from 'next/head';
import FeaturesCard from '../src/app/components/homepage/featuresCard';
export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Lyra - Products</title>
        <meta name="description" content="Lyra - Our Products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center pt-16 px-8 sm:px-8 md:px-8 lg:px-32 xl:px-32 gap-0">
        <div className="w-full max-w-7xl pb-48 pt-24 xl:pt-48 xl:pb-24">
          <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-8xl font-bold text-left mb-4">
            Just One Click, Leave the Rest to Lyra
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-20 pb-96">
          <FeaturesCard
            title='"10-Why" Exploration'
            description="Start a thought-provoking journey with innovative '10-Why' feature. Ask questions, uncover underlying reasons, and cultivate a deeper understanding of complex topics through iterative inquiry."
          />
          <FeaturesCard
            title="Scenario-based Simulation"
            description="Put learned knowledge to the test with realistic simulations and scenarios tailored to your learning goals. Experience hands-on application of concepts, analyze outcomes, and develop problem-solving skills."
          />
          <FeaturesCard
            title="Personalized Learning Experience"
            description="Leverage advanced algorithms that adapt to your unique learning style, interests, and progress. Receive personalized recommendations for content, exercises, and activities to optimize your learning journey."
          />
        </div>
        <div className="w-full max-w-7xl pb-48 pt-24 xl:pt-48 xl:pb-24">
          <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-8xl font-bold text-left mb-4">
            Elevate Your Learning Experience
          </h1>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 xl:gap-20 pb-96">
          <FeaturesCard
            title="Deeper Undestanding"
            description="Move beyond surface-level understanding and dive into the complexity of concepts through interactive exploration."
          />
          <FeaturesCard
            title="Enhanced Knowledge Retention"
            description="Active engagement and personalized learning paths benefit better memory and long-term mastery of knowledge."
          />
          <FeaturesCard
            title="Critical Thinking Development"
            description="Simulations, discussions, and iterative thinking skills, enabling organizing, analyzing, and evaluating information effectively."
          />
        </div>
      </main>
    </div>
  );
}
