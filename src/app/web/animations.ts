import {animate, animation, query, sequence, stagger, style} from "@angular/animations";

export const SidebarOpenAnimation = animation([
  style({left: "-{{menuWidth}}"}),
  query(".dash_sidebar", [style({transform: "translateX(-{{menuWidth}})"})], {optional: true}),
  sequence([
    animate("600ms", style({left: "0"})),
    query(".dash_sidebar", [
      stagger(50, [animate("{{animationStyle}}", style({transform: "none"}))])
    ],{optional: true})
  ])
]);

export const SidebarCloseAnimation = animation([
  style({left: "0"}),
  query(".dash_sidebar", [style({transform: "none"})], {optional: true}),
  sequence([
    query(".dash_sidebar", [
      stagger(-50, [
        animate(
          "{{animationStyle}}",
          style({transform: "translateX(-{{menuWidth}})"})
        )
      ],)
    ], {optional: true}),
    animate("600ms", style({left: "-{{menuWidth}}"}))
  ])
]);
