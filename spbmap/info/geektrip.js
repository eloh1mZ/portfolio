(document.querySelector("#geektrip .info__text") || document.getElementById("geektrip")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'geektrip')" data-id="geektrip" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Geek Trip</h2><p class="dot__title_paragraph">Мэр: <b>typz2862</b></p></div><p><span class="green">Менее пяти жителей</span></p><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="blue">82 -48</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">672 63 -403</span></p></div><p><span class="red">Вход воспрещен</span></p><p class="dot__description">Скоро расцветет, но пока запретка</p><div class="residents dot__residents"><h3>Жители</h3><ul class="residents__list"><li class="residents__item">typz2862 — мэр</li></ul></div>`