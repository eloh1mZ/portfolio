(document.querySelector("#grinstov .info__text") || document.getElementById("grinstov")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'grinstov')" data-id="grinstov" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Гринстов</h2><p class="dot__title_paragraph">Мэр: <b>AnooN3apbw</b></p></div><p><span class="green">Менее пяти жителей</span></p><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="green">-1100 10</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-8700 70 10</span></p></div><p class="dot__description">Гринстов - средневековое королевство с очень узенькие улочки, с элеменатами фэнтази.</p>`