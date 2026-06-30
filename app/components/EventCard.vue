<template>
  <article class="event-card">
    <div class="event-card__image-container">
      <img :src="event.image" :alt="event.title" class="event-card__image" />
    </div>
    <div class="event-card__content">
      <span class="event-card__type">{{ event.type }}</span>
      <h3 class="event-card__title">{{ event.title }}</h3>
      <p class="event-card__date">{{ event.date }}</p>
      <NuxtLink :to="`/events/${event.id}`" class="event-card__btn btn">Подробнее</NuxtLink>
    </div>
  </article>
</template>

<script setup>
defineProps({ event: { type: Object, required: true } })
</script>

<style scoped>
/* !important предотвращает конфликты с глобальным styles.css */
.event-card {
  display: flex !important;
  flex-direction: column !important;
  background: #fff !important;
  border-radius: 12px !important;
  overflow: hidden !important;
  box-shadow: 0 4px 15px rgba(0,0,0,0.05) !important;
  height: 100% !important;
  width: 100% !important;
  margin: 0 !important;
}
.event-card__image-container { width: 100%; height: 220px; }
.event-card__image { width: 100%; height: 100%; object-fit: cover; }
.event-card__content { padding: 20px; display: flex; flex-direction: column; flex-grow: 1; gap: 12px; }
.event-card__type { font-size: 12px; text-transform: uppercase; color: #888; font-weight: 600; }
.event-card__title { font-size: 22px; margin: 0; color: #1F1E1E; }
.event-card__date { color: #555; font-size: 15px; margin-bottom: 15px; }
.event-card__btn { margin-top: auto; text-align: center; padding: 12px; background-color: #1F1E1E; color: #fff; text-decoration: none; border-radius: 6px; font-weight: bold; }
.event-card__btn:hover { background-color: #444; }
</style>
