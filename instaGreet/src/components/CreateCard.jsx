import { useState } from "react";
import axios from 'axios'
import Card from './Card'
import { useNavigate } from 'react-router-dom'


const CreateCard = ({token}) => {
    const [form, setForm] = useState({
        front_text:'',
        back_text:'',
        background_color:'',
})
const navigate = useNavigate()

// add .lowercase
const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.id]: e.target.value,
    })
}
const handleSubmit = (e) => {
    console.log(token)
    e.preventDefault();
    axios.post('https://social-cards.fly.dev/api/cards/',
    {...form,},
    {
        headers: {
            Authorization: `Token ${token}`
        }
    }
    )
    // .then(() => {
    //     navigate('/')
    // })
}

    return(
        <>
            <p>This is the Create Card Page</p>
            <form method="post" onSubmit={handleSubmit}>
                <label> Front of Card:<input id="front_text" value={form.front_text} onChange={handleChange} /></label>
                <label> Inside of Card:<input id="back_text" value={form.back_text} onChange={handleChange}/></label>
                <label htmlFor="background_color">Color Picker:</label>
                <input type="color" id="background_color" value={"#ffffff"} onChange={handleChange}/>
                {/* <label> Background color:
                    <select id="background_color" name="selectedBackgroundColor" onChange={handleChange}>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                </label> */}
                <label>Background Image:<input id="imageURL" value={form.imageURL} onChange={handleChange}/>
                </label>
                <label>Font:
                    <select id="font" onChange={handleChange}>
                        <option></option>
                        <option></option>
                        <option></option>
                    </select>
                </label>
                <button type="submit">Post!</button>
            </form>
            <Card 
            front_text={form.front_text}
            back_text={form.back_text}
            background_color={form.background_color}/>
            
        </>
    )
}

export default CreateCard