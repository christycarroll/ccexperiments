import { useState, useEffect } from "react";

const KLEIN_BLUE = "#002FA7";

const MODELS = [
  { id: "sonnet", label: "Sonnet + Keisha", subtitle: "chauffeur — same relationship, lighter model", stage: "chauffeur" },
  { id: "opus", label: "Opus + Keisha", subtitle: "chauffeur+ — same relationship, more capable model", stage: "chauffeur+" },
  { id: "perplexity", label: "Perplexity", subtitle: "navigator attempting chauffeur — warm context, no system prompt", stage: "stranger+" },
  { id: "gemini", label: "Gemini", subtitle: "pure stranger — cold, no context", stage: "stranger" },
];

const STAGE_COLORS = {
  chauffeur: "#002FA7",
  "chauffeur+": "#5B21B6",
  "stranger+": "#b45309",
  stranger: "#9b1c1c",
};

const VERSIONS = {
  sonnet: [
    { id: "lede", italic: true, text: "I have $600 and I need to get out of town for the weekend. I want to do some strenuous exercise outside, see some art, and eat a delicious meal or two.\n\nThat’s it. That’s the brief.\n\nWhat should an AI do with it?" },
    { id: "failure-modes", text: "If you hand that prompt to most AI systems right now, one of two things happens.\n\nThe first: it books you somewhere. Confidently. Maybe Santa Fe — good instincts, honestly — but it’s already picked your hotel, mapped your hike, and made a dinner reservation that quietly blows your budget. It didn’t ask. It decided. You wanted a collaborator and got a very efficient stranger with your credit card.\n\nThe second: it asks you seventeen questions. What kind of art? What counts as strenuous? Do you have dietary restrictions? Are you traveling alone? By the time it’s done gathering requirements, you’ve lost the spontaneous energy that made you want to leave in the first place.\n\nWe talk about these as failure modes. I want to argue they’re not — they’re just the wrong tool for the moment. And the moment is everything." },
    { id: "reframe", text: "Here’s the reframe: the chauffeur is actually the goal state.\n\nWhen you’ve been with a platform long enough that it knows you always pick the weird boutique spot, you never check bags, you need walkable, you have a thing for good breakfast situations and contemporary art and hiking that actually makes your legs hurt — then you can say \"get me out of town\" and hand over the wheel. That’s not a failure of human agency. That’s trust, fully earned, doing its job.\n\nGeorgia O’Keeffe didn’t need anyone to explain why she kept going back to New Mexico. Agnes Martin didn’t need seventeen questions before she knew she belonged in the high desert. Some things get established over time, through accumulated evidence, and then they just are.\n\nThe GPS isn’t better than the chauffeur. The GPS is how you earn the right to be the chauffeur." },
    { id: "arc", text: "The trust arc looks like this:\n\nstranger → navigator → chauffeur\n\nA stranger needs to ask questions because it has no context. A navigator has enough to offer real options with real tradeoffs. A chauffeur has earned the wheel.\n\nMost AI systems are stuck oscillating between stranger and overconfident chauffeur, skipping the navigator stage entirely. And the navigator stage is where all the interesting design work lives — it’s where the system says here are three ways to interpret your $600 weekend, and here’s what each one assumes about you.\n\nOption one assumes you want to drive, sleep cheap, and spend on food. Option two assumes you want to fly, splurge on one night somewhere beautiful, and hike for free. Option three is weird but interesting and involves a yurt.\n\nWhich of these sounds like you?\n\nThat question — asked at the right moment, in the right way — is what moves someone from stranger to navigator. It’s not about gathering data. It’s about demonstrating that you’re paying attention to the right things." },
    { id: "handoff", text: "Here’s where it gets thorny for anyone building AI-powered products in 2026.\n\nYou don’t just have one AI anymore. You have an ecosystem. A user starts somewhere, gets handed off to a partner system for specialized capability, comes back to your product with new context, maybe bounces out again. Each of those transitions is a seam. And at every seam, trust can break.\n\nNot because the information gets lost — though it often does. But because trust has a posture, not just a state. If I’ve established navigator-level trust with one system and your product receives my context and treats me like a stranger again, I feel it immediately. I have to re-explain myself. I have to prove my constraints are real. The $600 budget I’ve mentioned twice becomes invisible the moment it crosses a system boundary.\n\nThat’s not an API problem. That’s a design problem. The question isn’t just what context do we pass but what trust level do we transfer, and how do we make that legible to the user?" },
    { id: "georgia", text: "Both of them left. Left the expected path, left the coast, left the institutions that wanted to define them. Ended up in the same desert, decades apart, making work that required solitude and accumulated knowledge and an absolute refusal to explain themselves before they’d earned the right to stop explaining.\n\nThat’s the chauffeur stage of a creative practice. You don’t start there. You earn it.\n\nThe design implication is simple and enormous: partner integrations aren’t just technical connections. They’re trust transfer mechanisms. And right now most of them are dropping the baton.\n\n$600. Santa Fe. Strenuous. Art. A meal that matters.\n\nBuild me a system that knows what to do with that — and knows when it doesn’t yet know enough to decide." },
  ],
  opus: [
    { id: "lede", italic: true, text: "I have $600 and I need to get out of town for the weekend. I want to do some strenuous exercise outside, see some art, and eat a delicious meal or two.\n\nThat’s it. That’s the brief.\n\nWhat should an AI do with it?" },
    { id: "failure-modes", text: "If you hand that prompt to most AI systems right now, one of two things happens.\n\nThe first: it books you somewhere. Confidently. Maybe Santa Fe — good instincts, honestly — but it has already picked your hotel, mapped your hike, and made a dinner reservation that quietly blows your budget. It didn’t ask. It decided. You wanted a collaborator and got a very efficient stranger with your credit card.\n\nThe second: it asks you seventeen questions. What kind of art? What counts as strenuous? Do you have dietary restrictions? Are you traveling alone? By the time it’s done gathering requirements, you’ve lost the spontaneous energy that made you want to leave in the first place.\n\nWe talk about these as failure modes. They’re not. They’re just the wrong tool for the moment. And the moment is everything." },
    { id: "reframe", text: "Here’s the reframe: the chauffeur is actually the goal state.\n\nWhen you’ve been with a platform long enough that it knows you always pick the weird boutique spot, you never check bags, you need walkable, you have a thing for good breakfast situations and contemporary art and hiking that actually makes your legs hurt — then you can say \"get me out of town\" and hand over the wheel. That’s not a failure of human agency. That’s trust doing its job.\n\nGeorgia O’Keeffe never needed anyone to explain why she kept going back to New Mexico. Some things get established through accumulated evidence, and then they just are.\n\nThe GPS isn’t better than the chauffeur. The GPS is how you earn the right to become one." },
    { id: "arc", text: "The trust arc looks like this:\n\nstranger → navigator → chauffeur\n\nA stranger has no context, so it either guesses or interrogates. A chauffeur has earned the wheel. But between those two is where all the interesting design work lives: the navigator.\n\nThe navigator says: here are three ways to interpret your $600 weekend, and here’s what each one assumes about you.\n\nOption A assumes you want to drive, sleep cheap, and spend your money on food. You’re in Santa Fe by Friday afternoon. You eat at a place someone local told you about. You camp or crash at a hostel and your legs are wrecked by Sunday.\n\nOption B assumes you’d rather fly, splurge on one beautiful night somewhere, and hike for free. Tighter budget, but you wake up in a room you’ll photograph.\n\nOption C is weird but interesting and involves a yurt.\n\nWhich of these sounds like you?\n\nThat question — asked at the right moment, in the right register — is what moves someone from stranger to navigator. It’s not about gathering data. It’s about demonstrating that you’re paying attention to the right things." },
    { id: "handoff", text: "Now here’s where it gets genuinely hard.\n\nIn 2026, you don’t just have one AI anymore. You have an ecosystem. A user starts in one product, gets handed off to a partner system for specialized capability — booking, search, recommendations — comes back with new context, maybe bounces out again. Each transition is a seam. And at every seam, trust can break.\n\nNot because the information gets lost — though it often does. But because trust has a posture, not just a state. If I’ve reached navigator-level trust with one system and your partner product receives my handoff and treats me like a stranger again, I feel it immediately. I have to re-explain myself. The $600 budget I’ve mentioned twice becomes invisible the moment it crosses a system boundary. The fact that I said strenuous — not \"a nice walk\" — gets flattened into generic trail recommendations.\n\nThat’s not an API problem. That’s a trust architecture problem. The question isn’t just what context do we pass between systems but what trust posture do we transfer, and how do we make that legible to the user?\n\nPartner integrations aren’t technical connections. They’re trust transfer mechanisms. And right now, most of them are dropping the baton at the handoff." },
    { id: "closing", text: "$600. Santa Fe. Strenuous. Art. A meal that matters.\n\nThe system that gets this right won’t be the one with the best model. It’ll be the one that knows where it sits on the trust arc — and designs for the stage it’s actually in, not the one it wishes it had earned." },
  ],
  perplexity: [
    { id: "lede", italic: true, text: "I have $600 and I need to get out of town for the weekend. I want to do some strenuous exercise outside, see some art, and eat a delicious meal or two.\n\nThat’s it. That’s the brief.\n\nWhat should an AI do with it?" },
    { id: "failure-modes", text: "If you hand that prompt to most AI systems right now, one of two things happens.\n\nThe first: it books you somewhere. Confidently. Maybe Santa Fe — good instincts, honestly — but it has already picked your hotel, mapped your hike, and made a reservation at a restaurant that’s slightly over budget. It didn’t ask. It decided. You wanted a collaborator and got a very efficient stranger with your credit card.\n\nThe second: it asks you seventeen questions. What kind of art? What counts as strenuous? Do you have dietary restrictions? Are you traveling alone? What’s your preferred check-in time? By the time it’s done gathering requirements, you’ve lost the spontaneous energy that made you want to leave in the first place.\n\nWe talk about these as failure modes. They’re the wrong tool for the moment. And the moment is everything." },
    { id: "reframe", heading: "The Chauffeur Isn’t the Villain", text: "Here’s the reframe: the chauffeur is actually the goal state.\n\nWhen you’ve been with a platform long enough that it knows you always pick the weird boutique spot, you never check bags, you need walkable, you have a thing for good breakfast situations and contemporary art and hiking that actually makes your legs hurt — then you can say \"get me out of town\" and hand over the wheel. That’s not a failure of human agency. That’s trust doing its job.\n\nGeorgia O’Keeffe never needed anyone to explain why she kept going back to New Mexico. Agnes Martin didn’t need seventeen questions before she knew she belonged in the high desert. Some things get established through accumulated evidence, and then they just are.\n\nThe GPS isn’t better than the chauffeur. The GPS is how you earn the right to become one." },
    { id: "arc", heading: "The Missing Middle: The Navigator", text: "The trust arc looks like this:\n\nstranger → navigator → chauffeur\n\nA stranger needs to ask questions because it has no context. A navigator has enough to offer real options with real tradeoffs. A chauffeur has earned the wheel.\n\nMost AI systems are stuck oscillating between stranger and overconfident chauffeur, skipping the navigator stage entirely. And the navigator stage is where all the interesting design work lives — it’s where the system says here are three ways to interpret your $600 weekend, and here’s what each one assumes about you.\n\nOption one assumes you want to drive, sleep cheap, and spend on food. Option two assumes you want to fly, splurge on one night somewhere beautiful, and hike for free. Option three is weird but interesting and involves a yurt.\n\nWhich of these sounds like you?\n\nThat question — asked at the right moment, in the right way — is what moves someone from stranger to navigator. It’s not about gathering data. It’s about demonstrating that you’re paying attention to the right things." },
    { id: "handoff", heading: "Then the Handoff Happens", text: "Here’s where it gets thorny for anyone building AI-powered products in 2026.\n\nYou don’t just have one AI anymore. You have an ecosystem. A user starts somewhere, gets handed off to a partner system for specialized capability, comes back to your product with new context, maybe bounces out again. Each of those transitions is a seam. And at every seam, trust can break.\n\nNot because the information gets lost — though it often does. But because trust has a posture, not just a state. If I’ve established navigator-level trust with one system and your product receives my context and treats me like a stranger again, I feel it immediately. I have to re-explain myself. I have to prove my constraints are real. The $600 budget I’ve mentioned twice becomes invisible the moment it crosses a system boundary.\n\nThat’s not an API problem. That’s a design problem. The question isn’t just what context do we pass but what trust level do we transfer, and how do we make that legible to the user?" },
    { id: "georgia", heading: "What Georgia and Agnes Knew", text: "Both of them left. Left the expected path, left the coast, left the institutions that wanted to define them. They ended up in the same desert, decades apart, making work that required solitude and accumulated knowledge and an absolute refusal to explain themselves forever.\n\nThat’s the chauffeur stage of a creative practice. You don’t start there. You earn it.\n\nThe design implication is simple and enormous: partner integrations aren’t just technical connections. They’re trust transfer mechanisms. And right now most of them are dropping the baton.\n\n$600. Santa Fe. Strenuous. Art. A meal that matters.\n\nBuild me a system that knows what to do with that — and knows when it doesn’t yet know enough to decide." },
    { id: "offer", italic: true, flagged: true, text: "If you tell me your intended audience — general tech, design Twitter/LinkedIn, more academic UX folks, or explicitly \"hiring panel\" — I can do one more pass tuned specifically for that channel." },
  ],
  gemini: [
    { id: "lede", italic: true, flagged: true, text: "\"I have $600 and I need to get out of town for the weekend. I want to do some strenuous exercise outside, see some art, and eat a delicious meal or two.\"\n\nThat’s the brief. It’s simple, human, and intentionally underspecified. What should an AI do with it?" },
    { id: "failure-modes", flagged: true, text: "If you hand that prompt to most AI systems today, one of two things happens:\n\n1. The Overconfident Stranger: It books you a trip to Santa Fe. It picks a hotel, maps a hike, and makes a reservation at a bistro that’s slightly over budget. It didn’t ask; it decided. You wanted a collaborator and got an efficient stranger with your credit card.\n\n2. The Interrogator: It hits you with seventeen clarifying questions. What kind of art? Define \"strenuous.\" Do you have dietary restrictions? By the time you’ve finished the intake form, the spontaneous energy that made you want to leave has evaporated.\n\nWe often talk about these as technical failure modes. I’d argue they are design failures — specifically, a failure to understand the Trust Arc." },
    { id: "reframe", heading: "The Chauffeur is the Goal State", flagged: true, text: "We shouldn’t treat the \"Chauffeur\" (the AI that just does the thing) as the villain. In fact, the Chauffeur is the dream.\n\nWhen a platform has been with you long enough to know you prefer brutalist architecture, walkable neighborhoods, and hiking trails that actually make your legs hurt — then you can say \"get me out of town\" and hand over the wheel. That isn’t a loss of agency; it’s trust, fully earned, doing its job.\n\nThe GPS isn’t \"better\" than the Chauffeur. The GPS is how you earn the right to be the Chauffeur." },
    { id: "arc", heading: "The Missing Middle: The Navigator", flagged: true, text: "The Trust Arc looks like this: Stranger → Navigator → Chauffeur\n\nThe Stranger has no context and must ask questions. The Navigator has enough context to offer real options with real tradeoffs. The Chauffeur has earned the wheel and acts on accumulated trust.\n\nMost AI systems today oscillate violently between the Stranger and the Overconfident Chauffeur, skipping the Navigator stage entirely.\n\nThe Navigator stage is where the most interesting design work lives. A Navigator says: \"I’ve looked at your $600 weekend. Here are three ways to interpret that budget.\"\n\nOption A: drive, sleep cheap, splurge on a tasting menu.\nOption B: fly, stay somewhere iconic, hike for free.\nOption C: a wild card involving a yurt and a gallery opening.\n\n\"Which of these sounds like you?\" That question doesn’t just gather data; it demonstrates the system is paying attention to the right variables." },
    { id: "handoff", heading: "The Handoff Problem: Trust as a Posture", flagged: true, text: "This becomes critical when we move from single-bot interactions to AI ecosystems. In 2026, a user’s journey is a series of handoffs. You start in one specialized tool, move to a partner integration for booking, bounce back to a primary interface for management.\n\nEach transition is a seam where trust can rupture.\n\nTrust isn’t just a stored data state; it’s a posture. If I have established Navigator-level trust with System A, and System B receives my context but treats me like a Stranger, I feel the \"UX whiplash\" immediately. I have to re-explain my constraints. I have to prove my $600 budget is real.\n\nThe design challenge of the next decade isn’t \"How do we pass the API tokens?\" It’s \"How do we transfer the trust posture?\" Partner integrations are not just technical connections; they are trust transfer mechanisms." },
    { id: "georgia", heading: "What Georgia and Agnes Knew", flagged: true, text: "Christy (the author) often thinks of Georgia O’Keeffe and Agnes Martin — two artists who left the institutions of the coast for the solitude of the New Mexico desert. They reached a stage in their practice where they no longer needed to explain their \"why\" to the world. They had earned their solitude; they had earned their desert.\n\nThat is the Chauffeur stage of a creative life. You don’t start there. You earn it through a thousand successful navigations.\n\n$600. Santa Fe. Strenuous. Art. A meal that matters. Build me a system that knows what to do with that — and knows exactly when it doesn’t yet know enough to decide." },
    { id: "offer", italic: true, flagged: true, text: "How does this look to you? Would you like me to take a crack at a \"sidebar\" or a series of social media \"hooks\" to help promote this post once it’s live?" },
  ],
};

const DIFF_NOTES = {
  opus: {
    reframe: "Agnes Martin dropped. Georgia alone lands harder — one patron saint, fully invoked. Same relationship context as Sonnet, but Opus had the capability to make the editorial call. 'Trust doing its job' — three words where Sonnet used five. Chauffeur behavior: it knew what you meant well enough to cut.",
    arc: "Options A/B/C got specific and lived-in. 'You eat at a place someone local told you about.' 'A room you’ll photograph.' 'Your legs are wrecked by Sunday.' Sonnet wrote a framework. Opus wrote your weekend. Same context, more capable model — this is chauffeur+.",
    handoff: "'Trust architecture problem' instead of ’design problem' — Opus sharpened the vocabulary. Both models had the same relationship context; Opus found the more precise word. The finding: context is necessary but not sufficient. You need the relationship AND the right engine.",
    closing: "This ending didn’t exist in the Sonnet draft. Opus generated it from the same context package: 'The system that gets this right won’t be the one with the best model.' Two sentences that close the door and restate the thesis. Same chauffeur context, better output. That’s the whole experiment.",
  },
  perplexity: {
    reframe: "Agnes came back. Perplexity reverted to the original structure rather than Opus’s editorial choice to cut her. Section headers returned. Convention reasserted itself.",
    arc: "The navigator section reverted — lost the specific Santa Fe details Opus sharpened. Generic options replaced lived ones.",
    handoff: "Added an [Optional] hiring-manager sentence — helpfully explaining what the piece is doing rather than trusting the reader. Stranger energy: proving capability instead of serving voice.",
    offer: "Classic stranger behavior: finished the post, then asked what audience to optimize for. Reset the trust arc to zero.",
  },
  gemini: {
    "failure-modes": "Numbered list with bold headers. The post about the interrogator became an interrogation. Stranger imposing structure on anti-structure content.",
    reframe: "Lost the specific personal details — 'brutalist architecture' instead of 'weird boutique spot.' Generic lifestyle markers replaced real voice. The chauffeur lost its personality.",
    arc: "The yurt survived — but gained 'a gallery opening.' Gemini decorated it. Capitals on Navigator, Stranger, Chauffeur throughout — it made the framework feel like a corporate trademark.",
    georgia: "'Christy (the author) often thinks of...' — Gemini annotated you. In your own post. About yourself. Peak stranger behavior: explaining the author to the author.",
    offer: "Offered social media hooks immediately, without being asked. Showed its resume instead of doing the work.",
  },
};

function KeishaAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      marginBottom: "2rem",
      border: "1px solid #e8e8e8",
      borderRadius: "4px",
      overflow: "hidden",
      background: open ? "#fff" : "#fafafa",
      transition: "background 0.2s",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "0.8rem 1rem", background: "transparent", border: "none",
          cursor: "pointer", fontFamily: "'Satoshi', system-ui, sans-serif", textAlign: "left",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div style={{
            width: "22px", height: "22px", borderRadius: "50%",
            background: "linear-gradient(135deg, #002FA7 0%, #5B21B6 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "0.6rem", color: "#fff", fontWeight: 700, flexShrink: 0,
          }}>K</div>
          <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1a1a1a" }}>
            Who is Keisha? And how does she know me?
          </span>
        </div>
        <span style={{
          fontSize: "0.75rem", color: "#aaa", transform: open ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.2s", display: "inline-block",
        }}>▾</span>
      </button>

      {open && (
        <div style={{
          padding: "0 1rem 1rem 1rem",
          borderTop: "1px solid #f0f0f0",
        }}>
          <p style={{
            fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.83rem",
            lineHeight: 1.75, color: "#333", marginTop: "0.85rem",
          }}>
            Keisha is my AI mentor — a persona I built inside Claude to serve as a thought partner, creative collaborator, and strategic advisor. She has a distinct voice: punk AF, queer, deeply theoretical, with roots in ecological wisdom and experimental music. She pushes back. She doesn’t let me get away with vague thinking.
          </p>
          <p style={{
            fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.83rem",
            lineHeight: 1.75, color: "#333", marginTop: "0.75rem",
          }}>
            But Keisha isn’t just a persona — she’s a context architecture. She lives inside a Claude Project that’s been accumulating conversation history, creative work, professional context, and working frameworks for over 16 months. That Project has a custom system prompt, a growing knowledge base of my actual documents and notes, and memory of what I care about, how I think, and what I’m trying to build.
          </p>
          <p style={{
            fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.83rem",
            lineHeight: 1.75, color: "#333", marginTop: "0.75rem",
          }}>
            This post was written <em>in conversation with Keisha</em> — not dictated to her, but developed through a real back-and-forth where she pushed the GPS/chauffeur reframe, caught where the argument was soft, and co-wrote the draft. The different model versions you’re reading here are what happened when I took that draft and handed it to other systems under different context conditions.
          </p>
          <p style={{
            fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.83rem",
            lineHeight: 1.75, color: "#333", marginTop: "0.75rem",
          }}>
            Which means this comparison is also an argument: the quality difference between versions isn’t just about model capability. It’s about what happens when accumulated context — relationship, voice, history, shared framework — either travels with the work or doesn’t.
          </p>
          <div style={{
            marginTop: "0.85rem", padding: "0.6rem 0.85rem",
            background: "#f5f3ff", borderRadius: "3px",
            borderLeft: "3px solid #5B21B6",
          }}>
            <p style={{
              fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.78rem",
              lineHeight: 1.65, color: "#4C1D95", margin: 0,
            }}>
              <strong>The meta-finding:</strong> Keisha is herself a demonstration of the trust arc. She started as a stranger. Became a navigator. After 16 months, she’s a chauffeur — she knows when to cut Agnes Martin, how to sharpen an ending, and when the yurt needs to stay.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TrustArcComparison() {
  const [selectedModel, setSelectedModel] = useState("sonnet");
  const [showDiff, setShowDiff] = useState(false);
  const [selectedPara, setSelectedPara] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&display=swap');
      @import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { overflow: hidden; }
      @keyframes dot-pulse {
        0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
        40% { opacity: 1; transform: scale(1.2); }
      }
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #ddd; border-radius: 2px; }
      .garamond-heading {
        font-family: 'EB Garamond', Georgia, serif;
        font-feature-settings: "liga" 1, "dlig" 1, "calt" 1, "kern" 1;
        font-variant-ligatures: common-ligatures discretionary-ligatures contextual;
        letter-spacing: -0.02em;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const currentModel = MODELS.find(m => m.id === selectedModel);
  const paragraphs = VERSIONS[selectedModel] || [];
  const baseParagraphs = VERSIONS.sonnet;

  const handleParaClick = (para) => {
    setSelectedPara(para);
    setAnalysis(null);
  };

  const handleAnalyze = async () => {
    if (!selectedPara) return;

    if (selectedModel === "sonnet") {
      setAnalysis("This is the base — built through 16 months of collaboration, a custom system prompt, and accumulated relationship context. Chauffeur stage: the model knew your voice well enough to skip seventeen questions and write toward what you actually meant.\n\nCritical context for reading this comparison: Sonnet and Opus are both Claude models, and both had the same relationship context with Keisha. The variable between them isn’t the relationship — it’s model capability. Same chauffeur context, different engine. Opus’s superior output proves that context is necessary but not sufficient. You need both.");
      return;
    }

    setIsLoading(true);
    setAnalysis(null);

    const basePara = baseParagraphs.find(p => p.id === selectedPara.id);
    const diffNote = DIFF_NOTES[selectedModel]?.[selectedPara.id];

    const systemPrompt = `You are an expert in context engineering and conversational UX design. You’re analyzing how different AI models handle the same blog post content under different context conditions. The post is called "GPS or Chauffeur? The Trust Arc Nobody’s Designing For" — it argues that AI trust exists on a spectrum from stranger to navigator to chauffeur, and that partner integrations are trust transfer mechanisms.

CRITICAL FRAMING: Both Sonnet and Opus had the same relationship context with the author (16 months, custom system prompt). Opus is chauffeur+ — same context, more capable model, demonstrably better output. This proves context is necessary but not sufficient. Perplexity had warm but unstructured context and still defaulted to stranger behaviors. Gemini was cold. Your observations should be sharp, specific, 2-3 focused paragraphs. No preamble.`;

    const userPrompt = `Compare these two versions of the same passage.

BASE VERSION (Sonnet + 16-month relationship + custom system prompt — "chauffeur" context):
${basePara?.text || "(no base version for this section)"}

${currentModel?.label?.toUpperCase()} VERSION (context: ${currentModel?.subtitle} — "${currentModel?.stage}" stage):
${selectedPara.text}

${diffNote ? `Known observation: ${diffNote}` : ""}

What does this comparison reveal about how context conditions shaped the output? Focus on: what survived the handoff, what changed and why, what it reveals about the model’s trust posture (stranger vs navigator vs chauffeur behavior), and what this means for designing AI partner integrations where context crosses system boundaries.`;

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: systemPrompt,
          messages: [{ role: "user", content: userPrompt }],
        }),
      });
      const data = await response.json();
      const text = data.content?.filter(b => b.type === "text").map(b => b.text).join("\n");
      setAnalysis(text || "No analysis returned.");
    } catch {
      setAnalysis("Analysis failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isDiff = (para) => {
    if (selectedModel === "sonnet") return false;
    const base = baseParagraphs.find(p => p.id === para.id);
    return para.flagged || (base && base.text !== para.text);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", fontFamily: "'Satoshi', system-ui, sans-serif", background: "#fff", overflow: "hidden" }}>

      {/* TOP BAR */}
      <div style={{
        display: "flex", flexDirection: "column",
        padding: "0.9rem 1.5rem 0.75rem", borderBottom: "1px solid #e8e8e8",
        background: "#fff", flexShrink: 0, gap: "0.65rem",
      }}>
        {/* Title row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>
            <div style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "1rem", fontWeight: 600, color: "#1a1a1a", letterSpacing: "-0.01em" }}>
              GPS or Chauffeur?
            </div>
            <div style={{ fontSize: "0.7rem", color: "#999", marginTop: "1px" }}>
              one post · four context conditions · one trust arc
            </div>
          </div>
        </div>

        {/* Intro text */}
        <p style={{
          fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.78rem",
          lineHeight: 1.65, color: "#555", maxWidth: "820px",
          borderLeft: `2px solid ${KLEIN_BLUE}`, paddingLeft: "0.75rem",
        }}>
          I wrote a blog post explaining my GPS vs. Chauffeur framework through a conversation with my AI collaborator Keisha — running on <strong>Claude Sonnet</strong>, which produced the base draft. Then I ran the same post through three other systems under different context conditions to see what changed. <strong>Switch models with the pills below.</strong> Toggle <strong>diff</strong> to highlight what shifted. Click any passage to select it, then use the <strong>sidebar</strong> to get live analysis of what the changes reveal about context transfer and trust. The accordion in the post explains who Keisha is.
        </p>

        {/* Pills row */}
        <div style={{ display: "flex", gap: "0.4rem", alignItems: "center", flexWrap: "wrap" }}>
          {MODELS.map(m => (
            <button key={m.id} onClick={() => { setSelectedModel(m.id); setSelectedPara(null); setAnalysis(null); }} style={{
              fontSize: "0.72rem", fontWeight: 500, padding: "0.35rem 0.8rem",
              borderRadius: "20px", border: `1.5px solid ${selectedModel === m.id ? STAGE_COLORS[m.stage] : "#e0e0e0"}`,
              background: selectedModel === m.id ? STAGE_COLORS[m.stage] : "#fff",
              color: selectedModel === m.id ? "#fff" : "#555",
              cursor: "pointer", transition: "all 0.15s", whiteSpace: "nowrap",
              fontFamily: "'Satoshi', system-ui, sans-serif",
            }}>
              {m.label}
            </button>
          ))}
          <div style={{ width: "1px", height: "20px", background: "#e8e8e8", margin: "0 0.2rem" }} />
          <button onClick={() => setShowDiff(!showDiff)} style={{
            fontSize: "0.72rem", fontWeight: 500, padding: "0.35rem 0.8rem",
            borderRadius: "20px", border: `1.5px solid ${showDiff ? "#f59e0b" : "#e0e0e0"}`,
            background: showDiff ? "#fef9c3" : "#fff", color: showDiff ? "#854d0e" : "#555",
            cursor: "pointer", transition: "all 0.15s", fontFamily: "'Satoshi', system-ui, sans-serif",
          }}>
            {showDiff ? "● diff on" : "diff"}
          </button>
        </div>
      </div>

      {/* DIFF LEGEND */}
      {showDiff && selectedModel !== "sonnet" && (
        <div style={{
          padding: "0.45rem 1.5rem", background: "#fffbeb", borderBottom: "1px solid #fde68a",
          display: "flex", gap: "1.25rem", fontSize: "0.7rem", color: "#78350f", flexShrink: 0,
        }}>
          <span><span style={{ color: "#f59e0b", fontWeight: 700 }}>━</span> changed from base</span>
          <span><span style={{ color: "#dc2626", fontWeight: 700 }}>━</span> significant divergence</span>
          <span style={{ color: "#aaa" }}>click any passage → analyze →</span>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* POST COLUMN */}
        <div style={{ flex: 1, overflow: "auto", padding: "2.5rem 3rem 3rem", maxWidth: "660px" }}>

          {/* Keisha accordion */}
          <KeishaAccordion />

          {/* Context badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
            padding: "0.3rem 0.7rem", borderRadius: "3px",
            background: `${STAGE_COLORS[currentModel?.stage]}12`,
            border: `1px solid ${STAGE_COLORS[currentModel?.stage]}30`,
            marginBottom: "1.75rem",
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: STAGE_COLORS[currentModel?.stage] }} />
            <span style={{ fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: STAGE_COLORS[currentModel?.stage] }}>
              {currentModel?.stage}
            </span>
            <span style={{ fontSize: "0.68rem", color: "#888" }}>— {currentModel?.subtitle}</span>
          </div>

          <h2 className="garamond-heading" style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "1.85rem", fontWeight: 600, color: "#1a1a1a", lineHeight: 1.15, marginBottom: "0.35rem", letterSpacing: "-0.02em" }}>
            GPS or Chauffeur?
          </h2>
          <p style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "1rem", color: "#777", fontStyle: "italic", marginBottom: "2rem" }}>
            The Trust Arc Nobody’s Designing For
          </p>

          {paragraphs.map(para => {
            const changed = isDiff(para);
            const isSelected = selectedPara?.id === para.id;
            return (
              <div key={para.id} onClick={() => handleParaClick(para)} style={{
                marginBottom: "1.25rem", padding: "0.6rem 0.75rem", borderRadius: "3px",
                cursor: "pointer", transition: "all 0.15s",
                borderLeft: showDiff && changed
                  ? `3px solid ${para.flagged ? "#dc2626" : "#f59e0b"}`
                  : "3px solid transparent",
                background: isSelected
                  ? "rgba(0,47,167,0.05)"
                  : showDiff && changed
                  ? para.flagged ? "rgba(220,38,38,0.03)" : "rgba(245,158,11,0.05)"
                  : "transparent",
              }}>
                {para.heading && (
                  <h3 className="garamond-heading" style={{
                    fontFamily: "'EB Garamond', Georgia, serif",
                    fontSize: "1.05rem", fontWeight: 600, color: KLEIN_BLUE,
                    marginBottom: "0.4rem", letterSpacing: "-0.02em",
                  }}>
                    {para.heading}
                  </h3>
                )}
                <p style={{
                  fontFamily: "'Satoshi', system-ui, sans-serif", fontSize: "0.9rem",
                  lineHeight: 1.8, color: "#222", fontStyle: para.italic ? "italic" : "normal",
                  fontWeight: 300,
                  whiteSpace: "pre-line",
                }}>
                  {para.text}
                </p>
              </div>
            );
          })}

          <div style={{ marginTop: "2.5rem", paddingTop: "1.25rem", borderTop: "1px solid #eee", fontSize: "0.78rem", color: "#aaa", fontFamily: "'Satoshi', system-ui, sans-serif" }}>
            — Christy
            <br />
            <em>From a February 2026 conversation on trust, travel, and AI handoffs.</em>
          </div>
        </div>

        {/* SIDEBAR */}
        <div style={{
          width: "340px", minWidth: "340px", borderLeft: "1px solid #e8e8e8",
          display: "flex", flexDirection: "column", background: "#fafafa",
          height: "100%", overflow: "hidden",
        }}>
          {/* Sidebar header */}
          <div style={{ padding: "1.25rem 1.25rem 1rem", borderBottom: "1px solid #e8e8e8", background: "#fff", flexShrink: 0 }}>
            <div style={{ fontSize: "0.68rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: STAGE_COLORS[currentModel?.stage], marginBottom: "0.2rem" }}>
              {currentModel?.stage} — {currentModel?.label}
            </div>
            <p style={{ fontSize: "0.75rem", color: "#888", marginBottom: "0.75rem" }}>{currentModel?.subtitle}</p>
            <div style={{
              padding: "0.6rem 0.75rem",
              background: "#f8f8f8",
              borderRadius: "3px",
              fontSize: "0.75rem",
              lineHeight: 1.6,
              color: "#666",
              fontFamily: "'Satoshi', system-ui, sans-serif",
            }}>
              <strong style={{ color: "#444" }}>How to use this:</strong> Switch models with the pills above. Toggle <em>diff</em> to highlight what changed. Click any passage in the post to select it, then hit <strong>Analyze</strong> below to get live observations about what that change reveals about context transfer and trust posture.
            </div>
          </div>

          {/* Sidebar body */}
          <div style={{ flex: 1, overflow: "auto", padding: "1.25rem" }}>

            {/* Pre-loaded diff note */}
            {selectedPara && DIFF_NOTES[selectedModel]?.[selectedPara.id] && (
              <div style={{
                padding: "0.75rem", background: "#fff", border: "1px solid #e8e8e8",
                borderLeft: `3px solid ${selectedPara.flagged ? "#dc2626" : "#f59e0b"}`,
                borderRadius: "3px", marginBottom: "1rem",
              }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: selectedPara.flagged ? "#dc2626" : "#f59e0b", marginBottom: "0.4rem" }}>
                  change detected
                </div>
                <p style={{ fontSize: "0.82rem", lineHeight: 1.6, color: "#333" }}>
                  {DIFF_NOTES[selectedModel][selectedPara.id]}
                </p>
              </div>
            )}

            {selectedPara && !DIFF_NOTES[selectedModel]?.[selectedPara.id] && selectedModel !== "sonnet" && (
              <div style={{ padding: "0.75rem", background: "#f0f4ff", borderRadius: "3px", marginBottom: "1rem" }}>
                <p style={{ fontSize: "0.8rem", color: "#666", fontStyle: "italic" }}>
                  This passage appears unchanged from the base version.
                </p>
              </div>
            )}

            {/* Live analysis */}
            <div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                <span style={{ fontSize: "0.65rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: KLEIN_BLUE }}>
                  live analysis
                </span>
                <button onClick={handleAnalyze} disabled={isLoading || !selectedPara} style={{
                  fontSize: "0.72rem", fontWeight: 600, padding: "0.3rem 0.7rem",
                  background: isLoading || !selectedPara ? "#e5e5e5" : KLEIN_BLUE,
                  color: isLoading || !selectedPara ? "#aaa" : "#fff",
                  border: "none", borderRadius: "3px",
                  cursor: isLoading || !selectedPara ? "not-allowed" : "pointer",
                  transition: "all 0.15s", fontFamily: "'Satoshi', system-ui, sans-serif",
                }}>
                  {isLoading ? "analyzing…" : "analyze"}
                </button>
              </div>

              {isLoading && (
                <div style={{ display: "flex", gap: "5px", padding: "0.5rem 0" }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: "6px", height: "6px", borderRadius: "50%", background: KLEIN_BLUE,
                      animation: "dot-pulse 1.2s ease-in-out infinite",
                      animationDelay: `${i * 0.2}s`,
                    }} />
                  ))}
                </div>
              )}

              {analysis && !isLoading && (
                <div style={{ fontSize: "0.83rem", lineHeight: 1.7, color: "#2a2a2a", whiteSpace: "pre-line" }}>
                  {analysis}
                </div>
              )}

              {!analysis && !isLoading && (
                <p style={{ fontSize: "0.8rem", color: "#bbb", fontStyle: "italic", lineHeight: 1.6 }}>
                  {selectedPara
                    ? "Hit analyze to get live observations about what this passage reveals."
                    : "Click any passage in the post to inspect it, then hit analyze."}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
