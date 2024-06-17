import express, { json, urlencoded } from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from "../build/routes";
import cors from 'cors';

const app = express()
app.use(
  urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use("/docs", swaggerUi.serve, async (_req, res) => {
  return res.send(
    swaggerUi.generateHTML(await import("../build/swagger.json"))
  );
});

app.use(json());

RegisterRoutes(app);

app.listen(3000, () => {
  console.log('Server started on port 3000')
})