"use client";
import "./header.css";
// import { useEffect, useState } from "react";
export default function Header() {
  // const [data, setData]:any =  useState(null);

  // useEffect(() => {
  //   fetch("https://server2-o3im.onrender.com/") // Reemplaza con la URL de tu API
  //     .then((res) => res.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error al obtener los datos:", error));
  // }, []);
  // if (data) {
  //   return (
  //     <>
  //       <div className="container">
  //         {data.map((user:any) => (
  //           <div key={user.id}>
  //             <h1>
  //               <b>User Name:</b>
  //               {user.username}
  //             </h1>
  //             <p>
  //               <b>Email: </b>
  //               {user.email}
  //             </p>
  //           </div>
  //         ))}
  //       </div>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h1>Cargando datos...</h1>
  //     </>
  //   );
  // }
  return (
    <>
      <h1>Header</h1>
    </>
  );
}
