const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  // TODO: Add additional tests below...

  test("amountDue is set based on argument",() => {
    // Remember, you can arrange, act, and assert...start small
    const changeHandler = new ChangeHandler();
    expect(changeHandler.amountDue).toEqual(null);
  })

  test("cashTendered is set to zero", () => {
    // Remember, you can arrange, act, and assert...start small
    const changeHandler = new ChangeHandler();
    expect(changeHandler.cashTendered).toEqual(0);
  })

  test("inserting a quarter adds 25 cents", () => {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin("quarter");
    expect(changeHandler.cashTendered).toEqual(25); 
  })

  test("inserting a dime adds 10 cents", () => {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin("dime");
    expect(changeHandler.cashTendered).toEqual(10); 
  })

  test("inserting a nickel adds 5 cents", () => {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin("nickel");
    expect(changeHandler.cashTendered).toEqual(5); 
  })

  test("inserting a penny adds 1 cent", () => {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin("penny");
    expect(changeHandler.cashTendered).toEqual(1); 
  })

});
