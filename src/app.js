import  express  from "express";
import morgan from "morgan";
//Rutas
import rutasRouters from "./routers/trabajador.routers";

const app=express();

//Configuración
app.set("port",4000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

//Rutas
app.use("/api/trabajador",rutasRouters);

export default app;