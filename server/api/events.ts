export default defineEventHandler((event) => {
  return [
    { id: 1, title: 'Малевич и супрематизм', date: '12 мая - 20 июня', image: '/images/events/malevich.png', type: 'Выставка' },
    { id: 2, title: 'Nirvana Tribute', date: '15 июля', image: '/images/events/nirvana.png', type: 'Концерт' },
    { id: 3, title: 'Вечер джаза: Sade', date: '22 августа', image: '/images/events/sade.png', type: 'Концерт' }
  ]
})
