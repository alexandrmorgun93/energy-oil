module.exports = (usd, euro, xhr, currenciesUsd, currenciesEuro, temperatureItem) => {
    function setUsd(arr) {
        arr.forEach((elem) => {
            if (elem['ccy'] === 'USD') {
                usd = (+elem['sale']).toFixed(2);
            } else if (elem['ccy'] === 'EUR') {
                euro = (+elem['sale']).toFixed(2);
            }
        });
        currenciesUsd.innerHTML = usd;
        currenciesEuro.innerHTML = euro;
    }

    function setTemp(obj) {
        temperatureItem.innerHTML = `${Math.round(obj['main']['temp'] - 273.15)}`;
    }

    /*send PRIVAT*/
    xhr.send({
        method: 'GET',
        url: 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5',
        data: ''
    })
        .then(function (results) {
            if (results.status !== 200) {
                throw new Error('request failed');
            }
            setUsd(results.responseText);
            /*send GEO*/
            xhr.send({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather?lat=50.4546600&lon=30.5238000&APPID=eb8183acf2cb85c1351fe1826283fc36',
                data: ''
            })
                .then(function (geos) {
                    if (geos.status !== 200) {
                        throw new Error('request failed');
                    }
                    setTemp(geos.responseText);
                })
                .catch(function (e) {
                    console.error('XHR error');
                });
        })
        .catch(function (e) {
            console.error('XHR error');
        });

};