_m({请先登录哦:'Please sign in first.',发表失败:'Failed to send.'}),document.head.innerHTML+="<svg version='1.1' xmlns='http://www.w3.org/2000/svg' style='display:none'><symbol id='-list' viewBox='0 0 32 32'><rect width='19' height='3' x='10' y='6.5' rx='1.5' ry='1.5'/><circle cx='5' cy='8' r='2'/><circle cx='5' cy='16' r='2'/><circle cx='5' cy='24' r='2'/><rect width='19' height='3' x='10' y='14.5' rx='1.5' ry='1.5'/><rect width='19' height='3' x='10' y='22.5' rx='1.5' ry='1.5'/></symbol><symbol id='-table' viewBox='0 0 32 32'><rect width='12' height='16' x='3' y='3' rx='2' ry='2'/><rect width='12' height='8' x='17' y='3' rx='2' ry='2'/><rect width='12' height='8' x='3' y='21' rx='2' ry='2'/><rect width='12' height='16' x='17' y='13' rx='2' ry='2'/></symbol></svg>",FASF.DB.init(),window.RUNNER=new Set,FASF.DB.Query('FASF'+data.year).ascending('s').find().then(e=>{const t=FASF.Time;let i=Ele('div','box page');i.innerHTML=`<h2>FASF ${data.year} ${_t('时间表')}</h2>`,i.style.minWidth='960px',c$('con')[1].append(i);let s=Ele('div','sch-wrap'),a=Ele('div','sch-wrap');a.style.whiteSpace='nowrap',i.append(s,a);let l=Ele('div','st-list').icon('list'),n=Ele('div','st-table').icon('table');l.onclick=()=>{s.show(),l.addCls('on'),a.hide(),n.rmCls('on')},n.onclick=()=>{s.hide(),l.rmCls('on'),a.show(),n.addCls('on')},i.firstChild.append(l,n),l.click();const r={'Solo Run':'s0','Special Event':'s1','Blind Race':'s2','Standard Race':'s3','Q&A':'s4'};let d=new Date(0),c=0,h=null,o=null,p=1440,g=0;e.forEach(e=>{let t=e.get('s'),i=60*t.getHours()+t.getMinutes()+t.getSeconds()/60;i<p&&(p=i)}),p-=5,e.forEach(e=>{let i=e.get('s');i.getDate()!==d.getDate()&&(c++,d=new Date(t.fDate(i)+' 00:00:00'),h=Ele('div','sch'),h.innerHTML=`<div class='sch-day'>Day ${c}</div><div class='sch-date'>${t.fDate(i)} ${t.week[i.getDay()]}</div>`,s.append(h),o=Ele('div','table-day'),o.innerHTML=`<h5>Day ${c}<p>${i.getMonth()+1}.${i.getDate()} ${t.week[i.getDay()]}</p></h5>`,a.append(o),o.onwheel=e=>{let t=y-e.deltaY;t>=1e3&&(y=t,css(v,{height:t+'px'})),e.preventDefault()});let l=Ele('div','sch-r'),n=Ele('div','table-run '+(r[e.get('t')||'Solo Run']||'s5')),f=`<div class='sch-time'>${t.fTime(i)}</div><div class='sch-game'>`,w=`<div class='table-time'>${t.fTime(i)}<span> - ${t.fMin(e.get('e'))}</span></div>`;e.get('g').forEach((e,t)=>{t&&(f+=', ');let i=e.lastIndexOf('=');if(-1===i)f+=`<a>${e}</a>`,w+=`<a class='table-game'>${e}</a>`;else{let t=e.slice(i+1);'h'!==t[0]&&(t='https://delicious-fruit.com/ratings/game_details.php?id='+t),f+=`<a href='${t}' target='_blank'>${e.slice(0,i)}</a>`,w+=`<a class='table-game' href='${t}' target='_blank'>${e.slice(0,i)}</a>`}}),f+=`</div><span class='sch-est'>${t.fMin(e.get('e'))}</span><span class='sch-cat'>${e.get('c')||'Any%'}</span><span class='sch-type'>${e.get('t')||'Solo Run'}</span><div class='sch-runner'>`,w+=`<div style='margin:8px;white-space:pre-line'>${e.get('c')||'Any%'} by `,e.get('r').forEach((e,t)=>{t&&(f+=', ');let i,s=e.lastIndexOf('>');-1===s?(s=e.lastIndexOf('/'),-1===s?(s=e.lastIndexOf(':'),-1!==s&&(i='https://www.twitch.tv/'+e.slice(s+1))):i='https://space.bilibili.com'+e.slice(s)):i=e.slice(s+1),i?(i=`<a href='${i}' target='_blank'>${e.slice(0,s)}</a>`,f+=i,w+=i,RUNNER.add(e.slice(0,s).replace(/\(.*\)/g,'').toLowerCase())):(i=`<a>${e}</a>`,f+=i,w+=i,RUNNER.add(e.replace(/\(.*\)/g,'').toLowerCase()))}),l.innerHTML=f+'</div>',h.append(l);let x=(i-d)/6e4-p,u=e.get('e');n.top=x,n.height=u,x+u>g&&(g=x+u),n.innerHTML=w+'</div>',o.append(n)}),h=Ele('div','sch'),h.innerHTML="<div class='sch-day'>End</div>",s.append(h);let v=c$('table-day'),y=2e3;css(v,{width:`calc(${100/c}% - 10px)`,height:'3000px'});let f=c$('table-run');for(let e=f.length;e--;)css(f[e],{top:f[e].top/g*100+'%',height:f[e].height/g*100+'%'})});const G=e=>{let t=Ele('div','review'),i=Ele('div').text(e.get('user').getUsername()),s=e.createdAt;return i.append(Ele('div','rv-time').text(FASF.Time.fDate(s)+' '+FASF.Time.fTime(s))),t.append(i,Ele('p').text(e.get('word'))),t};i$('review').onclick=function(){if(this.on)return;if(!FASF.user)return alert(_t('请先登录哦'));let e=this.prev().value.trim();if(!e)return;this.on=!0,this.r=function(){this.on=!1,css(this,{background:'',pointerEvents:''})};let t=FASF.DB.Object('Review');t.set('user',FASF.user),t.set('word',e),t.set('index',data.year),t.save().then(e=>{let t=G(e),i=i$('rv-box').lastChild.prev(),s=i.prev();s.firstChild?(i.firstChild.before(t),s.firstChild.before(t.cloneNode(1))):(i.append(t),s.append(t.cloneNode(1))),this.r(),this.prev().value=''},e=>{alert(_t('发表失败')),this.r()}),css(this,{background:'#bcd',pointerEvents:'none'})},FASF.DB.Query('Review').equalTo('index',data.year).include('user.username').descending('createdAt').find().then(e=>{if(0===e.length)return;let t=i$('rv-box').lastChild,i=t.prev(),s=i.prev(),a=0,l=0;e.forEach(e=>{let n=G(e);a<=l?(i.append(n),a+=n.offsetHeight+24):(t.append(n),l+=n.offsetHeight+24),s.append(n.cloneNode(1))})});