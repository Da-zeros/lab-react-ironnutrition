import React from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import {Input, Search} from 'antd';

const AddFoodForm = ({funct}) => {
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        image: Yup.string().required(),
        calories: Yup.number().required(),
        servings: Yup.number().required()
    })

    const {handleSubmit, handleChange, values, errors} = useFormik({
        
        initialValues:{
            name:"",
            image:"",
            calories:0,
            servings:0
        },

        validationSchema,
        onSubmit(values){
            funct(values)
        }
    })

    return (
        <>
        <h3>Add Food Entry</h3>
        <form onSubmit={handleSubmit}>
            <div
            style={{ display: "flex", flexDirection: "column", padding: "50px" }}
            >
            <label htmlFor="">Name</label>
            <Input
                name="name"
                onChange={handleChange}
                value={values.name}
                placeholder="name"
            />
            {errors.name ? errors.name : null}
            <label htmlFor="">image</label>
            <Input
                name="image"
                onChange={handleChange}
                value={values.image}
                placeholder="image"
            />
            {errors.image ? errors.image : null}
            <label htmlFor="">Calories</label>
            <Input type="number"
                name="calories"
                onChange={handleChange}
                value={values.calories}
                placeholder="calories"
            />
            {errors.calories ? errors.calories : null}
            <label htmlFor="">Servings</label>
            <Input type="number"
                name="servings"
                onChange={handleChange}
                value={values.servings}
                placeholder="servings"
            />
            {errors.age ? errors.servings : null}
            <button type="submit">Submit</button>
            </div>
      </form>
      </>
  )
}

export default AddFoodForm