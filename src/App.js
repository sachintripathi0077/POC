import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import CreateChoice from "./Components/CreateChoice";
import BlankForm from "./Components/BlankForm";
import FeedbackTemplate from "./Components/FeedbackTemplate";
import PreviewScreen from "./Components/PreviewScreen";
import store from "./Redux/store";
import SuccessResponse from './Components/SuccessResponse'
import Responses from "./Components/Responses";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Nav />
      
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  exact path="createChoice" element={<CreateChoice/>} />
          <Route exact path = 'createBlank' element={<BlankForm/>} />
          <Route exact path = 'feedbackTemplate' element={<FeedbackTemplate/>} />
          <Route exact path= '/preview' element={<PreviewScreen/>} />
          <Route exact path = 'successResponse' element={<SuccessResponse/>}/>
          <Route exact path = 'responses' element={<Responses/>}/>

          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
      
    </div>
     </Provider>
  );
}

export default App;
