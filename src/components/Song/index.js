import './style.css';
import { Link } from 'react-router-dom';

const Song = ({song,onAdd}) => {
    const {id, title,album, duration, thumb } = song;
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);


    return(
        <article key={id}> 
            <img src={thumb} alt={title}/>
            <div>
                <Link to={`/song`} state={{id:song.id}} className="song-link">
                    {title} 
                </Link>
               
                <p> {album}</p>
                <i>{`${minutes}:${seconds.toString().padStart(2, '0')} min`}</i>
                <svg onClick={() => onAdd(song)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F0DB4F" className="icon icon-tabler icons-tabler-filled icon-tabler-copy-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.333 6a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667v-8.666a3.667 3.667 0 0 1 3.667 -3.667zm-4.333 4a1 1 0 0 0 -1 1v2h-2a1 1 0 0 0 -.993 .883l-.007 .117a1 1 0 0 0 1 1h2v2a1 1 0 0 0 .883 .993l.117 .007a1 1 0 0 0 1 -1v-2h2a1 1 0 0 0 .993 -.883l.007 -.117a1 1 0 0 0 -1 -1h-2v-2a1 1 0 0 0 -.883 -.993zm1 -8c1.094 0 1.828 .533 2.374 1.514a1 1 0 1 1 -1.748 .972c-.221 -.398 -.342 -.486 -.626 -.486h-10c-.548 0 -1 .452 -1 1v9.998c0 .32 .154 .618 .407 .805l.1 .065a1 1 0 1 1 -.99 1.738a3 3 0 0 1 -1.517 -2.606v-10c0 -1.652 1.348 -3 3 -3z" /></svg>
            </div>
        </article>
    )
}
export default Song;
