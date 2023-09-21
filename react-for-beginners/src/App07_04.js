import { useState, useEffect } from "react";

function App0704() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const [choice, setChoice] = useState("");

    const onChangeMoney = (event) => setMoney(event.target.value);
    const onChangeChoice = (event) => setChoice(event.target.value);

    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
        .then(response => response.json())
        .then(json => {
            setCoins(json);
            setLoading(false);
        });
    },[]);

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            
            <div>
                <input type="number" value={money} onChange={onChangeMoney} placeholder="Dollars..."/>
                <input type="number" placeholder="quotes..." value={money * choice} disabled/>
            </div>

            {loading ? (
                <strong>Loading...</strong>
                ) : (
                <select onChange={onChangeChoice} value={choice}>
                    <option key="">======== Choice =======</option>
                    {coins.map((coin) => (
                        <option key={coin.id} value={coin.quotes.USD.price}>
                            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                        </option>
                    ))}
                </select>
            )}

        </div>
    );
}

export default App0704;