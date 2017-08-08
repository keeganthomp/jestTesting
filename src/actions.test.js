import { createTodo, toggleTodo, filterTodos } from "./actions";
import reducer from "./reducer";

describe("Todo actions", () => {
  it("should call CREATE_TODO action", () => {
    expect(createTodo("test")).toEqual({
      type: "CREATE_TODO",
      payload: "test"
    });
  });
  it("should call TOGGLE_TODO action", () => {
    expect(toggleTodo(1)).toEqual({ type: "TOGGLE_TODO", payload: 1 });
  });
  it("should call FILTER_TODOS action", () => {
    expect(filterTodos("test")).toEqual({
      type: "FILTER_TODOS",
      payload: "test"
    });
  });
});
