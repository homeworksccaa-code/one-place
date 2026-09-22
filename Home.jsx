import React from "react";
import Header from "@/components/oneplace/Header";
import Hero from "@/components/oneplace/Hero";
import LearnEnglish from "@/components/oneplace/LearnEnglish";
import TestSection from "@/components/oneplace/TestSection";
import Dictionary from "@/components/oneplace/Dictionary";
import Toolbox from "@/components/oneplace/Toolbox";
import Videos from "@/components/oneplace/Videos";
import InstagramSection from "@/components/oneplace/Instagram";
import Classes from "@/components/oneplace/Classes";
import About from "@/components/oneplace/About";
import Footer from "@/components/oneplace/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
      <style>{`
        :root {
          --ease: cubic-bezier(0.16, 1, 0.3, 1);
        }

        html {
          scroll-behavior: smooth;
          background: #000;
        }

        body {
          background: #000;
          margin: 0;
        }

        .op-fade {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <Header />

      <main>
        <Hero />
        <LearnEnglish />
        <TestSection />
        <Dictionary />
        <Toolbox />
        <Videos />
        <InstagramSection />
        <Classes />
        <About />
      </main>

      <Footer />
    </div>
  );
}
