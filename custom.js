
(() => {
  const ID = "mocha-home-hero";

  function mount() {
    if (!document.body || document.getElementById(ID)) {
      return;
    }

    const hero = document.createElement("section");
    hero.id = ID;
    hero.setAttribute("aria-label", "Homelab header");

    hero.innerHTML = `
      <div class="mocha-brand">
        <div class="mocha-brand-title">
          Homelab
        </div>
        <p>
          Elegance is achieved when nothing can be removed
        </p>
      </div>

      <div class="mocha-clock">
        <time id="mocha-clock-time"></time>
        <div id="mocha-clock-date"></div>
      </div>
    `;

    const target =
      document.querySelector("#page_container") ||
      document.querySelector("main") ||
      document.querySelector("#__next");

    if (!target) return;

    target.prepend(hero);
    updateClock();
  }

  function updateClock() {
    const time = document.getElementById(
      "mocha-clock-time"
    );
    const date = document.getElementById(
      "mocha-clock-date"
    );

    if (!time || !date) return;

    const now = new Date();

    time.textContent = new Intl.DateTimeFormat(
      "en-GB",
      {
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
      }
    ).format(now);

    time.setAttribute(
      "datetime",
      now.toISOString()
    );

    date.textContent = new Intl.DateTimeFormat(
      "en-GB",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
      }
    ).format(now);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      mount,
      { once: true }
    );
  } else {
    mount();
  }

  setInterval(() => {
    mount();
    updateClock();
  }, 1000);
})();

