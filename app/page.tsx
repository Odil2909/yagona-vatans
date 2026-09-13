'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, HeartHandshake, Menu, Scale, ShieldCheck, Sparkles, Sprout, UsersRound, X } from 'lucide-react';

const nav = [
  ['Vatan', 'vatan'], ['Xalq', 'xalq'], ['Do‘stlik', 'dostlik'], ['Yoshlar', 'yoshlar'], ['Qadriyatlar', 'qadriyatlar'],
];

const values = [
  { title: 'Tinchlik', text: 'Farovon hayotning asosiy sharti.', icon: ShieldCheck },
  { title: 'Do‘stlik', text: 'Insonlarni birlashtiruvchi kuch.', icon: HeartHandshake },
  { title: 'Hurmat', text: 'O‘zaro ishonchning asosi.', icon: Scale },
  { title: 'Bag‘rikenglik', text: 'Turli qarash va madaniyatlarni qadrlash.', icon: Sparkles },
  { title: 'Vatanparvarlik', text: 'Yurt kelajagiga befarq bo‘lmaslik.', icon: Sprout },
  { title: 'Hamjihatlik', text: 'Umumiy maqsad sari birgalikda harakat qilish.', icon: UsersRound },
];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('in-view')), { threshold: 0.13 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);
  const jump = (id: string) => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return <main>
    <header className={`navbar ${scrolled ? 'navbar-solid' : ''}`}>
      <button className="brand" onClick={() => jump('top')} aria-label="Bosh sahifa"><span className="brand-dot" />YAGONA <i>VATAN</i></button>
      <nav>{nav.map(([label, id]) => <button onClick={() => jump(id)} key={id}>{label}</button>)}</nav>
      <button className="menu" onClick={() => setOpen(!open)} aria-label="Menyu">{open ? <X /> : <Menu />}</button>
      <div className={`mobile-nav ${open ? 'open' : ''}`}>{nav.map(([label, id], index) => <button style={{ transitionDelay: `${index * 45}ms` }} onClick={() => jump(id)} key={id}>{label}<ArrowUpRight size={17} /></button>)}</div>
    </header>

    <section id="top" className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="grain" />
      <div className="hero-content">
        <p className="eyebrow light"><span /> O‘ZBEKISTON · 2026</p>
        <h1>Yagona <em>Vatan</em><br />Yagona xalq</h1>
        <div className="hero-bottom"><p>Bir Vatan. Bir xalq. Bir kelajak.</p><p className="hero-copy">O‘zbekiston — barchamiz uchun yagona va muqaddas Vatan. Yurtimizda turli millat va elat vakillari tinch-totuv, o‘zaro hurmat va hamjihatlikda yashab kelmoqda.</p></div>
      </div>
      <button onClick={() => jump('vatan')} className="scroll-cue">SCROLL TO EXPLORE <ArrowDown size={15} /></button>
    </section>

    <section id="vatan" className="vatan section">
      <div className="vatan-word">VATAN</div>
      <Reveal className="vatan-intro"><p className="eyebrow"><span /> 01 — YAGONA VATAN</p><h2>Vatan — <em>umumiy</em> uyimiz</h2><p>Vatan inson uchun eng aziz va muqaddas maskandir. O‘zbekiston bizning umumiy uyimiz bo‘lib, uning tinchligi, obodligi va rivoji har birimizga bog‘liq.</p><p>Yurtni sevish — uni asrash, qadrlash va kelajagi uchun mas’uliyat bilan harakat qilish demakdir.</p></Reveal>
      <Reveal className="vatan-photo photo-frame"><img src="/photo/two.jpeg" alt="Samarqand me'morchiligi" /><span>ULUG‘VOR MEROS</span></Reveal>
    </section>

    <section id="xalq" className="xalq section">
      <Reveal className="section-heading"><p className="eyebrow"><span /> 02 — YAGONA XALQ</p><h2>Bizni birlik <em>birlashtiradi</em></h2><p>Xalqimiz turli millat, til va madaniyat vakillaridan iborat bo‘lsa-da, barchamizni yagona Vatan va umumiy kelajak birlashtiradi.</p></Reveal>
      <div className="people-grid">
        <Reveal className="tile people-large"><img src="/photo/six.jpeg" alt="Turli millat vakillari" /><b>Bir yurak, bir Vatan</b></Reveal>
        <Reveal className="tile"><img src="/photo/four.jpeg" alt="Yoshlar va milliy madaniyat" /></Reveal>
        <Reveal className="tile quote-tile"><span>“</span><p>Birlik — bizning <em>kuchimiz.</em></p></Reveal>
        <Reveal className="tile"><img src="/photo/seven.jpeg" alt="Milliy raqs" /></Reveal>
      </div>
    </section>

    <section id="dostlik" className="dostlik section">
      <Reveal className="dostlik-copy"><p className="eyebrow light"><span /> 03 — DO‘STLIK VA BAG‘RIKENGLIK</p><h2>Turli madaniyatlar — <em>yagona</em> jamiyat</h2><p>O‘zbekistonda turli millat va elatlarning madaniyati, urf-odatlari va an’analariga hurmat bilan munosabatda bo‘linadi.</p></Reveal>
      <div className="dostlik-image"><img src="/photo/three.jpeg" alt="Xalqlar do‘stligi festivali" /><div className="glass-card"><small>DO‘STLIK</small><p>Bir-birimizni tushunish — birlikning boshlanishidir.</p></div></div>
    </section>

    <section id="yoshlar" className="yoshlar section">
      <Reveal className="youth-image"><img src="/photo/fivw.jpeg" alt="O‘zbekiston yoshlari" /></Reveal>
      <Reveal className="youth-copy"><p className="eyebrow"><span /> 04 — YOSHLAR VA KELAJAK</p><div className="new-gen"><b>01</b><span>Yangi<br />avlod</span></div><h2>Kelajak — bizning <em>qo‘limizda</em></h2><p>Yoshlar mamlakat kelajagining asosiy bunyodkorlaridir. Bilimli, faol va vatanparvar yoshlar yurt taraqqiyotiga katta hissa qo‘sha oladi.</p><div className="qualities">{['Bilim.', 'Mas’uliyat.', 'Harakat.', 'Kelajak.'].map(x => <span key={x}>{x}</span>)}</div></Reveal>
    </section>

    <section id="qadriyatlar" className="values section">
      <Reveal className="values-intro"><p className="eyebrow"><span /> 05 — QADRIYATLAR</p><h2>Bizni birlashtiradigan <em>qadriyatlar</em></h2></Reveal>
      <div className="value-grid">{values.map(({ title, text, icon: Icon }, i) => <Reveal key={title}><article className="value-card"><span className="card-no">0{i + 1}</span><Icon size={30} strokeWidth={1.35} /><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={21} /></article></Reveal>)}</div>
    </section>

    <section className="finale">
      <img src="/photo/one.jpeg" alt="Toshkent oqshomi" /><div className="finale-shade" />
      <Reveal className="finale-content"><p className="eyebrow light"><span /> 06 — BIRLIK VA TARAQQIYOT</p><h2>Yagona maqsad sari <em>birgalikda</em></h2><p>Xalq birdam bo‘lsa, har qanday maqsadga erishish osonlashadi. Tinchlik, o‘zaro hurmat va hamkorlik mamlakatning barqaror rivojlanishi uchun muhim ahamiyatga ega.</p></Reveal>
      <div className="finale-type"><span>BIRLIGIMIZ — KUCHIMIZ.</span><i>HAMJIHATLIGIMIZ — KELAJAGIMIZ.</i></div>
    </section>
    <footer><span>© 2026 · O‘ZBEKISTON</span><span>Bir Vatan. Bir xalq. Bir kelajak.</span></footer>
  </main>;
}
