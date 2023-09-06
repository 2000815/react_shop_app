import React, { useEffect, useState } from "react";
import { GetShops } from "../../utils/api";
import { Link } from "react-router-dom";
import Card from "../molecules/Card";
import "../styles/Shops.css";
import Pagination from "../molecules/Pagination";

function Shops() {
  const [shopData, setShopData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 10; // 1ページあたりのアイテム数

  // 現在のページを追跡するステート
  const [currentPage, setCurrentPage] = useState(1);

  // ページを変更するハンドラ
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fectchData = async () => {
      let res = await GetShops();
      setShopData(res);
      const getlongitude = localStorage.getItem("longitude");

      setIsLoading(getlongitude === "null");
    };
    fectchData();
  }, []);

  console.log(isLoading);

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
          <p>恐れ入りますが、位置情報取得を再度行ってください</p>
        </div>
      ) : (
        renderContent()
      )}
    </div>
  );
}

export default Shops;
