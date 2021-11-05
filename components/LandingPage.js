import React from "react";
import Header from "./General/Header";
import { Connect } from "./General/SvgIllustrations";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section>
          <div className="custom-container grid gap-5 lg:grid-cols-2">
            <div className="my-auto lg:w-4/5">
              <h1 className="font-bold text-3xl mb-5 text-center lg:text-5xl lg:text-left">
                Easily <span className="text-indigo-500">connect</span> with
                your customers
                <span className="text-indigo-500 animate-pulse">.</span>
              </h1>
              <p className="text-xl leading-relaxed">
                Our app is designed to be as simple as possible. Enabling you to
                reach out to your customers with no hassle.
              </p>
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
