//event has re obj -> req.body, req.headers
module.exports.handler = async (event) => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({message: "Hi from whatsapp demp API!"}),
    };
};
  