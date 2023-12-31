import { useFetch } from 'usehooks-ts';

import Restaurant from '../types/Restaurant';

interface Restaurants {
    [restaurants: string]: Restaurant[];
}

const url = 'http://localhost:3000/restaurants';

export default function useFetchRestaurants() {
  const { data } = useFetch<Restaurants>(url);

  if (!data) { return []; }

  return data.restaurants;
}
