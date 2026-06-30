<template>
  <main class="main">
    <section class="events-listing" style="margin-top: 50px;">
      <div class="container">
        <div class="title-plate section-plate" style="margin-bottom: 40px; display: inline-block; background: rgba(255, 255, 255, 0.95); padding: 15px 35px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          <h1 style="font-family: 'mak', serif !important; font-size: 48px; color: #1F1E1E; margin: 0;">Афиша мероприятий</h1>
        </div>
        <div class="events-grid">
          <EventCard v-for="event in events" :key="event.id" :event="event" />
        </div>
      </div>
    </section>

    <section class="reservation-section" style="margin-top: 80px; margin-bottom: 150px;">
      <div class="container">
        <div class="title-plate section-plate" style="margin-bottom: 40px; display: inline-block; background: rgba(255, 255, 255, 0.95); padding: 15px 35px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          <h2 style="font-family: 'mak', serif !important; font-size: 36px; color: #1F1E1E; margin: 0;">Бронирование столов</h2>
        </div>

        <div class="reserve">
          <div class="reserve__legend" style="background: #fff; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); height: fit-content;">
            <h3 style="margin-top: 0; font-family: 'mak', serif; font-size: 22px;">Статус</h3>
            <div class="legend-item"><div class="legend-color free"></div>Свободно</div>
            <div class="legend-item"><div class="legend-color selected"></div>Выбрано</div>
            <div class="legend-item"><div class="legend-color busy"></div>Занято</div>
          </div>

          <div class="reserve__scheme tables-scheme" style="box-shadow: inset 0 0 20px rgba(0,0,0,0.05); border-radius: 12px; background: rgba(255,255,255,0.4);">
            <div 
              v-for="t in tables" 
              :key="t.id"
              class="table-item" 
              :class="t.status"
              :style="{ top: t.top, left: t.left, transform: 'translate(-50%, -50%)' }"
              @click="toggleTable(t)"
            >
              <img :src="encodeURI(`/images/tables/${t.img}`)" :alt="t.name" style="max-width: 140px; pointer-events: none;" />
            </div>
          </div>

          <div class="reserve__summary order-summary" style="background: #fff; padding: 25px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); height: fit-content;">
            
            <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 25px;">
              <h3 style="font-family: 'mak', serif; font-size: 24px; margin: 0;">Ваш заказ</h3>
            </div>
            
            <div v-if="selectedTables.length === 0">
              <p style="color: #888; text-align: center; margin: 0;">Выберите свободные столики на схеме зала.</p>
            </div>
            
            <div v-else>
              <div v-for="t in selectedTables" :key="t.id" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px dashed #eee; padding-bottom: 10px;">
                <span style="font-size: 16px;">{{ t.name }}</span>
                <div style="display: flex; align-items: center; gap: 15px;">
                  <span style="font-weight: bold; font-size: 16px;">{{ t.price }} ₽</span>
                  <button @click="removeTable(t)" style="background: transparent; border: none; color: #D32F2F; font-size: 20px; cursor: pointer; padding: 0; display: flex; align-items: center; justify-content: center; width: 24px; height: 24px; transition: opacity 0.2s;" title="Удалить">
                    ✕
                  </button>
                </div>
              </div>
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 25px; margin-bottom: 20px;">
                <span style="font-size: 18px; color: #555;">Итого:</span>
                <span style="font-size: 24px; font-weight: bold; color: #1F1E1E;">{{ totalPrice }} ₽</span>
              </div>
              
              <button class="btn btn--red" style="width: 100%; padding: 15px; border-radius: 8px; font-size: 16px; cursor: pointer;" @click="confirmBooking">
                Перейти к оплате
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'

const { data: events } = await useFetch('/api/events')
useHead({ title: 'Афиша и Бронирование | Lenni Art' })

const tables = ref([
  { id: 1, name: 'Столик 1', price: 1500, status: 'free', img: 'Группа 1.png', top: '22%', left: '70%' },
  { id: 2, name: 'Столик 2', price: 1500, status: 'busy', img: 'Группа 2.png', top: '22%', left: '88%' },
  { id: 3, name: 'Столик 3', price: 1500, status: 'free', img: 'Группа 4.png', top: '65%', left: '88%' },
  { id: 4, name: 'Столик 4', price: 2000, status: 'free', img: 'Группа 6.png', top: '55%', left: '72%' },
  { id: 5, name: 'Столик 5', price: 2000, status: 'free', img: 'Группа 8.png', top: '85%', left: '62%' },
  { id: 6, name: 'Столик 6', price: 2000, status: 'free', img: 'Группа 10.png', top: '85%', left: '38%' },
  { id: 7, name: 'Столик 7', price: 3000, status: 'free', img: 'Группа 12.png', top: '62%', left: '50%' },
  { id: 8, name: 'Столик 8', price: 2000, status: 'free', img: 'Группа 14.png', top: '55%', left: '28%' },
  { id: 9, name: 'Столик 9', price: 1500, status: 'free', img: 'Группа 16.png', top: '22%', left: '30%' },
  { id: 10, name: 'Столик 10', price: 3500, status: 'free', img: 'Группа 18.png', top: '22%', left: '12%' },
  { id: 11, name: 'Столик 11', price: 1500, status: 'free', img: 'Группа 20.png', top: '65%', left: '12%' },
  { id: 12, name: 'Танцпол', price: 500, status: 'free', img: 'Группа 22.png', top: '35%', left: '50%' },
])

const selectedTables = computed(() => tables.value.filter(t => t.status === 'selected'))
const totalPrice = computed(() => selectedTables.value.reduce((sum, table) => sum + table.price, 0))

const toggleTable = (table) => {
  if (table.status === 'busy') return 
  if (table.status === 'free') table.status = 'selected'
  else if (table.status === 'selected') table.status = 'free'
}

const removeTable = (table) => table.status = 'free'

const confirmBooking = () => {
  const tableNames = selectedTables.value.map(t => t.name).join(', ')
  alert(`Вы успешно забронировали: ${tableNames}\nК оплате: ${totalPrice.value} ₽`)
  tables.value.forEach(t => { if (t.status === 'selected') t.status = 'busy' })
}
</script>

<style scoped>
.events-grid {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  gap: 30px !important;
  width: 100% !important;
}

button[title="Удалить"]:hover {
  opacity: 0.6;
}

@media (max-width: 1024px) {
  .events-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 768px) {
  .events-grid { grid-template-columns: 1fr !important; }
}
</style>
