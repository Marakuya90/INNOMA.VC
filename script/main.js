const module = document.querySelector('.module');
let module_btn = document.querySelectorAll('.module_btn');

module_btn.forEach(el=>addEventListener('click', expandmodule));

function expandmodule(e) {
    e.stopPropagation();
    let div = document.createElement('div');
    div.innerHTML =  '<ul><li>Тема 1. Куда движутся IT тренды? Аналитика Gartner, разбор отчетов консалтинговых компаний<li/><li>Тема 2. Рынки Ближнего Востока, Азии, Латинской Америки<li/><li>Тема 3. Что такое внутренние и внешние инновации? Как искать инновационные идеи?<li/><li>9 видео роликов, вебинар с приглашенным экспертом<li/></ul>';
    div.classList.add('module_past');
    console.log(e.target.parentNode);
    e.target.parentNode.style.margin = '0px';
    e.target.parentNode.style.border = '1px solid #E9E9E9';


    document.querySelector('.module').after(div);
 }