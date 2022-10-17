import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType

}
export type FilterValuesType = "all" | "active" | "completed";

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todolistID: string, id: string) {

         setTasks({...tasks,[todolistID]:tasks[todolistID].filter(el=>el.id !== id)} );
    }

    function addTask(todolistID: string ,title: string) {

        let newTask = {id: v1(), title: title, isDone: false};

         setTasks({...tasks,[todolistID]:[newTask,...tasks[todolistID]]});
    }

    function changeStatus(todolistID: string,taskId: string, isDone: boolean) {

         setTasks({...tasks,[todolistID]: tasks[todolistID].map(f => f.id===taskId ? {...f, isDone}: f) });
    }

                                  //todolistID1           //active
    function changeFilter(todolistID: string, value: FilterValuesType) {

       setTodolists(todolists.map(fl=>fl.id===todolistID ? {...fl, filter:value} : fl))
    }


    return (
        <div className="App">
            {todolists.map((mapTDL) => {
                let tasksForTodolist = tasks[mapTDL.id];

                if (mapTDL.filter === "active") {
                    tasksForTodolist = tasks[mapTDL.id].filter(t => t.isDone === false);
                }
                if (mapTDL.filter === "completed") {
                    tasksForTodolist = tasks[mapTDL.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={mapTDL.id}
                        todolistID={mapTDL.id}
                        title={mapTDL.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={mapTDL.filter}
                    />
                )
            })}

        </div>
    );
}

export default App;
