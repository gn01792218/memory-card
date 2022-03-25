export default function useSwitch<T>(arr: T[], index1: number, index2: number): T[] {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
  return arr
}
