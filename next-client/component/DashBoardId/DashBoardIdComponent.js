import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ItemService from "../../service/itemService";
import classes from "./DashBoardIdComponent.module.css";
import Link from "next/link";
import Image from "next/image";

function DashBoardIdComponent(props) {
  const { currentUser, setCurrentUser } = props;
  const [item, setItem] = useState([]);
  const router = useRouter();
  const _id = router.asPath.split("/", 3).slice(2);
  // console.log(router, "idi");

  useEffect(() => {
    console.log("Using Effect On Dash Board");
    ItemService.getOneItem(_id)
      .then((response) => {
        console.log(response.data);
        setItem(response.data);
        // console.log(response);
        // const data = response.data;
        // data.map((data) => {
        //   console.log(data._id);
        // });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.background}>
      {!currentUser && <div>You should sign in first</div>}
      <div className={classes.container}>
        {item && (
          <div>
            {item.map((item) => {
              return (
                <div className={classes.detailsContainer}>
                  <div className={classes.detailsWrap}>
                    {/* <h2 className={classes.formH2}>General</h2> */}
                    <div className={classes.detailsWrap_1}>
                      <div>
                        <div className={classes.detailsPart}>
                          <label>Category</label>
                          <p className={classes.detailsP}>{item.general.category}</p>
                        </div>
                        <div className={classes.detailsPart}>
                          <label>Serial Number</label>
                          <p className={classes.detailsP}>{item.general.serialNumber}</p>
                        </div>
                        <div className={classes.detailsPart}>
                          <label>Model</label>
                          <p className={classes.detailsP}>{item.general.model}</p>
                        </div>
                      </div>
                      <div>
                        <div className={classes.detailsPart}>
                          <label>Description</label>
                          <p className={classes.detailsP}>{item.general.itemDescription}</p>
                        </div>
                        {item.general.itemStatus === "In-use" && (
                          <div className={classes.detailsPart}>
                            <label>Status</label>
                            <p className={classes.detailsInUse}>{item.general.itemStatus}</p>
                          </div>
                        )}
                        {item.general.itemStatus === "Stock" && (
                          <div className={classes.detailsPart}>
                            <label>Status</label>
                            <p className={classes.detailsStock}>{item.general.itemStatus}</p>
                          </div>
                        )}
                        {item.general.itemStatus === "Disposed" && (
                          <div className={classes.detailsPart}>
                            <label>Status</label>
                            <p className={classes.detailsDisposed}>{item.general.itemStatus}</p>
                          </div>
                        )}

                        <div className={classes.detailsPart}>
                          <label>Remarks</label>
                          <p className={classes.detailsP}>{item.general.remarks}</p>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                    {/* <div className={classes.detailsWrap}> */}
                    {/* <h2 className={classes.formH2}>Client</h2> */}
                    <div className={classes.detailsWrap_1}>
                      <div>
                        <div className={classes.detailsPart}>
                          <label>Client</label>
                          <p className={classes.detailsP}>{item.client.client}</p>
                        </div>
                        <div className={classes.detailsPart}>
                          <label>Client Invoice</label>
                          <p className={classes.detailsP}># {item.client.clientInvoice}</p>
                        </div>
                        <div className={classes.detailsPart}>
                          <label>Client Contract Expiration Date</label>
                          <p className={classes.detailsP}>
                            {item.client.clientContractExpirationDate}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className={classes.detailsPart}>
                          <label>Warranty T&C</label>
                          <p className={classes.detailsP}>{item.client.warrantyTC}</p>
                        </div>
                        <div className={classes.detailsPart}>
                          <label>Warranty Period</label>
                          <p className={classes.detailsP}>
                            {item.client.warrantyStartDate} to {item.client.warrantyEndDate}
                          </p>
                        </div>
                      </div>
                      {/* </div> */}
                    </div>
                    {/* <div className={classes.detailsWrap}> */}
                    {/* <h2 className={classes.formH2}>Vendor</h2> */}
                    <div className={classes.detailsWrap_1}>
                      <div>
                        <div className={classes.detailsPart}>
                          <label>Vendor</label>
                          <p className={classes.detailsP}>{item.vendor.vendor}</p>
                        </div>
                        <div className={classes.detailsPart}>
                          <label>Original Invoice</label>
                          {/* <div>{item.vendor.originalInvoice}</div>   */}
                          <Image
                            src={item.vendor.originalInvoice}
                            alt="Original Invoice"
                            width={200}
                            height={100}
                          />
                        </div>
                      </div>
                      <div>
                        <div className={classes.detailsPart}>
                          <label>Purchase Cost</label>
                          <p className={classes.detailsP}>{item.vendor.purchaseCost}</p>
                        </div>
                        <div className={classes.detailsPart}>
                          <label>Purchase Date</label>
                          <p className={classes.detailsP}>{item.vendor.purchaseDate}</p>
                        </div>
                      </div>
                    </div>
                    {/* </div> */}
                    {/* <div className={classes.detailsWrap}> */}
                    {/* <h2 className={classes.formH2}>Service Center</h2> */}
                    <div className={classes.detailsWrap_1}>
                      <div className={classes.detailsPart}>
                        <label>Address</label>
                        <p className={classes.detailsP}>{item.serviceCenter.address}</p>
                      </div>
                      <div className={classes.detailsPart}>
                        <label>Phone Number</label>
                        <p className={classes.detailsP}>{item.serviceCenter.phoneNumber}</p>
                      </div>
                    </div>
                    <div className={classes.detailsButton}>
                      <Link href={`/dashboard/${item._id}/return`}>
                        <div className={classes.detailsButtonRma}>RMA</div>
                      </Link>
                      <Link href={`/dashboard/${item._id}/edit`}>
                        <div className={classes.detailsButtonEdit}>Edit</div>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default DashBoardIdComponent;
