# A Simple Lightweight Package to Simplify working with Line Notify

## Installation

> npm install simple-line-notify

## Example

```javascript
const initLineNotify = require("simple-line-notify");

const main = async () => {
  // insert API key
  const { sendMessage, sendSticker, sendImage } = initLineNotify(
    "Bearer xxxxxxxxxxxxxxxxx",
  );

  // send message
  const res1 = await sendMessage("Hello My Community");

  // send sticker
  const res2 = await sendSticker("Happy New Year 🎉", 446, 1992);

  // send image
  const res3 = await sendImage(
    "Here is a Cat picture!",
    "https://i.ytimg.com/vi/fOd16PT1S7A/maxresdefault.jpg",
  );

  // log
  console.log(res1);
  console.log(res2);
  console.log(res3);
};

main();
```
