import {memo, useState} from "react"
import clsx from "clsx"
import axios from "axios"
// css and bootstrap
import styles from "./uploadFood.css"
import {Button, Form, Container, InputGroup} from "react-bootstrap"
import { serverURL } from "../config/config"

function FoodForm() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("Food")
    const [averageRating, setAverageRating] = useState(5)
    const [image, setImage] = useState({})

    const [validated, setValidated] = useState(false);
    async function handleSubmit(event)
    {
        const form = event.currentTarget;
        // const a = new FormData();
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        setValidated(true);
        const data = new FormData();
        data.append('title',title);
        data.append('price',price);
        data.append('category',category);
        data.append('averageRating',averageRating.toString());
        data.append('image',image.files[0]);
        try {
            const res = await axios.post(`${serverURL}/api/uploadFoods`, data, {
                withCredentials: true,
                headers: { 'Content-Type': 'multipart/form-data' }
            })
        }
        catch(e) {
            console.log(e);
        }
    }

    return (
        <>  
            <Container className={clsx("mt-5")} style={{minWidth:300, maxWidth:500}}>
                <div className={clsx("text-center",styles.topic)}>
                    New food
                </div>
                <section className={clsx("d-flex flex-column align-items-center p-3",styles.box)}>
                <Form className="w-100" onSubmit={(e)=>{e.preventDefault(); handleSubmit(e)}}>


                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control required type="text" placeholder="Enter your title" onChange={(e)=>{setTitle(e.target.value)}} />
                    </Form.Group>


                    <Form.Group className="position-relative mb-3">
                    <Form.Label>Category:</Form.Label>
                    <Form.Select required aria-label="Default select example" onChange={(e)=>{setCategory(e.target.value)}}>
                    <option value="Food">Food</option>
                    <option value="Drink">Drink</option>
                    </Form.Select>
                    </Form.Group>


                    <Form.Group className="position-relative mb-3">
                        <Form.Label>File</Form.Label>
                        <Form.Control
                        type="file"
                        required
                        name="file"
                        // @ts-ignore
                        onChange={(e)=>{setImage(()=>({files:e.target.files, img:URL.createObjectURL(e.target.files[0])}))}}
                        />
                    </Form.Group>
                    <fieldset className="starability-basic mb-3" onChange={(e)=>{setAverageRating(e.target.value)}}>
                    <legend>Rating:</legend>
                    <input type="radio" id="first-rate1" name="rating" value="1" />
                    <label htmlFor="first-rate1" title="Terrible">1 star</label>
                    <input type="radio" id="first-rate2" name="rating" value="2" />
                    <label htmlFor="first-rate2" title="Not good">2 stars</label>
                    <input type="radio" id="first-rate3" name="rating" value="3" />
                    <label htmlFor="first-rate3" title="Average">3 stars</label>
                    <input type="radio" id="first-rate4" name="rating" value="4" />
                    <label htmlFor="first-rate4" title="Very good">4 stars</label>
                    <input type="radio" id="first-rate5" name="rating" value="5" />
                    <label htmlFor="first-rate5" title="Amazing">5 stars</label>
                    </fieldset>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Price:</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control required type="number" aria-label="Amount (to the nearest dollar)" onChange={(e)=>{setPrice(e.target.value)}}/>
                        </InputGroup>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </section>

            </Container>
        </>
    )
}
export default memo(FoodForm)