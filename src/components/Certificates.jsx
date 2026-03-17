import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaAward, FaTimes } from 'react-icons/fa';

import ibmCert from '../assets/images/IBM-cert.png';
import microsoft1Cert from '../assets/images/Microsoft1-cert.png';
import microsoft2Cert from '../assets/images/Microsoft2-cert.png';
import microsoft3Cert from '../assets/images/Microsoft3-cert.png';
import microsoft4Cert from '../assets/images/Microsoft4-cert.png';
import uiuxCert from '../assets/images/UIUX-cert.png';

function toPoints(text) {
  return text
    .split('. ')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((item) => (item.endsWith('.') ? item : `${item}.`));
}

const certificates = [
  {
    title: 'Introduction to Software Engineering',
    issuer: 'IBM',
    image: ibmCert,
    summary:
      'Completed a course covering the fundamentals of software engineering, including the software development lifecycle, Agile methodologies, system design, testing, and collaborative development practices.',
    details:
      'I successfully completed the Introduction to Software Engineering course authorized by IBM and delivered through Coursera. This course provided a comprehensive overview of the software development lifecycle and modern software engineering practices used in building scalable and reliable applications. During the program, I learned key concepts such as software development methodologies, requirement analysis, system design, testing strategies, and software maintenance. The course also introduced industry practices like Agile development, version control, and collaborative software development workflows. Additionally, the certification helped me understand the roles and responsibilities within software engineering teams, the importance of writing maintainable code, and how software projects are planned, developed, and deployed in real-world environments. This certification strengthened my foundation in software engineering principles and development best practices, supporting my journey toward building efficient and scalable software systems.',
    platform: 'IBM, offered through Coursera',
  },
  {
    title: 'Explore Endpoint Management',
    issuer: 'Microsoft',
    image: microsoft1Cert,
    summary:
      'Completed a Microsoft certification covering modern endpoint management concepts, including device configuration, application deployment, security policies, and cloud-based device management using Microsoft tools.',
    details:
      'I successfully completed the MD-102: Explore Endpoint Management certification from Microsoft, which focuses on managing and securing devices within modern enterprise environments. Through this certification, I gained knowledge about endpoint management concepts, including how organizations manage desktops, laptops, and mobile devices using cloud-based management tools. The course introduced key topics such as device configuration, application deployment, device compliance policies, and security management. I also learned how administrators use Microsoft Intune and other Microsoft endpoint management solutions to monitor devices, enforce security policies, and maintain system updates across organizational networks. This certification strengthened my understanding of modern device management, enterprise security practices, and cloud-based IT administration, which are essential for managing scalable and secure IT environments.',
    platform: 'Microsoft Intune and Microsoft Azure',
  },
  {
    title: 'Describe Azure Management and Governance',
    issuer: 'Microsoft',
    image: microsoft2Cert,
    summary:
      'Completed a Microsoft certification covering Azure resource management, governance strategies, role-based access control, cost management, and cloud monitoring.',
    details:
      'I successfully completed the Microsoft Azure Fundamentals: Describe Azure Management and Governance certification, which focuses on managing cloud resources and implementing governance strategies within the Microsoft Azure environment. Through this certification, I learned about Azure resource management tools, governance strategies, and monitoring services that help organizations manage cloud infrastructure efficiently. The course covered important services such as Azure Resource Manager, cost management, role-based access control (RBAC), and resource tagging. I also gained an understanding of cloud governance principles, including how organizations enforce policies, control access, monitor usage, and ensure compliance within cloud environments. These concepts are essential for maintaining secure, organized, and cost-effective cloud operations. This certification strengthened my knowledge of Azure cloud management, governance frameworks, and cloud resource optimization, helping me understand how enterprises manage and control large-scale cloud infrastructures.',
    platform: 'Microsoft Azure',
  },
  {
    title: 'Describe Azure Architecture and Services',
    issuer: 'Microsoft',
    image: microsoft3Cert,
    summary:
      'Completed a Microsoft certification focused on Azure cloud architecture, including regions, availability zones, virtual machines, storage services, networking, and resource management.',
    details:
      'I successfully completed the Microsoft Azure Fundamentals: Describe Azure Architecture and Services certification, which focuses on understanding the core architecture and major services offered by Microsoft Azure. Through this certification, I gained knowledge about Azure global infrastructure, including regions, availability zones, and resource groups. I also explored essential Azure services such as virtual machines, storage solutions, networking services, and database offerings that help organizations build scalable and reliable cloud applications. The program introduced key concepts related to cloud architecture design, resource management, and service deployment in Azure environments. It also helped me understand how different Azure services integrate to support modern application development and enterprise cloud solutions. This certification strengthens my foundation in cloud infrastructure and Azure service architecture, enabling me to better understand how cloud platforms support scalable software systems.',
    platform: 'Microsoft Azure',
  },
  {
    title: 'Describe Cloud Concepts',
    issuer: 'Microsoft',
    image: microsoft4Cert,
    summary:
      'Completed a Microsoft certification covering core cloud computing concepts, including IaaS, PaaS, SaaS, cloud deployment models, scalability, high availability, and the fundamentals of the Azure cloud platform.',
    details:
      'I successfully completed the Microsoft Azure Fundamentals: Describe Cloud Concepts certification, which focuses on the core principles of cloud computing and the foundational services provided by Microsoft Azure. Through this certification, I gained a strong understanding of cloud computing models, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). I also learned about public, private, and hybrid cloud environments, and how organizations use cloud platforms to build scalable, reliable, and cost-efficient applications. The course also covered essential Azure concepts such as high availability, scalability, fault tolerance, and cloud security fundamentals. This knowledge helps in designing modern cloud-based systems and understanding how businesses deploy and manage applications in the cloud. This certification demonstrates my foundational knowledge of cloud technologies and Microsoft Azure services, which supports my work in modern software development and cloud-enabled application architectures.',
    platform: 'Microsoft Azure',
  },
  {
    title: 'Figma Bootcamp',
    issuer: 'LetsUpgrade',
    image: uiuxCert,
    summary:
      'Completed a hands-on UI/UX design bootcamp covering wireframing, prototyping, design systems, auto-layout, and collaborative interface design using Figma.',
    details:
      'I successfully completed the Figma Bootcamp conducted by LetsUpgrade, where I learned the fundamentals of UI/UX design and modern interface prototyping using Figma. During this bootcamp, I gained hands-on experience in designing user interfaces, wireframes, and interactive prototypes for web and mobile applications. I also learned how to create design systems, reusable components, auto-layout structures, and responsive UI designs to improve consistency and efficiency in product design. The program also focused on user-centered design principles, helping me understand how to structure interfaces that provide better usability and user experience. Through practical exercises, I explored collaborative design workflows, prototyping interactions, and design handoff for developers. This bootcamp strengthened my ability to translate product ideas into visually appealing and functional UI designs, which supports my work in building modern digital products.',
    platform:
      'LetsUpgrade, in collaboration with National Skill Development Corporation and Google Developer Groups Madurai',
  },
];

export default function Certificates() {
  const [activeCertificate, setActiveCertificate] = useState(null);
  const scrollingCertificates = [...certificates, ...certificates];

  useEffect(() => {
    if (!activeCertificate) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveCertificate(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCertificate]);

  return (
    <section id="certificates" className="py-20 bg-[#fffaf2]">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2c2118] mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Certificates
          </h2>
          <div className="w-14 h-1 bg-[#c96f3a] mx-auto rounded-full" />
          <p className="text-[#7b6757] mt-4 text-sm">
            Selected certifications and learning milestones
          </p>
        </motion.div>

        <div className="overflow-hidden py-4">
          <motion.div
            className="flex w-max gap-8"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ duration: 42, ease: 'linear', repeat: Infinity }}
          >
            {scrollingCertificates.map((certificate, index) => (
              <motion.button
                key={`${certificate.title}-${index}`}
                type="button"
                onClick={() => setActiveCertificate(certificate)}
                className="flex h-[510px] w-[290px] shrink-0 flex-col text-left bg-[#f8eee5] border border-[#dfcfbd] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(44,33,24,0.06)] hover:shadow-[0_16px_40px_rgba(117,77,53,0.14)] transition-all duration-300 sm:w-[320px]"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative h-56 shrink-0 overflow-hidden bg-[#ead9c8]">
                  <motion.div
                    className="flex h-full w-full items-start justify-center overflow-hidden"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-full w-full object-contain object-top"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </div>

                <div className="flex min-h-0 flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 rounded-full bg-[#f2dfcf] flex items-center justify-center">
                      <FaAward className="text-[#c96f3a]" />
                    </div>
                    <div>
                      <h3
                        className="text-base font-semibold text-[#2c2118]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {certificate.title}
                      </h3>
                      <p className="text-sm text-[#7b6757]">{certificate.issuer}</p>
                    </div>
                  </div>

                  <p className="line-clamp-5 min-h-[110px] text-sm text-[#6d5a4c] leading-relaxed mb-4">
                    {certificate.summary}
                  </p>
                  <span className="mt-auto inline-flex items-center text-sm font-semibold text-[#c96f3a]">
                    View details
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {activeCertificate && (
          <motion.div
            className="fixed inset-0 z-[70] bg-[#2c2118]/65 px-4 py-8 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertificate(null)}
          >
            <motion.div
              className="relative w-full max-w-4xl max-h-[88vh] bg-[#fffaf2] rounded-[32px] overflow-hidden shadow-[0_24px_80px_rgba(44,33,24,0.28)]"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCertificate(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-[#2c2118] hover:bg-[#f5e8da] transition-colors flex items-center justify-center"
                aria-label="Close certificate details"
              >
                <FaTimes />
              </button>

              <div className="grid h-[82vh] md:grid-cols-[1.05fr_0.95fr]">
                <div className="bg-[linear-gradient(180deg,#f8eee5_0%,#f2dfcf_100%)] p-4 md:p-6 h-full">
                  <div className="flex h-full w-full items-center justify-center rounded-[24px] bg-[#fffaf2] border border-[#ead9c8] p-3 md:p-4 overflow-hidden">
                    <img
                      src={activeCertificate.image}
                      alt={activeCertificate.title}
                      className="max-h-full max-w-full object-contain object-center"
                    />
                  </div>
                </div>

                <div className="h-full overflow-y-auto p-6 md:p-8">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#c96f3a] bg-[#f2dfcf] rounded-full px-4 py-2 w-fit mb-4">
                    <FaAward />
                    Certified Achievement
                  </div>

                  <h3
                    className="text-2xl md:text-[1.8rem] font-bold text-[#2c2118] mb-3"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {activeCertificate.title}
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    <div className="rounded-2xl border border-[#e4d3c1] bg-[#fff8f1] px-4 py-3">
                      <p className="text-[11px] uppercase tracking-[0.18em] text-[#9a8575] mb-1">Issued By</p>
                      <p className="text-sm font-semibold text-[#2c2118]">{activeCertificate.issuer}</p>
                    </div>
                    {activeCertificate.platform && (
                      <div className="rounded-2xl border border-[#e4d3c1] bg-[#fff8f1] px-4 py-3">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-[#9a8575] mb-1">Platform</p>
                        <p className="text-sm font-semibold text-[#2c2118]">{activeCertificate.platform}</p>
                      </div>
                    )}
                  </div>

                  <div className="rounded-[24px] border border-[#e4d3c1] bg-[#fffdf8] p-5 md:p-6">
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[#c96f3a] mb-3">
                      Portfolio Description
                    </p>
                    <ul className="space-y-3 text-[#6d5a4c] leading-relaxed">
                      {toPoints(
                        activeCertificate.details ||
                          `${activeCertificate.summary} This certificate adds to a portfolio focused on continuous learning, practical execution, and steady growth across design and development skills.`
                      ).map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c96f3a]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
