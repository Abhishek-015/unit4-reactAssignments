import { useEffect, useState } from "react";
export const Todo = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    getTodo();
  }, [page]);

  const getTodo = () => {
    console.log("data aa gaya");
    fetch(`http://localhost:3001/users?_page=${page}&_limit=4`)
      .then((d) => d.json())
      .then(setData).then(()=>{
          setLoading(false)
      });
  };

  const handleTodo = () => {
    fetch("http://localhost:3001/users", {
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

  return loading?<><h1>loading.....</h1></>: (
    <div className="main">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        onClick={() => {
          handleTodo();
        }}
      >
        Add Todo
      </button>
      {data.map((e) => (
        <div key={e.id}>{e.title}</div>
      ))}
      {page < 1 ? (
        <>
          <button disabled>Previous</button>
        </>
      ) : (
        <>
          {" "}
          <button
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </button>
        </>
      )}

      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
