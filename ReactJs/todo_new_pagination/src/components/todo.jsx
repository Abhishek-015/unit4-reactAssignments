import { useEffect, useState } from "react";

export function Todo() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);

  const toggleList = (id) => {
    const updateList = data.map((e) => {
      return e.id === id ? { ...e, status: !e.status } : e;
    });
    console.log(updateList)
    setData(updateList);
  };


  const deleteList = (id) => {
    setData((oldvalues) => {
      return oldvalues.filter((el) => {
              return el.id !== id;
      });
    });
  };

  const getTodo = () =>
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=4`)
      .then((d) => d.json())
      .then(setData);
  useEffect(() => {
    getTodo();
  }, [page, setPage]);

  const handleTodo = () => {
    fetch("http://localhost:3001/todos", {
      method: "POST",
      body: JSON.stringify({
        title: text,
        status: false,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(getTodo);
  };



  //   useEffect(()=>{
  //     console.log("calling use effect")
  //     fetch("http://localhost:3001/todos").then(d=>d.json()).then(res=>setData(res))
  //   },[])

  //    console.log("deletedata",completed)

  return (
    <div style={{ textAlign: "center", padding: "5px" }}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="enter text here"
      />
      <button className="addBtn" onClick={handleTodo}>Add todo</button>

      {data.map((e) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "50%",
            margin: "5px auto",
            background: "green",
            padding: "5px",
            color: "white",
            borderRadius:"10px"
          }}
          key={e.id}
        >
          {e.title}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginLeft: "5px",
            }}
          >
            <div>{e.status ? "Completed" : "Not Completed"}</div>
            <button
              style={{
                margin: "5px",
                background: "black",
                color: "white",
                borderRadius: "5px",
                border: "none",
              }}
              onClick={() => {
                toggleList(e.id);
              }}
            >
              Toggle
            </button>
            <button
              style={{
                margin: "5px",
                background: "Red",
                color: "white",
                borderRadius: "5px",
                border: "none",
              }}
              onClick={() => {
                deleteList(e.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <button
        style={{
          margin: "2px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => setPage((prev) => (prev < 1 ? 1 : prev - 1))}
      >
        Previous
      </button>
      <button
        style={{
          margin: "2px",
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
}
