import { motion } from 'framer-motion';
import { FaArrowRight, FaAward } from 'react-icons/fa';

const achievementCards = [
  {
    icon: FaAward,
    statLabel: 'Package',
    statValue: '6 LPA',
    tag: 'IDP Education',
    title: 'Received an Offer from IDP Education',
    description:
      'I was offered an opportunity at IDP Education with a 6 LPA package. This achievement reflects my technical foundation, project experience, and continuous learning journey in software development.',
    footer: 'A proud step forward in my professional journey',
  }
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#fcf5ec_0%,#f6ebdf_56%,#efe1d2_100%)] py-20"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-[6%] h-52 w-52 rounded-full bg-[#eab48d]/30 blur-3xl" />
        <div className="absolute right-[8%] top-[30%] h-32 w-32 rounded-full bg-[#c96f3a]/15 blur-3xl" />
        <div className="absolute -bottom-14 right-[14%] h-56 w-56 rounded-full bg-[#e7c9ad]/45 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#c96f3a]">
            Achievement
          </p>
          <h2
            className="mb-4 text-3xl font-bold text-[#2c2118] md:text-5xl"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Career Milestone
          </h2>
          <p className="text-base leading-relaxed text-[#6d5a4c] md:text-lg">
            A key professional highlight that reflects my growth, consistency, and readiness
            for real-world software development.
          </p>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {achievementCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                className="relative overflow-hidden rounded-[34px] border border-[#e4d2bf] bg-[linear-gradient(120deg,#fffaf2_0%,#faefe2_60%,#f4e3d2_100%)] p-6 shadow-[0_24px_54px_rgba(117,77,53,0.12)] md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#efbe9f]/35 blur-3xl" />
                <div className="relative grid gap-6 md:grid-cols-[240px_minmax(0,1fr)] md:items-stretch">
                  <div className="flex h-full flex-col justify-between rounded-[26px] border border-[#e6d4c3] bg-white/70 p-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#fffaf2] text-[#c96f3a] shadow-[0_12px_24px_rgba(201,111,58,0.15)]">
                      <Icon size={24} />
                    </div>
                    <div className="mt-12 border-t border-[#eadaca] pt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#9b6c50]">
                        {card.statLabel}
                      </p>
                      <h3
                        className="mt-2 text-4xl font-bold text-[#2c2118]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {card.statValue}
                      </h3>
                    </div>
                  </div>

                  <div className="flex h-full flex-col justify-center rounded-[26px] border border-[#e7d8c8] bg-white/45 p-6 md:p-7">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#c96f3a]">
                      {card.tag}
                    </p>
                    <h3
                      className="mb-4 text-2xl font-bold leading-tight text-[#2c2118] md:text-[2rem]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-base leading-8 text-[#6d5a4c]">{card.description}</p>
                    <div className="mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[#f8e7d9] px-4 py-2 text-sm font-semibold text-[#925f42]">
                      <FaArrowRight className="text-[#c96f3a]" />
                      {card.footer}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
