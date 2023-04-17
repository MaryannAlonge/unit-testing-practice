import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../todo"

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