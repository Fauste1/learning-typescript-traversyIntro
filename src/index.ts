// Types
let id: number = 0
let x: number[] = [1,2,3,4,5]
let y: any[] = [1, "1", true]

// Tuple - exactly defined array; must match the order
let person: [number, string, boolean] = [3, '3', false]

// Array of Tuples
let employees: [number, string][]

employees = [
    [1, 'Pete'],
    [2, 'Jill'],
    [3, 'John']
]

// Union
let pid: string | number
pid = 1
pid = '1'

// Enum
enum direction {
    up,
    down,
    left,
    right
}

enum direction2 {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

console.log(direction2.up)

// Objects & interfaces
type User = {
    id: number,
    name: string
}

let user: User = {
    id: 1,
    name: 'john'
}