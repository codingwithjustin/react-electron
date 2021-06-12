function weatherData2Percent(api) {
    const usedData = {
        humidity: api.main.humidity,
        pressure: api.main.pressure,
        temp: api.main.temp
    }

    let pressure = 0
    let temp = 0
    
    if (usedData.pressure < 975) {
        pressure = 0
    } else if (usedData.pressure > 1025) {
        pressure = 100
    } else {
        pressure = (usedData.pressure - 975)*2
    }

    if (usedData.temp < -30) {
        temp = 0
    } else if (usedData.temp > 40) {
        temp = 100
    } else {
        temp = Math.floor((usedData.temp + 30)*1.42)
    }

    return {
        humidity: api.main.humidity,
        pressure: pressure,
        temp: temp
    }
}

export default weatherData2Percent