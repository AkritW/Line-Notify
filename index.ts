interface HashMap {
    [key: string]: any
}

const parseToFormUrlEncoded = (jsonObj: HashMap): string => {
    let formBody: string[] = []
    for (const property in jsonObj) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(jsonObj[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    const stringifyFormBody = formBody.join("&");

    return stringifyFormBody
};

class lineNotify {
    private apiKey: string
    constructor(apiKey: string) {
        this.apiKey = apiKey
    }
    async send(msg: string) {
        const res = await fetch('https://notify-api.line.me/api/notify', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': this.apiKey
            },
            body: parseToFormUrlEncoded({ message: msg })
        });
        return res;
    }
}

export = lineNotify;