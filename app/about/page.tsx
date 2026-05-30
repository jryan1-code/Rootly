import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black font-serif">
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-[#4B9CD3]/30">
        <a href="/" className="text-3xl font-bold text-[#5b3e31]">
        Irida 
        
        </a>

        <div className="flex gap-12 text-lg text-[#1E3A5F] font-bold">
          <a href="/" className="hover:text-[#4B9CD3]">Home</a>
          <a href="/resources" className="hover:text-[#4B9CD3]">Resources</a>
          <a
            href="/about"
            className="text-[#4B9CD3] border-b-2 border-[#4B9CD3] pb-2"
          >
            About
          </a>
          <a href="/support" className="hover:text-[#4B9CD3]">Support</a>
        </div>
      </nav>

      <section className="px-14 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-[#1E3A5F] text-lg font-bold mb-4">
            About Iris
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-[#5b3e31] leading-tight mb-6">
            Helping families feel informed, supported, and understood.
          </h1>

          <p className="text-2xl leading-10 text-[#1E3A5F]/85 max-w-4xl mb-12">
            Iris is an educational tool designed to help parents and caregivers
            organize concerns, learn about child development, and feel more
            confident when seeking support.
          </p>

          <div className="mb-14">
            <Image
              src="/about-family.jpg"
              alt="Family reading together"
              width={1400}
              height={900}
              className="w-full max-h-[520px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div className="rounded-[2.5rem] bg-[#4B9CD3]/10 border border-[#4B9CD3]/25 p-9 mb-14">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-5">
              Why Iris exists
            </h2>

            <div className="space-y-5 text-xl leading-9 text-[#1E3A5F]/90">
              <p>
                Many families recognize that something may be different, but
                they are not always sure where to begin.
              </p>

              <p>
                Iris was created to provide a supportive starting point where
                parents can organize their observations, learn about
                developmental topics, and prepare for meaningful conversations
                with educators, healthcare providers, and specialists.
              </p>

              <p>
                Created by an aspiring speech-language pathologist, Iris was
                designed to make information more accessible and less
                overwhelming for families.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div className="rounded-[2rem] bg-[#f8f6f4] border border-[#4B9CD3]/20 p-8">
              <h2 className="text-4xl font-bold text-[#1E3A5F] mb-5">
                What Iris can do
              </h2>

              <ul className="space-y-4 text-xl leading-8 text-black/75 list-disc pl-6">
                <li>Organize concerns</li>
                <li>Explain developmental concepts</li>
                <li>Suggest areas worth exploring</li>
                <li>Connect families to educational resources</li>
                <li>Help parents feel more prepared for conversations</li>
              </ul>
            </div>

            <div className="rounded-[2rem] bg-[#f8f6f4] border border-[#5b3e31]/20 p-8">
              <h2 className="text-4xl font-bold text-[#5b3e31] mb-5">
                What Iris cannot do
              </h2>

              <ul className="space-y-4 text-xl leading-8 text-black/75 list-disc pl-6">
                <li>Diagnose a child</li>
                <li>Replace professional evaluation</li>
                <li>Provide medical treatment or therapy</li>
                <li>Handle emergencies or crisis situations</li>
                <li>Make decisions for families or professionals</li>
              </ul>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-8 text-center">
              How the site works
            </h2>

            <div className="grid md:grid-cols-4 gap-5">
              {[
                {
                  step: "1",
                  title: "Notice",
                  text: "Start with what you are seeing, hearing, or wondering about.",
                },
                {
                  step: "2",
                  title: "Talk with Iris",
                  text: "Describe your concerns and let Iris help organize the conversation.",
                },
                {
                  step: "3",
                  title: "Learn",
                  text: "Use the Resources section to better understand key developmental topics.",
                },
                {
                  step: "4",
                  title: "Find Support",
                  text: "Use the Support page to learn who may be helpful to contact.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="rounded-[2rem] border border-[#4B9CD3]/25 bg-white p-6 shadow-sm text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#4B9CD3] text-white text-2xl font-bold">
                    {item.step}
                  </div>

                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-lg leading-7 text-black/70">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#1E3A5F] text-white p-10 text-center mb-12">
            <h2 className="text-5xl font-bold mb-5">
              Our Mission
            </h2>

            <p className="text-2xl italic mb-6">
              Support begins with understanding.
            </p>

            <p className="text-xl leading-9 text-white/90 max-w-4xl mx-auto">
              Our mission is to help families feel informed, supported, and
              empowered as they navigate questions about communication, learning,
              behavior, and child development.
            </p>
          </div>

          <div className="text-center rounded-[2.5rem] border border-[#4B9CD3]/25 p-9">
            <h2 className="text-4xl font-bold text-[#5b3e31] mb-4">
              Ready to get started?
            </h2>

            <p className="text-xl text-[#1E3A5F]/80 mb-7">
              Talk with Iris and describe what you are noticing.
            </p>

            <a
              href="/chat"
              className="inline-block bg-[#4B9CD3] text-white px-9 py-5 rounded-lg text-xl font-bold shadow-lg hover:opacity-90"
            >
              Talk with Iris
            </a>

            <p className="text-sm text-black/55 max-w-2xl mx-auto mt-7 leading-6">
              This website is educational in nature and does not replace
              professional evaluation, diagnosis, medical advice, therapy, or
              emergency care.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}