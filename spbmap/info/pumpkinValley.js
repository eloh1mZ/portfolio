(document.querySelector("#pumpkinValley .info__text") || document.getElementById("pumpkinValley")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'pumpkinValley')" data-id="pumpkinValley" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">PUMPKIN VALLEY</h2><p class="dot__title_paragraph">Мэр: <b>AsmodeusGrigori</b></p></div><p><span class="green">Менее пяти жителей</span></p><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="green">-907 -361</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-7006 65 -2848</span></p></div>`