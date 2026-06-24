import type { Service } from '@/types';
import { IMG } from './images';

const baseProcess = [
  { step: 1, title: 'Initial Consultation', description: 'Guruji assesses your birth chart, planetary positions, and the symptoms you are experiencing.' },
  { step: 2, title: 'Diagnosis & Reading', description: 'Identification of the precise dosha, planetary influence, or external negativity affecting you.' },
  { step: 3, title: 'Remedial Ritual', description: 'Prescribed pujas, mantras, yantras, or vastu corrections, performed personally by Guruji.' },
  { step: 4, title: 'Follow-up Guidance', description: 'Post-remedy direction, protective measures, and lifelong access to Guruji for clarifying doubts.' },
];

export const SERVICES: Service[] = [
  {
    slug: 'black-magic-remedies',
    title: 'Black Magic Remedies',
    shortDescription: 'Ancient protective rituals to break negative energies and dark forces.',
    fullContent:
      'Black magic, voodoo, and dark tantric forces can disrupt every dimension of life, health, relationships, finances, and peace of mind. Pandit Sri Vishwanath Guruji has spent over three decades mastering the counter-rituals from the Atharva Veda and Tantra Shastra to neutralise these influences. Through diagnosis of your birth chart and the symptoms you describe, Guruji identifies the source and intensity of the negativity. Sacred yantras are then prepared, protective mantras are recited over multiple sittings, and personalised remedial pujas are performed at the centre. Every ritual is conducted with strict adherence to Vedic procedure, guaranteeing your safety and complete spiritual cleansing.',
    heroImage: IMG.svc.magic,
    icon: 'Shield',
    faq: [
      { question: 'How do I know if I am affected by black magic?', answer: 'Common signs include unexplained illness, recurring nightmares, sudden financial collapse, family discord without cause, and a persistent feeling of being watched or drained. Guruji confirms it through your birth chart and a personal reading.' },
      { question: 'What rituals does Guruji use?', answer: 'Authentic Atharva Veda remedies, including Maha Mrityunjaya jaap, Bagalamukhi puja, protective kavachas, and consecrated yantras worn on the body or installed at home.' },
      { question: 'How long does the remedy take?', answer: 'Mild cases resolve in 11 to 21 days. Severe long-standing cases may require a 40-day mandala of pujas and follow-up consultations.' },
      { question: 'Is the process safe?', answer: 'Every ritual performed by Guruji is purely Vedic, protective, and ethical. There are no harmful procedures, only purification and restoration of your natural aura.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'AlertTriangle', label: 'Unexplained Illness' },
      { icon: 'HeartCrack', label: 'Relationship Breakdown' },
      { icon: 'TrendingDown', label: 'Sudden Financial Loss' },
      { icon: 'Moon', label: 'Disturbed Sleep & Nightmares' },
    ],
  },
  {
    slug: 'vashikaran-specialist',
    title: 'Vashikaran Specialist',
    shortDescription: 'Vedic Vashikaran techniques to resolve love and relationship issues.',
    fullContent:
      'Vashikaran is one of the most ancient and refined branches of Vedic astrology, the art of harmonising minds and attracting positive intent. Guruji applies it strictly for ethical purposes: reuniting separated lovers, healing strained marriages, restoring a wandering partner\'s affection, and resolving stubborn family disputes. Every Vashikaran ritual draws upon classical mantras, sacred yantras, and the alignment of Venus and Moon in your chart.',
    heroImage: IMG.svc.vashikaran,
    icon: 'Heart',
    faq: [
      { question: 'Is Vashikaran ethical?', answer: 'Guruji practises only positive Vashikaran, never to harm, control, or manipulate against another\'s wellbeing. The purpose is restoration of natural affection.' },
      { question: 'How fast will I see results?', answer: 'Most clients notice a change in their loved one\'s behaviour within 11–21 days of starting the ritual.' },
      { question: 'Do I need to be present in Bangalore?', answer: 'In-person consultation is preferred, but remote consultations and remedies are available via phone and WhatsApp.' },
      { question: 'What information does Guruji need?', answer: 'Your full name, date of birth, time and place of birth, plus the same details of the concerned person if available.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'HeartHandshake', label: 'Lost Love Reunion' },
      { icon: 'Users', label: 'Family Disputes' },
      { icon: 'UserCheck', label: 'Win Back a Partner' },
      { icon: 'Sparkles', label: 'Attract Positive Energy' },
    ],
  },
  {
    slug: 'vastu-shastra',
    title: 'Vastu Shastra Astrologer',
    shortDescription: 'Harmonise your home and workplace energies through ancient Vastu principles.',
    fullContent:
      'Vastu Shastra is the sacred Vedic science of architecture, aligning your living and working spaces with the five elements and the cardinal directions. Even a small structural imbalance can block prosperity, peace, and health. Guruji conducts on-site Vastu surveys across Bangalore, identifies dosha zones, and prescribes corrections that range from simple yantra placement to pyramidal cures and re-orientation of key rooms.',
    heroImage: IMG.svc.vastu,
    icon: 'Home',
    faq: [
      { question: 'Do I need to demolish my house?', answer: 'Almost never. 95% of Vastu doshas can be corrected with placement-based remedies, yantras, and minor adjustments.' },
      { question: 'Is Vastu only for new constructions?', answer: 'No, existing homes, offices, factories, and shops all benefit equally from a Vastu reading.' },
      { question: 'How much does a site visit cost?', answer: 'Site visit fees depend on the size of the property and the city. Please call to schedule.' },
      { question: 'Will Guruji visit my office?', answer: 'Yes, Guruji conducts both residential and commercial Vastu visits within Bangalore and beyond.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'Compass', label: 'Direction Doshas' },
      { icon: 'Building2', label: 'New Construction' },
      { icon: 'Briefcase', label: 'Office Imbalance' },
      { icon: 'Sparkles', label: 'Stagnant Prosperity' },
    ],
  },
  {
    slug: 'love-marriage-problem',
    title: 'Love Marriage Problem Solution',
    shortDescription: 'Astrological solutions to remove obstacles in love marriages.',
    fullContent:
      'Love marriages in Indian families often face caste, community, financial, or astrological hurdles. Guruji studies the birth charts of both partners, identifies the doshas blocking parental approval and inter-family harmony, and recommends targeted Vedic remedies, from kuja-dosha nivaran to specific pujas that soften family resistance.',
    heroImage: IMG.svc.love,
    icon: 'Heart',
    faq: [
      { question: 'Can astrology really change my parents\' minds?', answer: 'Astrology shifts the energetic conditions around a situation. With the right pujas, family resistance often softens within weeks.' },
      { question: 'What if our horoscopes don\'t match?', answer: 'Guruji performs dosha-nivaran remedies that resolve nadi, bhakoot, and mangal doshas before marriage.' },
      { question: 'Is this for inter-caste marriages too?', answer: 'Yes, Guruji has helped thousands of couples across all religions and communities.' },
      { question: 'When should we start?', answer: 'The earlier, the better, ideally as soon as you sense parental hesitation or astrological concerns.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'Heart', label: 'Parental Opposition' },
      { icon: 'AlertTriangle', label: 'Horoscope Mismatch' },
      { icon: 'Users', label: 'Inter-Caste Hurdles' },
      { icon: 'Clock', label: 'Delayed Marriage' },
    ],
  },
  {
    slug: 'childless-problem',
    title: 'Childless Problem Solution',
    shortDescription: 'Sacred rituals and Vedic remedies for couples seeking children.',
    fullContent:
      'Santaan dosha (childlessness) is one of the most painful experiences for a couple. Guruji combines deep horoscope analysis with proven Vedic remedies, Santaan Gopal Mantra anushthan, Putra-Kameshti Yagya, and specialised pujas at sacred shrines, to remove planetary blocks and invoke divine blessings for healthy progeny.',
    heroImage: IMG.svc.child,
    icon: 'Baby',
    faq: [
      { question: 'How long until results?', answer: 'Most couples see medical and spiritual changes within a 6 to 12-month cycle of remedies.' },
      { question: 'Do both partners need to be present?', answer: 'Yes, both horoscopes are essential. The puja itself is performed for both partners together.' },
      { question: 'Is this in place of medical treatment?', answer: 'No. Guruji works alongside your medical care, Vedic remedies remove the unseen blocks while medicine addresses the physical.' },
      { question: 'What is the cost?', answer: 'Costs vary by the specific puja prescribed. Please call for a personalised consultation.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'Baby', label: 'Santaan Dosha' },
      { icon: 'Heart', label: 'Repeated Miscarriages' },
      { icon: 'Clock', label: 'Years of Trying' },
      { icon: 'Sparkles', label: 'Divine Blessings' },
    ],
  },
  {
    slug: 'husband-wife-problem',
    title: 'Husband & Wife Problem Solution',
    shortDescription: 'Restore peace, trust, and harmony in your marriage.',
    fullContent:
      'A marriage strained by misunderstandings, distance, or mistrust can almost always be restored. Guruji studies both partners\' charts to find the planetary trigger of the discord, often Mars, Saturn, or Rahu, and prescribes targeted remedies: shanti pujas, mantra anushthan, and behavioural guidance rooted in Vedic counselling.',
    heroImage: IMG.svc.couple,
    icon: 'Users',
    faq: [
      { question: 'My partner refuses to come for consultation. Can you still help?', answer: 'Yes, Guruji can perform remedies based on one partner\'s consent and chart. The harmony returns naturally.' },
      { question: 'What if there is a third person involved?', answer: 'Guruji performs Vashikaran pujas to remove the external influence and re-anchor your partner\'s affection.' },
      { question: 'Is divorce always avoidable?', answer: 'In 9 out of 10 cases, yes. Even hardened separations have been reversed through Guruji\'s remedies.' },
      { question: 'How private is the consultation?', answer: 'Completely. Every consultation is held in strictest confidence.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'HeartCrack', label: 'Constant Quarrels' },
      { icon: 'UserX', label: 'Trust Issues' },
      { icon: 'Users', label: 'External Influence' },
      { icon: 'AlertTriangle', label: 'Imminent Separation' },
    ],
  },
  {
    slug: 'family-problem',
    title: 'Family Problem Solution',
    shortDescription: 'Resolve family disputes, estrangements, and conflicts through astrology.',
    fullContent:
      'Joint family disputes, property quarrels, brother-sister rifts, mother-in-law tensions, often stem from planetary doshas and ancestral karma. Guruji identifies the pitru dosha or graha kalesh active in the family chart and prescribes Pitru Tarpan, Rudra Abhishek, and other shanti remedies to restore harmony across generations.',
    heroImage: IMG.svc.family,
    icon: 'Users',
    faq: [
      { question: 'Why do families fight constantly?', answer: 'Often the root is pitru dosha or a malefic Saturn-Rahu interplay. Vedic remedies clear these unseen burdens.' },
      { question: 'Can one person\'s remedy heal the whole family?', answer: 'Yes, when the eldest or most affected member performs the prescribed puja, the energy spreads to all.' },
      { question: 'Does this work for property disputes?', answer: 'Absolutely. Property and inheritance disputes are among the most common family issues Guruji resolves.' },
      { question: 'How long does it take?', answer: 'Most family situations improve markedly within 21 to 45 days of remedies.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'Users', label: 'Sibling Disputes' },
      { icon: 'Home', label: 'Property Quarrels' },
      { icon: 'AlertTriangle', label: 'In-Law Tensions' },
      { icon: 'Sparkles', label: 'Ancestral Doshas' },
    ],
  },
  {
    slug: 'health-problem',
    title: 'Health Problem Solution',
    shortDescription: 'Vedic remedies to overcome chronic illness and health obstacles.',
    fullContent:
      'Chronic illness that resists medical treatment often has a planetary root, most commonly a malefic Saturn, Rahu, or 6th-house affliction. Guruji performs Maha Mrityunjaya Jaap, Navagraha Shanti pujas, and personalised mantra anushthans to neutralise the planetary cause while medical treatment continues in parallel.',
    heroImage: IMG.svc.health,
    icon: 'Activity',
    faq: [
      { question: 'Should I stop my medication?', answer: 'Never. Vedic remedies work alongside, never instead of, your prescribed medical treatment.' },
      { question: 'What kind of illnesses can be helped?', answer: 'Chronic, recurring, or mysterious ailments respond best, especially when doctors cannot find a cause.' },
      { question: 'Does this work for mental health?', answer: 'Yes, particularly for anxiety, depression, and panic disorders linked to Moon or Rahu afflictions.' },
      { question: 'How soon do I feel better?', answer: 'Many clients report energetic relief within 7–11 days, though full recovery follows the natural healing cycle.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'Activity', label: 'Chronic Illness' },
      { icon: 'AlertTriangle', label: 'Unexplained Symptoms' },
      { icon: 'HeartCrack', label: 'Mental Distress' },
      { icon: 'Sparkles', label: 'Spiritual Healing' },
    ],
  },
  {
    slug: 'career-problems',
    title: 'Career Problems & Solutions',
    shortDescription: 'Astrological guidance to unlock career growth and professional success.',
    fullContent:
      'Stuck in the same role for years? Missed promotions? Frequent job changes? Career stagnation has clear astrological signatures, typically weak 10th house, malefic Saturn, or unstable Mercury. Guruji prescribes targeted gemstone therapy, planetary remedies, and career-specific yantras to align your professional path with your destiny.',
    heroImage: IMG.svc.career,
    icon: 'Briefcase',
    faq: [
      { question: 'Should I change jobs?', answer: 'Guruji studies your dasha cycle and recommends precisely when to change, when to stay, and what industry suits your chart.' },
      { question: 'What about business vs job?', answer: 'Your 10th and 7th houses reveal whether business or service aligns with your karmic blueprint.' },
      { question: 'Do gemstones really work?', answer: 'Only when prescribed correctly. A wrong gemstone harms more than helps, always consult Guruji first.' },
      { question: 'How long until career growth?', answer: 'Most clients see promotional or financial movement within 3–6 months of remedies.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'TrendingDown', label: 'Career Stagnation' },
      { icon: 'AlertTriangle', label: 'Missed Promotions' },
      { icon: 'Briefcase', label: 'Job Instability' },
      { icon: 'Sparkles', label: 'Business Losses' },
    ],
  },
  {
    slug: 'divorce-problem',
    title: 'Divorce Problem Solution',
    shortDescription: 'Save your marriage or navigate separation with astrological clarity.',
    fullContent:
      'Whether you wish to save your marriage or are navigating an unavoidable separation, Guruji provides clear, ethical astrological counsel. For salvageable marriages, targeted shanti pujas and Vashikaran remedies restore affection. For separations, he guides on auspicious timing and remedies to minimise legal and emotional damage.',
    heroImage: IMG.svc.couple,
    icon: 'Scale',
    faq: [
      { question: 'Can my marriage truly be saved?', answer: 'In most cases, yes, even when separation seems inevitable. The planetary cause can almost always be addressed.' },
      { question: 'What if my partner already filed for divorce?', answer: 'Guruji performs court-case remedies in parallel to slow proceedings and create space for reconciliation.' },
      { question: 'Is it ever right to divorce?', answer: 'When the chart clearly shows incompatibility and harm, Guruji guides ethically through the separation.' },
      { question: 'Will my children be affected?', answer: 'Guruji prescribes shanti pujas for the children\'s emotional protection during the process.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'Scale', label: 'Divorce Filed' },
      { icon: 'HeartCrack', label: 'Save Marriage' },
      { icon: 'Users', label: 'Custody Concerns' },
      { icon: 'AlertTriangle', label: 'Legal Battles' },
    ],
  },
  {
    slug: 'court-case-problem',
    title: 'Court Case Problem Solution',
    shortDescription: 'Planetary remedies to tip justice in your favour.',
    fullContent:
      'Long-running court cases, civil, criminal, or property, often correlate with afflictions in the 6th and 8th houses. Guruji performs specialised Bagalamukhi pujas, Saturn shanti remedies, and Hanuman Chalisa anushthans to clear the planetary obstruction and bring favourable verdicts.',
    heroImage: IMG.svc.court,
    icon: 'Gavel',
    faq: [
      { question: 'Can astrology really influence a court case?', answer: 'Astrology cannot bribe judges, but it removes the karmic obstacles that delay justice and clouds favourable evidence.' },
      { question: 'What if I am innocent?', answer: 'Guruji\'s Bagalamukhi pujas are particularly powerful in revealing truth and protecting the innocent.' },
      { question: 'How long until the case resolves?', answer: 'Depending on the dasha cycle, most cases see breakthrough within 3–9 months.' },
      { question: 'Do I need to bring documents?', answer: 'Only your birth details and a brief description of the case. Guruji works from the chart, not the paperwork.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'Gavel', label: 'Pending Litigation' },
      { icon: 'AlertTriangle', label: 'False Accusations' },
      { icon: 'Scale', label: 'Property Disputes' },
      { icon: 'Clock', label: 'Delayed Justice' },
    ],
  },
  {
    slug: 'financial-problem',
    title: 'Financial Problem Solution',
    shortDescription: 'Remove financial blocks and attract prosperity through Vedic astrology.',
    fullContent:
      'Money flows where planets align. A weak 2nd or 11th house, malefic Jupiter, or blocked Lakshmi-Kubera energy creates persistent financial struggle no matter how hard you work. Guruji prescribes Lakshmi-Kubera pujas, gemstone remedies, and specific yantras to open the flow of wealth in your life.',
    heroImage: IMG.svc.finance,
    icon: 'IndianRupee',
    faq: [
      { question: 'I work hard but money never stays. Why?', answer: 'Likely a leakage in your 2nd or 12th house. Guruji identifies it and prescribes the exact remedy.' },
      { question: 'Should I buy gold or invest?', answer: 'Guruji reads your chart and advises auspicious timing for investments, property, and gold purchases.' },
      { question: 'Will I become wealthy?', answer: 'Astrology cannot create wealth from nothing, but it clears blocks so your effort produces the results you deserve.' },
      { question: 'How quickly do remedies work?', answer: 'Most clients see financial movement within 21–45 days of beginning remedies.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'TrendingDown', label: 'Debt Burdens' },
      { icon: 'AlertTriangle', label: 'Business Losses' },
      { icon: 'Briefcase', label: 'Career Stagnation' },
      { icon: 'Sparkles', label: 'Wealth Blocks' },
    ],
  },
  {
    slug: 'political-problem',
    title: 'Political Problem Solution',
    shortDescription: 'Strategic astrological counsel for political careers and elections.',
    fullContent:
      'Political success requires planetary backing, strong Sun, supportive Mercury, and well-placed Mars. Guruji has counselled candidates across Karnataka and beyond on election timing, alliance choices, and ritual remedies to ensure public favour and electoral victory.',
    heroImage: IMG.svc.political,
    icon: 'Landmark',
    faq: [
      { question: 'Can astrology predict election results?', answer: 'It can read tendencies and warn of obstacles. Guruji combines this with remedial pujas to strengthen your position.' },
      { question: 'When should I file my nomination?', answer: 'Guruji selects the precise muhurat aligned with your chart and the constituency\'s energy.' },
      { question: 'Is this confidential?', answer: 'Absolutely. All political consultations are held in complete confidence.' },
      { question: 'Do you advise sitting politicians?', answer: 'Yes, Guruji counsels both sitting representatives and aspiring candidates.' },
    ],
    relatedTestimonialIds: [],
    process: baseProcess,
    whySeek: [
      { icon: 'Landmark', label: 'Election Strategy' },
      { icon: 'Users', label: 'Alliance Decisions' },
      { icon: 'Clock', label: 'Muhurat Timing' },
      { icon: 'Sparkles', label: 'Public Image' },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);
