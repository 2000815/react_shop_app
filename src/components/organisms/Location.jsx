import React from "react";
import { useState, useEffect, useRef, useLocation } from "react";
import { Link } from "react-router-dom";
import Select from "../molecules/Select";
import Dialog from "../molecules/Dialog";
import LoadingDialog from "../molecules/LoadingDialog";
import { useNavigate } from "react-router-dom";

const Location = (isAuth) => {
  const options = [
    { id: 1, label: "300m以内の検索", value: 1 },
    { id: 2, label: "500m以内の検索", value: 2 },
    { id: 3, label: "1000m以内の検索", value: 3 },
    { id: 4, label: "2000m以内の検索", value: 4 },
    { id: 5, label: "3000m以内の検索", value: 5 },
  ];

  const [isAvailable, setAvailable] = useState(false);
  const [isLoadDialog, setIsLoadDialog] = useState(false);
  const [position, setPosition] = useState({ latitude: null, longitude: null });
  const [watchStatus, setWatchStatus] = useState({
    isWatching: false,
    watchId: null,
  });

  const [isDialog, setIsDialog] = useState(false);

  const isFirstRef = useRef(true);

  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
    isFirstRef.current = false;
    if ("geolocation" in navigator) {
      setAvailable(true);
    }
  }, [isAvailable]);

  const getCurrentPosition = async () => {
    setIsLoadDialog(true);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const { latitude, longitude } = position.coords;
      setPosition({ latitude, longitude });
    } catch (error) {
      console.error("位置情報の取得に失敗しました。", error);
    } finally {
      setIsLoadDialog(false);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem("latitude", JSON.stringify(position.latitude));
    localStorage.setItem("longitude", JSON.stringify(position.longitude));
    setIsDialog(true);
  };

  const closeDialog = () => {
    setIsDialog(false);
  };

  const nextLink = (
    <Link
      to={"/shops"}
      className="block text-white bg-yellow-600 hover:bg-yellow-700 rounded-full px-6 py-3 transition duration-300 ease-in-out transform hover:scale-105 hover:no-underline ml-56"
    >
      検索結果を見る
    </Link>
  );
  if (isFirstRef.current) return <div className="App">Loading...</div>;

  return (
    <div className="App p-4">
      {isLoadDialog && (
        <LoadingDialog
          title={"ロード中・・・"}
          body={"しばらくお待ちください"}
        />
      )}
      <h2 className="text-2xl font-semibold mb-4">現在地と検索範囲の指定</h2>
      {!isFirstRef && !isAvailable && (
        <div className="bg-red-100 text-red-500 p-2 rounded mb-4">
          エラーが発生しました。
        </div>
      )}
      {isAvailable && (
        <div>
          <button
            className="bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
            onClick={getCurrentPosition}
          >
            現在地を取得します
          </button>
          <div className="mt-4">
            <div>
              <strong>現在の位置情報:</strong>
              <br />
              緯度: {position.latitude}
              <br />
              経度: {position.longitude}
            </div>
          </div>
          <div className="w-6/12 m-auto mt-4">
            <Select options={options} />
          </div>
        </div>
      )}
      <button
        className="mt-4 bg-yellow-600 text-white py-2 px-4 rounded hover:bg-yellow-700"
        onClick={handleSubmit}
      >
        検索
      </button>
      {/* <div className="map">
        <Map />
      </div> */}
      {isDialog &&
        (position.latitude === null ? (
          <Dialog
            title="確認画面"
            body="位置情報を取得してください"
            isDialog={closeDialog}
          />
        ) : (
          <Dialog
            title="確認画面"
            body="本当に検索しますか？"
            isDialog={closeDialog}
            nextLink={nextLink}
          />
        ))}
    </div>
  );
};

export default Location;
