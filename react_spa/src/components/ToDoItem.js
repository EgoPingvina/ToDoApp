import { Component } from 'react';

class ToDoItem extends Component
{
    render()
    {
        const item = this.props.location.item;
        
        return <div>
            <h2>Просмотр конкретного элемента</h2>
            <p>Идентификатор {item.id}</p>
            <p>Имя {item.name}</p>
            <p>e-mail {item.email}</p>
            <p>Документ {item.document}</p>
            <p>Телефон {item.phone}</p>
        </div>;
    }
}

export default ToDoItem;