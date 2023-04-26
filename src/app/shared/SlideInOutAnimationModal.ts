import { animate, state, style, transition, trigger, group } from "@angular/animations";

export const SlideInOutAnimationModal = [
    trigger('slideInOutModal', [
        state('in', style({
          'opacity': '1', 'visibility': 'visible',
        })),
        state('out', style({
          'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            })),
        ])]),
        transition('out => in', [group([
          animate('800ms ease-in-out', style({
            'visibility': 'visible'
          })),
          animate('800ms ease-in-out', style({
              'opacity': '1'
          })),
        ])]),
    ])
];
