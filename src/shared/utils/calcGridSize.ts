import { Size } from "@/shared";

export const calcGridSize = (questions: Problem.Questions): Size => {
  let xSize = 0;
  let ySize = 0;

  for (const {position, charactersCount} of questions.row) {
    xSize = Math.max(xSize, position.x + charactersCount)
    ySize = Math.max(ySize, position.y)
  }
  for (const {position, charactersCount} of questions.column) {
    ySize = Math.max(ySize, position.y + charactersCount)
    xSize = Math.max(xSize, position.x)
  }

  return {
    x: xSize,
    y: ySize
  }
}