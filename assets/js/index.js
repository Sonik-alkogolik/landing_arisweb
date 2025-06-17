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

   
  });

  document.addEventListener("DOMContentLoaded", function () {
    const logistBtn = document.querySelector('.logist_btn_dawn_wrapp');
    const driverBtn = document.querySelector('.driver_btn_dawn_wrapp');
    const buyerBtn = document.querySelector('.personal_account_driver'); 
  
    if (logistBtn) {
      logistBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('.personal_account_logist_column_block');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  
    if (driverBtn) {
      driverBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('.personal_account_driver_wrapp');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  
    if (buyerBtn) {
      buyerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector('.personal_account_buyer_wrapp');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
   