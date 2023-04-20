import { React, } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import MyApp from './Components/MyApp';
import SignUp from './Components/Signup';
import ProductCatalogue from './Components/ProductCatalogue';
import SignUp2 from './Components/Signup2';
import SignUp3 from './Components/Signup3';
import TopSellingP from './Components/TopSellingP';
import Cards from './Components/Cards';


const App = ({ dark }) => {

  return (
    <>
      <div >
        {

          <div>
            <div className="App" >
              {/* <Dashboard /> */}
              {/* <MyApp />  */}
              {/* <SignUp /> */}
             {/* <ProductCatalogue />  */}
            {/* <SignUp2 /> */}
            {/* <SignUp3 /> */}
            {/* <TopSellingP /> */}
            <Cards />
            </div>
          </div>

        }
      </div>
    </>
  );
}

export default App;
