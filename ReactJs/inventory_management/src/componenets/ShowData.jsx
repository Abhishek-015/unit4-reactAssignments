import "../App.css";

export const ShowAll = ({
  getData,
  orderedList,
  currentList,
  data,
  deleteItems,
  toggle
}) => {
  return (
    <div>
      <div style={{ textAlign: "left", marginLeft: 200, marginTop: 50 }}>
          {
              toggle? <button
              style={{ background: "navy" }}
              onClick={() => {
                getData("orderedlist");
              }}
            >
              Show Ordered List
            </button>:  <button
          style={{ background: "navy" }}
          onClick={() => {
            getData("currentlist");
          }}
        >
          Show Current List
        </button>
          }
       
      
      </div>
      {data.map((e) => {
        return (
          <div key={e.id} className="items">
            <div
            
              style={{
                color: "black",
                fontWeight: 600,
                fontSize: 20,
                background: "#89B5AF",
                padding: 7,
                borderRadius: 5,
              }}
            >
              {e.status === "stockOut" ? (
                <>
                  <strike>
                    <span style={{ color: "red" }}>
                      <li>{e.title}</li>
                    </span>
                  </strike>
                </>
              ) : (
                <>
                  <li>{e.title}</li>
                </>
              )}
            </div>
            <button
              onClick={
                e.status
                  ? () => {
                      orderedList(e);
                    }
                  : () => {
                      currentList(e);
                    }
              }
            >
              {e.status === "stockOut" || e.status === false
                ? e.status === "stockOut"
                  ? "Out of Stock"
                  : "Click to mark Out of Stock"
                : "Add to Current List"}
            </button>
            <button
              style={{ background: "red", marginLeft: 0 }}
              onClick={
                e.status === "stockOut" || e.status === false
                  ? () => {
                      deleteItems(e.id, "currentlist");
                    }
                  : () => {
                      deleteItems(e.id, "orderedlist");
                    }
              }
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
