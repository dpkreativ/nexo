import Link from "next/link";
import Button from "./General/Button";
import Header from "./General/Header";
import { PlayIcon } from "./General/Icons";
import { Connect } from "./General/SvgIllustrations";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-5">
          <div className="custom-container grid gap-10 lg:grid-cols-2">
            <div className="my-auto">
              <h1 className="font-bold text-3xl mb-5 text-center lg:text-5xl lg:text-left">
                <span className="text-indigo-500">Build</span> stronger
                connections with your friends and customers
                <span className="text-indigo-500">.</span>
              </h1>
              <p className="text-center lg:text-left lg:text-xl leading-relaxed mb-5">
                Nexo helps you build your personal and professional network
              </p>
              <div className="flex justify-center lg:justify-start space-x-5">
                <Link href="/dashboard" passHref>
                  <a>
                    <Button className="bg-indigo-500 hover:bg-indigo-600 hover:shadow-md text-white">
                      Try it out
                    </Button>
                  </a>
                </Link>
                <Button className="text-indigo-500 bg-white hover:shadow-md flex items-center space-x-2">
                  <span>Watch Demo</span>
                  <span className="w-5 h-5 animate-pulse">
                    <PlayIcon />
                  </span>
                </Button>
              </div>
            </div>
            <div>
              <Connect />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
