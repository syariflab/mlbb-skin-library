(()=>{
  const root=document.documentElement;
  const button=document.querySelector('.theme-toggle');
  const icon=button?.querySelector('.theme-icon');
  const key='mlbb-skin-library-theme';
  let saved='dark';
  try{saved=localStorage.getItem(key)||'dark'}catch{}
  const apply=theme=>{
    const light=theme==='light';
    root.dataset.theme=light?'light':'dark';
    if(icon)icon.textContent=light?'light_mode':'dark_mode';
    if(button){
      button.setAttribute('aria-label',light?'Aktifkan mode gelap':'Aktifkan mode terang');
      button.setAttribute('aria-checked',String(light));
      button.setAttribute('aria-pressed',String(light));
      button.title=light?'Mode terang':'Mode gelap';
    }
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.content=light?'#f4f5f9':'#090b12';
  };
  apply(saved==='light'?'light':'dark');
  button?.addEventListener('click',()=>{
    const next=root.dataset.theme==='light'?'dark':'light';
    apply(next);
    try{localStorage.setItem(key,next)}catch{}
  });
})();