import foods from './foods';

const restaurants = [
  {
    id: 'RESTAURANT_01',
    category: '중식',
    name: '인천반점',
    menu: [...foods],
  },
  {
    id: 'RESTAURANT_02',
    category: '한식',
    name: '서울김밥',
    menu: [
      {
        id: 'FOOD_03',
        name: '김밥',
        price: 3_000,
      },
    ],
  },
  {
    id: 'RESTAURANT_03',
    category: '일식',
    name: '부산카레',
    menu: [
      {
        id: 'FOOD_04',
        name: '카레',
        price: 10_000,
      },
    ],
  },
];

export default restaurants;
