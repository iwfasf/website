_m({保存成功:'Saved successfully.',保存失败:'Save failed.',已保存:'Already saved.',请输入加入选手的用户名:'Please input a username to add a runner:',未查询到此用户:'User does not exist.',查询用户失败:'Failed to fetch user data.',当前时区:'All times are converted to your timezone. Detected timezone'}),FASF.UI={msgC:doc.body.appendChild(Ele('div',0,'msgC')),msg(e,t=0){let l=(0==t?'✔ ':1==t?'✘ ':'')+_t(e),n=Ele('p','msg').text(l);switch(t){case 1:css(n,{color:'#e33',borderColor:'#f55'});break;case 2:css(n,{color:'#49e',borderColor:'#7bf'})}this.msgC.append(n),setTimeout(e=>{css(e,{transform:'none',marginTop:'16px'})},100,n),setTimeout(e=>{e.style.opacity=0,setTimeout(e=>e.remove(),1e3,e)},2500,n)},Input(e,t,l,n){let a=Ele('div'),i=Ele(l?'textarea':'input');return e&&('\n'==e[e.length-1]?a.append(Span(_t(e.slice(0,-1))),Ele('br')):a.append(Span(_t(e)))),n&&(i.style.width=n+'px'),t&&(i.placeholder=_t(t)),a._=i,a.append(i),a},Inputs(e,t,l){let n=Ele('div');n._={get value(){let e=[],l=t$('input',n);if(Array.isArray(t))for(let n=0,a=t.length;n<l.length;n+=a){let t=[];for(let e=0;e<a;e++)t.push(l[n+e].value);e.push(t)}else for(let t=0;t<l.length;t++)e.push(l[t].value);return e},set value(e){let t=t$('input',n);for(let e=t.length;e--;)t[e].remove();t=c$('delete',n);for(let e=t.length;e--;)t[e].remove();e.forEach(e=>n.add(e))}},n.add=function(e){if(Array.isArray(t))t.forEach((t,n)=>{let a=Ele('input','inputs');a.style.width=l[n]+'px',a.placeholder=_t(t),e&&(a.value=e[n]),this.lastChild.before(a)});else{let n=Ele('input','inputs');l&&(n.style.width=l+'px'),t&&(n.placeholder=_t(t)),e&&(n.value=e),this.lastChild.before(n)}let n=Ele('div','delete');n.onclick=function(){1!==t$('input',this.parentNode).length&&(this.prev().remove(),this.remove())},this.lastChild.before(n)},'\n'==e[e.length-1]?n.append(Span(_t(e.slice(0,-1))),Ele('br')):n.append(Span(_t(e)));let a=Ele('div','add');return a.onclick=()=>n.add(),n.append(a),n.add(),n},Users(e){let t=Ele('div');t._={get value(){return[...c$('inputs',t)].map(e=>e.value)},set value(e){for(let e of c$('inputs',t))e.remove();for(let e of c$('delete',t))e.remove();e.forEach(e=>t.add(e,e.id!==FASF.user.id))}},t.add=function(e,l=!0){if(t._.value.some(t=>t.id===e.id))return;let n=Ele('span','inputs').text(e.get('name')||e.getUsername());if(n.value=e,this.lastChild.before(n),l){let e=Ele('div','delete');e.onclick=function(){this.prev().remove(),this.remove()},this.lastChild.before(e)}};let l=Ele('div','add');return l.onclick=()=>{let e=prompt(_t('请输入加入选手的用户名'));e&&e.trim()&&AV.Query.or(FASF.DB.Query('_User').equalTo('username',e),FASF.DB.Query('_User').equalTo('name',e)).select(['username','name']).first().then(e=>{e?t.add(e):alert(_t('未查询到此用户'))},e=>alert(_t('查询用户失败')))},t.append(Span(_t(e)),l),t.add(FASF.user,!1),t},Join(e,t,l){let n=Ele('div');n.add=function(e,l,a){let i=Ele('span','inputs').text(e.get('name')||e.getUsername());if(i.style.borderColor=a,this.lastChild.before(i),l){let e=Ele('div','delete');e.onclick=function(){let e=n._.get('s');n._.destroy().then(()=>{FASF.UI.msg('保存成功'),this.parentNode.lastChild.show(),this.prev().remove(),this.remove(),t.u(t.s,e,1)},e=>FASF.UI.msg('保存失败',1))},this.lastChild.before(e)}};let a=Ele('div','add');a.onclick=()=>{this.form(...l,e=>{n._=e,n.add(FASF.user,!0,t.u(t.s)),a.hide()}),l[0].parentNode.show()},n.append(Span(_t(e)),Ele('br'),a);let i=!1;return t.forEach(e=>{let l=e.get('r'),a=FASF.user&&l.id===FASF.user.id;a&&(n._=e,i=a),n.add(l,a,t.u(t.s,e.get('s')))}),!i&&FASF.user||a.hide(),n},Select(e,...t){let l=Ele('div'),n=Ele('div','option');l._={get value(){let e=c$('on',n)[0];return e?e.value:0},set value(e){let t=c$('on',n)[0];t&&t.rmCls('on'),n.children[e].addCls('on')}};for(let e=0;e<t.length;e++){let l=Span(_t(t[e]));l.value=e,n.append(l),l.onclick=function(){let e=c$('on',this.parentNode)[0];e&&e.rmCls('on'),this.addCls('on')}}return n.firstChild.click(),l.append(Span(_t(e)),n),l},Time(e){const t=FASF.Time.pad;let l=Ele('div'),n=Ele('div','time-i'),a=[Ele('input'),Ele('input'),Ele('input')];return a[0].onchange=function(){let e=Number(this.value)<<0;e>59&&(e=59),this.value=t(e)},a[2].onchange=a[1].onchange=a[0].onchange,a[2].value=a[1].value=a[0].value='00',l.style.display='inline-block',l._={get value(){let e=60*a[0].value+(a[1].value<<0)+a[2].value/100;return isNaN(e)?0:e},set value(e){a[0].value=t(e/60<<0),a[1].value=t(e%60<<0),a[2].value=t(Math.round(e%1*100))}},n.append(a[0],Span(':'),a[1],Span(':'),a[2]),l.append(Span(_t(e)),n),l},Date(e,t){const l=FASF.Time;let n,a=Ele('div'),i=Ele('div','avail'),r=new Date(0),s=0,o=null,u=1440;t.forEach(e=>{let t=new Date(e),l=60*t.getHours()+t.getMinutes();l<u&&(u=l)}),t.forEach((e,t)=>{let p=new Date(e);for(p.getDate()!==r.getDate()&&(s++,r=new Date(l.fDate(p)+' 00:00:00'),o=Ele('div','avail-day'),o.innerHTML=`<h5>Day ${s}<p>${p.getMonth()+1}.${p.getDate()} ${l.week[p.getDay()]}</p></h5>`,i.append(o),n=u);p.getHours()>n/60<<0;){d=new Date(p.getFullYear(),p.getMonth(),p.getDate(),n/60<<0,n%60);let e=Ele('div','avail-t d');o.append(e),n+=60}let c=Ele('div','avail-t').text(l.fTime(p)+'~'+l.fTime(new Date(p.getTime()+36e5)));c.t=p.getTime()/1e3,o.append(c),c.onmousedown=function(e){e.preventDefault(),1===e.buttons&&this.hasCls('c')||2===e.buttons?(a.addMode=0,this.rmCls('c')):(a.addMode=1,this.addCls('c'))},c.onmouseover=function(e){e.preventDefault(),1!==e.buttons&&2!==e.buttons||(a.addMode?this.addCls('c'):this.rmCls('c'))},n+=60});let p=(new Date).getTimezoneOffset()/-60;a.append(Span(_t(e)+`<i style='margin-left:8px;font-size:14px;color:#456'>${_t('当前时区')}: GMT${p>0?'+'+p:p}</i>`),i),i.oncontextmenu=e=>e.preventDefault();let c=c$('avail-day',i),v=0;for(let e of c)v<e.children.length&&(v=e.children.length);return css(c,{width:`calc(${100/s}% - 10px)`,height:28*(v-1)+'px'}),a._={get value(){return Array.from(c$('c',a),e=>e.t)},set value(e){for(let t of c$('avail-t',a))e.includes(t.t)?t.addCls('c'):t.rmCls('c')}},a},Btn(e,t,l){let n,a=Ele('div'),i=Ele('div','btn').text(_t(e));return a.style.textAlign='center',a._=i,a.append(i),t&&(n=Ele('div','btn').text(_t(t)),a.append(n)),l&&(i.addEventListener('click',()=>l(0,a)),n&&n.addEventListener('click',()=>l(1,a))),a},form(e,t,l,n,a,i){e.innerHTML='',e.scrollTop=0,e._ele={},e._db='object'==typeof a?a:FASF.DB.Object(a);for(let l in t){let n;if(Array.isArray(t[l]))n=this[t[l][0]](...t[l].slice(1));else{if(!t[l].tagName)continue;n=t[l]}if(e._ele[l]=n,e.append(n),e._db){let t=e._db.get(l);void 0!==t&&(n._.value=t)}}e.append(this.save(n,null,()=>{let n=e._db;if(l)for(let t in l){let n=e._ele[t];if(!l[t](n._.value))return i$('sub-a').scrollTo({top:n.offsetTop-100,behavior:'smooth'}),n.style.background='#fee',void setTimeout(e=>e.style.background='',2e3,n)}for(let l in t){let a=e._ele[l]?e._ele[l]._.value:t[l];JSON.stringify(a)!==JSON.stringify(n.get(l))&&n.set(l,a)}return n},i))},db(e,t,l,n=null,a=!1){let i=e._,r=t.get(l);return void 0!==r&&(i.value=r),i.onchange=()=>{let e=n?n(i.value):i.value;void 0!==e&&t.set(l,e),a&&t.save().then(e=>i.value=t.get(l))},e},save:(e,t,l,n)=>(e._.onclick=function(){l&&(t=l()),t&&(t.dirty()?(this.addCls('d'),t.save().then(e=>{FASF.UI.msg('保存成功'),this.rmCls('d'),n&&n(e)},e=>{FASF.UI.msg('保存失败',1),this.rmCls('d')})):FASF.UI.msg('已保存',2))},e)};