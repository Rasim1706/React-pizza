import React, { useState } from 'react'


const Categories = React.memo(function Categories({ items, onClickItem }) {
    const [activeItem, setActiveItem] = useState(null)

    const SelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''} onClick={() => SelectItem(null)}>Все</li>
                {
                    items && items.map((item, index) => <li className={activeItem === index ? 'active' : ''}
                        onClick={() => SelectItem(index)}
                        key={`${item}_${index}`}>{item}</li>)
                }
            </ul>
        </div>
    )
}
)
export default Categories
