import fetch from 'node-fetch';

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

const lineNotify = async (msg: string, lineApiKey: string): Promise<any> => {    
    const res = await fetch('https://notify-api.line.me/api/notify', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': lineApiKey
        },
        body: parseToFormUrlEncoded({ message: msg })
    });
    return res;
}

export = lineNotify;
