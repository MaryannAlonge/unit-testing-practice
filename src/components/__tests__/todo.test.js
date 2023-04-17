import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer"
import Todo from "../todo"

// use the cleanup method to cleanup after each text
afterEach(() => {
  cleanup();
})

test("should render non-completed todo ", () => {
  const todo = {id: 1, title: "wash dishes", completed: false, }
  // use the render function imported above and pass in todo prop
  render(<Todo todo={todo}/>);
  // retrieve the component
  const todoElement = screen.getByTestId("todo-1");
  // make assertions
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");

});

test("should render completed todo ", () => {
  const todo = {id: 2, title: "wash car", completed: true, }
  // use the render function imported above and pass in todo prop
  render(<Todo todo={todo}/>);
  // retrieve the component
  const todoElement = screen.getByTestId("todo-2");
  // make assertions
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash car");
  // test wether the todo is completed or not
  
});

// test if anytthing has changed since the last test run
test("matches snapshot", () =>{
  const todo = {id: 1, title: "wash dishes", completed: false, }
  // create a tree of the component
  const tree = renderer.create(<Todo todo={todo}/>).toJSON();
  expect(tree).toMatchSnapshot()
})