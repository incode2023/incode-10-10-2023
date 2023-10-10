fetch('videos.json')
    .then(res => res.json())
    .then((videos) =>
        document.getElementById("videos").innerHTML = videos
            .slice(0, 6).map(
                (item) =>
                    `<a href="${item.link}">
        <div class="item">
          <img class="image-reset" src="${item.image}" />
          <div class="description">
              <p class="main__title">${item.name}</p>
              <p class="sub__title">${item.title}</p>
          </div>
        </div>
      </a>
      `
            )
            .join("")
    )
fetch('videos.json')
    .then(res => res.json())
    .then((videos) =>
        document.getElementById("videos2").innerHTML = videos
            .slice(6, 12).map(
                (item) =>
                    `<a href="${item.link}">
        <div class="item">
        <img class="image-reset" src="${item.image}" />
        <div class="description">
            <p class="main__title">${item.name}</p>
            <p class="sub__title">${item.title}</p>
        </div>
        </div>
    </a>
    `
            )
            .join("")
    )

    class Menu {
        constructor() {
          this.menu = document.getElementById(`menu`)
          this.line1 = document.getElementsByClassName(`line1`)[0]
          this.line2 = document.getElementsByClassName(`line2`)[0]
          this.line3 = document.getElementsByClassName(`line3`)[0]
        }
        toggleMenu() {
          this.menu.classList.toggle(`menu-hidden`)
          this.line1.classList.toggle(`active1`)
          this.line2.classList.toggle(`active2`)
          this.line3.classList.toggle(`active3`)
        }
      }
      
      var menu = new Menu()

      const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
  document.body.classList.toggle('dark')
})