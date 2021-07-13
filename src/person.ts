import { GridInterface } from "@simple-html/grid";

if (!window.personInterface) {
  window.personInterface = new GridInterface<{ name: string }>({
    cellHeight: 20,
    panelHeight: 25,
    footerHeight: 40,
    readonly: true,
    selectionMode: "multiple",
    groups: [
      {
        width: 200,
        rows: [
          {
            header: "Name",
            attribute: "name",
            filterable: {},
          },
        ],
      },
    ],
  });
}

export const personInterface = window.personInterface;
