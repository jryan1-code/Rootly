export default function DevelopmentalMilestones() {
  const areas = [
    {
      title: "Communication Development",
      text: "The growth of speech, language, listening, and communication skills across childhood.",
    },
    {
      title: "Social Development",
      text: "The development of relationships, cooperation, social understanding, and interaction skills.",
    },
    {
      title: "Play Skills",
      text: "The progression from simple exploration to imaginative, cooperative, and rule-based play.",
    },
    {
      title: "Cognitive Development",
      text: "The development of thinking, learning, memory, reasoning, and problem-solving abilities.",
    },
    {
      title: "Independence & Daily Living Skills",
      text: "The development of self-care, responsibility, routines, and age-appropriate independence.",
    },
  ];

  const questions = [
    "What are developmental milestones?",
    "Do children develop at the same rate?",
    "When should I be concerned about delays?",
    "How much variation in development is typical?",
  ];

  return (
    <main className="min-h-screen bg-white text-black font-serif">
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-[#4B9CD3]/30">
        <a href="/" className="text-3xl font-bold text-[#5b3e31]">
          Irida 
        </a>

        <div className="flex gap-12 text-lg text-[#1E3A5F] font-bold">
          <a href="/" className="hover:text-[#4B9CD3]">Home</a>
          <a href="/resources" className="text-[#4B9CD3] border-b-2 border-[#4B9CD3] pb-2">
            Resources
          </a>
          <a href="/about" className="hover:text-[#4B9CD3]">About</a>
          <a href="/support" className="hover:text-[#4B9CD3]">Support</a>
        </div>
      </nav>

      <section className="px-14 py-16">
        <div className="max-w-6xl mx-auto">
          <a href="/resources" className="text-[#4B9CD3] font-bold text-lg">
            ← Back to Resources
          </a>

          <h1 className="text-6xl md:text-7xl font-bold text-[#5b3e31] mt-8 mb-6">
            Developmental Milestones
          </h1>

          <p className="text-2xl leading-10 text-[#1E3A5F]/85 max-w-4xl mb-12">
            Developmental milestones are skills and abilities that many children
            acquire as they grow. This page explains broad developmental concepts
            that Iris may mention during a conversation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-[2rem] bg-[#4B9CD3]/10 border border-[#4B9CD3]/25 p-8">
              <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">
                What are developmental milestones?
              </h2>
              <p className="text-xl leading-9 text-black/75">
                Milestones are observable skills and behaviors that often emerge
                during predictable stages of development, although every child
                develops at their own pace.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f8f6f4] border border-[#5b3e31]/15 p-8">
              <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">
                Why milestones matter
              </h2>
              <p className="text-xl leading-9 text-black/75">
                Milestones help families understand patterns of growth while
                recognizing that development can vary considerably among children.
              </p>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-6">
              Areas of Development
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {areas.map((area) => (
                <div
                  key={area.title}
                  className="rounded-[2rem] bg-white border border-[#4B9CD3]/25 p-7 shadow-sm"
                >
                  <h3 className="text-3xl font-bold text-[#1E3A5F] mb-3">
                    {area.title}
                  </h3>
                  <p className="text-lg leading-8 text-black/70">
                    {area.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#1E3A5F] text-white p-9 mb-12">
            <h2 className="text-4xl font-bold mb-5">
              Why this matters
            </h2>

            <p className="text-xl leading-9 text-white/90">
              Understanding developmental milestones can help families recognize
              strengths, monitor growth, and better understand the many ways
              children develop over time.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-6">
              Common Questions Parents Ask
            </h2>

            <div className="space-y-4">
              {questions.map((question) => (
                <div
                  key={question}
                  className="rounded-2xl bg-[#f8f6f4] border border-[#4B9CD3]/20 p-6 text-xl text-[#1E3A5F] font-bold"
                >
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#5b3e31]/5 border border-[#5b3e31]/20 p-8 mb-12">
            <h2 className="text-4xl font-bold text-[#5b3e31] mb-4">
              A note about support
            </h2>

            <p className="text-xl leading-9 text-black/75">
              Developmental support may involve pediatricians, school teams,
              specialists, early intervention services, and community resources
              depending on a child's needs.
            </p>
          </div>

          <div className="text-center rounded-[2.5rem] border border-[#4B9CD3]/25 p-9">
            <h2 className="text-4xl font-bold text-[#5b3e31] mb-4">
              Want to talk through what you are noticing?
            </h2>

            <p className="text-xl text-[#1E3A5F]/80 mb-7">
              Iris can help you organize your concerns and think through possible next steps.
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