/* 公開前に email を、App Store Connect に載せる実際の連絡先へ書き換えてください。 */
window.APP_SITE = {
  appName: "deu.deu",
  email: "jacaranda160924@gmail.com",
};

(function applySite() {
  var site = window.APP_SITE;
  if (!site) return;

  document.querySelectorAll("[data-app-name]").forEach(function (el) {
    el.textContent = site.appName;
  });

  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = site.email;
    if (el.tagName === "A") {
      el.setAttribute("href", "mailto:" + site.email);
    }
  });

  document.title = document.title
    .replace("German Flashcards", site.appName)
    .replace("deu.deu", site.appName);
})();
