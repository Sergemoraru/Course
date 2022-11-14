import {Router} from 'express';
import { body, oneOf, validationResult } from 'express-validator';
import { title } from 'process';
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';
import { handleInputErrors } from './modules/middleware';

const router = Router();

/**
 * Product
 */

router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {
})
router.post('/product',  body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)

/**
 * Update
 */

router.get('/update', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id', 
    body('title').optional(), 
    body('body').optional(), 
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRICATED']).optional(),
    body('verison').optional(), 
    updateUpdate   
    )
router.post('/update', 
    body('title').exists().isString(), 
    body('body').exists().isString(),
    body('productId').exists().isSemVer(),
createUpdate)
router.delete('/update/:id', deleteUpdate)

/**
 * Update Point
 */

router.get('/update-point', () => {})
router.get('/update-point/:id', () => {})
router.put('/update-point/:id', 
    body('name').optional().isString, 
    body('description').optional().isString, 
    () => {}
)
router.post('/update-point', 
    body('name').isString, 
    body('description').isString,
    body('updateId').exists().isString(),
    () => {})
router.delete('/update-point/:id', () => {})

export default router;
