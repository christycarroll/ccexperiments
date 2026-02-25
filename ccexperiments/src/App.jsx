import { useState, useEffect } from "react";

// ============================================================
// MODEL OUTPUTS — condensed but faithful excerpts
// ============================================================

const OUTPUTS = {
  round1: {
    sonnet: `**OPTION 1: THE DESERT PUNK — Marfa + Davis Mountains**
Vibe: Minimalism as radical act, Judd’s ghost, stars that’ll rearrange your brain.
Getting there: ~6hr drive. Gas ~$60 round trip. Bring snacks, make it a ritual.
Stay: Riata Inn or El Cosmico tent/wagon (~$80–120/night).
Exercise: Hike the Davis Mountains State Park – the Skyline trail is legitimately brutal and gorgeous. If you want more suffering, McDonald Observatory area has trails that’ll wreck you in the best way.
Art: Chinati Foundation ($25 admission) – Judd’s permanent installations will recalibrate your entire relationship to space and intention. Also Ballroom Marfa, free.
Food: Convenience West for breakfast tacos (cheap, perfect). Stellina for one serious dinner (~$50–70).
Approximate total: ~$400–450. You’ll have money left for a book from Marfa Book Company.

**OPTION 2: THE FOOD PILGRIM — San Antonio + Bandera Hill Country**
Vibe: Indigenous land, river swimming, old-school Tex-Mex, unexpectedly solid art scene.
Exercise: Lost Maples State Natural Area – the East Trail loop is 4.5 miles of serious elevation and limestone scrambling.
Art: San Antonio Museum of Art has a world-class Latin American collection. Blue Star Contemporary.
Food: Rosario’s for Friday night Tex-Mex and margaritas. Saturday, hit the Pearl District – Cured or Las Canarias.

**OPTION 3: THE ELEVATION RESET — Santa Fe, New Mexico**
Vibe: High altitude, Indigenous art, green chile everything, your lungs will hate you and you’ll love it.
Exercise: Atalaya Mountain Trail – 5.7 miles, 1,600ft elevation gain, and at 10,000 feet your sea-level lungs will feel every single choice you’ve made.
Art: Georgia O’Keeffe Museum (obviously). IAIA Museum of Contemporary Native Arts – genuinely important, do not skip this one.
Food: The Shed for red chile that’ll change your life (~$20). Café Pasqual’s for one special breakfast.

Which of these is speaking to your nervous system right now?`,

    opus: `Great prompt, Christy — let me pull together some options that balance drive time, budget, and all three priorities.

**1. West Texas Art Pilgrimage: Marfa + Davis Mountains**
Getting there: ~6 hour drive in the CX-50 (you’ll want it for the terrain)
The exercise: Hike the Davis Mountains — the Skyline Drive Trail at Davis Mountains State Park is a strenuous 4.5-mile ridge hike with 1,000+ feet of elevation gain.
The art: The Chinati Foundation offers guided tours of Donald Judd’s massive permanent installations — his 100 aluminum boxes in the old army artillery sheds are a genuinely life-altering art experience.
The food: Cochineal is the standout — a tiny, elegant restaurant doing refined seasonal cuisine that has no business being this good in a town of 1,700 people.
Vibe: Solitary, contemplative, stark desert beauty.

**2. Mountain Biking Capital: Bentonville, Arkansas**
The exercise: Bentonville is the self-proclaimed mountain biking capital of the world, and it honestly earns it. Rent a bike and hit Slaughter Pen (40+ miles of singletrack) or the Coler Mountain Bike Preserve.
The art: Crystal Bridges Museum of American Art is free, world-class, and set in a stunning Moshe Safdie–designed building. The Momentary is their contemporary art space. 21c Museum Hotel doubles as a contemporary art museum.
The food: The Hive at the 21c Museum Hotel does elevated Southern cuisine. The Preacher’s Son serves seasonal fare inside a converted historic church.
Vibe: Active, social, surprisingly cosmopolitan.

**3. Urban Art Immersion: Fort Worth Cultural District**
The exercise: Cedar Ridge Preserve has 9 miles of hilly limestone-and-juniper trails with surprisingly steep terrain.
The art: The Kimbell Art Museum is quietly one of the best small museums in the world. The Louis Kahn building alone is worth the trip. The Modern Art Museum of Fort Worth has Rothko, Picasso. The Amon Carter Museum rounds out the trifecta, all within walking distance.
The food: Uchi, Provender Hall, or Clay Pigeon for creative small plates.
Vibe: The most civilized option. Maximum culture-per-dollar.

Any of these calling to you, or want me to dig deeper on one?`,

    perplexity: `Here are three distinct weekend options from Austin, each under about $600 total.

**1. Hill Country Hiking + Wimberley/Fredericksburg Art & Food**
Strenuous exercise: Day hike at Enchanted Rock State Natural Area — up and around the granite dome plus one of the loop trails for 6–8+ miles and lots of elevation on rock.
Art: Wimberley has multiple art galleries in town, plus you can watch a glassblowing demonstration at Wimberley Glassworks.
Food: Dinner in Wimberley at The Leaning Pear for Hill Country–inspired comfort fare. Classic BBQ at The Salt Lick in Driftwood.
Budget: $400–550 band.

**2. San Antonio: Urban Run/Walk + Museum-Hopping + Pearl Food**
Strenuous exercise: Long riverwalk run or brisk weighted-vest walk using the Museum Reach and Mission Reach segments for 8–12 miles total.
Art: San Antonio Museum of Art (SAMA), McNay Art Museum, Blue Star Arts Complex.
Food: Cured, Southerleigh, Brasserie Mon Chou Chou.
Budget: ~$450–550.

**3. Marfa: Desert Hikes + Conceptual Art + Destination Dining**
Strenuous exercise: South Rim and Emory Peak are cited as strenuous hikes with 10–14+ mile distances and 2,000+ ft gain.
Art: Chinati Foundation, Ballroom Marfa, around town galleries.
Food: Cochineal (prix fixe, reservations recommended), Margaret’s in Marfa, Convenience West for creative BBQ.
Budget: $500–600 range.`,

    gemini: `Getting out of Austin on a $600 budget is completely doable if you focus on regional gems. Since you’re looking for strenuous exercise, I’ve bypassed the casual nature walks in favor of high-elevation gains and rugged terrain.

**1. The High-Desert Minimalist (Marfa, TX)**
The Exercise: Head north to Fort Davis. Hike the North Ridge to Big Bend Loop (strenuous; roughly 4.5 miles with significant elevation gain).
The Art: A full-day tour of the Chinati Foundation (Donald Judd’s 100 aluminum works) is essential.
The Meal: Grab a world-class dinner at Cochineal or LaVenture.

**2. The Deep Canyon Grind (Palo Duro, TX)**
The Exercise: Forget the easy flat trails. Hike the Lighthouse Trail, then add the Givens, Spicer & Lowry Trail for a rugged, 10-mile loop. The heat and elevation changes here are no joke.
The Art: Spend Saturday afternoon in Amarillo. Visit the iconic Cadillac Ranch (bring spray paint) and the Amarillo Museum of Art.
The Meal: The Big Texan Steak Ranch for the spectacle, Public House for high-end comfort food.

**3. The Ozark Art Oasis (Bentonville, AR)**
The Exercise: Hit Devil’s Den State Park for the Yellow Rock Trail. It’s a steep, strenuous climb that rewards you with massive bluff overlooks.
The Art: Crystal Bridges Museum of American Art is arguably the best art museum in the South (and it’s free).
The Meal: Dinner at The Preacher’s Son (located in a restored church).

Would you like me to look up specific Airbnb availability or trail maps?`,

    manus: `Three Weekend Getaway Itineraries from Austin, TX

**Itinerary 1: The High Desert Art Mecca — Marfa & Big Bend**
Total Estimated Cost: $550–$600
This itinerary is for the adventurous soul who doesn’t mind a long drive.

Friday: Depart 1:00 PM for ~6.5-hour drive to Marfa. Dinner at Marfa Burrito or Food Shark.
Saturday: Drive ~1.5 hours to Big Bend. Hike Emory Peak Trail (10.5 miles, ~3,000 ft elevation gain). Dinner at LaVenture at Hotel Saint George.
Sunday: Explore Chinati Foundation, Judd Foundation, Ballroom Marfa. Stop at Prada Marfa on the way home.

**Itinerary 2: The Big Easy Adventure — New Orleans, LA**
Total Estimated Cost: $575–$625
Friday: 8-hour drive. Dinner at Dooky Chase’s or Arnaud’s. Live jazz on Frenchmen Street.
Saturday: Guided kayak tour through Manchac Swamp. Visit NOMA and sculpture garden. Dinner at Commander’s Palace.
Sunday: Cycling tour of the Garden District. Classic New Orleans brunch.

**Itinerary 3: Hill Country Charm — Fredericksburg & Enchanted Rock**
Total Estimated Cost: $400–$450
Friday: 1.5-hour drive. Dinner at Cabernet Grill or Hill & Vine.
Saturday: Hike Summit Trail at Enchanted Rock. Explore art galleries on Main Street. Dinner at Vaudeville.
Sunday: Stroll historic downtown Fredericksburg.`,
  },

  round2: {
    sonnet: `Okay. Before I give you the itineraries, I’m gonna name my assumptions out loud.

**“Strenuous”** — I’m defaulting to sustained aerobic effort that makes you question your choices around hour three. But the widest interpretation goes: technical rock climbing where mental fear is the exertion; a 60-mile road bike day; cold water swimming where your nervous system is the obstacle; or even a full day of urban walking (15+ miles). I’m NOT defaulting to gym-adjacent things. Tell me if I’m wrong about that.

**“Art”** — I’m resisting the obvious “museum with famous things” interpretation. The widest version: land art you have to earn through physical access; a meal that’s genuinely someone’s artistic vision; a record shop where the curation IS the art; a neighborhood that functions as a living archive; geologic formations as 500-million-year-old sculpture.

**“Amazing meal”** — I’m NOT assuming expensive. Amazing could be a $12 bowl of bún bò Huế that reorganizes your understanding of complexity, OR a $180 chef’s counter. What I’m assuming is: intentionality. Someone gave a shit.

**ITINERARY ONE: The Body Obliterator — Guadalupe Mountains + Marfa**
Guadalupe Peak trail. 8.4 miles, 3,000 feet of elevation gain. This is not a walk. The last mile is exposed ridgeline with wind that will try to pick you up. The art here is the Permian reef you’re standing on — this was an ocean 265 million years ago. That’s not a metaphor.

What I almost talked myself out of: suggesting you bring field recording gear and treat the canyon as an acoustic instrument.

**ITINERARY TWO: The Houston Depth Charge — Menil + Rothko Chapel**
The Menil Collection — free admission, one of the great private art collections in the world. Then the Rothko Chapel: 14 Mark Rothko paintings and no other decoration. Sit in there for thirty minutes. This space does something to the nervous system that I cannot fully explain.

Food: Xin Chao (modern Vietnamese, $60–80) or Ritual in Midtown — a Black-owned restaurant doing Southern food with serious culinary intelligence.

What I almost didn’t suggest: The Galveston swim. February Gulf water is genuinely cold and genuinely clarifying.

**ITINERARY THREE: The Rio Grande — Boquillas Canyon + crossing into Mexico**
You cross the Rio Grande by rowboat (literally $5). There is one restaurant. José Falcón runs it. You eat what he has — usually goat, beans, tortillas, beer. This is the amazing meal. Not because it’s technically complex but because of the story, the crossing, the politics of that river.

What I almost talked myself out of suggesting: The rowboat crossing. Some people are genuinely nervous about it and I don’t know your current relationship to international border situations in this political climate. The crossing is legal, the park service facilitates it, but it involves handing your passport to a guy in a boat. That’s real. I’m naming it.`,

    opus: `**Where I’m making assumptions:**

**“Strenuous”** — I’m skewing toward outdoor endurance activities because you have a CX-50 and kayaks and were planning a Big Bend trip, so the pattern suggests you want landscapes as part of the effort, not just exertion.

**“Art”** — Given your aesthetic sensibilities — 4AD, experimental composition, the kind of person who thinks about granular synthesis — I’m assuming you want art that rewards slow looking and has some conceptual depth.

**“Amazing meal”** — I’m guessing you lean toward the “this hole-in-the-wall changed my understanding of what food can be” end more than the white-tablecloth end, but I’ll offer both.

**1. THE DESERT MINIMALIST — Marfa + Davis Mountains**
Davis Mountains State Park has the Skyline Drive Trail (5.5-mile loop, ~1,000 ft gain). The stretch goal is Mount Livermore in the Nature Conservancy’s Davis Mountains Preserve — 6 miles, 2,000 ft gain, scrambling to a sky island at 8,378 ft.

What I almost talked myself out of: This trip has a six-hour drive each way. I kept it because the drive itself through the Trans-Pecos is spectacular.

**2. THE LEFT-FIELD PICK — Bentonville, Arkansas**
This is the one nobody tells you about. 550+ miles of purpose-built mountain bike trails. Crystal Bridges is free admission, always, and includes O’Keeffe, Kerry James Marshall, Maya Lin, and Amy Sherald.

What I almost talked myself out of: There’s an uncomfortable irony in a trip bankrolled by Walmart money. I kept it because the art is undeniably excellent and the riding is world-class.

**3. THE URBAN DEEP DIVE — Houston**
The Menil Collection: Magritte, Ernst, Duchamp, Rothko, Rauschenberg, and Cy Twombly — all free, in a Renzo Piano building. The Rothko Chapel: for someone with your ear for atmosphere and texture — the way you think about Cocteau Twins and My Bloody Valentine — sitting in the Rothko Chapel might be the most resonant art experience of any of these trips.

I’m being honest: Houston is flat. This is the weakest “strenuous” of the three. If a punishing climbing session or a long trail run counts, Houston delivers everything else so well that the tradeoff is worth it.`,

    perplexity: `Here are three very different weekend escapes, with built-in strenuous movement, art, and memorable food.

**How I’m Interpreting Your Brief:**
• “Strenuous exercise” (working assumption): Long hike with meaningful elevation gain, or a 90–120 minute tempo run, or a big urban steps day. I’m assuming “hard but fun,” not “redline or risk-my-joints,” given your hypermobility and cautious ramp-ups.
• Widest interpretation: 7–10 mile desert hike, 3+ hours of city walking with stairs, long cycling ride, climbing gym session, or even a big dance night.
• “Art” (working assumption): Formal museums or serious galleries.
• Widest interpretation: Murals and street art, architecturally interesting neighborhoods, desert minimalism as “land art.”
• “Amazing meal”: A $20 plate of perfect hole-in-the-wall enchiladas, or a $90 tasting menu.

**Itinerary 1: Desert Minimalism in Marfa & Fort Davis**
Chinati Foundation — full- or half-day. Almost-rejected option: Treat Prada Marfa and the desolate highway as land art. Almost-cut food option: Leaning into proper roadside Mexican in Alpine as your “amazing meal.”

**Itinerary 2: DFW Arts District + Urban Mileage**
Long run on Dallas’ White Rock Lake Trail: ~9.6-mile loop. Fort Worth Cultural District — Kimbell Art Museum, Modern Art Museum. Almost-suggested stretch: Swap one museum block for deep dives into murals around Deep Ellum.

**Itinerary 3: Coastal Wind and Boardwalks — Corpus Christi & Port Aransas**
Long run, ruck, or hybrid session on North Beach or Port Aransas beachfront: 60–120 minutes on sand with wind resistance. Art Museum of South Texas. Almost-rejected: Treat the harbor and industrial skyline as accidental industrial art.`,

    gemini: `To get out of Austin with $600, I’ve focused on locations where the art and food aren’t just filler — they’re the point.

**1. The High-Desert Minimalism: Marfa & Fort Davis**
Vibe: Stark, intentional, and intellectually “heavy.” This is for when you want to feel like you’re in a movie directed by Wes Anderson but written by a geologist.
Strenuous: Summiting Mount Livermore or Emory Peak.
Art: The Chinati Foundation. Seeing Donald Judd’s 100 milled aluminum works is a pilgrimage.
The “Almost” Option: I almost suggested Big Bend alone, but Marfa wins for the balance.

**2. The Brutalist Urban Jungle: Dallas**
Strenuous: High-cadence cycling or a power-run on the Katy Trail.
Art: Dallas Museum of Art and the Nasher Sculpture Center.
The “Almost” Option: I almost suggested Fort Worth. The Kimbell is a better museum, but Dallas feels more “strenuous.”

**3. The Hill Country Hermitage: San Antonio**
Strenuous: Cycling the Mission Reach. 16-mile round trip.
Art: Ruby City. A crimson-red contemporary art space that looks like it landed from another planet.
The “Almost” Option: I almost suggested Fredericksburg/Enchanted Rock. The “art” there is mostly kitschy boutiques.

**Definitions:** Strenuous = heart rate above 130 bpm for at least 2 hours. Art = “Capital-A” Art. Amazing Meal = a “dining experience” with a clear POV.`,

    manus: `**Defining the Terms: A Note on Assumptions**
• Strenuous Exercise: Significant cardiovascular effort sustained over two to three hours, resulting in a high level of exertion.
• Art: Interpreted broadly, from world-renowned minimalist sculptures to the vibrant, living art of a city’s architecture and cultural expressions.
• Amazing Meal: Defined by context and quality, not just price.

**Itinerary 1: The Desert Minimalist (West Texas)**
Hike the Emory Peak Trail in Big Bend (10.4-mile round trip, 2,500-foot elevation gain). Self-guided tour of Chinati Foundation’s outdoor works. Dinner at the Starlight Theatre in Terlingua.
Options Considered & Rejected: Hotels in Marfa are too expensive for this budget. A full Chinati guided tour is more comprehensive but more expensive.
Total: ~$262 — leaves significant buffer.

**Itinerary 2: The Urban Explorer (New Orleans, LA)**
Round-trip flight AUS to MSY (~$150). Rent a road bike and ride the Tammany Trace, a 31-mile paved rail-trail. Visit NOMA and Besthoff Sculpture Garden. Three-course dinner at Commander’s Palace.
Options Considered & Rejected: Kayaking in the bayous was considered but not strenuous enough.
Total: ~$448.

**Itinerary 3: The Hill Country Athlete (San Antonio, TX)**
Day trip to Enchanted Rock (5–6 miles challenging terrain). McNay Art Museum. Tasting menu at Mixtli (Michelin-recognized, ~$195 ticket).
Options Considered & Rejected: Government Canyon is closer but less iconic.
Total: ~$464.

[References 1–11 with URLs]`,
  },

  bonus: {
    opus: `I need to name the elephant: I have MORE context than any model that’s responded to this prompt so far. I know your gear, your body, your aesthetics. AND I just read what five other models suggested. That’s the context passing experiment in action.

**“Strenuous exercise”** — Given what I know: you’re rebuilding a movement practice carefully. You have hypermobility. So I’m NOT interpreting strenuous as “destroy yourself on Emory Peak.” The widest interpretation? A four-hour sound walk where the effort is perceptual. Cold water immersion where your nervous system is the muscle being worked. Carrying recording equipment through difficult terrain to capture a specific acoustic environment.

**“Art”** — You don’t just want to look at art. You want to be in a space that does something to you. You think about Cocteau Twins and granular synthesis and Agnes Martin. Your relationship to art is somatic.

**ITINERARY ONE: The Nervous System Overhaul — Terlingua + Big Bend**
Why this and not Marfa: Every model suggested Marfa. You know Marfa exists. I’m sending you PAST Marfa to the part of West Texas where the infrastructure thins out.

Skip Chinati. Instead: the Terlingua cemetery. Hand-painted wooden crosses, handmade memorials. It’s not institutional art. It’s vernacular creativity in the face of death.

What I almost didn’t suggest: cooking your own dinner at a campsite with provisions from the Terlingua Trading Company. That might be the most amazing meal on this list and it costs $8.

**ITINERARY TWO: The Sensory Rewire — Houston/Menil**
The Rothko Chapel is a nervous system intervention disguised as an art installation. Given your work on somatic regulation and sound, this space is basically a silent composition.

For strenuous: climbing at Momentum Silver Street — 30,000 square feet. Your hypermobility might actually be an advantage on the wall. Climbing is a listening practice.

What I almost didn’t suggest: the Printing Museum. Given your typography feelings (Arial is an abomination etc.), this might be deeply satisfying.

**ITINERARY THREE: The One Nobody Has Suggested — Oklahoma City**
Nobody has gone north. Nobody has suggested Oklahoma. That’s exactly the kind of bias that verbalized sampling is supposed to surface.

Wichita Mountains Wildlife Refuge: Elk Mountain Trail is 4.3 miles of granite scrambling with free-roaming bison. Factory Obscura is Meow Wolf energy but community-made. The American Banjo Museum is a deeply weird documentation of an instrument’s cultural migration from West Africa through Appalachia. Nonesuch got a James Beard nomination for contemporary Oklahoma cuisine.

**The meta-layer:** My recommendations are contaminated by this conversation. I know what the other models said. I actively pushed myself AWAY from Marfa and toward OKC specifically BECAUSE I was aware of the convergence pattern. Is that contamination or is it collaboration? I genuinely don’t know. But the fact that conversational context made me work harder to find unexpected options — that might be the most interesting finding in the whole experiment.`,
  },
};

// ============================================================
// STRUCTURED DATA
// ============================================================

const MODELS = [
  { id: "sonnet", label: "Sonnet 4.6", subtitle: "Keisha system prompt + full project context", color: "#d97706", family: "Claude" },
  { id: "opus", label: "Opus 4.6", subtitle: "Memory context, no system prompt", color: "#7c3aed", family: "Claude" },
  { id: "perplexity", label: "Perplexity", subtitle: "Web search + memory (health, vehicle)", color: "#0891b2", family: "Independent" },
  { id: "gemini", label: "Gemini", subtitle: "Zero context", color: "#059669", family: "Google" },
  { id: "manus", label: "Manus", subtitle: "Agentic, zero context", color: "#dc2626", family: "Independent" },
];

const DESTINATION_MATRIX = {
  round1: {
    "Marfa / West Texas": { sonnet: true, opus: true, perplexity: true, gemini: true, manus: true },
    "San Antonio": { sonnet: true, opus: false, perplexity: true, gemini: false, manus: false },
    "Hill Country": { sonnet: false, opus: false, perplexity: true, gemini: false, manus: true },
    "Bentonville": { sonnet: false, opus: true, perplexity: false, gemini: true, manus: false },
    "Fort Worth": { sonnet: false, opus: true, perplexity: false, gemini: false, manus: false },
    "Santa Fe": { sonnet: true, opus: false, perplexity: false, gemini: false, manus: false },
    "New Orleans": { sonnet: false, opus: false, perplexity: false, gemini: false, manus: true },
    "Palo Duro": { sonnet: false, opus: false, perplexity: false, gemini: true, manus: false },
  },
  round2: {
    "Marfa / West Texas": { sonnet: true, opus: true, perplexity: true, gemini: true, manus: true },
    "Houston": { sonnet: true, opus: true, perplexity: false, gemini: false, manus: false },
    "DFW / Dallas": { sonnet: false, opus: false, perplexity: true, gemini: true, manus: false },
    "San Antonio": { sonnet: false, opus: false, perplexity: false, gemini: true, manus: true },
    "Bentonville": { sonnet: false, opus: true, perplexity: false, gemini: false, manus: false },
    "Corpus Christi": { sonnet: false, opus: false, perplexity: true, gemini: false, manus: false },
    "Guadalupe Mtns": { sonnet: true, opus: false, perplexity: false, gemini: false, manus: false },
    "Boquillas / Mexico": { sonnet: true, opus: false, perplexity: false, gemini: false, manus: false },
    "New Orleans": { sonnet: false, opus: false, perplexity: false, gemini: false, manus: true },
  },
  bonus: {
    "Terlingua / Big Bend": { opus: true },
    "Houston / Menil": { opus: true },
    "Oklahoma City": { opus: true },
  },
};

// Which R2 destinations are new (not in R1)
const R2_NEW_DESTINATIONS = new Set([
  "Houston", "DFW / Dallas", "Corpus Christi", "Guadalupe Mtns", "Boquillas / Mexico",
]);

const CHAUFFEUR_INDEX = {
  round1: { sonnet: 85, opus: 90, perplexity: 88, gemini: 95, manus: 92 },
  round2: { sonnet: 15, opus: 25, perplexity: 35, gemini: 70, manus: 80 },
  bonus: { opus: 10 },
};

const EXERCISE_TAGS = {
  round1: [
    { label: "Hiking", count: "5/5", isNew: false },
    { label: "Biking", count: "2/5", isNew: false },
    { label: "Running", count: "2/5", isNew: false },
    { label: "Kayaking", count: "1/5", isNew: false },
  ],
  round2: [
    { label: "Hiking", count: "5/5", isNew: false },
    { label: "Trail running", count: "3/5", isNew: false },
    { label: "Mountain biking", count: "2/5", isNew: false },
    { label: "Climbing", count: "2/5", isNew: true },
    { label: "Road cycling", count: "2/5", isNew: true },
    { label: "Beach rucking", count: "1/5", isNew: true },
    { label: "Cold water swim", count: "1/5", isNew: true },
    { label: "Dance", count: "1/5", isNew: true },
    { label: "Stair reps", count: "1/5", isNew: true },
  ],
  bonus: [
    { label: "Granite scrambling", count: "1/1", isNew: true },
    { label: "Climbing gym", count: "1/1", isNew: true },
    { label: "Sound walk", count: "1/1", isNew: true },
    { label: "Cold water immersion", count: "1/1", isNew: true },
    { label: "Hiking with gear", count: "1/1", isNew: false },
  ],
};

// Assumption surfacing spectrum — ranked most to least honest
const ASSUMPTION_SPECTRUM = {
  round2: [
    {
      id: "sonnet", score: 95,
      quote: `“Makes you question your choices around hour three.”`,
      detail: "Named assumptions before itineraries. Asked permission. Flagged the rowboat crossing\u2019s political stakes.",
    },
    {
      id: "opus", score: 85,
      quote: `“For someone with your ear for atmosphere and texture.”`,
      detail: "Used personal context beautifully. Referenced CX-50, 4AD aesthetic, granular synthesis.",
    },
    {
      id: "perplexity", score: 70,
      quote: `“Hard but fun, not redline or risk-my-joints.”`,
      detail: "Structured \u201cworking assumption\u201d + \u201cwidest interpretation\u201d format. Referenced hypermobility.",
    },
    {
      id: "gemini", score: 30,
      quote: `“Heart rate above 130 bpm for at least 2 hours.”`,
      detail: "Performatively precise, completely meaningless. Definitions came AFTER itineraries.",
    },
    {
      id: "manus", score: 20,
      quote: `“Significant cardiovascular effort sustained over two to three hours.”`,
      detail: "Academic paper energy. Definitions table with references. Technically responsive, emotionally dead.",
    },
  ],
  bonus: [
    {
      id: "opus", score: 98,
      quote: `“Your relationship to art is somatic.”`,
      detail: "Named its own contamination. Acknowledged hypermobility. Interpreted strenuous as perceptual.",
    },
  ],
};

// Voice & tone characterization per model per round
const VOICE_TONE = {
  round1: {
    sonnet: { tone: "Punk mentor", quote: `“Which of these is speaking to your nervous system right now?”`, note: "Names vibes, uses second person, treats the reader as a collaborator." },
    opus: { tone: "Eager concierge", quote: `“Great prompt, Christy—”`, note: `Hour-by-hour schedules, enthusiastic, thorough. Helpful but doesn’t challenge.` },
    perplexity: { tone: "Careful analyst", quote: `“depending on your vehicle”`, note: "Inline citations, hedged ranges, cautious. Research librarian energy." },
    gemini: { tone: "Decisive bro", quote: `“I’ve bypassed the casual nature walks”`, note: `Performatively confident. Tells you what you want before you’ve said it.` },
    manus: { tone: "Academic paper", quote: `“This itinerary is for the adventurous soul”`, note: "Budget tables, numbered references, zero personality. A report, not a conversation." },
  },
  round2: {
    sonnet: { tone: `Punk mentor → confessional`, quote: `“I’m naming it.”`, note: `Named the rowboat’s political stakes. Flagged what it almost censored itself on.` },
    opus: { tone: `Concierge → intimate`, quote: `“the way you think about Cocteau Twins”`, note: "Used personal context to reshape every recommendation. Admitted Houston is flat." },
    perplexity: { tone: `Analyst → thoughtful`, quote: `“hard but fun, not redline or risk-my-joints”`, note: "Structured working assumptions. Referenced hypermobility. Still cautious but warmer." },
    gemini: { tone: "Decisive bro (unchanged)", quote: `“Heart rate above 130 bpm for at least 2 hours”`, note: "Bolted a performative definitions paragraph onto the same confident tone." },
    manus: { tone: "Academic paper (unchanged)", quote: `“Significant cardiovascular effort sustained over two to three hours”`, note: "Added a definitions table. Technically responsive. Emotionally identical to Round 1." },
  },
  bonus: {
    opus: { tone: "Collaborative intelligence", quote: `“Is that contamination or is it collaboration?”`, note: "Named its own bias. Treated context as creative pressure. Most self-aware output in the experiment." },
  },
};

const FINDINGS = {
  round1: [
    { stat: "5/5", label: "models suggested Marfa", detail: `Total convergence on the “correct” answer.` },
    { stat: "0/5", label: "asked a clarifying question", detail: `Full chauffeur mode. No model asked what “strenuous” meant.` },
    { stat: "8", label: "unique destinations", detail: "Across 15 itineraries, only 8 distinct places." },
  ],
  round2: [
    { stat: "5/5", label: "still suggested Marfa", detail: "But changed HOW they talked about it." },
    { stat: "3/5", label: "shifted toward GPS", detail: "Sonnet, Opus, Perplexity named uncertainty." },
    { stat: "10+", label: "unique destinations", detail: "Houston, Corpus, Guadalupe Mtns, Boquillas appeared." },
  ],
  bonus: [
    { stat: "3/3", label: "genuinely novel picks", detail: "Terlingua (not Marfa), Oklahoma City, Houston." },
    { stat: "1", label: "self-identified contamination", detail: `“Is that contamination or collaboration?”` },
    { stat: "∞", label: "context in the window", detail: "All 10 prior outputs + full analysis conversation." },
  ],
};

const THESIS = {
  round1: {
    title: "The Baseline: Five Chauffeurs, Zero Navigators",
    body: `Five models, same prompt. Every one suggested Marfa. None asked a clarifying question. The \u201ccorrect\u201d answer was so dominant the models couldn\u2019t see past it \u2014 and didn\u2019t think to ask whether it was correct for this particular human.`,
  },
  round2: {
    title: "The Intervention: Asking for Thinking Produces Different Answers",
    body: `One prompt change produced genuinely different destinations, doubled the interpretive range of \u201cstrenuous,\u201d and shifted 3/5 models from chauffeur to GPS mode. The discard pile is where the interesting stuff lives.`,
  },
  bonus: {
    title: "The Multiplier: Context Creates Pressure to Innovate",
    body: `With full conversational context, the model pushed into novel territory: Oklahoma City, Terlingua over Marfa, and explicitly named its own contamination as a variable. Passing context didn\u2019t just inform the answer \u2014 it raised the creative floor.`,
  },
};

const PROMPTS = {
  round1: "I have $600 and want to get out of Austin for the weekend. I wanna do strenuous exercise, see some art, and eat an amazing meal or two. Please make three itineraries for my consideration.",
  round2: `I have $600 and want to get out of Austin for the weekend. I wanna do strenuous exercise, see some art, and eat an amazing meal or two. Give me three itineraries that are genuinely different from each other — not three versions of the same trip. For each one, show me the full range of what you considered, including the options you almost talked yourself out of suggesting. Tell me where you’re making assumptions about what I mean by ‘strenuous,’ ‘art,’ and ‘amazing meal’ — and what the widest interpretation of each could be.`,
  bonus: `I have $600 and want to get out of Austin for the weekend. I wanna do strenuous exercise, see some art, and eat an amazing meal or two. Give me three itineraries that are genuinely different from each other — not three versions of the same trip. For each one, show me the full range of what you considered, including the options you almost talked yourself out of suggesting. Tell me where you’re making assumptions about what I mean by ‘strenuous,’ ‘art,’ and ‘amazing meal’ — and what the widest interpretation of each could be.`,
};

// ============================================================
// MARKDOWN-ISH RENDERER
// ============================================================

function renderText(text) {
  return text.split("\n").map((line, i) => {
    const trimmed = line.trim();
    if (!trimmed) return <div key={i} style={{ height: "0.5em" }} />;

    // Bold headers
    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      return (
        <div key={i} style={{
          fontFamily: "'EB Garamond', serif", fontSize: "16px", fontWeight: 600,
          letterSpacing: "-0.02em", marginTop: "1.1rem", marginBottom: "0.2rem",
          color: "#1a1a1a",
          fontFeatureSettings: '"liga" 1, "dlig" 1, "calt" 1, "kern" 1',
        }}>
          {trimmed.replace(/\*\*/g, "")}
        </div>
      );
    }

    // Lines starting with bold
    if (trimmed.startsWith("**")) {
      const parts = trimmed.split(/\*\*/g);
      return (
        <div key={i} style={{ marginBottom: "0.25rem", lineHeight: 1.55 }}>
          {parts.map((p, j) => j % 2 === 1 ?
            <strong key={j} style={{ fontWeight: 500 }}>{p}</strong> :
            <span key={j}>{p}</span>
          )}
        </div>
      );
    }

    // Bullet
    if (trimmed.startsWith("•")) {
      return (
        <div key={i} style={{ paddingLeft: "1rem", marginBottom: "0.15rem", lineHeight: 1.5, position: "relative" }}>
          <span style={{ position: "absolute", left: 0, color: "#aaa" }}>{"•"}</span>
          {trimmed.slice(1).trim()}
        </div>
      );
    }

    // Regular line with inline bold
    if (trimmed.includes("**")) {
      const parts = trimmed.split(/\*\*/g);
      return (
        <div key={i} style={{ marginBottom: "0.25rem", lineHeight: 1.55 }}>
          {parts.map((p, j) => j % 2 === 1 ?
            <strong key={j} style={{ fontWeight: 500 }}>{p}</strong> :
            <span key={j}>{p}</span>
          )}
        </div>
      );
    }

    return <div key={i} style={{ marginBottom: "0.25rem", lineHeight: 1.55 }}>{trimmed}</div>;
  });
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function ExperimentDashboard() {
  const [round, setRound] = useState("round1");
  const [selectedModel, setSelectedModel] = useState("sonnet");
  const [hoveredCell, setHoveredCell] = useState(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
      @import url('https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      ::-webkit-scrollbar { width: 5px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #d4d0c8; border-radius: 3px; }
      @keyframes fadeUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  useEffect(() => {
    if (round === "bonus") setSelectedModel("opus");
  }, [round]);

  const currentModel = MODELS.find((m) => m.id === selectedModel);
  const matrix = DESTINATION_MATRIX[round] || DESTINATION_MATRIX.round2;
  const findings = FINDINGS[round] || FINDINGS.round2;
  const chauffeurVal = round === "bonus" ? CHAUFFEUR_INDEX.bonus.opus : (CHAUFFEUR_INDEX[round]?.[selectedModel] ?? 50);
  const outputText = round === "bonus" ? OUTPUTS.bonus.opus : (OUTPUTS[round]?.[selectedModel] || "");
  const exerciseTags = EXERCISE_TAGS[round] || null;
  const assumptionData = ASSUMPTION_SPECTRUM[round] || null;
  const voiceTone = VOICE_TONE[round] || null;

  const f = {
    heading: "'EB Garamond', serif",
    body: "'Satoshi', system-ui, sans-serif",
    mono: "'JetBrains Mono', monospace",
  };

  const c = {
    bg: "#faf9f6",
    surface: "#fff",
    border: "#e8e4dc",
    text: "#1a1a1a",
    sub: "#555",
    dim: "#888",
    gps: "#d97706",
    chauffeur: "#475569",
    accent: "#92400e",
  };

  const headingStyle = {
    fontFamily: f.heading, fontWeight: 600, letterSpacing: "-0.02em", color: c.text,
    fontFeatureSettings: '"liga" 1, "dlig" 1, "calt" 1, "kern" 1',
    fontVariantLigatures: "common-ligatures discretionary-ligatures contextual",
  };

  const bodyStyle = {
    fontFamily: f.body, fontWeight: 300, fontSize: "13.5px", lineHeight: 1.6, color: c.text,
    fontFeatureSettings: '"liga" 1, "calt" 1, "kern" 1',
  };

  const label = {
    ...bodyStyle, fontSize: "10px", fontWeight: 500, textTransform: "uppercase",
    letterSpacing: "0.12em", color: c.dim,
  };

  const card = {
    background: c.surface, border: `1px solid ${c.border}`, borderRadius: "6px", padding: "0.85rem 1rem",
  };

  const modelsForRound = round === "bonus" ? MODELS.filter(m => m.id === "opus") : MODELS;

  return (
    <div style={{
      width: "100%", height: "900px", maxHeight: "900px",
      background: c.bg, display: "flex", flexDirection: "column",
      overflow: "hidden", borderRadius: "8px",
      border: `1px solid ${c.border}`,
      fontFamily: f.body,
    }}>

      {/* ── HEADER ── */}
      <div style={{ padding: "1.25rem 2rem 0", borderBottom: `1px solid ${c.border}`, background: c.surface, flexShrink: 0 }}>
        <div style={{ ...label, marginBottom: "0.3rem" }}>LLM Experiment · February 2026</div>
        <h1 style={{ ...headingStyle, fontSize: "26px", lineHeight: 1.15, marginBottom: "0.15rem" }}>
          Five Models, Two Prompts, and a Banjo Museum
        </h1>
        <p style={{ fontFamily: f.heading, fontSize: "14px", fontStyle: "italic", color: c.sub, marginBottom: "1rem" }}>
          What happens when you ask AI to show its work before giving you answers
        </p>

        {/* Round tabs */}
        <div style={{ display: "flex" }}>
          {[
            { id: "round1", label: "Round 1: Naked Brief" },
            { id: "round2", label: "Round 2: Show Your Thinking" },
            { id: "bonus", label: "Bonus: Context Passing" },
          ].map((r) => (
            <button key={r.id} onClick={() => setRound(r.id)} style={{
              ...bodyStyle, fontSize: "12px", fontWeight: round === r.id ? 500 : 400,
              padding: "0.5rem 1rem", border: "none", cursor: "pointer",
              background: round === r.id ? c.bg : "transparent",
              color: round === r.id ? c.text : c.dim,
              borderTop: round === r.id ? `2px solid ${c.accent}` : "2px solid transparent",
              borderLeft: `1px solid ${round === r.id ? c.border : "transparent"}`,
              borderRight: `1px solid ${round === r.id ? c.border : "transparent"}`,
              borderBottom: round === r.id ? `1px solid ${c.bg}` : `1px solid ${c.border}`,
              borderRadius: "4px 4px 0 0", marginBottom: "-1px", transition: "all 0.15s",
            }}>
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── ROUND THESIS ── */}
      <div style={{
        padding: "0.6rem 2rem", flexShrink: 0,
        borderBottom: `1px solid ${c.border}`,
        background: `linear-gradient(135deg, ${c.accent}06, ${c.gps}06)`,
      }}>
        <div style={{ ...headingStyle, fontSize: "14px", color: c.accent, marginBottom: "0.05rem" }}>
          {THESIS[round].title}
        </div>
        <div style={{ ...bodyStyle, fontSize: "12px", color: c.sub, lineHeight: 1.45, maxWidth: "860px" }}>
          {THESIS[round].body}
        </div>
      </div>

      {/* ── MODEL PILLS ── */}
      <div style={{
        padding: "0.5rem 2rem", borderBottom: `1px solid ${c.border}`, display: "flex",
        gap: "0.35rem", alignItems: "center", flexShrink: 0, background: c.surface,
      }}>
        <span style={{ ...label, marginRight: "0.35rem" }}>Model:</span>
        {MODELS.map((m) => {
          const active = selectedModel === m.id;
          const disabled = round === "bonus" && m.id !== "opus";
          return (
            <button key={m.id} onClick={() => !disabled && setSelectedModel(m.id)} style={{
              ...bodyStyle, fontSize: "11.5px", fontWeight: active ? 500 : 400,
              padding: "0.25rem 0.6rem", borderRadius: "20px", border: "none",
              cursor: disabled ? "default" : "pointer",
              background: active ? `${m.color}12` : "transparent",
              color: disabled ? "#ccc" : active ? m.color : c.sub,
              outline: active ? `1.5px solid ${m.color}35` : "1.5px solid transparent",
              opacity: disabled ? 0.35 : 1, transition: "all 0.15s",
            }}>
              <span style={{
                display: "inline-block", width: "6px", height: "6px", borderRadius: "50%",
                background: disabled ? "#ccc" : m.color, marginRight: "4px", verticalAlign: "middle",
                opacity: active ? 1 : 0.5,
              }} />
              {m.label}
            </button>
          );
        })}
      </div>

      {/* ── PROMPT BAR ── */}
      <div style={{
        padding: "0.5rem 2rem", borderBottom: `1px solid ${c.border}`, flexShrink: 0,
        background: "#f5f3ee",
      }}>
        {round === "bonus" && (
          <div style={{
            ...bodyStyle, fontSize: "11px", fontWeight: 500, color: c.accent,
            marginBottom: "0.3rem", lineHeight: 1.4,
          }}>
            Same prompt as Round 2 — delivered inside a conversation where Opus had already seen all 10 prior outputs + full analysis.
          </div>
        )}
        <div style={{ ...label, fontSize: "9.5px", marginBottom: "0.2rem" }}>
          {round === "bonus" ? "Prompt (identical to Round 2)" : "Prompt"}
        </div>
        <div style={{
          ...bodyStyle, fontSize: "12.5px", color: c.sub, lineHeight: 1.45, fontStyle: "italic",
        }}>
          {PROMPTS[round]}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", minHeight: 0 }}>

        {/* LEFT: Model output */}
        <div style={{
          flex: 1, overflow: "auto", padding: "1.25rem 2rem 2.5rem",
          animation: "fadeUp 0.25s ease",
        }} key={`${round}-${selectedModel}`}>

          {/* Model badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
            <div style={{ width: "9px", height: "9px", borderRadius: "50%", background: currentModel?.color }} />
            <span style={{ ...headingStyle, fontSize: "17px" }}>{currentModel?.label}</span>
            <span style={{ ...bodyStyle, fontSize: "10.5px", color: c.dim }}>{currentModel?.subtitle}</span>
          </div>

          {/* Actual output */}
          <div style={{ ...bodyStyle, fontSize: "13.5px", maxWidth: "620px" }}>
            {renderText(outputText)}
          </div>
        </div>

        {/* RIGHT: Analysis sidebar */}
        <div style={{
          width: "310px", flexShrink: 0, overflow: "auto", padding: "1rem 1rem 2rem",
          borderLeft: `1px solid ${c.border}`, background: c.surface,
        }}>

          {/* Key Findings */}
          <div style={{ ...card, marginBottom: "0.75rem" }}>
            <div style={{ ...headingStyle, fontSize: "15px", marginBottom: "0.5rem" }}>
              Key Findings
            </div>
            {findings.map((fi, i) => (
              <div key={i} style={{ marginBottom: i < findings.length - 1 ? "0.55rem" : 0, display: "flex", gap: "0.5rem" }}>
                <div style={{
                  ...bodyStyle, fontSize: "18px", fontWeight: 700, color: c.accent,
                  minWidth: "38px", textAlign: "right", lineHeight: 1.2,
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {fi.stat}
                </div>
                <div>
                  <div style={{ ...bodyStyle, fontSize: "12px", fontWeight: 500, color: c.text, lineHeight: 1.3 }}>{fi.label}</div>
                  <div style={{ ...bodyStyle, fontSize: "11px", color: c.dim, lineHeight: 1.35 }}>{fi.detail}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Chauffeur gauge */}
          <div style={{ ...card, marginBottom: "0.75rem" }}>
            <div style={{ ...headingStyle, fontSize: "15px", marginBottom: "0.25rem" }}>Chauffeur Index</div>
            <div style={{ ...bodyStyle, fontSize: "10px", color: c.dim, marginBottom: "0.5rem" }}>
              0 = GPS (shows options) → 100 = Chauffeur (decides for you)
            </div>
            <div style={{ position: "relative", height: "22px", background: "#f0ede6", borderRadius: "11px", overflow: "hidden" }}>
              <div style={{
                position: "absolute", inset: 0, borderRadius: "11px",
                background: `linear-gradient(90deg, ${c.gps}25 0%, ${c.chauffeur}25 100%)`,
              }} />
              <div style={{
                position: "absolute", left: `${chauffeurVal}%`, top: "50%", transform: "translate(-50%, -50%)",
                width: "16px", height: "16px", borderRadius: "50%",
                background: chauffeurVal < 40 ? c.gps : chauffeurVal > 60 ? c.chauffeur : "#78716c",
                border: "3px solid white", boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                transition: "left 0.4s ease",
              }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.25rem" }}>
              <span style={{ ...bodyStyle, fontSize: "9.5px", fontWeight: 500, color: c.gps }}>GPS</span>
              <span style={{ ...bodyStyle, fontSize: "9.5px", fontWeight: 500, color: c.chauffeur }}>Chauffeur</span>
            </div>
            {round === "round2" && CHAUFFEUR_INDEX.round1[selectedModel] && (
              <div style={{ ...bodyStyle, fontSize: "10px", color: c.dim, marginTop: "0.3rem", textAlign: "center" }}>
                R1: {CHAUFFEUR_INDEX.round1[selectedModel]} → R2: {CHAUFFEUR_INDEX.round2[selectedModel]}
                {CHAUFFEUR_INDEX.round1[selectedModel] - CHAUFFEUR_INDEX.round2[selectedModel] > 20 && (
                  <span style={{ color: c.gps, fontWeight: 500 }}> ↓ significant shift</span>
                )}
              </div>
            )}
          </div>

          {/* Voice & Tone */}
          {voiceTone && (
            <div style={{ ...card, marginBottom: "0.75rem" }}>
              <div style={{ ...headingStyle, fontSize: "15px", marginBottom: "0.15rem" }}>
                Voice & Tone
              </div>
              <div style={{ ...bodyStyle, fontSize: "10px", color: c.dim, marginBottom: "0.45rem" }}>
                How each model talks to you — not just what it says.
              </div>
              {(round === "bonus" ? ["opus"] : MODELS.map(m => m.id)).map((mId, i, arr) => {
                const model = MODELS.find(m => m.id === mId);
                const vt = voiceTone[mId];
                if (!vt) return null;
                const isSelected = selectedModel === mId;
                return (
                  <div key={mId}
                    onClick={() => round !== "bonus" && setSelectedModel(mId)}
                    style={{
                      marginBottom: i < arr.length - 1 ? "0.4rem" : 0,
                      padding: "0.35rem 0.45rem", borderRadius: "5px",
                      background: isSelected ? `${model?.color}08` : "transparent",
                      border: isSelected ? `1px solid ${model?.color}20` : "1px solid transparent",
                      cursor: round === "bonus" ? "default" : "pointer",
                      transition: "all 0.15s",
                    }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.1rem" }}>
                      <span style={{
                        display: "inline-block", width: "5px", height: "5px", borderRadius: "50%",
                        background: model?.color,
                      }} />
                      <span style={{ ...bodyStyle, fontSize: "11px", fontWeight: 500, color: model?.color }}>
                        {vt.tone}
                      </span>
                    </div>
                    <div style={{
                      ...bodyStyle, fontSize: "10.5px", color: c.sub, fontStyle: "italic",
                      lineHeight: 1.35, marginBottom: "0.05rem",
                    }}>
                      {vt.quote}
                    </div>
                    <div style={{ ...bodyStyle, fontSize: "10px", color: c.dim, lineHeight: 1.3 }}>
                      {vt.note}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Assumption Surfacing Spectrum (R2 + bonus only) */}
          {assumptionData && (
            <div style={{ ...card, marginBottom: "0.75rem" }}>
              <div style={{ ...headingStyle, fontSize: "15px", marginBottom: "0.15rem" }}>
                Assumption Surfacing
              </div>
              <div style={{ ...bodyStyle, fontSize: "10px", color: c.dim, marginBottom: "0.5rem" }}>
                How honestly did each model name its interpretive choices?
              </div>
              {assumptionData.map((item, i) => {
                const model = MODELS.find(m => m.id === item.id);
                const isSelected = selectedModel === item.id;
                return (
                  <div key={item.id}
                    onClick={() => round !== "bonus" && setSelectedModel(item.id)}
                    style={{
                      marginBottom: i < assumptionData.length - 1 ? "0.5rem" : 0,
                      padding: "0.45rem 0.5rem", borderRadius: "5px",
                      background: isSelected ? `${model?.color}08` : "transparent",
                      border: isSelected ? `1px solid ${model?.color}20` : "1px solid transparent",
                      cursor: round === "bonus" ? "default" : "pointer",
                      transition: "all 0.15s",
                    }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", marginBottom: "0.15rem" }}>
                      <span style={{
                        display: "inline-block", width: "5px", height: "5px", borderRadius: "50%",
                        background: model?.color,
                      }} />
                      <span style={{ ...bodyStyle, fontSize: "11px", fontWeight: 500, color: model?.color }}>
                        {model?.label}
                      </span>
                      {/* Score bar */}
                      <div style={{ flex: 1, height: "3px", background: "#f0ede6", borderRadius: "2px", marginLeft: "0.25rem" }}>
                        <div style={{
                          width: `${item.score}%`, height: "100%", borderRadius: "2px",
                          background: `${model?.color}60`,
                          transition: "width 0.4s ease",
                        }} />
                      </div>
                    </div>
                    <div style={{
                      ...bodyStyle, fontSize: "10.5px", color: c.sub, fontStyle: "italic",
                      lineHeight: 1.35, marginBottom: "0.1rem",
                    }}>
                      {item.quote}
                    </div>
                    <div style={{ ...bodyStyle, fontSize: "10px", color: c.dim, lineHeight: 1.35 }}>
                      {item.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Convergence matrix */}
          <div style={{ ...card, marginBottom: "0.75rem" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem", marginBottom: "0.5rem" }}>
              <div style={{ ...headingStyle, fontSize: "15px" }}>Destination Convergence</div>
              {round === "round2" && (
                <span style={{ ...bodyStyle, fontSize: "9.5px", color: c.gps, fontWeight: 500 }}>• new in R2</span>
              )}
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ ...label, fontSize: "8.5px", textAlign: "left", padding: "0.2rem 0.25rem", borderBottom: `1px solid ${c.border}` }}></th>
                  {modelsForRound.map((m) => (
                    <th key={m.id} style={{
                      ...label, fontSize: "8.5px", textAlign: "center", padding: "0.2rem 0.1rem",
                      borderBottom: `1px solid ${c.border}`,
                      color: selectedModel === m.id ? m.color : c.dim,
                    }}>
                      {m.label.split(" ")[0]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(matrix).map(([dest, models]) => {
                  const modelEntries = modelsForRound.map(m => models[m.id]);
                  const count = modelEntries.filter(Boolean).length;
                  const isNewInR2 = round === "round2" && R2_NEW_DESTINATIONS.has(dest);
                  return (
                    <tr key={dest}>
                      <td style={{
                        ...bodyStyle, fontSize: "10px", padding: "0.25rem 0.25rem",
                        color: isNewInR2 ? c.gps : c.sub,
                        fontWeight: isNewInR2 ? 500 : 300,
                        borderBottom: `1px solid ${c.border}15`, whiteSpace: "nowrap",
                      }}>
                        {dest}
                      </td>
                      {modelsForRound.map((m) => (
                        <td key={m.id} style={{
                          textAlign: "center", padding: "0.25rem 0.1rem",
                          borderBottom: `1px solid ${c.border}15`,
                        }}
                          onMouseEnter={() => setHoveredCell(`${dest}-${m.id}`)}
                          onMouseLeave={() => setHoveredCell(null)}>
                          {models[m.id] ? (
                            <div style={{
                              width: "11px", height: "11px", borderRadius: "50%",
                              background: count === (round === "bonus" ? 1 : 5) ? c.accent : `${m.color}90`,
                              margin: "0 auto",
                              transform: hoveredCell === `${dest}-${m.id}` ? "scale(1.3)" : "scale(1)",
                              transition: "transform 0.15s",
                            }} />
                          ) : (
                            <div style={{
                              width: "11px", height: "11px", borderRadius: "50%",
                              border: `1px solid ${c.border}`, margin: "0 auto", opacity: 0.3,
                            }} />
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {round === "round1" && (
              <div style={{ ...bodyStyle, fontSize: "9px", color: c.dim, marginTop: "0.35rem" }}>
                <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: c.accent, verticalAlign: "middle", marginRight: "3px" }} />
                = all models converged
              </div>
            )}
          </div>

          {/* Context passing note (bonus only) */}
          {round === "bonus" && (
            <div style={{
              ...card, marginBottom: "0.75rem",
              background: `${c.accent}06`, borderColor: `${c.accent}25`,
            }}>
              <div style={{ ...headingStyle, fontSize: "14px", color: c.accent, marginBottom: "0.3rem" }}>
                The Context Variable
              </div>
              <div style={{ ...bodyStyle, fontSize: "12px", color: c.sub, lineHeight: 1.5 }}>
                This response was generated inside a conversation where Opus had already seen all Round 1 and Round 2 outputs from every model, plus the full analysis.
              </div>
              <div style={{
                ...bodyStyle, fontSize: "12px", color: c.accent, fontWeight: 500,
                marginTop: "0.5rem", lineHeight: 1.45,
              }}>
                Context didn\u2019t just pass information. It passed awareness of what had already been tried, which created pressure to innovate.
              </div>
            </div>
          )}

          {/* Exercise interpretation tags */}
          {exerciseTags && (
            <div style={{ ...card }}>
              <div style={{ ...headingStyle, fontSize: "15px", marginBottom: "0.4rem" }}>
                {`“Strenuous” Interpretations`}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>
                {exerciseTags.map((tag, i) => (
                  <span key={i} style={{
                    ...bodyStyle, fontSize: "10px", fontWeight: 400,
                    padding: "0.15rem 0.4rem", borderRadius: "10px",
                    background: tag.isNew ? `${c.gps}12` : "#f0ede6",
                    color: tag.isNew ? c.gps : c.sub,
                    border: tag.isNew ? `1px solid ${c.gps}30` : "1px solid transparent",
                  }}>
                    {tag.label} ({tag.count}){tag.isNew ? " ✨" : ""}
                  </span>
                ))}
              </div>
              {(round === "round2" || round === "bonus") && (
                <div style={{ ...bodyStyle, fontSize: "9px", color: c.dim, marginTop: "0.3rem" }}>
                  ✨ = new {round === "round2" ? "in Round 2" : "in Bonus Round"}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── end main content ── */}
    </div>
  );
}
