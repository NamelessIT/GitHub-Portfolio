var btn_more=document.querySelector('.more');
var content_more=document.querySelector('.detail_cert');
btn_more.addEventListener('click',function(){
    if(content_more.style.display=='block'){
        content_more.classList.remove('animation_slide_up');
        content_more.classList.add('animation_fade_out');
        setTimeout(() => {
            content_more.style.display='none'
        }, 1900);
        
    }else{
        content_more.classList.add('animation_slide_up');
        content_more.classList.remove('animation_fade_out');
        content_more.style.display='block';
    }
});

