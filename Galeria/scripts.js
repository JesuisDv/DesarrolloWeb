document.querySelectorAll(".cont2 img").forEach(img => {
    img.addEventListener("click", function () {

        document.getElementById("main-image").src = this.dataset.full;
        document.getElementById("main-image").alt = this.alt;


        document.querySelector(".image-description").textContent = this.dataset.name;

        let variants = JSON.parse(this.dataset.variants);
        document.getElementById("variant1").src = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${variants[0]}.png`;
        document.getElementById("variant2").src = `https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/${variants[1] || variants[0]}.png`;
    });
});
