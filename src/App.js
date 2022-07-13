import logo from './logo.svg';
import './App.css';
import { Card, Row, Col, Divider, Input, Button } from 'antd';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/Search';

//https://www.recetasderechupete.com/wp-content/uploads/2021/02/Panqueques-768x504.jpg
//https://images.kglobalservices.com/www.kelloggs.es/es_es/recipe/recipe_1659669/1659671_omelet_de_jamn_con_queso.jpg

function App() {
  
  const [foodList, setFoodList] = useState(foods)
  const [foodListFil, setFoodListFil] = useState(foods)
  const [hidden, sethidden] = useState(true)

  const addFood = (values) =>{
    setFoodList([...foodList, values])
    setFoodListFil([...foodListFil, values])
  }

  const filterFood = (values) =>{
    let filterList = foodList.filter(food=>food.name.toLowerCase() 
    .includes(values.toLowerCase()))
    setFoodListFil(filterList)
  }

  const delButon = (name) =>{
    let listToDel = foodList.filter(food=>food.name != name)
    setFoodList(listToDel)
    
    let listToDel2 = foodListFil.filter(food=>food.name != name)
    setFoodListFil(listToDel2)
  }

  const switchHidden = ()=>{
    sethidden(!hidden)
  }

  return (
    <div className="App">
      {!hidden&& <AddFoodForm funct={addFood}/>}
      <button class="btnHide" onClick={switchHidden}>{!hidden?"Hide Form":"Add New Food"}</button>
      <SearchBar filterFunc={filterFood}/>
       <h1>Food List</h1>
       
       <Row justify="center">
            {foodList.length === 0 || foodListFil.length ===0? <h3>Ops! is no more content to show</h3>
            :
            foodListFil.map(({name, calories, image, servings},index) =>{
              return(
                <FoodBox key={index+name} 
                food={ {
                  name: name,
                  calories:calories,
                  image:image ,
                  servings:servings
                  }}
                delFunct={delButon}/>
              )
            })
            }
            
      </Row>
    </div>
  );
}

export default App;
