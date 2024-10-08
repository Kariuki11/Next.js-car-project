export async function fetchCars() {
    const headers = {
            'x-rapidapi-key': 'f708da4cb0mshe1793a72de5706cp10326cjsn489060721eed',
            'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
        }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}

