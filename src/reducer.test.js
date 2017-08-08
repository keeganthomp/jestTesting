import reducer from "./reducer";
import { createTodo, toggleTodo, filterTodos } from "./actions";

describe("CREATE_TODO", function() {
  test("creates a new todo", function() {
    const initialState = { todos: [], nextId: 1 };
    const state = reducer(initialState, createTodo("Test"));
    expect(state.todos).toHaveLength(1);
    expect(state.todos[0]).toEqual({ id: 1, done: false, text: "Test" });
  });
});

describe("TOGGLE_TODO", () => {
  test("toggle todo done: true or false", () => {
    const inistialState = {
      todos: [],
      nextId: 1,
      filter: "all"
    };
    let state = reducer(inistialState, createTodo("Test"));
    state = reducer(state, toggleTodo(1));
    expect(state.todos[0]).toEqual({ id: 1, done: true, text: "Test" });
  });
});

describe("FILTER_TODO", () => {
  test("toggle filter state complete or incomplete", () => {
    const inistialState = { filter: "all"};
    let state = reducer(inistialState, filterTodos("complete"));
    expect(state).toEqual({filter: "complete"});
  });
});
