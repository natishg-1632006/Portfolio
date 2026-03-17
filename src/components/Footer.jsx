import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, href: 'https://github.com/natishg-1632006', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/natishg2006/', label: 'LinkedIn' },
  { icon: <FaEnvelope />, href: 'mailto:natishg8@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="bg-[#f3e8db] border-t border-[#dfcfbd] py-10">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-5">
        <span className="text-xl font-bold text-[#c96f3a]" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Natish
        </span>

        <div className="flex gap-5">
          {socials.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 bg-[#fffaf2] border border-[#dfcfbd] rounded-lg flex items-center justify-center text-[#6d5a4c] hover:text-[#c96f3a] hover:border-[#c96f3a] transition-all duration-200 text-base shadow-sm"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-[#8c7665] text-sm">&#169; 2024 Natish. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
