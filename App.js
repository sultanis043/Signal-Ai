import './App.css';
import HomePage from './home/HomePage';
import SideNav from './navigation/SideNav';
import TopNav from './navigation/TopNav';

function App() {
  return (
    <div className="App">
      <div className="siNavigationTop">
        <TopNav />
      </div>
      <div className="siNavigationSide">
        <SideNav />
      </div>
      <div className='siHomeTitle'>
        Home
      </div>
      <div className='siFatal'>
        <div className='siFatal-Fcontainer'>
          <div className='siFatal-F'>
            F
          </div>
        </div>
        <div className='siFatal-Fatal'>
          FATAL
        </div>
      </div>
      <div className='siDme'>
        <div className='siDme-Dcontainer'>
          <div className='siDme-D'>
            D
          </div>
        </div>
        <div className='siDme-Dme'>

          DME 31

        </div>
      </div>
      <div className='siTime'>
        <div className='siTime-Tcontainer'>
          <div className='siTime-T'>
            T
          </div>
        </div>
        <div className='siTime-Time'>
          Time 0
        </div>
      </div>
      <div className='siInter'>
        <div className='siInter-Icontainer'>
          <div className='siInter-I'>
            I
          </div>
        </div>
        <div className='siInter-Inter'>
          Interaction 360
        </div>
      </div>
      <div className="siHomepage">
        <HomePage />
      </div>
    </div>
  );
}

export default App;

