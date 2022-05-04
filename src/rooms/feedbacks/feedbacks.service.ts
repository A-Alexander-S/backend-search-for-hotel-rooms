import { Injectable } from '@nestjs/common';

export interface IFeedback {
  id?: number,
  message: string,
  author: number,
}

@Injectable()
export class FeedbacksService {
  private readonly feedbacks = {
    1: [{ id: 1, message: 'First feedback', author: 'Ia' }],
  };

  create(idRooms: number, feedback: IFeedback): IFeedback {
    if (!this.feedbacks[idRooms]) {
      this.feedbacks[idRooms] = []
    }

    this.feedbacks[idRooms].push(feedback);
    return feedback;
  }

  find(idRooms: number): IFeedback[] | null {
    return this.feedbacks[idRooms] || null;
  }

  remove(idRooms: number, idFeedback: number): IFeedback[] | null {
    if (!this.feedbacks[idRooms]) {
      return null;
    }

    const indexFeedback = this.feedbacks[idRooms].findIndex(
      (r) => r.id === idFeedback
    );
    if (indexFeedback === -1) {
      return null;
    }
    return this.feedbacks[idRooms].splice(indexFeedback, 1);
  }
}
