(() => {
  const key = "kamerton-editorial-theme";
  const root = document.documentElement;

  function readTheme() {
    try {
      return localStorage.getItem(key) === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  }

  root.dataset.theme = readTheme();

  document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".theme-toggle");
    const icon = button.querySelector(".theme-toggle__icon");

    function showTheme() {
      const dark = root.dataset.theme === "dark";
      const label = dark ? "Включить светлую тему" : "Включить тёмную тему";
      button.setAttribute("aria-label", label);
      button.title = label;
      icon.textContent = dark ? "☀" : "☾";
    }

    button.addEventListener("click", () => {
      const theme = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = theme;
      try {
        localStorage.setItem(key, theme);
      } catch {
        // Тема остаётся применённой на открытой странице.
      }
      showTheme();
    });

    window.addEventListener("storage", event => {
      if (event.key === key) {
        root.dataset.theme = readTheme();
        showTheme();
      }
    });
    window.addEventListener("pageshow", event => {
      if (event.persisted) {
        root.dataset.theme = readTheme();
        showTheme();
      }
    });

    showTheme();
  });
})();
