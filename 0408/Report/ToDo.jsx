import { Plus, Check, X } from "lucide-react";

function ToDo(props) {
  // 추가
  const toggleAddTodo = () => {
    props.setIsAddingTodo(!props.isAddingTodo);
    if (!props.isAddingTodo) {
      props.setNewTodos({
        content: "",
        completed: false,
      });
    }
  };

  // 입력 변경
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.setNewTodos({
      ...props.newTodos,
      [name]: value,
    });
  };

  // 할 일 추가
  const handleAddTodo = () => {
    if (props.newTodos.content) {
      props.setTodos([...props.todos, { id: Date.now(), ...props.newTodos }]);
      props.setNewTodos({ content: "", completed: false });
      props.setIsAddingTodo(false);
    }
  };

  // 삭제
  const handleDeleteTodo = (id) => {
    props.setTodos(props.todos.filter((event) => event.id !== id));
  };

  // 완료 토글
  const handleToggleComplete = (id) => {
    props.setTodos(
      props.todos.map((event) =>
        event.id === id ? { ...event, completed: !event.completed } : event
      )
    );
  };

  // 목록 렌더링
  const renderTodoList = (list) => {
    return (
      <ul>
        {list.map((event) => (
          <li key={event.id} className="flex justify-between items-center my-2">
            <div className="flex items-center">
              <button
                onClick={() => handleToggleComplete(event.id)}
                className={`w-5 h-5 rounded-full mr-2 flex items-center justify-center ${
                  event.completed
                    ? "bg-green-500 text-white"
                    : "border border-gray-300"
                }`}
              >
                {event.completed && <Check size={12} />}
              </button>
              <span
                className={event.completed ? "line-through text-gray-500" : ""}
              >
                {event.content}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTodo(event.id)}
              className="text-red-500 hover:text-red-700"
            >
              <X size={16} />
            </button>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="mt-4 pt-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-medium">To Do LIST</h2>
        <button
          onClick={toggleAddTodo}
          className="flex items-center text-sm bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          <Plus size={24} />
        </button>
      </div>

      {props.isAddingTodo && (
        <div className="my-2 flex bg-blue-100 rounded">
          <input
            type="text"
            name="content"
            value={props.newTodos.content}
            onChange={handleInputChange}
            placeholder="내용"
            className="flex-1 border p-2 rounded mr-2"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            저장
          </button>
        </div>
      )}

      <div className="mt-4">
        {props.todos.length === 0 ? (
          <p className="text-gray-500 text-sm">할 일이 없습니다.</p>
        ) : (
          renderTodoList(props.todos)
        )}
      </div>
    </div>
  );
}

export default ToDo;
