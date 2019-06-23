// core
import { trigger, animate, transition, style, query } from '@angular/animations';


// animations applied to the content inside router-outlet, every time the router activates
export const routeAnimations = trigger('routeAnimations', [
  // The '* => *' will trigger the animation to change between any two states
  transition('* => *', [
    // this will apply on entering an element
    query(':enter',
      [ style({ opacity: 0 }) ],
      { limit: 1, optional: true }, // find one element & avoid errors if element does not exists
    ),
    // this will apply on leaving an element
    query(':leave',
      [ style({ opacity: 1 }), animate('100ms', style({ opacity: 0 })) ],
      { limit: 1, optional: true },
    ),
    // this will apply on entering an element again
    query(':enter',
      [ style({ opacity: 0 }), animate('100ms', style({ opacity: 1 })) ],
      { limit: 1, optional: true },
    )
  ])
]);
