export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  // Имитация базы данных
  const events = [
    { id: 1, title: 'Малевич и супрематизм', date: '12 мая - 20 июня', image: '/images/events/malevich.png', type: 'Выставка', description: 'Полная ретроспектива работ Казимира Малевича. Уникальная возможность увидеть эволюцию художника от ранних импрессионистических опытов до создания легендарного "Черного квадрата".' },
    { id: 2, title: 'Nirvana Tribute', date: '15 июля', image: '/images/events/nirvana.png', type: 'Концерт', description: 'Гранж жив! Трибьют-концерт легендарной группы. Прозвучат все главные хиты: от Smells Like Teen Spirit до Come As You Are в невероятной энергетике живого звука.' },
    { id: 3, title: 'Вечер джаза: Sade', date: '22 августа', image: '/images/events/sade.png', type: 'Концерт', description: 'Романтический вечер под звуки саксофона и чарующего вокала. Идеальная атмосфера для свидания или расслабляющего отдыха после тяжелой недели.' }
  ]
  return events.find(e => e.id === Number(id)) || null
})
