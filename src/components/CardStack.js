import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Card from "./Card";

const CardStack = ({ places }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    // スワイプ処理: カードを次に進める
    if (direction === "left" || direction === "right") {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"), // 左スワイプ時の動作
    onSwipedRight: () => handleSwipe("right"), // 右スワイプ時の動作
    preventDefaultTouchmoveEvent: true, // デフォルトのスクロール動作を防止
    trackMouse: true, // マウス操作も追跡（開発中に便利）
  });

  return (
    <div {...handlers} className="card-stack">
      {places.length > 0 ? (
        places[currentIndex] ? (
          <Card place={places[currentIndex]} />
        ) : (
          <p>すべてのカードを表示しました！</p>
        )
      ) : (
        <p>該当する観光地が見つかりませんでした。別の都道府県を入力してください。</p>
      )}
    </div>
  );
};

export default CardStack;
