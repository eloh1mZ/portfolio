(document.querySelector("#TreesWorld .info__text") || document.getElementById("TreesWorld")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'TreesWorld')" data-id="TreesWorld" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">TreesWorld</h2><p class="dot__title_paragraph">Мэр: <b>jus1georg</b></p></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="green">-1170 25</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-9416 70 208</span></p></div><div class="api__item spoiler"><button class="spoiler__btn" onclick="updateSpoiler(this)">Описание</button><main class="spoiler__content"><p class="dot__description">Город, в свободном стиле, но с уклоном на средневековье. Сейчас активно ищем игроков, готовых влиться в нашу дружную компанию. Ждём всех!<h3><a href='https://discord.gg/CtWMFGxB34'>Ссылка на дискорд</a><h3></p></main></div><div class="residents dot__residents"><h3>Жители</h3><ul class="residents__list"><li class="residents__item">jus1georg</li><li class="residents__item">Lotus6677</li><li class="residents__item">Sitrus029</li><li class="residents__item">BoundenZIKRAS</li><li class="residents__item">Redyska228</li></ul></div>`