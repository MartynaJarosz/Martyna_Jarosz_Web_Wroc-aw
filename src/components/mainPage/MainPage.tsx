import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './mainPage.css';
import data from '../../data/products.json';
import { Product } from '../../model/product.model';
import { useContext } from 'react';
import { ProductsContext } from '../../App';

interface MainPageProps {
    setMyProducts: (products: Product[]) => void;
}

export function MainPage({ setMyProducts }: MainPageProps) {
    const products: Product[] = JSON.parse(JSON.stringify(data));
    const productFromContext = useContext(ProductsContext);

    return(
        <div className='main-page-container'>
            {
                products.map((product: Product) => {
                    return (
                        <div>
                            <Card style={{ width: '18rem', margin: '2em 1em', border: '1px black solid', padding: '4px'}  }>
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text>
                                    {product.price.main},{product.price.fractional}zł
                                    </Card.Text>
                                    Ilość:
                                    <input type='number' name='quantity' min="1" max="10" value='0' style={{marginBottom: '5px'}}></input><br></br>
                                    <Button variant="primary" onClick={() => setMyProducts([...productFromContext, product])}>Dodaj do koszyka</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
            <Button variant="primary" style={{ margin: '5px'}}>
                <Link to={'cart'}><span className='white-text'>Przejdź do koszyka</span></Link>
            </Button>
        </div>
    )
}