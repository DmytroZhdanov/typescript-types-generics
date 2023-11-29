/*
  You have a type named AllType. There's a function called compare that takes two objects. These objects contain fields of type AllType.
  Your task is to use Pick and generics to indicate that the fields of these objects belong to AllType.
  The 'compare' function should return AllType.
*/

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export {};
