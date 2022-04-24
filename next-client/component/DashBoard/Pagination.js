import React from "react";
import classes from "./DashBoardComponent.module.css";

const Pagination = ({ itemPerPage, setItemPerPage, totalItem, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = () => {
    paginate(number);
  };

  const handlePerPage = (e) => {
    setItemPerPage(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className={classes.paginateContainer}>
      <div className={classes.paginatePerPage}>
        <p>Row per page:</p>
        <select onChange={handlePerPage}>
          <option value="5">5</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
      {/* <nav> */}
      <ul className={classes.paginateUl}>
        {pageNumbers.map((number) => (
          <li key={number} onClick={() => paginate(number)}>
            {number}
          </li>
        ))}
      </ul>
      {/* </nav> */}
    </div>
  );
};

export default Pagination;
