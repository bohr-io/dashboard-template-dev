import { API, RegisterOptions } from "lambda-api";

module.exports = (api: API, opts: RegisterOptions) => {
    api.get("/", async (req, res) => {
        try {
            res.cookie('TOKEN', 'bar', {
                secure: true
            }).send({ success: true });
        } catch (e) {
            console.error(e);
            res.error(e);
        }
    });
};