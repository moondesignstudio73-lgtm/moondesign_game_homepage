'use client';

import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const coop = 'https://mds-coop.co.kr';

const projects = [
  { id:'today-day-one', no:'01', title:'오늘부터 1일', category:'GAME', kind:'STORY SIMULATION GAME', platform:'PC / WEB', year:'2026', tone:'sunset', tagline:'30 DAYS. ONE LOST MEMORY. YOUR CHOICE.', description:'기억을 잃은 주인공이 30일 동안 자신의 과거와 관계를 되찾는 스토리 기반 연애 시뮬레이션.', thumbnail:'/assets/projects/today-day-one.png', url:'https://superstarman35.github.io/game/', video:'https://www.youtube.com/embed/N7Bc-XWqu3M?rel=0' },
  { id:'health-guardians', no:'02', title:'경북 건강수호대', category:'VR / XR', kind:'VR EXPERIENCE GAME', platform:'META QUEST · EYE TRACKING', year:'2026', tone:'vr', tagline:'LOOK. BLINK. DESTROY.', description:'시선과 눈 깜빡임을 활용해 혈관 속 세균을 제거하는 체험형 VR 게임.', thumbnail:null, url:null, video:null },
  { id:'chicken-air', no:'03', title:'CHICKEN AIR', category:'GAME', kind:'CASUAL SHOOTING GAME', platform:'WEB / MOBILE', year:'2026', tone:'air', tagline:'FLY HIGH. FIRE FAST.', description:'닭을 타고 하늘을 날며 알을 발사해 적을 처치하는 캐주얼 슈팅 게임.', thumbnail:null, url:null, video:null },
];

const services = [
  ['01','GAME DEVELOPMENT','PC · WEB · MOBILE · SIMULATION · STORY GAME'],
  ['02','VR / XR','META QUEST · EYE TRACKING · INTERACTIVE EXPERIENCE'],
  ['03','APP / SOFTWARE','MOBILE APP · AUTOMATION · INTERNAL TOOLS'],
  ['04','WEB SERVICE','WEBSITE · WEB APP · PLATFORM · COMMERCE'],
];

const news = [
  ['2026.08.20','포용여행, 행복한동행 사전 답사','안전하고 편안한 여행을 위한 현장 점검과 새로운 숙소 선정 이야기.'],
  ['2026.08.19','문디자인스튜디오 리뉴얼 안내','사업 영역과 포트폴리오를 재정비하고 새로운 개발 스튜디오로 전환합니다.'],
  ['2026.07.13','부천형 포용적 여행 협동모델','지역사회와 사람을 연결하는 지속 가능한 사회서비스 프로젝트.'],
];

export default function Home() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [filter,setFilter] = useState('ALL');
  const [selected,setSelected] = useState<(typeof projects)[number] | null>(null);
  const [sent,setSent] = useState(false);

  useEffect(()=>{ document.body.style.overflow = selected ? 'hidden' : ''; return ()=>{document.body.style.overflow=''}; },[selected]);
  const visibleProjects = filter === 'ALL' ? projects : projects.filter(p=>p.category===filter);
  const closeMenu = () => setMenuOpen(false);
  function submitContact(event:FormEvent<HTMLFormElement>){
    event.preventDefault(); const form = new FormData(event.currentTarget);
    const subject = `[MDS 프로젝트 문의] ${form.get('type')} · ${form.get('name')}`;
    const body = `이름: ${form.get('name')}\n회사/기관: ${form.get('company')}\n연락처: ${form.get('phone')}\n프로젝트 유형: ${form.get('type')}\n예상 일정: ${form.get('schedule')}\n\n프로젝트 설명\n${form.get('message')}`;
    setSent(true); window.location.href=`mailto:mds_coop@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <main>
    <header className="site-header"><a className="logo" href="#top" aria-label="MDS 홈" onClick={closeMenu}><strong>MDS</strong><span>MOON DESIGN STUDIO</span></a><nav className={menuOpen?'open':''} aria-label="주요 메뉴"><a onClick={closeMenu} href="#projects">PROJECTS</a><a onClick={closeMenu} href="#services">SERVICES</a><a onClick={closeMenu} href="#studio">STUDIO</a><a onClick={closeMenu} href="#tech">TECH</a><a onClick={closeMenu} href="#news">NEWS</a><a onClick={closeMenu} href="#contact">CONTACT</a><a className="coop-link" href={coop} target="_blank" rel="noreferrer">MDS COOP ↗</a></nav><span className="online"><i/> LUNA ONLINE</span><button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="메뉴 열기">{menuOpen?'×':'☰'}</button></header>

    <section className="hero" id="top"><div className="grid-lines"/><div className="hero-copy"><p className="eyebrow">MOON DESIGN STUDIO</p><h1>BUILD THE<br/>NEXT WORLD<span>.</span></h1><p className="disciplines">GAME <b>·</b> VR <b>·</b> APP <b>·</b> WEB <b>·</b> INTERACTIVE</p><p className="ko-copy">아이디어가 플레이되는 순간을 만듭니다.</p><div className="actions"><a className="button primary" href="#projects">VIEW PROJECTS ↗</a><a className="button" href="#contact">START A PROJECT</a></div></div><div className="luna-stage" aria-label="MDS 디지털 오퍼레이터 루나"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><Image className="luna-art" src={`${basePath}/assets/luna/luna-hero.png`} alt="은빛 머리의 MDS 디지털 오퍼레이터 루나" width={1064} height={1478} priority/><div className="hud hud-a"><b>MDS SYSTEM</b><span>CONNECTION : STABLE</span></div><div className="hud hud-b"><b>GAME BUILD</b><span>ACTIVE</span></div></div><aside className="operator"><p className="eyebrow">DIGITAL OPERATOR</p><h2>LUNA</h2><p className="unit">MDS-01 / SYSTEM ONLINE</p><p>MDS 네트워크와 다양한 디지털 월드를 연결하는 가상 오퍼레이터.</p><dl><div><dt>ROLE</dt><dd>DIGITAL OPERATOR</dd></div><div><dt>SPECIALTY</dt><dd>WORLD BUILDING</dd></div><div><dt>STATUS</dt><dd>ONLINE</dd></div></dl></aside><a className="scroll" href="#projects">↓ &nbsp; SCROLL TO EXPLORE</a></section>

    <section className="section projects" id="projects"><div className="section-heading"><p><em>01</em> / PROJECT ARCHIVE</p><h2>SELECTED WORLDS</h2></div><div className="filters" role="group" aria-label="프로젝트 필터">{['ALL','GAME','VR / XR','APP','WEB'].map(f=><button className={filter===f?'active':''} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div><div className="project-grid">{visibleProjects.length?visibleProjects.map(p=><article className={`project ${p.tone}`} key={p.id} tabIndex={0} onClick={()=>setSelected(p)} onKeyDown={e=>{if(e.key==='Enter')setSelected(p)}}>{p.thumbnail&&<Image className="project-thumb" src={`${basePath}${p.thumbnail}`} alt="오늘부터 1일 게임 캐릭터 하은" width={887} height={1774}/>}<span className="project-no">{p.no}</span><div className="project-copy"><h3>{p.title}</h3><p>{p.kind}</p><p>{p.platform}<br/>{p.year}</p>{p.url?<a href={p.url} target="_blank" rel="noreferrer" onClick={e=>e.stopPropagation()}>PLAY GAME ↗</a>:<button>VIEW PROJECT →</button>}</div></article>):<p className="empty">NEW WORLD DETECTED.<br/><span>프로젝트 데이터를 준비하고 있습니다.</span></p>}</div></section>

    <section className="section services" id="services"><div className="section-heading"><p><em>02</em> / CAPABILITIES</p><h2>WHAT WE BUILD</h2></div><div className="service-list">{services.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b></article>)}</div><div className="process"><p className="eyebrow">HOW WE BUILD</p>{['IDEA','PLANNING','PROTOTYPE','DESIGN','DEVELOPMENT','QA','RELEASE'].map((s,i)=><div key={s}><span>{String(i+1).padStart(2,'0')}</span><b>{s}</b></div>)}</div></section>

    <section className="manifesto" id="studio"><p className="eyebrow">WE ARE MDS.</p><h2>게임과 기술로<br/><span>작동하는 세계</span>를 만듭니다.</h2><p>재미있는 게임부터 사람을 돕는 서비스와 새로운 디지털 경험까지.<br/>문디자인스튜디오는 아이디어를 실제 결과물로 만드는 크리에이티브 개발 스튜디오입니다.</p><div className="studio-links"><a href={`${coop}/theme/home/html/company/01.php`} target="_blank" rel="noreferrer">조합 소개 ↗</a><a href={`${coop}/theme/home/html/company/05.php`} target="_blank" rel="noreferrer">오시는 길 ↗</a><a href={coop} target="_blank" rel="noreferrer">MDS COOP PORTAL ↗</a></div></section>

    <section className="section tech" id="tech"><div className="section-heading"><p><em>03</em> / MDS LAB</p><h2>TECH NETWORK</h2></div><div className="tech-row"><span>UNITY</span><span>WEBGL</span><span>HTML5 CANVAS</span><span>REACT</span><span>NEXT.JS</span><span>PYTHON</span><span>OPENXR</span></div></section>

    <section className="section news" id="news"><div className="section-heading"><p><em>04</em> / MDS SIGNAL</p><h2>NEWS & COOP</h2></div><div className="news-grid">{news.map(([date,title,desc],i)=><a href={i===1?`${coop}/bbs/board.php?bo_table=news02`: `${coop}/bbs/board.php?bo_table=gallery`} target="_blank" rel="noreferrer" key={title}><span>{date}</span><h3>{title}</h3><p>{desc}</p><b>READ ON MDS COOP ↗</b></a>)}</div><a className="text-link" href={`${coop}/bbs/board.php?bo_table=news02`} target="_blank" rel="noreferrer">VIEW ALL COOP NEWS →</a></section>

    <section className="contact" id="contact"><div><p className="eyebrow">NEW SIGNAL DETECTED.</p><h2>START A<br/>PROJECT<span>.</span></h2><p className="contact-info">TEL 010-3480-2420<br/>mds_coop@naver.com<br/>경기도 부천시 원미구 상동 533-7<br/>진성프라자 401-3호</p></div><form onSubmit={submitContact}><div className="field-row"><label>이름<input required name="name" autoComplete="name"/></label><label>회사/기관<input name="company" autoComplete="organization"/></label></div><div className="field-row"><label>연락처<input required name="phone" autoComplete="tel"/></label><label>프로젝트 유형<select name="type" defaultValue="GAME"><option>GAME</option><option>VR / XR</option><option>APP</option><option>WEB</option><option>SOFTWARE</option><option>INTERACTIVE</option><option>ETC</option></select></label></div><label>예상 일정<input name="schedule" placeholder="예: 2026년 12월 오픈"/></label><label>프로젝트 설명<textarea required name="message" rows={5} placeholder="프로젝트의 목표와 필요한 기능을 알려주세요."/></label><button className="button primary" type="submit">SEND PROJECT SIGNAL ↗</button><a className="legacy-inquiry" href={`${coop}/theme/home/html/formmail/inquiry.php`} target="_blank" rel="noreferrer">첨부파일이 있다면 기존 제휴문의 이용 ↗</a>{sent&&<p className="success" role="status">QUEST ACCEPTED. 메일 앱에서 전송을 완료해주세요.</p>}</form></section>

    <footer><div className="logo"><strong>MDS</strong><span>MOON DESIGN STUDIO</span></div><p>문디자인스튜디오 사회적협동조합 · 대표 주영찬<br/>사업자번호 120-82-12922</p><div className="footer-links"><a href={coop} target="_blank" rel="noreferrer">COOP HOME</a><a href={`${coop}/shop`} target="_blank" rel="noreferrer">SHOP</a><a href={`${coop}/bbs/board.php?bo_table=news02`} target="_blank" rel="noreferrer">NOTICE</a></div></footer>

    {selected&&<div className="modal-backdrop" role="presentation" onMouseDown={()=>setSelected(null)}><section className={`project-modal ${selected.tone} ${selected.video?'with-video':''}`} role="dialog" aria-modal="true" aria-labelledby="project-title" onMouseDown={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="프로젝트 닫기">×</button><div className="modal-info"><span className="eyebrow">{selected.no} / {selected.category}</span><h2 id="project-title">{selected.title}</h2><h3>{selected.tagline}</h3><p>{selected.description}</p><dl><div><dt>TYPE</dt><dd>{selected.kind}</dd></div><div><dt>PLATFORM</dt><dd>{selected.platform}</dd></div><div><dt>YEAR</dt><dd>{selected.year}</dd></div></dl><div className="modal-actions">{selected.url&&<a className="button primary" href={selected.url} target="_blank" rel="noreferrer">PLAY NOW ↗</a>}<a className="button" href="#contact" onClick={()=>setSelected(null)}>START A SIMILAR PROJECT</a></div></div>{selected.video&&<div className="project-video"><p className="eyebrow">GAME TRAILER / 소개 영상</p><iframe src={selected.video} title={`${selected.title} 게임 소개 영상`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen loading="lazy"/><a href="https://youtu.be/N7Bc-XWqu3M" target="_blank" rel="noreferrer">YOUTUBE에서 보기 ↗</a></div>}</section></div>}
  </main>;
}
