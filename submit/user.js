FASF.DB.init(),_m({'(必填) 联系方式（QQ号、Discord）':'(Necessary) Contact (Discord, Twitter)','正式名称（最终在大会上显示的名称）':'Formal Name (what audience will see in the marathon)','个人主页链接（如Bilibili个人主页链接）':'Personal Account Link (e.g. https://www.twitch.tv/ghost_dean)',其它备注信息:'Other Information',保存:'Save',待审核:'Pending',已通过:'Accepted',未通过:'Declined',备选:'Backup',游戏:'Game(s)',游戏名:'Game name',游戏链接:'Game link',类型:'Type',个人速通:'Solo Run',竞技:'Standard Race',初见竞技:'Blind Race',合作:'Co-op Run',其它:'Others',流程:'Category',选手:'Runner(s)',预计时长:'Estimate time',个人最佳记录:'Personal best',画面比例:'Aspect ratio',是否自己解说:'Will you be commentating your run?',是:'Yes',否:'No','报名理由/项目简介':'Give a description of the run','空闲时间/希望参与的时间':'Availabilities / When do you want to run',提交:'Submit',添加报名项目:'Submit runs',修改:'Edit','确认删除此报名项目？':'Are you sure you want to discard this run?',删除失败:'Operation failed.',初见综合:'Blind Race - Adventure',初见跳刺:'Blind Race - Needle',初见耐久:'Blind Race - Avoidance',随机游戏:'Blind Race - Lucky Game',跳刺锦标赛:'Needle Tournament',接力赛:'Relay Race',人:' players',参与玩家:'Players'});{const e=FASF.UI,n=['Solo Run','Standard Race','Blind Race','Co-op Run','Others'];let i=c$('con'),a=Ele('div',0,'sub-L'),r=Ele('div',0,'sub-R');i[1].append(a,r);const s=Ele('div','box','sub');if(FASF.user){let t=Ele('div','box');e.form(t,{contact:e.Input('(必填) 联系方式（QQ号、Discord）\n'),name:e.Input('正式名称（最终在大会上显示的名称）'),link:e.Input('个人主页链接（如Bilibili个人主页链接）\n'),info:e.Input('其它备注信息\n')},0,e.Btn('保存'),FASF.user),t.style.width='500px',i[0].append(t),s.append(Ele('div',0,'sub-a')),t=Ele('div','delete','sub-c'),t.onclick=()=>s.hide(),s.append(t),s.hide(),i[1].parentNode.append(s)}else{let e=tab.firstChild;e.hide(),e.next().click()}const l=[16288956,16289604,16289820,16290396,16294140,16294788,16295004,16295652,16295868,16296444],d=[];for(let e=0;e<l.length;e+=2)for(t=l[e];t<l[e+1];t+=36)d.push(1e5*(t+36));const o=[s.firstChild,{game:['Inputs','游戏\n',['游戏名','游戏链接'],[300,384]],type:['Select','类型','个人速通','竞技','初见竞技','合作','其它'],run:['Users','选手'],cat:['Input','流程','Any%, 100%, Showcase ...',0,300],est:['Time','预计时长'],pb:['Time','个人最佳记录'],win:['Select','画面比例','4 : 3 / 800x608','16 : 9'],com:['Select','是否自己解说','是','否'],desc:['Input','报名理由/项目简介',0,1],time:['Date','空闲时间/希望参与的时间',d]},{game(e){return e.every(e=>e[0])},cat(e){return e},est(e){return e},desc(e){return e}},e.Btn('提交'),'Sub',e=>{let t=i$(e.id),n=h(FASF.user.id,e,!t);t?(t.before(n),t.remove()):i$(FASF.user.id).firstChild.next(2).after(n)}],u=e=>{let t=Ele('div','status');for(let e of['待审核','已通过','未通过','备选']){let n=Span(_t(e)+'(0)');n.ot=_t(e),n.n=0,t.append(n)}e.append(t)},c=(e,t=0,n=0)=>{let i=e.children[t];return i.innerText=`${i.ot}(${n?--i.n:++i.n})`,'#'+['68b','6b6','b66','bb6'][t]},p=t=>{let n=Ele('div','box sub-u',t.id),i=t.get('link');if(n.innerHTML=`<h5><a${i?" href='"+i:''} target='_blank'>${t.get('name')||t.getUsername()}</a></h5>`,u(n),FASF.user&&t.id===FASF.user.id){let t=Ele('div','sub-add').text(_t('添加报名项目'));t.onclick=()=>{e.form(...o),s.show()},n.append(t)}return n},h=(t,i,a=!0)=>{let r=i$(t),l=Ele('div','sub',i.id),d='<h6>';i.get('game').forEach((e,t)=>{t&&(d+=' + '),d+=`<span>${e[0]}</span>`}),d+=`</h6><span>${FASF.Time.fMin(i.get('est'))}</span><span>${i.get('cat')}</span><span>${n[i.get('type')]}</span><span>by</span>`,i.get('run').forEach((e,t)=>{t&&(d+=','),d+=`<a href='${e.get('link')||''}' target='_blank'>${e.get('name')||e.getUsername()}</a>`}),l.innerHTML=d;let u=r.firstChild.next();if(a){let e=c(u,i.get('status'));l.firstChild.style.background=e,l.style.background=e+'2'}if(r.append(l),FASF.user&&t===FASF.user.id){let t=Ele('div','delete'),n=Ele('div','sub-e').text(_t('修改'));t.onclick=()=>{if(confirm(_t('确认删除此报名项目？'))){let e=i.get('status');i.destroy().then(t=>{l.remove(),c(u,e,1)},e=>FASF.UI.msg('删除失败',1))}},n.onclick=()=>{e.form(o[0],o[1],o[2],e.Btn('保存'),i,o[5]),s.show()},l.firstChild.append(t),l.append(n)}return l},g=[];FASF.user&&(a.append(p(FASF.user)),g.push({user:FASF.user,sub:[]})),FASF.DB.Query('Sub').include('run').descending('createdAt').find().then(e=>{let t=[1,0];e.forEach(e=>{let n=g.find(t=>t.user.id===e.get('run')[0].id);if(n)n.sub.push(e);else{n={user:e.get('run')[0],sub:[e]},g.push(n);let i=p(n.user);t[0]<t[1]?(a.append(i),n.LR=0):(r.append(i),n.LR=1),t[n.LR]++}h(n.user.id,e),t[n.LR]++})});let m=Ele('div','sp-t'),F=Ele('div','sp-c');['初见综合','初见跳刺','初见耐久','随机游戏','跳刺锦标赛','接力赛'].forEach((e,t)=>{let n=Ele('div','box').text(_t(e)),i=Ele('div','box');i.innerHTML=5===t?`<h4>${_t(e)} (5${_lang?'个游戏':' games'}, 3${_lang?'队':' teams'})</h4>`:`<h4>${_t(e)} (${3===t?4:8}${_t('人')})</h4>`,u(i),n.con=i,n.onclick=function(){let e=i$('nowsp');e&&(e.id=''),e=i$('nowspc'),e&&(e.id=''),this.id='nowsp',this.con.id='nowspc'},m.append(n),F.append(i),0===t&&n.click()});let b=F.children;FASF.DB.Query('SP').include('r').ascending('createdAt').find().then(t=>{let n=[[[],[]],[[],[]],[[],[]],[],[],[[],[],[],[],[],[]]],i=c$('status',F);n.forEach((e,t)=>{e.length?e.forEach(e=>{e.s=i[t],e.u=c}):(e.s=i[t],e.u=c)}),t.forEach(e=>{let t,i=e.get('i');switch(i){case 0:case 1:case 2:case 5:t=n[i][e.get('g')];break;case 3:case 4:t=n[i]}t.push(e)});let a=e.Date('空闲时间/希望参与的时间',d),r=s.firstChild,l=e.Btn('提交');for(let t=0;t<3;t++)b[t].append(e.Join('Bilibili (4'+_t('人')+')',n[t][0],[r,{i:t,g:0,r:FASF.user,t:a},0,l,'SP']),e.Join('Twitch (4'+_t('人')+')',n[t][1],[r,{i:t,g:1,r:FASF.user,t:a},0,l,'SP']));for(let t=3;t<5;t++)b[t].append(e.Join('参与玩家',n[t],[r,{i:t,r:FASF.user,t:a},0,l,'SP']));['Alphazetica - 20min','Strange Water Appears - 15min','I wanna Hydrate - 25 or 30min','I wanna be the Blizzard - 25min','I wanna be the Cloudburst - 15min',_lang?'有意向参加接力竞技，想竞技以上范围外的游戏':"Other games you'd like to race with others"].forEach((t,i)=>{b[5].append(e.Join(t,n[5][i],[r,5===i?{o:['Inputs','游戏\n',['游戏名','游戏链接'],[300,384]],i:5,g:i,r:FASF.user,t:a}:{i:5,g:i,r:FASF.user,t:a},0,l,'SP']))})}),i[2].append(m,F)}