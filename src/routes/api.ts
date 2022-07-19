const BASED_URL = `https://api.coinpaprika.com/v1`

export function fetchCoins () {
  return fetch(`${BASED_URL}/coins`).then((respones) => respones.json()
  );
}

export function fetchCoinInfo(coinId: string|undefined){
  return fetch(`${BASED_URL}/coins/${coinId}`).then((respones) => respones.json()
  );
}

export function fetchCoinTickers(coinId: string|undefined){
  return fetch(`${BASED_URL}/tickers/${coinId}`).then((respones) => respones.json()
  );
}

export function fetchCoinHistory(coinId:string){
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60*60*23*7*1;
  console.log(coinId)
  return fetch(`https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}&start=${startDate}&end=${endDate}`).then((response) => response.json()
  );
}