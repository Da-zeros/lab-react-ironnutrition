import { Card, Button } from 'antd'
import React from 'react'

const FoodBox = ({food, delFunct}) => {
   
    const {name, calories, image, servings} = food
    console.log(food)
  return (
    
        <Card title={name} style={{ width: 300, margin:10, }}>
            <img src={image} width={200} alt=""/>
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <h3>Total Calories: {calories} kcal</h3>
            <Button onClick={(e)=>delFunct(name)} type="primary">Delete</Button >
        </Card>
        

  )
}

export default FoodBox