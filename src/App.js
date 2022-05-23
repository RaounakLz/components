
import './Style.css';

import FullName from './component/profile/FullName';
import Profilephoto from './component/profile/ProfilePhoto';

function App() {
  return (
    <div className="App" style={{display:'flex', flexDirection:"column",justifyContent:"center", alignItems:"center"}}>
     <Profilephoto/>
     <FullName/>
  
    </div>
  );
}

export default App;
