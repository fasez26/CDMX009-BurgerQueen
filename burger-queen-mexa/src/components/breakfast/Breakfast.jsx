import React, { useState, useEffect } from "react";
import title from "../../assets/images/title.svg";
import "../../assets/styles/Breakfast.css";
import CounterInput from "react-bootstrap-counter";
import { db } from "../firebase/firebase";
import MenuNavbar from "../menunavbar/MenuNavbar.jsx";
import { withRouter } from "react-router-dom";
import shortid from "shortid";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Breakfast = (props) => {
  let [totalQuantity, setTotalQuantity] = useState(0);
  const [payment, setPayment] = useState(0);
  const [product, setProduct] = useState([]);
  let [order] = useState([]);
  const [table, setTable] = useState([]);
  let [customerName, setCustomerName] = useState([]);
  const [breakfastItem, setBreakfastItem] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await db
          .collection("breakfast")
          .orderBy("uid", "asc")
          .get();
        const arrayData = data.docs.map((doc) => ({
          uid: doc.uid,
          ...doc.data(),
        }));
        setBreakfastItem(arrayData);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const addOrder = () => {
        const newOrder = {
        id: shortid.generate(),
        item: product,
        check: payment,
        totQuantity: totalQuantity,
        table: table,
        userName: props.user.user,
        incomingHour: new Date().toLocaleString(),
        status: "En preparación",
        nameCus: customerName,
        openClose: "Abierta",
        time: seconds,
      };
    const conection = db.collection("order").add(newOrder);
  };
  const floor = () => {
    props.history.push("/Floor");
  };

  return (
    <div className="container mt-5">
      <div></div>
      <div className="box1">
        <div className="text-center">
          <img src={title} className="images"></img>
        </div>
        <div className="textTable  ">
          No. Mesa
          <select className="select" onChange={(e) => setTable(e.target.value)}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="">
          <Form>
            <Row>
              <Col>
                <Form.Control
                  className="customer"
                  placeholder="Cliente"
                  id="name"
                  onChange={(e) => setCustomerName(e.target.value)}
                  value={customerName}
                />
              </Col>
            </Row>
          </Form>
          <div className="menuTitle text-center">Menú</div>
          <br></br>
          <br></br>
          <li className="list-group">
            {breakfastItem.map((item) => (
              <div key={item.uid} className="">
                <div className="itemText ">{item.item}</div>
                <div className="priceText  ">$ {item.price}.00</div>
                  <CounterInput
                    min={0}
                    max={100}
                    onChange={(total) => {
                      let newProduct;
                      let add;
                      let totalPay;
                      if (product.find((p) => p.productId === item.uid)) {
                        newProduct = product.map((p) => {
                          if (p.productId !== item.uid) {
                            return p;
                          }
                          return {
                            ...p,
                            quant: total,
                            payment: total * item.price,
                          };
                        });
                      } else {
                        newProduct = [
                          ...product,
                          {
                            productId: item.uid,
                            produItem: item.item,
                            unitaryPrice: item.price,
                            quant: total,
                            payment: total * item.price,
                          },
                        ];
                      }
                      setProduct(newProduct);
                      add = newProduct.reduce(
                        (sum, value) => sum + value.quant,
                        0
                      );
                      setTotalQuantity(add);
                      {
                      }
                      totalPay = newProduct.reduce(
                        (sum, value) => sum + value.payment,
                        0
                      );
                      setPayment(totalPay);
                      {
                      }
                    }}
                  />
                <div className="descriptionText"> ({item.description})</div>
                </div>
            ))}
          </li>
          <MenuNavbar
            totalQuantity={totalQuantity}
            payment={payment}
            order={order}
            addOrder={addOrder}
            floor={floor}
            isActive={isActive}
            toggle={toggle}
          />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Breakfast);
