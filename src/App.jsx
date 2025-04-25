import HomePage from './Pages/HomePage'
import SideBar from './components/SideBar';
import './App.css'
function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-200 flex flex-row">
      <SideBar />
      <div className="flex-1 p-4">
        <HomePage />
      </div>
    </div>
  )
}
export default App ;
