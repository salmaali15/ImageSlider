const CookieLib = {
  setCookie: function (name, value) {
      document.cookie = `${name}=${value || ""}; path=/`;
  },

  getCookiesAsArray: function () {
      return document.cookie.split('; ').map(cookie => {
          const [name, value] = cookie.split('=');
          return { name, value };
      });
  },

  hasCookie: function (name) {
      return document.cookie.split('; ').some(cookie => cookie.startsWith(`${name}=`));
  }
};
 
CookieLib.setCookie('nickName', 'slmlm');
console.log(CookieLib.getCookiesAsArray()); 
console.log(CookieLib.hasCookie('username'));