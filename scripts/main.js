
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    return 0;
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
}

setCookie('theme', 'black', 10); // I tried -\(<>_<>)/-



const switchBox = document.querySelector('#flexSwitchCheckDefault');
const logo = document.querySelector('#logo');
const submitForm = document.querySelector('#submit-btn');

switchBox.addEventListener('change', function(event) {
    const root = document.documentElement;

    if (event.target.checked) {
        root.style.setProperty('--color-text', '#000000');
        root.style.setProperty('--color-bg-primary', '#f8f8f8');
        root.style.setProperty('--color-bg-secondary', '#e6e6e6');
        logo.setAttribute('src', 'images/logo/logo-black.png');
        submitForm.classList.remove('btn-outline-light');
        submitForm.classList.add('btn-outline-dark');
    } else {
        root.style.setProperty('--color-text', '#ffffff');
        root.style.setProperty('--color-bg-primary', '#202020');
        root.style.setProperty('--color-bg-secondary', '#292929');
        logo.setAttribute('src', 'images/logo/logo.png');
        submitForm.classList.add('btn-outline-light');
        submitForm.classList.remove('btn-outline-dark');
    }
});