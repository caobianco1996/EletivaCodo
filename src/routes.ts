import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUsersController } from "./controllers/ListUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { ListCategorysController } from "./controllers/ListCategoryController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";

import { CreateProductController } from "./controllers/CreateProductController";
import { ListProductController } from "./controllers/ListProductController";
import { DeleteProductController } from "./controllers/DeleteProductController";
import { UpdateProductController } from "./controllers/UpdateProductController";

import { CreateClientController } from "./controllers/CreateClientController";
import { ListClientsController } from "./controllers/ListClientController";
import { DeleteClientController } from "./controllers/DeleteClientController";
import { UpdateClientController } from "./controllers/UpdateClientController";

import { CreateVendaController } from "./controllers/CreateVendaController";
import { ListVendasController } from "./controllers/ListVendaController";
import { DeleteVendaController } from "./controllers/DeleteVendaController";
import { UpdateVendaController } from "./controllers/UpdateVendaController";

import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const createUserController = new CreateUserController();
const listUsersController = new ListUsersController();
const deleteUserController = new DeleteUserController();
const updateUserController = new UpdateUserController();

const autenticationUserController = new AuthenticateUserController();

const createCategoryController = new CreateCategoryController();
const listCategorysController = new ListCategorysController();
const deleteCategoryController = new DeleteCategoryController();
const updateCategoryController = new UpdateCategoryController();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

const createClientController = new CreateClientController();
const listClientsController = new ListClientsController();
const deleteClientController = new DeleteClientController();
const updateClientController = new UpdateClientController();

const createVendaController = new CreateVendaController();
const listVendasController = new ListVendasController();
const deleteVendaController = new DeleteVendaController();
const updateVendaController = new UpdateVendaController();

const router = Router();

router.post("/users", createUserController.handle);
router.post("/login", autenticationUserController.handle);

router.use(ensureAuthenticated);
router.put("/users", updateUserController.handle);

router.use(ensureAdmin);
router.delete("/users/:id", deleteUserController.handle);
router.get("/users", listUsersController.handle);

router.post("/category", createCategoryController.handle);
router.get("/category", listCategorysController.handle);
router.delete("/category/:id", deleteCategoryController.handle);
router.put("/category", updateCategoryController.handle);

router.post("/product", createProductController.handle);
router.get("/product", listProductController.handle);
router.delete("/product/:id", deleteProductController.handle);
router.put("/product", updateProductController.handle);

router.post("/client", createClientController.handle);
router.get("/client", listClientsController.handle);
router.delete("/client/:id", deleteClientController.handle);
router.put("/client", updateClientController.handle);

router.post("/venda", createVendaController.handle);
router.get("/Venda", listVendasController.handle);
router.delete("/venda/:id", deleteVendaController.handle);
router.put("/Venda", updateVendaController.handle);

export { router };
