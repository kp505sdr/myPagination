import React, { useState, useEffect } from "react";
import "./Pagination.css";

const Pagination = ({
  showPostPerPage,
  PaginationChangeFunction,
  totalPost,
}) => {
  const [counter, setCounter] = useState(1); //counter for inrement and Decriment on click prev and next
  const [mybuttons,setmybutton] = useState(Math.ceil(totalPost / showPostPerPage));

  useEffect(() => {
    const value = showPostPerPage * counter; //value=lastIndex and value-showPostPerPage=firstIndex
    // console.log("start value", value - showPostPerPage);
    // console.log("end value", value);
    PaginationChangeFunction(value - showPostPerPage, value); //function call from parent and pass value
  }, [counter]);

  //   -------------------------------------------------------------------------------------------
  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1); //for fix if prev<1
      } else {
        setCounter(counter - 1);
      }

      //for fix if next>totalPage
    } else if (type === "next") {
      if (mybuttons === counter) {
        //math.ceil(totalpost/showPostperpage) it calculate total page
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  //   -------------------------------------------------------------------------------------------------
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className="page-item cursor-pointer ">
          <a className="page-link" onClick={() => onButtonClick("prev")}>
            Previous
          </a>
        </li>
        {new Array(mybuttons).fill("").map((mybtn, i) => (
          <li
            className={`page-item ${i + 1 === counter ? "active" : ""}`}
            onClick={() => setCounter(i + 1)}
          >
            <a className="page-link" href="#">
              {i + 1}
            </a>
          </li>
        ))}

        <li className="page-item cursor-pointer">
          <a className="page-link" onClick={() => onButtonClick("next")}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
