import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetShopInfo } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const ShopInfo = (isAuth) => {
  const { id } = useParams();
  const [shopData, setShopData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  useEffect(
    (isAuth) => {
      if (!isAuth) {
        navigate("/");
      }
      // ここでidを含める
      const fectchData = async () => {
        let res = await GetShopInfo(id);
        setShopData(res);
        setIsLoading(false);
      };
      fectchData();
    },
    [id]
  );

  return (
    <>
      {isLoading ? (
        <p>データを取得中・・・</p>
      ) : (
        <div>
          <header class="bg-white py-4 shadow-md">
            <div class="container mx-auto text-center">
              <h1 class="text-2xl font-semibold text-gray-800">
                {shopData.name}
              </h1>
              <p class="text-lg text-gray-600 mb-2">{shopData.catch}</p>
            </div>
          </header>

          <div class="container mx-auto my-8 p-4 bg-white rounded-lg shadow-lg">
            <div class="shop-details">
              <h2 class="text-3xl font-bold text-gray-800 mb-4">
                {shopData.name}
              </h2>
              <p class="text-lg text-gray-600 mb-2">{shopData.address}</p>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <img
                  src={shopData.photo.pc.l}
                  alt="料理の写真"
                  class="w-full h-auto rounded-lg"
                ></img>
                <img
                  src={shopData.logo_image}
                  alt="ロゴ"
                  class="w-full h-auto rounded-lg"
                ></img>
              </div>
            </div>

            <section class="details mt-8">
              <h2 class="text-2xl font-semibold text-gray-800 mb-4">
                お店の詳細情報
              </h2>
              <p class="text-lg text-gray-600 mb-2">
                アクセス：{shopData.access}
              </p>
              <p class="text-lg text-gray-600 mb-2">
                営業時間：{shopData.open}
              </p>
              <p class="text-lg text-gray-600 mb-2">
                ジャンル：{shopData.genre.name}
              </p>
              <p class="text-lg text-gray-600 mb-2">
                平均価格：
                {shopData.budget.average == ""
                  ? shopData.budget.average
                  : "なし"}
              </p>
              <p class="text-lg text-gray-600 mb-2">定休日: なし</p>
              <p class="text-lg text-gray-600 mb-2">電話番号: 012-345-6789</p>
              <p class="text-lg text-blue-500 hover:underline">
                公式サイト: <a href={shopData.urls.pc}>{shopData.urls.pc}</a>
              </p>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopInfo;
