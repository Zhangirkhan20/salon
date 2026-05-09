// Queen Bee Salon - Complete Data
export const salonData = {
  name: '👑 Queen Bee Salon',
  description: 'Люксовый салон красоты в Алматы',
  phone: '77021113346',
  address: 'пр. Абылай Хана, 92, Алматы',
  instagram: 'https://instagram.com/queenbee.salon',

  services: [
    {
      id: 1,
      name: 'Стрижка женская',
      category: 'Стрижки',
      price: '3000₸',
      duration: 40,
      image: '✂️'
    },
    {
      id: 2,
      name: 'Стрижка мужская',
      category: 'Стрижки',
      price: '1500₸',
      duration: 30,
      image: '✂️'
    },
    {
      id: 3,
      name: 'Окрашивание волос',
      category: 'Окрашивание',
      price: '4500₸',
      duration: 90,
      image: '🎨'
    },
    {
      id: 4,
      name: 'Мелирование',
      category: 'Окрашивание',
      price: '5000₸',
      duration: 120,
      image: '🎨'
    },
    {
      id: 5,
      name: 'Маникюр',
      category: 'Маникюр',
      price: '3500₸',
      duration: 60,
      image: '💅'
    },
    {
      id: 6,
      name: 'Педикюр',
      category: 'Педикюр',
      price: '4000₸',
      duration: 60,
      image: '👣'
    },
    {
      id: 7,
      name: 'Наращивание ресниц',
      category: 'Ресницы',
      price: '2500₸',
      duration: 90,
      image: '✨'
    },
    {
      id: 8,
      name: 'Окрашивание ресниц',
      category: 'Ресницы',
      price: '1500₸',
      duration: 40,
      image: '✨'
    },
    {
      id: 9,
      name: 'Чистка лица',
      category: 'Уход за лицом',
      price: '2800₸',
      duration: 50,
      image: '🌺'
    },
    {
      id: 10,
      name: 'Микрошлифовка',
      category: 'Уход за лицом',
      price: '2500₸',
      duration: 40,
      image: '🌺'
    },
    {
      id: 11,
      name: 'Вакуумная чистка',
      category: 'Уход за лицом',
      price: '1800₸',
      duration: 40,
      image: '🌺'
    },
    {
      id: 12,
      name: 'Восковая депиляция',
      category: 'Депиляция',
      price: '1500₸',
      duration: 40,
      image: '⚘'
    },
    {
      id: 13,
      name: 'Ламинирование ресниц',
      category: 'Ресницы',
      price: '2000₸',
      duration: 50,
      image: '✨'
    },
    {
      id: 14,
      name: 'Ботокс для волос',
      category: 'Окрашивание',
      price: '3500₸',
      duration: 80,
      image: '🎨'
    },
    {
      id: 15,
      name: 'Кератин для волос',
      category: 'Окрашивание',
      price: '4000₸',
      duration: 90,
      image: '🎨'
    },
    {
      id: 16,
      name: 'Массаж головы',
      category: 'Мастер',
      price: '2000₸',
      duration: 40,
      image: '💆'
    }
  ],

  masters: [
    {
      id: 1,
      name: 'Кристина',
      specialty: 'Стрижки и окрашивание',
      experience: '8 лет',
      rating: 4.9,
      image: '👩‍🦰',
      services: [1, 2, 3, 4, 14, 15],
      workHours: {
        monday: '10:00-19:00',
        tuesday: '10:00-19:00',
        wednesday: '10:00-19:00',
        thursday: '10:00-19:00',
        friday: '10:00-20:00',
        saturday: '10:00-18:00',
        sunday: 'Выходной'
      }
    },
    {
      id: 2,
      name: 'Adelina',
      specialty: 'Маникюр и педикюр',
      experience: '6 лет',
      rating: 4.8,
      image: '👩‍🦱',
      services: [5, 6],
      workHours: {
        monday: '11:00-19:00',
        tuesday: '11:00-19:00',
        wednesday: '11:00-19:00',
        thursday: '11:00-19:00',
        friday: '11:00-20:00',
        saturday: '10:00-18:00',
        sunday: 'Выходной'
      }
    },
    {
      id: 3,
      name: 'Наталья',
      specialty: 'Ресницы и брови',
      experience: '7 лет',
      rating: 4.95,
      image: '👩‍🦳',
      services: [7, 8, 13],
      workHours: {
        monday: '10:00-19:00',
        tuesday: '10:00-19:00',
        wednesday: '10:00-19:00',
        thursday: '10:00-19:00',
        friday: '10:00-20:00',
        saturday: '10:00-18:00',
        sunday: 'Выходной'
      }
    },
    {
      id: 4,
      name: 'Дарья',
      specialty: 'Уход за лицом',
      experience: '5 лет',
      rating: 4.85,
      image: '👩',
      services: [9, 10, 11],
      workHours: {
        monday: '10:00-18:00',
        tuesday: '10:00-18:00',
        wednesday: '10:00-18:00',
        thursday: '10:00-18:00',
        friday: '10:00-19:00',
        saturday: '10:00-17:00',
        sunday: 'Выходной'
      }
    }
  ],

  reviews: [
    {
      id: 1,
      author: 'Айна',
      text: 'Отличный салон! Стрижку сделала Кристина, очень профессионально. Очень рекомендую!',
      rating: 5,
      date: '2024-05-05'
    },
    {
      id: 2,
      author: 'Лейла',
      text: 'Делала маникюр у Adelina. Супер результат, педикюр топ!',
      rating: 5,
      date: '2024-04-28'
    },
    {
      id: 3,
      author: 'Сабина',
      text: 'Первый раз попробовала наращивание ресниц у Натальи. Очень красиво!',
      rating: 5,
      date: '2024-04-20'
    },
    {
      id: 4,
      author: 'Мария',
      text: 'Постоянная клиентка. Качество услуг всегда на высоте. Спасибо Queen Bee!',
      rating: 5,
      date: '2024-04-15'
    },
    {
      id: 5,
      author: 'Динара',
      text: 'Делала окрашивание волос. Результат превосходит ожидания. Девушки знают свое дело!',
      rating: 5,
      date: '2024-04-10'
    }
  ]
};

export default salonData;
