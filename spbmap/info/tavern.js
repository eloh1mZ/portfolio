(document.querySelector("#tavern .info__text") || document.getElementById("tavern")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'tavern')" data-id="tavern" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Tavern</h2><p class="dot__title_paragraph">Мэр: <b>ItsKopo6o4ka</b></p></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">341 1029</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">2810 63 8336</span></p></div><div class="api__item spoiler"><button class="spoiler__btn" onclick="updateSpoiler(this)">Описание</button><main class="spoiler__content"><p class="dot__description">«Болт, который мы положили на город - состовляет аж 10000 тон.» - @Tapok372<br><br>«Переходи на тёмную сторону, у нас кекные таблички» - @Greatest_Cookie<br><br>«Тут живёт самый лучший мэр на СПб» - @smallMarmelad<br><br>«Всем жителям ку, остольным соболезную» - @ItsKopo6o4ka<br><br>«Х*й» - @Jackerson<br><br>«Даже волки так не ходят, как мы летаем над городом» - @Geperbola<br><br>«Если ты чужой, зашёл в наш город, то кристалл в жопу обеспечен.(Даже Гейболумба об этом не мечтала)» - @Bor B 3akone<br><br>«Всё плохо, было бы хорошо, не говорили бы что хорошо» - @prncessgnu<br><br>«Живот не от пива, живот для пива» - @TaтарТарТар</p></main></div><div class="residents dot__residents"><h3>Жители</h3><ul class="residents__list"><li class="residents__item">ItsKopo6o4ka - мэр</li><li class="residents__item">Tapok372 - зам.</li><li class="residents__item">prncessgnu</li><li class="residents__item">Bor B 3akone</li><li class="residents__item">Geperbola</li><li class="residents__item">Greatest_Cookie</li><li class="residents__item">Jackerson</li><li class="residents__item">TatapTapTap</li><li class="residents__item">SmallMarmelad</li></ul></div>`