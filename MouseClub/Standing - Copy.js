// import React from 'react';
// import './Style.css';

// const Standing = () => {
//     const data = [
//         {id: 1,  name: "Mouse City", M:3, W:3, D:0, L:0, P:6},
//         {id: 2, name: "Manchester City", M:3, W:2, D:1, L:0, P:4},
//         {id: 3, name: "Barcelona", M:3, W:1, D:2, L:1, P:3},
//         {id: 4, name: "Bayer Munchen", M:3, W:0, D:3, L:0, P:3},
//     ];
//   return (
//     <div>
//       <table>
//         <thead>
//             <th>NO</th>
//             <th>Name</th>
//             <th>Match</th>
//             <th>Win</th>
//             <th>Draw</th>
//             <th>Loose</th>
//             <th>Point</th>
//         </thead>
//         <tbody>
//             {data.map(row => (
//                 <tr key={row.id}>
//                     <td>{row.id}</td>
//                     <td>{row.name}</td>
//                     <td>{row.M}</td>
//                     <td>{row.W}</td>
//                     <td>{row.D}</td>
//                     <td>{row.L}</td>
//                     <td>{row.P}</td>
//                 </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>
//   )
// };

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// const Standing = () => {
//   const [standing, setStanding] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8000/api/standing/')
//       .then(response => {
//         setStanding(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error while fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>Team</th>
//             <th>Draw</th>
//             <th>Win</th>
//             <th>Lose</th>
//             <th>Points</th>
//           </tr>
//         </thead>
//         <tbody>
//           {standing.map(row => (
//             <tr key={row.id}>
//               <td>{row.team.name}</td>
//               <td>{row.draw}</td>
//               <td>{row.win}</td>
//               <td>{row.lose}</td>
//               <td>{row.points}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Standing;\

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Standing = () => {
  const [standing, setStanding] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/standing/')
      .then(response => {
        setStanding(response.data);
      })
      .catch(error => {
        console.error('There was an error while fetching data:', error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Draw</th>
            <th>Win</th>
            <th>Lose</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {standing.map(row => (
            <tr key={row.id}>
              <td>{row.team.name}</td>
              <td>{row.draw}</td>
              <td>{row.win}</td>
              <td>{row.loose}</td>
              <td>{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Standing;


