const doc=document,i$=e=>doc.getElementById(e),c$=(e,t=doc)=>t.getElementsByClassName(e),t$=(e,t=doc)=>t.getElementsByTagName(e),css=(e,t,i=-1,n)=>{if(void 0!==e.length)for(let a=e.length;a--;)Object.assign(e[a].style,a===i?n:t);else Object.assign(e.style,t)},Ele=(e,t,i,n)=>{let a=doc.createElement(e);return t&&(a.className=t),i&&(a.id=i),n&&Object.assign(a,n),a},Span=e=>{let t=doc.createElement('span');return t.innerHTML=e.replace(/{.*}/g,e=>`<svg><use href='#-${e.slice(1,-1)}'></use></svg>`),t};var _lang=(localStorage.getItem('lang')||navigator.language).startsWith('zh-');const _s={},_t=e=>_lang?e:_s[e]||e,_m=e=>Object.assign(_s,e);{let e=HTMLElement.prototype;e.text=function(e){return this.innerText=e,this},e.icon=function(e){return this.innerHTML+=`<svg><use href='#-${e}'></use></svg>`,this},e.hasCls=function(e){return this.classList.contains(e)},e.addCls=function(e){this.classList.add(e)},e.rmCls=function(e){this.classList.remove(e)},e.prev=function(e=1){let t=this.previousSibling;for(;--e;)t=t.previousSibling;return t},e.next=function(e=1){let t=this.nextSibling;for(;--e;)t=t.nextSibling;return t},e.hide=function(){this.style.display='none'},e.show=function(){this.style.display=''},e.activate=function(e=""){this.style.color=e,this.style.pointerEvents=''},e.deactivate=function(e="#aaa"){this.style.color=e,this.style.pointerEvents='none'}}_m({大会捐助:'Sponsor',加入我们:'Join us',传送门:'Link',登录:'Sign In',退出登录:'Log out'});const FASF={init(){let e=i$('navi'),t=i$('footer'),i=i$('head');e.innerHTML="<a href='/'></a>",t.innerHTML=`<p>Copyright © 2020-2022</p><p>by <a href='https://space.bilibili.com/8093396' target='_blank'>Vicklleall</a> & <a href='https://space.bilibili.com/1365455' target='_blank'>Ghost</a></p><div id='footer-L'></div><div id='footer-R'>${_t('传送门')}<br/><a href='https://www.iwannawiki.com/' target='_blank'>I Wanna Wiki</a><br/><a href='https://delicious-fruit.com/' target='_blank'>Delicious Fruit</a></div>`,i&&(i.style.background=`url(//cdn.jsdelivr.net/gh/iwfasf/website@gdw36/${location.pathname.slice(1)}img/head.png) no-repeat top /cover`);let n=Ele('span'),a=Ele('a'),s=Ele('a');css(n,{cursor:'pointer'}),n.text(_lang?'English':'中文'),n.onclick=()=>{localStorage.setItem('lang',_lang?'en-':'zh-'),location.reload()},a.innerText=_t('大会捐助'),s.innerText=_t('加入我们'),a.href='/about/sponsor',s.href='/about/joinus',a.target=s.target='_blank',i$('footer-L').append(n,Ele('br'),a,Ele('br'),s);for(let e=0;e<12;e++){let t=doc.createElement('div');t.className='tile',t.y=Math.random();let i=100+100*Math.random()<<0;css(t,{width:i+'px',height:i+'px',backgroundPosition:-e*i+"px 0",left:100*Math.random()+"%",top:100*Math.random()+"%",transform:`translate(-50%, -50%) rotate(${360*Math.random()}deg)`}),i$('wrap').append(t)}let r=0;window.onresize=()=>{window.innerWidth!==r&&(r=window.innerWidth,screen.width&&css(doc.body,{zoom:Math.max(1,screen.width/1280)}),css(doc.body,{zoom:window.innerWidth/doc.body.offsetWidth,opacity:1}))},doc.body.style.transition='opacity 0.5s',window.onresize()},Time:{get week(){return _lang?['星期日','星期一','星期二','星期三','星期四','星期五','星期六']:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']},pad:e=>(e<10?'0':'')+e,fDate(e){return`${e.getFullYear()}-${this.pad(e.getMonth()+1)}-${this.pad(e.getDate())}`},fTime(e){return this.pad(e.getHours())+':'+this.pad(e.getMinutes())},fMin(e){return`${this.pad(e/60<<0)}:${this.pad(e%60<<0)}:${this.pad(Math.round(e%1*100))}`}},DB:{hasInit:!1,init(e=0){return this.hasInit||(AV.init({appId:'gzx9LdA4Qed6X9xKUepgrI1c-MdYXbMMI',appKey:'QHU1MrT3JUxKEKw02OnKUaRh',serverURLs:'https://api.iwfasf.com'}),this.hasInit=!0),this.userReady||(this.userReady=new Promise(t=>{let i=AV.User.current();(e&&i?i.isAuthenticated().then(e=>{e&&(FASF.user=i)}):Promise.resolve(FASF.user=i)).finally(()=>{let e=FASF.user,i=Ele('div',0,'user');if(i.innerText=e?e.getUsername():_t('登录'),e){let e=Ele('div'),t=Ele('p').text(_t('退出登录'));t.onclick=()=>AV.User.logOut().then(()=>location.href='./'),e.append(t),i.append(e)}else i.onclick=()=>location.href='/user/login';i$('navi').append(i),t()})})),this.userReady},Object:(e,t)=>t?AV.Object.createWithoutData(e,t):new AV.Object(e),Query:e=>new AV.Query(e).limit(999)}};FASF.init();