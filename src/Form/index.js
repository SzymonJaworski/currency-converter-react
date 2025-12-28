import React, { useState } from 'react';
import "./style.css";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState(null);

    const rates = {
        EUR: 4.2274,
        USD: 3.6376,
        GBP: 4.7854,
        CHF: 4.5918,
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const score = amount / rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: score,
            currency,
        });
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <p>
                <label>
                    <span className="form__labelText">Kwota(PLN)*</span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        className="form__field"
                        type="number"
                        placeholder="Wprowadź kwotę"
                        required
                        step="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">Wybierz walutę</span>
                    <select
                        className="form__field"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        <option value="EUR">EUR - Unia Europejska</option>
                        <option value="USD">USD - USA</option>
                        <option value="GBP">GBP - W.Brytania</option>
                        <option value="CHF">CHF - Szwajcaria</option>
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Sprawdź kurs wymiany</button>
            </p>
            { }
            <p className="form__score">
                {result && (
                    <>
                        {result.sourceAmount.toFixed(2)} PLN = {" "}
                        <strong>{result.targetAmount.toFixed(2)} {result.currency}</strong>
                    </>
                )}
            </p>
        </form>
    );
};

export default Form;