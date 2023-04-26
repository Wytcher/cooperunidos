import { animate, state, style, transition, trigger, group } from "@angular/animations";

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '50px','opacity': '1', 'visibility': 'visible', 'margin-bottom': '20px'
        })),
        state('out', style({
          'max-height': '0px','opacity': '0', 'visibility': 'hidden', 'margin-bottom': '0px'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
              'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            })),
            animate('700ms ease-in-out', style({
              'margin-bottom': '0'
          }))
        ])]),
        transition('out => in', [group([
          animate('800ms ease-in-out', style({
            'visibility': 'visible'
          })),
          animate('600ms ease-in-out', style({
              'max-height': '30px'
          })),
          animate('800ms ease-in-out', style({
              'opacity': '1'
          })),
          animate('700ms ease-in-out', style({
            'margin-bottom': '20px'
        }))
        ])]),
    ])
];
