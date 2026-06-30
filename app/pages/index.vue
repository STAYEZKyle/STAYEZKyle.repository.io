<template>
  <main class="main">
    <section class="home__main-header">
      <div class="container">
        <h1 style="font-family: 'mak', serif; font-size: 64px; text-transform: uppercase; margin-bottom: 30px;">
          Современные выставки,<br>галереи и мероприятия
        </h1>
        
        <div class="hero-slider-wrapper">
          <Swiper :modules="modules" :slides-per-view="1" :loop="true" :autoplay="{ delay: 4000, disableOnInteraction: false }" :pagination="{ clickable: true }" class="main-slider">
            <SwiperSlide v-for="event in events" :key="event.id">
              <div class="slide-inner">
                <img :src="event.image" :alt="event.title" class="slide-bg" />
                <div class="slide-content">
                  <h2 style="font-family: 'mak', serif; font-size: 24px; margin: 0; color: #1F1E1E;">{{ event.title }}</h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>

    <section class="events-listing">
      <div class="container">
        <h2 class="section-title">Ближайшие мероприятия</h2>
        <div class="events-grid">
          <EventCard v-for="event in events" :key="event.id" :event="event" />
        </div>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <h2 class="section-title">Как нас найти</h2>
        <div class="map-wrapper"><div id="yandex-map" class="yandex-map"></div></div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const modules = [Pagination, Autoplay]
const { data: events } = await useFetch('/api/events')

useHead({
  title: 'Главная | Lenni Art',
  script: [{ src: 'https://api-maps.yandex.ru/2.1/?lang=ru_RU', type: 'text/javascript', onload: () => initMap() }]
})

const initMap = () => {
  if (typeof ymaps === 'undefined') return;
  ymaps.ready(() => {
    const map = new ymaps.Map('yandex-map', { center: [59.9386, 30.3141], zoom: 14, controls: ['zoomControl', 'fullscreenControl'] });
    const placemark = new ymaps.Placemark([59.9386, 30.3141], { hintContent: 'Lenni Art' }, { preset: 'islands#blackDotIcon' });
    map.geoObjects.add(placemark);
  });
}
</script>

<style scoped>
.hero-slider-wrapper { width: 100%; height: 500px; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
.main-slider { width: 100%; height: 100%; }
.slide-inner { position: relative; width: 100%; height: 100%; }
.slide-bg { width: 100%; height: 100%; object-fit: cover; }
.slide-content { position: absolute; bottom: 40px; left: 40px; background: rgba(255, 255, 255, 0.95); padding: 20px 30px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }

.events-listing { margin-top: 100px; }

/* ИСПРАВЛЕННАЯ СЕТКА: Строго 3 колонки, занимающие 100% ширины */
.events-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 30px !important;
  width: 100% !important;
}

.map-section { margin-top: 100px; margin-bottom: 100px; }
.map-wrapper { width: 100%; height: 450px; border-radius: 12px; overflow: hidden; background: #eee; }
.yandex-map { width: 100%; height: 100%; }

/* Адаптивность для мобильных */
@media (max-width: 1024px) {
  .events-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 768px) {
  .hero-slider-wrapper { height: 350px; }
  .events-grid { grid-template-columns: 1fr !important; }
  h1 { font-size: 42px !important; }
}
</style>
