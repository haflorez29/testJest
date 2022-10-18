import actions from '../../actions/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  const payload = ProductMock;
  const expected = action => ({
    type: action,
    payload,
  });

  test('addToCart Action', () => {
    expected(actions.addToCart(payload)).toEqual(expected('ADD_TO_CART'));
  });

  test('removeFromCart', () => {
    expected(actions.removeFromCart(payload)).toEqual(expected('ADD_TO_CART'));
  });
});
