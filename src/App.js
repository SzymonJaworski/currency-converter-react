import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Clock from "./Clock";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <main>
          <Clock /> { }
          <Header title="Przelicznik walut" />
          <Form />
        </main>
      </Container>
    </>
  );
}

export default App;