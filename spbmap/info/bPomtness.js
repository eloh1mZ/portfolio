(document.querySelector("#bPomtness .info__text") || document.getElementById("bPomtness")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'bPomtness')" data-id="bPomtness" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">База Pomtness</h2></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="green">-1820 3</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-14602 68 43</span></p></div><p><span class="red">Вход воспрещен</span></p><p class="dot__description">Личный зоопарк капитана разведотряда Помтнесса<br>Вход по приглашению</p>`