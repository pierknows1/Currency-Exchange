import Component from './src/js/bs/Component';

const request = Component('https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD');

describe("Component", () => {
    before
    test("explanation", () => {
        const ipt = "";
        const val = "";
        const component = new Component(ipt);
        expect(component.property).toBe(val);
    })
})