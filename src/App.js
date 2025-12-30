import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Clock from "./Clock";

function App() {
  return (
    <Container>
      <main>
        <Clock /> { }
        <Header title="Przelicznik walut" />
        <Form />
        <p className="form__info">
          według średniego kursu NBP z dn. 14.11.2025
        </p>
      </main>
    </Container>
  );
}

export default App;