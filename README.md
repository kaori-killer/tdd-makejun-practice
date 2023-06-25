# TDD 2주차 과제

## 서버 실행하기

```shell
cd express-app

npm install

npx nodemon app.ts
```

## 실행하기

```shell
npm install

npm start
```

## 테스트

```shell
npm test
```

## E2E 테스트

```shell
npm start

npm run codeceptjs
```

## 2주차 피드백

### 테스트 명세를 명확하게 작성하고 그룹화하기

테스트 코드를 그룹화 해주시긴 했지만 좀 더 의미와 목적을 이해하기 쉽게 describe를 사용하시면 더 가독성 좋은 코드가 될 것 같아요. 아래는 간단히 예시로 그룹화 해보았는데, 여러 테스트 코드에서 이 그룹화만 좀만 더 신경써주시면 더 좋은 테스트 코드가 될 것 같습니다 😄

```tsx
describe('TextField', () => {
  const label = '검색';

  describe('렌더링 검색 바', () => {
    // 렌더링 검색 바에 대한 테스트들
  });

  describe('사용자가 text 값을 입력할 때', () => {
    // 사용자가 text 값을 입력할 때에 대한 테스트들
  });
});
```

### 테스트 네이밍

테스트 제목을 더 일반화하여 테스트 목적을 더 명확하게 표현해보는건 어떨까요? 예를 들어 아래와 같이 입력값에 따라 해당되는 레스토랑 데이터만 보여야 한다는 의도를 더 명확히 전달하면 미래의 나와 다른 사람들도 좀 더 이해하기 쉬운 테스트 코드가 될 것 같아요~!

```tsx
// 기존 코드
it('서울김밥의 restaurants 데이터만 보인다.', async () => {
  renderRestaurantTable('서', '한식');

  await waitFor(() => {
    expect(screen.getByText(/서울김밥/)).toBeInTheDocument();
    expect(screen.queryByText(/인천반점/)).toBeNull();
  });
});


// 개선된 코드
it('입력값에 따라 해당되는 레스토랑 데이터만 보여야 합니다.', async () => {
  renderRestaurantTable('서', '한식');

  await waitFor(() => {
    expect(screen.getByText(/서울김밥/)).toBeInTheDocument();
    expect(screen.queryByText(/인천반점/)).toBeNull();
  });
});
```
