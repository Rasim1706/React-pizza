import React, { useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";

import { Categories, SortPopup, PizzasBlock } from "../components";

import { setCategory } from '../redux/action/filter'


const arrCategories = [
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
]

const sortItem = [
    { name: "популярности", type: 'popular' },
    { name: "цене", type: 'price' },
    { name: "алфавиту", type: 'alphabet' }
]

const Home = () => {

    const dispatch = useDispatch()

    const items = useSelector(({ pizzas }) => pizzas.items);

    const onClickItemHandler = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onClickItemHandler}
                    items={arrCategories}
                />
                <SortPopup items={sortItem}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map(obj => <PizzasBlock key={obj.id} {...obj} />)
                }

            </div>
        </div>
    )
}

export default Home
