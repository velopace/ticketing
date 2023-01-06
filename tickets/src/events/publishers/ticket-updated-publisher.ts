import {
  Publisher,
  Subjects,
  TicketUpdatedEvent,
} from '@velopaceticketing/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
