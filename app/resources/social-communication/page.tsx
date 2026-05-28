export default function SocialCommunication() {
  const areas = [
    {
      title: "Conversation Skills",
      text: "How a child starts, maintains, takes turns in, and ends conversations with others.",
    },
    {
      title: "Social Cues",
      text: "How a child notices and interprets facial expressions, tone of voice, body language, and context.",
    },
    {
      title: "Play & Interaction",
      text: "How a child engages with others through play, shared interests, cooperation, and imagination.",
    },
    {
      title: "Perspective Taking",
      text: "How a child understands that other people may have different thoughts, feelings, or points of view.",
    },
    {
      title: "Pragmatic Language",
      text: "How language is used socially, including staying on topic, adjusting communication, and understanding conversational rules.",
    },
  ];

  const questions = [
    "What is social communication?",
    "Why does my child struggle with conversations?",
    "What are pragmatic language skills?",
    "How are social communication and friendships connected?",
  ];

  return (
    <main className="min-h-screen bg-white text-black font-serif">
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-[#4B9CD3]/30">
        <a href="/" className="text-3xl font-bold text-[#5b3e31]">Site Name</a>

        <div className="flex gap-12 text-lg text-[#1E3A5F] font-bold">
          <a href="/" className="hover:text-[#4B9CD3]">Home</a>
          <a href="/resources" className="text-[#4B9CD3] border-b-2 border-[#4B9CD3] pb-2">Resources</a>
          <a href="/about" className="hover:text-[#4B9CD3]">About</a>
          <a href="/support" className="hover:text-[#4B9CD3]">Support</a>
        </div>
      </nav>

      <section className="px-14 py-16">
        <div className="max-w-6xl mx-auto">
          <a href="/resources" className="text-[#4B9CD3] font-bold text-lg">← Back to Resources</a>

          <h1 className="text-6xl md:text-7xl font-bold text-[#5b3e31] mt-8 mb-6">
            Social Communication
          </h1>

          <p className="text-2xl leading-10 text-[#1E3A5F]/85 max-w-4xl mb-12">
            Social communication is how children use language, gestures, facial expressions, and interaction skills to connect with others.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-[2rem] bg-[#4B9CD3]/10 border border-[#4B9CD3]/25 p-8">
              <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">What is social communication?</h2>
              <p className="text-xl leading-9 text-black/75">
                Social communication includes the skills used to interact with others, such as conversation, play, body language, and understanding social expectations.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f8f6f4] border border-[#5b3e31]/15 p-8">
              <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">Why it can look different</h2>
              <p className="text-xl leading-9 text-black/75">
                Children may communicate socially in different ways depending on age, personality, language development, attention, sensory needs, or comfort level.
              </p>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-6">Areas of Social Communication</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {areas.map((area) => (
                <div key={area.title} className="rounded-[2rem] bg-white border border-[#4B9CD3]/25 p-7 shadow-sm">
                  <h3 className="text-3xl font-bold text-[#1E3A5F] mb-3">{area.title}</h3>
                  <p className="text-lg leading-8 text-black/70">{area.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#1E3A5F] text-white p-9 mb-12">
            <h2 className="text-4xl font-bold mb-5">Why this matters</h2>
            <p className="text-xl leading-9 text-white/90">
              Social communication can affect friendships, classroom participation, play, problem solving, and confidence. Understanding these skills can make social concerns easier to talk about.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-6">Common Questions Parents Ask</h2>

            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question} className="rounded-2xl bg-[#f8f6f4] border border-[#4B9CD3]/20 p-6 text-xl text-[#1E3A5F] font-bold">
                  {question}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#5b3e31]/5 border border-[#5b3e31]/20 p-8 mb-12">
            <h2 className="text-4xl font-bold text-[#5b3e31] mb-4">A note about support</h2>
            <p className="text-xl leading-9 text-black/75">
              Social communication support may involve school teams, speech-language pathologists, counselors, social skills groups, or classroom supports depending on the child’s needs.
            </p>
          </div>

          <div className="text-center rounded-[2.5rem] border border-[#4B9CD3]/25 p-9">
            <h2 className="text-4xl font-bold text-[#5b3e31] mb-4">Want to talk through what you are noticing?</h2>
            <p className="text-xl text-[#1E3A5F]/80 mb-7">Iris can help you organize your concerns and think through possible next steps.</p>
            <a href="/chat" className="inline-block bg-[#4B9CD3] text-white px-9 py-5 rounded-lg text-xl font-bold shadow-lg hover:opacity-90">
              Talk with Iris
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}