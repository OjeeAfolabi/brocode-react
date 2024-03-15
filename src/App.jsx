import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Fruit from "./components/Fruit.jsx";
import Cards from "./components/Cards.jsx";
import Button from "./components/Button.jsx";
import Student from "./components/Student.jsx";

function App() {
  return (
    <>
    <Header />
    <Footer/>
    <Fruit/>
    <Cards/>
    <Button/>
    <Student name="Spongebob" age={30}/>
    </>
 
  );

}

export default App;
