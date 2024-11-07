function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
  
    document.cookie = `firstname=${firstname}; path=/;`;
    document.cookie = `email=${email}; path=/;`;
  
    alert('Cookies set successfully!');
  }
  
  function showCookies() {
    const cookies = document.cookie.split('; ').map(cookie => cookie.trim()).join('; ');
    const cookieDisplay = document.getElementById('cookieDisplay');
    const cookieParagraph = document.createElement('p');
  
    cookieParagraph.innerHTML = `Cookies: ${cookies}`;
    cookieDisplay.innerHTML = ''; // Clear previous content
    cookieDisplay.appendChild(cookieParagraph);
  }
  
  window.setCookies = setCookies;
  window.showCookies = showCookies;
  