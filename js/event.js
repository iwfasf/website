{let a='Blind Race - ';_m({'介绍':'Information','时间表':'Schedule','作品':'Games','发表评论':'Comment','作者':'Creator(s)','视频':'Videos','下载':'Downloads','下载暂无':'Download is not available','初见综合竞技':a+'Adventure','初见跳刺竞技':a+'Needle','初见耐久竞技':a+'Avoidance','初见坑向竞技':a+'Trap','初见合作竞技':a+'Co-operation','初见STG竞技':a+'STG','初见随机竞技':a+'Lucky'});var tabs=[],cons=[];[_t('介绍'),_t('时间表'),_t('作品')].forEach((a,e)=>{let i=Ele('div','tab').text(a),t=Ele('div','con');i.i=e,i.onclick=function(){css(c$('con'),{display:''},this.i,{display:'block'});let a=i$('tab');a&&(a.id=''),this.id='tab'},tabs.push(i),cons.push(t)}),i$('wrap').append(...tabs,...cons),tabs[0].click(),window.data||(data={year:0|location.pathname.slice(1,5),intro:'',introE:''});let e=Ele('div','box page','intro');e.innerHTML=`<h2>Fangame Summer Feast ${data.year}</h2>`+((_lang?data.intro:data.introE)||''),cons[0].append(e,Ele('br'));let i=Ele('div','box page','rv-box');i.innerHTML=`<textarea></textarea><div id='review'>${_t('发表评论')}</div><div id='rv-mb'></div><div class='rv-c'></div><div class='rv-c' style='margin-left:24px'></div>`,cons[0].append(i);var bg=Ele('div','game-b');bg.hide(),bg.onclick=function(){this.hide(),css(c$('game-d'),{display:'none'})},doc.body.append(bg)}