import { getconexion} from "./../database/database";

// Consultando todos los cursos 
const getTrabajadores = async (req, res)=>{
    try {
        const conexion =  await getconexion();
        const result = await conexion.query("SELECT * FROM trabajador");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};
// Consultando un solo trbajador
const getUnTrabajador = async (req, res)=>{
    try {
        const{ id } = req.params 
        const conexion=  await getconexion();
        const result = await conexion.query("SELECT * FROM trabajador WHERE _id = ?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);  
    }
};
//Insertando un trabajador
const addTrabajador= async (req, res) => {
    try {
        const{nombre, apellidos, imss, rfc, puesto, sueldo, antiguedad}= req.body;
        if(nombre==undefined|| apellidos==undefined||  imss==undefined||  rfc==undefined||  puesto==undefined||  sueldo==undefined||  antiguedad==undefined){
            res.status(400).json({message:"LLena cada uno de lo campos"});
        }
        const conexion=  await getconexion();
        const trabajador = {nombre, apellidos, imss, rfc, puesto, sueldo, antiguedad};
        await conexion.query("INSERT INTO trabajador SET ?", trabajador);
        res.json({message: "INSERCION EXITOSA!!!"}); 
    } catch (error) {
        res.status(500);
        res.send(erorr.message);
    }
};

//Eliminación de un trabajador
const deleteTrabajador = async (req, res)=>{
    try {
        const{ id } = req.params 
        const conexion =  await getconexion();
        const result = await conexion.query("DELETE FROM trabajador WHERE _id = ?",id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message); 
    }
};

//Actualizar un trabajador 
const updateTrabajador = async (req, res)=>{
    try {
        const { id } = req.params;
        const{_id,nombre, apellidos, imss, rfc, puesto, sueldo, antiguedad}= req.body;

        if(id==undefined||nombre==undefined|| apellidos==undefined||  imss==undefined||  rfc==undefined||  puesto==undefined||  sueldo==undefined||  antiguedad==undefined){
            res.status(400).json({message:"LLena cada uno de lo campos"});
        }

        const trabajador = {_id,nombre, apellidos, imss, rfc, puesto, sueldo, antiguedad};
        const conexion = await getconexion();
        const result = await conexion.query("UPDATE trabajador SET ? WHERE _id = ?",[trabajador, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
        
    }
};

export const methods ={
    getTrabajadores,
    getUnTrabajador,
    addTrabajador,
    deleteTrabajador,
    updateTrabajador
}