import { useState } from "react";

function Emoji() {
  const [emoji, setEmoji] = useState("💂");

  const handleSwitchEmoji = () => {
    const emojiOptions = ["💂", "👩", "👨‍🚀", "😊", "🐱", "🌈"]; // Mpre emojis
    const currentEmojiIndex = emojiOptions.indexOf(emoji);
    const nextEmojiIndex =
      currentEmojiIndex === emojiOptions.length - 1 ? 0 : currentEmojiIndex + 1;

    setEmoji(emojiOptions[nextEmojiIndex]);
  };

  //   const handleSwitchEmoji = () => {
  //     let newEmoji = emoji === "💂" ? "👩" : "👨‍🚀";
  //     setEmoji(newEmoji);
  //   };

  return (
    <div className="Emoji componentBox">
      How I feel about this place : {emoji}
      <button
        onClick={handleSwitchEmoji}
        style={{
          backgroundColor: "#e1f3ff",
          color: "black",
          padding: "0px 15px",
          fontSize: "16px",
          borderRadius: "25px",
          cursor: "pointer",
        }}
      >
        Switch Emoji
      </button>
    </div>
  );
}

export default Emoji;
