import React, { useState, useEffect } from "react";
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { ADD, DELETE, REMOVE_INT } from "../../../controller/action";

export const Details = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  // console.log(id)

  const getData = useSelector((state) => state.cartReducer.carts);
  // console.log(getData);

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id === id;
    });
    setData(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  //delete item

  const history = useHistory();
  const deletes = (id) => {
    dispatch(DELETE(id));
    history.push("/");
  };

  //increment item

  const dispatch = useHistory();
  const increment = (e) => {
    dispatch(ADD(e));
  };

  //descriment  item

  const decrement = (item) => {
    dispatch(REMOVE_INT(item));
  };

  return (
    <>
      <article>
        <section className="details">
          <h2 className="details_title">Product Details Page</h2>
          {data.map((item) => (
            <div className="details_content">
              <div className="details_content_img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details_content_detail">
                <h1>{item.title}</h1>
                <div className="rating">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <label htmlFor="">(1 customer review)</label>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  );
};
