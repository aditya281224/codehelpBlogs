import { createContext, useState } from "react";
export const AppContext= createContext();



export default function AppContextProvider({children}){
  const [loading,setLoading]=useState(false);

  const [posts,setPosts] = useState([]);

  const [page,setPage]=useState(1);
  const [totalPages,setTotalPages]=useState(null) 


  const fetchData = async (page=1) => {
    setLoading(true);
    let url=`${process.env.REACT_APP_baseURL}?page=${page}`;
    try{
      const result=await fetch(url);
      const data= await result.json();
      
      setPage(data.page)
      setTotalPages(data.totalPages)
      setPosts(data.posts)
    }
    catch(error){
      console.log("Error in fetching data");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false)
  }


  function PageChange(page){
    setPage(page);
    fetchData(page)
  }


  const value={
    loading,setLoading,posts,setPosts,page,setPage,totalPages,setTotalPages,PageChange,fetchData
  };


  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>


}










