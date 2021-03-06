import React from "react";
// css적용
import "./index.css";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants";
import { Carousel, Button } from "antd";

dayjs.extend(relativeTime);

function MainPage() {
  const [products, setProducts] = React.useState([]);
  const [productsSorted, setProductsSorted] = React.useState([]);
  const [banners, setBanners] = React.useState([]);
  const [sort, setSort] = React.useState(false);
  React.useEffect(function () {
    axios
      .get(`${API_URL}/products`)
      .then((result) => {
        console.log(result);
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.error("에러 발생 : ", error);
      });

    axios
      .get(`${API_URL}/products/sort`)
      .then((result) => {
        console.log(result);
        const productsSorted = result.data.products;
        setProductsSorted(productsSorted);
      })
      .catch((error) => {
        console.error("에러 발생 : ", error);
      });

    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        console.error("에러 발생 : ", error);
      });
  }, []);

  return (
    <div>
      <Carousel autoplay autoplaySpeed={3000}>
        {banners.map((banner, index) => {
          return (
            <Link to={banner.href}>
              <div id="banner">
                <img src={`${API_URL}/${banner.imageUrl}`} alt="banner" />
              </div>
            </Link>
          );
        })}
      </Carousel>

      <h1 id="product-headline">판매되는 상품들</h1>
      <div id="sort-btn-outer">
        <div id="sort-btn">
          <Button
            type="primary"
            danger
            onClick={() => {
              setSort(!sort);
            }}
          >
            가나다순정렬
          </Button>
        </div>
      </div>
      {sort == true ? (
        <Sort />
      ) : (
        <div id="product-list">
          {
            // map은 리턴이 가능함
            // 정렬버튼 클릭하면 products 또는 productsSorted 되도록
            //productsSorted.map()
            products.map((product, index) => {
              return (
                <div className="product-card" key={index}>
                  {/* 조건이 맞으면 반환 */}
                  {product.soldout === 1 && <div className="product-blur" />}
                  <Link
                    style={{ color: "inherit" }}
                    className="product-link"
                    to={`product/${product.id}`}
                  >
                    <div>
                      <img
                        className="product-img"
                        src={`${API_URL}/${product.imageUrl}`}
                        alt={product.name}
                      />
                    </div>
                    <div className="product-contents">
                      <span className="product-name">{product.name}</span>
                      <span className="product-price">{product.price}원</span>
                      <div className="product-footer">
                        <div className="product-seller">
                          <img
                            className="product-avatar"
                            src="images/icons/avatar.png"
                            alt="avatar"
                          />
                          <span>{product.seller}</span>
                        </div>
                        <span className="product-date">
                          {dayjs(product.createdAt).fromNow()}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          }
        </div>
      )}

      <Outlet></Outlet>
    </div>
  );
}

function Sort() {
  const [productsSorted, setProductsSorted] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(`${API_URL}/products/sort`)
      .then((result) => {
        console.log(result);
        const productsSorted = result.data.products;
        setProductsSorted(productsSorted);
      })
      .catch((error) => {
        console.error("에러 발생 : ", error);
      });
  }, []);
  return (
    <div id="product-list">
      {productsSorted.map((product, index) => {
        return (
          <div className="product-card" key={index}>
            {product.soldout === 1 && <div className="product-blur" />}
            <Link
              style={{ color: "inherit" }}
              className="product-link"
              to={`product/${product.id}`}
            >
              <div>
                <img
                  className="product-img"
                  src={`${API_URL}/${product.imageUrl}`}
                  alt={product.name}
                />
              </div>
              <div className="product-contents">
                <span className="product-name">{product.name}</span>
                <span className="product-price">{product.price}원</span>
                <div className="product-footer">
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                      alt="avatar"
                    />
                    <span>{product.seller}</span>
                  </div>
                  <span className="product-date">
                    {dayjs(product.createdAt).fromNow()}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default MainPage;
