import './App.css';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ProjectDisplay from './pages/ProjectDisplay'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ="/" element = {<Root/>}>
        <Route index element={<Home/>} />
        
        <Route path ="/projects" index element={<Projects/>} />
        <Route path ="/experience"  element = {<Experience/>} />
        <Route path ="/contact" index element ={<Contact/>} />
        <Route path ="/projects/:id" index element = {<ProjectDisplay/>} />
      </Route>
      
    )
  )

  return (
    <div className="App">
      
        <RouterProvider router={router}/>
      
    </div>
  );
}

const Root = () => {
  return (
  <>
  <div>
    <Navbar/>
  </div>
  <div>
    <Outlet/>
  </div>
  <div>
    <Footer/>
  </div>
  </>
  )
}

export default App;
