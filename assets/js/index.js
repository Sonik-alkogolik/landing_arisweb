document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    burger.addEventListener('click', function () {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });


    const select = document.getElementById('roleSelect');
    const trigger = document.getElementById('selectedRole');
    const options = document.querySelectorAll('.custom-option');
    const roleInput = document.getElementById('roleInput');
  
    select.addEventListener('click', () => {
      select.classList.toggle('open');
    });
  
    options.forEach(option => {
      option.addEventListener('click', () => {
        trigger.textContent = option.textContent;
        roleInput.value = option.dataset.value;
        select.classList.remove('open');
      });
    });
  
    // Закрытие при клике вне
    document.addEventListener('click', function(event) {
      if (!select.contains(event.target)) {
        select.classList.remove('open');
      }
    });


      const bodyChildren = document.body.children;
      
     
      const elementsToRemove = Array.from(bodyChildren).slice(7, 11);
      
      // Удаляем все найденные элементы
      elementsToRemove.forEach(element => {
          if (element.tagName === 'SECTION') {
              element.remove();
          }
      });

  });

 