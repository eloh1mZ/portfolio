(document.querySelector("#aksu .info__text") || document.getElementById("aksu")).innerHTML = `<button type="button" class="btn btn--favoriteStatus" onclick="changeFavoriteStatus(this, 'aksu')" data-id="aksu" area-label="Добавить в избранное"><svg viewBox="0 0 100 100"><use xlink:href="#star" /></svg></button><div class="dot__title"><h2 class="dot__title_heading">Аксу</h2><p class="dot__title_paragraph">Мэр: <b>MoonXLebyshek</b></p></div><div class="dot__marks_wrapper"><h3 style="margin: 0">В городе есть</h3><ul class="marks dot__marks"><li class="marks__item">игра</li><li class="marks__item">кафе</li><li class="marks__item">бар</li><li class="marks__item">студия</li><li class="marks__item">здание суда</li></ul></div><div class="coords dot__coords"><h3 class="coords__header">Координаты</h3><p class="coords__paragraph">Ад - <span class="red">-210 1390</span></p><p class="coords__paragraph">Обычный мир - <span class="gray">-1628 68 11120</span></p></div><div class="api__item spoiler"><button class="spoiler__btn" onclick="updateSpoiler(this)">Описание</button><main class="spoiler__content"><p class="dot__description">Аксу - это не просто город, это огромная дружеская семья со своей уютной обстановкой （＾ω＾）. Каждый житель города - это индивидуальная личность, которую все уважают и понимают. В наш город не принимают с несколькими гражданствами.<br><br>Каждый житель города может обсудить свои проблемы, решения, поделиться радостной новостью или иной информацией ╰(´︶\`)╯♡<br><br>Архитектура города опирается на современную и средневековую Японию. Мы чтим традиции Дальнего Востока и цивилизованной Азии (๑╹ω╹๑ ).<br></p></main></div><div class="residents dot__residents"><h3>Жители</h3><ul class="residents__list"><li class="residents__item">MoonXLebyshek — мэр</li><li class="residents__item">MrSazonych — зам. мэра</li><li class="residents__item">wwgfori</li><li class="residents__item">lemonokrab</li><li class="residents__item">Mafikau_</li></ul></div>`