'use strict';

const form = document.querySelector('form');
const submitBtn = document.querySelector('trial')
const password = document.querySelector('password');

    form.addEventListener('submit', (e) => {

        const inputs = document.querySelectorAll('input');
  
        inputs.forEach(input => {
          input.nextElementSibling.innerHTML = '';
          const val = input.value.trim();
  
          if (val === '') {
            setError(input, `this field cannot be empty`);
            input.style.outline = '2px solid var(--Red)';
            input.style.color = 'var(--Red)';
  
          } else if (input.id === 'email' && !isEmail(val)) {
            setError(input, 'Looks like this is not an email');
            input.style.outline = '2px solid var(--Red)';
            input.style.color = 'var(--Red)';
          } 

          e.preventDefault();
          e.target.blur();
          
        });
    })
    
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.target.blur();
    });

    function setError(input, message) {
      input.nextElementSibling.insertAdjacentHTML('beforeend', errorMarkup(message));
    }

    function errorMarkup(message) {
      return `
        <div class="error-text">${message}</div>`;
    }

    function isEmail(email) {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(String(email).toLowerCase());
    }
