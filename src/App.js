import Container from "./Container";
import Header from "./Header";
import Form from "./Form";

function App() {
  return (
    <Container>
      <Header title="Przelicznik walut" />
      <Form />
      <p className="form__info">
        według średniego kursu NBP z dn. 14.11.2025
      </p>
    </Container>
  );
}

export default App;