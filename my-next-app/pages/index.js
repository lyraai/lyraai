// pages/index.js
import Head from 'next/head';
import AnimatedBackground from '../src/app/components/background';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <Head>
        <title>Lyra - Boost your Business with Emotional AI Solution</title>
        <meta
          name="description"
          content="Lyra - Boost your Business with Emotional AI Solution"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative z-10">
        <AnimatedBackground />
        <main className="flex flex-col min-h-screen">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-teal-100 text-teal-500 rounded-full px-3 py-1 text-sm font-semibold">
                New
              </span>
              <span className="ml-2 text-teal-500 font-semibold">
                Create teams in Organisation
              </span>
            </div>

            <h1 className="text-6xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl pb-10 font-bold text-center">
              Boost your Business with Emotional AI Solution
            </h1>
            <h2 className="text-2xl sm:text-2xl md:text-xl lg:text-xl xl:text-xl pb-10 font-regular text-center">
              Lyra leverages advanced emotional AI technology to enhance various
              industries by providing innovative solutions that improve user
              engagement and satisfaction.
            </h2>

            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/products" legacyBehavior>
                <a className="px-8 py-3 border border-teal-500 text-teal-500 rounded-full">
                  Learn more
                </a>
              </Link>
              <Link href="/youtubesummary" legacyBehavior>
                <a className="px-8 py-3 bg-teal-500 text-white rounded-full">
                  Try Demo
                </a>
              </Link>
            </div>
          </div>

          <section id="how-it-works" className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-teal-500 text-sm font-semibold rounded-full">
                  HOW IT WORKS
                </p>
                <h2 className="text-4xl font-bold mb-4">
                  Easy implementation in three easy steps
                </h2>
                <p className="text-gray-600">
                  Cutting-edge, user-friendly AI tool and growth analytics
                  designed to boost user conversion, engagement, and retention.
                </p>
              </div>

              <div className="space-y-16">
                <div className="flex flex-col lg:flex-row items-center lg:space-x-8 rounded-full">
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">
                      Automated Candidate Ranking
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Let AI analyze and rank applicants based on
                      qualifications, experience, and skills, ensuring you focus
                      on the most promising candidates first.
                    </p>
                    <a
                      href="https://andrea-montini.lemonsqueezy.com/checkout/buy/f4da987f-2be5-4c3c-b2b2-9a5df3121631?discount=0"
                      target="_blank"
                      rel="noopener"
                      className="inline-block px-6 py-2 border border-teal-500 text-teal-500 rounded-full"
                    >
                      Request demo
                    </a>
                  </div>
                  <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-8">
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">
                      Real-Time Applicant Analytics
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Let AI analyze and rank applicants based on
                      qualifications, experience, and skills, ensuring you focus
                      on the most promising candidates first.
                    </p>
                    <a
                      href="https://andrea-montini.lemonsqueezy.com/checkout/buy/f4da987f-2be5-4c3c-b2b2-9a5df3121631?discount=0"
                      target="_blank"
                      rel="noopener"
                      className="inline-block px-6 py-2 border border-teal-500 text-teal-500 rounded-full"
                    >
                      Request demo
                    </a>
                  </div>
                  <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
                  <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">
                      Seamless Multilingual Support
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Let AI analyze and rank applicants based on
                      qualifications, experience, and skills, ensuring you focus
                      on the most promising candidates first.
                    </p>
                    <a
                      href="https://andrea-montini.lemonsqueezy.com/checkout/buy/f4da987f-2be5-4c3c-b2b2-9a5df3121631?discount=0"
                      target="_blank"
                      rel="noopener"
                      className="inline-block px-6 py-2 border border-teal-500 text-teal-500 rounded-full hover:bg-teal-100"
                    >
                      Request demo
                    </a>
                  </div>
                  <div className="lg:w-1/2 mt-8 lg:mt-0">
                    <div className="w-full h-64 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-teal-500 text-sm font-semibold">INCLUDED</p>
                <h2 className="text-4xl font-bold mb-4">
                  Powerful features tailored to your needs
                </h2>
                <p className="text-gray-600">
                  Gain valuable data-driven insights into talent markets
                  worldwide.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">
                    Find Your Perfect Fit
                  </h3>
                  <p className="text-gray-600">
                    Empowering you to make informed hiring decisions and stay
                    ahead of the competition.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">
                    Hire Globally with Ease
                  </h3>
                  <p className="text-gray-600">
                    Empowering you to make informed hiring decisions and stay
                    ahead of the competition.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">
                    Make Data-Driven Decisions
                  </h3>
                  <p className="text-gray-600">
                    Empowering you to make informed hiring decisions and stay
                    ahead of the competition.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">
                    Simplify Your Hiring Process
                  </h3>
                  <p className="text-gray-600">
                    Empowering you to make informed hiring decisions and stay
                    ahead of the competition.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">
                    Tailored to Your Needs
                  </h3>
                  <p className="text-gray-600">
                    Empowering you to make informed hiring decisions and stay
                    ahead of the competition.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">
                    Focus on the Best Fits
                  </h3>
                  <p className="text-gray-600">
                    Empowering you to make informed hiring decisions and stay
                    ahead of the competition.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="metrics" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-teal-500 text-sm font-semibold">METRICS</p>
                <h2 className="text-4xl font-bold mb-4">
                  Numbers speaking for themselves
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-6xl font-bold text-teal-500 mb-2">75%</h3>
                  <p className="text-gray-600">Candidate match rate</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-6xl font-bold text-teal-500 mb-2">
                    4,000+
                  </h3>
                  <p className="text-gray-600">Successful placements</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-6xl font-bold text-teal-500 mb-2">50+</h3>
                  <p className="text-gray-600">Operating countries</p>
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-20">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-teal-500 text-sm font-semibold">
                  TESTIMONIALS
                </p>
                <h2 className="text-4xl font-bold mb-4">
                  Don’t take our word for it
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-600 mb-4">
                    We struggled to find the right talent globally, but with
                    their automated candidate ranking, we quickly identified
                    top-notch candidates who perfectly fit our requirements.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src="/images/testimonial1.jpg"
                        alt=""
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-800 font-semibold">John Smith</p>
                      <p className="text-gray-600">
                        HR Manager at ABC Tech Solutions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-600 mb-4">
                    As a fast-growing startup, we needed an efficient way to
                    find skilled professionals from various regions. This AI
                    tool exceeded our expectations.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src="/images/testimonial2.jpg"
                        alt=""
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-800 font-semibold">
                        Sarah Johnson
                      </p>
                      <p className="text-gray-600">CEO of XYZ Innovations</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <p className="text-gray-600 mb-4">
                    The platform s emphasis on diversity and inclusion impressed
                    me, helping us create a more inclusive workforce.
                  </p>
                  <div className="flex items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white">
                      <Image
                        src="/images/testimonial3.jpg"
                        alt=""
                        width={64}
                        height={64}
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-800 font-semibold">
                        Michael Chen
                      </p>
                      <p className="text-gray-600">
                        HR Director at Acme Enterprises
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <a
                  href="https://www.framer.com/learn/what-is-framer/"
                  target="_blank"
                  rel="noopener"
                  className="px-8 py-3 border border-teal-500 text-teal-500 rounded-full"
                >
                  More stories
                </a>
              </div>
            </div>
          </section>

          <section id="faq" className="py-20 bg-gray-100">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-teal-500 text-sm font-semibold">FAQ</p>
                <h2 className="text-4xl font-bold mb-4">
                  We’ve got you covered
                </h2>
              </div>
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">
                      Does this app offer a free trial period?
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-6 h-6 text-gray-600"
                    >
                      <polyline
                        points="208 96 128 176 48 96"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      ></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-600 mt-4">
                    All individual Framer subscriptions have been grandfathered
                    into a Pro plan at your existing rate. If you were on a
                    Small Team plan, then all 5 seats have been converted over
                    to Pro seats at your existing rate. Regardless of your
                    subscription plan, all new paid editors that you add to your
                    subscription will be billed at the new plan rates.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">
                      What payment methods do you offer?
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-6 h-6 text-gray-600"
                    >
                      <polyline
                        points="208 96 128 176 48 96"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      ></polyline>
                    </svg>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">
                      How much does a subscription cost?
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-6 h-6 text-gray-600"
                    >
                      <polyline
                        points="208 96 128 176 48 96"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      ></polyline>
                    </svg>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">
                      What is your refund policy?
                    </h3>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-6 h-6 text-gray-600"
                    >
                      <polyline
                        points="208 96 128 176 48 96"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="24"
                      ></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
