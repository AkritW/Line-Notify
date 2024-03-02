import fetch from "node-fetch";

interface HashMap {
  [key: string]: any;
}

const parseToFormUrlEncoded = (jsonObj: HashMap): string => {
  let formBody: Array<string> = [];
  for (const property in jsonObj) {
    const encodedKey = encodeURIComponent(property);
    const encodedValue = encodeURIComponent(jsonObj[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  const stringifyFormBody = formBody.join("&");

  return stringifyFormBody;
};

const initLineApi = (apiKey: string) => {
  return {
    sendMessage: async (msg: string) => {
      const res = await fetch("https://notify-api.line.me/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: apiKey,
        },
        body: parseToFormUrlEncoded({ message: msg }),
      });
      return res;
    },
    sendImage: async (msg: string, url: string) => {
      const res = await fetch("https://notify-api.line.me/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: apiKey,
        },
        body: parseToFormUrlEncoded({
          message: msg,
          imageThumbnail: url,
          imageFullsize: url,
        }),
      });
      return res;
    },
    sendSticker: async (
      msg: string,
      stickerPackageId: number,
      stickerId: number,
    ) => {
      const res = await fetch("https://notify-api.line.me/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: apiKey,
        },
        body: parseToFormUrlEncoded({
          message: msg,
          stickerPackageId,
          stickerId,
        }),
      });
      return res;
    },
  };
};

export = initLineApi;
