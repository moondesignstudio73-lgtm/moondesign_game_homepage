import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const projects = [
  { no: '01', title: '오늘부터 1일', kind: 'STORY SIMULATION GAME', platform: 'PC / WEB', year: '2026', tone: 'sunset' },
  { no: '02', title: '경북 건강수호대', kind: 'VR EXPERIENCE GAME', platform: 'META QUEST · EYE TRACKING', year: '2026', tone: 'vr' },
  { no: '03', title: 'CHICKEN AIR', kind: 'CASUAL SHOOTING GAME', platform: 'WEB / MOBILE', year: '2026', tone: 'air' },
];
const services = [['01','GAME DEVELOPMENT','PC · WEB · MOBILE · SIMULATION · STORY GAME'],['02','VR / XR','META QUEST · EYE TRACKING · INTERACTIVE EXPERIENCE'],['03','APP / SOFTWARE','MOBILE APP · AUTOMATION · INTERNAL TOOLS'],['04','WEB SERVICE','WEBSITE · WEB APP · PLATFORM · COMMERCE']];

export default function Home() { return <main>
  <header className="site-header"><a className="logo" href="#top" aria-label="MDS 홈"><strong>MDS</strong><span>MOON DESIGN STUDIO</span></a><nav aria-label="주요 메뉴"><a href="#projects">PROJECTS</a><a href="#services">SERVICES</a><a href="#studio">STUDIO</a><a href="#tech">TECH</a><a href="#contact">CONTACT</a></nav><span className="online"><i /> LUNA ONLINE</span></header>
  <section className="hero" id="top"><div className="grid-lines"/><div className="hero-copy"><p className="eyebrow">MOON DESIGN STUDIO</p><h1>BUILD THE<br/>NEXT WORLD<span>.</span></h1><p className="disciplines">GAME <b>·</b> VR <b>·</b> APP <b>·</b> WEB <b>·</b> INTERACTIVE</p><p className="ko-copy">아이디어가 플레이되는 순간을 만듭니다.</p><div className="actions"><a className="button primary" href="#projects">VIEW PROJECTS ↗</a><a className="button" href="#contact">START A PROJECT</a></div></div>
    <div className="luna-stage" aria-label="MDS 디지털 오퍼레이터 루나"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><Image className="luna-art" src={`${basePath}/assets/luna/luna-hero.png`} alt="은빛 머리의 MDS 디지털 오퍼레이터 루나" width={1064} height={1478} priority/><div className="hud hud-a"><b>MDS SYSTEM</b><span>CONNECTION : STABLE</span></div><div className="hud hud-b"><b>GAME BUILD</b><span>ACTIVE</span></div></div>
    <aside className="operator"><p className="eyebrow">DIGITAL OPERATOR</p><h2>LUNA</h2><p className="unit">MDS-01 / SYSTEM ONLINE</p><p>MDS 네트워크와 다양한 디지털 월드를 연결하는 가상 오퍼레이터.</p><dl><div><dt>ROLE</dt><dd>DIGITAL OPERATOR</dd></div><div><dt>SPECIALTY</dt><dd>WORLD BUILDING</dd></div><div><dt>STATUS</dt><dd>ONLINE</dd></div></dl></aside><a className="scroll" href="#projects">↓ &nbsp; SCROLL TO EXPLORE</a></section>
  <section className="section projects" id="projects"><div className="section-heading"><p><em>01</em> / FEATURED PROJECTS</p><h2>SELECTED WORLDS</h2></div><div className="project-grid">{projects.map(p=><article className={`project ${p.tone}`} key={p.title}><span className="project-no">{p.no}</span><div className="project-copy"><h3>{p.title}</h3><p>{p.kind}</p><p>{p.platform}<br/>{p.year}</p><a href="#contact">VIEW PROJECT →</a></div></article>)}</div></section>
  <section className="section services" id="services"><div className="section-heading"><p><em>02</em> / CAPABILITIES</p><h2>WHAT WE BUILD</h2></div><div className="service-list">{services.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b></article>)}</div></section>
  <section className="manifesto" id="studio"><p className="eyebrow">WE ARE MDS.</p><h2>게임과 기술로<br/><span>작동하는 세계</span>를 만듭니다.</h2><p>재미있는 게임부터 사람을 돕는 서비스와 새로운 디지털 경험까지.<br/>문디자인스튜디오는 아이디어를 실제 결과물로 만드는 크리에이티브 개발 스튜디오입니다.</p></section>
  <section className="section tech" id="tech"><div className="section-heading"><p><em>03</em> / MDS LAB</p><h2>TECH NETWORK</h2></div><div className="tech-row"><span>UNITY</span><span>WEBGL</span><span>HTML5 CANVAS</span><span>REACT</span><span>NEXT.JS</span><span>PYTHON</span><span>OPENXR</span></div></section>
  <section className="contact" id="contact"><div><p className="eyebrow">NEW SIGNAL DETECTED.</p><h2>START A<br/>PROJECT<span>.</span></h2></div><div><p>게임을 만들고 싶으신가요?<br/>새로운 서비스가 필요하신가요?<br/><br/>아이디어 단계부터 함께할 수 있습니다.</p><a className="button primary" href="mailto:contact@moondesignstudio.kr">CONNECT WITH MDS ↗</a></div></section>
  <footer><div className="logo"><strong>MDS</strong><span>MOON DESIGN STUDIO</span></div><p>문디자인스튜디오 사회적협동조합 · EST. 2024</p><p>© 2026 MDS. ALL RIGHTS RESERVED.</p></footer>
</main> }
