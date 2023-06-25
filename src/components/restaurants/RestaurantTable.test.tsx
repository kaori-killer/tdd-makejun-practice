import { render, screen, waitFor } from '@testing-library/react';

import RestaurantTable from './RestaurantTable';

import filterRestaurants from '../../utils/filterRestaurants';

import restaurants from '../../../fixtures/restaurants';

const context = describe;

describe('RestaurantTable', () => {
  function renderRestaurantTable(filterText: string, filterCategory: string) {
    const filteredRestaurants = filterRestaurants(
      restaurants,
      { filterText, filterCategory },
    );

    render(
      <RestaurantTable restaurants={filteredRestaurants} />,
    );
  }

  it('renders restaurant table', async () => {
    renderRestaurantTable('', '전체');

    await waitFor(() => {
      screen.getByText(/인천반점/);
      screen.getByText(/서울김밥/);
    });
  });

  context('when input text="메" category="한식"', () => {
    it('서울김밥의 restaurants 데이터만 보인다.', async () => {
      renderRestaurantTable('서', '한식');

      await waitFor(() => {
        expect(screen.getByText(/서울김밥/)).toBeInTheDocument();
        expect(screen.queryByText(/인천반점/)).toBeNull();
      });
    });
  });
});
