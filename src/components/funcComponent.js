import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';

export default function AddProduct() {
    // typeOfData [stateData, stateUpdateFunction] = useState(initialData)
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    // addproduct handler method
    const add = (event)=>{
        event.preventDefault();
        //console.log(event.target.product_name.value);
        // const formData = event.target;
        // const newProduct = {
        //     product_name: formData.product_name.value,
        //     price: formData.price.value,
        //     qty: formData.qty.value
        // }
        //console.log(formData.current)
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: formData.current.price.value,
            qty: Number(formData.current.qty.value)
        }
        //console.log(newProduct);
        // add a new product inside products array
        setProduct([...products,newProduct]);
        //console.log(products);
    }
    // increment qty value by 1
    const increQty = (event)=>{
        //console.log(event.target.value)
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProduct([...products])
    }
    // decrement qty value by 1
    const decreQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProduct([...products])
    }
    return (
        <div>
            
        </div>
    )
}