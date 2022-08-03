import React, { useState } from "react";
import axios from "axios";




const Home = () => {
  const [users, setUser] = useState([]);
  const [search,setSearch]=useState([])

  React.useEffect(() => {
    axios.get("https://restcountries.com/v2/all")
    .then((response) => {
      setUser(response.data);
      for (let i in response.data)
     { 
      localStorage.setItem('name', JSON.stringify(response.data[i].name));
      localStorage.setItem('capital', JSON.stringify(response.data[i].capital));
      localStorage.setItem('currency', JSON.stringify(response.data[i].currencies));

     }
    });
}, []);
 
  if (!users) return null;
  console.log(users[0]);

  return (
    <div className="container">
    <p>devyadav3001@gmail.com</p>
      <div className="py-4">
      <input placeholder='search by name,capital or role' style={{width:'90%'}} onChange={(e)=>setSearch(e.target.value)}/>
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
           
              <th scope="col">Name</th>
              <th scope="col">Capital</th>
              <th scope="col">Currency</th>
           
            </tr>
          </thead>
          <tbody>
            {users.filter((items)=>{
              if (search=="")
              {
                  return items
              }
              else if(items.name.toLowerCase().includes(search.toLowerCase()) 
              || items.capital.toLowerCase().includes(search.toLowerCase()) ){
                      return items
              }
          }).map((user, index) => (
              <tr>
           
                <td>{user.name}</td>
                <td>{user.capital}</td>
                <td>can't find currency data</td>  
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
