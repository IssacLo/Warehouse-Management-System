import React, { useState, useEffect } from "react";
import ItemService from "../../service/itemService";
import Pagination from "./Pagination";
import classes from "./DashBoardComponent.module.css";
import Link from "next/link";
import { BsEyeFill } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";

const DashBoardComponent = (props) => {
  const { currentUser, setCurrentUser } = props;
  const [item, setItem] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  // const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const handleChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    console.log("Using Effect On Dash Board");
    let _id;
    if (currentUser) {
      //   delete currentUser.user.password;
      //   delete currentUser.user.date;
      _id = currentUser.user;

      // console.log(_id, "id");
    } else {
      _id = "";
    }

    ItemService.getItem(_id)
      .then((data) => {
        // console.log(data.data, "data");
        const item = data.data;
        // console.log(item);
        setItem(item);
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }, []);

  //Get current posts
  const indexOfLastPage = currentPage * itemPerPage;
  const indexOfFirstPage = indexOfLastPage - itemPerPage;
  const currentItem = item.slice(indexOfFirstPage, indexOfLastPage);

  //Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        {!currentUser && <div>You should sign in first</div>}
        {currentUser && (
          <div>
            <div className={classes.searchContainer}>
              <div className={classes.searchWrap}>
                <RiSearchLine className={classes.searchIcon} />
                <input
                  type="text"
                  placeholder="Serial Number..."
                  onChange={handleChangeSearch}
                  className={classes.searchInput}
                />
              </div>
            </div>
            <div className={classes.tableContainer}>
              <div className={classes.tableWrapper}>
                <table className={classes.tableWrap}>
                  <thead className={classes.tableHead}>
                    <tr>
                      <th>Category</th>
                      <th>Model</th>
                      <th>Serial Number</th>
                      <th>Item Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {currentItem && (
                    <tbody className={classes.tableBody}>
                      {currentItem
                        .filter((items) => {
                          if (searchInput == "") {
                            return currentItem;
                          } else if (
                            items.general.serialNumber
                              .toLowerCase()
                              .includes(searchInput.toLowerCase())
                          ) {
                            return currentItem;
                          }
                        })
                        .map((items) => {
                          return (
                            <tr className={classes.tableTr}>
                              <td>{items.general.category}</td>
                              <td>{items.general.model}</td>
                              <td>{items.general.serialNumber}</td>
                              {items.general.itemStatus === "In-use" && (
                                <td>
                                  <div className={classes.tableTdInUse}>
                                    {items.general.itemStatus}{" "}
                                  </div>
                                </td>
                              )}
                              {items.general.itemStatus === "Stock" && (
                                <td>
                                  <div className={classes.tableTdStock}>
                                    {items.general.itemStatus}
                                  </div>
                                </td>
                              )}
                              {items.general.itemStatus === "Disposed" && (
                                <td>
                                  <div className={classes.tableTdDisposed}>
                                    {items.general.itemStatus}
                                  </div>
                                </td>
                              )}
                              <td>
                                <Link href={`/dashboard/${items._id}`}>
                                  <div className={classes.tableButton}>
                                    <BsEyeFill />
                                  </div>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  )}{" "}
                </table>
                <Pagination
                  className={classes.tableFooter}
                  itemPerPage={itemPerPage}
                  setItemPerPage={setItemPerPage}
                  totalItem={item.length}
                  paginate={paginate}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashBoardComponent;
