(document.querySelector("#oasis .info__text") || document.getElementById("oasis")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'oasis')" data-id="oasis" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">OASIS</h2><p class="dot__title_paragraph">Мэр: <b>Omniel_</b></p></div><p><span class="green">Менее пяти жителей</span></p><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="yellow">65 -640</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">301 64 -5000</span></p></div><p class="dot__description">Перспективный город в необычном стиле, главное в городе это его игроки!</p>`