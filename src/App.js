
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import About from './components/About';
// this is my component and we can also add many components to it similar like this.
function App() {
  return (
    <>
   <Navbar title="TextUtils" about="About"/>
   <div className="container my-3">
    <TextForms headings="Enter the text to analyze" />
    {/* <About/> */}
    </div>
   
    </>
  )
}

// everything under this is a jsx
export default App;
