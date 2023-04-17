import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../todo"

// use the cleanup method to cleanup after each text

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

});