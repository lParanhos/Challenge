import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Tag from "../Tag";

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: "1.5rem",
    margin: `0 0 .1rem 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "white",

    display: `flex`,
    flexDirection: `column`,

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: `.1rem`,
    width: `35rem`
});

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [...props.todos]
        };
        this.onDragEnd = this.onDragEnd.bind(this);
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        const todos = reorder(
            this.state.todos,
            result.source.index,
            result.destination.index
        );

        this.state.todos = todos;

        this.props.onChangeOrder(this.state.todos);
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        const { todos } = this.state;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={getListStyle(snapshot.isDraggingOver)}>
                            {todos &&
                                todos.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps
                                                        .style,
                                                    item
                                                )}>
                                                {item.content}
                                                <Tag tagName={item.category} />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onChangeOrder: PropTypes.func
};

TodoList.defaultProps = {
    todos: [],
    onChangeOrder: () => {}
};

export default TodoList;
