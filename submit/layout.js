_m({个人信息:'Profile',普通项目:'Submissions',特殊项目:'Special events'}),_lang||(document.title='FASF2022 Submissions');{let i=i$('tab'),n=i$('wrap');i.innerHTML=`<div>${_t('个人信息')}</div><div>${_t('普通项目')}</div><div>${_t('特殊项目')}</div>`;let t=[],e=i.children;for(let i=0;i<e.length;i++){let o=Ele('div','con');t.push(o),n.append(o),e[i].con=o,e[i].onclick=function(){let i=i$('nowtab');i&&(i.id=''),i=i$('nowcon'),i&&(i.id=''),this.id='nowtab',this.con.id='nowcon'}}e[0].click()}