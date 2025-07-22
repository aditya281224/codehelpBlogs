import { useContext, useEffect } from 'react';
import './App.css';
import Blogs from './components/Blogs';
import Header from './components/Header';
import Pagination from './components/Pagination';
import { AppContext } from './context/AppContext';

function App() {

  const {fetchData}=useContext(AppContext);

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="App">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  );
}

export default App; 
 