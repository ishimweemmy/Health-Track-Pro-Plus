export const formatTime = (time: string) => {
    const stringfiedTime = new Date(time).toString()
    const part1 = stringfiedTime.slice(0, 10)
    const yearPart = new Date(time).getFullYear().toString().slice(1)
    const part2 = stringfiedTime.slice(16, 24)
    return `${part1}-${yearPart}-${part2}`.replaceAll(' ', '-')
}