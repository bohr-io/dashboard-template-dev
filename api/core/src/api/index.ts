import { API, RegisterOptions } from "lambda-api";
import prisma from '../../prisma/prisma';

module.exports = (api: API, opts: RegisterOptions) => {
    api.get("/", async (req, res) => {
        try {
            res.status(200).json({ ok: true });
        } catch (e) {
            console.error(e);
            res.error(e);
        }
    });
};