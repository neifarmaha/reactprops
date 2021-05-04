import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Profile from './component/profile/Profile'

function App() {
  const handleClick = (name) => alert(name)
  const name="Maha"
  const profession ="Web developper" 
  const bio = "............."
  return (
    <div className="App">
      <Profile name={name} profession={profession} bio={bio} handleClick={handleClick}>
        <img src="https://pbs.twimg.com/profile_images/1118807558683230208/OOTToLbK.jpg" alt="" className=" pt-4 " 
        width={220}
        height={250}
        />
      </Profile>
    </div>
  );
}

export default App;
