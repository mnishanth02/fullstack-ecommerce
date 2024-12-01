import { Request, Response } from 'express';

export function listProducts(req: Request, res: Response) {
    res.send("listProducts")
}
export function getProductById(req: Request, res: Response) {
    res.send("getProductById");
}
export function createProduct(req: Request, res: Response) {
    console.log(req.body);
    res.send("Product Created");
}
export function updateProduct(req: Request, res: Response) {
    res.send("Product Updated");
}
export function deleteProduct(req: Request, res: Response) {
    res.send("Product Deleted");
}