import React from 'react'

const ListGroup = (props) => {
    const { items, onItemSelected, selectItem } = props;
    return (
        <ul className="list-group">
            {
                items.map(item => {
                    return <li key={item._id}
                        className={selectItem === item ? "list-group-item text-center active" : "list-group-item text-center"}
                        onClick={() => onItemSelected(item)}>{item.name}</li>
                })
            }
        </ul>
    )
}

export default ListGroup;
