export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-6 bg-white border-b border-[#4B9CD3]/30">
      <a href="/" className="flex items-center gap-3">
        <img
  src="/iris.png"
  alt="Irisly"
  className="h-16 w-16 object-contain border border-red-500"
/>

        <span className="text-3xl font-bold text-[#1E3A5F]">
          TEST TEST
        </span>
      </a>

      <div className="flex gap-12 text-lg text-[#1E3A5F] font-bold">
        <a href="/" className="hover:text-[#4B9CD3]">Home</a>
        <a href="/resources" className="hover:text-[#4B9CD3]">Resources</a>
        <a href="/about" className="hover:text-[#4B9CD3]">About</a>
        <a href="/support" className="hover:text-[#4B9CD3]">Support</a>
      </div>
    </nav>
  );
}