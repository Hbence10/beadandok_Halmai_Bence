import {animate, animation, query, style, transition, trigger} from "@angular/animations"

export const hideDetailsPanel = animation([

    query("#sideBar", [
      style({
        left: "0px",
        opacity : "1"
      }),

      animate("0.5s ease", style({
        left: "-550px",
        opacity: "0"
      }))
    ])



])
