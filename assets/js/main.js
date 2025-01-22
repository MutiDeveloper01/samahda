// گرفتن همه افراد 
const teachersItems = document.querySelectorAll('.teachers-container-down-item'); 
// گرفتن دکمه های قبل و بعد 
const nextBtn = document.getElementById('teacherSlideNext');
const prevBtn = document.getElementById('teacherSlidePrev');
// ایندکس فعلی 
let currentIndex = 0 ; 


function updataTeachersItems(){
    teachersItems.forEach((items , index) => {
        items.classList.remove('active');
        if(index === currentIndex){
            items.classList.add('active');
        }
    });
}


function moveNext(){
    currentIndex = (currentIndex + 1) % teachersItems.length;
    updataTeachersItems();
}

function movePrev(){
    currentIndex = (currentIndex - 1 + teachersItems.length) % teachersItems.length;
    updataTeachersItems();
}

nextBtn.addEventListener('click' , moveNext);
prevBtn.addEventListener('click'  , movePrev);

updataTeachersItems()




let openToggle  = document.querySelector('.open-toggle');
let closeToggle = document.getElementById('closetoggle');
let slideToggle = document.getElementById('slideToggle');

openToggle.addEventListener('click', () =>{
    slideToggle.style.transform = 'translateX(0%)';
    slideToggle.style.display = 'block';
});
closeToggle.addEventListener('click' , () => {
    slideToggle.style.transform = 'translateX(500%)';
    slideToggle.style.display = 'none';
});