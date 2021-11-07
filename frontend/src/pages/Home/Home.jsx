import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../components/Card/Card";
import { getAllData, updatePage } from "../../redux/dataSlice";
import "./Home.css";

export default function Home() {
  const dispatch = useDispatch();

  const lastItem = useRef(0);

  const { data, page, status, end } = useSelector((state) => state.data);

  useEffect(() => {
    console.log("hello");
    if (!end) {
      dispatch(getAllData(page));
    }
  }, [dispatch, end, page]);

  function handleScroll(e) {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (
      Math.round(scrollHeight - scrollTop) < clientHeight + 100 &&
      status === "success"
    ) {
      if (!end) {
        dispatch(updatePage());
      }
    }
  }

  return (
    <div className="home">
      <div className="home-container" ref={lastItem} onScroll={handleScroll}>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
        {status === "loading" ? (
          <div className="loading">loading...</div>
        ) : null}
      </div>
    </div>
  );
}
