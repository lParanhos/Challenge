import React, { useState } from "react";
import classes from "./Excercise2.module.scss";
import DescriptionExercise from "../DescriptionExercise";
import TodoList from "./TodoList";

const instructions = [
    "Neste exercício começamos a desenvolver um TODO list. A feature de arrastar as tasks para a ordem desejada está implementada.",
    "Você deve identificar e corrigir todos os warnings/errors apresentados no console do Chrome.",
    "As features de arrastar items da lista e mostrar as próximas tasks de acordo com a categoria deverão funcionar corretamente."
];

const listBeforeTravel = "Antes viagem";
const documentList = "Documentos";
const allCategories = [listBeforeTravel, documentList];
const initialTodos = [
    {
        id: Math.random(),
        content: "Checar passagem",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Checar hospedagem (enviar email confirmando)",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Seguro viagem",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content:
            "Aluguel de carro/rotas de ônibus/como funcionam os táxis/uber?",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Ativar cartão internacional/sacar dinheiro/câmbio",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Ativar roaming internacional para celular/sim card ",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Fazer roteiro de viagem: passeios, restaurantes, etc",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Separar documentos",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Organizar a mala",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Organizar mala de mão",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content:
            "Pensar em alternativas de leitura e música para o trajeto de avião",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Programar resposta automática de email",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Checar aplicativos disponíveis para turismo no destino",
        category: listBeforeTravel
    },
    {
        id: Math.random(),
        content: "Comprovante do seguro",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Passaporte",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Cópias do passaporte autenticadas",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Passagens",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Carteira de motorista",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Cartão de crédito",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Voucher do hotel",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Telefones de emergência",
        category: documentList
    },
    {
        id: Math.random(),
        content:
            "Telefones das bandeiras dos cartões em atendimento internacional",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Cartão de milhagem",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Checkin",
        category: documentList
    },
    {
        id: Math.random(),
        content: "Carteirinha do plano de saúde",
        category: documentList
    }
];

const getNextActivities = todos => {
    const findNext = category => todos.find(todo => todo.category === category);

    const nextTasks = allCategories.reduce((map, category) => {
        const _newMap = Object.assign({}, map);
        _newMap[category] = findNext(category).content;
        return _newMap;
    }, {});

    return nextTasks;
};

function App() {
    const [nextActivities, setNextActivities] = useState(
        getNextActivities(initialTodos)
    );

    function onChangeOrder(todos) {
        setNextActivities(getNextActivities(todos));
    }

    return (
        <>
            <DescriptionExercise instructions={instructions} />
            <div className={classes.Excercise2}>
                <TodoList
                    todos={initialTodos}
                    onChangeOrder={todos => onChangeOrder(todos)}
                />
                <div className={classes.NextTasks}>
                    <h1>Próximas tarefas:</h1>
                    <ul>
                        {Object.keys(nextActivities).map(category => (
                            <li>
                                <strong>{category}</strong>:{" "}
                                {nextActivities[category]}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
