window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 800);
});

const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
} else {
    html.classList.remove('dark');
}

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    if (html.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
});

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-md');
        header.classList.remove('py-4');
        header.classList.add('py-2');
    } else {
        header.classList.remove('shadow-md');
        header.classList.remove('py-2');
        header.classList.add('py-4');
    }
});

const carouselItems = document.querySelectorAll('.carousel-item');
const carouselDots = document.querySelectorAll('.carousel-dot');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentSlide = 0;
let slideInterval;

function initCarousel() {
    showSlide(currentSlide);
    startSlideInterval();
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetSlideInterval();
    });
    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetSlideInterval();
    });
    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetSlideInterval();
        });
    });
}

function showSlide(index) {
    carouselItems.forEach(item => item.classList.remove('active'));
    carouselDots.forEach(dot => dot.classList.remove('active'));
    if (index >= carouselItems.length) currentSlide = 0;
    else if (index < 0) currentSlide = carouselItems.length - 1;
    else currentSlide = index;
    carouselItems[currentSlide].classList.add('active');
    carouselDots[currentSlide].classList.add('active');
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

document.addEventListener('DOMContentLoaded', initCarousel);

document.querySelectorAll('.btn-ripple').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const x = e.clientX - e.target.getBoundingClientRect().left;
        const y = e.clientY - e.target.getBoundingClientRect().top;
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = Math.max(this.offsetWidth, this.offsetHeight) + 'px';
        ripple.style.left = x - (parseInt(ripple.style.width) / 2) + 'px';
        ripple.style.top = y - (parseInt(ripple.style.height) / 2) + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.backgroundColor = 'rgba(255,255,255,0.3)';
        ripple.style.pointerEvents = 'none';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.zIndex = '10';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

const announcementPopup = document.getElementById('announcementPopup');
const announcementClose = document.getElementById('announcementClose');
const announcementBody = document.getElementById('announcementBody');

announcementClose.addEventListener('click', () => {
    announcementPopup.classList.remove('active');
});

announcementPopup.addEventListener('click', (e) => {
    if (e.target === announcementPopup) {
        announcementPopup.classList.remove('active');
    }
});

const qrPopup = document.getElementById('qrPopup');
setTimeout(() => {
    qrPopup.classList.remove('translate-x-full');
}, 1000);
window.addEventListener('scroll', () => {
    qrPopup.classList.add('translate-x-full');
});
qrPopup.addEventListener('click', (e) => {
    if (e.target === qrPopup) {
        qrPopup.classList.add('translate-x-full');
    }
});

const announcementContent = `
<p>1、公会加入制度改为邀请制</p>
<p>2、MOV投票组正式成立，网站正在同步成员信息</p>
<p>3、咨询问题请向movers@iw46.top扔邮件。我们会尽快答复你</p>
<p>——MOV内阁 2026.08.04</p>
`;
announcementBody.innerHTML = announcementContent;
setTimeout(() => {
    announcementPopup.classList.add('active');
}, 1000);

const memberPopup = document.getElementById('memberPopup');
const openMemberBtn = document.getElementById('openMemberPopupBtn');
const closeMemberBtn = document.getElementById('memberCloseBtn');
const memberWrap = document.getElementById('memberBoxWrap');

const memberList = [
    {avatar:"imgs/avatars/h1mo1.jpg",name:"h1mo1",job:"大总管"},
    {avatar:"imgs/avatars/lerv.jpg",name:"Lerv",job:"投票组"},
    {avatar:"imgs/avatars/frozenx.jpg",name:"frozenx",job:"成员"},
    {avatar:"imgs/avatars/duolian.jpg",name:"duolian",job:"雄鹰"},
    {avatar:"imgs/avatars/bintang.jpg",name:"resolev",job:"投票组"},
    {avatar:"imgs/avatars/nmrn.jpg",name:"_NMRN_",job:"古墓丽影"},
    {avatar:"imgs/avatars/xy.jpg",name:"Xyiw46_",job:"技术支持"},
    {avatar:"https://ts4.tc.mm.bing.net/th/id/OIP-C.LGdyhHmVwaebSiVobGmCAQHaJX?rs=1&pid=ImgDetMain",name:"待补充1",job:"组员"},
    {avatar:"imgs/avatars/default.jpg",name:"待补充2",job:"组员"},
    {avatar:"imgs/avatars/default.jpg",name:"待补充3",job:"组员"},
    {avatar:"imgs/avatars/default.jpg",name:"待补充4",job:"组员"},
    {avatar:"imgs/avatars/default.jpg",name:"待补充5",job:"组员"},
    {avatar:"imgs/avatars/default.jpg",name:"待补充6",job:"组员"},
    {avatar:"imgs/avatars/default.jpg",name:"待补充7",job:"组员"},
    {avatar:"imgs/avatars/default.jpg",name:"待补充8",job:"组员"},
];

function renderMembers(){
    memberWrap.innerHTML = "";
    memberList.forEach(item=>{
        const card = document.createElement("div");
        card.className = "bg-white/90 dark:bg-gray-800/90 rounded-xl overflow-hidden shadow-md member-card-hover theme-transition";
        card.innerHTML = `
            <div class="h-36 overflow-hidden">
                <img src="${item.avatar}" alt="${item.name}" class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700">
            </div>
            <div class="p-3 text-center">
                <h3 class="text-base font-semibold mb-1">${item.name}</h3>
                <p class="text-primary text-xs">${item.job}</p>
            </div>
        `;
        memberWrap.appendChild(card);
    })
}
renderMembers();

openMemberBtn.addEventListener("click",()=>{
    memberPopup.classList.add("active");
})
closeMemberBtn.addEventListener("click",()=>{
    memberPopup.classList.remove("active");
})
memberPopup.addEventListener("click",(e)=>{
    if(e.target === memberPopup) memberPopup.classList.remove("active");
})
