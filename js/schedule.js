_m({请先登录哦:'Please sign in first.',发表失败:'Failed to send.',前往直播间:'Watch live on'}),document.head.innerHTML+="<svg version='1.1' xmlns='http://www.w3.org/2000/svg' style='display:none'><symbol id='-list' viewBox='0 0 32 32'><rect width='19' height='3' x='10' y='6.5' rx='1.5' ry='1.5'/><circle cx='5' cy='8' r='2'/><circle cx='5' cy='16' r='2'/><circle cx='5' cy='24' r='2'/><rect width='19' height='3' x='10' y='14.5' rx='1.5' ry='1.5'/><rect width='19' height='3' x='10' y='22.5' rx='1.5' ry='1.5'/></symbol><symbol id='-table' viewBox='0 0 32 32'><rect width='12' height='16' x='3' y='3' rx='2' ry='2'/><rect width='12' height='8' x='17' y='3' rx='2' ry='2'/><rect width='12' height='8' x='3' y='21' rx='2' ry='2'/><rect width='12' height='16' x='17' y='13' rx='2' ry='2'/></symbol><symbol id=\"-bili\" viewBox=\"2 2 28 28\"><path d=\"M20 17.1l-6-3.4a1 1 0 0 0-1.5.8v7a1 1 0 0 0 1.5.8l6-3.4a1 1 0 0 0 0-1.8z\"/><path d=\"M25 8h-2l1.2-1.6a1.5 1.5 0 0 0-2.4-1.8L19.2 8h-6.4l-2.6-3.4a1.5 1.5 0 0 0-2.4 1.8L9 8H7a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V12a4 4 0 0 0-4-4zm1 16a1.1 1.1 0 0 1-1 1H7a1.1 1.1 0 0 1-1-1V12a1.1 1.1 0 0 1 1-1h18a1.1 1.1 0 0 1 1 1z\"/></symbol></svg>",FASF.DB.init(),FASF.DB.Query('Data').equalTo('year',data.year).first().then(e=>{let t=e=>{let t,a=e,i=e.indexOf('^'),l=1;return-1==i&&(i=e.indexOf('$'),l=0),i>0&&(a=e.slice(0,i),t=e.slice(i+1)),[a,t,l]};if(Object.assign(data,e.toJSON()),data.intro&&(i$('intro').innerHTML=`<h2>Fangame Summer Feast ${data.year}</h2>`+(_lang?data.intro:data.introE)),data.game.forEach((e,a)=>{let i=_lang?e.n:e.nE||e.n,l=Ele('div','box game select');l.innerHTML=`<h3>${i}</h3><p>${_lang?e.i:e.iE}</p>`,l.d=Ele('div','box game game-d'),l.d.innerHTML=`<h3>${i}</h3><p>${_t('作者')}</p>`,e.a.forEach(e=>{let[a,i,n]=t(e),s=Ele('a','btn-link');s.innerText=a,i&&(s.href=(n?'https://space.bilibili.com/':'https://twitter.com/')+i,s.target='_blank'),l.d.append(s)}),l.d.append(Ele('br'),Ele('span').text(_t('视频'))),e.v.forEach(e=>{let[a,i,n]=t(e),s=Ele('a','btn-link');s.innerText=_t(a),s.href='https://www.bilibili.com/video/'+i,s.target='_blank',l.d.append(s)}),l.d.append(Ele('br'),Ele('span').text(_t('下载'))),e.d?e.d.forEach(e=>{let[a,i,n]=t(e),s=Ele('a','btn-link');s.innerText=a,s.href=i,s.target='_blank',l.d.append(s)}):l.d.lastChild.text(_t('下载暂无')),l.d.style.backgroundImage=l.style.backgroundImage=`url(//cdn.jsdelivr.net/gh/iwfasf/website@gdwum/${location.pathname.slice(1)}img/${a}.png)`,l.d.hide(),l.onclick=function(){this.d.show(),bg.show()},cons[2].append(l),doc.body.append(l.d)}),Date.now()<data.end&&Date.now()>data.start){let e=Ele('p');e.innerHTML=`📺 ${_t('前往直播间')}-> <a href='https://live.bilibili.com/7310386' target='_blank'>https://live.bilibili.com/7310386</a>`,css(e,{textAlign:'center',fontSize:'20px',fontWeight:600,textIndent:0}),i$('sch').firstChild.after(e)}}),window.RUNNER=new Set,FASF.DB.Query('Schedule').equalTo('y',data.year).ascending('s').find().then(e=>{const t=FASF.Time;let a=Ele('div','box page','sch');a.innerHTML=`<h2>FASF ${data.year} ${_t('时间表')}</h2>`,a.style.minWidth='960px',c$('con')[1].append(a);let i=Ele('div','sch-wrap'),l=Ele('div','sch-wrap');l.style.whiteSpace='nowrap',a.append(i,l);let n=Ele('div','st-list').icon('list'),s=Ele('div','st-table').icon('table');n.onclick=()=>{i.show(),n.addCls('on'),l.hide(),s.rmCls('on')},s.onclick=()=>{i.hide(),n.rmCls('on'),l.show(),s.addCls('on')},a.firstChild.append(n,s),n.click();const r={'Solo Run':'s0','Special Event':'s1','Blind Race':'s2','Standard Race':'s3','Q&A':'s4'};let d=new Date(0),c=0,h=null,o=null,p=1440,g=0;e.forEach(e=>{let t=e.get('s'),a=60*t.getHours()+t.getMinutes()+t.getSeconds()/60;a<p&&(p=a)}),p-=5,e.forEach(e=>{let a=e.get('s');a.getDate()!==d.getDate()&&(c++,d=new Date(t.fDate(a)+' 00:00:00'),h=Ele('div','sch'),h.innerHTML=`<div class='sch-day'>Day ${c}</div><div class='sch-date'>${t.fDate(a)} ${t.week[a.getDay()]}</div>`,i.append(h),o=Ele('div','table-day'),o.innerHTML=`<h5>Day ${c}<p>${a.getMonth()+1}.${a.getDate()} ${t.week[a.getDay()]}</p></h5>`,l.append(o),o.onwheel=e=>{let t=f-e.deltaY;t>=1e3&&(f=t,css(v,{height:t+'px'})),e.preventDefault()});let n=Ele('div','sch-r'),s=Ele('div','table-run '+(r[e.get('t')||'Solo Run']||'s5')),b=`<div class='sch-time'>${t.fTime(a)}</div><div class='sch-game'>`,y=`<div class='table-time'>${t.fTime(a)}<span> - ${t.fMin(e.get('e'))}</span></div>`;e.get('v')&&(b+=`<a class='sch-video' href='https://www.bilibili.com/video/${e.get('v')}' target='_blank'><svg><use href='#-bili'></use></svg></a>`),e.get('g').forEach((e,t)=>{t&&(b+=', ');let a=e.lastIndexOf('=');if(-1===a)b+=`<a>${e}</a>`,y+=`<a class='table-game'>${e}</a>`;else{let t=e.slice(a+1);'h'!==t[0]&&(t='https://delicious-fruit.com/ratings/game_details.php?id='+t),b+=`<a href='${t}' target='_blank'>${e.slice(0,a)}</a>`,y+=`<a class='table-game' href='${t}' target='_blank'>${e.slice(0,a)}</a>`}}),b+=`</div><span class='sch-est'>${t.fMin(e.get('e'))}</span><span class='sch-cat'>${e.get('c')||'Any%'}</span><span class='sch-type'>${e.get('t')||'Solo Run'}</span><div class='sch-runner'>`,y+=`<div style='margin:8px;white-space:pre-line'>${e.get('c')||'Any%'} by `,e.get('r').forEach((e,t)=>{'&'===e[0]?(e=e.slice(1),b+='&'):t&&(b+=', ');let a,i=e.lastIndexOf('>');-1===i?(i=e.lastIndexOf('/'),-1===i?(i=e.lastIndexOf(':'),-1!==i&&(a='https://www.twitch.tv/'+e.slice(i+1))):a='https://space.bilibili.com'+e.slice(i)):a=e.slice(i+1),a?(a=`<a href='${a}' target='_blank'>${e.slice(0,i)}</a>`,b+=a,y+=a,RUNNER.add(e.slice(0,i).replace(/\(.*\)/g,'').toLowerCase())):(a=`<a>${e}</a>`,b+=a,y+=a,RUNNER.add(e.replace(/\(.*\)/g,'').toLowerCase()))}),n.innerHTML=b+'</div>',h.append(n);let w=(a-d)/6e4-p,x=e.get('e');s.top=w,s.height=x,w+x>g&&(g=w+x),s.innerHTML=y+'</div>',o.append(s)}),h=Ele('div','sch'),h.innerHTML="<div class='sch-day'>End</div>",i.append(h);let v=c$('table-day'),f=2e3;css(v,{width:`calc(${100/c}% - 10px)`,height:'3000px'});let b=c$('table-run');for(let e=b.length;e--;)css(b[e],{top:b[e].top/g*100+'%',height:b[e].height/g*100+'%'})});const G=e=>{let t=Ele('div','review'),a=Ele('div').text(e.get('user').getUsername()),i=e.createdAt;return a.append(Ele('div','rv-time').text(FASF.Time.fDate(i)+' '+FASF.Time.fTime(i))),t.append(a,Ele('p').text(e.get('word'))),t};i$('review').onclick=function(){if(this.on)return;if(!FASF.user)return alert(_t('请先登录哦'));let e=this.prev().value.trim();if(!e)return;this.on=!0,this.r=function(){this.on=!1,css(this,{background:'',pointerEvents:''})};let t=FASF.DB.Object('Review');t.set('user',FASF.user),t.set('word',e),t.set('index',data.year),t.save().then(e=>{let t=G(e),a=i$('rv-box').lastChild.prev(),i=a.prev();i.firstChild?(a.firstChild.before(t),i.firstChild.before(t.cloneNode(1))):(a.append(t),i.append(t.cloneNode(1))),this.r(),this.prev().value=''},e=>{alert(_t('发表失败')),this.r()}),css(this,{background:'#bcd',pointerEvents:'none'})},FASF.DB.Query('Review').equalTo('index',data.year).include('user.username').descending('createdAt').find().then(e=>{if(0===e.length)return;let t=i$('rv-box').lastChild,a=t.prev(),i=a.prev(),l=0,n=0;e.forEach(e=>{let s=G(e);l<=n?(a.append(s),l+=s.offsetHeight+24):(t.append(s),n+=s.offsetHeight+24),i.append(s.cloneNode(1))})});