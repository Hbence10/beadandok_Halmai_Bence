import {animate, animation, query, style, transition, trigger} from "@angular/animations"

export const showDetailsPanel = animation([

    query("#sideBar", [
      style({
        left: "-550px",
        opacity : "0"
      }),

      animate("0.5s ease", style({
        left: "0px",
        opacity: "1"
      }))
    ])



])
