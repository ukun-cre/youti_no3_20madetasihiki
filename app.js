/* ==========================================
   KANJI DAISUKI - app.js
   ========================================== */

'use strict';

/* ---- Kanji Data ---- */
const KANJI_DATA = [
  {
    kanji: '山', reading: 'やま', meaning: 'mountain',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="skyG" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#87CEEB"/><stop offset="100%" stop-color="#E0F7FA"/>
      </linearGradient></defs>
      <rect width="100" height="100" fill="url(#skyG)"/>
      <polygon points="50,10 20,75 80,75" fill="#6D8B74"/>
      <polygon points="50,10 30,55 70,55" fill="#8FA87F"/>
      <polygon points="28,45 8,85 50,85" fill="#7D9A6C"/>
      <polygon points="72,45 52,85 92,85" fill="#7D9A6C"/>
      <polygon points="50,10 40,32 60,32" fill="white"/>
      <rect x="0" y="85" width="100" height="15" fill="#A0C878"/>
      <circle cx="15" cy="30" r="10" fill="white" opacity="0.8"/>
      <circle cx="25" cy="25" r="12" fill="white" opacity="0.85"/>
      <circle cx="85" cy="20" r="8" fill="white" opacity="0.75"/>
    </svg>`,
    speech: 'やま。山という漢字を覚えましょう！山の形に似ているね。',
    questionSpeech: 'やまという漢字はどれかな？',
  },
  {
    kanji: '川', reading: 'かわ', meaning: 'river',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#E8F5E9"/>
      <path d="M20,10 Q25,30 20,50 Q15,70 20,90" stroke="#42A5F5" stroke-width="12" fill="none" stroke-linecap="round"/>
      <path d="M50,5  Q55,25 50,50 Q45,75 50,95" stroke="#1E88E5" stroke-width="14" fill="none" stroke-linecap="round"/>
      <path d="M80,10 Q85,30 80,50 Q75,70 80,90" stroke="#42A5F5" stroke-width="12" fill="none" stroke-linecap="round"/>
      <ellipse cx="15" cy="45" rx="6" ry="4" fill="#BBDEFB" opacity="0.6"/>
      <ellipse cx="55" cy="60" rx="7" ry="4" fill="#BBDEFB" opacity="0.6"/>
      <ellipse cx="82" cy="35" rx="5" ry="3" fill="#BBDEFB" opacity="0.6"/>
      <path d="M65,70 Q68,65 72,70" stroke="#FF8F00" stroke-width="2" fill="#FFCA28"/>
      <circle cx="68" cy="65" r="4" fill="#FF8F00"/>
      <circle cx="69" cy="64" r="1.5" fill="#333"/>
    </svg>`,
    speech: 'かわ。川という漢字を覚えましょう！川の流れに似ているね。',
    questionSpeech: 'かわという漢字はどれかな？',
  },
  {
    kanji: '木', reading: 'き', meaning: 'tree',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#E8F5E9"/>
      <rect x="44" y="58" width="12" height="35" rx="4" fill="#8B5E3C"/>
      <circle cx="50" cy="38" r="28" fill="#4CAF50"/>
      <circle cx="36" cy="48" r="18" fill="#388E3C"/>
      <circle cx="64" cy="48" r="18" fill="#388E3C"/>
      <circle cx="50" cy="25" r="20" fill="#66BB6A"/>
      <circle cx="50" cy="25" r="12" fill="#81C784"/>
      <ellipse cx="44" cy="30" rx="5" ry="3" fill="#A5D6A7" opacity="0.6"/>
      <rect x="0" y="90" width="100" height="10" fill="#8BC34A"/>
      <circle cx="80" cy="20" r="6" fill="#FFEB3B" opacity="0.9"/>
      <path d="M76,20 L80,12 L84,20" stroke="#FFEB3B" stroke-width="1.5" fill="none"/>
    </svg>`,
    speech: 'き。木という漢字を覚えましょう！木の形に似ているね。',
    questionSpeech: 'きという漢字はどれかな？',
  },
  {
    kanji: '日', reading: 'ひ', meaning: 'sun / day',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#E3F2FD"/>
      <circle cx="50" cy="50" r="24" fill="#FFEB3B"/>
      <circle cx="50" cy="50" r="18" fill="#FFC107"/>
      <circle cx="50" cy="50" r="12" fill="#FFD740"/>
      <!-- Rays -->
      <line x1="50" y1="10" x2="50" y2="20" stroke="#FFCC02" stroke-width="4" stroke-linecap="round"/>
      <line x1="50" y1="80" x2="50" y2="90" stroke="#FFCC02" stroke-width="4" stroke-linecap="round"/>
      <line x1="10" y1="50" x2="20" y2="50" stroke="#FFCC02" stroke-width="4" stroke-linecap="round"/>
      <line x1="80" y1="50" x2="90" y2="50" stroke="#FFCC02" stroke-width="4" stroke-linecap="round"/>
      <line x1="22" y1="22" x2="29" y2="29" stroke="#FFCC02" stroke-width="4" stroke-linecap="round"/>
      <line x1="71" y1="71" x2="78" y2="78" stroke="#FFCC02" stroke-width="4" stroke-linecap="round"/>
      <line x1="78" y1="22" x2="71" y2="29" stroke="#FFCC02" stroke-width="4" stroke-linecap="round"/>
      <line x1="29" y1="71" x2="22" y2="78" stroke="#FFCC02" stroke-width="4" stroke-linecap="round"/>
      <!-- Face -->
      <circle cx="43" cy="48" r="3" fill="#E65100"/>
      <circle cx="57" cy="48" r="3" fill="#E65100"/>
      <path d="M42,56 Q50,62 58,56" stroke="#E65100" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`,
    speech: 'ひ。日という漢字を覚えましょう！太陽の形に似ているね。',
    questionSpeech: 'ひという漢字はどれかな？',
  },
  {
    kanji: '月', reading: 'つき', meaning: 'moon / month',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#1A1A2E"/>
      <circle cx="55" cy="50" r="28" fill="#B0BEC5"/>
      <circle cx="38" cy="48" r="28" fill="#1A1A2E"/>
      <circle cx="60" cy="38" r="6" fill="#90A4AE" opacity="0.5"/>
      <circle cx="55" cy="55" r="4" fill="#90A4AE" opacity="0.4"/>
      <circle cx="68" cy="58" r="3" fill="#90A4AE" opacity="0.35"/>
      <circle cx="15" cy="15" r="2" fill="white"/>
      <circle cx="30" cy="8"  r="1.5" fill="white"/>
      <circle cx="8"  cy="40" r="1.5" fill="white"/>
      <circle cx="20" cy="70" r="1.5" fill="white"/>
      <circle cx="85" cy="80" r="2" fill="white"/>
      <circle cx="92" cy="18" r="2" fill="white"/>
      <circle cx="78" cy="12" r="1.5" fill="white"/>
      <circle cx="5"  cy="85" r="1.5" fill="white"/>
      <circle cx="45" cy="90" r="1.5" fill="white"/>
    </svg>`,
    speech: 'つき。月という漢字を覚えましょう！三日月の形に似ているね。',
    questionSpeech: 'つきという漢字はどれかな？',
  },
  {
    kanji: '火', reading: 'ひ', meaning: 'fire',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#1C1C1C"/>
      <ellipse cx="50" cy="88" rx="30" ry="10" fill="#37474F"/>
      <!-- Outer flame -->
      <path d="M50,15 Q70,35 65,55 Q80,40 72,65 Q65,80 50,85 Q35,80 28,65 Q20,40 35,55 Q30,35 50,15Z" fill="#FF6F00"/>
      <!-- Mid flame -->
      <path d="M50,28 Q64,44 60,58 Q70,46 63,67 Q57,78 50,80 Q43,78 37,67 Q30,46 40,58 Q36,44 50,28Z" fill="#FFA726"/>
      <!-- Inner flame -->
      <path d="M50,40 Q58,52 55,62 Q62,55 57,68 Q53,75 50,76 Q47,75 43,68 Q38,55 45,62 Q42,52 50,40Z" fill="#FFEE58"/>
      <circle cx="50" cy="65" r="8" fill="#FFF9C4" opacity="0.8"/>
    </svg>`,
    speech: 'ひ。火という漢字を覚えましょう！炎の形に似ているね。',
    questionSpeech: 'ひという漢字はどれかな？',
  },
  {
    kanji: '水', reading: 'みず', meaning: 'water',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#E0F7FA"/>
      <!-- Big drop -->
      <path d="M50,15 Q70,40 70,58 Q70,76 50,82 Q30,76 30,58 Q30,40 50,15Z" fill="#29B6F6"/>
      <path d="M50,22 Q65,42 65,58 Q65,73 50,78" stroke="white" stroke-width="3" fill="none" opacity="0.4" stroke-linecap="round"/>
      <ellipse cx="42" cy="48" rx="5" ry="8" fill="white" opacity="0.35" transform="rotate(-20,42,48)"/>
      <!-- Small drops -->
      <path d="M22,50 Q30,62 22,68 Q14,62 22,50Z" fill="#4FC3F7"/>
      <path d="M78,45 Q86,57 78,63 Q70,57 78,45Z" fill="#4FC3F7"/>
      <path d="M50,88 Q55,94 50,97 Q45,94 50,88Z" fill="#4FC3F7"/>
    </svg>`,
    speech: 'みず。水という漢字を覚えましょう！水の流れに似ているね。',
    questionSpeech: 'みずという漢字はどれかな？',
  },
  {
    kanji: '土', reading: 'つち', meaning: 'earth / soil',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#E8F5E9"/>
      <rect x="0" y="60" width="100" height="40" fill="#8D6E63"/>
      <rect x="0" y="60" width="100" height="6" fill="#A1887F"/>
      <!-- Flower -->
      <rect x="47" y="30" width="6" height="35" fill="#558B2F"/>
      <ellipse cx="50" cy="28" rx="16" ry="16" fill="#FFEE58"/>
      <circle cx="50" cy="28" r="9" fill="#FF8F00"/>
      <circle cx="50" cy="28" r="5" fill="#FFCC02"/>
      <!-- Leaf -->
      <path d="M47,48 Q35,45 32,52 Q40,48 47,50" fill="#66BB6A"/>
      <!-- Soil texture -->
      <circle cx="20" cy="72" r="4" fill="#6D4C41" opacity="0.5"/>
      <circle cx="40" cy="78" r="3" fill="#6D4C41" opacity="0.4"/>
      <circle cx="70" cy="70" r="5" fill="#6D4C41" opacity="0.5"/>
      <circle cx="88" cy="80" r="3" fill="#6D4C41" opacity="0.4"/>
    </svg>`,
    speech: 'つち。土という漢字を覚えましょう！土の十字の形に似ているね。',
    questionSpeech: 'つちという漢字はどれかな？',
  },
  {
    kanji: '人', reading: 'ひと', meaning: 'person',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF3E0"/>
      <!-- Person figure -->
      <circle cx="50" cy="22" r="14" fill="#FFB74D"/>
      <circle cx="44" cy="19" r="2.5" fill="#5D4037"/>
      <circle cx="56" cy="19" r="2.5" fill="#5D4037"/>
      <path d="M44,27 Q50,32 56,27" stroke="#E65100" stroke-width="2" fill="none" stroke-linecap="round"/>
      <ellipse cx="45" cy="18" rx="2" ry="1.5" fill="#FFCC02" opacity="0.6"/>
      <!-- Body -->
      <path d="M28,78 Q35,45 50,40 Q65,45 72,78" fill="#42A5F5"/>
      <!-- Arms -->
      <path d="M50,50 Q30,62 25,72" stroke="#FFB74D" stroke-width="9" fill="none" stroke-linecap="round"/>
      <path d="M50,50 Q70,62 75,72" stroke="#FFB74D" stroke-width="9" fill="none" stroke-linecap="round"/>
      <!-- Legs -->
      <rect x="37" y="76" width="11" height="18" rx="5" fill="#1565C0"/>
      <rect x="52" y="76" width="11" height="18" rx="5" fill="#1565C0"/>
      <!-- Shoes -->
      <ellipse cx="42" cy="94" rx="8" ry="4" fill="#5D4037"/>
      <ellipse cx="57" cy="94" rx="8" ry="4" fill="#5D4037"/>
    </svg>`,
    speech: 'ひと。人という漢字を覚えましょう！人が歩いている形に似ているね。',
    questionSpeech: 'ひとという漢字はどれかな？',
  },
  {
    kanji: '口', reading: 'くち', meaning: 'mouth',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FCE4EC"/>
      <!-- Big face -->
      <circle cx="50" cy="50" r="38" fill="#FFCC80"/>
      <!-- Eyes -->
      <circle cx="36" cy="40" r="7" fill="white"/>
      <circle cx="64" cy="40" r="7" fill="white"/>
      <circle cx="37" cy="41" r="4" fill="#333"/>
      <circle cx="65" cy="41" r="4" fill="#333"/>
      <circle cx="38" cy="40" r="1.5" fill="white"/>
      <circle cx="66" cy="40" r="1.5" fill="white"/>
      <!-- Brows -->
      <path d="M30,33 Q36,29 42,33" stroke="#8B6914" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M58,33 Q64,29 70,33" stroke="#8B6914" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- BIG mouth -->
      <rect x="28" y="56" width="44" height="26" rx="12" fill="#E53935"/>
      <rect x="30" y="56" width="40" height="12" rx="8" fill="#FF8A80"/>
      <rect x="28" y="60" width="44" height="14" rx="0 0 10 10" fill="#B71C1C"/>
      <!-- Teeth -->
      <rect x="32" y="56" width="10" height="10" rx="2" fill="white"/>
      <rect x="44" y="56" width="10" height="10" rx="2" fill="white"/>
      <rect x="56" y="56" width="10" height="10" rx="2" fill="white"/>
      <!-- Tongue -->
      <ellipse cx="50" cy="72" rx="12" ry="7" fill="#FF7043"/>
    </svg>`,
    speech: 'くち。口という漢字を覚えましょう！口の形に似ているね。',
    questionSpeech: 'くちという漢字はどれかな？',
  },
  /* ---- 20 kanji set (additional 10) ---- */
  {
    kanji: '目', reading: 'め', meaning: 'eye',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#E8EAF6"/>
      <ellipse cx="50" cy="50" rx="38" ry="26" fill="white" stroke="#3E2723" stroke-width="3"/>
      <circle cx="50" cy="50" r="18" fill="#42A5F5"/>
      <circle cx="50" cy="50" r="12" fill="#1565C0"/>
      <circle cx="50" cy="50" r="7"  fill="#0D1B2A"/>
      <circle cx="47" cy="46" r="3"  fill="white"/>
      <circle cx="54" cy="52" r="2"  fill="white" opacity="0.7"/>
      <!-- Eyelashes -->
      <line x1="15" y1="40" x2="20" y2="46" stroke="#3E2723" stroke-width="2" stroke-linecap="round"/>
      <line x1="22" y1="34" x2="25" y2="41" stroke="#3E2723" stroke-width="2" stroke-linecap="round"/>
      <line x1="30" y1="30" x2="31" y2="37" stroke="#3E2723" stroke-width="2" stroke-linecap="round"/>
      <line x1="85" y1="40" x2="80" y2="46" stroke="#3E2723" stroke-width="2" stroke-linecap="round"/>
      <line x1="78" y1="34" x2="75" y2="41" stroke="#3E2723" stroke-width="2" stroke-linecap="round"/>
      <line x1="70" y1="30" x2="69" y2="37" stroke="#3E2723" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    speech: 'め。目という漢字を覚えましょう！目の形に似ているね。',
    questionSpeech: 'めという漢字はどれかな？',
  },
  {
    kanji: '耳', reading: 'みみ', meaning: 'ear',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF8E1"/>
      <!-- Side of face -->
      <ellipse cx="42" cy="50" rx="30" ry="40" fill="#FFCC80"/>
      <!-- Ear shape -->
      <path d="M65,30 Q82,35 84,50 Q82,65 65,70 Q74,65 72,50 Q74,35 65,30Z" fill="#FFB74D"/>
      <path d="M68,38 Q78,43 78,50 Q78,57 68,62 Q73,58 72,50 Q73,42 68,38Z" fill="#FF8A65"/>
      <!-- Music notes floating -->
      <text x="16" y="25" font-size="16" fill="#AB47BC">♪</text>
      <text x="72" y="18" font-size="14" fill="#7E57C2">♫</text>
      <text x="10" y="75" font-size="12" fill="#AB47BC">♩</text>
      <!-- Eye suggestion -->
      <circle cx="38" cy="42" r="5" fill="white"/>
      <circle cx="39" cy="42" r="3" fill="#333"/>
    </svg>`,
    speech: 'みみ。耳という漢字を覚えましょう！耳の形に似ているね。',
    questionSpeech: 'みみという漢字はどれかな？',
  },
  {
    kanji: '手', reading: 'て', meaning: 'hand',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#E8F5E9"/>
      <!-- Palm -->
      <ellipse cx="50" cy="68" rx="26" ry="22" fill="#FFCC80"/>
      <!-- Fingers -->
      <rect x="28" y="28" width="11" height="32" rx="5.5" fill="#FFCC80"/>
      <rect x="41" y="22" width="11" height="34" rx="5.5" fill="#FFCC80"/>
      <rect x="54" y="24" width="11" height="32" rx="5.5" fill="#FFCC80"/>
      <rect x="67" y="30" width="11" height="28" rx="5.5" fill="#FFCC80"/>
      <!-- Thumb -->
      <ellipse cx="22" cy="60" rx="8" ry="12" fill="#FFCC80" transform="rotate(-30,22,60)"/>
      <!-- Knuckle lines -->
      <line x1="31" y1="55" x2="37" y2="55" stroke="#E0A060" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="44" y1="52" x2="50" y2="52" stroke="#E0A060" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="57" y1="53" x2="63" y2="53" stroke="#E0A060" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="70" y1="56" x2="76" y2="56" stroke="#E0A060" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Sparkle -->
      <text x="78" y="22" font-size="18" fill="#FFD700">✨</text>
    </svg>`,
    speech: 'て。手という漢字を覚えましょう！手の指の形に似ているね。',
    questionSpeech: 'てという漢字はどれかな？',
  },
  {
    kanji: '足', reading: 'あし', meaning: 'foot / leg',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF3E0"/>
      <!-- Leg -->
      <rect x="36" y="10" width="18" height="55" rx="9" fill="#FFCC80"/>
      <!-- Foot -->
      <ellipse cx="55" cy="72" rx="28" ry="16" fill="#FFCC80"/>
      <!-- Toes -->
      <circle cx="32" cy="68" r="7" fill="#FFB74D"/>
      <circle cx="42" cy="64" r="7" fill="#FFB74D"/>
      <circle cx="53" cy="62" r="7" fill="#FFB74D"/>
      <circle cx="64" cy="63" r="6" fill="#FFB74D"/>
      <circle cx="74" cy="66" r="5" fill="#FFB74D"/>
      <!-- Toenails -->
      <ellipse cx="32" cy="65" rx="4" ry="2.5" fill="#FFF9C4"/>
      <ellipse cx="42" cy="61" rx="4" ry="2.5" fill="#FFF9C4"/>
      <ellipse cx="53" cy="59" rx="4" ry="2.5" fill="#FFF9C4"/>
      <ellipse cx="64" cy="60" rx="3.5" ry="2.5" fill="#FFF9C4"/>
      <ellipse cx="74" cy="63" rx="3" ry="2" fill="#FFF9C4"/>
      <!-- Shadow -->
      <ellipse cx="55" cy="88" rx="25" ry="6" fill="#E0E0E0" opacity="0.5"/>
    </svg>`,
    speech: 'あし。足という漢字を覚えましょう！足の形に似ているね。',
    questionSpeech: 'あしという漢字はどれかな？',
  },
  {
    kanji: '大', reading: 'おおきい', meaning: 'big',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF8E1"/>
      <!-- Big elephant -->
      <ellipse cx="50" cy="65" rx="35" ry="26" fill="#9E9E9E"/>
      <!-- Head -->
      <circle cx="75" cy="48" r="22" fill="#9E9E9E"/>
      <!-- Ear -->
      <ellipse cx="88" cy="48" rx="12" ry="16" fill="#BDBDBD"/>
      <!-- Eye -->
      <circle cx="72" cy="42" r="4" fill="white"/>
      <circle cx="72" cy="42" r="2.5" fill="#333"/>
      <circle cx="72" cy="41" r="1" fill="white"/>
      <!-- Trunk -->
      <path d="M65,60 Q58,68 60,80 Q64,88 58,90" stroke="#9E9E9E" stroke-width="10" fill="none" stroke-linecap="round"/>
      <!-- Legs -->
      <rect x="20" y="82" width="14" height="16" rx="7" fill="#757575"/>
      <rect x="38" y="84" width="14" height="14" rx="7" fill="#757575"/>
      <rect x="55" y="84" width="14" height="14" rx="7" fill="#757575"/>
      <rect x="72" y="82" width="14" height="16" rx="7" fill="#757575"/>
      <!-- Tusk -->
      <path d="M72,64 Q66,70 62,78" stroke="ivory" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Size arrows -->
      <text x="5"  y="20" font-size="20" fill="#FF7043">↔</text>
      <text x="65" y="20" font-size="14" fill="#FF7043">BIG!</text>
    </svg>`,
    speech: 'おおきい。大という漢字を覚えましょう！大きく手を広げた人の形に似ているね。',
    questionSpeech: 'おおきいという漢字はどれかな？',
  },
  {
    kanji: '小', reading: 'ちいさい', meaning: 'small',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#E8F5E9"/>
      <!-- Tiny mouse -->
      <ellipse cx="50" cy="62" rx="22" ry="16" fill="#BDBDBD"/>
      <!-- Head -->
      <circle cx="68" cy="52" r="16" fill="#BDBDBD"/>
      <!-- Big ears -->
      <ellipse cx="76" cy="38" rx="8" ry="10" fill="#EEEEEE"/>
      <ellipse cx="76" cy="38" rx="5" ry="7" fill="#F8BBD0"/>
      <ellipse cx="62" cy="36" rx="7" ry="9" fill="#EEEEEE"/>
      <ellipse cx="62" cy="36" rx="4.5" ry="6" fill="#F8BBD0"/>
      <!-- Face -->
      <circle cx="65" cy="50" r="2.5" fill="#333"/>
      <circle cx="72" cy="50" r="2.5" fill="#333"/>
      <ellipse cx="68" cy="55" rx="2.5" ry="1.5" fill="#FF8A80"/>
      <path d="M63,58 Q68,62 73,58" stroke="#FF8A80" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <!-- Whiskers -->
      <line x1="55" y1="55" x2="64" y2="56" stroke="#888" stroke-width="1"/>
      <line x1="54" y1="58" x2="64" y2="57" stroke="#888" stroke-width="1"/>
      <line x1="72" y1="56" x2="81" y2="55" stroke="#888" stroke-width="1"/>
      <line x1="72" y1="57" x2="81" y2="58" stroke="#888" stroke-width="1"/>
      <!-- Tail -->
      <path d="M28,62 Q18,55 22,45" stroke="#BDBDBD" stroke-width="4" fill="none" stroke-linecap="round"/>
      <!-- Legs -->
      <ellipse cx="40" cy="76" rx="7" ry="5" fill="#EEEEEE"/>
      <ellipse cx="58" cy="78" rx="7" ry="5" fill="#EEEEEE"/>
      <!-- Cheese -->
      <polygon points="10,85 22,70 34,85" fill="#FDD835"/>
      <circle cx="18" cy="81" r="2" fill="#F9A825"/>
      <circle cx="25" cy="76" r="1.5" fill="#F9A825"/>
    </svg>`,
    speech: 'ちいさい。小という漢字を覚えましょう！小さなものの形に似ているね。',
    questionSpeech: 'ちいさいという漢字はどれかな？',
  },
  {
    kanji: '上', reading: 'うえ', meaning: 'up / above',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#E3F2FD"/>
      <!-- Cloud going up -->
      <circle cx="50" cy="35" r="22" fill="white"/>
      <circle cx="35" cy="42" r="16" fill="white"/>
      <circle cx="65" cy="42" r="16" fill="white"/>
      <circle cx="50" cy="48" r="18" fill="white"/>
      <!-- Arrow UP -->
      <polygon points="50,5 38,25 62,25" fill="#2196F3"/>
      <rect x="43" y="24" width="14" height="20" fill="#2196F3"/>
      <!-- Floor line -->
      <rect x="10" y="75" width="80" height="6" rx="3" fill="#8D6E63"/>
      <!-- Small bird on top -->
      <path d="M40,20 Q50,10 60,20" stroke="#333" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <circle cx="50" cy="15" r="3" fill="#FF7043"/>
    </svg>`,
    speech: 'うえ。上という漢字を覚えましょう！上を指している形に似ているね。',
    questionSpeech: 'うえという漢字はどれかな？',
  },
  {
    kanji: '下', reading: 'した', meaning: 'down / below',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FFF8E1"/>
      <!-- Arrow DOWN -->
      <rect x="43" y="15" width="14" height="20" fill="#FF7043"/>
      <polygon points="50,55 38,35 62,35" fill="#FF7043"/>
      <!-- Ground -->
      <rect x="10" y="60" width="80" height="6" rx="3" fill="#8D6E63"/>
      <!-- Things falling down -->
      <circle cx="30" cy="30" r="10" fill="#FFEB3B"/>
      <path d="M26,26 Q30,22 34,26 Q30,32 26,26Z" fill="#FFC107"/>
      <circle cx="75" cy="25" r="8" fill="#FF6B9D"/>
      <!-- Falling path dashes -->
      <line x1="30" y1="40" x2="30" y2="58" stroke="#888" stroke-width="2" stroke-dasharray="4,3"/>
      <line x1="75" y1="33" x2="75" y2="58" stroke="#888" stroke-width="2" stroke-dasharray="4,3"/>
      <!-- Grass below -->
      <rect x="0" y="66" width="100" height="34" fill="#A5D6A7"/>
      <circle cx="20" cy="66" r="10" fill="#66BB6A"/>
      <circle cx="50" cy="66" r="12" fill="#66BB6A"/>
      <circle cx="80" cy="66" r="10" fill="#66BB6A"/>
    </svg>`,
    speech: 'した。下という漢字を覚えましょう！下を向いている形に似ているね。',
    questionSpeech: 'したという漢字はどれかな？',
  },
  {
    kanji: '子', reading: 'こ', meaning: 'child',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#FCE4EC"/>
      <!-- Kid figure -->
      <circle cx="50" cy="22" r="16" fill="#FFCC80"/>
      <!-- Hair -->
      <path d="M34,18 Q36,8 50,8 Q64,8 66,18" fill="#8D6E63"/>
      <circle cx="36" cy="16" r="4" fill="#8D6E63"/>
      <circle cx="64" cy="16" r="4" fill="#8D6E63"/>
      <!-- Face -->
      <circle cx="43" cy="20" r="3" fill="white"/>
      <circle cx="57" cy="20" r="3" fill="white"/>
      <circle cx="44" cy="21" r="2" fill="#333"/>
      <circle cx="58" cy="21" r="2" fill="#333"/>
      <path d="M43,29 Q50,35 57,29" stroke="#E91E63" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle cx="44" cy="27" r="3" fill="#FFAB91" opacity="0.6"/>
      <circle cx="56" cy="27" r="3" fill="#FFAB91" opacity="0.6"/>
      <!-- Body -->
      <rect x="33" y="36" width="34" height="30" rx="10" fill="#F48FB1"/>
      <!-- Arms -->
      <path d="M33,46 Q20,48 16,58" stroke="#FFCC80" stroke-width="8" fill="none" stroke-linecap="round"/>
      <path d="M67,46 Q80,48 84,58" stroke="#FFCC80" stroke-width="8" fill="none" stroke-linecap="round"/>
      <!-- Balloon in hand -->
      <circle cx="84" cy="46" r="10" fill="#FF6B9D"/>
      <line x1="84" y1="56" x2="84" y2="58" stroke="#888" stroke-width="1.5"/>
      <!-- Legs -->
      <rect x="35" y="64" width="12" height="22" rx="6" fill="#1565C0"/>
      <rect x="53" y="64" width="12" height="22" rx="6" fill="#1565C0"/>
      <ellipse cx="41" cy="86" rx="8" ry="4" fill="#5D4037"/>
      <ellipse cx="59" cy="86" rx="8" ry="4" fill="#5D4037"/>
    </svg>`,
    speech: 'こ。子という漢字を覚えましょう！子どもの形に似ているね。',
    questionSpeech: 'こという漢字はどれかな？',
  },
  {
    kanji: '花', reading: 'はな', meaning: 'flower',
    illust: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="#F3E5F5"/>
      <!-- Stem -->
      <rect x="47" y="60" width="6" height="35" rx="3" fill="#558B2F"/>
      <!-- Leaves -->
      <path d="M47,75 Q32,68 30,55 Q42,62 47,72" fill="#66BB6A"/>
      <path d="M53,70 Q68,63 70,50 Q58,57 53,67" fill="#66BB6A"/>
      <!-- Petals -->
      <ellipse cx="50" cy="32" rx="10" ry="18" fill="#FF80AB" transform="rotate(0,50,50)"/>
      <ellipse cx="50" cy="32" rx="10" ry="18" fill="#FF4081" transform="rotate(45,50,50)"/>
      <ellipse cx="50" cy="32" rx="10" ry="18" fill="#FF80AB" transform="rotate(90,50,50)"/>
      <ellipse cx="50" cy="32" rx="10" ry="18" fill="#FF4081" transform="rotate(135,50,50)"/>
      <ellipse cx="50" cy="32" rx="10" ry="18" fill="#FF80AB" transform="rotate(180,50,50)"/>
      <ellipse cx="50" cy="32" rx="10" ry="18" fill="#FF4081" transform="rotate(225,50,50)"/>
      <ellipse cx="50" cy="32" rx="10" ry="18" fill="#FF80AB" transform="rotate(270,50,50)"/>
      <ellipse cx="50" cy="32" rx="10" ry="18" fill="#FF4081" transform="rotate(315,50,50)"/>
      <!-- Center -->
      <circle cx="50" cy="50" r="12" fill="#FFC107"/>
      <circle cx="50" cy="50" r="7" fill="#FF8F00"/>
      <!-- Butterfly -->
      <path d="M78,28 Q90,22 88,36 Q80,34 78,28Z" fill="#FF6B9D" opacity="0.8"/>
      <path d="M78,28 Q90,34 86,46 Q79,40 78,28Z" fill="#FF4081" opacity="0.7"/>
      <circle cx="78" cy="28" r="2" fill="#333"/>
    </svg>`,
    speech: 'はな。花という漢字を覚えましょう！きれいな花の形に似ているね。',
    questionSpeech: 'はなという漢字はどれかな？',
  },
];

/* ===========================
   APP STATE
   =========================== */
const State = {
  sound: true,
  difficulty: 'easy',
  currentKanjiSet: [],
  questionQueue: [],
  currentQ: null,
  score: 0,
  combo: 0,
  maxCombo: 0,
  totalQuestions: 10,
  answered: 0,
  results: [],        // {kanji, correct}
  learnedKanji: new Set(),
  bestStreak: 0,
  totalCorrect: 0,
  totalGames: 0,
};

/* ===========================
   STORAGE
   =========================== */
const Store = {
  save() {
    try {
      localStorage.setItem('kanjiApp', JSON.stringify({
        sound:        State.sound,
        difficulty:   State.difficulty,
        bestStreak:   State.bestStreak,
        totalCorrect: State.totalCorrect,
        totalGames:   State.totalGames,
        learnedKanji: [...State.learnedKanji],
      }));
    } catch(e) {}
  },
  load() {
    try {
      const d = JSON.parse(localStorage.getItem('kanjiApp') || '{}');
      if (d.sound       !== undefined) State.sound       = d.sound;
      if (d.difficulty)                State.difficulty  = d.difficulty;
      if (d.bestStreak)                State.bestStreak  = d.bestStreak;
      if (d.totalCorrect)              State.totalCorrect= d.totalCorrect;
      if (d.totalGames)                State.totalGames  = d.totalGames;
      if (d.learnedKanji)              State.learnedKanji= new Set(d.learnedKanji);
    } catch(e) {}
  },
};

/* ===========================
   SPEECH
   =========================== */
const Speech = {
  say(text) {
    if (!State.sound) return;
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang  = 'ja-JP';
    u.rate  = 0.85;
    u.pitch = 1.2;
    window.speechSynthesis.speak(u);
  },
  cancel() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
  }
};

/* ===========================
   CONFETTI
   =========================== */
const Confetti = (() => {
  let canvas, ctx, particles = [], raf = null;

  const COLORS = ['#FF6B9D','#FFD700','#5B8DEF','#4ECDC4','#A855F7','#FF8C42'];

  function init() {
    canvas = document.getElementById('confettiCanvas');
    ctx    = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);
  }

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function burst(count = 80) {
    const cx = window.innerWidth  / 2;
    const cy = window.innerHeight / 3;
    for (let i = 0; i < count; i++) {
      const angle = (Math.random() * Math.PI * 2);
      const speed = 4 + Math.random() * 10;
      particles.push({
        x: cx + (Math.random()-0.5)*60,
        y: cy,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        gravity: 0.25,
        color: COLORS[Math.floor(Math.random()*COLORS.length)],
        size: 6 + Math.random()*8,
        rotation: Math.random()*360,
        rotSpeed: (Math.random()-0.5)*8,
        alpha: 1,
        shape: Math.random() < 0.5 ? 'rect' : 'circle',
      });
    }
    if (!raf) loop();
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.alpha > 0.02);
    for (const p of particles) {
      p.x  += p.vx;
      p.y  += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.99;
      p.rotation += p.rotSpeed;
      p.alpha -= 0.012;
      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI/180);
      ctx.fillStyle = p.color;
      if (p.shape === 'rect') {
        ctx.fillRect(-p.size/2, -p.size/4, p.size, p.size/2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size/2, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
    }
    if (particles.length > 0) {
      raf = requestAnimationFrame(loop);
    } else {
      raf = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  return { init, burst };
})();

/* ===========================
   STAR BURST (small)
   =========================== */
function starBurst(el) {
  const rect = el.getBoundingClientRect();
  const cx   = rect.left + rect.width/2;
  const cy   = rect.top  + rect.height/2;
  const emojis = ['⭐','✨','💫','🌟'];
  for (let i = 0; i < 6; i++) {
    const span = document.createElement('span');
    span.className  = 'starburst';
    span.textContent= emojis[Math.floor(Math.random()*emojis.length)];
    const angle = (i / 6) * Math.PI * 2;
    const dist  = 60 + Math.random()*40;
    span.style.left = cx + 'px';
    span.style.top  = cy + 'px';
    span.style.setProperty('--dx', Math.cos(angle)*dist + 'px');
    span.style.setProperty('--dy', Math.sin(angle)*dist + 'px');
    document.body.appendChild(span);
    setTimeout(() => span.remove(), 900);
  }
}

/* ===========================
   APP CONTROLLER
   =========================== */
const App = {
  /* ---- Screen management ---- */
  showScreen(name) {
    Speech.cancel();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('screen-' + name);
    if (el) el.classList.add('active');
    if (name === 'records') this.renderRecords();
    if (name === 'settings') this.renderSettings();
    if (name === 'menu') this.menuVoice();
  },

  menuVoice() {
    setTimeout(() => Speech.say('かんじだいすき！いっしょにかんじをおぼえよう！'), 400);
  },

  /* ---- Settings ---- */
  renderSettings() {
    document.getElementById('soundToggle').checked = State.sound;
    document.getElementById('diff-easy').classList.toggle('active', State.difficulty === 'easy');
    document.getElementById('diff-hard').classList.toggle('active', State.difficulty === 'hard');
  },

  toggleSound(val) { State.sound = val; },

  setDifficulty(d) {
    State.difficulty = d;
    document.getElementById('diff-easy').classList.toggle('active', d === 'easy');
    document.getElementById('diff-hard').classList.toggle('active', d === 'hard');
  },

  saveSettings() {
    Store.save();
    Speech.say('ほぞんしました！');
    setTimeout(() => this.showScreen('menu'), 800);
  },

  /* ---- Records ---- */
  renderRecords() {
    document.getElementById('recordNumber').textContent  = State.bestStreak;
    document.getElementById('totalCorrect').textContent  = State.totalCorrect;
    document.getElementById('totalGames').textContent    = State.totalGames;
    document.getElementById('learnedKanji').textContent  = State.learnedKanji.size;

    const icon = State.bestStreak >= 10 ? '🏆' : State.bestStreak >= 5 ? '🥈' : '🥉';
    document.getElementById('trophyIcon').textContent = icon;

    const wrap = document.getElementById('learnedKanjiDisplay');
    wrap.innerHTML = '';
    [...State.learnedKanji].forEach(k => {
      const b = document.createElement('div');
      b.className    = 'learned-kanji-badge';
      b.textContent  = k;
      wrap.appendChild(b);
    });
  },

  confirmReset() {
    if (confirm('きろくをけしますか？')) {
      State.bestStreak    = 0;
      State.totalCorrect  = 0;
      State.totalGames    = 0;
      State.learnedKanji  = new Set();
      Store.save();
      this.renderRecords();
      Speech.say('きろくをけしました');
    }
  },

  /* ---- Game ---- */
  startGame() {
    const set = State.difficulty === 'hard' ? KANJI_DATA : KANJI_DATA.slice(0, 10);
    State.currentKanjiSet = set;
    State.totalQuestions  = 10;
    State.score    = 0;
    State.combo    = 0;
    State.maxCombo = 0;
    State.answered = 0;
    State.results  = [];

    // Shuffle and pick 10
    const shuffled = [...set].sort(() => Math.random()-0.5);
    State.questionQueue = shuffled.slice(0, State.totalQuestions);

    this.showScreen('game');
    this._updateProgress();
    this._nextQuestion();
  },

  _nextQuestion() {
    if (State.answered >= State.totalQuestions) {
      this._endGame();
      return;
    }
    State.currentQ = State.questionQueue[State.answered];

    // Reset UI
    document.getElementById('kanjiDisplay').classList.remove('revealed');
    document.getElementById('transformArrow').classList.remove('visible');
    document.getElementById('kanjiChar').textContent = State.currentQ.kanji;
    document.getElementById('speechText').textContent = 'このイラストはどんなかんじ？';
    document.getElementById('comboDisplay').textContent = '';

    // Show illustration
    document.getElementById('illustrationWrap').innerHTML = State.currentQ.illust;

    // Build choices (3 wrong + 1 correct)
    const correct   = State.currentQ;
    const wrong     = State.currentKanjiSet
      .filter(k => k.kanji !== correct.kanji)
      .sort(() => Math.random()-0.5)
      .slice(0, 3);
    const choices   = [...wrong, correct].sort(() => Math.random()-0.5);

    const grid = document.getElementById('choicesGrid');
    grid.innerHTML = '';
    choices.forEach(k => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.innerHTML = `
        <span class="choice-kanji">${k.kanji}</span>
        <span class="choice-reading">${k.reading}</span>
      `;
      btn.onclick = () => this._answer(btn, k.kanji === correct.kanji, k);
      grid.appendChild(btn);
    });

    this._updateProgress();

    // Speak question after short delay
    setTimeout(() => Speech.say(correct.questionSpeech), 300);
  },

  _answer(btn, isCorrect, chosen) {
    // Disable all buttons
    document.querySelectorAll('.choice-btn').forEach(b => b.onclick = null);

    const correct = State.currentQ;

    // Show illustration→kanji transform
    document.getElementById('transformArrow').classList.add('visible');
    setTimeout(() => {
      document.getElementById('kanjiDisplay').classList.add('revealed');
    }, 200);

    if (isCorrect) {
      btn.classList.add('correct');
      State.score++;
      State.combo++;
      if (State.combo > State.maxCombo) State.maxCombo = State.combo;
      State.totalCorrect++;
      State.learnedKanji.add(correct.kanji);

      starBurst(btn);

      const comboEl = document.getElementById('comboDisplay');
      if (State.combo >= 3) {
        comboEl.textContent = `🔥 ${State.combo}れんぞく せいかい！`;
      } else {
        comboEl.textContent = '';
      }

      document.getElementById('speechText').textContent = `せいかい！「${correct.kanji}（${correct.reading}）」だよ！`;
      Speech.say(correct.speech);

      if (State.combo >= 3) {
        Confetti.burst(50);
      }

      // Neko happy animation
      this._nekoHappy();

    } else {
      btn.classList.add('wrong');
      State.combo = 0;
      document.getElementById('comboDisplay').textContent = '';
      document.getElementById('speechText').textContent = `ざんねん！「${correct.kanji}（${correct.reading}）」だったよ！`;
      Speech.say(`ざんねん！正解は「${correct.reading}」だよ。もう一度覚えようね！`);

      // Show correct answer
      document.querySelectorAll('.choice-btn').forEach(b => {
        if (b.querySelector('.choice-kanji').textContent === correct.kanji) {
          b.classList.add('correct');
        }
      });

      this._nekoSad();
    }

    State.results.push({ kanji: correct.kanji, reading: correct.reading, correct: isCorrect });
    State.answered++;
    this._updateScoreChip();
    this._updateProgress();

    // Next question after delay
    setTimeout(() => this._nextQuestion(), 1800);
  },

  _updateProgress() {
    const pct = (State.answered / State.totalQuestions) * 100;
    document.getElementById('progressBar').style.width = pct + '%';
  },

  _updateScoreChip() {
    document.getElementById('scoreChip').textContent = `⭐ ${State.score}`;
  },

  _nekoHappy() {
    const el = document.getElementById('nekoGame');
    el.style.transform = 'scale(1.15) rotate(10deg)';
    setTimeout(() => el.style.transform = '', 400);
  },
  _nekoSad() {
    const el = document.getElementById('nekoGame');
    el.style.transform = 'scale(0.9) rotate(-5deg)';
    setTimeout(() => el.style.transform = '', 400);
  },

  _endGame() {
    State.totalGames++;
    if (State.maxCombo > State.bestStreak) State.bestStreak = State.maxCombo;
    Store.save();

    // Result screen
    const pct = State.score / State.totalQuestions;
    const title = pct === 1 ? '💯 かんぺき！！！' :
                  pct >= 0.8 ? '✨ すごい！' :
                  pct >= 0.5 ? '👍 よくできました！' : '😊 れんしゅうしよう！';

    document.getElementById('resultTitle').textContent  = title;
    document.getElementById('resultScore').textContent  = `${State.score} / ${State.totalQuestions}`;

    if (State.maxCombo >= 3) {
      document.getElementById('resultStreak').textContent = `🔥 さいこうれんぞく：${State.maxCombo}もん！`;
    } else {
      document.getElementById('resultStreak').textContent = '';
    }

    // Review badges
    const rev = document.getElementById('resultKanjiReview');
    rev.innerHTML = '';
    State.results.forEach(r => {
      const b = document.createElement('div');
      b.className   = `review-badge ${r.correct ? 'ok' : 'bad'}`;
      b.innerHTML   = `${r.correct ? '✓' : '✗'} ${r.kanji}`;
      rev.appendChild(b);
    });

    this.showScreen('result');

    if (pct >= 0.8) {
      Confetti.burst(100);
      setTimeout(() => Speech.say(title + 'おめでとう！'), 300);
    } else {
      setTimeout(() => Speech.say(title + 'またれんしゅうしてね！'), 300);
    }
  },

  quitGame() {
    if (confirm('ゲームをやめますか？')) {
      Speech.cancel();
      this.showScreen('menu');
    }
  },
};

/* ===========================
   INIT
   =========================== */
document.addEventListener('DOMContentLoaded', () => {
  Confetti.init();
  Store.load();
  App.showScreen('menu');

  // Service Worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});
