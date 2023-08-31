import React from "react";

function Article({ title, date = "January 1, 1970", preview, readingTime }) {
  const calculateEmojis = (time, emoji) => {
    const emojisCount = Math.ceil(time / (emoji === "☕️" ? 5 : 10));
    return emoji.repeat(emojisCount);
  };

  const displayReadingTime = (time) => {
    if (time < 30) {
      return `${calculateEmojis(time, "☕️")} ${time} min read`;
    } else {
      return `${calculateEmojis(time, "🍱")} ${time} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      <p>{displayReadingTime(readingTime)}</p>
    </article>
  );
}
export default Article;
