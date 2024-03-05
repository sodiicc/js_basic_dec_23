import TodoItem from "./TodoItem"

const TodoList = () => {

  const colorRandom = () => `rgb(${Math.round(Math.random() * 150)},${Math.round(Math.random() * 150)},${Math.round(Math.random() * 150)})`
  const bgColorRandom = () => `rgb(${Math.round(Math.random() * 100 + 150)},${Math.round(Math.random() * 100 + 150)},${Math.round(Math.random() * 100 + 150)})`


  const todos = [
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
    {
      text: 'my first todo',
      color: colorRandom(),
      bgColor: bgColorRandom()
    },
  ]

  return (<div>
    {
      todos.map((todo, i) => (
      <TodoItem
        key={todo.bgColor}
        color={todo.color}
        text={`${i}. ${todo.text}`}
        bgColor={todo.bgColor}
      />))
    }
  </div>)
}

export default TodoList