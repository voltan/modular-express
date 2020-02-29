const cron = require('node-cron')
const notificationService = require('../services/NotificationService')
const logService = require('../services/LogService')

// Call notification
cron.schedule('0 */2 * * * *',  async () => {
    const params = {
        time: new Date()
    }

    const resultSend = await notificationService.send(params)
    const resultCall = await notificationService.call(params)

    console.log("======================")
    console.log(JSON.stringify(resultSend))
    console.log(JSON.stringify(resultCall))
    console.log("======================")
})

cron.schedule("*/1 * * * * *", async () => {

    // Set params
    const params1 = {
        userId: 1,
        userToken: "dddddddd",
        action: "test1"
    }

    // Call service
    const result1 = await logService.save(params1)

    // Set params
    const params2 = {
        userId: 2,
        userToken: "xxxxxxxxx",
        action: "test2"
    }

    // Call service
    const result2 = await logService.save(params2)

    console.log(JSON.stringify(result1));
    console.log(JSON.stringify(result2));
});