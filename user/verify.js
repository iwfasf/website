_m({邮箱验证失败:'Verification failed',邮箱验证成功:'Your email has been successfully verified',服务器错误:'Server error'});{let e=location.search.match(/token=(\w*)/);e&&(e=e[1]),e&&$.jsonp({url:'https://api.iwfasf.com/1.1/verifyEmail/'+e,callbackParameter:'callback',cache:!1,success(e){e.error?$('#tip').html(_t('邮箱验证失败')):($('#tip').html(_t('邮箱验证成功')),setTimeout(()=>location.pathname='/login',5e3))},error(){$('#tip').html(_t('服务器错误'))}})}