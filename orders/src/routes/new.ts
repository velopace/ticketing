import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import { body } from 'express-validator';
import { requireAuth, validateRequest } from '@velopaceticketing/common';

const router = express.Router();

router.post(
  '/api/orders',
  requireAuth,
  [
    body('ticketId')
      .not()
      .isEmpty()
      .withMessage('TicketId must be provided')
      .custom((input: string) => mongoose.Types.ObjectId.isValid(input)),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    res.send({});
  }
);

export { router as newOrderRouter };
