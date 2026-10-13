import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  const { isDark } = useTheme();

  const faqs = [
    {
      q: 'What if I have zero technical background?',
      a: 'That is our specialty. We act as your fractional CTO and engineering team. We explain all architectural decisions in clear business terms, handle all infrastructure and DevOps, and provide recorded video walkthroughs so you always know what is being built and why.'
    },
    {
      q: 'Who owns the code and intellectual property?',
      a: 'You do—100%. All source code, designs, database schemas, and documentation are committed directly to your private GitHub or GitLab organization. There are zero proprietary lock-ins or licensing fees.'
    },
    {
      q: 'How do you handle AI privacy and confidential business data?',
      a: 'We strictly implement zero-data-retention enterprise API configurations and private VPC deployment models. Your proprietary business data and customer records are never used to train external public LLMs.'
    },
    {
      q: 'How quickly can our project kick off?',
      a: 'Following our 30-minute discovery session and architectural approval, our sprint team can initiate onboarding and Phase 01 Discovery within 5 to 7 business days.'
    }
  ];

  return (
    <section className="py-24 relative" id="faq">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00D2FF] font-bold block mb-3">
            // Straight Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base opacity-80">
            Everything you need to know about partnering with SovYCode.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="luxury-card rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[#00D2FF] ${
                    isDark ? 'bg-white/5' : 'bg-slate-100'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base opacity-80 leading-relaxed border-t border-white/10 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
