import "./styles.css";
import { useEffect, useState } from "react";

const getLocalItem = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

export default function LocalStorageCurd() {
  const [item, setItem] = useState("");
  const [arr, setArr] = useState(getLocalItem());
  const [edit, setEdit] = useState(0);
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(arr));
  }, [arr]);

  const handleSubmit = (e) => {
    // setItem(item);

    if (item) {
      if (edit) {
        let updatedArr = arr.map((i) => {
          if (i.id === edit) {
            return { ...i, name: item };
          } else {
            return { name: i.name, id: i.id };
          }
        });
        setArr(updatedArr);
        setEdit(0);
        setItem("");
        // console.log(updatedArr);

        return;
      }

      e.preventDefault();
      let newItem = { name: item, id: Date.now().toString() };
      setArr([...arr, newItem]);
      setItem("");
    }
  };

  const handleDelete = (id) => {
    const RemainArr = arr.filter((elem) => elem.id !== id);
    // console.log(idx);
    setArr(RemainArr);
  };

  const handleEdit = (id) => {
    const index = arr.find((elem) => elem.id === id);
    // console.log(index);
    setItem(index.name);
    setEdit(index.id);
  };
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  return (
    <>
      <input onChange={handleChange} value={item} type="text" />
      <button onClick={handleSubmit}>Add</button>
      {arr.map((val) => (
        <div key={val.id}>
          <li>{val.name}</li>
          <button onClick={(e) => handleDelete(val.id)}>delete</button>
          <button onClick={(e) => handleEdit(val.id)}>edit</button>
        </div>
      ))}
    </>
  );
}
