import React, { useState } from "react";
import InputForm from "./components/InputForm";
import CardStack from "./components/CardStack";

const App = () => {
  const [places, setPlaces] = useState([]);

  const fetchPlaces = async (prefecture) => {
    // 都道府県に応じたダミーデータ
    const dummyData = {
      tokyo: [
        { name: "東京タワー", image: "https://via.placeholder.com/300", description: "東京の象徴" },
        { name: "浅草寺", image: "https://via.placeholder.com/300", description: "歴史ある寺院" },
      ],
      osaka: [
        { name: "大阪城", image: "https://via.placeholder.com/300", description: "歴史的な城" },
        { name: "道頓堀", image: "https://via.placeholder.com/300", description: "グルメ街" },
      ],
    };

    // 都道府県データを取得
    const places = dummyData[prefecture.toLowerCase()] || [];
    setPlaces(places);
  };

  return (
    <div className="App">
      <h1>観光地をスワイプしよう</h1>
      <InputForm onSearch={fetchPlaces} />
      <CardStack places={places} />
    </div>
  );
};

export default App;
