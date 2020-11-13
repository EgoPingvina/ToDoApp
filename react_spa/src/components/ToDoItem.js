import { Component } from 'react';
import { Button } from 'reactstrap';

class ToDoItem extends Component
{
    render()
    {
        const item = this.props.location.item;
        
        return <div>
            <Button color="secondary" onClick={this.props.history.goBack}>Назад</Button>
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