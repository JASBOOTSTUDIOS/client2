import "./mainContent.css";
export default function MainContent(){
    let sculpture = {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4HCdGBg42LZfHLETIYKNHEidoeW3KuHZp4Q&s",alt:"Mi Imagen"}
return (<>
<div className="mainContainer">
        <img src={sculpture.url} alt={sculpture.alt}/>      
        <img src={sculpture.url} alt={sculpture.alt}/>
        <img src={sculpture.url} alt={sculpture.alt}/>
        <img src={sculpture.url} alt={sculpture.alt}/>
        <img src={sculpture.url} alt={sculpture.alt}/>
        <img src={sculpture.url} alt={sculpture.alt}/>
        <img src={sculpture.url} alt={sculpture.alt}/>
        <img src={sculpture.url} alt={sculpture.alt}/>
        <img src={sculpture.url} alt={sculpture.alt}/>
    
</div>
</>)
}