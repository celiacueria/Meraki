import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import db from '../../api/db.json'
import './Card.css';
import {Link} from 'react-router-dom';
function Trending() {
    const data = db.products;
  
    const randomIndex = Math.floor(Math.random() * (data.length - 3)); 
    const resultTrending = data.slice(randomIndex, randomIndex + 3); 
  
    return (
              <div className="cards">

        {resultTrending.map(product => {
          return (
            <div key={product.id} className="card">
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.location}
                </Card.Text>
               <Link to={`/advertisement/${product.id}`}><Button  className='btn-ad'>Quiero saber más</Button></Link>
              </Card.Body>
            </div>
          )
        })}
        </div>
    );
  }
  
  export default Trending;
  