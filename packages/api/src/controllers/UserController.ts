import { Request, Response } from 'express';

import { AppError } from '@/errors/AppError';
import { User } from '@/models/User';
import { Event } from '@/models/Event';

export class UserController {
  async me(request: Request, response: Response) {
    const { userId } = request;

    try {
      const user = await User.findById(userId);
      return response.json(user);
    } catch {
      throw new AppError('User not found');
    }
  }

  async myEvents(request: Request, response: Response) {
    const { userId } = request;

    try {
      const events = await Event.find({ userId });
      return response.json(events);
    } catch {
      throw new AppError('User events not found');
    }
  }
}