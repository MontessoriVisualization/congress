/**
 * Application Script
 * Initializes the translation library, sets up the translation dictionary,
 * and manages UI behaviors like the language switcher dropdown.
 */

// Translation Dictionary
const translationDictionary = {
  en: {
    brand: {
      title: "Nepali Congress",
      subtitle: "Digital Learning & Assessment Platform",
      footer_title: "Nepali Congress",
      footer_subtitle: "Official Website of Nepali Congress"
    },
    nav: {
      home: "Home",
      articles: "Articles",
      videos: "Videos",
      calendar: "Calendar",
      documents: "Documents",
      about: "About Us"
    },
    btn: {
      search: { ariaLabel: "Search" },
      login: "Log In",
      join: "Join Now",
      view_all_articles: "View All Articles",
      view_all_videos: "View All Videos",
      read_more: "Read More"
    },
    hero: {
      eyebrow: "AI POWERED PLATFORM",
      title: "<span>Learn. Understand.</span><strong>Lead the Change.</strong>",
      desc: "Empowering Nepali Congress members with knowledge, resources, and assessments to build a stronger tomorrow.",
      explore: "Explore Articles",
      join: "Join Nepali Congress",
      verify: "Verify your membership certificate"
    },
    stats: {
      articles_num: "1,250+",
      articles_text: "Articles Published",
      videos_num: "850+",
      videos_text: "Videos Available",
      events_num: "120+",
      events_text: "Events Organized",
      members_num: "25K+",
      members_text: "Active Members"
    },
    featured: {
      kicker: "FEATURED CONTENT",
      heading: "Explore. Learn. <strong>Grow.</strong>",
      sub: "Curated articles, important updates, and insightful videos handpicked for you.",
      view_all: "View all articles",
      badge_featured: "FEATURED",
      badge_article: "ARTICLE",
      badge_video: "VIDEO",
      badge_document: "DOCUMENT",
      card1_title: "B. P. Koirala's Thoughts and Philosophy",
      card1_date: "May 12, 2024",
      card2_title: "History and Campaign of Nepali Congress",
      card2_date: "May 10, 2024",
      card3_title: "Role of Nepali Congress in Democracy and Republic",
      card3_date: "May 8, 2024",
      card4_title: "Constitution of Nepali Congress (Amended)",
      card4_date: "May 5, 2024"
    },
    actions: {
      join_title: "Join Nepali Congress",
      join_desc: "Become a member and be part of the change.",
      verify_title: "Verify Certificate",
      verify_desc: "Verify your membership certificate instantly.",
      assess_title: "Take Assessment",
      assess_desc: "Test your knowledge and grow every day.",
      events_title: "Upcoming Events",
      events_desc: "Check out our upcoming programs and events."
    },
    leaders: {
      kicker: "LEADERS' THOUGHTS",
      heading: "Insights from <strong>Leaders.</strong>",
      sub: "Perspectives, reflections, and visions from leaders shaping Nepal's democratic future.",
      leader1: {
        name: "Gagan Thapa",
        title: "President, Nepali Congress",
        heading: "Democracy Must Be Lived, Not Just Celebrated",
        quote: "As we mark another year of our republic, I am reminded that democracy is not a destination but a daily practice. It requires each citizen to actively...",
        read: "2 min read"
      },
      leader2: {
        name: "Sher Bahadur Deuba",
        title: "Former President, NC",
        heading: "Building Prosperous Nepal Through Federal Democracy",
        quote: "Federalism is not just an administrative arrangement — it is our commitment to inclusive development that reaches every citizen in every corner of Nepal.",
        read: "3 min read"
      },
      leader3: {
        name: "Prakash Man Singh",
        title: "Senior Leader, NC",
        heading: "Youth Are the Backbone of Our Democratic Movement",
        quote: "When I see thousands of young Nepali joining our party and engaging in politics, I see the future of our democracy. Their energy and vision will shape tomorrow.",
        read: "2 min read"
      },
      leader4: {
        name: "Bimalendra Nidhi",
        title: "Vice President, NC",
        heading: "Strengthening Grassroots Institutions for Real Federalism",
        quote: "True federalism lives at the ward level, not in Singha Durbar. Our work now is to empower local governments with the resources and authority they deserve.",
        read: "2 min read"
      }
    },
    videos: {
      kicker: "VIDEO NEWS",
      heading: "Watch. Learn. <strong>Stay Informed.</strong>",
      sub: "Short video clips on key issues, events, and updates.",
      card1_title: "BP Koirala's Democratic Philosophy",
      card1_desc: "Explore the democratic vision and legacy of BP Koirala and its relevance today.",
      card1_dur: "25m",
      card2_title: "Understanding Nepal's Federal Structure",
      card2_desc: "A brief overview of federalism and its implementation in Nepal.",
      card2_dur: "35m",
      card3_title: "Election Laws and Electoral Process in Nepal",
      card3_desc: "How elections work in Nepal and the laws that govern them.",
      card3_dur: "40m",
      card4_title: "Leadership and Governance: Effective Political Leadership",
      card4_desc: "Key principles of effective leadership in politics and governance.",
      card4_dur: "30m",
      explore_title: "Explore More Videos",
      explore_desc: "Browse our full video library and stay informed.",
      watch: "Watch"
    },
    news: {
      heading: "Top Stories",
      view_all: "View All Articles",
      label_party: "Party News",
      label_org: "Organization",
      story1: {
        title: "Gagan Thapa Calls for National Unity Ahead of Historic Provincial By-Elections",
        desc: "NC President Sher Bahadur Deuba addressed a 50,000-strong gathering in Kathmandu, urging all democratic forces...",
        date: "June 4, 2026",
        read: "5 min read"
      },
      story2: {
        title: "Gagan Thapa meets coalition partners to discuss government priorities",
        desc: "NC President Deuba held a key meeting with Maoist leadership to discuss the long-term stability and governance...",
        date: "June 4, 2026",
        read: "4 min read"
      },
      story3: {
        title: "Central Working Committee discusses organizational strengthening drive",
        desc: "The meeting focused on expanding party presence at the grassroots and preparing for future political challenges.",
        date: "June 3, 2026",
        read: "6 min read"
      }
    },
    glance: {
      heading: "At A Glance",
      item1: { title: "Our Leadership", desc: "Meet the leaders guiding the party with vision and commitment." },
      item2: { title: "Our History", desc: "Explore the rich legacy and journey of Nepali Congress." },
      item3: { title: "Our Vision", desc: "Building a democratic, inclusive and prosperous Nepal." },
      item4: { title: "Get Involved", desc: "Join hands with us and be a part of the change." }
    },
    cta: {
      heading: "Be a Part of the <span class=\"cta-accent\">Change</span>",
      desc: "Join thousands of Nepalese working, growing, and working together for a better Nepal.",
      join: "Join Nepali Congress",
      explore: "Explore Resources"
    },
    footer: {
      desc: "Empowering the nation with inclusive politics, social initiatives & building a prosperous, democratic Nepal.",
      facebook: { ariaLabel: "Facebook" },
      twitter: { ariaLabel: "Twitter" },
      instagram: { ariaLabel: "Instagram" },
      youtube: { ariaLabel: "YouTube" },
      title_links: "Quick Links",
      title_resources: "Resources",
      title_support: "Support",
      title_newsletter: "Subscribe to Newsletter",
      desc_newsletter: "Stay informed with updates on news, events and more.",
      input_newsletter: { placeholder: "Enter your email", ariaLabel: "Email address" },
      btn_subscribe: "Subscribe",
      copyright: "© 2025 Nepali Congress. All Rights Reserved.",
      made_in: "Made with <span class=\"heart\">❤</span> in Nepal"
    },
    podcast: {
      kicker: "PODCASTS",
      heading: "Listen to <strong>Voice of Democracy.</strong>",
      sub: "Deep-dive discussions on policy, history, and development in Nepal.",
      badge_latest: "LATEST EPISODE",
      feat_title: "The Vision of BP Koirala in the 21st Century",
      feat_meta: "Host: Gagan Thapa | Guest: Prof. Dr. Lok Raj Baral",
      feat_desc: "An in-depth analysis of democratic socialism and its practical application in Nepal's modern economic landscape.",
      feat_elapsed: "15:45",
      feat_duration: "45:12",
      audio_only: "Audio Only",
      list_item1_title: "Federalism: Decadence or Development?",
      list_item1_dur: "32m",
      list_item1_date: "June 10, 2026",
      list_item2_title: "Youth Engagement in Democratic Institutions",
      list_item2_dur: "28m",
      list_item2_date: "June 5, 2026",
      list_item3_title: "Economic Policy for Inclusive Growth",
      list_item3_dur: "38m",
      list_item3_date: "May 28, 2026"
    }
  },
  ne: {
    brand: {
      title: "नेपाली कांग्रेस",
      subtitle: "डिजिटल सिकाई र मूल्यांकन प्लेटफर्म",
      footer_title: "नेपाली कांग्रेस",
      footer_subtitle: "नेपाली कांग्रेसको आधिकारिक वेबसाइट"
    },
    nav: {
      home: "गृह",
      articles: "लेखहरू",
      videos: "भिडियोहरू",
      calendar: "पात्रो",
      documents: "दस्तावेजहरू",
      about: "हाम्रो बारेमा"
    },
    btn: {
      search: { ariaLabel: "खोज्नुहोस्" },
      login: "लग इन",
      join: "अहिले जोडिनुहोस्",
      view_all_articles: "सबै लेखहरू हेर्नुहोस्",
      view_all_videos: "सबै भिडियोहरू हेर्नुहोस्",
      read_more: "थप पढ्नुहोस्"
    },
    hero: {
      eyebrow: "एआई संचालित प्लेटफर्म",
      title: "<span>सिक्नुहोस्। बुझ्नुहोस्।</span><strong>परिवर्तनको नेतृत्व गर्नुहोस्।</strong>",
      desc: "नेपाली कांग्रेसका सदस्यहरूलाई ज्ञान, स्रोत र मूल्यांकन मार्फत सशक्त बनाउँदै एक सबल भोलिको निर्माण।",
      explore: "लेखहरू खोज्नुहोस्",
      join: "नेपाली कांग्रेसमा जोडिनुहोस्",
      verify: "आफ्नो सदस्यता प्रमाणपत्र प्रमाणित गर्नुहोस्"
    },
    stats: {
      articles_num: "१,२५०+",
      articles_text: "लेखहरू प्रकाशित",
      videos_num: "८५०+",
      videos_text: "भिडियोहरू उपलब्ध",
      events_num: "१२०+",
      events_text: "कार्यक्रमहरू आयोजित",
      members_num: "२५K+",
      members_text: "सक्रिय सदस्यहरू"
    },
    featured: {
      kicker: "विशेष सामग्री",
      heading: "खोज्नुहोस्। सिक्नुहोस्। <strong>विकास गर्नुहोस्।</strong>",
      sub: "तपाईंका लागि छानिएका लेखहरू, महत्त्वपूर्ण अद्यावधिकहरू र जानकारीमूलक भिडियोहरू।",
      view_all: "सबै लेखहरू हेर्नुहोस्",
      badge_featured: "विशेष",
      badge_article: "लेख",
      badge_video: "भिडियो",
      badge_document: "दस्तावेज",
      card1_title: "बि. पी. कोइरालाको विचार र दर्शन",
      card1_date: "१२ मे, २०२४",
      card2_title: "नेपाली कांग्रेसको इतिहास र अभियान",
      card2_date: "१० मे, २०२४",
      card3_title: "लोकतन्त्र र गणतन्त्रमा नेपाली कांग्रेसको भूमिका",
      card3_date: "८ मे, २०२४",
      card4_title: "नेपाली कांग्रेसको विधान (संशोधित)",
      card4_date: "५ मे, २०२४"
    },
    actions: {
      join_title: "नेपाली कांग्रेसमा जोडिनुहोस्",
      join_desc: "सदस्य बन्नुहोस् र परिवर्तनको हिस्सा बन्नुहोस्।",
      verify_title: "प्रमाणपत्र प्रमाणित गर्नुहोस्",
      verify_desc: "आफ्नो सदस्यता प्रमाणपत्र तुरुन्तै प्रमाणित गर्नुहोस्।",
      assess_title: "मूल्यांकन लिनुहोस्",
      assess_desc: "आफ्नो ज्ञान परीक्षण गर्नुहोस् र हरेक दिन विकास गर्नुहोस्।",
      events_title: "आगामी कार्यक्रमहरू",
      events_desc: "हाम्रा आगामी कार्यक्रम र अभियानहरू हेर्नुहोस्।"
    },
    leaders: {
      kicker: "नेताहरूका विचार",
      heading: "नेताहरूबाट <strong>अन्तर्दृष्टि।</strong>",
      sub: "नेपालको लोकतान्त्रिक भविष्यलाई आकार दिने नेताहरूका दृष्टिकोण, चिन्तन र दृष्टिकोणहरू।",
      leader1: {
        name: "गगन थापा",
        title: "सभापति, नेपाली कांग्रेस",
        heading: "लोकतन्त्र केवल मनाउने होइन, बाँच्नुपर्छ",
        quote: "हाम्रो गणतन्त्रको अर्को वर्ष मनाउँदै गर्दा, मलाई सम्झना आउँछ कि लोकतन्त्र कुनै गन्तव्य होइन तर दैनिक अभ्यास हो। यसका लागि प्रत्येक नागरिकले सक्रिय रूपमा...",
        read: "२ मिनेट पढ्ने समय"
      },
      leader2: {
        name: "शेरबहादुर देउवा",
        title: "पूर्व सभापति, नेपाली कांग्रेस",
        heading: "संघीय लोकतन्त्र मार्फत समृद्ध नेपालको निर्माण",
        quote: "संघीयता केवल प्रशासनिक व्यवस्था मात्र होइन — यो नेपालको हरेक कुनामा रहेका प्रत्येक नागरिकसम्म पुग्ने समावेशी विकासप्रतिको हाम्रो प्रतिबद्धता हो।",
        read: "३ मिनेट पढ्ने समय"
      },
      leader3: {
        name: "प्रकाशमान सिंह",
        title: "वरिष्ठ नेता, नेपाली कांग्रेस",
        heading: "युवाहरू हाम्रो लोकतान्त्रिक आन्दोलनको मेरुदण्ड हुन्",
        quote: "जब म हजारौं युवा नेपालीहरू हाम्रो पार्टीमा आबद्ध भएको र राजनीतिमा संलग्न भएको देख्छु, म हाम्रो लोकतान्त्रिक भविष्य देख्छु। उनीहरूको ऊर्जा र दृष्टिकोणले भोलिको दिनलाई आकार दिनेछ।",
        read: "२ मिनेट पढ्ने समय"
      },
      leader4: {
        name: "विमलेन्द्र निधि",
        title: "उपसभापति, नेपाली कांग्रेस",
        heading: "वास्तविक संघीयताका लागि तृणमूल तहका संस्थाहरूको सुदृढीकरण",
        quote: "वास्तविक संघीयता सिंहदरबारमा होइन, वडा तहमा रहन्छ। हाम्रो काम अब स्थानीय सरकारहरूलाई उनीहरूले पाउने स्रोत र अधिकारसहित अधिकारसम्पन्न बनाउनु हो।",
        read: "२ मिनेट पढ्ने समय"
      }
    },
    videos: {
      kicker: "भिडियो समाचार",
      heading: "हेर्नुहोस्। सिक्नुहोस्। <strong>सूचित रहनुहोस्।</strong>",
      sub: "मुख्य मुद्दाहरू, घटनाहरू र अद्यावधिकहरूमा छोटो भिडियो क्लिपहरू।",
      card1_title: "बिपी कोइरालाको लोकतान्त्रिक दर्शन",
      card1_desc: "बिपी कोइरालाको लोकतान्त्रिक दृष्टिकोण र विरासत र आज यसको सान्दर्भिकताको खोजी गर्नुहोस्।",
      card1_dur: "२५ मिनेट",
      card2_title: "नेपालको संघीय संरचना बुझ्ने",
      card2_desc: "संघीयता र नेपालमा यसको कार्यान्वयनको संक्षिप्त सिंहावलोकन।",
      card2_dur: "३५ मिनेट",
      card3_title: "नेपालमा निर्वाचन कानुन र निर्वाचन प्रक्रिया",
      card3_desc: "नेपालमा निर्वाचन कसरी काम गर्छ र त्यसलाई नियन्त्रण गर्ने कानुनहरू।",
      card3_dur: "४० मिनेट",
      card4_title: "नेतृत्व र सुशासन: प्रभावकारी राजनीतिक नेतृत्व",
      card4_desc: "राजनीति र सुशासनमा प्रभावकारी नेतृत्वका मुख्य सिद्धान्तहरू।",
      card4_dur: "३० मिनेट",
      explore_title: "थप भिडियोहरू खोज्नुहोस्",
      explore_desc: "हाम्रो सम्पूर्ण भिडियो पुस्तकालय ब्राउज गर्नुहोस् र सूचित रहनुहोस्।",
      watch: "हेर्नुहोस्"
    },
    news: {
      heading: "मुख्य समाचार",
      view_all: "सबै लेखहरू हेर्नुहोस्",
      label_party: "पार्टी समाचार",
      label_org: "संगठन",
      story1: {
        title: "ऐतिहासिक प्रदेश उपनिर्वाचन अघि गगन थापाद्वारा राष्ट्रिय एकताको आह्वान",
        desc: "नेपाली कांग्रेसका सभापति शेरबहादुर देउवाले काठमाडौंमा ५०,००० को जनसभालाई सम्बोधन गर्दै सम्पूर्ण लोकतान्त्रिक शक्तिहरूलाई...",
        date: "४ जुन, २०२६",
        read: "५ मिनेट पढ्ने समय"
      },
      story2: {
        title: "सरकारका प्राथमिकताहरूबारे छलफल गर्न गगन थापाले गठबन्धन साझेदारहरूलाई भेटे",
        desc: "नेपाली कांग्रेसका सभापति देउवाले सरकारको दीर्घकालीन स्थायित्व र सुशासनका बारेमा छलफल गर्न माओवादी नेतृत्वसँग महत्त्वपूर्ण भेटवार्ता गर्नुभयो...",
        date: "४ जुन, २०२६",
        read: "४ मिनेट पढ्ने समय"
      },
      story3: {
        title: "केन्द्रीय कार्यसमितिको बैठकमा सांगठनिक सुदृढीकरण अभियानबारे छलफल",
        desc: "बैठक तृणमूल तहमा पार्टीको उपस्थिति विस्तार गर्ने र आगामी राजनीतिक चुनौतीहरूको तयारीमा केन्द्रित थियो।",
        date: "३ जुन, २०२६",
        read: "६ मिनेट पढ्ने समय"
      }
    },
    glance: {
      heading: "एक नजरमा",
      item1: { title: "हाम्रो नेतृत्व", desc: "पार्टीलाई दृष्टिकोण र प्रतिबद्धताका साथ मार्गदर्शन गर्ने नेताहरूलाई भेट्नुहोस्।" },
      item2: { title: "हाम्रो इतिहास", desc: "नेपाली कांग्रेसको समृद्ध विरासत र यात्राको खोजी गर्नुहोस्।" },
      item3: { title: "हाम्रो दृष्टिकोण", desc: "लोकतन्त्र, समावेशी र समृद्ध नेपालको निर्माण।" },
      item4: { title: "सहभागी हुनुहोस्", desc: "हामीसँग हात मिलाउनुहोस् र परिवर्तनको हिस्सा बन्नुहोस्।" }
    },
    cta: {
      heading: "परिवर्तनको <span class=\"cta-accent\">हिस्सा</span> बन्नुहोस्",
      desc: "सुन्दर नेपालका लागि सँगै काम गर्दै, सिक्दै र अघि बढ्दै गरेका हजारौं नेपालीहरूसँग जोडिनुहोस्।",
      join: "नेपाली कांग्रेसमा जोडिनुहोस्",
      explore: "स्रोतहरू खोज्नुहोस्"
    },
    footer: {
      desc: "समावेशी राजनीति, सामाजिक पहल र समृद्ध, लोकतान्त्रिक नेपालको निर्माण मार्फत राष्ट्रलाई सशक्त बनाउँदै।",
      facebook: { ariaLabel: "फेसबुक" },
      twitter: { ariaLabel: "ट्विटर" },
      instagram: { ariaLabel: "इन्स्टाग्राम" },
      youtube: { ariaLabel: "यूट्यूब" },
      title_links: "द्रुत लिङ्कहरू",
      title_resources: "स्रोतहरू",
      title_support: "सहयोग",
      title_newsletter: "समाचारपत्रमा सदस्यता लिनुहोस्",
      desc_newsletter: "समाचार, घटनाहरू र थप जानकारीका साथ सूचित रहनुहोस्।",
      input_newsletter: { placeholder: "आफ्नो इमेल प्रविष्ट गर्नुहोस्", ariaLabel: "इमेल ठेगाना" },
      btn_subscribe: "सदस्यता लिनुहोस्",
      copyright: "© २०२५ नेपाली कांग्रेस। सर्वाधिकार सुरक्षित।",
      made_in: "नेपालमा <span class=\"heart\">❤</span> का साथ निर्मित"
    },
    podcast: {
      kicker: "पोडकास्टहरू",
      heading: "सुनौँ <strong>लोकतन्त्रको आवाज।</strong>",
      sub: "नीति, इतिहास र नेपालको विकास सम्बन्धी गहन छलफलहरू।",
      badge_latest: "पछिल्लो एपिसोड",
      feat_title: "२१ औं शताब्दीमा बिपी कोइरालाको दृष्टिकोण",
      feat_meta: "प्रस्तोता: गगन थापा | अतिथि: प्रा. डा. लोकराज बराल",
      feat_desc: "नेपालको आधुनिक आर्थिक परिदृश्यमा प्रजातान्त्रिक समाजवाद र यसको व्यावहारिक प्रयोगको गहन विश्लेषण।",
      feat_elapsed: "१५:४५",
      feat_duration: "४५:१२",
      audio_only: "अडियो मात्र",
      list_item1_title: "संघीयता: विकृति कि विकास?",
      list_item1_dur: "३२ मिनेट",
      list_item1_date: "१० जुन, २०२६",
      list_item2_title: "लोकतान्त्रिक संस्थाहरूमा युवा सहभागिता",
      list_item2_dur: "२८ मिनेट",
      list_item2_date: "५ जुन, २०२६",
      list_item3_title: "समावेशी विकासका लागि आर्थिक नीति",
      list_item3_dur: "३८ मिनेट",
      list_item3_date: "२८ मे, २०२६"
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Translator
  const translator = new Translator({
    languages: ['en', 'ne'],
    defaultLanguage: 'en',
    translations: translationDictionary,
    onLanguageChange: (lang) => {
      updateLanguageSelectorUI(lang);
    }
  });

  // 2. Select language selector elements
  const langSwitcher = document.querySelector('.lang-switcher');
  const langBtn = document.querySelector('.lang-btn');
  const langLabel = document.querySelector('.lang-label');
  const langDropdown = document.querySelector('.lang-dropdown');
  const langItems = document.querySelectorAll('[data-lang-select]');

  // 3. Dropdown UI logic
  if (langBtn && langSwitcher) {
    // Toggle dropdown on click
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langSwitcher.classList.toggle('open');
      const isOpen = langSwitcher.classList.contains('open');
      langBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close dropdown on click outside
    document.addEventListener('click', () => {
      langSwitcher.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    });

    // Handle Escape key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        langSwitcher.classList.remove('open');
        langBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Switch language on dropdown item click
    langItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const selectedLang = item.getAttribute('data-lang-select');
        translator.setLanguage(selectedLang);
      });
    });
  }

  /**
   * Helper function to update the language selector UI
   * Sets active button classes and changes the displayed label
   * @param {string} lang The currently active language
   */
  function updateLanguageSelectorUI(lang) {
    if (!langLabel || !langItems) return;
    
    // Update main button label
    const activeLabelText = lang === 'ne' ? 'नेपाली' : 'English';
    langLabel.textContent = activeLabelText;

    // Update active class on dropdown items
    langItems.forEach(item => {
      const itemLang = item.getAttribute('data-lang-select');
      if (itemLang === lang) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // 4. Podcast mock play toggle
  const podcastPlayToggle = document.getElementById('podcast-play-toggle');
  const podcastPlayIcon = document.getElementById('podcast-play-icon');
  
  if (podcastPlayToggle && podcastPlayIcon) {
    let isPlaying = false;
    podcastPlayToggle.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        // Change to pause icon
        podcastPlayIcon.innerHTML = '<use href="#icon-pause-fill"></use>';
        podcastPlayToggle.style.backgroundColor = 'var(--red)';
        podcastPlayToggle.style.boxShadow = '0 4px 10px rgba(223, 21, 31, 0.3)';
      } else {
        // Change back to play icon
        podcastPlayIcon.innerHTML = '<use href="#icon-play-fill"></use>';
        podcastPlayToggle.style.backgroundColor = 'var(--green)';
        podcastPlayToggle.style.boxShadow = '0 4px 10px rgba(8, 121, 64, 0.3)';
      }
    });
  }

  // Initialize UI with the loaded language
  updateLanguageSelectorUI(translator.currentLanguage);
});
