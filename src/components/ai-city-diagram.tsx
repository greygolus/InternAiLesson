export function AiCityDiagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 860"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="AI City analogy: companies own plots, models are buildings, harnesses are storefronts, your Obsidian vault is your office and filing system, and connectors, MCP, APIs with API keys, and computer use are access lines to the outside world."
      className={className}
    >


  <defs>
    <linearGradient id="aicity-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#07111c"/>
      <stop offset="1" stopColor="#0c1b2b"/>
    </linearGradient>
    <linearGradient id="aicity-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stopColor="#07101a"/>
      <stop offset="1" stopColor="#03070c"/>
    </linearGradient>
    <linearGradient id="aicity-blueBuilding" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#6fc0ff"/>
      <stop offset="1" stopColor="#255d99"/>
    </linearGradient>
    <linearGradient id="aicity-tealBuilding" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#72e6d1"/>
      <stop offset="1" stopColor="#1d766f"/>
    </linearGradient>
    <linearGradient id="aicity-violetBuilding" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#b5a5ff"/>
      <stop offset="1" stopColor="#5a47a6"/>
    </linearGradient>
    <filter id="aicity-glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <pattern id="aicity-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8acbff" strokeOpacity="0.06" strokeWidth="1"/>
    </pattern>
  </defs>


  <text x="54" y="58" fill="#edf7ff" fontSize="34" fontWeight="700">AI IS LIKE A CITY</text>
  <text x="54" y="88" fill="#8ea7ba" fontSize="15">companies own plots  /  models power buildings  /  harnesses are where you work</text>

  <g transform="translate(596 22)">
    <rect width="272" height="112" rx="10" fill="#0b1826" stroke="#63b8f6" strokeOpacity="0.35"/>
    <text x="18" y="26" fill="#63b8f6" fontFamily="ui-monospace, SFMono-Regular, Consolas, monospace" fontSize="11" letterSpacing="1.6">HOW WORK REPEATS</text>
    <text x="18" y="52" fill="#edf7ff" fontSize="14" fontWeight="600">Prompt = work order</text>
    <text x="18" y="76" fill="#edf7ff" fontSize="14" fontWeight="600">Skill = reusable playbook</text>
    <text x="18" y="100" fill="#edf7ff" fontSize="14" fontWeight="600">Automation = standing order</text>
  </g>
  <g transform="translate(882 22)">
    <rect width="264" height="112" rx="10" fill="#0b1826" stroke="#63b8f6" strokeOpacity="0.35"/>
    <text x="18" y="26" fill="#63b8f6" fontFamily="ui-monospace, SFMono-Regular, Consolas, monospace" fontSize="11" letterSpacing="1.6">THE DURABLE IDEA</text>
    <text x="18" y="52" fill="#dcecf8" fontSize="14">Harness and model are separate</text>
    <text x="18" y="76" fill="#dcecf8" fontSize="14">choices—you can swap one</text>
    <text x="18" y="100" fill="#dcecf8" fontSize="14">without losing the other.</text>
  </g>

  {/* plots */}
  <g>
    <rect x="42" y="146" width="340" height="398" rx="16" fill="#63b8f6" fillOpacity="0.045" stroke="#63b8f6" strokeOpacity="0.28"/>
    <text x="62" y="176" fill="#63b8f6" fontSize="12" fontWeight="700" letterSpacing="1.4">PLOT 01 / COMPANY</text>
    <text x="62" y="200" fill="#dcecf8" fontSize="19" fontWeight="600">Anthropic</text>

    <rect x="430" y="146" width="340" height="398" rx="16" fill="#72e6d1" fillOpacity="0.045" stroke="#72e6d1" strokeOpacity="0.28"/>
    <text x="450" y="176" fill="#72e6d1" fontSize="12" fontWeight="700" letterSpacing="1.4">PLOT 02 / COMPANY</text>
    <text x="450" y="200" fill="#dcecf8" fontSize="19" fontWeight="600">OpenAI</text>

    <rect x="818" y="146" width="340" height="398" rx="16" fill="#b5a5ff" fillOpacity="0.045" stroke="#b5a5ff" strokeOpacity="0.28"/>
    <text x="838" y="176" fill="#b5a5ff" fontSize="12" fontWeight="700" letterSpacing="1.4">PLOT 03 / COMPANY</text>
    <text x="838" y="200" fill="#dcecf8" fontSize="19" fontWeight="600">Google</text>
  </g>

  {/* buildings */}
  <g>
    <g transform="translate(82 236)">
      <rect width="258" height="278" rx="8" fill="url(#aicity-blueBuilding)"/>
      <rect width="258" height="12" rx="6" fill="#8ed0ff"/>
      <g fill="#dff2ff" fillOpacity="0.72">
        <rect x="28" y="42" width="34" height="28" rx="3"/><rect x="84" y="42" width="34" height="28" rx="3"/><rect x="140" y="42" width="34" height="28" rx="3"/><rect x="196" y="42" width="34" height="28" rx="3"/>
        <rect x="28" y="88" width="34" height="28" rx="3"/><rect x="84" y="88" width="34" height="28" rx="3"/><rect x="140" y="88" width="34" height="28" rx="3"/><rect x="196" y="88" width="34" height="28" rx="3"/>
      </g>
      <text x="129" y="154" textAnchor="middle" fill="#07111c" fontSize="13" fontWeight="700" letterSpacing="1.5">MODEL / CLAUDE</text>
      <rect x="20" y="190" width="101" height="88" fill="#0a1521" stroke="#dff2ff" strokeOpacity="0.45"/>
      <rect x="137" y="190" width="101" height="88" fill="#0a1521" stroke="#dff2ff" strokeOpacity="0.45"/>
      <text x="70" y="224" textAnchor="middle" fill="#dff2ff" fontSize="16" fontWeight="600">Chat</text>
      <text x="187" y="224" textAnchor="middle" fill="#dff2ff" fontSize="16" fontWeight="600">Cowork</text>
      <text x="70" y="247" textAnchor="middle" fill="#8ea7ba" fontSize="10" letterSpacing="1.2">HARNESS</text>
      <text x="187" y="247" textAnchor="middle" fill="#8ea7ba" fontSize="10" letterSpacing="1.2">HARNESS</text>
      <rect x="58" y="259" width="24" height="19" fill="#63b8f6"/>
      <rect x="175" y="259" width="24" height="19" fill="#63b8f6"/>
    </g>

    <g transform="translate(470 218)">
      <rect width="258" height="296" rx="8" fill="url(#aicity-tealBuilding)"/>
      <rect width="258" height="12" rx="6" fill="#a5f2e6"/>
      <g fill="#e1fff9" fillOpacity="0.72">
        <rect x="28" y="42" width="34" height="28" rx="3"/><rect x="84" y="42" width="34" height="28" rx="3"/><rect x="140" y="42" width="34" height="28" rx="3"/><rect x="196" y="42" width="34" height="28" rx="3"/>
        <rect x="28" y="88" width="34" height="28" rx="3"/><rect x="84" y="88" width="34" height="28" rx="3"/><rect x="140" y="88" width="34" height="28" rx="3"/><rect x="196" y="88" width="34" height="28" rx="3"/>
        <rect x="28" y="134" width="34" height="28" rx="3"/><rect x="84" y="134" width="34" height="28" rx="3"/><rect x="140" y="134" width="34" height="28" rx="3"/><rect x="196" y="134" width="34" height="28" rx="3"/>
      </g>
      <text x="129" y="190" textAnchor="middle" fill="#07111c" fontSize="13" fontWeight="700" letterSpacing="1.5">MODEL / GPT</text>
      <rect x="20" y="208" width="101" height="88" fill="#0a1521" stroke="#e1fff9" strokeOpacity="0.45"/>
      <rect x="137" y="208" width="101" height="88" fill="#0a1521" stroke="#e1fff9" strokeOpacity="0.45"/>
      <text x="70" y="242" textAnchor="middle" fill="#e1fff9" fontSize="16" fontWeight="600">ChatGPT</text>
      <text x="187" y="242" textAnchor="middle" fill="#e1fff9" fontSize="16" fontWeight="600">Codex</text>
      <text x="70" y="265" textAnchor="middle" fill="#8ea7ba" fontSize="10" letterSpacing="1.2">HARNESS</text>
      <text x="187" y="265" textAnchor="middle" fill="#8ea7ba" fontSize="10" letterSpacing="1.2">HARNESS</text>
      <rect x="58" y="277" width="24" height="19" fill="#72e6d1"/>
      <rect x="175" y="277" width="24" height="19" fill="#72e6d1"/>
    </g>

    <g transform="translate(858 260)">
      <rect width="258" height="254" rx="8" fill="url(#aicity-violetBuilding)"/>
      <rect width="258" height="12" rx="6" fill="#d2c9ff"/>
      <g fill="#f0edff" fillOpacity="0.72">
        <rect x="28" y="42" width="34" height="28" rx="3"/><rect x="84" y="42" width="34" height="28" rx="3"/><rect x="140" y="42" width="34" height="28" rx="3"/><rect x="196" y="42" width="34" height="28" rx="3"/>
        <rect x="28" y="88" width="34" height="28" rx="3"/><rect x="84" y="88" width="34" height="28" rx="3"/><rect x="140" y="88" width="34" height="28" rx="3"/><rect x="196" y="88" width="34" height="28" rx="3"/>
      </g>
      <text x="129" y="146" textAnchor="middle" fill="#07111c" fontSize="13" fontWeight="700" letterSpacing="1.5">MODEL / GEMINI</text>
      <rect x="57" y="166" width="144" height="88" fill="#0a1521" stroke="#f0edff" strokeOpacity="0.45"/>
      <text x="129" y="201" textAnchor="middle" fill="#f0edff" fontSize="16" fontWeight="600">Gemini</text>
      <text x="129" y="224" textAnchor="middle" fill="#8ea7ba" fontSize="10" letterSpacing="1.2">HARNESS</text>
      <rect x="117" y="235" width="24" height="19" fill="#b5a5ff"/>
    </g>
  </g>

  {/* street */}
  <rect x="0" y="544" width="1200" height="48" fill="#142332"/>
  <line x1="0" y1="568" x2="1200" y2="568" stroke="#8ea7ba" strokeOpacity="0.38" strokeWidth="2" strokeDasharray="20 22"/>
  <g>
    <circle cx="400" cy="566" r="13" fill="#edf7ff"/>
    <rect x="392" y="579" width="16" height="28" rx="7" fill="#63b8f6"/>
    <text x="400" y="624" textAnchor="middle" fill="#edf7ff" fontSize="12" fontWeight="600">YOU</text>
    <path d="M420 565 H468" stroke="#63b8f6" strokeWidth="2"/>
  </g>

  {/* underground: your context + access lines */}
  <rect x="0" y="592" width="1200" height="268" fill="url(#aicity-ground)"/>

  <g>
    <text x="54" y="630" fill="#edf7ff" fontSize="17" fontWeight="700">YOUR CONTEXT</text>
    <text x="420" y="630" fill="#edf7ff" fontSize="17" fontWeight="700">ACCESS LINES</text>

    <rect x="54" y="668" width="330" height="108" rx="10" fill="#0c1b2b" stroke="#8ed0ff" strokeOpacity="0.55"/>
    <text x="72" y="696" fill="#8ed0ff" fontSize="11" fontWeight="700" letterSpacing="1.2">OBSIDIAN VAULT / YOUR OFFICE</text>
    <text x="72" y="722" fill="#dcecf8" fontSize="14">Me.md · notes · files · history</text>
    <text x="72" y="746" fill="#8ea7ba" fontSize="12">The filing system the AI reads first.</text>

    <rect x="420" y="668" width="180" height="108" rx="10" fill="#0c1b2b" stroke="#63b8f6" strokeOpacity="0.5"/>
    <text x="436" y="696" fill="#63b8f6" fontSize="11" fontWeight="700" letterSpacing="1.2">CONNECTOR</text>
    <text x="436" y="720" fill="#dcecf8" fontSize="13">Packaged app access</text>
    <text x="436" y="744" fill="#8ea7ba" fontSize="11">Gmail · Calendar · Drive</text>

    <rect x="615" y="668" width="180" height="108" rx="10" fill="#0c1b2b" stroke="#72e6d1" strokeOpacity="0.5"/>
    <text x="631" y="696" fill="#72e6d1" fontSize="11" fontWeight="700" letterSpacing="1.2">MCP</text>
    <text x="631" y="720" fill="#dcecf8" fontSize="13">Common agent adapter</text>
    <text x="631" y="744" fill="#8ea7ba" fontSize="11">One standard, many tools</text>

    <rect x="810" y="668" width="180" height="108" rx="10" fill="#0c1b2b" stroke="#b5a5ff" strokeOpacity="0.5"/>
    <text x="826" y="696" fill="#b5a5ff" fontSize="11" fontWeight="700" letterSpacing="1.2">API</text>
    <text x="826" y="720" fill="#dcecf8" fontSize="13">Defined doorway/contract</text>
    <text x="826" y="744" fill="#8ea7ba" fontSize="11">API key = the credential</text>

    <rect x="1005" y="668" width="180" height="108" rx="10" fill="#0c1b2b" stroke="#ffbd66" strokeOpacity="0.5"/>
    <text x="1021" y="696" fill="#ffbd66" fontSize="11" fontWeight="700" letterSpacing="1.2">COMPUTER USE</text>
    <text x="1021" y="720" fill="#dcecf8" fontSize="13">Screen-level fallback</text>
    <text x="1021" y="744" fill="#8ea7ba" fontSize="11">When no direct line exists</text>
  </g>

  {/* risers: context and access lines feed the harnesses above */}
  <g strokeWidth="5" fill="none" filter="url(#aicity-glow)">
    <path d="M219 668 V514" stroke="#8ed0ff" strokeOpacity="0.65"/>
    <path d="M510 668 V648 H269 V514" stroke="#63b8f6" strokeOpacity="0.75"/>
    <path d="M705 668 V654 H599 V514" stroke="#72e6d1" strokeOpacity="0.75"/>
    <path d="M900 668 V656 H987 V514" stroke="#b5a5ff" strokeOpacity="0.75"/>
  </g>

  <text x="54" y="836" fill="#6f8799" fontFamily="ui-monospace, SFMono-Regular, Consolas, monospace" fontSize="10" letterSpacing="1.2">ACCESS IS NOT PERMISSION  /  CONNECT ONLY WHAT THE WORK NEEDS  /  VERIFY BEFORE YOU SHARE OR PUBLISH</text>
    </svg>
  );
}
