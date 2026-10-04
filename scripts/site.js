const entries=[
{slug:'change-starting-weapon',title:'Change the starting weapon',category:'Scripting',level:'Beginner',time:'3 min',desc:'Set starting and last-stand pistols for solo and co-op.',body:`<p>Open <code>mapname.gsc</code>, find <code>zm_usermap::main();</code>, and add these lines underneath it inside <code>main()</code>:</p><pre>level.start_weapon = GetWeapon( "pistol_standard" );
level.default_laststandpistol = GetWeapon( "pistol_standard" );
level.default_solo_laststandpistol = GetWeapon( "pistol_standard_upgraded" );
level.laststandpistol = level.default_laststandpistol;</pre><p>Change the weapon names to suit your map.</p>`},
{slug:'change-pap-camo',title:'Change the Pack-a-Punch camo',category:'Scripting',level:'Beginner',time:'4 min',desc:'Choose the Pack-a-Punch camo used by weapons on your map.',body:`<p>Open <code>mapname.gsc</code> and find <code>zm_usermap::main();</code>. Add this line underneath it, inside <code>main()</code>:</p><pre>level.pack_a_punch_camo_index = 133;</pre><p>Replace <code>133</code> with the camo index you want. The source guide lists Gold (15), Diamond (16), Dark Matter (17), Afterlife (26), Origins (133), Cherry Fizz (134), and Watermelon (138), among many others.</p><p><a href="../content/tutorials/Change-PAP-Camo.txt">View the full original camo index ↗</a></p>`},
{slug:'dog-rounds',title:'Set up dog rounds',category:'Zombies',level:'Intermediate',time:'5 min',desc:'Add dog actors and spawner structs to a Zombies map.',body:`<p>This setup follows The Giant’s cadence: the first round is between rounds 5–7, then dogs return every five rounds. After round 16, dogs gradually join regular zombie rounds.</p><h2>Get the required spawners</h2><p><a href="https://mega.nz/file/GDpyAB4b#trmU_tu2ZDuJ1xPGF9WiAx7rYwJDwJ0PcYOAa-bAkN0" target="_blank" rel="noopener noreferrer">Download the dog spawners ↗</a>. Extract the folders into your Black Ops 3 root folder.</p><h2>Place prefabs in Radiant</h2><ol><li>Open the Prefab Browser.</li><li>Place <code>zm_boss_dog_actor_struct</code> dog actors.</li><li>Place <code>zm_boss_dog_spawn_struct</code> spawners.</li><li>Stamp the spawner prefab and set its <code>TARGETNAME</code> to your zone’s <code>TARGET</code>.</li></ol>`},
{slug:'power-lag-fix',title:'Reduce power-up lag',category:'Scripting',level:'Intermediate',time:'4 min',desc:'Precache perk and power-up strings used by your map.',body:`<p>Open <code>mapname.gsc</code> and add entries after your other <code>#using</code> statements.</p><pre>#precache( "triggerstring", "ZOMBIE_PERK_DEADSHOT", "1500" );
#precache( "triggerstring", "ZOMBIE_PERK_DOUBLETAP", "2000" );
#precache( "triggerstring", "ZOMBIE_PERK_FASTRELOAD", "3000" );
#precache( "triggerstring", "ZOMBIE_PERK_JUGGERNAUT", "2500" );
#precache( "triggerstring", "ZOMBIE_PERK_PACKAPUNCH", "5000" );</pre><p>Add other perk trigger strings using the same pattern and the appropriate cost. The complete original list is preserved in <a href="../content/tutorials/Power-Lag-Fix.txt">the source notes ↗</a>.</p>`},
{slug:'change-starting-points',title:'Change starting points',category:'Scripting',level:'Beginner',time:'2 min',desc:'Set the number of points players start with.',body:`<p>Open <code>mapname.gsc</code> and find <code>zm_usermap::main();</code>. Add this line underneath it, inside <code>main()</code>:</p><pre>level.player_starting_points = 500000;</pre><p>Replace <code>500000</code> with the amount you want players to receive.</p>`},
{slug:'install-skye-weapon-ports',title:'Install TheSkyeLord’s weapon ports',category:'Weapons',level:'Beginner',time:'4 min',desc:'Add a weapon port package to your map zone configuration.',body:`<p>This guide covers the zone-file setup. The source notes point to UGXMods or Devraw for the port download.</p><ol><li>Extract the downloaded folders into your Black Ops 3 root folder.</li><li>Add this line to your map’s zone file:</li></ol><pre>include,type_your_zpkg_name_here</pre><ol start="3"><li>In <code>zone_source</code>, create <code>type_your_zpkg_name_here.zpkg</code>.</li><li>Copy <code>ADD TO .ZONE FILE.txt</code> from the package into that new file.</li></ol><p>Replace the placeholder with the package name.</p><p class="notice">The source tutorial is marked unfinished. Check the package instructions for additional steps.</p>`}
];
const tutorialCategories = [...new Set(entries.map(entry => entry.category))].sort();
const wikiSections = [
  {slug:'getting-started',title:'Getting Started',description:'Setup and first steps for a Black Ops 3 modding workflow.',next:'mapping',related:'../../tutorials/index.html',relatedText:'Start with the tutorial library'},
  {slug:'mapping',title:'Mapping',description:'Reference material for custom-map creation and Radiant workflows.',next:'scripting',related:'../../tutorials/index.html',relatedText:'Browse the available tutorial library'},
  {slug:'scripting',title:'Scripting',description:'Technical reference for GSC and gameplay scripting.',next:'weapons',related:'../../tutorials/index.html',relatedText:'Browse scripting tutorials'},
  {slug:'weapons',title:'Weapons',description:'Reference for weapon setup and adding weapon content.',next:'ui',related:'../../tutorials/install-skye-weapon-ports.html',relatedText:'Related guide: Install weapon ports'},
  {slug:'ui',title:'UI',description:'Reference material for interfaces and HUD work.',next:'zombies',related:'../../resources/index.html',relatedText:'Explore tools and resources'},
  {slug:'zombies',title:'Zombies',description:'Reference for custom Zombies maps and gameplay systems.',next:'mod-tools',related:'../../tutorials/dog-rounds.html',relatedText:'Related guide: Set up dog rounds'},
  {slug:'mod-tools',title:'Mod Tools',description:'Setup and workflow references for Black Ops 3 Mod Tools.',next:'technical-reference',related:'../../resources/index.html#tools',relatedText:'Explore modding tools'},
  {slug:'technical-reference',title:'Technical Reference',description:'Technical notes, formats, and troubleshooting material.',next:'getting-started',related:'../../resources/index.html#documentation',relatedText:'Browse external documentation'}
];
const projects = [
  {slug:'community-map-01',title:'Community Map 01',category:'Maps',creator:'Not credited in source files',description:'Archived map environment screenshot. Original project title and release details were not included.',image:'assets/images/community_maps/community_map_1.jpg',position:'center 52%',tags:['Archived image','Map environment'],featured:true},
  {slug:'community-map-02',title:'Community Map 02',category:'Maps',creator:'Not credited in source files',description:'Archived map environment screenshot. Original project title and release details were not included.',image:'assets/images/community_maps/community_map_2.jpg',position:'center 58%',tags:['Archived image','Map environment'],featured:true},
  {slug:'community-map-03',title:'Community Map 03',category:'Maps',creator:'Not credited in source files',description:'Archived map environment screenshot. Original project title and release details were not included.',image:'assets/images/community_maps/community_map_3.jpg',position:'center 50%',tags:['Archived image','Map environment'],featured:true}
];
const modCategories = [...new Set(projects.map(project => project.category))];
const page = document.body.dataset.page;
const base = ['home', '404'].includes(page) ? './' : page === 'wiki-category' ? '../../' : '../';
const current = page === 'tutorial-detail' ? 'tutorials' : page === 'project-detail' ? 'mods' : page === 'wiki-category' ? 'wiki' : page;
const header=document.getElementById('site-header');
if (header) {
  header.innerHTML = `<header class="site-header">
    <div class="header-inner">
      <a class="brand" href="${base}index.html"><img src="${base}assets/images/logo.png" alt="">T7Mods</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-navigation" aria-label="Open navigation"><span></span><span></span><span></span></button>
      <nav class="nav-main" id="primary-navigation" aria-label="Main navigation">
        <a href="${base}index.html" ${current === 'home' ? 'aria-current="page"' : ''}>Home</a>
        <a href="${base}mods/index.html" ${current === 'mods' ? 'aria-current="page"' : ''}>Mods</a>
        <a href="${page === 'wiki-category' ? '../../wiki/index.html' : `${base}wiki/index.html`}" ${current === 'wiki' ? 'aria-current="page"' : ''}>Wiki</a>
        <a href="${base}tutorials/index.html" ${current === 'tutorials' ? 'aria-current="page"' : ''}>Tutorials</a>
        <a href="${base}resources/index.html" ${current === 'resources' ? 'aria-current="page"' : ''}>Resources</a>
      </nav>
      <div class="nav-social">
        <a href="https://discord.gg/twPys8Y6pZ" target="_blank" rel="noopener noreferrer">Discord ↗</a>
        <a href="https://github.com/T7Mods/T7ModsWebsite" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </div>
    </div>
  </header>`;

  const toggle = header.querySelector('.menu-toggle');
  toggle.addEventListener('click', () => {
    const open = header.querySelector('.site-header').classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
}

const footer = document.getElementById('site-footer');
if (footer) {
  footer.innerHTML = `<footer class="site-footer"><div class="footer-inner">
    <span>© 2026 T7Mods · Black Ops 3 modding resources</span>
    <span><a href="${base}wiki/index.html">Wiki</a> · <a href="${base}about/index.html">About T7Mods</a> · <a href="https://discord.gg/twPys8Y6pZ" target="_blank" rel="noopener noreferrer">Discord ↗</a> · <a href="https://github.com/T7Mods/T7ModsWebsite" target="_blank" rel="noopener noreferrer">GitHub ↗</a></span>
  </div></footer>`;
}

function tutorialRow(entry, compact = false) {
  if (compact) return `<a class="tutorial-row tutorial-row-home" href="${base}tutorials/${entry.slug}.html">
    <span class="category">${entry.category}</span><h3>${entry.title}</h3>
    <span class="difficulty">${entry.level}</span><span class="row-arrow" aria-hidden="true">↗</span>
  </a>`;
  return `<a class="tutorial-row" href="${base}tutorials/${entry.slug}.html">
    <span class="tutorial-card-label">${entry.category} · ${entry.level}</span>
    <h3>${entry.title}</h3><p>${entry.desc}</p>
    <span class="tutorial-card-meta">${entry.level} <span aria-hidden="true">·</span> ${entry.time} estimated <span class="row-arrow" aria-hidden="true">↗</span></span>
  </a>`;
}

const homeTutorials = document.getElementById('home-tutorials');
if (homeTutorials) homeTutorials.innerHTML = entries.slice(0, 3).map(entry => tutorialRow(entry, true)).join('');

const homeProjects = document.getElementById('home-projects');
if (homeProjects) homeProjects.innerHTML = projects.map(project => `<article class="home-project">
  <a class="home-project-image" href="mods/${project.slug}.html"><img src="${project.image}" alt="Archived Black Ops 3 map environment screenshot, ${project.title}" loading="lazy"><span>MAP IMAGE · ARCHIVE</span></a>
  <div class="home-project-copy"><p class="eyebrow">${project.category} · COMMUNITY IMAGE</p><h3><a href="mods/${project.slug}.html">${project.title}</a></h3><p>${project.description}</p><a class="text-link" href="mods/${project.slug}.html">View image details ↗</a></div>
</article>`).join('');

const tutorialCatalog = document.getElementById('tutorial-catalog');
if (tutorialCatalog) {
  const search = document.getElementById('tutorial-search');
  const filter = document.getElementById('tutorial-filter');
  const levelFilter = document.getElementById('tutorial-level');
  const count = document.getElementById('tutorial-count');
  tutorialCategories.forEach(category => {
    filter.insertAdjacentHTML('beforeend', `<option value="${category}">${category}</option>`);
  });

  const renderTutorials = () => {
    const query = search.value.trim().toLowerCase();
    const results = entries.filter(entry =>
      (filter.value === 'all' || entry.category === filter.value) &&
      (levelFilter.value === 'all' || entry.level === levelFilter.value) &&
      `${entry.title} ${entry.desc} ${entry.category} ${entry.level}`.toLowerCase().includes(query)
    );
    count.textContent = `${results.length} ${results.length === 1 ? 'tutorial' : 'tutorials'}`;
    tutorialCatalog.innerHTML = results.length
      ? results.map(entry => tutorialRow(entry)).join('')
      : '<div class="no-results">No tutorials match that search. Try another title or category.</div>';
  };

  search.addEventListener('input', renderTutorials);
  filter.addEventListener('change', renderTutorials);
  levelFilter.addEventListener('change', renderTutorials);
  renderTutorials();
}

const modCatalog = document.getElementById('mod-catalog');
if (modCatalog) {
  const search = document.getElementById('mod-search');
  const filter = document.getElementById('mod-filter');
  const sort = document.getElementById('mod-sort');
  const count = document.getElementById('mod-count');
  modCategories.forEach(category => {
    filter.insertAdjacentHTML('beforeend', `<option value="${category}">${category}</option>`);
  });

  const renderMods = () => {
    const query = search.value.trim().toLowerCase();
    const results = projects.filter(project =>
      (filter.value === 'all' || project.category === filter.value) &&
      `${project.title} ${project.description} ${project.category} ${project.creator} ${project.tags.join(' ')}`.toLowerCase().includes(query)
    );
    if (sort.value === 'name') results.sort((a, b) => a.title.localeCompare(b.title));
    else results.sort((a, b) => Number(b.featured) - Number(a.featured));
    count.textContent = `${results.length} ${results.length === 1 ? 'project' : 'projects'}`;
    modCatalog.innerHTML = results.length
      ? `<div class="catalog-grid">${results.map(project => `<article class="catalog-card project-card">
          <a class="project-image-link" href="${base}mods/${project.slug}.html" aria-label="View ${project.title}"><img src="${base}${project.image}" alt="Black Ops 3 community map screenshot"></a>
          <span class="tag">${project.category} · Archived image</span><h2><a href="${base}mods/${project.slug}.html">${project.title}</a></h2><p>${project.description}</p>
          <div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
          <div class="card-meta"><span>Creator not credited in source</span></div>
          <a class="text-link" href="${base}mods/${project.slug}.html">View project <span aria-hidden="true">↗</span></a>
        </article>`).join('')}</div>`
      : '<div class="no-results">No projects match those filters.</div>';
  };

  search.addEventListener('input', renderMods);
  filter.addEventListener('change', renderMods);
  sort.addEventListener('change', renderMods);
  renderMods();
}

if (page === 'tutorial-detail') {
  const slug = location.pathname.split('/').pop().replace(/\.html$/, '');
  const entry = entries.find(item => item.slug === slug);
  const article = document.getElementById('tutorial-article');
  if (entry && article) {
    const index = entries.indexOf(entry);
    const next = entries[(index + 1) % entries.length];
    const related = entries.filter(item => item.slug !== entry.slug && item.category === entry.category).slice(0, 2);
    const wikiSlug = entry.category === 'Weapons' ? 'weapons' : entry.category === 'Zombies' ? 'zombies' : entry.category === 'Mapping' ? 'mapping' : 'scripting';
    const wikiTitle = wikiSections.find(item => item.slug === wikiSlug).title;
    document.title = `${entry.title} — T7Mods Tutorials`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', entry.desc);
    article.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${base}index.html">Home</a><span aria-hidden="true">›</span><a href="index.html">Tutorials</a><span aria-hidden="true">›</span><span aria-current="page">${entry.title}</span></nav>
      <p class="eyebrow">${entry.category}</p><h1>${entry.title}</h1>
      <div class="article-meta"><span>${entry.level}</span><span>${entry.time} estimated</span></div>
      <div class="tutorial-article">${entry.body}</div>
      <section class="tutorial-next-up"><div><p class="eyebrow">NEXT UP · KEEP BUILDING</p><h2>${next.title}</h2><p>${next.desc}</p><a class="text-link" href="${next.slug}.html">Go to next tutorial ↗</a></div><div class="tutorial-related"><p class="eyebrow">RELATED</p>${(related.length ? related : [next]).map(item => `<a href="${item.slug}.html">${item.title} <span aria-hidden="true">↗</span></a>`).join('')}</div></section>
      <nav class="learning-links" aria-label="Related references"><a href="${base}wiki/${wikiSlug}/index.html"><span class="eyebrow">REFERENCE</span><strong>${wikiTitle}</strong><span>Open Wiki section ↗</span></a><a href="${base}resources/index.html#tools"><span class="eyebrow">TOOLS</span><strong>Modding tools</strong><span>Browse relevant links ↗</span></a></nav>
      <nav class="keep-building" aria-label="Continue exploring"><span class="eyebrow">KEEP EXPLORING</span><a href="index.html">All tutorials</a><a href="${base}wiki/index.html">Wiki</a><a href="${base}mods/index.html">Community projects</a></nav>`;
  }
}

if (page === 'wiki-category') {
  const parts = location.pathname.split('/').filter(Boolean);
  const slug = parts.at(-1) === 'index.html' ? parts.at(-2) : parts.at(-1);
  const section = wikiSections.find(item => item.slug === slug);
  const target = document.getElementById('wiki-category');
  if (section && target) {
    const sectionIndex = wikiSections.indexOf(section);
    const previous = wikiSections[(sectionIndex + wikiSections.length - 1) % wikiSections.length];
    const next = wikiSections.find(item => item.slug === section.next);
    document.title = `${section.title} — T7Mods Wiki`;
    target.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="../../index.html">Home</a><span aria-hidden="true">›</span><a href="../index.html">Wiki</a><span aria-hidden="true">›</span><span aria-current="page">${section.title}</span></nav>
      <header class="page-hero"><p class="eyebrow">WIKI · TECHNICAL REFERENCE</p><h1>${section.title}</h1><p class="lead">${section.description}</p></header>
      <div class="wiki-empty"><p class="eyebrow">SECTION REFERENCE</p><h2>Articles are being added</h2><p>There are no wiki articles in this section yet. Use the linked guide and community project archive to keep moving while reference material is developed.</p><a class="text-link" href="${section.related}">${section.relatedText} ↗</a></div>
      <nav class="wiki-next" aria-label="Related paths"><a href="../../mods/index.html">Explore map examples →</a><a href="../../resources/index.html">Find tools and references →</a></nav>
      <nav class="wiki-next wiki-section-nav" aria-label="Wiki section navigation"><a href="../${previous.slug}/index.html">← ${previous.title}</a><a href="../index.html">All Wiki sections</a><a href="../${next.slug}/index.html">${next.title} →</a></nav>`;
  }
}

if (page === 'project-detail') {
  const slug = location.pathname.split('/').pop().replace(/\.html$/, '');
  const project = projects.find(item => item.slug === slug);
  const target = document.getElementById('project-detail');
  if (project && target) {
    document.title = `${project.title} — T7Mods Projects`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', project.description);
    target.innerHTML = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="${base}index.html">Home</a><span aria-hidden="true">›</span><a href="index.html">Mods</a><span aria-hidden="true">›</span><span aria-current="page">${project.title}</span></nav>
      <p class="eyebrow">${project.category} · COMMUNITY SHOWCASE</p><h1>${project.title}</h1>
      <figure class="project-detail-figure"><img src="${base}${project.image}" alt="Black Ops 3 community map environment screenshot from the T7Mods archive"><figcaption>Archived image asset: ${project.image.split('/').pop()}. Original project title, creator, and release details were not included.</figcaption></figure>
      <div class="project-detail-copy"><p>${project.description}</p><dl><div><dt>Source</dt><dd>T7Mods image archive</dd></div><div><dt>Creator</dt><dd>${project.creator}</dd></div><div><dt>Release</dt><dd>No release link is included in the repository.</dd></div><div><dt>Category</dt><dd>${project.category} image</dd></div></dl><a class="text-link" href="index.html#projects">← Back to all projects</a></div>
      <section class="project-next"><p class="eyebrow">MAKE SOMETHING OF YOUR OWN</p><h2>Explore how BO3 maps are built.</h2><p>Use the existing tutorials and references to start your own modding workflow.</p><div class="project-path-links"><a href="${base}tutorials/index.html">Browse tutorials ↗</a><a href="${base}wiki/mapping/index.html">Mapping reference ↗</a><a href="${base}resources/index.html#tools">Find modding tools ↗</a></div></section>
      <section class="project-related"><div class="section-heading"><div><p class="eyebrow">MORE FROM THE ARCHIVE</p><h2>Related map images</h2></div><a class="text-link" href="index.html">All map images ↗</a></div><div class="related-project-links">${projects.filter(item => item.slug !== project.slug).map(item => `<a href="${item.slug}.html"><img src="${base}${item.image}" alt="Archived map environment screenshot"><span>${item.title} ↗</span></a>`).join('')}</div></section>`;
  }
}

const hero = document.getElementById('home-hero');
if (hero) {
  const slideStage = hero.querySelector('.hero-slides');
  const indicatorsStage = hero.querySelector('#hero-indicators');
  const caption = hero.querySelector('#hero-caption');
  slideStage.innerHTML = projects.map((project, index) => `<div class="hero-slide${index === 0 ? ' is-active' : ''}" data-position="${project.position}" style="background-image:url('${base}${project.image}')"></div>`).join('');
  indicatorsStage.innerHTML = projects.map((project, index) => `<button class="hero-indicator${index === 0 ? ' is-active' : ''}" type="button" aria-label="Show ${project.title}" aria-pressed="${index === 0}"></button>`).join('');
  const slides = [...slideStage.querySelectorAll('.hero-slide')];
  const indicators = [...indicatorsStage.querySelectorAll('.hero-indicator')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let timer = null;
  let captionTimer = null;
  let captionRevision = 0;
  let hovered = false;
  let focused = false;

  slides.forEach((slide, index) => {
    slide.style.backgroundPosition = projects[index].position;
  });

  const showSlide = (index, immediate = false) => {
    const nextIndex = (index + slides.length) % slides.length;
    const shouldFadeCaption = !immediate && nextIndex !== activeIndex && !reducedMotion.matches;
    activeIndex = nextIndex;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === activeIndex);
    });
    indicators.forEach((indicator, slideIndex) => {
      const active = slideIndex === activeIndex;
      indicator.classList.toggle('is-active', active);
      indicator.setAttribute('aria-pressed', String(active));
    });
    const project = projects[activeIndex];
    const renderCaption = () => {
      caption.innerHTML = `<p class="eyebrow">COMMUNITY MAP IMAGE · ${String(activeIndex + 1).padStart(2, '0')}</p>
        <h1>${project.title}</h1><p class="project-description">${project.description}</p>
        <a class="button button-primary" href="${base}mods/${project.slug}.html">View Image Details <span aria-hidden="true">→</span></a>`;
      caption.classList.remove('is-changing');
    };
    window.clearTimeout(captionTimer);
    captionRevision += 1;
    const revision = captionRevision;
    if (shouldFadeCaption && caption.childElementCount) {
      caption.classList.add('is-changing');
      captionTimer = window.setTimeout(() => {
        if (revision === captionRevision) renderCaption();
      }, 220);
    } else {
      renderCaption();
    }
  };

  const updateTimer = () => {
    window.clearInterval(timer);
    timer = null;
    if (slides.length < 2 || reducedMotion.matches || hovered || focused || document.hidden) return;
    timer = window.setInterval(() => showSlide(activeIndex + 1), 6000);
  };

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      showSlide(index);
      updateTimer();
    });
  });

  hero.addEventListener('pointerenter', event => {
    if (event.pointerType === 'touch') return;
    hovered = true;
    updateTimer();
  });
  hero.addEventListener('pointerleave', event => {
    if (event.pointerType === 'touch') return;
    hovered = false;
    updateTimer();
  });
  hero.addEventListener('focusin', () => {
    focused = true;
    updateTimer();
  });
  hero.addEventListener('focusout', event => {
    if (!hero.contains(event.relatedTarget)) {
      focused = false;
      updateTimer();
    }
  });
  document.addEventListener('visibilitychange', updateTimer);
  reducedMotion.addEventListener('change', updateTimer);
  showSlide(0, true);
  updateTimer();
}
