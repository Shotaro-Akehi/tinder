import React, { useState } from "react";

const InputForm = ({ onSearch }) => {
  const [prefecture, setPrefecture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(prefecture); // 入力された都道府県を親コンポーネントに送信
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={prefecture}
        onChange={(e) => setPrefecture(e.target.value)}
        placeholder="都道府県を入力してください"
      />
      <button type="submit">検索</button>
    </form>
  );
};

export default InputForm;
