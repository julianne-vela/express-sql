const {
    app
} = require('../app.js')
const {
    shuttles
} = require('../shuttles.js')
const supertest = require('supertest')
const request = supertest(app)

it('hits the shuttles endpoint', async done => {
    const expected = {
        results: shuttles
    }

    const response = await request.get('/shuttles')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(expected)
    done()
})

it('gets the crew name of the object', async done => {
    const expected = {
        results: {
            name: "Lotlux",
            launch_date: "12/1/2011",
            crew: "Tamil",
            success: false
        }
    };

    const response = await request.get('/shuttles/Tamil')

    expect(response.status).toBe(200)
    expect(response.body).toEqual(expected)
    done()
})