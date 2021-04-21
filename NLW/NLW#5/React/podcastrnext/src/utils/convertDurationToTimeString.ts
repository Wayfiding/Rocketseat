export function convertDurationToTimeString(duration: number) {
    const hours = Math.floor(duration /3600)
    const minute = Math.floor((duration %3600 )/60)
    const seconds = duration % 60

    const timeString = [hours,minute,seconds].map(unit => String(unit).padStart(2,'0'))
    .join(':')

    return timeString
}