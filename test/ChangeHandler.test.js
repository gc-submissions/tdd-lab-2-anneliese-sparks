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

});