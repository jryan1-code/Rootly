export default function Resources() {
  const resources = [
    {
      title: "Speech & Language",
      description:
        "Learn about speech sounds, fluency, understanding language, using language, and social communication.",
      href: "/resources/speech-language",
    },
    {
      title: "Literacy & Reading",
      description:
        "Learn about reading development, dyslexia-related concerns, spelling, writing, and comprehension.",
      href: "/resources/literacy-reading",
    },
    {
      title: "Social Communication",
      description:
        "Learn about conversation skills, social cues, friendships, play, and using language with others.",
      href: "/resources/social-communication",
    },
    {
      title: "Sensory Needs",
      description:
        "Learn about sensory sensitivities, sensory seeking, overwhelm, transitions, and daily routines.",
      href: "/resources/sensory-needs",
    },
    {
      title: "Emotional Regulation",
      description:
        "Learn about big emotions, coping skills, frustration, anxiety, and self-regulation.",
      href: "/resources/emotional-regulation",
    },
    {
      title: "Attention & Executive Functioning",
      description:
        "Learn about focus, organization, planning, task completion, working memory, and routines.",
      href: "/resources/attention-executive-functioning",
    },
    {
      title: "Behavior",
      description:
        "Learn about behavior patterns, triggers, communication through behavior, and support strategies.",
      href: "/resources/behavior",
    },
    {
      title: "Developmental Milestones",
      description:
        "Learn about communication, play, social, learning, and independence milestones.",
      href: "/resources/developmental-milestones",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-serif">
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-[#4B9CD3]/30">
        <a href="/" className="text-3xl font-bold text-[#5b3e31]">
          Irida
        </a>

        <div className="flex gap-12 text-lg text-[#1E3A5F] font-bold">
          <a href="/" className="hover:text-[#4B9CD3]">
            Home
          </a>

          <a
            href="/resources"
            className="text-[#4B9CD3] border-b-2 border-[#4B9CD3] pb-2"
          >
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

      <section className="px-14 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-[#1E3A5F] text-lg font-bold mb-4">
            Learning Center
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-[#5b3e31] leading-tight mb-6">
            Resources
          </h1>

          <p className="text-2xl leading-10 text-[#1E3A5F]/85 max-w-4xl mb-10">
            Explore educational pages connected to the areas Iris may mention
            during a conversation. These pages are meant to help you understand
            key topics, not diagnose your child.
          </p>

          <div className="rounded-[2rem] bg-[#4B9CD3]/10 border border-[#4B9CD3]/25 p-8 mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3">
              How to use this section
            </h2>

            <p className="text-xl leading-9 text-[#1E3A5F]/85">
              After talking with Iris, you can come here to learn more about a
              specific area, such as speech and language, reading, sensory needs,
              or emotional regulation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                className="block rounded-[2rem] border border-[#4B9CD3]/20 bg-[#f8f6f4] p-8 shadow-sm hover:shadow-lg hover:border-[#4B9CD3]/50 transition"
              >
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                  {resource.title}
                </h2>

                <p className="text-lg leading-8 text-black/70 mb-6">
                  {resource.description}
                </p>

                <p className="text-[#4B9CD3] font-bold text-lg">
                  Explore this area →
                </p>
              </a>
            ))}
          </div>

          <div className="mt-14 rounded-[2.5rem] border border-[#4B9CD3]/25 p-9 text-center">
            <h2 className="text-4xl font-bold text-[#5b3e31] mb-4">
              Not sure which resource fits?
            </h2>

            <p className="text-xl text-[#1E3A5F]/80 mb-7">
              Talk with Iris first, then return here to learn more about the
              areas that come up in your conversation.
            </p>

            <a
              href="/chat"
              className="inline-block bg-[#4B9CD3] text-white px-9 py-5 rounded-lg text-xl font-bold shadow-lg hover:opacity-90"
            >
              Talk with Iris
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}