<template>
  <div class="modal-overlay" v-if="modalStore.isOpen" @click.self="modalStore.closeModal">
    <div class="modal-content">
      <button class="modal-close" @click="modalStore.closeModal" type="button">✕</button>

      <h2 class="form__title" style="font-family: 'mak', serif; font-size: 32px;">Заявка на участие</h2>
      <p style="margin-bottom: 25px; color: #555;">Оставьте ваши данные, и мы подберем для вас лучшее место.</p>

      <form @submit.prevent="submitForm" class="modal-form">
        <input v-model="formData.name" type="text" placeholder="Ваше имя" required class="form-input" minlength="2" />
        <input v-model="formData.phone" v-maska data-maska="+7 (###) ###-##-##" type="tel" placeholder="+7 (___) ___-__-__" required class="form-input" />

        <div class="form-group">
          <VueDatePicker v-model="formData.date" placeholder="Выберите дату" :enable-time-picker="false" auto-apply locale="ru" />
        </div>
        <div class="form-group">
          <Multiselect v-model="formData.eventType" :options="eventOptions" placeholder="Тип мероприятия" :searchable="true" />
        </div>

        <!-- КРИТЕРИЙ 15: ИСПОЛЬЗУЕМ КЛАССЫ ИЗ ВАШЕГО STYLES.CSS -->
        <div class="form-group" style="margin-top: 10px;">
          <span class="field__title">Бронирование столика в арт-кафе:</span>
          <div class="radio">
            <label class="radio__item">
              <input type="radio" class="radio__input" v-model="formData.tableReservation" value="Да" required />
              <span class="radio__mark"></span>
              <span class="radio__label">Да, нужен столик</span>
            </label>
            <label class="radio__item">
              <input type="radio" class="radio__input" v-model="formData.tableReservation" value="Нет" required />
              <span class="radio__mark"></span>
              <span class="radio__label">Нет, спасибо</span>
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn--red" style="width: 100%; margin-top: 20px;">Отправить заявку</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useModalStore } from '../stores/modal'
import { vMaska } from "maska/vue"

const modalStore = useModalStore()
const formData = ref({ name: '', phone: '', date: null, eventType: null, tableReservation: null })

const eventOptions = [
  { value: 'exhibition', label: 'Выставка' },
  { value: 'concert', label: 'Концерт' },
  { value: 'masterclass', label: 'Мастер-класс' },
  { value: 'private', label: 'Частное мероприятие' }
]

const submitForm = () => {
  if (formData.value.phone.length < 18) {
    alert('Пожалуйста, введите корректный номер телефона!')
    return
  }
  alert(`Спасибо, ${formData.value.name}! Вы выбрали: Столик - ${formData.value.tableReservation}. Заявка отправлена.`)
  formData.value = { name: '', phone: '', date: null, eventType: null, tableReservation: null }
  modalStore.closeModal()
}
</script>

<style scoped>
.modal-overlay { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(31, 30, 30, 0.7); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; z-index: 9999; }
.modal-content { background: #DEDEDE; background-image: url(/images/noise.png); padding: 45px; border-radius: 20px; width: 100%; max-width: 520px; position: relative; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
.modal-close { position: absolute; top: 20px; right: 20px; width: 32px; height: 32px; background: transparent; border: none; font-size: 24px; cursor: pointer; color: #333; }
.modal-form { display: flex; flex-direction: column; gap: 15px; }
.form-input { padding: 17px 20px 16px; border: none; border-radius: 5px; font-size: 16px; font-family: inherit; outline: none; background: #FFFFFF; }
</style>
