import { useState } from 'react';
import axios from 'axios';

function About() {
   const [info, setInfo] = useState(null);

   const fetchInfo = async () => {
      try {
         const response = await axios.get('http://localhost:8080/testdata/all');
         console.log(response.data);
         setInfo(response.data);
      } catch (error) {
         console.error('Error fetching about information:', error);
      }
   };

   return (
      <div>
         <h2>About Us</h2>
         <button onClick={fetchInfo}>Load Info</button>
         {Array.isArray(info) && info.length > 0 && (
            <ul>
               {info.map((user) => (
                  <li key={user.sno}>
                     <strong>S.No:</strong> {user.sno} &nbsp;
                     <strong>Username:</strong> {user.username} &nbsp;
                     <strong>Password:</strong> {user.password}
                  </li>
               ))}
            </ul>
         )}
         {info && Array.isArray(info) && info.length === 0 && <p>No data found.</p>}
      </div>
   );
}

export default About;

