export const data = [
    {
        date: 28,
        month: 2,
        movements: [
            {
                id: 1,
                type: 'income',
                amount: 10000,
                hour: "16:00",
                name: 'Pago sueldo',
                description: 'Pago de sueldo de Julio',
                account:
                {
                    name:"Santander",
                    icon: '💳',
                    color: '💳',
                }
            },
            {
                id: 2,
                type: 'expense',
                amount: 10000,
                hour: "13:00",
                name: 'Almuerzo con la oficina nnnnnnnnnnnnnnn',
                category:{
                    name: 'Comidas',
                    icon: '🍔',
                },
                description: 'Empanadas',
                account:{
                    name: "Efectivo"
                } 
            }
        ]
    },
    {
        date: 27,
        month: 2,
        movements: [
            {
                id: 10,
                type: 'income',
                amount: 10000,
                hour: "16:00",
                name: 'Pago sueldo',
                description: 'Pago de sueldo de Julio',
                account:
                {
                    name:"Santander",
                    icon: '💳',
                    color: '💳',
                }
            },
            {
                id: 20,
                type: 'expense',
                amount: 10000,
                hour: "13:00",
                name: 'Almuerzo',
                category:{
                    name: 'Comidas',
                    icon: '🍔',
                },
                description: 'Empanadas',
                account:{
                    name: "Efectivo"
                } 
            }
        ]
    }
]