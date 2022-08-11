import { APIGatewayEvent, Context } from 'aws-lambda';
import createAPI from 'lambda-api';
import prisma from "./prisma/prisma";

const api = createAPI();

api.use(require("./middleware/auth"));

api.register(require("./src/api/index"), { prefix: "/api" });

export async function handler(event: APIGatewayEvent, context: Context, callback: any) {
    return await api.run(event, context);
}