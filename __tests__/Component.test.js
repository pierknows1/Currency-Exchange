// const url = Component('https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD');
import fetchData from '../src/index.js'



const mockData = {"result":"success","documentation":"https://www.exchangerate-api.com/docs","terms_of_use":"https://www.exchangerate-api.com/terms","time_last_update_unix":1688256002,"time_last_update_utc":"Sun, 02 Jul 2023 00:00:02 +0000","time_next_update_unix":1688342402,"time_next_update_utc":"Mon, 03 Jul 2023 00:00:02 +0000","base_code":"EUR","target_code":"GBP","conversion_rate":0.8593}

describe("Component", () => {
    test("Should give me an error", async () => {

        try{

            const data = await fetchData();
            expect(data).toEqual(mockData)
        } catch (error){
            expect(error.message).toBe("invalid-key")
        }

    })
})


// "unsupported-code" if we don't support the supplied currency code (see supported currencies...).
// "malformed-request" when some part of your request doesn't follow the structure shown above.
// "invalid-key" when your API key is not valid.
// "inactive-account" if your email address wasn't confirmed.
// "quota-reached" when your account has reached the the number of requests allowed by your plan.