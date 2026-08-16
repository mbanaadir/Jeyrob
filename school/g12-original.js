// Jeyrob School — Grade 12 original curriculum (fully self-contained, no external links)
window.CURRICULUM = window.CURRICULUM || {};
window.CURRICULUM[12] = {
  math: [
    {
      title: "Functions and Transformations",
      summary: "Transform graphs and find inverse functions.",
      lesson: [
        { t: "p", text: "A function maps each input x to exactly one output f(x). Transformations move or reshape the graph of a function without changing its underlying shape." },
        { t: "key", text: "The main transformations: f(x) + k shifts the graph up k units; f(x − h) shifts it right h units; −f(x) reflects it across the x-axis; f(−x) reflects it across the y-axis; and a·f(x) stretches it vertically by a factor of a." },
        { t: "example", title: "Worked example", text: "Starting from y = f(x), the graph of y = f(x) + 3 is the same graph moved up 3 units. The graph of y = f(x − 2) is moved right 2 units." },
        { t: "p", text: "The inverse of a function reverses the mapping: if f sends x to y, then f⁻¹ sends y back to x. To find it, swap x and y and solve for y." },
        { t: "key", text: "The inverse of a function is its reflection across the line y = x." }
      ],
      quiz: [
        { q: "The graph of y = f(x) + 3 shifts...", options: ["up 3 units", "down 3 units", "left 3 units"], a: 0 },
        { q: "The graph of y = f(x − 2) shifts...", options: ["right 2 units", "left 2 units", "up 2 units"], a: 0 },
        { q: "The inverse of a function...", options: ["reverses the function", "doubles it", "is always the same"], a: 0 }
      ]
    },
    {
      title: "Exponents and Logarithms",
      summary: "Use exponent laws and solve log equations.",
      lesson: [
        { t: "p", text: "Exponents and logarithms are inverse operations. The statement log_b(a) = c means the same thing as b^c = a. So logarithms answer the question: to what power must I raise the base to get a given number?" },
        { t: "key", text: "log₁₀(100) = 2 because 10² = 100. log₂(8) = 3 because 2³ = 8. The natural logarithm, written ln, uses base e (about 2.718)." },
        { t: "p", text: "Useful exponent laws: b^m · b^n = b^(m+n); (b^m)^n = b^(mn); b^0 = 1; and b^(−n) = 1/b^n." },
        { t: "example", title: "Worked example", text: "Solve 2^x = 32. Since 32 = 2⁵, we have 2^x = 2⁵, so x = 5. Equivalently, x = log₂(32) = 5." },
        { t: "key", text: "Because they are inverses, log_b(b^x) = x and b^(log_b x) = x." }
      ],
      quiz: [
        { q: "log₁₀(100) = ...", options: ["2", "10", "100"], a: 0 },
        { q: "2³ = ...", options: ["8", "6", "9"], a: 0 },
        { q: "log₂(8) = ...", options: ["3", "4", "2"], a: 0 }
      ]
    },
    {
      title: "Trigonometry (Advanced)",
      summary: "Use the unit circle and trigonometric identities.",
      lesson: [
        { t: "p", text: "The unit circle is a circle of radius 1 centred at the origin. It lets us extend trigonometry to any angle, not just angles in a right triangle." },
        { t: "key", text: "On the unit circle, for an angle θ, sin θ is the y-coordinate and cos θ is the x-coordinate of the point on the circle. So sin 90° = 1, cos 0° = 1, and tan 45° = 1." },
        { t: "p", text: "The most important identity is sin²θ + cos²θ = 1. It follows directly from the equation of the unit circle, x² + y² = 1." },
        { t: "example", title: "Worked example", text: "Find sin 90°. The point at 90° on the unit circle is (0, 1), so sin 90° = 1. The point at 0° is (1, 0), so cos 0° = 1." },
        { t: "p", text: "Special angles to remember: sin 30° = 1/2, sin 45° = √2/2, sin 60° = √3/2, and the matching cosine values in reverse." }
      ],
      quiz: [
        { q: "sin(90°) = ...", options: ["1", "0", "0.5"], a: 0 },
        { q: "cos(0°) = ...", options: ["1", "0", "0.5"], a: 0 },
        { q: "tan(45°) = ...", options: ["1", "0", "2"], a: 0 }
      ]
    },
    {
      title: "Combinatorics and Probability",
      summary: "Count arrangements and calculate probability.",
      lesson: [
        { t: "p", text: "Combinatorics is the study of counting. The factorial n! means n × (n−1) × (n−2) × … × 1. For example 4! = 4 × 3 × 2 × 1 = 24." },
        { t: "key", text: "Permutations count ordered arrangements: n! / (n−r)!. Combinations count unordered selections: n! / (r!(n−r)!), written C(n, r)." },
        { t: "example", title: "Worked example", text: "The number of ways to arrange 3 books on a shelf is 3! = 6. The number of ways to choose 2 people from 5 (order does not matter) is C(5, 2) = 5! / (2! × 3!) = 10." },
        { t: "p", text: "Probability is the chance an event occurs: favourable outcomes divided by total outcomes. The fundamental counting principle says if one choice has m options and another has n, there are m × n combined options." }
      ],
      quiz: [
        { q: "3! = ...", options: ["6", "3", "9"], a: 0 },
        { q: "C(5, 2) = ...", options: ["10", "5", "20"], a: 0 },
        { q: "Probability of an event = ...", options: ["favourable ÷ total outcomes", "total ÷ favourable", "favourable × total"], a: 0 }
      ]
    },
    {
      title: "Introduction to Calculus",
      summary: "Understand limits and the derivative.",
      lesson: [
        { t: "p", text: "Calculus is the mathematics of change. The derivative measures the rate of change of a function — geometrically, it is the slope of the tangent line at a point." },
        { t: "key", text: "The power rule: the derivative of xⁿ is n·x^(n−1). So the derivative of x² is 2x, the derivative of 3x is 3, and the derivative of a constant is 0." },
        { t: "example", title: "Worked example", text: "Find the derivative of f(x) = x². Using the power rule, f′(x) = 2x. At x = 1, the slope of the tangent line is 2 × 1 = 2." },
        { t: "p", text: "A limit describes the value a function approaches as the input approaches some point. The derivative is defined as a limit of slopes of secant lines as they approach the tangent." }
      ],
      quiz: [
        { q: "The derivative of x² is...", options: ["2x", "x", "2"], a: 0 },
        { q: "The derivative of 3x is...", options: ["3", "3x", "0"], a: 0 },
        { q: "The derivative gives the...", options: ["slope of a tangent", "area under a curve", "the y-intercept"], a: 0 }
      ]
    }
  ],
  english: [
    {
      title: "Advanced Literary Analysis",
      summary: "Analyze literature using techniques and critical lenses.",
      lesson: [
        { t: "p", text: "Advanced literary analysis moves beyond plot summary to explain how an author's choices create meaning. You examine technique, not just what happens." },
        { t: "key", text: "Key tools: allusion (a reference to another work), diction (word choice), syntax (sentence structure), and a critical lens (a perspective such as feminist, Marxist, or psychological through which you interpret a text)." },
        { t: "example", title: "Worked example", text: "If a character's name alludes to a figure from mythology, recognizing that reference adds a layer of meaning — it may signal the character's fate or role in the story." },
        { t: "p", text: "A strong analysis makes a claim, supports it with textual evidence, and explains why that evidence matters — connecting the specific choice to the work's larger theme." }
      ],
      quiz: [
        { q: "Allusion is...", options: ["a reference to another work", "a type of rhyme", "a plot twist"], a: 0 },
        { q: "Diction refers to...", options: ["word choice", "sentence length", "paragraph breaks"], a: 0 },
        { q: "A critical lens is...", options: ["a perspective for analyzing", "a magnifying glass", "a title"], a: 0 }
      ]
    },
    {
      title: "Essay and Thesis Writing",
      summary: "Write university-level essays with synthesis.",
      lesson: [
        { t: "p", text: "A university-level essay needs a strong, arguable thesis and careful use of evidence from multiple sources." },
        { t: "key", text: "Synthesis means combining ideas from different sources into your own argument — not summarizing them one by one. You show how sources relate, agree, or conflict." },
        { t: "example", title: "Worked example", text: "Weak: 'Source A says X. Source B says Y.' Strong: 'While A argues X, B's evidence suggests Y, revealing a deeper tension that neither fully resolves.'" },
        { t: "p", text: "Academic style is formal and precise. Avoid casual language, state claims clearly, and support every claim with evidence and reasoning." }
      ],
      quiz: [
        { q: "Synthesis means...", options: ["combining ideas from sources", "copying one source", "listing facts"], a: 0 },
        { q: "Academic style is...", options: ["formal and precise", "casual", "slang-heavy"], a: 0 },
        { q: "A strong thesis is...", options: ["arguable and specific", "obvious", "a list"], a: 0 }
      ]
    },
    {
      title: "Research Project",
      summary: "Plan and complete an evidence-based research project.",
      lesson: [
        { t: "p", text: "A research project starts with a focused question and ends with evidence-based findings. The question drives everything that follows." },
        { t: "key", text: "The steps: form a focused question → gather and evaluate sources → analyze the information → present findings with proper citations." },
        { t: "example", title: "Worked example", text: "Weak question: 'What about climate change?' Strong question: 'How do urban heat islands affect low-income neighbourhoods in major Canadian cities?'" },
        { t: "p", text: "Evaluate sources for credibility and relevance before using them. Present findings in an organized way — introduction, evidence-based body, and a conclusion that answers your question." }
      ],
      quiz: [
        { q: "A research project starts with...", options: ["a focused question", "a random topic", "the conclusion"], a: 0 },
        { q: "Evaluating sources means...", options: ["checking credibility and relevance", "accepting all", "ignoring authors"], a: 0 },
        { q: "Presenting findings should...", options: ["be organized and clear", "be confusing", "skip the conclusion"], a: 0 }
      ]
    },
    {
      title: "Communication and Media",
      summary: "Analyze and create effective communication.",
      lesson: [
        { t: "p", text: "Effective communication is always shaped by audience and purpose. The same information is expressed differently for different readers." },
        { t: "key", text: "Analyze any message by asking: who created it, why, for whom, and with what techniques. These questions reveal how the message works." },
        { t: "example", title: "Worked example", text: "A public-health poster and a scientific journal article may report the same finding, but the poster uses simple language and visuals for the public, while the article uses technical language for experts." },
        { t: "p", text: "Creating effective communication means choosing the right tone, structure, and level of detail for your audience and goal." }
      ],
      quiz: [
        { q: "Audience and purpose shape...", options: ["how you communicate", "the weather", "nothing"], a: 0 },
        { q: "Effective communication is...", options: ["clear and audience-focused", "confusing", "long"], a: 0 },
        { q: "You analyze a message by asking...", options: ["who, what, why, and for whom", "only when", "nothing"], a: 0 }
      ]
    },
    {
      title: "Speaking and Listening",
      summary: "Communicate at a professional level.",
      lesson: [
        { t: "p", text: "Professional communication requires clear, confident, well-structured speaking and active, critical listening." },
        { t: "key", text: "In a seminar or meeting, engage with others' ideas. Synthesizing a discussion means pulling together its key points into a coherent summary." },
        { t: "example", title: "Worked example", text: "Synthesizing: 'Building on what A said about cost and B said about access, the main thread is that both agree on the problem but differ on the solution.'" },
        { t: "p", text: "Active listening means focusing on the speaker, understanding their argument, and responding to the substance of what they said — not just waiting for your turn." }
      ],
      quiz: [
        { q: "A seminar involves...", options: ["group discussion", "one person only", "no talking"], a: 0 },
        { q: "Professional speaking requires...", options: ["clarity and confidence", "mumbling", "no eye contact"], a: 0 },
        { q: "Synthesizing a discussion means...", options: ["combining key points", "ignoring others", "repeating one idea"], a: 0 }
      ]
    }
  ],
  science: [
    {
      title: "Biology: Genetics and Heredity",
      summary: "Learn how traits are inherited through DNA.",
      lesson: [
        { t: "p", text: "Genetics is the study of how traits pass from parents to offspring. The instructions are carried in DNA, which is organized into genes." },
        { t: "key", text: "Alleles are different versions of a gene. A dominant allele shows its trait with just one copy, while a recessive allele shows only when two copies are present." },
        { t: "example", title: "Worked example", text: "If B (brown eyes) is dominant and b (blue) is recessive, a person with Bb has brown eyes. Two Bb parents have a 25% chance of a bb (blue-eyed) child." },
        { t: "p", text: "A Punnett square is a grid that predicts the possible gene combinations in offspring from two parents." }
      ],
      quiz: [
        { q: "DNA contains...", options: ["genetic information", "only proteins", "no information"], a: 0 },
        { q: "A dominant trait...", options: ["appears even with one copy", "never appears", "needs two copies"], a: 0 },
        { q: "A Punnett square predicts...", options: ["possible offspring traits", "the weather", "nothing"], a: 0 }
      ]
    },
    {
      title: "Biology: Human Body Systems",
      summary: "Learn how body systems maintain homeostasis.",
      lesson: [
        { t: "p", text: "Body systems work together to maintain homeostasis — a stable internal environment despite changes outside." },
        { t: "key", text: "The nervous system sends fast electrical signals; the endocrine system releases slower chemical signals called hormones. Together they regulate the body." },
        { t: "example", title: "Worked example", text: "When you are cold, the nervous system triggers shivering, and the endocrine system releases hormones that raise your metabolism — both working to warm you up." },
        { t: "p", text: "Homeostasis involves feedback loops: a change is detected, a response counters it, and the body returns to its set point." }
      ],
      quiz: [
        { q: "Homeostasis is...", options: ["keeping internal balance", "growing", "sleeping"], a: 0 },
        { q: "The nervous system...", options: ["sends electrical signals", "digests food", "pumps blood"], a: 0 },
        { q: "Hormones are produced by the...", options: ["endocrine system", "skeleton", "skin"], a: 0 }
      ]
    },
    {
      title: "Chemistry: Equilibrium and Acids/Bases",
      summary: "Learn about equilibrium and the pH scale.",
      lesson: [
        { t: "p", text: "Chemical equilibrium occurs when the forward and reverse reactions happen at the same rate, so the amounts of reactants and products stay constant." },
        { t: "key", text: "The pH scale (0 to 14) measures how acidic or basic a solution is: below 7 is acidic, 7 is neutral, and above 7 is basic (alkaline)." },
        { t: "example", title: "Worked example", text: "Lemon juice has a pH of about 2 (acidic), pure water has a pH of 7 (neutral), and baking soda solution has a pH of about 9 (basic)." },
        { t: "p", text: "Acids release H⁺ ions in water; bases release OH⁻ ions. Neutralization happens when an acid and a base react to form water and a salt." }
      ],
      quiz: [
        { q: "The pH scale ranges from...", options: ["0 to 14", "0 to 7", "1 to 10"], a: 0 },
        { q: "A pH below 7 is...", options: ["acidic", "basic", "neutral"], a: 0 },
        { q: "A pH above 7 is...", options: ["basic (alkaline)", "acidic", "neutral"], a: 0 }
      ]
    },
    {
      title: "Physics: Momentum and Energy",
      summary: "Learn about momentum and conservation laws.",
      lesson: [
        { t: "p", text: "Momentum is a measure of an object's motion, equal to mass times velocity: p = mv. It has both size and direction." },
        { t: "key", text: "In a closed system (no external forces), total momentum is conserved — the momentum before an event equals the momentum after it." },
        { t: "example", title: "Worked example", text: "A 1000 kg car moving at 20 m/s has momentum p = 1000 × 20 = 20,000 kg·m/s." },
        { t: "p", text: "Energy is also conserved in a closed system: it changes form (kinetic, potential, thermal) but is never created or destroyed." }
      ],
      quiz: [
        { q: "Momentum = ...", options: ["mass × velocity", "mass ÷ velocity", "mass + velocity"], a: 0 },
        { q: "In a closed system, momentum is...", options: ["conserved", "lost", "doubled"], a: 0 },
        { q: "Energy in a closed system is...", options: ["conserved", "created", "destroyed"], a: 0 }
      ]
    },
    {
      title: "Physics: Electromagnetism and Modern Physics",
      summary: "Learn about electromagnetic waves and quantum ideas.",
      lesson: [
        { t: "p", text: "Light is electromagnetic radiation — a wave of electric and magnetic fields. It is part of the electromagnetic spectrum." },
        { t: "key", text: "The spectrum ranges from long-wavelength radio waves to short-wavelength gamma rays, and includes microwaves, infrared, visible light, ultraviolet, and X-rays in between." },
        { t: "example", title: "Worked example", text: "X-rays have very short wavelengths and high energy, which is why they can pass through soft tissue but are absorbed by bone." },
        { t: "p", text: "Modern physics includes quantum theory, which describes the behaviour of matter and energy at the very small scale of atoms and particles." }
      ],
      quiz: [
        { q: "Light is a form of...", options: ["electromagnetic radiation", "sound", "matter"], a: 0 },
        { q: "The electromagnetic spectrum includes...", options: ["radio waves to gamma rays", "only visible light", "only X-rays"], a: 0 },
        { q: "Quantum theory describes...", options: ["behaviour of very small particles", "large objects only", "weather"], a: 0 }
      ]
    }
  ],
  social: [
    {
      title: "Ideologies",
      summary: "Understand major political ideologies.",
      lesson: [
        { t: "p", text: "An ideology is a set of beliefs about how society should be organized and governed. It shapes how people think about rights, the economy, and the role of government." },
        { t: "key", text: "Liberalism values individual rights and freedom. Conservatism values tradition and stability. Socialism values collective ownership and greater equality." },
        { t: "example", title: "Worked example", text: "On the role of government: a liberal might favour free markets with some regulation, while a socialist might favour public ownership of essential services like health care." },
        { t: "p", text: "Ideologies are not rigid boxes — people and parties often combine elements of several, and beliefs fall along a spectrum from left to right." }
      ],
      quiz: [
        { q: "Liberalism generally values...", options: ["individual rights and freedom", "strict control", "no rights"], a: 0 },
        { q: "Conservatism generally values...", options: ["tradition and stability", "rapid change", "anarchy"], a: 0 },
        { q: "Socialism generally values...", options: ["social ownership and equality", "total monarchy", "individualism only"], a: 0 }
      ]
    },
    {
      title: "Liberalism in History",
      summary: "Learn how liberalism developed from the Enlightenment.",
      lesson: [
        { t: "p", text: "Liberalism grew out of the Enlightenment, a period that emphasized reason, science, and the rights of individuals." },
        { t: "key", text: "Classical liberalism emphasized individual freedom and limited government. These ideas shaped modern democracies and written constitutions." },
        { t: "example", title: "Worked example", text: "Enlightenment thinker John Locke argued that people have natural rights to life, liberty, and property — ideas that influenced democratic constitutions around the world." },
        { t: "p", text: "Over time liberalism evolved: modern liberalism accepts a larger role for government in protecting rights and reducing inequality, while still valuing individual freedom." }
      ],
      quiz: [
        { q: "Liberalism grew from...", options: ["the Enlightenment", "the Stone Age", "feudalism only"], a: 0 },
        { q: "Classical liberalism emphasized...", options: ["individual freedom and limited government", "absolute monarchy", "no rights"], a: 0 },
        { q: "Liberalism influenced...", options: ["modern democracies", "nothing", "only monarchies"], a: 0 }
      ]
    },
    {
      title: "Responses to Liberalism",
      summary: "Learn how other ideologies respond to liberalism.",
      lesson: [
        { t: "p", text: "Several ideologies emerged partly as responses to liberalism's emphasis on the individual and on free markets." },
        { t: "key", text: "Collectivist ideologies, such as socialism and communism, emphasize the group over the individual, arguing that liberalism overlooks inequality and the needs of the community." },
        { t: "example", title: "Worked example", text: "A common critique is that pure individualism can ignore poverty and communal needs — the reason socialists argue for collective ownership and stronger social safety nets." },
        { t: "p", text: "These debates define the political spectrum: placing more weight on the individual moves you toward one end, more weight on the collective toward the other." }
      ],
      quiz: [
        { q: "Some critics argue liberalism...", options: ["overemphasizes individualism", "is perfect", "has no flaws"], a: 0 },
        { q: "Collectivist ideologies emphasize...", options: ["the group over the individual", "the individual over all", "nothing"], a: 0 },
        { q: "The political spectrum ranges from...", options: ["left to right", "top to bottom", "no range"], a: 0 }
      ]
    },
    {
      title: "Ideologies in the Modern World",
      summary: "See how ideologies shape today's politics.",
      lesson: [
        { t: "p", text: "Ideologies continue to shape political parties, government policies, and global politics in the modern world." },
        { t: "key", text: "Political parties are usually organized around an ideology. Understanding ideology helps you evaluate policies and political arguments." },
        { t: "example", title: "Worked example", text: "Debates over taxation and welfare often reflect deeper ideological differences about how large a role government should play in the economy and in people's lives." },
        { t: "p", text: "Being able to name and compare ideologies makes you a more informed citizen and a sharper evaluator of the news and political speech." }
      ],
      quiz: [
        { q: "Political parties are often based on...", options: ["ideologies", "weather", "nothing"], a: 0 },
        { q: "Ideologies influence...", options: ["laws and policies", "only culture", "nothing"], a: 0 },
        { q: "Understanding ideologies helps you...", options: ["evaluate political ideas", "ignore politics", "stay uninformed"], a: 0 }
      ]
    }
  ]
};
