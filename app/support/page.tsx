export default function Support() {
  return (
    <main className="min-h-screen bg-white text-black font-serif">
      <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-[#4B9CD3]/30">
        <a href="/" className="text-3xl font-bold text-[#5b3e31]">
          Irida 
        </a>

        <div className="flex gap-12 text-lg text-[#1E3A5F] font-bold">
          <a href="/" className="hover:text-[#4B9CD3]">Home</a>
          <a href="/resources" className="hover:text-[#4B9CD3]">Resources</a>
          <a href="/about" className="hover:text-[#4B9CD3]">About</a>
          <a
            href="/support"
            className="text-[#4B9CD3] border-b-2 border-[#4B9CD3] pb-2"
          >
            Support
          </a>
        </div>
      </nav>

      <section className="px-14 py-16">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-widest text-[#1E3A5F] text-lg font-bold mb-4">
            Support
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-[#5b3e31] leading-tight mb-6">
            Finding the next step can feel overwhelming.
          </h1>

          <p className="text-2xl leading-10 text-[#1E3A5F]/85 max-w-4xl mb-12">
            This page explains some of the professionals, services, and support
            systems that may be helpful depending on your concerns.
          </p>

          <div className="rounded-[2.5rem] bg-[#1E3A5F] text-white p-9 mb-14">
            <h2 className="text-4xl font-bold mb-5">
              Need urgent help?
            </h2>

            <p className="text-xl leading-9 text-white/90">
              If your child is in immediate danger, having a medical emergency,
              or may hurt themselves or someone else, call 911 or contact
              emergency services immediately.
            </p>

            <p className="text-xl font-bold mt-5">
              Iris is not for emergencies.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-8">
              Who may be helpful?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-[2rem] border border-[#4B9CD3]/25 p-8">
                <h3 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                  Speech & Language
                </h3>
                <ul className="space-y-2 text-xl text-black/75">
                  <li>• Speech-Language Pathologist</li>
                  <li>• Pediatrician</li>
                  <li>• Teacher</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#4B9CD3]/25 p-8">
                <h3 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                  Reading & Learning
                </h3>
                <ul className="space-y-2 text-xl text-black/75">
                  <li>• Teacher</li>
                  <li>• Reading Specialist</li>
                  <li>• School Support Team</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#4B9CD3]/25 p-8">
                <h3 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                  Sensory Needs
                </h3>
                <ul className="space-y-2 text-xl text-black/75">
                  <li>• Occupational Therapist</li>
                  <li>• Pediatrician</li>
                  <li>• School Team</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#4B9CD3]/25 p-8">
                <h3 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                  Emotional & Behavioral
                </h3>
                <ul className="space-y-2 text-xl text-black/75">
                  <li>• Counselor</li>
                  <li>• School Psychologist</li>
                  <li>• Pediatrician</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#4B9CD3]/25 p-8 md:col-span-2">
                <h3 className="text-3xl font-bold text-[#1E3A5F] mb-4">
                  Developmental Concerns
                </h3>
                <ul className="space-y-2 text-xl text-black/75">
                  <li>• Pediatrician</li>
                  <li>• Developmental Specialist</li>
                  <li>• Early Intervention Services</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-[#4B9CD3]/10 border border-[#4B9CD3]/25 p-9 mb-14">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-6">
              Before reaching out
            </h2>

            <div className="space-y-4 text-xl text-[#1E3A5F]/90">
              <p>✓ Write down what you noticed.</p>
              <p>✓ Note when and where it happens.</p>
              <p>✓ Track how often it occurs.</p>
              <p>✓ Notice what seems to help.</p>
              <p>✓ Ask whether school or other caregivers have noticed it too.</p>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="text-5xl font-bold text-[#5b3e31] mb-8">
              School vs. Medical Support
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-[2rem] border border-[#4B9CD3]/25 p-8">
                <h3 className="text-3xl font-bold text-[#1E3A5F] mb-5">
                  School Support
                </h3>

                <ul className="space-y-3 text-xl text-black/75">
                  <li>• Learning concerns</li>
                  <li>• Communication support</li>
                  <li>• Classroom participation</li>
                  <li>• Academic challenges</li>
                  <li>• School-based services</li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-[#4B9CD3]/25 p-8">
                <h3 className="text-3xl font-bold text-[#1E3A5F] mb-5">
                  Medical & Community Support
                </h3>

                <ul className="space-y-3 text-xl text-black/75">
                  <li>• Developmental concerns</li>
                  <li>• Therapy services</li>
                  <li>• Specialist referrals</li>
                  <li>• Health-related questions</li>
                  <li>• Community resources</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center rounded-[2.5rem] bg-[#1E3A5F] text-white p-10">
            <h2 className="text-5xl font-bold mb-5">
              Still unsure where to begin?
            </h2>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Talk with Iris and describe what you are noticing. Iris can help
              organize your concerns and point you toward resources that may be
              helpful.
            </p>

            <a
              href="/chat"
              className="inline-block bg-[#4B9CD3] text-white px-9 py-5 rounded-lg text-xl font-bold shadow-lg hover:opacity-90"
            >
              Talk with Iris
            </a>

            <p className="text-sm text-white/70 max-w-2xl mx-auto mt-7 leading-6">
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