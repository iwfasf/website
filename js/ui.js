_m({保存成功:'Saved successfully.',保存失败:'Save failed.',已保存:'Already saved.',请输入加入选手的用户名:'Please input a username to add a runner:',未查询到此用户:'User does not exist.',查询用户失败:'Failed to fetch user data.',当前时区:'All times are converted to your timezone. Detected timezone',鼠标拖动可多选:'Drag to select multiple period'}),FASF.UI={msgC:doc.body.appendChild(Ele('div',0,'msgC')),msg(e,t=0){let l=(0==t?'✔ ':1==t?'✘ ':'')+_t(e),a=Ele('p','msg').text(l);switch(t){case 1:css(a,{color:'#e33',borderColor:'#f55'});break;case 2:css(a,{color:'#49e',borderColor:'#7bf'})}this.msgC.prepend(a),setTimeout(e=>{css(e,{transform:'none',marginBottom:'16px'})},100,a),setTimeout(e=>{e.style.opacity=0,setTimeout(e=>e.remove(),1e3,e)},2500,a)},Input(e,t,l,a){let n=Ele('div'),i=Ele(l?'textarea':'input');return e&&('\n'==e.at(-1)?n.append(Span(_t(e.slice(0,-1))),Ele('br')):n.append(Span(_t(e)))),a&&(i.style.width=a+'px'),t&&(i.placeholder=_t(t)),n._=i,n.append(i),n},Inputs(e,t,l){let a=Ele('div');a._={get value(){let e=[],l=t$('input',a);if(Array.isArray(t))for(let a=0,n=t.length;a<l.length;a+=n){let t=[];for(let e=0;e<n;e++)t.push(l[a+e].value);e.push(t)}else for(let t=0;t<l.length;t++)e.push(l[t].value);return e},set value(e){let t=t$('input',a);for(let e=t.length;e--;)t[e].remove();t=c$('delete',a);for(let e=t.length;e--;)t[e].remove();e.forEach(e=>a.add(e))}},a.add=function(e){if(Array.isArray(t))t.forEach((t,a)=>{let n=Ele('input','inputs');n.style.width=l[a]+'px',n.placeholder=_t(t),e&&(n.value=e[a]),this.lastChild.before(n)});else{let a=Ele('input','inputs');l&&(a.style.width=l+'px'),t&&(a.placeholder=_t(t)),e&&(a.value=e),this.lastChild.before(a)}let a=Ele('div','delete');a.onclick=function(){let e=Array.isArray(t)?t.length:1;if(!(t$('input',this.parentNode).length<=e)){for(;e--;)this.prev().remove();this.remove()}},this.lastChild.before(a)},'\n'==e.at(-1)?a.append(Span(_t(e.slice(0,-1))),Ele('br')):a.append(Span(_t(e)));let n=Ele('div','add');return n.onclick=()=>a.add(),a.append(n),a.add(),a},Users(e){let t=Ele('div');t._={get value(){return[...c$('inputs',t)].map(e=>e.value)},set value(e){for(let e of c$('inputs',t))e.remove();for(let e of c$('delete',t))e.remove();e.forEach(e=>t.add(e,e.id!==FASF.user.id))}},t.add=function(e,l=!0){if(t._.value.some(t=>t.id===e.id))return;let a=Ele('span','inputs').text(e.get('name')||e.getUsername());if(a.value=e,this.lastChild.before(a),l){let e=Ele('div','delete');e.onclick=function(){this.prev().remove(),this.remove()},this.lastChild.before(e)}};let l=Ele('div','add');return l.onclick=()=>{let e=prompt(_t('请输入加入选手的用户名'));e&&e.trim()&&AV.Query.or(FASF.DB.Query('_User').equalTo('username',e),FASF.DB.Query('_User').equalTo('name',e)).select(['username','name']).first().then(e=>{e?t.add(e):alert(_t('未查询到此用户'))},e=>alert(_t('查询用户失败')))},t.append(Span(_t(e)),l),t.add(FASF.user,!1),t},Join(e,t,l){let a=Ele('div');a.add=function(e,l,n){let i=Ele('span','inputs').text(e.get('name')||e.getUsername());if(i.style.borderColor=n,this.lastChild.before(i),ACTIVE&&l){let e=Ele('div','delete');e.onclick=function(){let e=a._.get('s');a._.destroy().then(()=>{FASF.UI.msg('保存成功'),this.parentNode.lastChild.show(),this.prev().remove(),this.remove(),t.u(t.s,e,1)},e=>FASF.UI.msg('保存失败',1))},this.lastChild.before(e)}};let n=Ele('div','add');n.onclick=()=>{this.form(...l,e=>{a._=e,a.add(FASF.user,!0,t.u(t.s)),n.hide()}),l[0].parentNode.show()},a.append(Span(_t(e)),Ele('br'),n);let i=!1;return t.forEach(e=>{let l=e.get('r'),n=FASF.user&&l.id===FASF.user.id;n&&(a._=e,i=n),a.add(l,n,t.u(t.s,e.get('s')))}),!i&&FASF.user&&ACTIVE||n.hide(),a},Select(e,...t){let l=Ele('div'),a=Ele('div','option');l._={get value(){let e=c$('on',a)[0];return e?e.value:0},set value(e){let t=c$('on',a)[0];t&&t.rmCls('on'),a.children[e].addCls('on')}};for(let e=0;e<t.length;e++){let n=Span(_t(t[e]));n.value=e,a.append(n),n.onclick=function(){let e=c$('on',this.parentNode)[0];e&&e.rmCls('on'),this.addCls('on'),l.callback&&l.callback(this.value)}}return a.firstChild.click(),l.append(Span(_t(e)),a),l},Time(e){const t=FASF.Time.pad;let l=Ele('div'),a=Ele('div','time-i'),n=[Ele('input'),Ele('input'),Ele('input')];return n[0].onchange=function(){let e=Number(this.value)<<0;e>59&&(e=59),this.value=t(e)},n[2].onchange=n[1].onchange=n[0].onchange,n[2].value=n[1].value=n[0].value='00',l.style.display='inline-block',l._={get value(){let e=60*n[0].value+(n[1].value<<0)+n[2].value/100;return isNaN(e)?0:e},set value(e){n[0].value=t(e/60<<0),n[1].value=t(e%60<<0),n[2].value=t(Math.round(e%1*100))}},a.append(n[0],Span(':'),n[1],Span(':'),n[2]),l.append(Span(_t(e)),a),l},Date(e,t){const l=FASF.Time;let a,n=Ele('div'),i=Ele('div','avail'),r=new Date(0),s=0,o=null,u=1440;t.forEach(e=>{let t=new Date(e),l=60*t.getHours()+t.getMinutes();l<u&&(u=l)}),t.forEach((e,t)=>{let p=new Date(e);for(p.getDate()!==r.getDate()&&(s++,r=new Date(l.fDate(p)+' 00:00:00'),o=Ele('div','avail-day'),o.innerHTML=`<h5>Day ${s}<p>${p.getMonth()+1}.${p.getDate()} ${l.week[p.getDay()]}</p></h5>`,i.append(o),a=u);p.getHours()>a/60<<0;){d=new Date(p.getFullYear(),p.getMonth(),p.getDate(),a/60<<0,a%60);let e=Ele('div','avail-t d');o.append(e),a+=60}let c=Ele('div','avail-t').text(l.fTime(p)+'~'+l.fTime(new Date(p.getTime()+36e5)));c.t=p.getTime()/1e3,o.append(c),c.onmousedown=function(e){e.preventDefault(),1===e.buttons&&this.hasCls('c')||2===e.buttons?(n.addMode=0,this.rmCls('c')):(n.addMode=1,this.addCls('c'))},c.onmouseover=function(e){e.preventDefault(),1!==e.buttons&&2!==e.buttons||(n.addMode?this.addCls('c'):this.rmCls('c'))},a+=60});let p=(new Date).getTimezoneOffset()/-60,c=Ele('i');c.innerText=_t('鼠标拖动可多选'),css(c,{fontSize:'14px',color:'#456'}),n.append(Span(_t(e)+`<i style='margin-left:8px;font-size:14px;color:#456'>${_t('当前时区')}: GMT${p>0?'+'+p:p}</i>`),Ele('br'),c,i),i.oncontextmenu=e=>e.preventDefault();let v=c$('avail-day',i),h=0;for(let e of v)h<e.children.length&&(h=e.children.length);return css(v,{width:`calc(${100/s}% - 10px)`,height:28*(h-1)+'px'}),n._={get value(){return Array.from(c$('c',n),e=>e.t)},set value(e){for(let t of c$('avail-t',n))e.includes(t.t)?t.addCls('c'):t.rmCls('c')}},n},Btn(e,t,l){let a,n=Ele('div'),i=Ele('div','btn').text(_t(e));return n.style.textAlign='center',n._=i,n.append(i),t&&(a=Ele('div','btn').text(_t(t)),n.append(a)),l&&(i.addEventListener('click',()=>l(0,n)),a&&a.addEventListener('click',()=>l(1,n))),n},form(e,t,l,a,n,i,r){e.innerHTML='',e.scrollTop=0,e._ele={},e._db='object'==typeof i?i:FASF.DB.Object(i);for(let a in t){let n;if(Array.isArray(t[a]))n=this[t[a][0]](...t[a].slice(1));else{if(!t[a].tagName)continue;n=t[a]}if(l[a]&&(n.callback=l[a]),e._ele[a]=n,e.append(n),e._db){let t=e._db.get(a);void 0!==t&&(n._.value=t)}}e.append(this.save(n,null,()=>{let l=e._db;if(a)for(let t in a){let l=e._ele[t];if(!a[t](l._.value))return i$('sub-a').scrollTo({top:l.offsetTop-100,behavior:'smooth'}),l.style.background='#fee',void setTimeout(e=>e.style.background='',2e3,l)}for(let a in t){let n=e._ele[a]?e._ele[a]._.value:t[a];JSON.stringify(n)!==JSON.stringify(l.get(a))&&l.set(a,n)}return l},r))},db(e,t,l,a=null,n=!1){let i=e._,r=t.get(l);return void 0!==r&&(i.value=r),i.onchange=()=>{let e=a?a(i.value):i.value;void 0!==e&&t.set(l,e),n&&t.save().then(e=>i.value=t.get(l))},e},save:(e,t,l,a)=>(e._.onclick=function(){l&&(t=l()),t&&(t.dirty()?(this.addCls('d'),t.save().then(e=>{FASF.UI.msg('保存成功'),this.rmCls('d'),a&&a(e),i$('sub').hide()},e=>{FASF.UI.msg('保存失败',1),this.rmCls('d')})):(FASF.UI.msg('已保存',2),i$('sub').hide()))},e)};