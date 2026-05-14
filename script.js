function applyLanguage(lang) {
    localStorage.setItem('pref-lang', lang);
    document.body.classList.toggle('lang-en', lang === 'en');
    document.getElementById('opt-en').classList.toggle('active', lang === 'en');
    document.getElementById('opt-fr').classList.toggle('active', lang === 'fr');
    const t = TRANSLATIONS[lang];
    
    document.querySelectorAll('[data-key]').forEach(el => { if(t[el.getAttribute('data-key')]) el.textContent = t[el.getAttribute('data-key')]; });
    document.getElementById('about-text').innerHTML = t.about_bio;
    document.getElementById('exp-box').innerHTML = t.exp.map(e => `<div class="timeline-item"><div style="font-family:var(--mono);font-size:11px;color:var(--accent);font-weight:700">${e.date}</div><div style="font-size:20px;font-weight:700;color:var(--fg)">${e.title}</div><div style="font-size:15px;color:var(--accent);font-weight:600">${e.co}</div><p style="font-size:15px;color:var(--muted);margin-top:10px">${e.desc}</p></div>`).join('');
    
    document.getElementById('proj-box').innerHTML = t.projects.map(p => {
        const demoBtn = p.demo ? `
            <a href="${p.demo}" target="_blank" class="proj-link" onclick="event.stopPropagation();">
                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke-linecap="round" stroke-linejoin="round"/></svg>
                ${t.btn_demo}
            </a>` : '';

        return `
            <div class="proj-card" onclick="window.location.href='${p.url}'" style="cursor: pointer;">
                <div class="proj-img" style="background-image:url('${p.image}')"></div>
                <div class="proj-content">
                    <h3 style="font-size:18px;color:var(--fg)">${p.title}</h3>
                    <p style="color:var(--muted); font-size:13px; margin: 10px 0 16px 0">${p.desc}</p>
                    <div style="margin-bottom: 16px;">
                        ${p.tags.map(tag => `<span style="color:var(--accent); font-family:var(--mono); font-size:10px; font-weight:700; margin-right:8px; background: rgba(168, 85, 247, 0.1); padding: 4px 8px; border-radius: 4px;">${tag}</span>`).join('')}
                    </div>
                    <div class="proj-links">
                        <a href="${p.github}" target="_blank" class="proj-link" onclick="event.stopPropagation();">
                            <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.082.818-.26.818-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 3.509 1.305 4.365.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/></svg>
                            ${t.btn_github}
                        </a>
                        ${demoBtn}
                    </div>
                </div>
            </div>`;
    }).join('');
    
    document.getElementById('cert-box').innerHTML = t.certs.map(c => `<div class="cert-card"><img src="${c.img}" alt="${c.name}"><div style="color:var(--fg)"><div style="font-size:16px;font-weight:700">${c.name}</div><div style="font-size:12px;color:var(--muted);font-family:var(--mono)">${c.date}</div></div></div>`).join('');
    document.getElementById('skill-box').innerHTML = STACK_DATA.map(cat => `<div class="stack-category"><div class="stack-title">${cat.cat}</div>${cat.items.map(item => `<div class="skill-pill"><img src="${item.icon}" alt="${item.name}">${item.name}</div>`).join('')}</div>`).join('');
}

function applyTheme(theme) {
    const isLight = (theme === 'light');
    if (isLight) { document.documentElement.classList.add('light'); document.body.classList.add('light'); } 
    else { document.documentElement.classList.remove('light'); document.body.classList.remove('light'); }
    localStorage.setItem('pref-theme', theme);
    const themePath = document.getElementById('theme-path');
    if (themePath) themePath.setAttribute('d', isLight ? "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" : "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z");
    initCanvas();
}

document.getElementById('theme-toggle').addEventListener('click', () => applyTheme(document.documentElement.classList.contains('light') ? 'dark' : 'light'));
document.getElementById('lang-selector').addEventListener('click', () => applyLanguage(document.body.classList.contains('lang-en') ? 'fr' : 'en'));

function init() {
    applyTheme(localStorage.getItem('pref-theme') || 'dark');
    applyLanguage(localStorage.getItem('pref-lang') || 'fr');
    animate();
}

window.addEventListener('load', init);

let lastScrollTop = 0;
window.addEventListener("scroll", function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let navbar = document.getElementById("navbar");
    if (st > 50) navbar.classList.add("scrolled"); else navbar.classList.remove("scrolled");
    if (st > lastScrollTop && st > 100) navbar.classList.add("nav-hidden"); else navbar.classList.remove("nav-hidden");
    lastScrollTop = st <= 0 ? 0 : st;
}, false);

const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let pArr = [];
window.initCanvas = function() {
    canvas.width = window.innerWidth; canvas.height = window.innerHeight; pArr = [];
    const isLight = document.documentElement.classList.contains('light');
    const color = isLight ? '124, 58, 237' : '168, 85, 247';
    const count = window.innerWidth < 768 ? 300 : 800;
    for (let i = 0; i < count; i++) {
        pArr.push({x: Math.random()*canvas.width, y: Math.random()*canvas.height, size: Math.random()*1.2+0.3, speedX: (Math.random()-0.5)*0.3, speedY: (Math.random()-0.5)*0.3, color: `rgba(${color}, ${Math.random()*0.4+0.1})`});
    }
}
function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pArr.forEach(p => { p.x+=p.speedX; p.y+=p.speedY; if(p.x>canvas.width)p.x=0; if(p.x<0)p.x=canvas.width; if(p.y>canvas.height)p.y=0; if(p.y<0)p.y=canvas.height; ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill(); });
    requestAnimationFrame(animate);
}
window.addEventListener('resize', initCanvas);