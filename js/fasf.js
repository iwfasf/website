const doc=document,i$=t=>doc.getElementById(t),c$=(t,e=doc)=>e.getElementsByClassName(t),t$=(t,e=doc)=>e.getElementsByTagName(t),css=(t,e,n=-1,i)=>{if(void 0!==t.length)for(let a=t.length;a--;)Object.assign(t[a].style,a===n?i:e);else Object.assign(t.style,e)},Ele=(t,e,n,i)=>{let a=doc.createElement(t);return e&&(a.className=e),n&&(a.id=n),i&&Object.assign(a,i),a},Span=t=>{let e=doc.createElement('span');return e.innerHTML=t.replace(/{.*}/g,t=>`<svg><use href='#-${t.slice(1,-1)}'></use></svg>`),e};var _lang=(localStorage.getItem('lang')||navigator.language).startsWith('zh-');const _s={},_t=t=>_lang?t:_s[t]||t,_m=t=>Object.assign(_s,t);{let t=HTMLElement.prototype;t.text=function(t){return this.innerText=t,this},t.icon=function(t){return this.innerHTML+=`<svg><use href='#-${t}'></use></svg>`,this},t.hasCls=function(t){return this.classList.contains(t)},t.addCls=function(t){this.classList.add(t)},t.rmCls=function(t){this.classList.remove(t)},t.prev=function(t=1){let e=this.previousSibling;for(;--t;)e=e.previousSibling;return e},t.next=function(t=1){let e=this.nextSibling;for(;--t;)e=e.nextSibling;return e},t.hide=function(){this.style.display='none'},t.show=function(){this.style.display=''},t.activate=function(t=""){this.style.color=t,this.style.pointerEvents=''},t.deactivate=function(t="#aaa"){this.style.color=t,this.style.pointerEvents='none'}}_m({大会捐助:'Sponsor',加入我们:'Join us',传送门:'Link',登录:'Sign In',退出登录:'Log out'});const FASF={init(){let t=i$('navi'),e=i$('footer'),n=i$('head');t.innerHTML="<a href='/'></a>",e.innerHTML=`<p>Copyright © 2020-2021</p><p>by <a href='https://space.bilibili.com/8093396' target='_blank'>Vicklleall</a> & <a href='https://space.bilibili.com/1365455' target='_blank'>Ghost</a></p><div id='footer-L'></div><div id='footer-R'>${_t('传送门')}<br/><a href='https://www.iwannawiki.com/' target='_blank'>I Wanna Wiki</a><br/><a href='https://delicious-fruit.com/' target='_blank'>Delicious Fruit</a></div>`,n&&(n.style.background=`url(//cdn.jsdelivr.net/gh/iwfasf/website@g5n9x/${location.pathname.slice(1)}img/head.png) no-repeat top /cover`);let i=Ele('span'),a=Ele('a'),s=Ele('a');css(i,{cursor:'pointer'}),i.text(_lang?'English':'中文'),i.onclick=()=>{localStorage.setItem('lang',_lang?'en-':'zh-'),location.reload()},a.innerText=_t('大会捐助'),s.innerText=_t('加入我们'),a.href='/about/sponsor.html',s.href='/about/joinus.html',a.target=s.target='_blank',i$('footer-L').append(i,Ele('br'),a,Ele('br'),s);for(let t=0;t<12;t++){let e=doc.createElement('div');e.className='tile',e.y=Math.random();let n=100+100*Math.random()<<0;css(e,{width:n+'px',height:n+'px',backgroundPosition:-t*n+"px 0",left:100*Math.random()+"%",top:100*Math.random()+"%",transform:`translate(-50%, -50%) rotate(${360*Math.random()}deg)`}),i$('wrap').append(e)}let o=0;window.onresize=()=>{window.innerWidth!==o&&(o=window.innerWidth,screen.width&&css(doc.body,{zoom:Math.max(1,screen.width/1280)}),css(doc.body,{zoom:window.innerWidth/doc.body.offsetWidth,opacity:1}))},doc.body.style.transition='opacity 0.5s',window.onresize()},Time:{get week(){return _lang?['星期日','星期一','星期二','星期三','星期四','星期五','星期六']:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']},pad:t=>(t<10?'0':'')+t,fDate(t){return`${t.getFullYear()}-${this.pad(t.getMonth()+1)}-${this.pad(t.getDate())}`},fTime(t){return this.pad(t.getHours())+':'+this.pad(t.getMinutes())},fMin(t){return`${this.pad(t/60<<0)}:${this.pad(t%60<<0)}:${this.pad(Math.round(t%1*100))}`}},DB:{hasInit:!1,init(){if(this.hasInit)return;AV.init({appId:'gzx9LdA4Qed6X9xKUepgrI1c-MdYXbMMI',appKey:'QHU1MrT3JUxKEKw02OnKUaRh',serverURLs:'https://api.iwfasf.com'});let t=AV.User.current(),e=Ele('div',0,'user');if(e.innerText=t?t.getUsername():_t('登录'),t){let t=Ele('div'),n=Ele('p').text(_t('退出登录'));n.onclick=()=>AV.User.logOut().then(()=>location.href='./'),t.append(n),e.append(t)}else e.onclick=()=>location.href='/user/login.html';i$('navi').append(e),FASF.user=t,this.hasInit=!0},Object:(t,e)=>e?AV.Object.createWithoutData(t,e):new AV.Object(t),Query:t=>new AV.Query(t).limit(999)}};FASF.init();