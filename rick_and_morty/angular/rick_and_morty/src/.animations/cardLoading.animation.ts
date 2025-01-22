import {animate, animation, query, style} from "@angular/animations"

export const cardLoading = animation([
  query(".container-fluid", [
    style({
      opacity: "0",
      transform : "translate(-50px, -50px)",
    }),

    animate("0.5s ease", style({
      opacity: "1",
      transform : "translate(0px, 0px)"
    }))
  ])
])
