
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ActividadScalarFieldEnum = {
  id: 'id',
  id_semillero: 'id_semillero',
  nombre: 'nombre',
  descripcion: 'descripcion',
  url: 'url',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  estado: 'estado',
  creado_en: 'creado_en',
  eliminado_en: 'eliminado_en'
};

exports.Prisma.Estudiante_actividadScalarFieldEnum = {
  id: 'id',
  id_actividad: 'id_actividad',
  id_estudiante: 'id_estudiante',
  estado: 'estado'
};

exports.Prisma.Programa_academicoScalarFieldEnum = {
  id: 'id',
  id_director: 'id_director',
  nombre: 'nombre',
  estado: 'estado',
  creado_en: 'creado_en',
  eliminado_en: 'eliminado_en'
};

exports.Prisma.RolScalarFieldEnum = {
  id: 'id',
  nombre: 'nombre'
};

exports.Prisma.SemilleroScalarFieldEnum = {
  id: 'id',
  id_prog_acad: 'id_prog_acad',
  id_docente: 'id_docente',
  nombre: 'nombre',
  descripcion: 'descripcion',
  cupo: 'cupo',
  fecha_limite_inscripcion: 'fecha_limite_inscripcion',
  fecha_inicio: 'fecha_inicio',
  fecha_fin: 'fecha_fin',
  cant_act_aprobatoria: 'cant_act_aprobatoria',
  estado: 'estado',
  creado_en: 'creado_en',
  eliminado_en: 'eliminado_en'
};

exports.Prisma.UsuarioScalarFieldEnum = {
  id: 'id',
  id_rol: 'id_rol',
  nombre_completo: 'nombre_completo',
  correo_personal: 'correo_personal',
  correo_institucional: 'correo_institucional',
  telefono: 'telefono',
  contrasena: 'contrasena',
  estado: 'estado',
  token_reseteo: 'token_reseteo',
  token_reseteo_expiracion: 'token_reseteo_expiracion',
  creado_en: 'creado_en',
  eliminado_en: 'eliminado_en'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.actividadOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  descripcion: 'descripcion',
  url: 'url'
};

exports.Prisma.programa_academicoOrderByRelevanceFieldEnum = {
  nombre: 'nombre'
};

exports.Prisma.rolOrderByRelevanceFieldEnum = {
  nombre: 'nombre'
};

exports.Prisma.semilleroOrderByRelevanceFieldEnum = {
  nombre: 'nombre',
  descripcion: 'descripcion'
};

exports.Prisma.usuarioOrderByRelevanceFieldEnum = {
  nombre_completo: 'nombre_completo',
  correo_personal: 'correo_personal',
  correo_institucional: 'correo_institucional',
  telefono: 'telefono',
  contrasena: 'contrasena',
  token_reseteo: 'token_reseteo'
};


exports.Prisma.ModelName = {
  actividad: 'actividad',
  estudiante_actividad: 'estudiante_actividad',
  programa_academico: 'programa_academico',
  rol: 'rol',
  semillero: 'semillero',
  usuario: 'usuario'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
