document.addEventListener('DOMContentLoaded', function () {
    const languages = document.getElementById('languages');
    const languageItems = document.querySelectorAll('.language');
    const mainContent = document.getElementById('main');

    let currentIndex = 0;

    function setActive(index) {
      languageItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
    }

    function changeLanguage() {
      const currentLanguage = languageItems[currentIndex].getAttribute('data-lang');

      setTimeout(() => {
        languageItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % languageItems.length;
        setActive(currentIndex);
      }, 1000);
    }

    setActive(currentIndex);

    setInterval(changeLanguage, 2000);

    setTimeout(() => {
      document.querySelector('.loader').style.display = 'none';
      mainContent.style.display = 'block';
    }, 10000); 
  });