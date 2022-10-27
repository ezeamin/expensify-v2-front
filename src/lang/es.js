const es = {
  LOADING: 'Cargando',
  NO_DATA: 'Sin datos',
  BACK: 'Atrás',

  NOT_VALID_MSG: {
    REQUIRED: 'Campo requerido',
    CATEGORY: 'Seleccione una categoria',
    ACCOUNT: 'Seleccione una cuenta',
    ACCOUNT_TYPE: 'Seleccione un tipo de cuenta',
    NAME: 'Nombre no valido',
    CONCEPT: 'Concepto no valido',
    CURRENT_BALANCE: 'Saldo no valido',
  },

  ERROR: {
    ERROR: 'Error',
    ERROR_404: 'Error 404',
    ERROR_500: 'Error 500',
    ERROR_404_MSG: 'No se encontro la pagina',
    ERROR_500_MSG: 'Error interno del servidor',
    ERROR_TRANSFER_NO_BALANCE:
      'No se puede transferir desde/hacia una cuenta sin saldo alterable (crédito por ejemplo)',
    UNEXPECTED: 'Error inesperado',
    MAIL_SEND_ERROR: 'Error al enviar el correo',
  },

  CATEGORIES: 'Categorias',
  ACCOUNTS: 'Cuentas',
  STATS: 'Estadísticas',
  TABLES: 'Tablas',
  DATA: 'Datos',

  DAY: 'Día',
  WEEK: 'Semana',
  MONTH: 'Mes',
  YEAR: 'Año',

  WELCOME: 'Bienvenido',
  HELLO: 'Hola',
  OVERVIEW: 'Resumen',
  CHARTS: 'Gráficos',
  SETTINGS: 'Ajustes',
  BALANCE: 'Saldo',
  STATE: 'Estado',

  LIMIT: 'Límite',
  MONTHLY_LIMIT: 'Límite mensual',
  CURRENT_PERIOD: 'Periodo actual',
  DAYS_PASSED: 'Días transcurridos',
  DAYS_LEFT: 'Días restantes',

  SPENT: 'Gastado',

  DAILY_AVERAGE: 'Promedio diario',

  LEFT_BALANCE_MSG: 'De continuar así, llegarás a fin de mes con',

  CATEGORY_CHART: 'Gráfico por categoría',
  DAY_EXPENSES_CHART: 'Gráfico de gastos diarios',
  DAY_INCOMES_CHART: 'Gráfico de ingresos diarios',
  HISTORIC_CHART: 'Gráfico histórico',

  CHANGE_PERSONAL_DATA: 'Cambiar datos personales',
  CHANGE_PASSWORD: 'Cambiar contraseña',
  CHANGE_LANGUAGE: 'Cambiar idioma',
  LOG_OUT: 'Cerrar sesión',
  RESET_DATA: 'Reiniciar datos',

  TRANSFERS: 'Transferencias',
  EXPENSES: 'Gastos',
  INCOMES: 'Ingresos',

  TRANSFER: 'Transferencia',
  EXPENSE: 'Gasto',
  INCOME: 'Ingreso',

  MONTHS: [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ],

  DAYS: [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ],

  DAYS_SHORT: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],

  CATEGORY: 'Categoría',
  CONCEPT: 'Concepto',
  NAME: 'Nombre',
  AMOUNT: 'Cantidad',
  AMOUNT_EXP: 'Importe',
  DATE: 'Fecha',
  HOUR: 'Hora',
  DESCRIPTION: 'Descripción',
  ACCOUNT: 'Cuenta',
  ACTIONS: 'Acciones',
  ORIGIN_ACCOUNT: 'Cuenta origen',
  DESTINATION_ACCOUNT: 'Cuenta destino',

  ADD_TRANSFER: 'Añadir transferencia',
  ADD_EXPENSE: 'Añadir gasto',
  ADD_INCOME: 'Añadir ingreso',

  REMOVE_TRANSFER: 'Eliminar transferencia',
  REMOVE_EXPENSE: 'Eliminar gasto',
  REMOVE_INCOME: 'Eliminar ingreso',

  EDIT_TRANSFER: 'Editar transferencia',
  EDIT_EXPENSE: 'Editar gasto',
  EDIT_INCOME: 'Editar ingreso',

  REMOVE_TRANSFER_CONFIRM:
    '¿Estás seguro de que quieres eliminar esta transferencia?',
  REMOVE_EXPENSE_CONFIRM: '¿Estás seguro de que quieres eliminar este gasto?',
  REMOVE_INCOME_CONFIRM: '¿Estás seguro de que quieres eliminar este ingreso?',

  EDIT_TRANSFER_CONFIRM:
    '¿Estás seguro de que quieres editar esta transferencia?',
  EDIT_EXPENSE_CONFIRM: '¿Estás seguro de que quieres editar este gasto?',
  EDIT_INCOME_CONFIRM: '¿Estás seguro de que quieres editar este ingreso?',

  ARE_YOU_SURE: '¿Estás seguro?',

  TRANSFER_CONFIRMATION: 'Estas transfiriendo',

  EXPENSE_OK: 'Gasto añadido correctamente',
  INCOME_OK: 'Ingreso añadido correctamente',
  TRASNFER_OK: 'Transferencia realizada con éxito',

  REMOVE: 'Eliminar',
  EDIT: 'Editar',

  CANCEL: 'Cancelar',
  SAVE: 'Guardar',

  LANGUAGE: 'Idioma',
  CURRENCY: 'Moneda',

  PERIOD: 'Periodo',
  FILTER: 'Filtro',

  PERIOD_MSG: 'Acá podés ver tus gastos e ingresos de periodos anteriores',
  TOTAL_DAYS: 'Días totales',
  TOTAL_INCOME: 'Ingresos totales',
  REMAINING_BALANCE: 'Saldo restante',
  FINAL_BALANCE: 'Saldo final',
  SEE_DETAIL: 'Ver detalle',
  SEE_CHARTS: 'Ver gráficos',

  DEBT: 'Deuda',
  DEBTS: 'Deudas',
  OTHER_DEBTS: 'Deudas ajenas',
  OTHER_DEBTS_MSG: 'Acá podes cargar las deudas de otros cornudos con vos',
  OTHER_DEBTS_EMPTY_MSG: 'Lamentablemente, no hay deudas para listar :(',
  NEW_OTHER_DEBT: 'Nueva deuda ajena',
  OWN_DEBTS: 'Deudas propias',
  OWN_DEBTS_MSG: 'Acá podes cargar tus deudas con otras personas',
  OWN_DEBTS_EMPTY_MSG: 'Felicidades! No hay deudas para listar :D',
  NEW_OWN_DEBT: 'Nueva deuda propia',

  NEW_ACCOUNT: 'Nueva cuenta',
  ACCOUNT_TYPE: 'Tipo de cuenta',
  CURRENT_BALANCE: 'Saldo actual',

  NEW_CATEGORY: 'Nueva categoría',

  PAYMENTS: 'Pagos',
  PAYMENT: 'Pago',
  NEW_PAYMENT: 'Nuevo pago',
  PAYMENT_MSG: 'Acá podes cargar los pagos recurrentes',

  LOGIN_MSG: "Por favor, ingresa tus datos",
  LOGIN_BUTTON: "Continuar",
  PASSWORD: "Contraseña",
  FORGOT_PASSWORD: "¿Olvidaste tu contraseña?",
  REMEMBER_ME: "Recordarme",
  NEW_USER_MSG: "¿No tenés cuenta? Registrate acá",
  PASSWORD_REQUIREMENTS: "La contraseña debe tener al menos 6 caracteres, una mayuscula, una minuscula y un numero",
  REPEAT_PASSWORD: "Repetir contraseña",
  INITIAL_MONTHLY_LIMIT: "Límite mensual inicial",
  REGISTER_BUTTON: "Registrarse",
  NAME_OR_NICKNAME: "Nombre o apodo",

  RECOVER_PASSWORD: "Recuperar contraseña",
  RECOVER_PASSWORD_MSG: "Enviaremos un correo de recuperacion a la casilla que corresponda con tu DNI",
  SEND: "Enviar",
  RECOVER_PASSWORD_EMAIL_SENT: "Enviado a",
  NEW_PASSWORD_MSG: "Por favor, ingresa tu nueva contraseña",
  NEW_PASSWORD: "Nueva contraseña",
};

export default es;
