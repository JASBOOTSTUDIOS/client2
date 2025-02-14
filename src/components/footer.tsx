"use client"
import "./footer.css";


import { useEffect, useState } from "react";

export default function Footer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://server2-o3im.onrender.com/") // Reemplaza con la URL de tu API
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al obtener los datos:", error));
  }, []);

  if (!data) return <p>Cargando...</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}


// export default function Footer(){
//     return (
//         <>
//         <div className="main-footer">
//             <h3 className="txt-main">Este es el footer</h3>
//         </div>
//         </>
//     )
// }