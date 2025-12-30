import React, { useState } from 'react';
import { StyledForm, LabelText, Field, Button, Result } from "./styled";

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
        <StyledForm onSubmit={onFormSubmit}>
            <p>
                <label>
                    <LabelText>Kwota(PLN)*</LabelText>
                    <Field
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        type="number"
                        placeholder="Wprowadź kwotę"
                        required
                        step="0.01"
                    />
                </label>
            </p>
            <p>
                <label>
                    <LabelText>Wybierz walutę</LabelText>
                    <Field
                        as="select"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        <option value="EUR">EUR - Unia Europejska</option>
                        <option value="USD">USD - USA</option>
                        <option value="GBP">GBP - W.Brytania</option>
                        <option value="CHF">CHF - Szwajcaria</option>
                    </Field>
                </label>
            </p>
            <p>
                <Button>Sprawdź kurs wymiany</Button>
            </p>
            <Result>
                {result && (
                    <>
                        {result.sourceAmount.toFixed(2)} PLN = {" "}
                        <strong>{result.targetAmount.toFixed(2)} {result.currency}</strong>
                    </>
                )}
            </Result>
        </StyledForm>
    );
};

export default Form;