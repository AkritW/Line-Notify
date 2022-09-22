import lineNotify from "./index";

const main = async () => {
    // insert API key
    const lineDevGroup = new lineNotify('Bearer xxxxxxxxxxxxxxxxxx')
    const lineCommunityGroup = new lineNotify('Bearer xxxxxxxxxxxxxxxxx')

    // send 
    const res1 = await lineDevGroup.send(JSON.stringify({error: "Uncaught TypeError: undefined is not a function"}))
    const res2 = await lineCommunityGroup.send("Hello My Community")
    
    // log
    console.log(res1)
    console.log(res2)
}

main()