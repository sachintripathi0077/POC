import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateChoice from "./Components/CreateChoice";
import BlankForm from "./Components/BlankForm";
import FeedbackTemplate from "./Components/FeedbackTemplate";


function App() {
  return (
    <div className="App">
      <Nav />
      
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  exact path="createChoice" element={<CreateChoice/>} />
          <Route exact path = 'createBlank' element={<BlankForm/>} />
          <Route exact path = 'feedbackTemplate' element={<FeedbackTemplate/>} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      
    </div>
  );
}

export default App;
