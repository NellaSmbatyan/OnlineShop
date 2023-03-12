import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavLink, Table } from "react-bootstrap";

import Badge from "@mui/material/Badge";
import { Menu, MenuItem } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "../Redux/actions/action";
import { ADD } from "../Redux/actions/action";

const Header = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const getData = useSelector((state) => state.cartReducer.carts);
  console.log(getData);
  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(Delete(id));
  const send = (e) => {
    dispatch(ADD(e));
  };

  const total = () => {
    let totalPrice = 0;
    getData.map((el, i) => {
      totalPrice = el.price + totalPrice;
    });
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    total();
  }, [total]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "80px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            OnlineShop
          </NavLink>

          <Badge
            badgeContent={getData.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <h4 style={{ color: "white", cursor: "pointer" }}>Carts</h4>
          </Badge>
        </Container>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {getData.length ? (
            <div style={{ width: "24rem", padding: "10" }}>
              <Table>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Product Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {getData.map((el) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <img
                              src={el.img}
                              alt="image"
                              style={{ width: "100px", height: "100px" }}
                            />{" "}
                          </td>
                          <td>
                            <h6>{el.title}</h6>
                            <p>Price: ${el.price}</p>

                            <p> Quantity: {el.quantity} </p>
                          </td>
                          <td
                            style={{ cursor: "pointer" }}
                            onClick={() => handleDelete(el.id)}
                            className="mt-5"
                          >
                            <p>
                              Remove:{" "}
                              <img
                                className="removeIcon"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLINU1zAHjvLCOrjEaQalKpmnzQchgn7Jo8fNcMqg&s"
                                alt="remove Icon"
                              />
                            </p>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="checkButton">Total Price: ${totalPrice} </p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div>
              <button className="trolleyButton" onClick={handleClose}>
                {" "}
                X
              </button>
              <p className="trolley">Your Card is empty</p>
              <img
                src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
                alt="gif"
                className="trolleyImg"
              />
            </div>
          )}
        </Menu>
      </Navbar>
    </>
  );
};

export default Header;
