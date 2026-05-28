import {
  MessageCircle,
  BookOpen,
  Heart,
  Sprout,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const supportAreas = [
    {
      title: "Communication",
      icon: MessageCircle,
      items: ["Speech & Language", "Social Communication"],
    },
    {
      title: "Learning",
      icon: BookOpen,
      items: ["Literacy & Reading", "Attention & Executive Functioning"],
    },
    {
      title: "Emotional & Behavioral Development",
      icon: Heart,
      items: ["Emotional Regulation", "Behavior"],
    },
    {
      title: "Development & Sensory Processing",
      icon: Sprout,
      items: ["Developmental Milestones", "Sensory Needs"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-serif">
      <nav className="flex items-center justify-between px-4 md:px-12 py-4 md:py-6 bg-white border-b border-[#4B9CD3]/25 shadow-sm">
        <div className="flex items-center gap-1">
          <img
            src="/iris.png"
            alt="Rootly"
            className="h-10 w-10 md:h-14 md:w-14 object-contain"
          />

          <div>
            <div className="text-2xl md:text-4xl font-bold text-[#1E3A5F]">
              Rootly
            </div>

            <p className="text-sm text-[#1E3A5F]/75 mt-1">
              Support for parents. Clarity for next steps.
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-12 text-lg text-[#1E3A5F] font-bold">
          <a href="/" className="text-[#4B9CD3] border-b-2 border-[#4B9CD3] pb-2">
            Home
          </a>

          <a href="/resources" className="hover:text-[#4B9CD3]">
            Resources
          </a>

          <a href="/about" className="hover:text-[#4B9CD3]">
            About
          </a>

          <a href="/support" className="hover:text-[#4B9CD3]">
            Support
          </a>
        </div>
      </nav>

      <section className="px-14 py-14 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="pt-8">
            <h1 className="font-bold text-4xl md:text-7xl leading-[1.08] mb-8 text-[#5b3e31]">
              Notice. <span className="text-[#4B9CD3]">Ask.</span>
              <br />
              Understand.
              <br />
              Find the next step.
            </h1>

            <div className="w-44 h-2 bg-[#4B9CD3] rounded-full mb-8" />

            <p className="text-lg md:text-2xl leading-8 md:leading-10 text-[#1E3A5F]/90 max-w-xl mb-9">
              Support for parents and caregivers. Describe your concerns for your child,
              and Iris will help you organize what you’re noticing, ask thoughtful
              questions, and guide you toward support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 max-w-xl">
              <a
                href="/chat"
                className="flex items-center justify-center gap-3 bg-[#4B9CD3] text-white px-6 py-4 rounded-lg text-lg md:text-xl font-bold shadow-lg hover:opacity-90"
              >
                <MessageCircle size={24} />
                Talk with Iris
              </a>

              <a
                href="/about"
                className="flex items-center justify-center border-2 border-[#5b3e31] text-[#5b3e31] px-6 py-4 rounded-lg text-lg md:text-xl font-bold hover:bg-[#5b3e31]/10"
              >
                Learn More →
              </a>
            </div>

            <div className="flex gap-4 items-start text-[#1E3A5F] max-w-xl">
              <ShieldCheck className="text-[#4B9CD3] mt-1" size={28} />
              <p className="text-base leading-7">
                This is an educational and informational resource for support.
                Iris does not diagnose or replace medical/professional care.
              </p>
            </div>

            <div className="mt-10 max-w-xl">
              <Image
                src="/family-photo.jpg"
                alt="Parent supporting child"
                width={1200}
                height={800}
                className="w-full rounded-[2rem] shadow-xl"
              />

              <p className="text-center italic text-[#1E3A5F] text-xl mt-5">
                Support begins with understanding.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#4B9CD3]/25 bg-[#4B9CD3]/10 shadow-xl p-9">
            <p className="uppercase tracking-widest text-[#1E3A5F] text-lg font-bold mb-4">
              Meet Iris
            </p>

            <h2 className="italic text-6xl text-[#5b3e31] font-bold mb-6">
              Hey, I’m Iris!
            </h2>

            <p className="text-xl leading-9 text-[#1E3A5F]/90 mb-8">
              I’m here to help you make sense of what you’re noticing,
              ask helpful questions, and think through possible supports and next steps.
            </p>

            <div className="border-t border-[#4B9CD3]/35 pt-8">
              <h3 className="text-3xl font-bold text-[#1E3A5F] mb-6">
                Areas Iris Can Help You Explore
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {supportAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <div
                      key={area.title}
                      className="bg-white rounded-2xl border border-[#4B9CD3]/25 p-6 shadow-sm"
                    >
                      <div className="w-14 h-14 rounded-full bg-[#4B9CD3]/15 flex items-center justify-center mb-5">
                        <Icon className="text-[#1E3A5F]" size={30} />
                      </div>

                      <h4 className="text-xl font-bold uppercase text-[#1E3A5F] mb-4 leading-6">
                        {area.title}
                      </h4>

                      <ul className="space-y-2 text-[#1E3A5F]/85 list-disc pl-5">
                        {area.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-2xl bg-[#5b3e31]/5 border border-[#5b3e31]/25 p-6 flex gap-4">
                <AlertTriangle className="text-[#5b3e31] shrink-0 mt-1" size={34} />

                <div>
                  <h3 className="text-2xl font-bold text-[#5b3e31] mb-2">
                    Need urgent help?
                  </h3>

                  <p className="text-base leading-7 text-[#1E3A5F]/90">
                    If your child is in immediate danger, having a medical emergency,
                    or may hurt themselves or someone else, call 911 or emergency
                    services right away. <strong>Iris is not for emergencies.</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A5F] text-white text-center px-8 py-8">
        <p className="text-2xl">
          Iris is here to help parents feel less alone and more informed.
        </p>
      </section>
    </main>
  );
}