// Полифилл для requestAnimationFrame
window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000/60)
};

// Плавная анимация прокрутки
let smoothScroll = function(target) {

  let scrollContainer = target;
  do {
    scrollContainer = scrollContainer.parentNode;
    if (!scrollContainer) return;
  } while (scrollContainer.scrollHeight === scrollContainer.clientHeight);

  let start = scrollContainer.scrollTop;
  let end = target.offsetTop;
  let change = end - start;
  let startTime = performance.now();

  const animateScroll = function() {
    let currentTime = performance.now();
    let time = Math.min(1, ((currentTime - startTime) / 700));
    let easedTime = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; 
    scrollContainer.scrollTop = parseInt(easedTime * change + start);
    if (time < 1) requestAnimationFrame(animateScroll);
  }
  
  requestAnimationFrame(animateScroll);

}

// Получаем все ссылки-якоря 
let anchorLinks = document.querySelectorAll('a[href^="#"]');

// Навешиваем обработчик событий на каждую ссылку 
for (let item of anchorLinks) {
  item.addEventListener('click', function(e) {
    
    // Получаем элемент который будем скроллить 
    let targetId = this.getAttribute('href');
    let target = document.querySelector(targetId);
    
    // Запускаем плавную прокрутку
    e.preventDefault();
    smoothScroll(target);

  });
}

// Динамическое переключение flex-классов при ресайзе
window.addEventListener('resize', function() {
  
  let flexItems = document.querySelectorAll('.flex');

  for (let item of flexItems) {
    let width = window.innerWidth;
    item.classList.remove('flex-sm','flex-md','flex-lg');
    
    if (width < 768) {
      item.classList.add(' flex-sm');
    } else if (width >= 768 && width < 992) {
      item.classList.add(' flex-md');
    } else {
      item.classList.add(' flex-lg');
    }
  }
  
});

