import { Request, Response } from 'express';
import {db} from "@/db";
import {productsTable} from "@/db/product-schema";

export function listProducts(req: Request, res: Response) {
    res.send("listProducts")
}
export function getProductById(req: Request, res: Response) {
    res.send("getProductById");
}
export async  function createProduct(req: Request, res: Response) {
    console.log(req.body);
    const [product] = await db.insert(productsTable).values(req.body).returning();
    res.status(201).json(product);
}
export function updateProduct(req: Request, res: Response) {
    res.send("Product Updated");
}
export function deleteProduct(req: Request, res: Response) {
    res.send("Product Deleted");
}