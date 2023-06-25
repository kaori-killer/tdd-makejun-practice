import fixtures from '../../fixtures';

import filterRestaurants from './filterRestaurants';

import restaurants from '../../fixtures/restaurants';

const context = describe;

describe('filterRestaurants', () => {
  context('입력값에 따라 해당되는 레스토랑 데이터만 보여야 합니다.', () => {
    it('전체 레스토랑 객체를 포함한 배열을 반환한다', () => {
      const filterText = '';
      const filterCategory = '전체';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });

      expect(filteredRestaurants).toHaveLength(restaurants.length);
    });

    it('중식 카테고리의 레스토랑 객체를 배열을 반환한다.', () => {
      const filterText = '';
      const filterCategory = '중식';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });

      expect(filteredRestaurants).toHaveLength(1);
    });

    it('한식 카테고리의 레스토랑 객체를 배열을 반환한다.', () => {
      const filterText = '';
      const filterCategory = '한식';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });

      expect(filteredRestaurants).toHaveLength(1);
    });

    it('일식 카테고리의 레스토랑 객체를 배열을 반환한다.', () => {
      const filterText = '';
      const filterCategory = '일식';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });

      expect(filteredRestaurants).toHaveLength(1);
    });

    it('‘인’를 포함한 레스토랑 객체를 배열을 반환한다. ', () => {
      const filterText = '인';
      const filterCategory = '전체';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });

      expect(filteredRestaurants).toHaveLength(1);
      expect(filteredRestaurants[0].name).toBe('인천반점');
    });

    it('‘인’를 포함한 일식 카테고리의 레스토랑 객체를  배열을 반환한다.', () => {
      const filterText = '인';
      const filterCategory = '일식';

      const filteredRestaurants = filterRestaurants(fixtures.restaurants, {
        filterText,
        filterCategory,
      });

      expect(filteredRestaurants).toHaveLength(0);
    });
  });
});
