import NavBar from "./components/partials/NavBar";
import CreateTodo from "./components/todos/CreateTodo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import TodoDetail from "./components/todos/TodoDetail";
import UpdateTodo from "./components/todos/UpdateTodo";

function App() {
    return (
        <Router>
            <NavBar />
            {/* The switch tag is used to specifically load one component at a time */}
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/create" component={CreateTodo} />
                <Route exact path="/post/:id" component={TodoDetail} />
                <Route exact path="/post/:id/update" component={UpdateTodo} />
            </Switch>
        </Router>
        
    );
}

export default App;
