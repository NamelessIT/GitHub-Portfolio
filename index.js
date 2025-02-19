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


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content");
    const navLinks = document.querySelectorAll(".navigate .mark");

    function activateSection() {
        let scrollY = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                // Kích hoạt animation
                section.classList.add("active");

                // Xóa class active của tất cả link
                navLinks.forEach(link => {
                    link.style.color = "";
                    link.style.textDecoration = "";
                });

                // Đánh dấu mục đang active
                navLinks[index].style.color = "#ffcc00";
                navLinks[index].style.textDecoration = "underline";
            }
        });
    }

    window.addEventListener("scroll", activateSection);
    activateSection(); // Kích hoạt khi tải trang
});


