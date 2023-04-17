import { render, screen, cleanup } from "@testing-library/react";
import Todo from "../todo"

test("should render todo component", () => {
  // use the render function imported above
  render(<Todo/>);
  // retrieve the component
  const todoElement = screen.getByTestId("todo-1");
  // make assertions
  expect(todoElement).toBeInTheDocument();
  
})