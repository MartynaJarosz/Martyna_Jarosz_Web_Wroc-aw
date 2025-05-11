import { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../App";
import { Product } from "../../model/product.model";


export function Cart() {
    const productFromContext = useContext(ProductsContext);
    const [sum, setSum] = useState(0);
    // const productsSum = () => {
    //     let sum = 0;

    //     for( let i =0; i<productFromContext.length; i++ ){
    //         sum += productFromContext[i].price.main + productFromContext[i].price.fractional/100;
    //     }
    // }

    useEffect(() => {
        let sum = 0;

        for( let i =0; i<productFromContext.length; i++ ){
            sum += productFromContext[i].price.main + productFromContext[i].price.fractional/100;
        }
        setSum(sum);
    }, [productFromContext])
    
    return(
        <div className="cart-container">
            {
                productFromContext.map((product: Product) => {
                    return (
                        <div>
                            <div style={{ width: '18rem', margin: '2em 1em', border: '1px black solid', padding: '4px'}  }>
                                {product.name}  {product.price.main},{product.price.fractional}zł  
                            </div>
                        </div>
                    )
                })
            }
                
            <Button className="list-btn" variant="primary" style={{ margin: '5px'}}>
                <Link to={'/'}><span className='white-text'>Powrót do listy produktów</span></Link>
            </Button>
            <span>text</span>
            <Button className="summary-btn" variant="primary" style={{ margin: '5px'}}>
                <Link to={'cart'}><span className='white-text'>Podsumowanie zamówienia</span></Link>
            </Button>
            Suma: {sum}
        </div>
    )
}