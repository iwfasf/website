submit=Ele('a',0,'topinf'),submit.innerHTML=`<span>${_lang?'报名进行中 >':'Submissions are now open >'}</span>`,submit.href='/2021/',i$('head').append(submit),i$('desc').text(_lang?'Fangame Summer Feast，简称FASF大会，是国内 IWer 一年一度的夏日盛宴，为喜爱 I Wanna 的玩家和观众们提供了一个大型的互动平台。':'FASF is the short form of Fangame Summer Feast, which provides a platform for fangamers (mostly).\nWe also absolutely love seeing tons of other communities showcasing their favorite games.');[{year:2020,date:'8.15~8.16 & 8.21~8.23',run:53,runner:58},{year:2019,date:'7.27~7.28 & 8.2~8.4',run:42,runner:49},{year:2018,date:'7.28~7.29 & 8.3~8.5',run:58,runner:56},{year:2017,date:'7.28~7.30',run:39,runner:31}].forEach(e=>{let a=Ele('div','box event select');a.style.backgroundImage=`url(//cdn.jsdelivr.net/gh/iwfasf/website@g2jcz/${location.pathname.slice(1)}img/${e.year}.png)`,a.append(Ele('h3').text('Fangame Summer Feast '+e.year),Span('{date}'+e.date),Span(`{run}${e.run} runs`),Span(`{user}${e.runner} runners`)),a.onclick=()=>location.pathname=e.year+'/',i$('wrap').append(a)});