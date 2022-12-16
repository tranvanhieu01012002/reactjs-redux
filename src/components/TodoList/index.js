import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch,useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import {v4 as uuidv4} from "uuid";
import { useState } from 'react';
import { searchTextSelector, todoListSelector } from '../../redux/selectors';
export default function TodoList() {
    const [toDoName,setToDoName] = useState("");
    const [priority,setPriority] = useState("Medium")
    const dispatch = useDispatch();
    const handleInputChange = (e) =>{
        setToDoName(e.target.value)
    }
    const handlePriority = (value)=>{
        setPriority(value);
    }
    const handleClickAdd = ()=>{
        dispatch(addTodo({
            name: toDoName,
            id: uuidv4(),
            priority:priority
        }))
        setPriority("Medium");
        setToDoName("");
    }

    const todoList = useSelector(todoListSelector);
    const searchText = useSelector(searchTextSelector);
    console.log(searchText);

    return (
        <Row style={{ height: 'calc(100% - 40px)' }}>
            <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
                {todoList.map((toDo)=><Todo key={toDo.id} name={toDo.name} prioriry={toDo.priority} />)}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: 'flex' }} compact>
                    <Input value={toDoName} onChange={handleInputChange}/>
                    <Select onChange={handlePriority} defaultValue={priority}>
                        <Select.Option value='High' label='High'>
                            <Tag color='red'>High</Tag>
                        </Select.Option>
                        <Select.Option value='Medium' label='Medium'>
                            <Tag color='blue'>Medium</Tag>
                        </Select.Option>
                        <Select.Option value='Low' label='Low'>
                            <Tag color='gray'>Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button onClick={handleClickAdd} type='primary'>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
