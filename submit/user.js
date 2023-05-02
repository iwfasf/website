_m({'登录以添加报名项目':'Sign in to submit runs','(必填) 联系方式（QQ号、Discord）':'(Necessary) Contact (Discord, Twitter)','正式名称（最终在大会上显示的名称）':'Formal Name (what audience will see in the marathon)','个人主页链接（如Bilibili个人主页链接）':'Personal Account Link (e.g. https://www.twitch.tv/ghost_dean)','其它备注信息':'Other Information','保存':'Save','待审核':'Pending','已通过':'Accepted','未通过':'Declined','备选':'Backup','游戏':'Game(s)','游戏名':'Game name','游戏链接':'Game link','类型':'Type','个人速通':'Solo Run','竞技':'Standard Race','初见竞技':'Blind Race','合作':'Co-op Run','其它':'Others','流程':'Category','选手':'Runner(s)','预计时长':'Estimate time','个人最佳记录':'Personal best','画面比例':'Aspect ratio','是否自己(或找人)解说':'Will you (or other people) be commentating your run?','是否愿意开启摄像头':'Camera available','是':'Yes','否':'No','报名理由/项目简介':'Give a description of the run','空闲时间/希望参与的时间':'Availabilities / When do you want to run','提交':'Submit','添加报名项目':'Submit runs','修改':'Edit','确认删除此报名项目？':'Are you sure you want to discard this run?','删除失败':'Operation failed.','若找人解说，请填写解说人':'Who will be commentating your run','报名已结束':'Submission closed'}),FASF.DB.init(1).then(()=>{const e=FASF.UI,n=['Solo Run','Standard Race','Blind Race','Co-op Run','Others'];let i=c$('con'),s=Ele('div',0,'sub-L'),a=Ele('div',0,'sub-R');i[1].append(s,a);const l=Ele('div','box','sub');if(FASF.user){let t=Ele('div','box');e.form(t,{contact:e.Input('(必填) 联系方式（QQ号、Discord）\n'),name:e.Input('正式名称（最终在大会上显示的名称）'),link:e.Input('个人主页链接（如Bilibili个人主页链接）\n'),info:e.Input('其它备注信息\n')},{},0,e.Btn('保存'),FASF.user),t.style.width='500px',i[0].append(t),l.append(Ele('div',0,'sub-a')),t=Ele('div','delete','sub-c'),t.onclick=()=>l.hide(),l.append(t),l.hide(),i[1].parentNode.append(l)}else{let e=tab.firstChild;e.hide(),e.next().click();let t=Ele('div','box sub-u');t.innerHTML=`<a class='sub-add' href='/user/login.html'>${_t('登录以添加报名项目')}</a>`,s.append(t)}const r=16918020,d=r+5184,o=[r,r+576,r+864,16919388,d,d+576,d+864,16924644,d+1728,16925436],u=[];for(let e=0;e<o.length;e+=2)for(t=o[e]-36;t<o[e+1];t+=36)u.push(1e5*(t+36));const c=[l.firstChild,{game:['Inputs','游戏\n',['游戏名','游戏链接'],[300,384]],type:['Select','类型','个人速通','竞技','初见竞技','合作','其它'],run:['Users','选手'],cat:['Input','流程','Any%, 100%, Showcase ...',0,300],est:['Time','预计时长'],pb:['Time','个人最佳记录'],win:['Select','画面比例','4 : 3 / 800x608','16 : 9'],com:['Select','是否自己(或找人)解说','是','否'],comp:['Input','若找人解说，请填写解说人','',0,100],cam:['Select','是否愿意开启摄像头','是','否'],desc:['Input','报名理由/项目简介',0,1],time:['Date','空闲时间/希望参与的时间',u]},{com(e){console.log(e),e?this.next().hide():this.next().show()}},{game:e=>e.every(e=>e[0]),cat:e=>e,est:e=>e,desc:e=>e},e.Btn('提交'),'Sub',e=>{let t=i$(e.id),n=f(FASF.user.id,e,!t);t?(t.before(n),t.remove()):i$(FASF.user.id).firstChild.next(2).after(n)}],p=e=>{let t=Ele('div','status');for(let e of['待审核','已通过','未通过','备选']){let n=Span(_t(e)+'(0)');n.ot=_t(e),n.n=0,t.append(n)}e.append(t)},h=(e,t=0,n=0)=>{let i=e.children[t];return i.innerText=`${i.ot}(${n?--i.n:++i.n})`,'#'+['68b','6b6','b66','bb6'][t]},b=t=>{let n=Ele('div','box sub-u',t.id),i=t.get('link');if(n.innerHTML=`<h5><a${i?" href='"+i+"'":''} target='_blank'>${t.get('name')||t.getUsername()}</a></h5>`,p(n),FASF.user&&t.id===FASF.user.id){let t=Ele('div','sub-add').text(_t('添加报名项目'));ACTIVE?t.onclick=()=>{e.form(...c),l.show()}:(t.text(_t('报名已结束')),t.addCls('sub-closed')),n.append(t)}return n},f=(t,i,s=!0)=>{let a=i$(t),r=Ele('div','sub',i.id),d='<h6>';i.get('game').forEach((e,t)=>{t&&(d+=' + '),d+=`<span>${e[0]}</span>`}),d+=`</h6><span>${FASF.Time.fMin(i.get('est'))}</span><span>${i.get('cat')}</span><span>${n[i.get('type')]}</span><span>by</span>`,i.get('run').forEach((e,t)=>{t&&(d+=',');let n=e.get('link');d+=`<a${n?" href='"+n+"'":''} target='_blank'>${e.get('name')||e.getUsername()}</a>`}),r.innerHTML=d;let o=a.firstChild.next();if(s){let e=h(o,i.get('status'));r.firstChild.style.background=e,r.style.background=e+'2'}if(a.append(r),FASF.user&&t===FASF.user.id&&ACTIVE){let t=i.get('status')||0;if(0===t||2===t){let e=Ele('div','delete');e.onclick=()=>{confirm(_t('确认删除此报名项目？'))&&i.destroy().then(e=>{r.remove(),h(o,t,1)},e=>FASF.UI.msg('删除失败',1))},r.firstChild.append(e)}if(0===t){let t=Ele('div','sub-e').text(_t('修改'));t.onclick=()=>{e.form(c[0],c[1],c[2],c[3],e.Btn('保存'),i,c[6]),l.show()},r.append(t)}}return r},g=[];FASF.user&&(s.append(b(FASF.user)),g.push({user:FASF.user,sub:[]})),FASF.DB.Query('Sub').include('run').descending('createdAt').find().then(e=>{let t=[1,0];e.forEach(e=>{let n=g.find(t=>t.user.id===e.get('run')[0].id);if(n)n.sub.push(e);else{n={user:e.get('run')[0],sub:[e]},g.push(n);let i=b(n.user);t[0]<t[1]?(s.append(i),n.LR=0):(a.append(i),n.LR=1),t[n.LR]++}f(n.user.id,e),t[n.LR]++})});let m=Ele('div','sp-t'),F=Ele('div','sp-c');Promise.all([FASF.DB.Query('Data').get('62d8b7af0f614f65b4ad5ab7'),FASF.DB.Query('SP').include('r').ascending('createdAt').find()]).then(([t,n])=>{let i=t.get('game');i.forEach((e,t)=>{let n=_lang?e.zh:e.en,i=Ele('div','box').text(_t(n.slice(0,n.indexOf('(')-1))),s=Ele('div','box');s.innerHTML=`<h4>${n}</h4>`,p(s),i.con=s,i.onclick=function(){let e=i$('nowsp');e&&(e.id=''),e=i$('nowspc'),e&&(e.id=''),this.id='nowsp',this.con.id='nowspc'},m.append(i),F.append(s),0===t&&i.click(),e.hide&&i.hide(),e.list=e.group.map(()=>[])});let s=F.children,a=c$('status',F),r=e.Date('空闲时间/希望参与的时间',u),d=l.firstChild,o=e.Btn('提交');n.forEach(e=>{let t=e.get('i'),n=e.get('g')||0;i[t]&&i[t].list[n]&&i[t].list[n].push(e)}),i.forEach((t,n)=>{t.list.forEach(e=>{e.s=a[n],e.u=h}),t.group.forEach((i,a)=>{i.includes('|')?i=i.split('|')[1-_lang]:_lang||(i='参与玩家'===i?'Players':i.replace('人)',' players)')),s[n].append(e.Join(i,t.list[a],[d,{i:n,g:a,r:FASF.user,t:r},{},0,o,'SP']))})})}),i[2].append(m,F)});