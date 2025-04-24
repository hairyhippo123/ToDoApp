export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
      <li className="bg-white rounded shadow p-3 flex justify-between items-center">
        <span
          className={`flex-1 cursor-pointer ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.text}
        </span>
        <button
          className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-red-400 bg-opacity-80 text-[#f1f1f1] rounded hover:bg-red-500 transition font-semibold shadow-md"
          onClick={() => onDelete(todo.id)}
        >
          Del
        </button>
      </li>
    );
  }
  