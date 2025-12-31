import React, { useState } from 'react';
import { StyledForm, LabelText, Field, Button, Result, Loading, Failure, Info } from "./styled";
import { useRatesData } from "../useRatesData";

const Form = () => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState(null);

    const { rates, state, date } = useRatesData();

    const calculateResult = (amount, currency) => {
        const rate = rates[currency].value;
        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    if (state === "loading") {
        return (
            <StyledForm>
                <Loading>
                    Sekunda... Pobieram aktualne kursy walut z serwera. ⏳
                </Loading>
            </StyledForm>
        );
    }

    if (state === "error") {
        return (
            <StyledForm>
                <Failure>
                    Hmm... Coś poszło nie tak. Sprawdź połączenie z internetem. ❌
                </Failure>
            </StyledForm>
        );
    }

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
                        {Object.keys(rates).map((currencyShort) => (
                            <option key={currencyShort} value={currencyShort}>
                                {currencyShort}
                            </option>
                        ))}
                    </Field>
                </label>
            </p>
            <p>
                <Button>Przelicz</Button>
            </p>
            <Result>
                {result && (
                    <>
                        {result.sourceAmount.toFixed(2)} PLN = {" "}
                        <strong>{result.targetAmount.toFixed(2)} {result.currency}</strong>
                    </>
                )}
            </Result>
            <Info>
                Kursy walut pobierane są z serwisu currencyapi.com. <br />
                Aktualne na dzień: <strong>{new Date(date).toLocaleDateString("pl-PL")}</strong>
            </Info>
        </StyledForm>
    );
};

export default Form;