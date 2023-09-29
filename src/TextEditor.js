import React, { useEffect, useState } from "react";

const TextEditor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  const [showButton, setShowButton] = useState({ opacity: 0.5 });
  const [undoButton, setUndoButton] = useState({ opacity: 0.5 });

  useEffect(() => {
    if (name !== "") {
      setShowButton({ opacity: 1 });
    } else {
      setShowButton({ opacity: 0.5 });
    }
  }, [name]);

  useEffect(() => {
    if (data.length !== 0) {
      setUndoButton({ opacity: 1 });
    } else {
      setUndoButton({ opacity: 0.5 });
    }
  }, [data]);

  const handleData = (e) => {
    e.preventDefault();
    if (name !== "") {
      setData([...data, { name: name, email: email }]);
      setName("");
      setEmail("");
    }
  };

  const deleteData = (e) => {
    e.preventDefault();
    const tasksCopy = [...data];
    tasksCopy.splice(0, 1);
    setData(tasksCopy);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter email Id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button style={showButton} onClick={handleData}>
        Append
      </button>
      <button style={undoButton} onClick={deleteData}>
        Undo
      </button>
      <ol>
        {data.map((item, id) => (
          <li key={id}>
            {item.name} {item.email}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TextEditor;
