import React, { useEffect, useState } from "react";
import { GetHistory } from "../../utils/api";
import { Link } from "react-router-dom";
import Card from "../molecules/Card";

const History = () => {
  const [shopData, setShopData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fectchData = async () => {
      let res = await GetHistory();
      console.log(res);
      setShopData(res);
      setIsLoading(false);
    };
    fectchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">閲覧履歴</h2>
      {isLoading ? (
        <p>データを取得中・・・</p>
      ) : (
        <>
          {shopData.map((result, index) => (
            <Link key={index} to={`/ShopInfo/${result.id}`}>
              <Card result={result} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default History;
