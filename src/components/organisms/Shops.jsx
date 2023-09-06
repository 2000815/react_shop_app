import React, { useEffect, useState } from "react";
import { GetShops } from "../../utils/api";
import { Link } from "react-router-dom";
import Card from "../molecules/Card";
import "../styles/Shops.css";
import Pagination from "../molecules/Pagination";
import { useNavigate } from "react-router-dom";

const Shops = (isAuth) => {
  const [shopData, setShopData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 10; // 1ページあたりのアイテム数

  // 現在のページを追跡するステート
  const [currentPage, setCurrentPage] = useState(1);

  // ページを変更するハンドラ
  const handlePageChange = (pageNumber, isAuth) => {
    setCurrentPage(pageNumber);
  };
  const navigate = useNavigate();

  useEffect((isAuth) => {
    if (!isAuth) {
      navigate("/");
    }

    const fectchData = async () => {
      let res = await GetShops();
      setShopData(res);
      const getlongitude = localStorage.getItem("longitude");

      setIsLoading(getlongitude === "null");
    };
    fectchData();
  }, []);

  const renderContent = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = shopData.slice(indexOfFirstItem, indexOfLastItem);

    return (
      <>
        <div className="gridContainer">
          {currentItems.map((result, index) => (
            <Link key={index} to={`/ShopInfo/${result.id}`}>
              <Card result={result} />
            </Link>
          ))}
        </div>

        <div className="">
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={shopData.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </>
    );
  };

  return (
    <div className="m-5">
      {isLoading ? (
        <div>
          <p>データを取得中・・・</p>
          <p>取得に、終秒かかる可能性があります。</p>
        </div>
      ) : (
        renderContent()
      )}
    </div>
  );
};

export default Shops;
