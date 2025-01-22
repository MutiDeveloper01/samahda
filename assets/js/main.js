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