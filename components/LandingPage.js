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
              <p className="text-center lg:text-left lg:text-xl leading-relaxed">
                Manage your customer relationships with ease. Nexo is designed
                to be intuitive and easy to use, focusing only on the features
                you need.
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
