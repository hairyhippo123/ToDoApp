import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a todo..."
        className="flex-1 p-2 bg-[#494949] px-4 py-3 outline-none w-[280px] text-white rounded border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
      />
      <button className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-green-400 bg-opacity-80 text-[#f1f1f1] rounded hover:bg-green-500 transition font-semibold shadow-md">
        Add
      </button>
    </form>
  );
}
