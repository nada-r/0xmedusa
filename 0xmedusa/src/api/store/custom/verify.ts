const verifyRes = await fetch(`https://developer.worldcoin.org/api/v1/verify/${app_c7e5d4b63c67526e8d1b437b245aae86}`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({...proof, action: "proof-of-humanity"}),
})
