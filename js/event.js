{let e='Blind Race - ';_m({介绍:'Information',时间表:'Schedule',作品:'Games',发表评论:'Comment',作者:'Creator(s)',视频:'Videos',下载:'Downloads',下载暂无:'Download is not available',初见综合竞技:e+'Adventure',初见跳刺竞技:e+'Needle',初见耐久竞技:e+'Avoidance',初见坑向竞技:e+'Trap',初见合作竞技:e+'Co-operation',初见STG竞技:e+'STG',初见随机竞技:e+'Lucky'});let t=[],a=[];[_t('介绍'),_t('时间表'),_t('作品')].forEach((e,i)=>{let n=Ele('div','tab').text(e),d=Ele('div','con');n.i=i,n.onclick=function(){css(c$('con'),{display:''},this.i,{display:'block'});let e=i$('tab');e&&(e.id=''),this.id='tab'},t.push(n),a.push(d)}),i$('wrap').append(...t,...a),t[0].click();let i=Ele('div','box page');i.innerHTML=`<h2>Fangame Summer Feast ${data.year}</h2>`+(_lang?data.intro:data.introE),a[0].append(i,Ele('br'));let n=Ele('div','box page','rv-box');n.innerHTML=`<textarea></textarea><div id='review'>${_t('发表评论')}</div><div id='rv-mb'></div><div class='rv-c'></div><div class='rv-c' style='margin-left:24px'></div>`,a[0].append(n);let d=Ele('div','game-b');d.hide(),d.onclick=function(){this.hide(),css(c$('game-d'),{display:'none'})},doc.body.append(d);let l=e=>{let t,a=e,i=e.indexOf('^'),n=1;return-1==i&&(i=e.indexOf('$'),n=0),i>0&&(a=e.slice(0,i),t=e.slice(i+1)),[a,t,n]};data.game.forEach((e,t)=>{let i=_lang?e.n:e.nE||e.n,n=Ele('div','box game select');n.innerHTML=`<h3>${i}</h3><p>${_lang?e.i:e.iE}</p>`,n.d=Ele('div','box game game-d'),n.d.innerHTML=`<h3>${i}</h3><p>${_t('作者')}</p>`,e.a.forEach(e=>{let[t,a,i]=l(e),d=Ele('a','btn-link');d.innerText=t,a&&(d.href=(i?'https://space.bilibili.com/':'https://twitter.com/')+a,d.target='_blank'),n.d.append(d)}),n.d.append(Ele('br'),Ele('span').text(_t('视频'))),e.v.forEach(e=>{let[t,a,i]=l(e),d=Ele('a','btn-link');d.innerText=_t(t),d.href='https://www.bilibili.com/video/'+a,d.target='_blank',n.d.append(d)}),n.d.append(Ele('br'),Ele('span').text(_t('下载'))),e.d?e.d.forEach(e=>{let[t,a,i]=l(e),d=Ele('a','btn-link');d.innerText=t,d.href=a,d.target='_blank',n.d.append(d)}):n.d.lastChild.text(_t('下载暂无')),n.d.style.backgroundImage=n.style.backgroundImage=`url(//cdn.jsdelivr.net/gh/iwfasf/website@g55im/${location.pathname.slice(1)}img/${t}.png)`,n.d.hide(),n.onclick=function(){this.d.show(),d.show()},a[2].append(n),doc.body.append(n.d)})}