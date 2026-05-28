export default function SpeechLanguage() {
  const areas = [
    {
      title: "Articulation",
      text: "How a child produces speech sounds. Concerns may involve sounds being left out, substituted, or difficult to understand.",
    },
    {
      title: "Fluency",
      text: "The smoothness and flow of speech. Stuttering is one example of a fluency-related concern.",
    },
    {
      title: "Receptive Language",
      text: "How a child understands words, directions, questions, stories, and information from others.",
    },
    {
      title: "Expressive Language",
      text: "How a child uses words, sentences, gestures, and communication to share thoughts and needs.",
    },
    {
      title: "Pragmatic Language",
      text: "How a child uses communication socially, such as taking turns, staying on topic, and understanding social cues.",
    },
  ];

  const questions = [
    "What is the difference between speech and language?",
    "Is stuttering always something to worry about?",
    "Why is my child hard to understand?",
    "What does a speech-language pathologist do?",
  ];

  return (
    <main className="min-h-screen bg-white text-black font-serif">
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-[#4B9CD3]/30">
        <a href="/" className="text-3xl font-bold text-[#5b3e31]">
          Rootly
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
            Speech & Language
          </h1>

          <p className="text-2xl leading-10 text-[#1E3A5F]/85 max-w-4xl mb-12">
            Speech and language are closely connected, but they are not the same.
            This page explains the main areas of communication so parents can better
            understand the terms Iris may mention during a conversation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="rounded-[2rem] bg-[#4B9CD3]/10 border border-[#4B9CD3]/25 p-8">
              <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">
                What is speech?
              </h2>
              <p className="text-xl leading-9 text-black/75">
                Speech is how sounds are produced. It includes how clearly a child
                says sounds, how smoothly they speak, and how their voice sounds.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#f8f6f4] border border-[#5b3e31]/15 p-8">
              <h2 className="text-4xl font-bold text-[#1E3A5F] mb-4">
                What is language?
              </h2>
              <p className="text-xl leading-9 text-black/75">
                Language is how a child understands and uses words, sentences,
                gestures, and communication to share ideas, needs, and feelings.
              </p>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-6">
              Areas of Speech & Language
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
              Communication affects learning, friendships, confidence, behavior,
              and daily routines. Understanding the difference between speech,
              language, and social communication can help parents better describe
              what they are noticing.
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
              Speech and language support may happen through schools, private therapy,
              early intervention, or medical referrals. The right support depends on the
              child, the concern, and the setting.
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