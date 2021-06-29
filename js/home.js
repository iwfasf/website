doc.head.innerHTML+="<svg version='1.1' xmlns='http://www.w3.org/2000/svg' style='display:none'><symbol id='-date' viewBox='0 0 32 32'><path d='M23.8 5.1h1.6c1.7 0 3.1 1.4 3.1 3.1v18.7c0 1.7-1.4 3.1-3.1 3.1H6.7c-1.7 0-3.1-1.4-3.1-3.1V8.2c0-1.7 1.4-3.1 3.1-3.1h1.6V2h3.1v3.1h9.3V2h3.1v3.1zM6.7 12.9v14h18.7v-14H6.7zM19.1 16h3.1v3.1h-3.1V16zm-4.7 0h3.1v3.1h-3.1V16zm4.7 4.7h3.1v3.1h-3.1v-3.1zm-4.7 0h3.1v3.1h-3.1v-3.1zm-4.6 0h3.1v3.1H9.8v-3.1z'/></symbol><symbol id='-run' viewBox='0 0 32 32'><path d='M27.5 3.5h-23c-.6 0-1 .4-1 1v23c0 .6.4 1 1 1h23c.6 0 1-.4 1-1v-23c0-.6-.4-1-1-1zm-16 19.8c0 .1-.1.3-.3.3H8.8c-.1 0-.3-.1-.3-.3V8.8c0-.1.1-.3.3-.3h2.5c.1 0 .3.1.3.3v14.5zm6-8.8c0 .1-.1.3-.3.3h-2.5c-.1 0-.3-.1-.3-.3V8.8c0-.1.1-.3.3-.3h2.5c.1 0 .3.1.3.3v5.7zm6 2.3c0 .1-.1.3-.3.3h-2.5c-.1 0-.3-.1-.3-.3v-8c0-.1.1-.3.3-.3h2.5c.1 0 .3.1.3.3v8z'/></symbol><symbol id='-user' viewBox='0 0 32 32'><path d='M15.3 17.3c2-1.3 3.5-3.5 3.5-6 0-3.9-3.2-7-7.1-7s-7.3 3.1-7.3 7c0 2.6 1.5 4.8 3.5 6-3.8 1.5-6.4 4.9-6.4 9.2 0 .7.6 1.2 1.2 1.2s1.2-.6 1.2-1.2c0-4.2 3.5-7.6 7.7-7.6s7.7 3.3 7.7 7.6c0 .7.6 1.2 1.2 1.2s1.2-.6 1.2-1.2c0-4.1-2.8-7.7-6.4-9.2zM11.5 16c-2.6 0-4.7-2-4.7-4.7S9 6.7 11.5 6.7c2.6 0 4.7 2 4.7 4.7S14.1 16 11.5 16zm14.4 3.2c1.5-1.2 2.3-2.9 2.3-4.7 0-3.2-2.6-5.8-5.8-5.8-.6 0-1.2.1-1.9.4h-.1s-.1.1-.3.1c-.4.3-.7.7-.7 1.2 0 .7.6 1.3 1.3 1.3.1 0 .3-.1.4-.1.3-.1.7-.1 1-.1 1.9 0 3.3 1.5 3.3 3.2 0 1.9-1.5 3.3-3.2 3.3-.9 0-1.5.6-1.5 1.5 0 .7.7 1.5 1.5 1.5h.1c3.1 0 5.5 2.5 5.5 5.5 0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3c.1-3.2-1.6-6.1-4.5-7.3z'/></symbol></svg>",submit=Ele('a',0,'topinf'),submit.innerHTML=`<span>${_lang?'报名进行中 >':'Submissions are now open >'}</span>`,submit.href='/2021/',i$('head').append(submit),i$('desc').text(_lang?'Fangame Summer Feast，简称FASF大会，是国内 IWer 一年一度的夏日盛宴，为喜爱 I Wanna 的玩家和观众们提供了一个大型的互动平台。':'FASF is the short form of Fangame Summer Feast, which provides a platform for fangamers (mostly).\nWe also absolutely love seeing tons of other communities showcasing their favorite games.');[{year:2020,date:'8.15~8.16 & 8.21~8.23',run:53,runner:58},{year:2019,date:'7.27~7.28 & 8.2~8.4',run:42,runner:49},{year:2018,date:'7.28~7.29 & 8.3~8.5',run:58,runner:56},{year:2017,date:'7.28~7.30',run:39,runner:31}].forEach(e=>{let a=Ele('div','box event select');a.style.backgroundImage=`url(//cdn.jsdelivr.net/gh/iwfasf/website@g4h07/${location.pathname.slice(1)}img/${e.year}.png)`,a.append(Ele('h3').text('Fangame Summer Feast '+e.year),Span('{date}'+e.date),Span(`{run}${e.run} runs`),Span(`{user}${e.runner} runners`)),a.onclick=()=>location.pathname=e.year+'/',i$('wrap').append(a)});