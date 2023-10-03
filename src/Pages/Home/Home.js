import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import styles from '../Home/Home.module.css'

import Search from '../../components/Search/Search'

import {Swiper, SwiperSlide} from 'swiper/react'

const Home = () => {

  let navigate = useNavigate();

  //requisição para as receitas da categoria "café da manhã"
  const urlBreakfast = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast";
  const [itemBreakfastCategory, setItemBreakfastCategory] = useState();

  useEffect(() => {

    fetch(urlBreakfast).then(res => res.json()).then(data => {

      console.log(data.meals);
      setItemBreakfastCategory(data.meals);

    })

  }, [urlBreakfast]);


  //requisição para as receitas da categoria "Acompanhamentos"
  const urlSide = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Side";
  const [itemSideCategory, setItemSideCategory] = useState();

  useEffect(() => {

    fetch(urlSide).then(res => res.json()).then(data => {

      console.log(data.meals);
      setItemSideCategory(data.meals);

    })

  }, [urlSide]);


  //requisição para as receitas da categoria "Diversos"
  const urlMiscellaneous = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous";
  const [itemMiscellaneousCategory, setItemMiscellaneousCategory] = useState();

  useEffect(() => {

    fetch(urlMiscellaneous).then(res => res.json()).then(data => {

      console.log(data.meals);
      setItemMiscellaneousCategory(data.meals);

    })

  }, [urlMiscellaneous]);


  //requisição para as receitas da categoria "sobremesa"
  const urlDessert = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert";
  const [itemDessertCategory, setItemDessertCategory] = useState();

  useEffect(() => {

    fetch(urlDessert).then(res => res.json()).then(data => {

      console.log(data.meals);
      setItemDessertCategory(data.meals);

    })

  }, [urlDessert]);


  //requisição para as receitas da categoria "massas"
  const urlPasta = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta";
  const [itemPastaCategory, setItemPastaCategory] = useState();

  useEffect(() => {

    fetch(urlPasta).then(res => res.json()).then(data => {

      console.log(data.meals);
      setItemPastaCategory(data.meals);

    })

  }, [urlPasta]);



  //requisição para as receitas da categoria "frutos do mar"
  const urlSeaFood = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
  const [itemSeafoodCategory, setItemSeafoodCategory] = useState();

  useEffect(() => {

    fetch(urlSeaFood).then(res => res.json()).then(data => {

      console.log(data.meals);
      setItemSeafoodCategory(data.meals);

    })

  }, [urlSeaFood]);

  //requisição para as receitas da categoria "Vegetariano"
  const urlVegetarian = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";
  const [itemVegetarianCategory, setItemVegetarianCategory] = useState();

  useEffect(() => {

    fetch(urlVegetarian).then(res => res.json()).then(data => {

      console.log(data.meals);
      setItemVegetarianCategory(data.meals);

    })

  }, [urlVegetarian]);


  return (
    <div className={styles.home}>
      <Search/>
      <p className={styles.quote}>" Cooking is an art that involves all the senses. It is the union of flavors, aromas, textures and love. "</p>
      <h1><span className={styles.titleBorderCategory}>t</span> Breakfast</h1>
      <div className={styles.containerCards}>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={3}
            navigation={true}
            loop={true}
          >
            {itemBreakfastCategory ? itemBreakfastCategory.map( (item) => (
              <SwiperSlide key={item.idMeal}>
                <div className={styles.recipeItem}>
                  <div><img src={item.strMealThumb} alt={item.strMeal} /></div>
                  <h3>{item.strMeal}</h3>
                  <button className='btn-recipes' onClick={() => navigate(`/recipeInfo/${item.idMeal}`)}>See Recipe</button>
                </div>
              </SwiperSlide>
            )) : 'Wait a moment. . .'}
          </Swiper>
      </div>

      <h1><span className={styles.titleBorderCategory}>t</span> Side</h1>
      <div className={styles.containerCards}>
        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={3}
                navigation={true}
                loop={true}
              >
                {itemSideCategory ? itemSideCategory.map( (item) => (
                  <SwiperSlide key={item.idMeal}>
                    <div className={styles.recipeItem}>
                      <div><img src={item.strMealThumb} alt={item.strMeal} /></div>
                      <h3>{item.strMeal}</h3>
                      <button className='btn-recipes' onClick={() => navigate(`/recipeInfo/${item.idMeal}`)}>See Recipe</button>
                    </div>
                  </SwiperSlide>
                )) : 'Wait a moment. . .'}
          </Swiper>
      </div>

      <h1><span className={styles.titleBorderCategory}>t</span> Miscellaneous</h1>
      <div className={styles.containerCards}>
        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={3}
                navigation={true}
                loop={true}
              >
                {itemMiscellaneousCategory ? itemMiscellaneousCategory.map( (item) => (
                  <SwiperSlide key={item.idMeal}>
                    <div className={styles.recipeItem}>
                      <div><img src={item.strMealThumb} alt={item.strMeal} /></div>
                      <h3>{item.strMeal}</h3>
                      <button className='btn-recipes' onClick={() => navigate(`/recipeInfo/${item.idMeal}`)}>See Recipe</button>
                    </div>
                  </SwiperSlide>
                )) : 'Wait a moment. . .'}
          </Swiper>
      </div>

      <h1><span className={styles.titleBorderCategory}>t</span> Dessert</h1>
      <div className={styles.containerCards}>
        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={3}
                navigation={true}
                loop={true}
              >
                {itemDessertCategory ? itemDessertCategory.map( (item) => (
                  <SwiperSlide key={item.idMeal}>
                    <div className={styles.recipeItem}>
                      <div><img src={item.strMealThumb} alt={item.strMeal} /></div>
                      <h3>{item.strMeal}</h3>
                      <button className='btn-recipes' onClick={() => navigate(`/recipeInfo/${item.idMeal}`)}>See Recipe</button>
                    </div>
                  </SwiperSlide>
                )) : 'Wait a moment. . .'}
          </Swiper>
      </div>

      <h1><span className={styles.titleBorderCategory}>t</span> Pasta</h1>
      <div className={styles.containerCards}>
        <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={3}
                navigation={true}
                loop={true}
              >
                {itemPastaCategory ? itemPastaCategory.map( (item) => (
                  <SwiperSlide key={item.idMeal}>
                    <div className={styles.recipeItem}>
                      <div><img src={item.strMealThumb} alt={item.strMeal} /></div>
                      <h3>{item.strMeal}</h3>
                      <button className='btn-recipes' onClick={() => navigate(`/recipeInfo/${item.idMeal}`)}>See Recipe</button>
                    </div>
                  </SwiperSlide>
                )) : 'Wait a moment. . .'}
          </Swiper>
      </div>

      <h1><span className={styles.titleBorderCategory}>t</span> Seafood</h1>
      <div className={styles.containerCards}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={3}
          navigation={true}
          loop={true}
        >
          {itemSeafoodCategory ? itemSeafoodCategory.map( (item) => (
            <SwiperSlide key={item.idMeal}>
              <div className={styles.recipeItem}>
                <div><img src={item.strMealThumb} alt={item.strMeal} /></div>
                <h3>{item.strMeal}</h3>
                <button className='btn-recipes' onClick={() => navigate(`/recipeInfo/${item.idMeal}`)}>See Recipe</button>
              </div>
            </SwiperSlide>
          )) : 'Wait a moment. . .'}
        </Swiper>
      </div>

      <h1><span className={styles.titleBorderCategory}>t</span> Vegetarian</h1>
      <div className={styles.containerCards}>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            slidesPerView={3}
            navigation={true}
            loop={true}
          >
            {itemVegetarianCategory ? itemVegetarianCategory.map( (item) => (
              <SwiperSlide key={item.idMeal}>
                <div className={styles.recipeItem}>
                  <div><img src={item.strMealThumb} alt={item.strMeal} /></div>
                  <h3>{item.strMeal}</h3>
                  <button className='btn-recipes' onClick={() => navigate(`/recipeInfo/${item.idMeal}`)}>See Recipe</button>
                </div>
              </SwiperSlide>
            )) : 'Wait a moment. . .'}
          </Swiper>
      </div>

    </div>
  )
}

export default Home