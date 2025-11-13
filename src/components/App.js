import '../../src/style.css';
import  Header  from './Header';
import SearchResults from './SearchResults';
import { useState, useEffect } from 'react';
import Library from './Library';


function App() {
  const [songs,setSongs] = useState([]);
  const [library,setLibrary] = useState([]);
  useEffect( () => {
        const fetchSongs = async () =>{
            const response = [
                {id:1,img:'http://is3.mzstatic.com/image/thumb/Music49/v4/ba/86/99/ba86993e-b874-8bd4-5372-05c9f3631084/source/600x600bb.jpg', title:'Es Épico', author:'Canserbero', duration:'5:37'},
                {id:2,img:'http://is3.mzstatic.com/image/thumb/Music49/v4/ba/86/99/ba86993e-b874-8bd4-5372-05c9f3631084/source/600x600bb.jpg',  title:'Jeremías 17:5', author:'Canserbero', duration:'4:52'},
                {id:3,img:'http://is3.mzstatic.com/image/thumb/Music49/v4/ba/86/99/ba86993e-b874-8bd4-5372-05c9f3631084/source/600x600bb.jpg',  title:'Maquiavélico', author:'Canserbero', duration:'4:45'},
                {id:4,img:'http://is3.mzstatic.com/image/thumb/Music49/v4/ba/86/99/ba86993e-b874-8bd4-5372-05c9f3631084/source/600x600bb.jpg',  title:'Pensando en Ti', author:'Canserbero', duration:'5:11'},
                {id:5,img:'http://is3.mzstatic.com/image/thumb/Music49/v4/ba/86/99/ba86993e-b874-8bd4-5372-05c9f3631084/source/600x600bb.jpg',  title:'C’est la Mort', author:'Canserbero', duration:'4:26'},
                {id:6,img:'https://i.ytimg.com/vi/SjYNuG9Njr4/hqdefault.jpg', title:'Stilo Libre', author:'Rxnde Akozta', duration:'3:58'},
                {id:7,img:'https://i.ytimg.com/vi/SjYNuG9Njr4/hqdefault.jpg', title:'Versos de Asfalto', author:'Rxnde Akozta', duration:'4:32'},
                {id:8,img:'https://i.ytimg.com/vi/SjYNuG9Njr4/hqdefault.jpg', title:'Cenizas', author:'Rxnde Akozta', duration:'4:05'},
                {id:9,img:'https://i.ytimg.com/vi/SjYNuG9Njr4/hqdefault.jpg', title:'Donde Nadie Llega', author:'Rxnde Akozta', duration:'5:10'},
                {id:10,img:'https://i.ytimg.com/vi/SjYNuG9Njr4/hqdefault.jpg', title:'Poesía Urbana', author:'Rxnde Akozta', duration:'4:47'},
                {id:11,img:'https://www.buenamusica.com/media/fotos/discos/a/apache/apache_en-defensa-propia.jpg', title:'Esto Es Rap', author:'Apache', duration:'4:21'},
                {id:12,img:'https://www.buenamusica.com/media/fotos/discos/a/apache/apache_en-defensa-propia.jpg', title:'Por el Dinero', author:'Apache', duration:'3:55'},
                {id:13,img:'https://www.buenamusica.com/media/fotos/discos/a/apache/apache_en-defensa-propia.jpg', title:'En Boca de Todos', author:'Apache', duration:'4:03'},
                {id:14,img:'https://www.buenamusica.com/media/fotos/discos/a/apache/apache_en-defensa-propia.jpg', title:'Ready Pa Morir', author:'Apache', duration:'4:42'},
                {id:15,img:'https://www.buenamusica.com/media/fotos/discos/a/apache/apache_en-defensa-propia.jpg', title:'Rompiendo Fronteras', author:'Apache', duration:'5:16'},
                {id:16,img:'http://is3.mzstatic.com/image/thumb/Music49/v4/ba/86/99/ba86993e-b874-8bd4-5372-05c9f3631084/source/600x600bb.jpg',  title:'De la Vida Como una Película', author:'Canserbero', duration:'6:14'},
                {id:17,img:'http://is3.mzstatic.com/image/thumb/Music49/v4/ba/86/99/ba86993e-b874-8bd4-5372-05c9f3631084/source/600x600bb.jpg',  title:'Amor y Dolor', author:'Canserbero', duration:'4:36'},
                {id:18,img:'https://i.ytimg.com/vi/SjYNuG9Njr4/hqdefault.jpg', title:'Libre', author:'Rxnde Akozta', duration:'4:12'},
                {id:19,img:'https://www.buenamusica.com/media/fotos/discos/a/apache/apache_en-defensa-propia.jpg', title:'Fuego en el Mic', author:'Apache', duration:'3:59'},
                {id:20,img:'http://is3.mzstatic.com/image/thumb/Music49/v4/ba/86/99/ba86993e-b874-8bd4-5372-05c9f3631084/source/600x600bb.jpg',  title:'Pensamientos Oscuros', author:'Canserbero', duration:'5:28'}
            ];
            
            setSongs(response);
        };
        
        fetchSongs();

    },[]);

    useEffect(() => {
      if (library.length > 0) {
        console.log("Librería actualizada:", library);
      }
    }, [library]);

    const addToLibrary = (song) => {
    if (!library.some(item => item.id === song.id)) {
      setLibrary([...library, song]);
    } else {
      alert(`${song.title} ya está en tu librería.`);
    }
  };

  return (
    <div className='App'>
      <Header library={library}/>
      <main className="home">
        <Library library={library}/>
        <SearchResults songs={songs} addToLibrary={addToLibrary}/>
      </main>  
    </div>
  );
}

export default App;
