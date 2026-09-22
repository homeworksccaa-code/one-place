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
        :root { --ease: cubic-bezier(0.16, 1, 0.3, 1); }
        html { scroll-behavior: smooth; }
        body { background: #000; }
        .op-fade { opacity: 0; transform: translateY(24px); transition: opacity 1.1s var(--ease), transform 1.1s var(--ease); }
        .op-fade.is-in { opacity: 1; transform: translateY(0); }
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
  );
}
