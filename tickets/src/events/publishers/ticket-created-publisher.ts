import {
  Publisher,
  Subjects,
  TicketCreatedEvent,
} from '@velopaceticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
