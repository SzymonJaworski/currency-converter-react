import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Clock from "./Clock";
import { GlobalStyle } from "./GlobalStyle";
import { Info } from "./Form/styled";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <main>
          <Clock /> { }
          <Header title="Przelicznik walut" />
          <Form />
          <Info>
            według średniego kursu NBP z dn. 14.11.2025
          </Info>
        </main>
      </Container>
    </>
  );
}

export default App;