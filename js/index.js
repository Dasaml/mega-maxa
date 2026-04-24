const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  const isShowMenu = menu.classList.contains("showMenu");
  menu.classList.toggle("showMenu");
  closeIcon.style.display = isShowMenu ? "none" : "block";
  menuIcon.style.display = isShowMenu ? "block" : "none";
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(menuItem => {
  menuItem.addEventListener("click", toggleMenu);
});

     function spustOdpocet() {
            const ciloveDatum = new Date('2025-05-26T09:00:00+02:00').getTime();

            const interval = setInterval(function() {
                const aktualniCas = new Date().getTime();
                const rozdil = ciloveDatum - aktualniCas;

                if (rozdil < 0) {
                    clearInterval(interval);
                    document.querySelector('.flip-clock').innerHTML = '<div style="font-size: 1.8rem; color: #6200bf;">Prodej zahájen!</div>';
                    return;
                }

                const dny = Math.floor(rozdil / (1000 * 60 * 60 * 24));
                const hodiny = Math.floor((rozdil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minuty = Math.floor((rozdil % (1000 * 60 * 60)) / (1000 * 60));
                const vteriny = Math.floor((rozdil % (1000 * 60)) / 1000);

                document.getElementById('dny').textContent = dny < 10 ? '0' + dny : dny;
                document.getElementById('hodiny').textContent = hodiny < 10 ? '0' + hodiny : hodiny;
                document.getElementById('minuty').textContent = minuty < 10 ? '0' + minuty : minuty;
                document.getElementById('vteriny').textContent = vteriny < 10 ? '0' + vteriny : vteriny;
            }, 1000);
        }

        spustOdpocet();