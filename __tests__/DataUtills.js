import DataUtils from '../src/utils/DataUtils';

it('DataUtills', () => {
  const timestamp = 1524871110094;
  const dataString = DataUtils.timeStampToFormatedData(timestamp);
  console.log(dataString);
  expect('28/4/2018 01:18').toBe(dataString);
});
