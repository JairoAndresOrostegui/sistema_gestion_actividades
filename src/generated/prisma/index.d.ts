
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model actividad
 * 
 */
export type actividad = $Result.DefaultSelection<Prisma.$actividadPayload>
/**
 * Model estudiante_actividad
 * 
 */
export type estudiante_actividad = $Result.DefaultSelection<Prisma.$estudiante_actividadPayload>
/**
 * Model programa_academico
 * 
 */
export type programa_academico = $Result.DefaultSelection<Prisma.$programa_academicoPayload>
/**
 * Model rol
 * 
 */
export type rol = $Result.DefaultSelection<Prisma.$rolPayload>
/**
 * Model semillero
 * 
 */
export type semillero = $Result.DefaultSelection<Prisma.$semilleroPayload>
/**
 * Model usuario
 * 
 */
export type usuario = $Result.DefaultSelection<Prisma.$usuarioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Actividads
 * const actividads = await prisma.actividad.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Actividads
   * const actividads = await prisma.actividad.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.actividad`: Exposes CRUD operations for the **actividad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actividads
    * const actividads = await prisma.actividad.findMany()
    * ```
    */
  get actividad(): Prisma.actividadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.estudiante_actividad`: Exposes CRUD operations for the **estudiante_actividad** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiante_actividads
    * const estudiante_actividads = await prisma.estudiante_actividad.findMany()
    * ```
    */
  get estudiante_actividad(): Prisma.estudiante_actividadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.programa_academico`: Exposes CRUD operations for the **programa_academico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programa_academicos
    * const programa_academicos = await prisma.programa_academico.findMany()
    * ```
    */
  get programa_academico(): Prisma.programa_academicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rol`: Exposes CRUD operations for the **rol** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rols
    * const rols = await prisma.rol.findMany()
    * ```
    */
  get rol(): Prisma.rolDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.semillero`: Exposes CRUD operations for the **semillero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Semilleros
    * const semilleros = await prisma.semillero.findMany()
    * ```
    */
  get semillero(): Prisma.semilleroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.usuarioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    actividad: 'actividad',
    estudiante_actividad: 'estudiante_actividad',
    programa_academico: 'programa_academico',
    rol: 'rol',
    semillero: 'semillero',
    usuario: 'usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "actividad" | "estudiante_actividad" | "programa_academico" | "rol" | "semillero" | "usuario"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      actividad: {
        payload: Prisma.$actividadPayload<ExtArgs>
        fields: Prisma.actividadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.actividadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.actividadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          findFirst: {
            args: Prisma.actividadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.actividadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          findMany: {
            args: Prisma.actividadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>[]
          }
          create: {
            args: Prisma.actividadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          createMany: {
            args: Prisma.actividadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.actividadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          update: {
            args: Prisma.actividadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          deleteMany: {
            args: Prisma.actividadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.actividadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.actividadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$actividadPayload>
          }
          aggregate: {
            args: Prisma.ActividadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActividad>
          }
          groupBy: {
            args: Prisma.actividadGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActividadGroupByOutputType>[]
          }
          count: {
            args: Prisma.actividadCountArgs<ExtArgs>
            result: $Utils.Optional<ActividadCountAggregateOutputType> | number
          }
        }
      }
      estudiante_actividad: {
        payload: Prisma.$estudiante_actividadPayload<ExtArgs>
        fields: Prisma.estudiante_actividadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.estudiante_actividadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiante_actividadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.estudiante_actividadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiante_actividadPayload>
          }
          findFirst: {
            args: Prisma.estudiante_actividadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiante_actividadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.estudiante_actividadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiante_actividadPayload>
          }
          findMany: {
            args: Prisma.estudiante_actividadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiante_actividadPayload>[]
          }
          create: {
            args: Prisma.estudiante_actividadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiante_actividadPayload>
          }
          createMany: {
            args: Prisma.estudiante_actividadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.estudiante_actividadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiante_actividadPayload>
          }
          update: {
            args: Prisma.estudiante_actividadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiante_actividadPayload>
          }
          deleteMany: {
            args: Prisma.estudiante_actividadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.estudiante_actividadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.estudiante_actividadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$estudiante_actividadPayload>
          }
          aggregate: {
            args: Prisma.Estudiante_actividadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstudiante_actividad>
          }
          groupBy: {
            args: Prisma.estudiante_actividadGroupByArgs<ExtArgs>
            result: $Utils.Optional<Estudiante_actividadGroupByOutputType>[]
          }
          count: {
            args: Prisma.estudiante_actividadCountArgs<ExtArgs>
            result: $Utils.Optional<Estudiante_actividadCountAggregateOutputType> | number
          }
        }
      }
      programa_academico: {
        payload: Prisma.$programa_academicoPayload<ExtArgs>
        fields: Prisma.programa_academicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.programa_academicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programa_academicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.programa_academicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programa_academicoPayload>
          }
          findFirst: {
            args: Prisma.programa_academicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programa_academicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.programa_academicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programa_academicoPayload>
          }
          findMany: {
            args: Prisma.programa_academicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programa_academicoPayload>[]
          }
          create: {
            args: Prisma.programa_academicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programa_academicoPayload>
          }
          createMany: {
            args: Prisma.programa_academicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.programa_academicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programa_academicoPayload>
          }
          update: {
            args: Prisma.programa_academicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programa_academicoPayload>
          }
          deleteMany: {
            args: Prisma.programa_academicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.programa_academicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.programa_academicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$programa_academicoPayload>
          }
          aggregate: {
            args: Prisma.Programa_academicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrograma_academico>
          }
          groupBy: {
            args: Prisma.programa_academicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Programa_academicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.programa_academicoCountArgs<ExtArgs>
            result: $Utils.Optional<Programa_academicoCountAggregateOutputType> | number
          }
        }
      }
      rol: {
        payload: Prisma.$rolPayload<ExtArgs>
        fields: Prisma.rolFieldRefs
        operations: {
          findUnique: {
            args: Prisma.rolFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.rolFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findFirst: {
            args: Prisma.rolFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.rolFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          findMany: {
            args: Prisma.rolFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>[]
          }
          create: {
            args: Prisma.rolCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          createMany: {
            args: Prisma.rolCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.rolDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          update: {
            args: Prisma.rolUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          deleteMany: {
            args: Prisma.rolDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.rolUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.rolUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$rolPayload>
          }
          aggregate: {
            args: Prisma.RolAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRol>
          }
          groupBy: {
            args: Prisma.rolGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolGroupByOutputType>[]
          }
          count: {
            args: Prisma.rolCountArgs<ExtArgs>
            result: $Utils.Optional<RolCountAggregateOutputType> | number
          }
        }
      }
      semillero: {
        payload: Prisma.$semilleroPayload<ExtArgs>
        fields: Prisma.semilleroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.semilleroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semilleroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.semilleroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semilleroPayload>
          }
          findFirst: {
            args: Prisma.semilleroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semilleroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.semilleroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semilleroPayload>
          }
          findMany: {
            args: Prisma.semilleroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semilleroPayload>[]
          }
          create: {
            args: Prisma.semilleroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semilleroPayload>
          }
          createMany: {
            args: Prisma.semilleroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.semilleroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semilleroPayload>
          }
          update: {
            args: Prisma.semilleroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semilleroPayload>
          }
          deleteMany: {
            args: Prisma.semilleroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.semilleroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.semilleroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$semilleroPayload>
          }
          aggregate: {
            args: Prisma.SemilleroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSemillero>
          }
          groupBy: {
            args: Prisma.semilleroGroupByArgs<ExtArgs>
            result: $Utils.Optional<SemilleroGroupByOutputType>[]
          }
          count: {
            args: Prisma.semilleroCountArgs<ExtArgs>
            result: $Utils.Optional<SemilleroCountAggregateOutputType> | number
          }
        }
      }
      usuario: {
        payload: Prisma.$usuarioPayload<ExtArgs>
        fields: Prisma.usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findFirst: {
            args: Prisma.usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          findMany: {
            args: Prisma.usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>[]
          }
          create: {
            args: Prisma.usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          createMany: {
            args: Prisma.usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          update: {
            args: Prisma.usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          deleteMany: {
            args: Prisma.usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    actividad?: actividadOmit
    estudiante_actividad?: estudiante_actividadOmit
    programa_academico?: programa_academicoOmit
    rol?: rolOmit
    semillero?: semilleroOmit
    usuario?: usuarioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ActividadCountOutputType
   */

  export type ActividadCountOutputType = {
    estudiante_actividad: number
  }

  export type ActividadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante_actividad?: boolean | ActividadCountOutputTypeCountEstudiante_actividadArgs
  }

  // Custom InputTypes
  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActividadCountOutputType
     */
    select?: ActividadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActividadCountOutputType without action
   */
  export type ActividadCountOutputTypeCountEstudiante_actividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estudiante_actividadWhereInput
  }


  /**
   * Count Type Programa_academicoCountOutputType
   */

  export type Programa_academicoCountOutputType = {
    semillero: number
  }

  export type Programa_academicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semillero?: boolean | Programa_academicoCountOutputTypeCountSemilleroArgs
  }

  // Custom InputTypes
  /**
   * Programa_academicoCountOutputType without action
   */
  export type Programa_academicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Programa_academicoCountOutputType
     */
    select?: Programa_academicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Programa_academicoCountOutputType without action
   */
  export type Programa_academicoCountOutputTypeCountSemilleroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: semilleroWhereInput
  }


  /**
   * Count Type SemilleroCountOutputType
   */

  export type SemilleroCountOutputType = {
    actividad: number
  }

  export type SemilleroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | SemilleroCountOutputTypeCountActividadArgs
  }

  // Custom InputTypes
  /**
   * SemilleroCountOutputType without action
   */
  export type SemilleroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SemilleroCountOutputType
     */
    select?: SemilleroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SemilleroCountOutputType without action
   */
  export type SemilleroCountOutputTypeCountActividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actividadWhereInput
  }


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    estudiante_actividad: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante_actividad?: boolean | UsuarioCountOutputTypeCountEstudiante_actividadArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountEstudiante_actividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estudiante_actividadWhereInput
  }


  /**
   * Models
   */

  /**
   * Model actividad
   */

  export type AggregateActividad = {
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  export type ActividadAvgAggregateOutputType = {
    id: number | null
    id_semillero: number | null
    estado: number | null
  }

  export type ActividadSumAggregateOutputType = {
    id: number | null
    id_semillero: number | null
    estado: number | null
  }

  export type ActividadMinAggregateOutputType = {
    id: number | null
    id_semillero: number | null
    nombre: string | null
    descripcion: string | null
    url: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    estado: number | null
    creado_en: Date | null
    eliminado_en: Date | null
  }

  export type ActividadMaxAggregateOutputType = {
    id: number | null
    id_semillero: number | null
    nombre: string | null
    descripcion: string | null
    url: string | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    estado: number | null
    creado_en: Date | null
    eliminado_en: Date | null
  }

  export type ActividadCountAggregateOutputType = {
    id: number
    id_semillero: number
    nombre: number
    descripcion: number
    url: number
    fecha_inicio: number
    fecha_fin: number
    estado: number
    creado_en: number
    eliminado_en: number
    _all: number
  }


  export type ActividadAvgAggregateInputType = {
    id?: true
    id_semillero?: true
    estado?: true
  }

  export type ActividadSumAggregateInputType = {
    id?: true
    id_semillero?: true
    estado?: true
  }

  export type ActividadMinAggregateInputType = {
    id?: true
    id_semillero?: true
    nombre?: true
    descripcion?: true
    url?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado?: true
    creado_en?: true
    eliminado_en?: true
  }

  export type ActividadMaxAggregateInputType = {
    id?: true
    id_semillero?: true
    nombre?: true
    descripcion?: true
    url?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado?: true
    creado_en?: true
    eliminado_en?: true
  }

  export type ActividadCountAggregateInputType = {
    id?: true
    id_semillero?: true
    nombre?: true
    descripcion?: true
    url?: true
    fecha_inicio?: true
    fecha_fin?: true
    estado?: true
    creado_en?: true
    eliminado_en?: true
    _all?: true
  }

  export type ActividadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actividad to aggregate.
     */
    where?: actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividads to fetch.
     */
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned actividads
    **/
    _count?: true | ActividadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActividadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActividadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActividadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActividadMaxAggregateInputType
  }

  export type GetActividadAggregateType<T extends ActividadAggregateArgs> = {
        [P in keyof T & keyof AggregateActividad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActividad[P]>
      : GetScalarType<T[P], AggregateActividad[P]>
  }




  export type actividadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: actividadWhereInput
    orderBy?: actividadOrderByWithAggregationInput | actividadOrderByWithAggregationInput[]
    by: ActividadScalarFieldEnum[] | ActividadScalarFieldEnum
    having?: actividadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActividadCountAggregateInputType | true
    _avg?: ActividadAvgAggregateInputType
    _sum?: ActividadSumAggregateInputType
    _min?: ActividadMinAggregateInputType
    _max?: ActividadMaxAggregateInputType
  }

  export type ActividadGroupByOutputType = {
    id: number
    id_semillero: number
    nombre: string
    descripcion: string | null
    url: string | null
    fecha_inicio: Date
    fecha_fin: Date
    estado: number
    creado_en: Date
    eliminado_en: Date | null
    _count: ActividadCountAggregateOutputType | null
    _avg: ActividadAvgAggregateOutputType | null
    _sum: ActividadSumAggregateOutputType | null
    _min: ActividadMinAggregateOutputType | null
    _max: ActividadMaxAggregateOutputType | null
  }

  type GetActividadGroupByPayload<T extends actividadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActividadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActividadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActividadGroupByOutputType[P]>
            : GetScalarType<T[P], ActividadGroupByOutputType[P]>
        }
      >
    >


  export type actividadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_semillero?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado?: boolean
    creado_en?: boolean
    eliminado_en?: boolean
    semillero?: boolean | semilleroDefaultArgs<ExtArgs>
    estudiante_actividad?: boolean | actividad$estudiante_actividadArgs<ExtArgs>
    _count?: boolean | ActividadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actividad"]>



  export type actividadSelectScalar = {
    id?: boolean
    id_semillero?: boolean
    nombre?: boolean
    descripcion?: boolean
    url?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    estado?: boolean
    creado_en?: boolean
    eliminado_en?: boolean
  }

  export type actividadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_semillero" | "nombre" | "descripcion" | "url" | "fecha_inicio" | "fecha_fin" | "estado" | "creado_en" | "eliminado_en", ExtArgs["result"]["actividad"]>
  export type actividadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    semillero?: boolean | semilleroDefaultArgs<ExtArgs>
    estudiante_actividad?: boolean | actividad$estudiante_actividadArgs<ExtArgs>
    _count?: boolean | ActividadCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $actividadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "actividad"
    objects: {
      semillero: Prisma.$semilleroPayload<ExtArgs>
      estudiante_actividad: Prisma.$estudiante_actividadPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_semillero: number
      nombre: string
      descripcion: string | null
      url: string | null
      fecha_inicio: Date
      fecha_fin: Date
      estado: number
      creado_en: Date
      eliminado_en: Date | null
    }, ExtArgs["result"]["actividad"]>
    composites: {}
  }

  type actividadGetPayload<S extends boolean | null | undefined | actividadDefaultArgs> = $Result.GetResult<Prisma.$actividadPayload, S>

  type actividadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<actividadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActividadCountAggregateInputType | true
    }

  export interface actividadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['actividad'], meta: { name: 'actividad' } }
    /**
     * Find zero or one Actividad that matches the filter.
     * @param {actividadFindUniqueArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends actividadFindUniqueArgs>(args: SelectSubset<T, actividadFindUniqueArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Actividad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {actividadFindUniqueOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends actividadFindUniqueOrThrowArgs>(args: SelectSubset<T, actividadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadFindFirstArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends actividadFindFirstArgs>(args?: SelectSubset<T, actividadFindFirstArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Actividad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadFindFirstOrThrowArgs} args - Arguments to find a Actividad
     * @example
     * // Get one Actividad
     * const actividad = await prisma.actividad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends actividadFindFirstOrThrowArgs>(args?: SelectSubset<T, actividadFindFirstOrThrowArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Actividads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actividads
     * const actividads = await prisma.actividad.findMany()
     * 
     * // Get first 10 Actividads
     * const actividads = await prisma.actividad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actividadWithIdOnly = await prisma.actividad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends actividadFindManyArgs>(args?: SelectSubset<T, actividadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Actividad.
     * @param {actividadCreateArgs} args - Arguments to create a Actividad.
     * @example
     * // Create one Actividad
     * const Actividad = await prisma.actividad.create({
     *   data: {
     *     // ... data to create a Actividad
     *   }
     * })
     * 
     */
    create<T extends actividadCreateArgs>(args: SelectSubset<T, actividadCreateArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Actividads.
     * @param {actividadCreateManyArgs} args - Arguments to create many Actividads.
     * @example
     * // Create many Actividads
     * const actividad = await prisma.actividad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends actividadCreateManyArgs>(args?: SelectSubset<T, actividadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Actividad.
     * @param {actividadDeleteArgs} args - Arguments to delete one Actividad.
     * @example
     * // Delete one Actividad
     * const Actividad = await prisma.actividad.delete({
     *   where: {
     *     // ... filter to delete one Actividad
     *   }
     * })
     * 
     */
    delete<T extends actividadDeleteArgs>(args: SelectSubset<T, actividadDeleteArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Actividad.
     * @param {actividadUpdateArgs} args - Arguments to update one Actividad.
     * @example
     * // Update one Actividad
     * const actividad = await prisma.actividad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends actividadUpdateArgs>(args: SelectSubset<T, actividadUpdateArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Actividads.
     * @param {actividadDeleteManyArgs} args - Arguments to filter Actividads to delete.
     * @example
     * // Delete a few Actividads
     * const { count } = await prisma.actividad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends actividadDeleteManyArgs>(args?: SelectSubset<T, actividadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actividads
     * const actividad = await prisma.actividad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends actividadUpdateManyArgs>(args: SelectSubset<T, actividadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actividad.
     * @param {actividadUpsertArgs} args - Arguments to update or create a Actividad.
     * @example
     * // Update or create a Actividad
     * const actividad = await prisma.actividad.upsert({
     *   create: {
     *     // ... data to create a Actividad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actividad we want to update
     *   }
     * })
     */
    upsert<T extends actividadUpsertArgs>(args: SelectSubset<T, actividadUpsertArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadCountArgs} args - Arguments to filter Actividads to count.
     * @example
     * // Count the number of Actividads
     * const count = await prisma.actividad.count({
     *   where: {
     *     // ... the filter for the Actividads we want to count
     *   }
     * })
    **/
    count<T extends actividadCountArgs>(
      args?: Subset<T, actividadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActividadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActividadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActividadAggregateArgs>(args: Subset<T, ActividadAggregateArgs>): Prisma.PrismaPromise<GetActividadAggregateType<T>>

    /**
     * Group by Actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {actividadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends actividadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: actividadGroupByArgs['orderBy'] }
        : { orderBy?: actividadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, actividadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActividadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the actividad model
   */
  readonly fields: actividadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for actividad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__actividadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    semillero<T extends semilleroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, semilleroDefaultArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estudiante_actividad<T extends actividad$estudiante_actividadArgs<ExtArgs> = {}>(args?: Subset<T, actividad$estudiante_actividadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the actividad model
   */
  interface actividadFieldRefs {
    readonly id: FieldRef<"actividad", 'Int'>
    readonly id_semillero: FieldRef<"actividad", 'Int'>
    readonly nombre: FieldRef<"actividad", 'String'>
    readonly descripcion: FieldRef<"actividad", 'String'>
    readonly url: FieldRef<"actividad", 'String'>
    readonly fecha_inicio: FieldRef<"actividad", 'DateTime'>
    readonly fecha_fin: FieldRef<"actividad", 'DateTime'>
    readonly estado: FieldRef<"actividad", 'Int'>
    readonly creado_en: FieldRef<"actividad", 'DateTime'>
    readonly eliminado_en: FieldRef<"actividad", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * actividad findUnique
   */
  export type actividadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividad to fetch.
     */
    where: actividadWhereUniqueInput
  }

  /**
   * actividad findUniqueOrThrow
   */
  export type actividadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividad to fetch.
     */
    where: actividadWhereUniqueInput
  }

  /**
   * actividad findFirst
   */
  export type actividadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividad to fetch.
     */
    where?: actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividads to fetch.
     */
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actividads.
     */
    cursor?: actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * actividad findFirstOrThrow
   */
  export type actividadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividad to fetch.
     */
    where?: actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividads to fetch.
     */
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for actividads.
     */
    cursor?: actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of actividads.
     */
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * actividad findMany
   */
  export type actividadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter, which actividads to fetch.
     */
    where?: actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of actividads to fetch.
     */
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing actividads.
     */
    cursor?: actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` actividads.
     */
    skip?: number
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * actividad create
   */
  export type actividadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * The data needed to create a actividad.
     */
    data: XOR<actividadCreateInput, actividadUncheckedCreateInput>
  }

  /**
   * actividad createMany
   */
  export type actividadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many actividads.
     */
    data: actividadCreateManyInput | actividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * actividad update
   */
  export type actividadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * The data needed to update a actividad.
     */
    data: XOR<actividadUpdateInput, actividadUncheckedUpdateInput>
    /**
     * Choose, which actividad to update.
     */
    where: actividadWhereUniqueInput
  }

  /**
   * actividad updateMany
   */
  export type actividadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update actividads.
     */
    data: XOR<actividadUpdateManyMutationInput, actividadUncheckedUpdateManyInput>
    /**
     * Filter which actividads to update
     */
    where?: actividadWhereInput
    /**
     * Limit how many actividads to update.
     */
    limit?: number
  }

  /**
   * actividad upsert
   */
  export type actividadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * The filter to search for the actividad to update in case it exists.
     */
    where: actividadWhereUniqueInput
    /**
     * In case the actividad found by the `where` argument doesn't exist, create a new actividad with this data.
     */
    create: XOR<actividadCreateInput, actividadUncheckedCreateInput>
    /**
     * In case the actividad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<actividadUpdateInput, actividadUncheckedUpdateInput>
  }

  /**
   * actividad delete
   */
  export type actividadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    /**
     * Filter which actividad to delete.
     */
    where: actividadWhereUniqueInput
  }

  /**
   * actividad deleteMany
   */
  export type actividadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which actividads to delete
     */
    where?: actividadWhereInput
    /**
     * Limit how many actividads to delete.
     */
    limit?: number
  }

  /**
   * actividad.estudiante_actividad
   */
  export type actividad$estudiante_actividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    where?: estudiante_actividadWhereInput
    orderBy?: estudiante_actividadOrderByWithRelationInput | estudiante_actividadOrderByWithRelationInput[]
    cursor?: estudiante_actividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Estudiante_actividadScalarFieldEnum | Estudiante_actividadScalarFieldEnum[]
  }

  /**
   * actividad without action
   */
  export type actividadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
  }


  /**
   * Model estudiante_actividad
   */

  export type AggregateEstudiante_actividad = {
    _count: Estudiante_actividadCountAggregateOutputType | null
    _avg: Estudiante_actividadAvgAggregateOutputType | null
    _sum: Estudiante_actividadSumAggregateOutputType | null
    _min: Estudiante_actividadMinAggregateOutputType | null
    _max: Estudiante_actividadMaxAggregateOutputType | null
  }

  export type Estudiante_actividadAvgAggregateOutputType = {
    id: number | null
    id_actividad: number | null
    id_estudiante: number | null
    estado: number | null
  }

  export type Estudiante_actividadSumAggregateOutputType = {
    id: number | null
    id_actividad: number | null
    id_estudiante: number | null
    estado: number | null
  }

  export type Estudiante_actividadMinAggregateOutputType = {
    id: number | null
    id_actividad: number | null
    id_estudiante: number | null
    estado: number | null
  }

  export type Estudiante_actividadMaxAggregateOutputType = {
    id: number | null
    id_actividad: number | null
    id_estudiante: number | null
    estado: number | null
  }

  export type Estudiante_actividadCountAggregateOutputType = {
    id: number
    id_actividad: number
    id_estudiante: number
    estado: number
    _all: number
  }


  export type Estudiante_actividadAvgAggregateInputType = {
    id?: true
    id_actividad?: true
    id_estudiante?: true
    estado?: true
  }

  export type Estudiante_actividadSumAggregateInputType = {
    id?: true
    id_actividad?: true
    id_estudiante?: true
    estado?: true
  }

  export type Estudiante_actividadMinAggregateInputType = {
    id?: true
    id_actividad?: true
    id_estudiante?: true
    estado?: true
  }

  export type Estudiante_actividadMaxAggregateInputType = {
    id?: true
    id_actividad?: true
    id_estudiante?: true
    estado?: true
  }

  export type Estudiante_actividadCountAggregateInputType = {
    id?: true
    id_actividad?: true
    id_estudiante?: true
    estado?: true
    _all?: true
  }

  export type Estudiante_actividadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estudiante_actividad to aggregate.
     */
    where?: estudiante_actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estudiante_actividads to fetch.
     */
    orderBy?: estudiante_actividadOrderByWithRelationInput | estudiante_actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: estudiante_actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estudiante_actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estudiante_actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned estudiante_actividads
    **/
    _count?: true | Estudiante_actividadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Estudiante_actividadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Estudiante_actividadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Estudiante_actividadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Estudiante_actividadMaxAggregateInputType
  }

  export type GetEstudiante_actividadAggregateType<T extends Estudiante_actividadAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiante_actividad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiante_actividad[P]>
      : GetScalarType<T[P], AggregateEstudiante_actividad[P]>
  }




  export type estudiante_actividadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: estudiante_actividadWhereInput
    orderBy?: estudiante_actividadOrderByWithAggregationInput | estudiante_actividadOrderByWithAggregationInput[]
    by: Estudiante_actividadScalarFieldEnum[] | Estudiante_actividadScalarFieldEnum
    having?: estudiante_actividadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Estudiante_actividadCountAggregateInputType | true
    _avg?: Estudiante_actividadAvgAggregateInputType
    _sum?: Estudiante_actividadSumAggregateInputType
    _min?: Estudiante_actividadMinAggregateInputType
    _max?: Estudiante_actividadMaxAggregateInputType
  }

  export type Estudiante_actividadGroupByOutputType = {
    id: number
    id_actividad: number
    id_estudiante: number
    estado: number
    _count: Estudiante_actividadCountAggregateOutputType | null
    _avg: Estudiante_actividadAvgAggregateOutputType | null
    _sum: Estudiante_actividadSumAggregateOutputType | null
    _min: Estudiante_actividadMinAggregateOutputType | null
    _max: Estudiante_actividadMaxAggregateOutputType | null
  }

  type GetEstudiante_actividadGroupByPayload<T extends estudiante_actividadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Estudiante_actividadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Estudiante_actividadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Estudiante_actividadGroupByOutputType[P]>
            : GetScalarType<T[P], Estudiante_actividadGroupByOutputType[P]>
        }
      >
    >


  export type estudiante_actividadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_actividad?: boolean
    id_estudiante?: boolean
    estado?: boolean
    actividad?: boolean | actividadDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiante_actividad"]>



  export type estudiante_actividadSelectScalar = {
    id?: boolean
    id_actividad?: boolean
    id_estudiante?: boolean
    estado?: boolean
  }

  export type estudiante_actividadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_actividad" | "id_estudiante" | "estado", ExtArgs["result"]["estudiante_actividad"]>
  export type estudiante_actividadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | actividadDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
  }

  export type $estudiante_actividadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "estudiante_actividad"
    objects: {
      actividad: Prisma.$actividadPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_actividad: number
      id_estudiante: number
      estado: number
    }, ExtArgs["result"]["estudiante_actividad"]>
    composites: {}
  }

  type estudiante_actividadGetPayload<S extends boolean | null | undefined | estudiante_actividadDefaultArgs> = $Result.GetResult<Prisma.$estudiante_actividadPayload, S>

  type estudiante_actividadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<estudiante_actividadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Estudiante_actividadCountAggregateInputType | true
    }

  export interface estudiante_actividadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['estudiante_actividad'], meta: { name: 'estudiante_actividad' } }
    /**
     * Find zero or one Estudiante_actividad that matches the filter.
     * @param {estudiante_actividadFindUniqueArgs} args - Arguments to find a Estudiante_actividad
     * @example
     * // Get one Estudiante_actividad
     * const estudiante_actividad = await prisma.estudiante_actividad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends estudiante_actividadFindUniqueArgs>(args: SelectSubset<T, estudiante_actividadFindUniqueArgs<ExtArgs>>): Prisma__estudiante_actividadClient<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Estudiante_actividad that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {estudiante_actividadFindUniqueOrThrowArgs} args - Arguments to find a Estudiante_actividad
     * @example
     * // Get one Estudiante_actividad
     * const estudiante_actividad = await prisma.estudiante_actividad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends estudiante_actividadFindUniqueOrThrowArgs>(args: SelectSubset<T, estudiante_actividadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__estudiante_actividadClient<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante_actividad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudiante_actividadFindFirstArgs} args - Arguments to find a Estudiante_actividad
     * @example
     * // Get one Estudiante_actividad
     * const estudiante_actividad = await prisma.estudiante_actividad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends estudiante_actividadFindFirstArgs>(args?: SelectSubset<T, estudiante_actividadFindFirstArgs<ExtArgs>>): Prisma__estudiante_actividadClient<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Estudiante_actividad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudiante_actividadFindFirstOrThrowArgs} args - Arguments to find a Estudiante_actividad
     * @example
     * // Get one Estudiante_actividad
     * const estudiante_actividad = await prisma.estudiante_actividad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends estudiante_actividadFindFirstOrThrowArgs>(args?: SelectSubset<T, estudiante_actividadFindFirstOrThrowArgs<ExtArgs>>): Prisma__estudiante_actividadClient<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Estudiante_actividads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudiante_actividadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiante_actividads
     * const estudiante_actividads = await prisma.estudiante_actividad.findMany()
     * 
     * // Get first 10 Estudiante_actividads
     * const estudiante_actividads = await prisma.estudiante_actividad.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const estudiante_actividadWithIdOnly = await prisma.estudiante_actividad.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends estudiante_actividadFindManyArgs>(args?: SelectSubset<T, estudiante_actividadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Estudiante_actividad.
     * @param {estudiante_actividadCreateArgs} args - Arguments to create a Estudiante_actividad.
     * @example
     * // Create one Estudiante_actividad
     * const Estudiante_actividad = await prisma.estudiante_actividad.create({
     *   data: {
     *     // ... data to create a Estudiante_actividad
     *   }
     * })
     * 
     */
    create<T extends estudiante_actividadCreateArgs>(args: SelectSubset<T, estudiante_actividadCreateArgs<ExtArgs>>): Prisma__estudiante_actividadClient<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Estudiante_actividads.
     * @param {estudiante_actividadCreateManyArgs} args - Arguments to create many Estudiante_actividads.
     * @example
     * // Create many Estudiante_actividads
     * const estudiante_actividad = await prisma.estudiante_actividad.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends estudiante_actividadCreateManyArgs>(args?: SelectSubset<T, estudiante_actividadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estudiante_actividad.
     * @param {estudiante_actividadDeleteArgs} args - Arguments to delete one Estudiante_actividad.
     * @example
     * // Delete one Estudiante_actividad
     * const Estudiante_actividad = await prisma.estudiante_actividad.delete({
     *   where: {
     *     // ... filter to delete one Estudiante_actividad
     *   }
     * })
     * 
     */
    delete<T extends estudiante_actividadDeleteArgs>(args: SelectSubset<T, estudiante_actividadDeleteArgs<ExtArgs>>): Prisma__estudiante_actividadClient<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Estudiante_actividad.
     * @param {estudiante_actividadUpdateArgs} args - Arguments to update one Estudiante_actividad.
     * @example
     * // Update one Estudiante_actividad
     * const estudiante_actividad = await prisma.estudiante_actividad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends estudiante_actividadUpdateArgs>(args: SelectSubset<T, estudiante_actividadUpdateArgs<ExtArgs>>): Prisma__estudiante_actividadClient<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Estudiante_actividads.
     * @param {estudiante_actividadDeleteManyArgs} args - Arguments to filter Estudiante_actividads to delete.
     * @example
     * // Delete a few Estudiante_actividads
     * const { count } = await prisma.estudiante_actividad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends estudiante_actividadDeleteManyArgs>(args?: SelectSubset<T, estudiante_actividadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiante_actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudiante_actividadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiante_actividads
     * const estudiante_actividad = await prisma.estudiante_actividad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends estudiante_actividadUpdateManyArgs>(args: SelectSubset<T, estudiante_actividadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estudiante_actividad.
     * @param {estudiante_actividadUpsertArgs} args - Arguments to update or create a Estudiante_actividad.
     * @example
     * // Update or create a Estudiante_actividad
     * const estudiante_actividad = await prisma.estudiante_actividad.upsert({
     *   create: {
     *     // ... data to create a Estudiante_actividad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiante_actividad we want to update
     *   }
     * })
     */
    upsert<T extends estudiante_actividadUpsertArgs>(args: SelectSubset<T, estudiante_actividadUpsertArgs<ExtArgs>>): Prisma__estudiante_actividadClient<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Estudiante_actividads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudiante_actividadCountArgs} args - Arguments to filter Estudiante_actividads to count.
     * @example
     * // Count the number of Estudiante_actividads
     * const count = await prisma.estudiante_actividad.count({
     *   where: {
     *     // ... the filter for the Estudiante_actividads we want to count
     *   }
     * })
    **/
    count<T extends estudiante_actividadCountArgs>(
      args?: Subset<T, estudiante_actividadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Estudiante_actividadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiante_actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Estudiante_actividadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Estudiante_actividadAggregateArgs>(args: Subset<T, Estudiante_actividadAggregateArgs>): Prisma.PrismaPromise<GetEstudiante_actividadAggregateType<T>>

    /**
     * Group by Estudiante_actividad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {estudiante_actividadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends estudiante_actividadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: estudiante_actividadGroupByArgs['orderBy'] }
        : { orderBy?: estudiante_actividadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, estudiante_actividadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudiante_actividadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the estudiante_actividad model
   */
  readonly fields: estudiante_actividadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for estudiante_actividad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__estudiante_actividadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actividad<T extends actividadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, actividadDefaultArgs<ExtArgs>>): Prisma__actividadClient<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the estudiante_actividad model
   */
  interface estudiante_actividadFieldRefs {
    readonly id: FieldRef<"estudiante_actividad", 'Int'>
    readonly id_actividad: FieldRef<"estudiante_actividad", 'Int'>
    readonly id_estudiante: FieldRef<"estudiante_actividad", 'Int'>
    readonly estado: FieldRef<"estudiante_actividad", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * estudiante_actividad findUnique
   */
  export type estudiante_actividadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    /**
     * Filter, which estudiante_actividad to fetch.
     */
    where: estudiante_actividadWhereUniqueInput
  }

  /**
   * estudiante_actividad findUniqueOrThrow
   */
  export type estudiante_actividadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    /**
     * Filter, which estudiante_actividad to fetch.
     */
    where: estudiante_actividadWhereUniqueInput
  }

  /**
   * estudiante_actividad findFirst
   */
  export type estudiante_actividadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    /**
     * Filter, which estudiante_actividad to fetch.
     */
    where?: estudiante_actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estudiante_actividads to fetch.
     */
    orderBy?: estudiante_actividadOrderByWithRelationInput | estudiante_actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estudiante_actividads.
     */
    cursor?: estudiante_actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estudiante_actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estudiante_actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estudiante_actividads.
     */
    distinct?: Estudiante_actividadScalarFieldEnum | Estudiante_actividadScalarFieldEnum[]
  }

  /**
   * estudiante_actividad findFirstOrThrow
   */
  export type estudiante_actividadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    /**
     * Filter, which estudiante_actividad to fetch.
     */
    where?: estudiante_actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estudiante_actividads to fetch.
     */
    orderBy?: estudiante_actividadOrderByWithRelationInput | estudiante_actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for estudiante_actividads.
     */
    cursor?: estudiante_actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estudiante_actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estudiante_actividads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of estudiante_actividads.
     */
    distinct?: Estudiante_actividadScalarFieldEnum | Estudiante_actividadScalarFieldEnum[]
  }

  /**
   * estudiante_actividad findMany
   */
  export type estudiante_actividadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    /**
     * Filter, which estudiante_actividads to fetch.
     */
    where?: estudiante_actividadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of estudiante_actividads to fetch.
     */
    orderBy?: estudiante_actividadOrderByWithRelationInput | estudiante_actividadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing estudiante_actividads.
     */
    cursor?: estudiante_actividadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` estudiante_actividads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` estudiante_actividads.
     */
    skip?: number
    distinct?: Estudiante_actividadScalarFieldEnum | Estudiante_actividadScalarFieldEnum[]
  }

  /**
   * estudiante_actividad create
   */
  export type estudiante_actividadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    /**
     * The data needed to create a estudiante_actividad.
     */
    data: XOR<estudiante_actividadCreateInput, estudiante_actividadUncheckedCreateInput>
  }

  /**
   * estudiante_actividad createMany
   */
  export type estudiante_actividadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many estudiante_actividads.
     */
    data: estudiante_actividadCreateManyInput | estudiante_actividadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * estudiante_actividad update
   */
  export type estudiante_actividadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    /**
     * The data needed to update a estudiante_actividad.
     */
    data: XOR<estudiante_actividadUpdateInput, estudiante_actividadUncheckedUpdateInput>
    /**
     * Choose, which estudiante_actividad to update.
     */
    where: estudiante_actividadWhereUniqueInput
  }

  /**
   * estudiante_actividad updateMany
   */
  export type estudiante_actividadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update estudiante_actividads.
     */
    data: XOR<estudiante_actividadUpdateManyMutationInput, estudiante_actividadUncheckedUpdateManyInput>
    /**
     * Filter which estudiante_actividads to update
     */
    where?: estudiante_actividadWhereInput
    /**
     * Limit how many estudiante_actividads to update.
     */
    limit?: number
  }

  /**
   * estudiante_actividad upsert
   */
  export type estudiante_actividadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    /**
     * The filter to search for the estudiante_actividad to update in case it exists.
     */
    where: estudiante_actividadWhereUniqueInput
    /**
     * In case the estudiante_actividad found by the `where` argument doesn't exist, create a new estudiante_actividad with this data.
     */
    create: XOR<estudiante_actividadCreateInput, estudiante_actividadUncheckedCreateInput>
    /**
     * In case the estudiante_actividad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<estudiante_actividadUpdateInput, estudiante_actividadUncheckedUpdateInput>
  }

  /**
   * estudiante_actividad delete
   */
  export type estudiante_actividadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    /**
     * Filter which estudiante_actividad to delete.
     */
    where: estudiante_actividadWhereUniqueInput
  }

  /**
   * estudiante_actividad deleteMany
   */
  export type estudiante_actividadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which estudiante_actividads to delete
     */
    where?: estudiante_actividadWhereInput
    /**
     * Limit how many estudiante_actividads to delete.
     */
    limit?: number
  }

  /**
   * estudiante_actividad without action
   */
  export type estudiante_actividadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
  }


  /**
   * Model programa_academico
   */

  export type AggregatePrograma_academico = {
    _count: Programa_academicoCountAggregateOutputType | null
    _avg: Programa_academicoAvgAggregateOutputType | null
    _sum: Programa_academicoSumAggregateOutputType | null
    _min: Programa_academicoMinAggregateOutputType | null
    _max: Programa_academicoMaxAggregateOutputType | null
  }

  export type Programa_academicoAvgAggregateOutputType = {
    id: number | null
    id_director: number | null
    estado: number | null
  }

  export type Programa_academicoSumAggregateOutputType = {
    id: number | null
    id_director: number | null
    estado: number | null
  }

  export type Programa_academicoMinAggregateOutputType = {
    id: number | null
    id_director: number | null
    nombre: string | null
    estado: number | null
    creado_en: Date | null
    eliminado_en: Date | null
  }

  export type Programa_academicoMaxAggregateOutputType = {
    id: number | null
    id_director: number | null
    nombre: string | null
    estado: number | null
    creado_en: Date | null
    eliminado_en: Date | null
  }

  export type Programa_academicoCountAggregateOutputType = {
    id: number
    id_director: number
    nombre: number
    estado: number
    creado_en: number
    eliminado_en: number
    _all: number
  }


  export type Programa_academicoAvgAggregateInputType = {
    id?: true
    id_director?: true
    estado?: true
  }

  export type Programa_academicoSumAggregateInputType = {
    id?: true
    id_director?: true
    estado?: true
  }

  export type Programa_academicoMinAggregateInputType = {
    id?: true
    id_director?: true
    nombre?: true
    estado?: true
    creado_en?: true
    eliminado_en?: true
  }

  export type Programa_academicoMaxAggregateInputType = {
    id?: true
    id_director?: true
    nombre?: true
    estado?: true
    creado_en?: true
    eliminado_en?: true
  }

  export type Programa_academicoCountAggregateInputType = {
    id?: true
    id_director?: true
    nombre?: true
    estado?: true
    creado_en?: true
    eliminado_en?: true
    _all?: true
  }

  export type Programa_academicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which programa_academico to aggregate.
     */
    where?: programa_academicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programa_academicos to fetch.
     */
    orderBy?: programa_academicoOrderByWithRelationInput | programa_academicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: programa_academicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programa_academicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programa_academicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned programa_academicos
    **/
    _count?: true | Programa_academicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Programa_academicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Programa_academicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Programa_academicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Programa_academicoMaxAggregateInputType
  }

  export type GetPrograma_academicoAggregateType<T extends Programa_academicoAggregateArgs> = {
        [P in keyof T & keyof AggregatePrograma_academico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrograma_academico[P]>
      : GetScalarType<T[P], AggregatePrograma_academico[P]>
  }




  export type programa_academicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: programa_academicoWhereInput
    orderBy?: programa_academicoOrderByWithAggregationInput | programa_academicoOrderByWithAggregationInput[]
    by: Programa_academicoScalarFieldEnum[] | Programa_academicoScalarFieldEnum
    having?: programa_academicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Programa_academicoCountAggregateInputType | true
    _avg?: Programa_academicoAvgAggregateInputType
    _sum?: Programa_academicoSumAggregateInputType
    _min?: Programa_academicoMinAggregateInputType
    _max?: Programa_academicoMaxAggregateInputType
  }

  export type Programa_academicoGroupByOutputType = {
    id: number
    id_director: number
    nombre: string
    estado: number
    creado_en: Date
    eliminado_en: Date | null
    _count: Programa_academicoCountAggregateOutputType | null
    _avg: Programa_academicoAvgAggregateOutputType | null
    _sum: Programa_academicoSumAggregateOutputType | null
    _min: Programa_academicoMinAggregateOutputType | null
    _max: Programa_academicoMaxAggregateOutputType | null
  }

  type GetPrograma_academicoGroupByPayload<T extends programa_academicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Programa_academicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Programa_academicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Programa_academicoGroupByOutputType[P]>
            : GetScalarType<T[P], Programa_academicoGroupByOutputType[P]>
        }
      >
    >


  export type programa_academicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_director?: boolean
    nombre?: boolean
    estado?: boolean
    creado_en?: boolean
    eliminado_en?: boolean
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    semillero?: boolean | programa_academico$semilleroArgs<ExtArgs>
    _count?: boolean | Programa_academicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["programa_academico"]>



  export type programa_academicoSelectScalar = {
    id?: boolean
    id_director?: boolean
    nombre?: boolean
    estado?: boolean
    creado_en?: boolean
    eliminado_en?: boolean
  }

  export type programa_academicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_director" | "nombre" | "estado" | "creado_en" | "eliminado_en", ExtArgs["result"]["programa_academico"]>
  export type programa_academicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    semillero?: boolean | programa_academico$semilleroArgs<ExtArgs>
    _count?: boolean | Programa_academicoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $programa_academicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "programa_academico"
    objects: {
      usuario: Prisma.$usuarioPayload<ExtArgs>
      semillero: Prisma.$semilleroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_director: number
      nombre: string
      estado: number
      creado_en: Date
      eliminado_en: Date | null
    }, ExtArgs["result"]["programa_academico"]>
    composites: {}
  }

  type programa_academicoGetPayload<S extends boolean | null | undefined | programa_academicoDefaultArgs> = $Result.GetResult<Prisma.$programa_academicoPayload, S>

  type programa_academicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<programa_academicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Programa_academicoCountAggregateInputType | true
    }

  export interface programa_academicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['programa_academico'], meta: { name: 'programa_academico' } }
    /**
     * Find zero or one Programa_academico that matches the filter.
     * @param {programa_academicoFindUniqueArgs} args - Arguments to find a Programa_academico
     * @example
     * // Get one Programa_academico
     * const programa_academico = await prisma.programa_academico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends programa_academicoFindUniqueArgs>(args: SelectSubset<T, programa_academicoFindUniqueArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Programa_academico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {programa_academicoFindUniqueOrThrowArgs} args - Arguments to find a Programa_academico
     * @example
     * // Get one Programa_academico
     * const programa_academico = await prisma.programa_academico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends programa_academicoFindUniqueOrThrowArgs>(args: SelectSubset<T, programa_academicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Programa_academico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programa_academicoFindFirstArgs} args - Arguments to find a Programa_academico
     * @example
     * // Get one Programa_academico
     * const programa_academico = await prisma.programa_academico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends programa_academicoFindFirstArgs>(args?: SelectSubset<T, programa_academicoFindFirstArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Programa_academico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programa_academicoFindFirstOrThrowArgs} args - Arguments to find a Programa_academico
     * @example
     * // Get one Programa_academico
     * const programa_academico = await prisma.programa_academico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends programa_academicoFindFirstOrThrowArgs>(args?: SelectSubset<T, programa_academicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programa_academicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programa_academicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programa_academicos
     * const programa_academicos = await prisma.programa_academico.findMany()
     * 
     * // Get first 10 Programa_academicos
     * const programa_academicos = await prisma.programa_academico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const programa_academicoWithIdOnly = await prisma.programa_academico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends programa_academicoFindManyArgs>(args?: SelectSubset<T, programa_academicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Programa_academico.
     * @param {programa_academicoCreateArgs} args - Arguments to create a Programa_academico.
     * @example
     * // Create one Programa_academico
     * const Programa_academico = await prisma.programa_academico.create({
     *   data: {
     *     // ... data to create a Programa_academico
     *   }
     * })
     * 
     */
    create<T extends programa_academicoCreateArgs>(args: SelectSubset<T, programa_academicoCreateArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programa_academicos.
     * @param {programa_academicoCreateManyArgs} args - Arguments to create many Programa_academicos.
     * @example
     * // Create many Programa_academicos
     * const programa_academico = await prisma.programa_academico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends programa_academicoCreateManyArgs>(args?: SelectSubset<T, programa_academicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Programa_academico.
     * @param {programa_academicoDeleteArgs} args - Arguments to delete one Programa_academico.
     * @example
     * // Delete one Programa_academico
     * const Programa_academico = await prisma.programa_academico.delete({
     *   where: {
     *     // ... filter to delete one Programa_academico
     *   }
     * })
     * 
     */
    delete<T extends programa_academicoDeleteArgs>(args: SelectSubset<T, programa_academicoDeleteArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Programa_academico.
     * @param {programa_academicoUpdateArgs} args - Arguments to update one Programa_academico.
     * @example
     * // Update one Programa_academico
     * const programa_academico = await prisma.programa_academico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends programa_academicoUpdateArgs>(args: SelectSubset<T, programa_academicoUpdateArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programa_academicos.
     * @param {programa_academicoDeleteManyArgs} args - Arguments to filter Programa_academicos to delete.
     * @example
     * // Delete a few Programa_academicos
     * const { count } = await prisma.programa_academico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends programa_academicoDeleteManyArgs>(args?: SelectSubset<T, programa_academicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programa_academicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programa_academicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programa_academicos
     * const programa_academico = await prisma.programa_academico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends programa_academicoUpdateManyArgs>(args: SelectSubset<T, programa_academicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Programa_academico.
     * @param {programa_academicoUpsertArgs} args - Arguments to update or create a Programa_academico.
     * @example
     * // Update or create a Programa_academico
     * const programa_academico = await prisma.programa_academico.upsert({
     *   create: {
     *     // ... data to create a Programa_academico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Programa_academico we want to update
     *   }
     * })
     */
    upsert<T extends programa_academicoUpsertArgs>(args: SelectSubset<T, programa_academicoUpsertArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programa_academicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programa_academicoCountArgs} args - Arguments to filter Programa_academicos to count.
     * @example
     * // Count the number of Programa_academicos
     * const count = await prisma.programa_academico.count({
     *   where: {
     *     // ... the filter for the Programa_academicos we want to count
     *   }
     * })
    **/
    count<T extends programa_academicoCountArgs>(
      args?: Subset<T, programa_academicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Programa_academicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Programa_academico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Programa_academicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Programa_academicoAggregateArgs>(args: Subset<T, Programa_academicoAggregateArgs>): Prisma.PrismaPromise<GetPrograma_academicoAggregateType<T>>

    /**
     * Group by Programa_academico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {programa_academicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends programa_academicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: programa_academicoGroupByArgs['orderBy'] }
        : { orderBy?: programa_academicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, programa_academicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrograma_academicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the programa_academico model
   */
  readonly fields: programa_academicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for programa_academico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__programa_academicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    semillero<T extends programa_academico$semilleroArgs<ExtArgs> = {}>(args?: Subset<T, programa_academico$semilleroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the programa_academico model
   */
  interface programa_academicoFieldRefs {
    readonly id: FieldRef<"programa_academico", 'Int'>
    readonly id_director: FieldRef<"programa_academico", 'Int'>
    readonly nombre: FieldRef<"programa_academico", 'String'>
    readonly estado: FieldRef<"programa_academico", 'Int'>
    readonly creado_en: FieldRef<"programa_academico", 'DateTime'>
    readonly eliminado_en: FieldRef<"programa_academico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * programa_academico findUnique
   */
  export type programa_academicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    /**
     * Filter, which programa_academico to fetch.
     */
    where: programa_academicoWhereUniqueInput
  }

  /**
   * programa_academico findUniqueOrThrow
   */
  export type programa_academicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    /**
     * Filter, which programa_academico to fetch.
     */
    where: programa_academicoWhereUniqueInput
  }

  /**
   * programa_academico findFirst
   */
  export type programa_academicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    /**
     * Filter, which programa_academico to fetch.
     */
    where?: programa_academicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programa_academicos to fetch.
     */
    orderBy?: programa_academicoOrderByWithRelationInput | programa_academicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programa_academicos.
     */
    cursor?: programa_academicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programa_academicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programa_academicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programa_academicos.
     */
    distinct?: Programa_academicoScalarFieldEnum | Programa_academicoScalarFieldEnum[]
  }

  /**
   * programa_academico findFirstOrThrow
   */
  export type programa_academicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    /**
     * Filter, which programa_academico to fetch.
     */
    where?: programa_academicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programa_academicos to fetch.
     */
    orderBy?: programa_academicoOrderByWithRelationInput | programa_academicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for programa_academicos.
     */
    cursor?: programa_academicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programa_academicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programa_academicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of programa_academicos.
     */
    distinct?: Programa_academicoScalarFieldEnum | Programa_academicoScalarFieldEnum[]
  }

  /**
   * programa_academico findMany
   */
  export type programa_academicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    /**
     * Filter, which programa_academicos to fetch.
     */
    where?: programa_academicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of programa_academicos to fetch.
     */
    orderBy?: programa_academicoOrderByWithRelationInput | programa_academicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing programa_academicos.
     */
    cursor?: programa_academicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` programa_academicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` programa_academicos.
     */
    skip?: number
    distinct?: Programa_academicoScalarFieldEnum | Programa_academicoScalarFieldEnum[]
  }

  /**
   * programa_academico create
   */
  export type programa_academicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    /**
     * The data needed to create a programa_academico.
     */
    data: XOR<programa_academicoCreateInput, programa_academicoUncheckedCreateInput>
  }

  /**
   * programa_academico createMany
   */
  export type programa_academicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many programa_academicos.
     */
    data: programa_academicoCreateManyInput | programa_academicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * programa_academico update
   */
  export type programa_academicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    /**
     * The data needed to update a programa_academico.
     */
    data: XOR<programa_academicoUpdateInput, programa_academicoUncheckedUpdateInput>
    /**
     * Choose, which programa_academico to update.
     */
    where: programa_academicoWhereUniqueInput
  }

  /**
   * programa_academico updateMany
   */
  export type programa_academicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update programa_academicos.
     */
    data: XOR<programa_academicoUpdateManyMutationInput, programa_academicoUncheckedUpdateManyInput>
    /**
     * Filter which programa_academicos to update
     */
    where?: programa_academicoWhereInput
    /**
     * Limit how many programa_academicos to update.
     */
    limit?: number
  }

  /**
   * programa_academico upsert
   */
  export type programa_academicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    /**
     * The filter to search for the programa_academico to update in case it exists.
     */
    where: programa_academicoWhereUniqueInput
    /**
     * In case the programa_academico found by the `where` argument doesn't exist, create a new programa_academico with this data.
     */
    create: XOR<programa_academicoCreateInput, programa_academicoUncheckedCreateInput>
    /**
     * In case the programa_academico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<programa_academicoUpdateInput, programa_academicoUncheckedUpdateInput>
  }

  /**
   * programa_academico delete
   */
  export type programa_academicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    /**
     * Filter which programa_academico to delete.
     */
    where: programa_academicoWhereUniqueInput
  }

  /**
   * programa_academico deleteMany
   */
  export type programa_academicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which programa_academicos to delete
     */
    where?: programa_academicoWhereInput
    /**
     * Limit how many programa_academicos to delete.
     */
    limit?: number
  }

  /**
   * programa_academico.semillero
   */
  export type programa_academico$semilleroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    where?: semilleroWhereInput
    orderBy?: semilleroOrderByWithRelationInput | semilleroOrderByWithRelationInput[]
    cursor?: semilleroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SemilleroScalarFieldEnum | SemilleroScalarFieldEnum[]
  }

  /**
   * programa_academico without action
   */
  export type programa_academicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
  }


  /**
   * Model rol
   */

  export type AggregateRol = {
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  export type RolAvgAggregateOutputType = {
    id: number | null
  }

  export type RolSumAggregateOutputType = {
    id: number | null
  }

  export type RolMinAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
  }

  export type RolCountAggregateOutputType = {
    id: number
    nombre: number
    _all: number
  }


  export type RolAvgAggregateInputType = {
    id?: true
  }

  export type RolSumAggregateInputType = {
    id?: true
  }

  export type RolMinAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolMaxAggregateInputType = {
    id?: true
    nombre?: true
  }

  export type RolCountAggregateInputType = {
    id?: true
    nombre?: true
    _all?: true
  }

  export type RolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rol to aggregate.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rols
    **/
    _count?: true | RolCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RolAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RolSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolMaxAggregateInputType
  }

  export type GetRolAggregateType<T extends RolAggregateArgs> = {
        [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRol[P]>
      : GetScalarType<T[P], AggregateRol[P]>
  }




  export type rolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: rolWhereInput
    orderBy?: rolOrderByWithAggregationInput | rolOrderByWithAggregationInput[]
    by: RolScalarFieldEnum[] | RolScalarFieldEnum
    having?: rolScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolCountAggregateInputType | true
    _avg?: RolAvgAggregateInputType
    _sum?: RolSumAggregateInputType
    _min?: RolMinAggregateInputType
    _max?: RolMaxAggregateInputType
  }

  export type RolGroupByOutputType = {
    id: number
    nombre: string
    _count: RolCountAggregateOutputType | null
    _avg: RolAvgAggregateOutputType | null
    _sum: RolSumAggregateOutputType | null
    _min: RolMinAggregateOutputType | null
    _max: RolMaxAggregateOutputType | null
  }

  type GetRolGroupByPayload<T extends rolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolGroupByOutputType[P]>
            : GetScalarType<T[P], RolGroupByOutputType[P]>
        }
      >
    >


  export type rolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
  }, ExtArgs["result"]["rol"]>



  export type rolSelectScalar = {
    id?: boolean
    nombre?: boolean
  }

  export type rolOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre", ExtArgs["result"]["rol"]>

  export type $rolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rol"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
    }, ExtArgs["result"]["rol"]>
    composites: {}
  }

  type rolGetPayload<S extends boolean | null | undefined | rolDefaultArgs> = $Result.GetResult<Prisma.$rolPayload, S>

  type rolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolCountAggregateInputType | true
    }

  export interface rolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rol'], meta: { name: 'rol' } }
    /**
     * Find zero or one Rol that matches the filter.
     * @param {rolFindUniqueArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends rolFindUniqueArgs>(args: SelectSubset<T, rolFindUniqueArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rol that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {rolFindUniqueOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends rolFindUniqueOrThrowArgs>(args: SelectSubset<T, rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends rolFindFirstArgs>(args?: SelectSubset<T, rolFindFirstArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rol that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindFirstOrThrowArgs} args - Arguments to find a Rol
     * @example
     * // Get one Rol
     * const rol = await prisma.rol.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends rolFindFirstOrThrowArgs>(args?: SelectSubset<T, rolFindFirstOrThrowArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rols that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rols
     * const rols = await prisma.rol.findMany()
     * 
     * // Get first 10 Rols
     * const rols = await prisma.rol.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolWithIdOnly = await prisma.rol.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends rolFindManyArgs>(args?: SelectSubset<T, rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rol.
     * @param {rolCreateArgs} args - Arguments to create a Rol.
     * @example
     * // Create one Rol
     * const Rol = await prisma.rol.create({
     *   data: {
     *     // ... data to create a Rol
     *   }
     * })
     * 
     */
    create<T extends rolCreateArgs>(args: SelectSubset<T, rolCreateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rols.
     * @param {rolCreateManyArgs} args - Arguments to create many Rols.
     * @example
     * // Create many Rols
     * const rol = await prisma.rol.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends rolCreateManyArgs>(args?: SelectSubset<T, rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rol.
     * @param {rolDeleteArgs} args - Arguments to delete one Rol.
     * @example
     * // Delete one Rol
     * const Rol = await prisma.rol.delete({
     *   where: {
     *     // ... filter to delete one Rol
     *   }
     * })
     * 
     */
    delete<T extends rolDeleteArgs>(args: SelectSubset<T, rolDeleteArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rol.
     * @param {rolUpdateArgs} args - Arguments to update one Rol.
     * @example
     * // Update one Rol
     * const rol = await prisma.rol.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends rolUpdateArgs>(args: SelectSubset<T, rolUpdateArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rols.
     * @param {rolDeleteManyArgs} args - Arguments to filter Rols to delete.
     * @example
     * // Delete a few Rols
     * const { count } = await prisma.rol.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends rolDeleteManyArgs>(args?: SelectSubset<T, rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rols
     * const rol = await prisma.rol.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends rolUpdateManyArgs>(args: SelectSubset<T, rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rol.
     * @param {rolUpsertArgs} args - Arguments to update or create a Rol.
     * @example
     * // Update or create a Rol
     * const rol = await prisma.rol.upsert({
     *   create: {
     *     // ... data to create a Rol
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rol we want to update
     *   }
     * })
     */
    upsert<T extends rolUpsertArgs>(args: SelectSubset<T, rolUpsertArgs<ExtArgs>>): Prisma__rolClient<$Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rols.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolCountArgs} args - Arguments to filter Rols to count.
     * @example
     * // Count the number of Rols
     * const count = await prisma.rol.count({
     *   where: {
     *     // ... the filter for the Rols we want to count
     *   }
     * })
    **/
    count<T extends rolCountArgs>(
      args?: Subset<T, rolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RolAggregateArgs>(args: Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>

    /**
     * Group by Rol.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {rolGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends rolGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: rolGroupByArgs['orderBy'] }
        : { orderBy?: rolGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rol model
   */
  readonly fields: rolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rol.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__rolClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the rol model
   */
  interface rolFieldRefs {
    readonly id: FieldRef<"rol", 'Int'>
    readonly nombre: FieldRef<"rol", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rol findUnique
   */
  export type rolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findUniqueOrThrow
   */
  export type rolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol findFirst
   */
  export type rolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findFirstOrThrow
   */
  export type rolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rol to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rols.
     */
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol findMany
   */
  export type rolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter, which rols to fetch.
     */
    where?: rolWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rols to fetch.
     */
    orderBy?: rolOrderByWithRelationInput | rolOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rols.
     */
    cursor?: rolWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rols from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rols.
     */
    skip?: number
    distinct?: RolScalarFieldEnum | RolScalarFieldEnum[]
  }

  /**
   * rol create
   */
  export type rolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data needed to create a rol.
     */
    data: XOR<rolCreateInput, rolUncheckedCreateInput>
  }

  /**
   * rol createMany
   */
  export type rolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many rols.
     */
    data: rolCreateManyInput | rolCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * rol update
   */
  export type rolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The data needed to update a rol.
     */
    data: XOR<rolUpdateInput, rolUncheckedUpdateInput>
    /**
     * Choose, which rol to update.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol updateMany
   */
  export type rolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rols.
     */
    data: XOR<rolUpdateManyMutationInput, rolUncheckedUpdateManyInput>
    /**
     * Filter which rols to update
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to update.
     */
    limit?: number
  }

  /**
   * rol upsert
   */
  export type rolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * The filter to search for the rol to update in case it exists.
     */
    where: rolWhereUniqueInput
    /**
     * In case the rol found by the `where` argument doesn't exist, create a new rol with this data.
     */
    create: XOR<rolCreateInput, rolUncheckedCreateInput>
    /**
     * In case the rol was found with the provided `where` argument, update it with this data.
     */
    update: XOR<rolUpdateInput, rolUncheckedUpdateInput>
  }

  /**
   * rol delete
   */
  export type rolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
    /**
     * Filter which rol to delete.
     */
    where: rolWhereUniqueInput
  }

  /**
   * rol deleteMany
   */
  export type rolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rols to delete
     */
    where?: rolWhereInput
    /**
     * Limit how many rols to delete.
     */
    limit?: number
  }

  /**
   * rol without action
   */
  export type rolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rol
     */
    select?: rolSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rol
     */
    omit?: rolOmit<ExtArgs> | null
  }


  /**
   * Model semillero
   */

  export type AggregateSemillero = {
    _count: SemilleroCountAggregateOutputType | null
    _avg: SemilleroAvgAggregateOutputType | null
    _sum: SemilleroSumAggregateOutputType | null
    _min: SemilleroMinAggregateOutputType | null
    _max: SemilleroMaxAggregateOutputType | null
  }

  export type SemilleroAvgAggregateOutputType = {
    id: number | null
    id_prog_acad: number | null
    id_docente: number | null
    cupo: number | null
    cant_act_aprobatoria: number | null
    estado: number | null
  }

  export type SemilleroSumAggregateOutputType = {
    id: number | null
    id_prog_acad: number | null
    id_docente: number | null
    cupo: number | null
    cant_act_aprobatoria: number | null
    estado: number | null
  }

  export type SemilleroMinAggregateOutputType = {
    id: number | null
    id_prog_acad: number | null
    id_docente: number | null
    nombre: string | null
    descripcion: string | null
    cupo: number | null
    fecha_limite_inscripcion: Date | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    cant_act_aprobatoria: number | null
    estado: number | null
    creado_en: Date | null
    eliminado_en: Date | null
  }

  export type SemilleroMaxAggregateOutputType = {
    id: number | null
    id_prog_acad: number | null
    id_docente: number | null
    nombre: string | null
    descripcion: string | null
    cupo: number | null
    fecha_limite_inscripcion: Date | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    cant_act_aprobatoria: number | null
    estado: number | null
    creado_en: Date | null
    eliminado_en: Date | null
  }

  export type SemilleroCountAggregateOutputType = {
    id: number
    id_prog_acad: number
    id_docente: number
    nombre: number
    descripcion: number
    cupo: number
    fecha_limite_inscripcion: number
    fecha_inicio: number
    fecha_fin: number
    cant_act_aprobatoria: number
    estado: number
    creado_en: number
    eliminado_en: number
    _all: number
  }


  export type SemilleroAvgAggregateInputType = {
    id?: true
    id_prog_acad?: true
    id_docente?: true
    cupo?: true
    cant_act_aprobatoria?: true
    estado?: true
  }

  export type SemilleroSumAggregateInputType = {
    id?: true
    id_prog_acad?: true
    id_docente?: true
    cupo?: true
    cant_act_aprobatoria?: true
    estado?: true
  }

  export type SemilleroMinAggregateInputType = {
    id?: true
    id_prog_acad?: true
    id_docente?: true
    nombre?: true
    descripcion?: true
    cupo?: true
    fecha_limite_inscripcion?: true
    fecha_inicio?: true
    fecha_fin?: true
    cant_act_aprobatoria?: true
    estado?: true
    creado_en?: true
    eliminado_en?: true
  }

  export type SemilleroMaxAggregateInputType = {
    id?: true
    id_prog_acad?: true
    id_docente?: true
    nombre?: true
    descripcion?: true
    cupo?: true
    fecha_limite_inscripcion?: true
    fecha_inicio?: true
    fecha_fin?: true
    cant_act_aprobatoria?: true
    estado?: true
    creado_en?: true
    eliminado_en?: true
  }

  export type SemilleroCountAggregateInputType = {
    id?: true
    id_prog_acad?: true
    id_docente?: true
    nombre?: true
    descripcion?: true
    cupo?: true
    fecha_limite_inscripcion?: true
    fecha_inicio?: true
    fecha_fin?: true
    cant_act_aprobatoria?: true
    estado?: true
    creado_en?: true
    eliminado_en?: true
    _all?: true
  }

  export type SemilleroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which semillero to aggregate.
     */
    where?: semilleroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semilleros to fetch.
     */
    orderBy?: semilleroOrderByWithRelationInput | semilleroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: semilleroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semilleros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semilleros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned semilleros
    **/
    _count?: true | SemilleroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SemilleroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SemilleroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SemilleroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SemilleroMaxAggregateInputType
  }

  export type GetSemilleroAggregateType<T extends SemilleroAggregateArgs> = {
        [P in keyof T & keyof AggregateSemillero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSemillero[P]>
      : GetScalarType<T[P], AggregateSemillero[P]>
  }




  export type semilleroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: semilleroWhereInput
    orderBy?: semilleroOrderByWithAggregationInput | semilleroOrderByWithAggregationInput[]
    by: SemilleroScalarFieldEnum[] | SemilleroScalarFieldEnum
    having?: semilleroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SemilleroCountAggregateInputType | true
    _avg?: SemilleroAvgAggregateInputType
    _sum?: SemilleroSumAggregateInputType
    _min?: SemilleroMinAggregateInputType
    _max?: SemilleroMaxAggregateInputType
  }

  export type SemilleroGroupByOutputType = {
    id: number
    id_prog_acad: number
    id_docente: number
    nombre: string
    descripcion: string | null
    cupo: number
    fecha_limite_inscripcion: Date
    fecha_inicio: Date
    fecha_fin: Date
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date
    eliminado_en: Date | null
    _count: SemilleroCountAggregateOutputType | null
    _avg: SemilleroAvgAggregateOutputType | null
    _sum: SemilleroSumAggregateOutputType | null
    _min: SemilleroMinAggregateOutputType | null
    _max: SemilleroMaxAggregateOutputType | null
  }

  type GetSemilleroGroupByPayload<T extends semilleroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SemilleroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SemilleroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SemilleroGroupByOutputType[P]>
            : GetScalarType<T[P], SemilleroGroupByOutputType[P]>
        }
      >
    >


  export type semilleroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_prog_acad?: boolean
    id_docente?: boolean
    nombre?: boolean
    descripcion?: boolean
    cupo?: boolean
    fecha_limite_inscripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    cant_act_aprobatoria?: boolean
    estado?: boolean
    creado_en?: boolean
    eliminado_en?: boolean
    actividad?: boolean | semillero$actividadArgs<ExtArgs>
    programa_academico?: boolean | programa_academicoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    _count?: boolean | SemilleroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["semillero"]>



  export type semilleroSelectScalar = {
    id?: boolean
    id_prog_acad?: boolean
    id_docente?: boolean
    nombre?: boolean
    descripcion?: boolean
    cupo?: boolean
    fecha_limite_inscripcion?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    cant_act_aprobatoria?: boolean
    estado?: boolean
    creado_en?: boolean
    eliminado_en?: boolean
  }

  export type semilleroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_prog_acad" | "id_docente" | "nombre" | "descripcion" | "cupo" | "fecha_limite_inscripcion" | "fecha_inicio" | "fecha_fin" | "cant_act_aprobatoria" | "estado" | "creado_en" | "eliminado_en", ExtArgs["result"]["semillero"]>
  export type semilleroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    actividad?: boolean | semillero$actividadArgs<ExtArgs>
    programa_academico?: boolean | programa_academicoDefaultArgs<ExtArgs>
    usuario?: boolean | usuarioDefaultArgs<ExtArgs>
    _count?: boolean | SemilleroCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $semilleroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "semillero"
    objects: {
      actividad: Prisma.$actividadPayload<ExtArgs>[]
      programa_academico: Prisma.$programa_academicoPayload<ExtArgs>
      usuario: Prisma.$usuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_prog_acad: number
      id_docente: number
      nombre: string
      descripcion: string | null
      cupo: number
      fecha_limite_inscripcion: Date
      fecha_inicio: Date
      fecha_fin: Date
      cant_act_aprobatoria: number
      estado: number
      creado_en: Date
      eliminado_en: Date | null
    }, ExtArgs["result"]["semillero"]>
    composites: {}
  }

  type semilleroGetPayload<S extends boolean | null | undefined | semilleroDefaultArgs> = $Result.GetResult<Prisma.$semilleroPayload, S>

  type semilleroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<semilleroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SemilleroCountAggregateInputType | true
    }

  export interface semilleroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['semillero'], meta: { name: 'semillero' } }
    /**
     * Find zero or one Semillero that matches the filter.
     * @param {semilleroFindUniqueArgs} args - Arguments to find a Semillero
     * @example
     * // Get one Semillero
     * const semillero = await prisma.semillero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends semilleroFindUniqueArgs>(args: SelectSubset<T, semilleroFindUniqueArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Semillero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {semilleroFindUniqueOrThrowArgs} args - Arguments to find a Semillero
     * @example
     * // Get one Semillero
     * const semillero = await prisma.semillero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends semilleroFindUniqueOrThrowArgs>(args: SelectSubset<T, semilleroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semillero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semilleroFindFirstArgs} args - Arguments to find a Semillero
     * @example
     * // Get one Semillero
     * const semillero = await prisma.semillero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends semilleroFindFirstArgs>(args?: SelectSubset<T, semilleroFindFirstArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Semillero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semilleroFindFirstOrThrowArgs} args - Arguments to find a Semillero
     * @example
     * // Get one Semillero
     * const semillero = await prisma.semillero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends semilleroFindFirstOrThrowArgs>(args?: SelectSubset<T, semilleroFindFirstOrThrowArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Semilleros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semilleroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Semilleros
     * const semilleros = await prisma.semillero.findMany()
     * 
     * // Get first 10 Semilleros
     * const semilleros = await prisma.semillero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const semilleroWithIdOnly = await prisma.semillero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends semilleroFindManyArgs>(args?: SelectSubset<T, semilleroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Semillero.
     * @param {semilleroCreateArgs} args - Arguments to create a Semillero.
     * @example
     * // Create one Semillero
     * const Semillero = await prisma.semillero.create({
     *   data: {
     *     // ... data to create a Semillero
     *   }
     * })
     * 
     */
    create<T extends semilleroCreateArgs>(args: SelectSubset<T, semilleroCreateArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Semilleros.
     * @param {semilleroCreateManyArgs} args - Arguments to create many Semilleros.
     * @example
     * // Create many Semilleros
     * const semillero = await prisma.semillero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends semilleroCreateManyArgs>(args?: SelectSubset<T, semilleroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Semillero.
     * @param {semilleroDeleteArgs} args - Arguments to delete one Semillero.
     * @example
     * // Delete one Semillero
     * const Semillero = await prisma.semillero.delete({
     *   where: {
     *     // ... filter to delete one Semillero
     *   }
     * })
     * 
     */
    delete<T extends semilleroDeleteArgs>(args: SelectSubset<T, semilleroDeleteArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Semillero.
     * @param {semilleroUpdateArgs} args - Arguments to update one Semillero.
     * @example
     * // Update one Semillero
     * const semillero = await prisma.semillero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends semilleroUpdateArgs>(args: SelectSubset<T, semilleroUpdateArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Semilleros.
     * @param {semilleroDeleteManyArgs} args - Arguments to filter Semilleros to delete.
     * @example
     * // Delete a few Semilleros
     * const { count } = await prisma.semillero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends semilleroDeleteManyArgs>(args?: SelectSubset<T, semilleroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Semilleros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semilleroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Semilleros
     * const semillero = await prisma.semillero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends semilleroUpdateManyArgs>(args: SelectSubset<T, semilleroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Semillero.
     * @param {semilleroUpsertArgs} args - Arguments to update or create a Semillero.
     * @example
     * // Update or create a Semillero
     * const semillero = await prisma.semillero.upsert({
     *   create: {
     *     // ... data to create a Semillero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Semillero we want to update
     *   }
     * })
     */
    upsert<T extends semilleroUpsertArgs>(args: SelectSubset<T, semilleroUpsertArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Semilleros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semilleroCountArgs} args - Arguments to filter Semilleros to count.
     * @example
     * // Count the number of Semilleros
     * const count = await prisma.semillero.count({
     *   where: {
     *     // ... the filter for the Semilleros we want to count
     *   }
     * })
    **/
    count<T extends semilleroCountArgs>(
      args?: Subset<T, semilleroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SemilleroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Semillero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SemilleroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SemilleroAggregateArgs>(args: Subset<T, SemilleroAggregateArgs>): Prisma.PrismaPromise<GetSemilleroAggregateType<T>>

    /**
     * Group by Semillero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {semilleroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends semilleroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: semilleroGroupByArgs['orderBy'] }
        : { orderBy?: semilleroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, semilleroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSemilleroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the semillero model
   */
  readonly fields: semilleroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for semillero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__semilleroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    actividad<T extends semillero$actividadArgs<ExtArgs> = {}>(args?: Subset<T, semillero$actividadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$actividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programa_academico<T extends programa_academicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, programa_academicoDefaultArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuarioDefaultArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the semillero model
   */
  interface semilleroFieldRefs {
    readonly id: FieldRef<"semillero", 'Int'>
    readonly id_prog_acad: FieldRef<"semillero", 'Int'>
    readonly id_docente: FieldRef<"semillero", 'Int'>
    readonly nombre: FieldRef<"semillero", 'String'>
    readonly descripcion: FieldRef<"semillero", 'String'>
    readonly cupo: FieldRef<"semillero", 'Int'>
    readonly fecha_limite_inscripcion: FieldRef<"semillero", 'DateTime'>
    readonly fecha_inicio: FieldRef<"semillero", 'DateTime'>
    readonly fecha_fin: FieldRef<"semillero", 'DateTime'>
    readonly cant_act_aprobatoria: FieldRef<"semillero", 'Int'>
    readonly estado: FieldRef<"semillero", 'Int'>
    readonly creado_en: FieldRef<"semillero", 'DateTime'>
    readonly eliminado_en: FieldRef<"semillero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * semillero findUnique
   */
  export type semilleroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    /**
     * Filter, which semillero to fetch.
     */
    where: semilleroWhereUniqueInput
  }

  /**
   * semillero findUniqueOrThrow
   */
  export type semilleroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    /**
     * Filter, which semillero to fetch.
     */
    where: semilleroWhereUniqueInput
  }

  /**
   * semillero findFirst
   */
  export type semilleroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    /**
     * Filter, which semillero to fetch.
     */
    where?: semilleroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semilleros to fetch.
     */
    orderBy?: semilleroOrderByWithRelationInput | semilleroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for semilleros.
     */
    cursor?: semilleroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semilleros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semilleros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of semilleros.
     */
    distinct?: SemilleroScalarFieldEnum | SemilleroScalarFieldEnum[]
  }

  /**
   * semillero findFirstOrThrow
   */
  export type semilleroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    /**
     * Filter, which semillero to fetch.
     */
    where?: semilleroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semilleros to fetch.
     */
    orderBy?: semilleroOrderByWithRelationInput | semilleroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for semilleros.
     */
    cursor?: semilleroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semilleros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semilleros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of semilleros.
     */
    distinct?: SemilleroScalarFieldEnum | SemilleroScalarFieldEnum[]
  }

  /**
   * semillero findMany
   */
  export type semilleroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    /**
     * Filter, which semilleros to fetch.
     */
    where?: semilleroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of semilleros to fetch.
     */
    orderBy?: semilleroOrderByWithRelationInput | semilleroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing semilleros.
     */
    cursor?: semilleroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` semilleros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` semilleros.
     */
    skip?: number
    distinct?: SemilleroScalarFieldEnum | SemilleroScalarFieldEnum[]
  }

  /**
   * semillero create
   */
  export type semilleroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    /**
     * The data needed to create a semillero.
     */
    data: XOR<semilleroCreateInput, semilleroUncheckedCreateInput>
  }

  /**
   * semillero createMany
   */
  export type semilleroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many semilleros.
     */
    data: semilleroCreateManyInput | semilleroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * semillero update
   */
  export type semilleroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    /**
     * The data needed to update a semillero.
     */
    data: XOR<semilleroUpdateInput, semilleroUncheckedUpdateInput>
    /**
     * Choose, which semillero to update.
     */
    where: semilleroWhereUniqueInput
  }

  /**
   * semillero updateMany
   */
  export type semilleroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update semilleros.
     */
    data: XOR<semilleroUpdateManyMutationInput, semilleroUncheckedUpdateManyInput>
    /**
     * Filter which semilleros to update
     */
    where?: semilleroWhereInput
    /**
     * Limit how many semilleros to update.
     */
    limit?: number
  }

  /**
   * semillero upsert
   */
  export type semilleroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    /**
     * The filter to search for the semillero to update in case it exists.
     */
    where: semilleroWhereUniqueInput
    /**
     * In case the semillero found by the `where` argument doesn't exist, create a new semillero with this data.
     */
    create: XOR<semilleroCreateInput, semilleroUncheckedCreateInput>
    /**
     * In case the semillero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<semilleroUpdateInput, semilleroUncheckedUpdateInput>
  }

  /**
   * semillero delete
   */
  export type semilleroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    /**
     * Filter which semillero to delete.
     */
    where: semilleroWhereUniqueInput
  }

  /**
   * semillero deleteMany
   */
  export type semilleroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which semilleros to delete
     */
    where?: semilleroWhereInput
    /**
     * Limit how many semilleros to delete.
     */
    limit?: number
  }

  /**
   * semillero.actividad
   */
  export type semillero$actividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the actividad
     */
    select?: actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the actividad
     */
    omit?: actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: actividadInclude<ExtArgs> | null
    where?: actividadWhereInput
    orderBy?: actividadOrderByWithRelationInput | actividadOrderByWithRelationInput[]
    cursor?: actividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActividadScalarFieldEnum | ActividadScalarFieldEnum[]
  }

  /**
   * semillero without action
   */
  export type semilleroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
  }


  /**
   * Model usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    id_rol: number | null
    estado: number | null
    token_reseteo_expiracion: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    id_rol: number | null
    estado: number | null
    token_reseteo_expiracion: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    id_rol: number | null
    nombre_completo: string | null
    correo_personal: string | null
    correo_institucional: string | null
    telefono: string | null
    contrasena: string | null
    estado: number | null
    token_reseteo: string | null
    token_reseteo_expiracion: number | null
    creado_en: Date | null
    eliminado_en: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    id_rol: number | null
    nombre_completo: string | null
    correo_personal: string | null
    correo_institucional: string | null
    telefono: string | null
    contrasena: string | null
    estado: number | null
    token_reseteo: string | null
    token_reseteo_expiracion: number | null
    creado_en: Date | null
    eliminado_en: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    id_rol: number
    nombre_completo: number
    correo_personal: number
    correo_institucional: number
    telefono: number
    contrasena: number
    estado: number
    token_reseteo: number
    token_reseteo_expiracion: number
    creado_en: number
    eliminado_en: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    id_rol?: true
    estado?: true
    token_reseteo_expiracion?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    id_rol?: true
    estado?: true
    token_reseteo_expiracion?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    id_rol?: true
    nombre_completo?: true
    correo_personal?: true
    correo_institucional?: true
    telefono?: true
    contrasena?: true
    estado?: true
    token_reseteo?: true
    token_reseteo_expiracion?: true
    creado_en?: true
    eliminado_en?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    id_rol?: true
    nombre_completo?: true
    correo_personal?: true
    correo_institucional?: true
    telefono?: true
    contrasena?: true
    estado?: true
    token_reseteo?: true
    token_reseteo_expiracion?: true
    creado_en?: true
    eliminado_en?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    id_rol?: true
    nombre_completo?: true
    correo_personal?: true
    correo_institucional?: true
    telefono?: true
    contrasena?: true
    estado?: true
    token_reseteo?: true
    token_reseteo_expiracion?: true
    creado_en?: true
    eliminado_en?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuario to aggregate.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuarioWhereInput
    orderBy?: usuarioOrderByWithAggregationInput | usuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo: string | null
    token_reseteo_expiracion: number | null
    creado_en: Date
    eliminado_en: Date | null
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    id_rol?: boolean
    nombre_completo?: boolean
    correo_personal?: boolean
    correo_institucional?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
    token_reseteo?: boolean
    token_reseteo_expiracion?: boolean
    creado_en?: boolean
    eliminado_en?: boolean
    estudiante_actividad?: boolean | usuario$estudiante_actividadArgs<ExtArgs>
    programa_academico?: boolean | usuario$programa_academicoArgs<ExtArgs>
    semillero?: boolean | usuario$semilleroArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>



  export type usuarioSelectScalar = {
    id?: boolean
    id_rol?: boolean
    nombre_completo?: boolean
    correo_personal?: boolean
    correo_institucional?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
    token_reseteo?: boolean
    token_reseteo_expiracion?: boolean
    creado_en?: boolean
    eliminado_en?: boolean
  }

  export type usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "id_rol" | "nombre_completo" | "correo_personal" | "correo_institucional" | "telefono" | "contrasena" | "estado" | "token_reseteo" | "token_reseteo_expiracion" | "creado_en" | "eliminado_en", ExtArgs["result"]["usuario"]>
  export type usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    estudiante_actividad?: boolean | usuario$estudiante_actividadArgs<ExtArgs>
    programa_academico?: boolean | usuario$programa_academicoArgs<ExtArgs>
    semillero?: boolean | usuario$semilleroArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuario"
    objects: {
      estudiante_actividad: Prisma.$estudiante_actividadPayload<ExtArgs>[]
      programa_academico: Prisma.$programa_academicoPayload<ExtArgs> | null
      semillero: Prisma.$semilleroPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      id_rol: number
      nombre_completo: string
      correo_personal: string
      correo_institucional: string
      telefono: string
      contrasena: string
      estado: number
      token_reseteo: string | null
      token_reseteo_expiracion: number | null
      creado_en: Date
      eliminado_en: Date | null
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = $Result.GetResult<Prisma.$usuarioPayload, S>

  type usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuario'], meta: { name: 'usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {usuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuarioFindUniqueArgs>(args: SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuarioFindFirstArgs>(args?: SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuarioFindManyArgs>(args?: SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {usuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends usuarioCreateArgs>(args: SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuarioCreateManyArgs>(args?: SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {usuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends usuarioDeleteArgs>(args: SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {usuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuarioUpdateArgs>(args: SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuarioDeleteManyArgs>(args?: SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuarioUpdateManyArgs>(args: SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {usuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends usuarioUpsertArgs>(args: SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma__usuarioClient<$Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuarioCountArgs>(
      args?: Subset<T, usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuarioGroupByArgs['orderBy'] }
        : { orderBy?: usuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuario model
   */
  readonly fields: usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    estudiante_actividad<T extends usuario$estudiante_actividadArgs<ExtArgs> = {}>(args?: Subset<T, usuario$estudiante_actividadArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$estudiante_actividadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    programa_academico<T extends usuario$programa_academicoArgs<ExtArgs> = {}>(args?: Subset<T, usuario$programa_academicoArgs<ExtArgs>>): Prisma__programa_academicoClient<$Result.GetResult<Prisma.$programa_academicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    semillero<T extends usuario$semilleroArgs<ExtArgs> = {}>(args?: Subset<T, usuario$semilleroArgs<ExtArgs>>): Prisma__semilleroClient<$Result.GetResult<Prisma.$semilleroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuario model
   */
  interface usuarioFieldRefs {
    readonly id: FieldRef<"usuario", 'Int'>
    readonly id_rol: FieldRef<"usuario", 'Int'>
    readonly nombre_completo: FieldRef<"usuario", 'String'>
    readonly correo_personal: FieldRef<"usuario", 'String'>
    readonly correo_institucional: FieldRef<"usuario", 'String'>
    readonly telefono: FieldRef<"usuario", 'String'>
    readonly contrasena: FieldRef<"usuario", 'String'>
    readonly estado: FieldRef<"usuario", 'Int'>
    readonly token_reseteo: FieldRef<"usuario", 'String'>
    readonly token_reseteo_expiracion: FieldRef<"usuario", 'Int'>
    readonly creado_en: FieldRef<"usuario", 'DateTime'>
    readonly eliminado_en: FieldRef<"usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * usuario findUnique
   */
  export type usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findUniqueOrThrow
   */
  export type usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario findFirst
   */
  export type usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findFirstOrThrow
   */
  export type usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuario to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario findMany
   */
  export type usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuarioOrderByWithRelationInput | usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * usuario create
   */
  export type usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a usuario.
     */
    data: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
  }

  /**
   * usuario createMany
   */
  export type usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuarioCreateManyInput | usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuario update
   */
  export type usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a usuario.
     */
    data: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
    /**
     * Choose, which usuario to update.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario updateMany
   */
  export type usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuarioUpdateManyMutationInput, usuarioUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuario upsert
   */
  export type usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the usuario to update in case it exists.
     */
    where: usuarioWhereUniqueInput
    /**
     * In case the usuario found by the `where` argument doesn't exist, create a new usuario with this data.
     */
    create: XOR<usuarioCreateInput, usuarioUncheckedCreateInput>
    /**
     * In case the usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuarioUpdateInput, usuarioUncheckedUpdateInput>
  }

  /**
   * usuario delete
   */
  export type usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
    /**
     * Filter which usuario to delete.
     */
    where: usuarioWhereUniqueInput
  }

  /**
   * usuario deleteMany
   */
  export type usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuarioWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuario.estudiante_actividad
   */
  export type usuario$estudiante_actividadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the estudiante_actividad
     */
    select?: estudiante_actividadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the estudiante_actividad
     */
    omit?: estudiante_actividadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: estudiante_actividadInclude<ExtArgs> | null
    where?: estudiante_actividadWhereInput
    orderBy?: estudiante_actividadOrderByWithRelationInput | estudiante_actividadOrderByWithRelationInput[]
    cursor?: estudiante_actividadWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Estudiante_actividadScalarFieldEnum | Estudiante_actividadScalarFieldEnum[]
  }

  /**
   * usuario.programa_academico
   */
  export type usuario$programa_academicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the programa_academico
     */
    select?: programa_academicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the programa_academico
     */
    omit?: programa_academicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: programa_academicoInclude<ExtArgs> | null
    where?: programa_academicoWhereInput
  }

  /**
   * usuario.semillero
   */
  export type usuario$semilleroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the semillero
     */
    select?: semilleroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the semillero
     */
    omit?: semilleroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: semilleroInclude<ExtArgs> | null
    where?: semilleroWhereInput
  }

  /**
   * usuario without action
   */
  export type usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuario
     */
    select?: usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuario
     */
    omit?: usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuarioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ActividadScalarFieldEnum: {
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

  export type ActividadScalarFieldEnum = (typeof ActividadScalarFieldEnum)[keyof typeof ActividadScalarFieldEnum]


  export const Estudiante_actividadScalarFieldEnum: {
    id: 'id',
    id_actividad: 'id_actividad',
    id_estudiante: 'id_estudiante',
    estado: 'estado'
  };

  export type Estudiante_actividadScalarFieldEnum = (typeof Estudiante_actividadScalarFieldEnum)[keyof typeof Estudiante_actividadScalarFieldEnum]


  export const Programa_academicoScalarFieldEnum: {
    id: 'id',
    id_director: 'id_director',
    nombre: 'nombre',
    estado: 'estado',
    creado_en: 'creado_en',
    eliminado_en: 'eliminado_en'
  };

  export type Programa_academicoScalarFieldEnum = (typeof Programa_academicoScalarFieldEnum)[keyof typeof Programa_academicoScalarFieldEnum]


  export const RolScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre'
  };

  export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum]


  export const SemilleroScalarFieldEnum: {
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

  export type SemilleroScalarFieldEnum = (typeof SemilleroScalarFieldEnum)[keyof typeof SemilleroScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
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

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const actividadOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion',
    url: 'url'
  };

  export type actividadOrderByRelevanceFieldEnum = (typeof actividadOrderByRelevanceFieldEnum)[keyof typeof actividadOrderByRelevanceFieldEnum]


  export const programa_academicoOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type programa_academicoOrderByRelevanceFieldEnum = (typeof programa_academicoOrderByRelevanceFieldEnum)[keyof typeof programa_academicoOrderByRelevanceFieldEnum]


  export const rolOrderByRelevanceFieldEnum: {
    nombre: 'nombre'
  };

  export type rolOrderByRelevanceFieldEnum = (typeof rolOrderByRelevanceFieldEnum)[keyof typeof rolOrderByRelevanceFieldEnum]


  export const semilleroOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type semilleroOrderByRelevanceFieldEnum = (typeof semilleroOrderByRelevanceFieldEnum)[keyof typeof semilleroOrderByRelevanceFieldEnum]


  export const usuarioOrderByRelevanceFieldEnum: {
    nombre_completo: 'nombre_completo',
    correo_personal: 'correo_personal',
    correo_institucional: 'correo_institucional',
    telefono: 'telefono',
    contrasena: 'contrasena',
    token_reseteo: 'token_reseteo'
  };

  export type usuarioOrderByRelevanceFieldEnum = (typeof usuarioOrderByRelevanceFieldEnum)[keyof typeof usuarioOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type actividadWhereInput = {
    AND?: actividadWhereInput | actividadWhereInput[]
    OR?: actividadWhereInput[]
    NOT?: actividadWhereInput | actividadWhereInput[]
    id?: IntFilter<"actividad"> | number
    id_semillero?: IntFilter<"actividad"> | number
    nombre?: StringFilter<"actividad"> | string
    descripcion?: StringNullableFilter<"actividad"> | string | null
    url?: StringNullableFilter<"actividad"> | string | null
    fecha_inicio?: DateTimeFilter<"actividad"> | Date | string
    fecha_fin?: DateTimeFilter<"actividad"> | Date | string
    estado?: IntFilter<"actividad"> | number
    creado_en?: DateTimeFilter<"actividad"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"actividad"> | Date | string | null
    semillero?: XOR<SemilleroScalarRelationFilter, semilleroWhereInput>
    estudiante_actividad?: Estudiante_actividadListRelationFilter
  }

  export type actividadOrderByWithRelationInput = {
    id?: SortOrder
    id_semillero?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrderInput | SortOrder
    semillero?: semilleroOrderByWithRelationInput
    estudiante_actividad?: estudiante_actividadOrderByRelationAggregateInput
    _relevance?: actividadOrderByRelevanceInput
  }

  export type actividadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: actividadWhereInput | actividadWhereInput[]
    OR?: actividadWhereInput[]
    NOT?: actividadWhereInput | actividadWhereInput[]
    id_semillero?: IntFilter<"actividad"> | number
    nombre?: StringFilter<"actividad"> | string
    descripcion?: StringNullableFilter<"actividad"> | string | null
    url?: StringNullableFilter<"actividad"> | string | null
    fecha_inicio?: DateTimeFilter<"actividad"> | Date | string
    fecha_fin?: DateTimeFilter<"actividad"> | Date | string
    estado?: IntFilter<"actividad"> | number
    creado_en?: DateTimeFilter<"actividad"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"actividad"> | Date | string | null
    semillero?: XOR<SemilleroScalarRelationFilter, semilleroWhereInput>
    estudiante_actividad?: Estudiante_actividadListRelationFilter
  }, "id">

  export type actividadOrderByWithAggregationInput = {
    id?: SortOrder
    id_semillero?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrderInput | SortOrder
    _count?: actividadCountOrderByAggregateInput
    _avg?: actividadAvgOrderByAggregateInput
    _max?: actividadMaxOrderByAggregateInput
    _min?: actividadMinOrderByAggregateInput
    _sum?: actividadSumOrderByAggregateInput
  }

  export type actividadScalarWhereWithAggregatesInput = {
    AND?: actividadScalarWhereWithAggregatesInput | actividadScalarWhereWithAggregatesInput[]
    OR?: actividadScalarWhereWithAggregatesInput[]
    NOT?: actividadScalarWhereWithAggregatesInput | actividadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"actividad"> | number
    id_semillero?: IntWithAggregatesFilter<"actividad"> | number
    nombre?: StringWithAggregatesFilter<"actividad"> | string
    descripcion?: StringNullableWithAggregatesFilter<"actividad"> | string | null
    url?: StringNullableWithAggregatesFilter<"actividad"> | string | null
    fecha_inicio?: DateTimeWithAggregatesFilter<"actividad"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"actividad"> | Date | string
    estado?: IntWithAggregatesFilter<"actividad"> | number
    creado_en?: DateTimeWithAggregatesFilter<"actividad"> | Date | string
    eliminado_en?: DateTimeNullableWithAggregatesFilter<"actividad"> | Date | string | null
  }

  export type estudiante_actividadWhereInput = {
    AND?: estudiante_actividadWhereInput | estudiante_actividadWhereInput[]
    OR?: estudiante_actividadWhereInput[]
    NOT?: estudiante_actividadWhereInput | estudiante_actividadWhereInput[]
    id?: IntFilter<"estudiante_actividad"> | number
    id_actividad?: IntFilter<"estudiante_actividad"> | number
    id_estudiante?: IntFilter<"estudiante_actividad"> | number
    estado?: IntFilter<"estudiante_actividad"> | number
    actividad?: XOR<ActividadScalarRelationFilter, actividadWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type estudiante_actividadOrderByWithRelationInput = {
    id?: SortOrder
    id_actividad?: SortOrder
    id_estudiante?: SortOrder
    estado?: SortOrder
    actividad?: actividadOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
  }

  export type estudiante_actividadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: estudiante_actividadWhereInput | estudiante_actividadWhereInput[]
    OR?: estudiante_actividadWhereInput[]
    NOT?: estudiante_actividadWhereInput | estudiante_actividadWhereInput[]
    id_actividad?: IntFilter<"estudiante_actividad"> | number
    id_estudiante?: IntFilter<"estudiante_actividad"> | number
    estado?: IntFilter<"estudiante_actividad"> | number
    actividad?: XOR<ActividadScalarRelationFilter, actividadWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id">

  export type estudiante_actividadOrderByWithAggregationInput = {
    id?: SortOrder
    id_actividad?: SortOrder
    id_estudiante?: SortOrder
    estado?: SortOrder
    _count?: estudiante_actividadCountOrderByAggregateInput
    _avg?: estudiante_actividadAvgOrderByAggregateInput
    _max?: estudiante_actividadMaxOrderByAggregateInput
    _min?: estudiante_actividadMinOrderByAggregateInput
    _sum?: estudiante_actividadSumOrderByAggregateInput
  }

  export type estudiante_actividadScalarWhereWithAggregatesInput = {
    AND?: estudiante_actividadScalarWhereWithAggregatesInput | estudiante_actividadScalarWhereWithAggregatesInput[]
    OR?: estudiante_actividadScalarWhereWithAggregatesInput[]
    NOT?: estudiante_actividadScalarWhereWithAggregatesInput | estudiante_actividadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"estudiante_actividad"> | number
    id_actividad?: IntWithAggregatesFilter<"estudiante_actividad"> | number
    id_estudiante?: IntWithAggregatesFilter<"estudiante_actividad"> | number
    estado?: IntWithAggregatesFilter<"estudiante_actividad"> | number
  }

  export type programa_academicoWhereInput = {
    AND?: programa_academicoWhereInput | programa_academicoWhereInput[]
    OR?: programa_academicoWhereInput[]
    NOT?: programa_academicoWhereInput | programa_academicoWhereInput[]
    id?: IntFilter<"programa_academico"> | number
    id_director?: IntFilter<"programa_academico"> | number
    nombre?: StringFilter<"programa_academico"> | string
    estado?: IntFilter<"programa_academico"> | number
    creado_en?: DateTimeFilter<"programa_academico"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"programa_academico"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    semillero?: SemilleroListRelationFilter
  }

  export type programa_academicoOrderByWithRelationInput = {
    id?: SortOrder
    id_director?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrderInput | SortOrder
    usuario?: usuarioOrderByWithRelationInput
    semillero?: semilleroOrderByRelationAggregateInput
    _relevance?: programa_academicoOrderByRelevanceInput
  }

  export type programa_academicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_director?: number
    nombre?: string
    AND?: programa_academicoWhereInput | programa_academicoWhereInput[]
    OR?: programa_academicoWhereInput[]
    NOT?: programa_academicoWhereInput | programa_academicoWhereInput[]
    estado?: IntFilter<"programa_academico"> | number
    creado_en?: DateTimeFilter<"programa_academico"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"programa_academico"> | Date | string | null
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
    semillero?: SemilleroListRelationFilter
  }, "id" | "id_director" | "nombre">

  export type programa_academicoOrderByWithAggregationInput = {
    id?: SortOrder
    id_director?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrderInput | SortOrder
    _count?: programa_academicoCountOrderByAggregateInput
    _avg?: programa_academicoAvgOrderByAggregateInput
    _max?: programa_academicoMaxOrderByAggregateInput
    _min?: programa_academicoMinOrderByAggregateInput
    _sum?: programa_academicoSumOrderByAggregateInput
  }

  export type programa_academicoScalarWhereWithAggregatesInput = {
    AND?: programa_academicoScalarWhereWithAggregatesInput | programa_academicoScalarWhereWithAggregatesInput[]
    OR?: programa_academicoScalarWhereWithAggregatesInput[]
    NOT?: programa_academicoScalarWhereWithAggregatesInput | programa_academicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"programa_academico"> | number
    id_director?: IntWithAggregatesFilter<"programa_academico"> | number
    nombre?: StringWithAggregatesFilter<"programa_academico"> | string
    estado?: IntWithAggregatesFilter<"programa_academico"> | number
    creado_en?: DateTimeWithAggregatesFilter<"programa_academico"> | Date | string
    eliminado_en?: DateTimeNullableWithAggregatesFilter<"programa_academico"> | Date | string | null
  }

  export type rolWhereInput = {
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    id?: IntFilter<"rol"> | number
    nombre?: StringFilter<"rol"> | string
  }

  export type rolOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _relevance?: rolOrderByRelevanceInput
  }

  export type rolWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: rolWhereInput | rolWhereInput[]
    OR?: rolWhereInput[]
    NOT?: rolWhereInput | rolWhereInput[]
    nombre?: StringFilter<"rol"> | string
  }, "id">

  export type rolOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    _count?: rolCountOrderByAggregateInput
    _avg?: rolAvgOrderByAggregateInput
    _max?: rolMaxOrderByAggregateInput
    _min?: rolMinOrderByAggregateInput
    _sum?: rolSumOrderByAggregateInput
  }

  export type rolScalarWhereWithAggregatesInput = {
    AND?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    OR?: rolScalarWhereWithAggregatesInput[]
    NOT?: rolScalarWhereWithAggregatesInput | rolScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"rol"> | number
    nombre?: StringWithAggregatesFilter<"rol"> | string
  }

  export type semilleroWhereInput = {
    AND?: semilleroWhereInput | semilleroWhereInput[]
    OR?: semilleroWhereInput[]
    NOT?: semilleroWhereInput | semilleroWhereInput[]
    id?: IntFilter<"semillero"> | number
    id_prog_acad?: IntFilter<"semillero"> | number
    id_docente?: IntFilter<"semillero"> | number
    nombre?: StringFilter<"semillero"> | string
    descripcion?: StringNullableFilter<"semillero"> | string | null
    cupo?: IntFilter<"semillero"> | number
    fecha_limite_inscripcion?: DateTimeFilter<"semillero"> | Date | string
    fecha_inicio?: DateTimeFilter<"semillero"> | Date | string
    fecha_fin?: DateTimeFilter<"semillero"> | Date | string
    cant_act_aprobatoria?: IntFilter<"semillero"> | number
    estado?: IntFilter<"semillero"> | number
    creado_en?: DateTimeFilter<"semillero"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"semillero"> | Date | string | null
    actividad?: ActividadListRelationFilter
    programa_academico?: XOR<Programa_academicoScalarRelationFilter, programa_academicoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }

  export type semilleroOrderByWithRelationInput = {
    id?: SortOrder
    id_prog_acad?: SortOrder
    id_docente?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    cupo?: SortOrder
    fecha_limite_inscripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    cant_act_aprobatoria?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrderInput | SortOrder
    actividad?: actividadOrderByRelationAggregateInput
    programa_academico?: programa_academicoOrderByWithRelationInput
    usuario?: usuarioOrderByWithRelationInput
    _relevance?: semilleroOrderByRelevanceInput
  }

  export type semilleroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_docente?: number
    nombre?: string
    AND?: semilleroWhereInput | semilleroWhereInput[]
    OR?: semilleroWhereInput[]
    NOT?: semilleroWhereInput | semilleroWhereInput[]
    id_prog_acad?: IntFilter<"semillero"> | number
    descripcion?: StringNullableFilter<"semillero"> | string | null
    cupo?: IntFilter<"semillero"> | number
    fecha_limite_inscripcion?: DateTimeFilter<"semillero"> | Date | string
    fecha_inicio?: DateTimeFilter<"semillero"> | Date | string
    fecha_fin?: DateTimeFilter<"semillero"> | Date | string
    cant_act_aprobatoria?: IntFilter<"semillero"> | number
    estado?: IntFilter<"semillero"> | number
    creado_en?: DateTimeFilter<"semillero"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"semillero"> | Date | string | null
    actividad?: ActividadListRelationFilter
    programa_academico?: XOR<Programa_academicoScalarRelationFilter, programa_academicoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, usuarioWhereInput>
  }, "id" | "id_docente" | "nombre">

  export type semilleroOrderByWithAggregationInput = {
    id?: SortOrder
    id_prog_acad?: SortOrder
    id_docente?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    cupo?: SortOrder
    fecha_limite_inscripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    cant_act_aprobatoria?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrderInput | SortOrder
    _count?: semilleroCountOrderByAggregateInput
    _avg?: semilleroAvgOrderByAggregateInput
    _max?: semilleroMaxOrderByAggregateInput
    _min?: semilleroMinOrderByAggregateInput
    _sum?: semilleroSumOrderByAggregateInput
  }

  export type semilleroScalarWhereWithAggregatesInput = {
    AND?: semilleroScalarWhereWithAggregatesInput | semilleroScalarWhereWithAggregatesInput[]
    OR?: semilleroScalarWhereWithAggregatesInput[]
    NOT?: semilleroScalarWhereWithAggregatesInput | semilleroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"semillero"> | number
    id_prog_acad?: IntWithAggregatesFilter<"semillero"> | number
    id_docente?: IntWithAggregatesFilter<"semillero"> | number
    nombre?: StringWithAggregatesFilter<"semillero"> | string
    descripcion?: StringNullableWithAggregatesFilter<"semillero"> | string | null
    cupo?: IntWithAggregatesFilter<"semillero"> | number
    fecha_limite_inscripcion?: DateTimeWithAggregatesFilter<"semillero"> | Date | string
    fecha_inicio?: DateTimeWithAggregatesFilter<"semillero"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"semillero"> | Date | string
    cant_act_aprobatoria?: IntWithAggregatesFilter<"semillero"> | number
    estado?: IntWithAggregatesFilter<"semillero"> | number
    creado_en?: DateTimeWithAggregatesFilter<"semillero"> | Date | string
    eliminado_en?: DateTimeNullableWithAggregatesFilter<"semillero"> | Date | string | null
  }

  export type usuarioWhereInput = {
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id?: IntFilter<"usuario"> | number
    id_rol?: IntFilter<"usuario"> | number
    nombre_completo?: StringFilter<"usuario"> | string
    correo_personal?: StringFilter<"usuario"> | string
    correo_institucional?: StringFilter<"usuario"> | string
    telefono?: StringFilter<"usuario"> | string
    contrasena?: StringFilter<"usuario"> | string
    estado?: IntFilter<"usuario"> | number
    token_reseteo?: StringNullableFilter<"usuario"> | string | null
    token_reseteo_expiracion?: IntNullableFilter<"usuario"> | number | null
    creado_en?: DateTimeFilter<"usuario"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"usuario"> | Date | string | null
    estudiante_actividad?: Estudiante_actividadListRelationFilter
    programa_academico?: XOR<Programa_academicoNullableScalarRelationFilter, programa_academicoWhereInput> | null
    semillero?: XOR<SemilleroNullableScalarRelationFilter, semilleroWhereInput> | null
  }

  export type usuarioOrderByWithRelationInput = {
    id?: SortOrder
    id_rol?: SortOrder
    nombre_completo?: SortOrder
    correo_personal?: SortOrder
    correo_institucional?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    token_reseteo?: SortOrderInput | SortOrder
    token_reseteo_expiracion?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrderInput | SortOrder
    estudiante_actividad?: estudiante_actividadOrderByRelationAggregateInput
    programa_academico?: programa_academicoOrderByWithRelationInput
    semillero?: semilleroOrderByWithRelationInput
    _relevance?: usuarioOrderByRelevanceInput
  }

  export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    correo_personal?: string
    correo_institucional?: string
    telefono?: string
    AND?: usuarioWhereInput | usuarioWhereInput[]
    OR?: usuarioWhereInput[]
    NOT?: usuarioWhereInput | usuarioWhereInput[]
    id_rol?: IntFilter<"usuario"> | number
    nombre_completo?: StringFilter<"usuario"> | string
    contrasena?: StringFilter<"usuario"> | string
    estado?: IntFilter<"usuario"> | number
    token_reseteo?: StringNullableFilter<"usuario"> | string | null
    token_reseteo_expiracion?: IntNullableFilter<"usuario"> | number | null
    creado_en?: DateTimeFilter<"usuario"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"usuario"> | Date | string | null
    estudiante_actividad?: Estudiante_actividadListRelationFilter
    programa_academico?: XOR<Programa_academicoNullableScalarRelationFilter, programa_academicoWhereInput> | null
    semillero?: XOR<SemilleroNullableScalarRelationFilter, semilleroWhereInput> | null
  }, "id" | "correo_personal" | "correo_institucional" | "telefono">

  export type usuarioOrderByWithAggregationInput = {
    id?: SortOrder
    id_rol?: SortOrder
    nombre_completo?: SortOrder
    correo_personal?: SortOrder
    correo_institucional?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    token_reseteo?: SortOrderInput | SortOrder
    token_reseteo_expiracion?: SortOrderInput | SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrderInput | SortOrder
    _count?: usuarioCountOrderByAggregateInput
    _avg?: usuarioAvgOrderByAggregateInput
    _max?: usuarioMaxOrderByAggregateInput
    _min?: usuarioMinOrderByAggregateInput
    _sum?: usuarioSumOrderByAggregateInput
  }

  export type usuarioScalarWhereWithAggregatesInput = {
    AND?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    OR?: usuarioScalarWhereWithAggregatesInput[]
    NOT?: usuarioScalarWhereWithAggregatesInput | usuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuario"> | number
    id_rol?: IntWithAggregatesFilter<"usuario"> | number
    nombre_completo?: StringWithAggregatesFilter<"usuario"> | string
    correo_personal?: StringWithAggregatesFilter<"usuario"> | string
    correo_institucional?: StringWithAggregatesFilter<"usuario"> | string
    telefono?: StringWithAggregatesFilter<"usuario"> | string
    contrasena?: StringWithAggregatesFilter<"usuario"> | string
    estado?: IntWithAggregatesFilter<"usuario"> | number
    token_reseteo?: StringNullableWithAggregatesFilter<"usuario"> | string | null
    token_reseteo_expiracion?: IntNullableWithAggregatesFilter<"usuario"> | number | null
    creado_en?: DateTimeWithAggregatesFilter<"usuario"> | Date | string
    eliminado_en?: DateTimeNullableWithAggregatesFilter<"usuario"> | Date | string | null
  }

  export type actividadCreateInput = {
    nombre: string
    descripcion?: string | null
    url?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    semillero: semilleroCreateNestedOneWithoutActividadInput
    estudiante_actividad?: estudiante_actividadCreateNestedManyWithoutActividadInput
  }

  export type actividadUncheckedCreateInput = {
    id?: number
    id_semillero: number
    nombre: string
    descripcion?: string | null
    url?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedCreateNestedManyWithoutActividadInput
  }

  export type actividadUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    semillero?: semilleroUpdateOneRequiredWithoutActividadNestedInput
    estudiante_actividad?: estudiante_actividadUpdateManyWithoutActividadNestedInput
  }

  export type actividadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_semillero?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type actividadCreateManyInput = {
    id?: number
    id_semillero: number
    nombre: string
    descripcion?: string | null
    url?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
  }

  export type actividadUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actividadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_semillero?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estudiante_actividadCreateInput = {
    estado: number
    actividad: actividadCreateNestedOneWithoutEstudiante_actividadInput
    usuario: usuarioCreateNestedOneWithoutEstudiante_actividadInput
  }

  export type estudiante_actividadUncheckedCreateInput = {
    id?: number
    id_actividad: number
    id_estudiante: number
    estado: number
  }

  export type estudiante_actividadUpdateInput = {
    estado?: IntFieldUpdateOperationsInput | number
    actividad?: actividadUpdateOneRequiredWithoutEstudiante_actividadNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutEstudiante_actividadNestedInput
  }

  export type estudiante_actividadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type estudiante_actividadCreateManyInput = {
    id?: number
    id_actividad: number
    id_estudiante: number
    estado: number
  }

  export type estudiante_actividadUpdateManyMutationInput = {
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type estudiante_actividadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type programa_academicoCreateInput = {
    nombre: string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    usuario: usuarioCreateNestedOneWithoutPrograma_academicoInput
    semillero?: semilleroCreateNestedManyWithoutPrograma_academicoInput
  }

  export type programa_academicoUncheckedCreateInput = {
    id?: number
    id_director: number
    nombre: string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    semillero?: semilleroUncheckedCreateNestedManyWithoutPrograma_academicoInput
  }

  export type programa_academicoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneRequiredWithoutPrograma_academicoNestedInput
    semillero?: semilleroUpdateManyWithoutPrograma_academicoNestedInput
  }

  export type programa_academicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_director?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    semillero?: semilleroUncheckedUpdateManyWithoutPrograma_academicoNestedInput
  }

  export type programa_academicoCreateManyInput = {
    id?: number
    id_director: number
    nombre: string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
  }

  export type programa_academicoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type programa_academicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_director?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type rolCreateInput = {
    nombre: string
  }

  export type rolUncheckedCreateInput = {
    id?: number
    nombre: string
  }

  export type rolUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type rolUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type rolCreateManyInput = {
    id?: number
    nombre: string
  }

  export type rolUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type rolUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type semilleroCreateInput = {
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    actividad?: actividadCreateNestedManyWithoutSemilleroInput
    programa_academico: programa_academicoCreateNestedOneWithoutSemilleroInput
    usuario: usuarioCreateNestedOneWithoutSemilleroInput
  }

  export type semilleroUncheckedCreateInput = {
    id?: number
    id_prog_acad: number
    id_docente: number
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    actividad?: actividadUncheckedCreateNestedManyWithoutSemilleroInput
  }

  export type semilleroUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actividad?: actividadUpdateManyWithoutSemilleroNestedInput
    programa_academico?: programa_academicoUpdateOneRequiredWithoutSemilleroNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutSemilleroNestedInput
  }

  export type semilleroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_prog_acad?: IntFieldUpdateOperationsInput | number
    id_docente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actividad?: actividadUncheckedUpdateManyWithoutSemilleroNestedInput
  }

  export type semilleroCreateManyInput = {
    id?: number
    id_prog_acad: number
    id_docente: number
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
  }

  export type semilleroUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type semilleroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_prog_acad?: IntFieldUpdateOperationsInput | number
    id_docente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuarioCreateInput = {
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo?: string | null
    token_reseteo_expiracion?: number | null
    creado_en: Date | string
    eliminado_en?: Date | string | null
    estudiante_actividad?: estudiante_actividadCreateNestedManyWithoutUsuarioInput
    programa_academico?: programa_academicoCreateNestedOneWithoutUsuarioInput
    semillero?: semilleroCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateInput = {
    id?: number
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo?: string | null
    token_reseteo_expiracion?: number | null
    creado_en: Date | string
    eliminado_en?: Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedCreateNestedManyWithoutUsuarioInput
    programa_academico?: programa_academicoUncheckedCreateNestedOneWithoutUsuarioInput
    semillero?: semilleroUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUpdateInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante_actividad?: estudiante_actividadUpdateManyWithoutUsuarioNestedInput
    programa_academico?: programa_academicoUpdateOneWithoutUsuarioNestedInput
    semillero?: semilleroUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedUpdateManyWithoutUsuarioNestedInput
    programa_academico?: programa_academicoUncheckedUpdateOneWithoutUsuarioNestedInput
    semillero?: semilleroUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioCreateManyInput = {
    id?: number
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo?: string | null
    token_reseteo_expiracion?: number | null
    creado_en: Date | string
    eliminado_en?: Date | string | null
  }

  export type usuarioUpdateManyMutationInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SemilleroScalarRelationFilter = {
    is?: semilleroWhereInput
    isNot?: semilleroWhereInput
  }

  export type Estudiante_actividadListRelationFilter = {
    every?: estudiante_actividadWhereInput
    some?: estudiante_actividadWhereInput
    none?: estudiante_actividadWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type estudiante_actividadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type actividadOrderByRelevanceInput = {
    fields: actividadOrderByRelevanceFieldEnum | actividadOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type actividadCountOrderByAggregateInput = {
    id?: SortOrder
    id_semillero?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type actividadAvgOrderByAggregateInput = {
    id?: SortOrder
    id_semillero?: SortOrder
    estado?: SortOrder
  }

  export type actividadMaxOrderByAggregateInput = {
    id?: SortOrder
    id_semillero?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type actividadMinOrderByAggregateInput = {
    id?: SortOrder
    id_semillero?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    url?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type actividadSumOrderByAggregateInput = {
    id?: SortOrder
    id_semillero?: SortOrder
    estado?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ActividadScalarRelationFilter = {
    is?: actividadWhereInput
    isNot?: actividadWhereInput
  }

  export type UsuarioScalarRelationFilter = {
    is?: usuarioWhereInput
    isNot?: usuarioWhereInput
  }

  export type estudiante_actividadCountOrderByAggregateInput = {
    id?: SortOrder
    id_actividad?: SortOrder
    id_estudiante?: SortOrder
    estado?: SortOrder
  }

  export type estudiante_actividadAvgOrderByAggregateInput = {
    id?: SortOrder
    id_actividad?: SortOrder
    id_estudiante?: SortOrder
    estado?: SortOrder
  }

  export type estudiante_actividadMaxOrderByAggregateInput = {
    id?: SortOrder
    id_actividad?: SortOrder
    id_estudiante?: SortOrder
    estado?: SortOrder
  }

  export type estudiante_actividadMinOrderByAggregateInput = {
    id?: SortOrder
    id_actividad?: SortOrder
    id_estudiante?: SortOrder
    estado?: SortOrder
  }

  export type estudiante_actividadSumOrderByAggregateInput = {
    id?: SortOrder
    id_actividad?: SortOrder
    id_estudiante?: SortOrder
    estado?: SortOrder
  }

  export type SemilleroListRelationFilter = {
    every?: semilleroWhereInput
    some?: semilleroWhereInput
    none?: semilleroWhereInput
  }

  export type semilleroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type programa_academicoOrderByRelevanceInput = {
    fields: programa_academicoOrderByRelevanceFieldEnum | programa_academicoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type programa_academicoCountOrderByAggregateInput = {
    id?: SortOrder
    id_director?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type programa_academicoAvgOrderByAggregateInput = {
    id?: SortOrder
    id_director?: SortOrder
    estado?: SortOrder
  }

  export type programa_academicoMaxOrderByAggregateInput = {
    id?: SortOrder
    id_director?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type programa_academicoMinOrderByAggregateInput = {
    id?: SortOrder
    id_director?: SortOrder
    nombre?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type programa_academicoSumOrderByAggregateInput = {
    id?: SortOrder
    id_director?: SortOrder
    estado?: SortOrder
  }

  export type rolOrderByRelevanceInput = {
    fields: rolOrderByRelevanceFieldEnum | rolOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type rolCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type rolAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type rolMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type rolMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
  }

  export type rolSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActividadListRelationFilter = {
    every?: actividadWhereInput
    some?: actividadWhereInput
    none?: actividadWhereInput
  }

  export type Programa_academicoScalarRelationFilter = {
    is?: programa_academicoWhereInput
    isNot?: programa_academicoWhereInput
  }

  export type actividadOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type semilleroOrderByRelevanceInput = {
    fields: semilleroOrderByRelevanceFieldEnum | semilleroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type semilleroCountOrderByAggregateInput = {
    id?: SortOrder
    id_prog_acad?: SortOrder
    id_docente?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cupo?: SortOrder
    fecha_limite_inscripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    cant_act_aprobatoria?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type semilleroAvgOrderByAggregateInput = {
    id?: SortOrder
    id_prog_acad?: SortOrder
    id_docente?: SortOrder
    cupo?: SortOrder
    cant_act_aprobatoria?: SortOrder
    estado?: SortOrder
  }

  export type semilleroMaxOrderByAggregateInput = {
    id?: SortOrder
    id_prog_acad?: SortOrder
    id_docente?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cupo?: SortOrder
    fecha_limite_inscripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    cant_act_aprobatoria?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type semilleroMinOrderByAggregateInput = {
    id?: SortOrder
    id_prog_acad?: SortOrder
    id_docente?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    cupo?: SortOrder
    fecha_limite_inscripcion?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    cant_act_aprobatoria?: SortOrder
    estado?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type semilleroSumOrderByAggregateInput = {
    id?: SortOrder
    id_prog_acad?: SortOrder
    id_docente?: SortOrder
    cupo?: SortOrder
    cant_act_aprobatoria?: SortOrder
    estado?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Programa_academicoNullableScalarRelationFilter = {
    is?: programa_academicoWhereInput | null
    isNot?: programa_academicoWhereInput | null
  }

  export type SemilleroNullableScalarRelationFilter = {
    is?: semilleroWhereInput | null
    isNot?: semilleroWhereInput | null
  }

  export type usuarioOrderByRelevanceInput = {
    fields: usuarioOrderByRelevanceFieldEnum | usuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usuarioCountOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    nombre_completo?: SortOrder
    correo_personal?: SortOrder
    correo_institucional?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    token_reseteo?: SortOrder
    token_reseteo_expiracion?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type usuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    estado?: SortOrder
    token_reseteo_expiracion?: SortOrder
  }

  export type usuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    nombre_completo?: SortOrder
    correo_personal?: SortOrder
    correo_institucional?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    token_reseteo?: SortOrder
    token_reseteo_expiracion?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type usuarioMinOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    nombre_completo?: SortOrder
    correo_personal?: SortOrder
    correo_institucional?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    token_reseteo?: SortOrder
    token_reseteo_expiracion?: SortOrder
    creado_en?: SortOrder
    eliminado_en?: SortOrder
  }

  export type usuarioSumOrderByAggregateInput = {
    id?: SortOrder
    id_rol?: SortOrder
    estado?: SortOrder
    token_reseteo_expiracion?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type semilleroCreateNestedOneWithoutActividadInput = {
    create?: XOR<semilleroCreateWithoutActividadInput, semilleroUncheckedCreateWithoutActividadInput>
    connectOrCreate?: semilleroCreateOrConnectWithoutActividadInput
    connect?: semilleroWhereUniqueInput
  }

  export type estudiante_actividadCreateNestedManyWithoutActividadInput = {
    create?: XOR<estudiante_actividadCreateWithoutActividadInput, estudiante_actividadUncheckedCreateWithoutActividadInput> | estudiante_actividadCreateWithoutActividadInput[] | estudiante_actividadUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: estudiante_actividadCreateOrConnectWithoutActividadInput | estudiante_actividadCreateOrConnectWithoutActividadInput[]
    createMany?: estudiante_actividadCreateManyActividadInputEnvelope
    connect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
  }

  export type estudiante_actividadUncheckedCreateNestedManyWithoutActividadInput = {
    create?: XOR<estudiante_actividadCreateWithoutActividadInput, estudiante_actividadUncheckedCreateWithoutActividadInput> | estudiante_actividadCreateWithoutActividadInput[] | estudiante_actividadUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: estudiante_actividadCreateOrConnectWithoutActividadInput | estudiante_actividadCreateOrConnectWithoutActividadInput[]
    createMany?: estudiante_actividadCreateManyActividadInputEnvelope
    connect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type semilleroUpdateOneRequiredWithoutActividadNestedInput = {
    create?: XOR<semilleroCreateWithoutActividadInput, semilleroUncheckedCreateWithoutActividadInput>
    connectOrCreate?: semilleroCreateOrConnectWithoutActividadInput
    upsert?: semilleroUpsertWithoutActividadInput
    connect?: semilleroWhereUniqueInput
    update?: XOR<XOR<semilleroUpdateToOneWithWhereWithoutActividadInput, semilleroUpdateWithoutActividadInput>, semilleroUncheckedUpdateWithoutActividadInput>
  }

  export type estudiante_actividadUpdateManyWithoutActividadNestedInput = {
    create?: XOR<estudiante_actividadCreateWithoutActividadInput, estudiante_actividadUncheckedCreateWithoutActividadInput> | estudiante_actividadCreateWithoutActividadInput[] | estudiante_actividadUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: estudiante_actividadCreateOrConnectWithoutActividadInput | estudiante_actividadCreateOrConnectWithoutActividadInput[]
    upsert?: estudiante_actividadUpsertWithWhereUniqueWithoutActividadInput | estudiante_actividadUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: estudiante_actividadCreateManyActividadInputEnvelope
    set?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    disconnect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    delete?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    connect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    update?: estudiante_actividadUpdateWithWhereUniqueWithoutActividadInput | estudiante_actividadUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: estudiante_actividadUpdateManyWithWhereWithoutActividadInput | estudiante_actividadUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: estudiante_actividadScalarWhereInput | estudiante_actividadScalarWhereInput[]
  }

  export type estudiante_actividadUncheckedUpdateManyWithoutActividadNestedInput = {
    create?: XOR<estudiante_actividadCreateWithoutActividadInput, estudiante_actividadUncheckedCreateWithoutActividadInput> | estudiante_actividadCreateWithoutActividadInput[] | estudiante_actividadUncheckedCreateWithoutActividadInput[]
    connectOrCreate?: estudiante_actividadCreateOrConnectWithoutActividadInput | estudiante_actividadCreateOrConnectWithoutActividadInput[]
    upsert?: estudiante_actividadUpsertWithWhereUniqueWithoutActividadInput | estudiante_actividadUpsertWithWhereUniqueWithoutActividadInput[]
    createMany?: estudiante_actividadCreateManyActividadInputEnvelope
    set?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    disconnect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    delete?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    connect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    update?: estudiante_actividadUpdateWithWhereUniqueWithoutActividadInput | estudiante_actividadUpdateWithWhereUniqueWithoutActividadInput[]
    updateMany?: estudiante_actividadUpdateManyWithWhereWithoutActividadInput | estudiante_actividadUpdateManyWithWhereWithoutActividadInput[]
    deleteMany?: estudiante_actividadScalarWhereInput | estudiante_actividadScalarWhereInput[]
  }

  export type actividadCreateNestedOneWithoutEstudiante_actividadInput = {
    create?: XOR<actividadCreateWithoutEstudiante_actividadInput, actividadUncheckedCreateWithoutEstudiante_actividadInput>
    connectOrCreate?: actividadCreateOrConnectWithoutEstudiante_actividadInput
    connect?: actividadWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutEstudiante_actividadInput = {
    create?: XOR<usuarioCreateWithoutEstudiante_actividadInput, usuarioUncheckedCreateWithoutEstudiante_actividadInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutEstudiante_actividadInput
    connect?: usuarioWhereUniqueInput
  }

  export type actividadUpdateOneRequiredWithoutEstudiante_actividadNestedInput = {
    create?: XOR<actividadCreateWithoutEstudiante_actividadInput, actividadUncheckedCreateWithoutEstudiante_actividadInput>
    connectOrCreate?: actividadCreateOrConnectWithoutEstudiante_actividadInput
    upsert?: actividadUpsertWithoutEstudiante_actividadInput
    connect?: actividadWhereUniqueInput
    update?: XOR<XOR<actividadUpdateToOneWithWhereWithoutEstudiante_actividadInput, actividadUpdateWithoutEstudiante_actividadInput>, actividadUncheckedUpdateWithoutEstudiante_actividadInput>
  }

  export type usuarioUpdateOneRequiredWithoutEstudiante_actividadNestedInput = {
    create?: XOR<usuarioCreateWithoutEstudiante_actividadInput, usuarioUncheckedCreateWithoutEstudiante_actividadInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutEstudiante_actividadInput
    upsert?: usuarioUpsertWithoutEstudiante_actividadInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutEstudiante_actividadInput, usuarioUpdateWithoutEstudiante_actividadInput>, usuarioUncheckedUpdateWithoutEstudiante_actividadInput>
  }

  export type usuarioCreateNestedOneWithoutPrograma_academicoInput = {
    create?: XOR<usuarioCreateWithoutPrograma_academicoInput, usuarioUncheckedCreateWithoutPrograma_academicoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPrograma_academicoInput
    connect?: usuarioWhereUniqueInput
  }

  export type semilleroCreateNestedManyWithoutPrograma_academicoInput = {
    create?: XOR<semilleroCreateWithoutPrograma_academicoInput, semilleroUncheckedCreateWithoutPrograma_academicoInput> | semilleroCreateWithoutPrograma_academicoInput[] | semilleroUncheckedCreateWithoutPrograma_academicoInput[]
    connectOrCreate?: semilleroCreateOrConnectWithoutPrograma_academicoInput | semilleroCreateOrConnectWithoutPrograma_academicoInput[]
    createMany?: semilleroCreateManyPrograma_academicoInputEnvelope
    connect?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
  }

  export type semilleroUncheckedCreateNestedManyWithoutPrograma_academicoInput = {
    create?: XOR<semilleroCreateWithoutPrograma_academicoInput, semilleroUncheckedCreateWithoutPrograma_academicoInput> | semilleroCreateWithoutPrograma_academicoInput[] | semilleroUncheckedCreateWithoutPrograma_academicoInput[]
    connectOrCreate?: semilleroCreateOrConnectWithoutPrograma_academicoInput | semilleroCreateOrConnectWithoutPrograma_academicoInput[]
    createMany?: semilleroCreateManyPrograma_academicoInputEnvelope
    connect?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
  }

  export type usuarioUpdateOneRequiredWithoutPrograma_academicoNestedInput = {
    create?: XOR<usuarioCreateWithoutPrograma_academicoInput, usuarioUncheckedCreateWithoutPrograma_academicoInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutPrograma_academicoInput
    upsert?: usuarioUpsertWithoutPrograma_academicoInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutPrograma_academicoInput, usuarioUpdateWithoutPrograma_academicoInput>, usuarioUncheckedUpdateWithoutPrograma_academicoInput>
  }

  export type semilleroUpdateManyWithoutPrograma_academicoNestedInput = {
    create?: XOR<semilleroCreateWithoutPrograma_academicoInput, semilleroUncheckedCreateWithoutPrograma_academicoInput> | semilleroCreateWithoutPrograma_academicoInput[] | semilleroUncheckedCreateWithoutPrograma_academicoInput[]
    connectOrCreate?: semilleroCreateOrConnectWithoutPrograma_academicoInput | semilleroCreateOrConnectWithoutPrograma_academicoInput[]
    upsert?: semilleroUpsertWithWhereUniqueWithoutPrograma_academicoInput | semilleroUpsertWithWhereUniqueWithoutPrograma_academicoInput[]
    createMany?: semilleroCreateManyPrograma_academicoInputEnvelope
    set?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
    disconnect?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
    delete?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
    connect?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
    update?: semilleroUpdateWithWhereUniqueWithoutPrograma_academicoInput | semilleroUpdateWithWhereUniqueWithoutPrograma_academicoInput[]
    updateMany?: semilleroUpdateManyWithWhereWithoutPrograma_academicoInput | semilleroUpdateManyWithWhereWithoutPrograma_academicoInput[]
    deleteMany?: semilleroScalarWhereInput | semilleroScalarWhereInput[]
  }

  export type semilleroUncheckedUpdateManyWithoutPrograma_academicoNestedInput = {
    create?: XOR<semilleroCreateWithoutPrograma_academicoInput, semilleroUncheckedCreateWithoutPrograma_academicoInput> | semilleroCreateWithoutPrograma_academicoInput[] | semilleroUncheckedCreateWithoutPrograma_academicoInput[]
    connectOrCreate?: semilleroCreateOrConnectWithoutPrograma_academicoInput | semilleroCreateOrConnectWithoutPrograma_academicoInput[]
    upsert?: semilleroUpsertWithWhereUniqueWithoutPrograma_academicoInput | semilleroUpsertWithWhereUniqueWithoutPrograma_academicoInput[]
    createMany?: semilleroCreateManyPrograma_academicoInputEnvelope
    set?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
    disconnect?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
    delete?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
    connect?: semilleroWhereUniqueInput | semilleroWhereUniqueInput[]
    update?: semilleroUpdateWithWhereUniqueWithoutPrograma_academicoInput | semilleroUpdateWithWhereUniqueWithoutPrograma_academicoInput[]
    updateMany?: semilleroUpdateManyWithWhereWithoutPrograma_academicoInput | semilleroUpdateManyWithWhereWithoutPrograma_academicoInput[]
    deleteMany?: semilleroScalarWhereInput | semilleroScalarWhereInput[]
  }

  export type actividadCreateNestedManyWithoutSemilleroInput = {
    create?: XOR<actividadCreateWithoutSemilleroInput, actividadUncheckedCreateWithoutSemilleroInput> | actividadCreateWithoutSemilleroInput[] | actividadUncheckedCreateWithoutSemilleroInput[]
    connectOrCreate?: actividadCreateOrConnectWithoutSemilleroInput | actividadCreateOrConnectWithoutSemilleroInput[]
    createMany?: actividadCreateManySemilleroInputEnvelope
    connect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
  }

  export type programa_academicoCreateNestedOneWithoutSemilleroInput = {
    create?: XOR<programa_academicoCreateWithoutSemilleroInput, programa_academicoUncheckedCreateWithoutSemilleroInput>
    connectOrCreate?: programa_academicoCreateOrConnectWithoutSemilleroInput
    connect?: programa_academicoWhereUniqueInput
  }

  export type usuarioCreateNestedOneWithoutSemilleroInput = {
    create?: XOR<usuarioCreateWithoutSemilleroInput, usuarioUncheckedCreateWithoutSemilleroInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSemilleroInput
    connect?: usuarioWhereUniqueInput
  }

  export type actividadUncheckedCreateNestedManyWithoutSemilleroInput = {
    create?: XOR<actividadCreateWithoutSemilleroInput, actividadUncheckedCreateWithoutSemilleroInput> | actividadCreateWithoutSemilleroInput[] | actividadUncheckedCreateWithoutSemilleroInput[]
    connectOrCreate?: actividadCreateOrConnectWithoutSemilleroInput | actividadCreateOrConnectWithoutSemilleroInput[]
    createMany?: actividadCreateManySemilleroInputEnvelope
    connect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
  }

  export type actividadUpdateManyWithoutSemilleroNestedInput = {
    create?: XOR<actividadCreateWithoutSemilleroInput, actividadUncheckedCreateWithoutSemilleroInput> | actividadCreateWithoutSemilleroInput[] | actividadUncheckedCreateWithoutSemilleroInput[]
    connectOrCreate?: actividadCreateOrConnectWithoutSemilleroInput | actividadCreateOrConnectWithoutSemilleroInput[]
    upsert?: actividadUpsertWithWhereUniqueWithoutSemilleroInput | actividadUpsertWithWhereUniqueWithoutSemilleroInput[]
    createMany?: actividadCreateManySemilleroInputEnvelope
    set?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    disconnect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    delete?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    connect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    update?: actividadUpdateWithWhereUniqueWithoutSemilleroInput | actividadUpdateWithWhereUniqueWithoutSemilleroInput[]
    updateMany?: actividadUpdateManyWithWhereWithoutSemilleroInput | actividadUpdateManyWithWhereWithoutSemilleroInput[]
    deleteMany?: actividadScalarWhereInput | actividadScalarWhereInput[]
  }

  export type programa_academicoUpdateOneRequiredWithoutSemilleroNestedInput = {
    create?: XOR<programa_academicoCreateWithoutSemilleroInput, programa_academicoUncheckedCreateWithoutSemilleroInput>
    connectOrCreate?: programa_academicoCreateOrConnectWithoutSemilleroInput
    upsert?: programa_academicoUpsertWithoutSemilleroInput
    connect?: programa_academicoWhereUniqueInput
    update?: XOR<XOR<programa_academicoUpdateToOneWithWhereWithoutSemilleroInput, programa_academicoUpdateWithoutSemilleroInput>, programa_academicoUncheckedUpdateWithoutSemilleroInput>
  }

  export type usuarioUpdateOneRequiredWithoutSemilleroNestedInput = {
    create?: XOR<usuarioCreateWithoutSemilleroInput, usuarioUncheckedCreateWithoutSemilleroInput>
    connectOrCreate?: usuarioCreateOrConnectWithoutSemilleroInput
    upsert?: usuarioUpsertWithoutSemilleroInput
    connect?: usuarioWhereUniqueInput
    update?: XOR<XOR<usuarioUpdateToOneWithWhereWithoutSemilleroInput, usuarioUpdateWithoutSemilleroInput>, usuarioUncheckedUpdateWithoutSemilleroInput>
  }

  export type actividadUncheckedUpdateManyWithoutSemilleroNestedInput = {
    create?: XOR<actividadCreateWithoutSemilleroInput, actividadUncheckedCreateWithoutSemilleroInput> | actividadCreateWithoutSemilleroInput[] | actividadUncheckedCreateWithoutSemilleroInput[]
    connectOrCreate?: actividadCreateOrConnectWithoutSemilleroInput | actividadCreateOrConnectWithoutSemilleroInput[]
    upsert?: actividadUpsertWithWhereUniqueWithoutSemilleroInput | actividadUpsertWithWhereUniqueWithoutSemilleroInput[]
    createMany?: actividadCreateManySemilleroInputEnvelope
    set?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    disconnect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    delete?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    connect?: actividadWhereUniqueInput | actividadWhereUniqueInput[]
    update?: actividadUpdateWithWhereUniqueWithoutSemilleroInput | actividadUpdateWithWhereUniqueWithoutSemilleroInput[]
    updateMany?: actividadUpdateManyWithWhereWithoutSemilleroInput | actividadUpdateManyWithWhereWithoutSemilleroInput[]
    deleteMany?: actividadScalarWhereInput | actividadScalarWhereInput[]
  }

  export type estudiante_actividadCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<estudiante_actividadCreateWithoutUsuarioInput, estudiante_actividadUncheckedCreateWithoutUsuarioInput> | estudiante_actividadCreateWithoutUsuarioInput[] | estudiante_actividadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: estudiante_actividadCreateOrConnectWithoutUsuarioInput | estudiante_actividadCreateOrConnectWithoutUsuarioInput[]
    createMany?: estudiante_actividadCreateManyUsuarioInputEnvelope
    connect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
  }

  export type programa_academicoCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<programa_academicoCreateWithoutUsuarioInput, programa_academicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: programa_academicoCreateOrConnectWithoutUsuarioInput
    connect?: programa_academicoWhereUniqueInput
  }

  export type semilleroCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<semilleroCreateWithoutUsuarioInput, semilleroUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: semilleroCreateOrConnectWithoutUsuarioInput
    connect?: semilleroWhereUniqueInput
  }

  export type estudiante_actividadUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<estudiante_actividadCreateWithoutUsuarioInput, estudiante_actividadUncheckedCreateWithoutUsuarioInput> | estudiante_actividadCreateWithoutUsuarioInput[] | estudiante_actividadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: estudiante_actividadCreateOrConnectWithoutUsuarioInput | estudiante_actividadCreateOrConnectWithoutUsuarioInput[]
    createMany?: estudiante_actividadCreateManyUsuarioInputEnvelope
    connect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
  }

  export type programa_academicoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<programa_academicoCreateWithoutUsuarioInput, programa_academicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: programa_academicoCreateOrConnectWithoutUsuarioInput
    connect?: programa_academicoWhereUniqueInput
  }

  export type semilleroUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<semilleroCreateWithoutUsuarioInput, semilleroUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: semilleroCreateOrConnectWithoutUsuarioInput
    connect?: semilleroWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type estudiante_actividadUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<estudiante_actividadCreateWithoutUsuarioInput, estudiante_actividadUncheckedCreateWithoutUsuarioInput> | estudiante_actividadCreateWithoutUsuarioInput[] | estudiante_actividadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: estudiante_actividadCreateOrConnectWithoutUsuarioInput | estudiante_actividadCreateOrConnectWithoutUsuarioInput[]
    upsert?: estudiante_actividadUpsertWithWhereUniqueWithoutUsuarioInput | estudiante_actividadUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: estudiante_actividadCreateManyUsuarioInputEnvelope
    set?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    disconnect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    delete?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    connect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    update?: estudiante_actividadUpdateWithWhereUniqueWithoutUsuarioInput | estudiante_actividadUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: estudiante_actividadUpdateManyWithWhereWithoutUsuarioInput | estudiante_actividadUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: estudiante_actividadScalarWhereInput | estudiante_actividadScalarWhereInput[]
  }

  export type programa_academicoUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<programa_academicoCreateWithoutUsuarioInput, programa_academicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: programa_academicoCreateOrConnectWithoutUsuarioInput
    upsert?: programa_academicoUpsertWithoutUsuarioInput
    disconnect?: programa_academicoWhereInput | boolean
    delete?: programa_academicoWhereInput | boolean
    connect?: programa_academicoWhereUniqueInput
    update?: XOR<XOR<programa_academicoUpdateToOneWithWhereWithoutUsuarioInput, programa_academicoUpdateWithoutUsuarioInput>, programa_academicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type semilleroUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<semilleroCreateWithoutUsuarioInput, semilleroUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: semilleroCreateOrConnectWithoutUsuarioInput
    upsert?: semilleroUpsertWithoutUsuarioInput
    disconnect?: semilleroWhereInput | boolean
    delete?: semilleroWhereInput | boolean
    connect?: semilleroWhereUniqueInput
    update?: XOR<XOR<semilleroUpdateToOneWithWhereWithoutUsuarioInput, semilleroUpdateWithoutUsuarioInput>, semilleroUncheckedUpdateWithoutUsuarioInput>
  }

  export type estudiante_actividadUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<estudiante_actividadCreateWithoutUsuarioInput, estudiante_actividadUncheckedCreateWithoutUsuarioInput> | estudiante_actividadCreateWithoutUsuarioInput[] | estudiante_actividadUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: estudiante_actividadCreateOrConnectWithoutUsuarioInput | estudiante_actividadCreateOrConnectWithoutUsuarioInput[]
    upsert?: estudiante_actividadUpsertWithWhereUniqueWithoutUsuarioInput | estudiante_actividadUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: estudiante_actividadCreateManyUsuarioInputEnvelope
    set?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    disconnect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    delete?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    connect?: estudiante_actividadWhereUniqueInput | estudiante_actividadWhereUniqueInput[]
    update?: estudiante_actividadUpdateWithWhereUniqueWithoutUsuarioInput | estudiante_actividadUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: estudiante_actividadUpdateManyWithWhereWithoutUsuarioInput | estudiante_actividadUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: estudiante_actividadScalarWhereInput | estudiante_actividadScalarWhereInput[]
  }

  export type programa_academicoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<programa_academicoCreateWithoutUsuarioInput, programa_academicoUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: programa_academicoCreateOrConnectWithoutUsuarioInput
    upsert?: programa_academicoUpsertWithoutUsuarioInput
    disconnect?: programa_academicoWhereInput | boolean
    delete?: programa_academicoWhereInput | boolean
    connect?: programa_academicoWhereUniqueInput
    update?: XOR<XOR<programa_academicoUpdateToOneWithWhereWithoutUsuarioInput, programa_academicoUpdateWithoutUsuarioInput>, programa_academicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type semilleroUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<semilleroCreateWithoutUsuarioInput, semilleroUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: semilleroCreateOrConnectWithoutUsuarioInput
    upsert?: semilleroUpsertWithoutUsuarioInput
    disconnect?: semilleroWhereInput | boolean
    delete?: semilleroWhereInput | boolean
    connect?: semilleroWhereUniqueInput
    update?: XOR<XOR<semilleroUpdateToOneWithWhereWithoutUsuarioInput, semilleroUpdateWithoutUsuarioInput>, semilleroUncheckedUpdateWithoutUsuarioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type semilleroCreateWithoutActividadInput = {
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    programa_academico: programa_academicoCreateNestedOneWithoutSemilleroInput
    usuario: usuarioCreateNestedOneWithoutSemilleroInput
  }

  export type semilleroUncheckedCreateWithoutActividadInput = {
    id?: number
    id_prog_acad: number
    id_docente: number
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
  }

  export type semilleroCreateOrConnectWithoutActividadInput = {
    where: semilleroWhereUniqueInput
    create: XOR<semilleroCreateWithoutActividadInput, semilleroUncheckedCreateWithoutActividadInput>
  }

  export type estudiante_actividadCreateWithoutActividadInput = {
    estado: number
    usuario: usuarioCreateNestedOneWithoutEstudiante_actividadInput
  }

  export type estudiante_actividadUncheckedCreateWithoutActividadInput = {
    id?: number
    id_estudiante: number
    estado: number
  }

  export type estudiante_actividadCreateOrConnectWithoutActividadInput = {
    where: estudiante_actividadWhereUniqueInput
    create: XOR<estudiante_actividadCreateWithoutActividadInput, estudiante_actividadUncheckedCreateWithoutActividadInput>
  }

  export type estudiante_actividadCreateManyActividadInputEnvelope = {
    data: estudiante_actividadCreateManyActividadInput | estudiante_actividadCreateManyActividadInput[]
    skipDuplicates?: boolean
  }

  export type semilleroUpsertWithoutActividadInput = {
    update: XOR<semilleroUpdateWithoutActividadInput, semilleroUncheckedUpdateWithoutActividadInput>
    create: XOR<semilleroCreateWithoutActividadInput, semilleroUncheckedCreateWithoutActividadInput>
    where?: semilleroWhereInput
  }

  export type semilleroUpdateToOneWithWhereWithoutActividadInput = {
    where?: semilleroWhereInput
    data: XOR<semilleroUpdateWithoutActividadInput, semilleroUncheckedUpdateWithoutActividadInput>
  }

  export type semilleroUpdateWithoutActividadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programa_academico?: programa_academicoUpdateOneRequiredWithoutSemilleroNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutSemilleroNestedInput
  }

  export type semilleroUncheckedUpdateWithoutActividadInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_prog_acad?: IntFieldUpdateOperationsInput | number
    id_docente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estudiante_actividadUpsertWithWhereUniqueWithoutActividadInput = {
    where: estudiante_actividadWhereUniqueInput
    update: XOR<estudiante_actividadUpdateWithoutActividadInput, estudiante_actividadUncheckedUpdateWithoutActividadInput>
    create: XOR<estudiante_actividadCreateWithoutActividadInput, estudiante_actividadUncheckedCreateWithoutActividadInput>
  }

  export type estudiante_actividadUpdateWithWhereUniqueWithoutActividadInput = {
    where: estudiante_actividadWhereUniqueInput
    data: XOR<estudiante_actividadUpdateWithoutActividadInput, estudiante_actividadUncheckedUpdateWithoutActividadInput>
  }

  export type estudiante_actividadUpdateManyWithWhereWithoutActividadInput = {
    where: estudiante_actividadScalarWhereInput
    data: XOR<estudiante_actividadUpdateManyMutationInput, estudiante_actividadUncheckedUpdateManyWithoutActividadInput>
  }

  export type estudiante_actividadScalarWhereInput = {
    AND?: estudiante_actividadScalarWhereInput | estudiante_actividadScalarWhereInput[]
    OR?: estudiante_actividadScalarWhereInput[]
    NOT?: estudiante_actividadScalarWhereInput | estudiante_actividadScalarWhereInput[]
    id?: IntFilter<"estudiante_actividad"> | number
    id_actividad?: IntFilter<"estudiante_actividad"> | number
    id_estudiante?: IntFilter<"estudiante_actividad"> | number
    estado?: IntFilter<"estudiante_actividad"> | number
  }

  export type actividadCreateWithoutEstudiante_actividadInput = {
    nombre: string
    descripcion?: string | null
    url?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    semillero: semilleroCreateNestedOneWithoutActividadInput
  }

  export type actividadUncheckedCreateWithoutEstudiante_actividadInput = {
    id?: number
    id_semillero: number
    nombre: string
    descripcion?: string | null
    url?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
  }

  export type actividadCreateOrConnectWithoutEstudiante_actividadInput = {
    where: actividadWhereUniqueInput
    create: XOR<actividadCreateWithoutEstudiante_actividadInput, actividadUncheckedCreateWithoutEstudiante_actividadInput>
  }

  export type usuarioCreateWithoutEstudiante_actividadInput = {
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo?: string | null
    token_reseteo_expiracion?: number | null
    creado_en: Date | string
    eliminado_en?: Date | string | null
    programa_academico?: programa_academicoCreateNestedOneWithoutUsuarioInput
    semillero?: semilleroCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutEstudiante_actividadInput = {
    id?: number
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo?: string | null
    token_reseteo_expiracion?: number | null
    creado_en: Date | string
    eliminado_en?: Date | string | null
    programa_academico?: programa_academicoUncheckedCreateNestedOneWithoutUsuarioInput
    semillero?: semilleroUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutEstudiante_actividadInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutEstudiante_actividadInput, usuarioUncheckedCreateWithoutEstudiante_actividadInput>
  }

  export type actividadUpsertWithoutEstudiante_actividadInput = {
    update: XOR<actividadUpdateWithoutEstudiante_actividadInput, actividadUncheckedUpdateWithoutEstudiante_actividadInput>
    create: XOR<actividadCreateWithoutEstudiante_actividadInput, actividadUncheckedCreateWithoutEstudiante_actividadInput>
    where?: actividadWhereInput
  }

  export type actividadUpdateToOneWithWhereWithoutEstudiante_actividadInput = {
    where?: actividadWhereInput
    data: XOR<actividadUpdateWithoutEstudiante_actividadInput, actividadUncheckedUpdateWithoutEstudiante_actividadInput>
  }

  export type actividadUpdateWithoutEstudiante_actividadInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    semillero?: semilleroUpdateOneRequiredWithoutActividadNestedInput
  }

  export type actividadUncheckedUpdateWithoutEstudiante_actividadInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_semillero?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuarioUpsertWithoutEstudiante_actividadInput = {
    update: XOR<usuarioUpdateWithoutEstudiante_actividadInput, usuarioUncheckedUpdateWithoutEstudiante_actividadInput>
    create: XOR<usuarioCreateWithoutEstudiante_actividadInput, usuarioUncheckedCreateWithoutEstudiante_actividadInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutEstudiante_actividadInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutEstudiante_actividadInput, usuarioUncheckedUpdateWithoutEstudiante_actividadInput>
  }

  export type usuarioUpdateWithoutEstudiante_actividadInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programa_academico?: programa_academicoUpdateOneWithoutUsuarioNestedInput
    semillero?: semilleroUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutEstudiante_actividadInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    programa_academico?: programa_academicoUncheckedUpdateOneWithoutUsuarioNestedInput
    semillero?: semilleroUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioCreateWithoutPrograma_academicoInput = {
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo?: string | null
    token_reseteo_expiracion?: number | null
    creado_en: Date | string
    eliminado_en?: Date | string | null
    estudiante_actividad?: estudiante_actividadCreateNestedManyWithoutUsuarioInput
    semillero?: semilleroCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutPrograma_academicoInput = {
    id?: number
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo?: string | null
    token_reseteo_expiracion?: number | null
    creado_en: Date | string
    eliminado_en?: Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedCreateNestedManyWithoutUsuarioInput
    semillero?: semilleroUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutPrograma_academicoInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutPrograma_academicoInput, usuarioUncheckedCreateWithoutPrograma_academicoInput>
  }

  export type semilleroCreateWithoutPrograma_academicoInput = {
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    actividad?: actividadCreateNestedManyWithoutSemilleroInput
    usuario: usuarioCreateNestedOneWithoutSemilleroInput
  }

  export type semilleroUncheckedCreateWithoutPrograma_academicoInput = {
    id?: number
    id_docente: number
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    actividad?: actividadUncheckedCreateNestedManyWithoutSemilleroInput
  }

  export type semilleroCreateOrConnectWithoutPrograma_academicoInput = {
    where: semilleroWhereUniqueInput
    create: XOR<semilleroCreateWithoutPrograma_academicoInput, semilleroUncheckedCreateWithoutPrograma_academicoInput>
  }

  export type semilleroCreateManyPrograma_academicoInputEnvelope = {
    data: semilleroCreateManyPrograma_academicoInput | semilleroCreateManyPrograma_academicoInput[]
    skipDuplicates?: boolean
  }

  export type usuarioUpsertWithoutPrograma_academicoInput = {
    update: XOR<usuarioUpdateWithoutPrograma_academicoInput, usuarioUncheckedUpdateWithoutPrograma_academicoInput>
    create: XOR<usuarioCreateWithoutPrograma_academicoInput, usuarioUncheckedCreateWithoutPrograma_academicoInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutPrograma_academicoInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutPrograma_academicoInput, usuarioUncheckedUpdateWithoutPrograma_academicoInput>
  }

  export type usuarioUpdateWithoutPrograma_academicoInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante_actividad?: estudiante_actividadUpdateManyWithoutUsuarioNestedInput
    semillero?: semilleroUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutPrograma_academicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedUpdateManyWithoutUsuarioNestedInput
    semillero?: semilleroUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type semilleroUpsertWithWhereUniqueWithoutPrograma_academicoInput = {
    where: semilleroWhereUniqueInput
    update: XOR<semilleroUpdateWithoutPrograma_academicoInput, semilleroUncheckedUpdateWithoutPrograma_academicoInput>
    create: XOR<semilleroCreateWithoutPrograma_academicoInput, semilleroUncheckedCreateWithoutPrograma_academicoInput>
  }

  export type semilleroUpdateWithWhereUniqueWithoutPrograma_academicoInput = {
    where: semilleroWhereUniqueInput
    data: XOR<semilleroUpdateWithoutPrograma_academicoInput, semilleroUncheckedUpdateWithoutPrograma_academicoInput>
  }

  export type semilleroUpdateManyWithWhereWithoutPrograma_academicoInput = {
    where: semilleroScalarWhereInput
    data: XOR<semilleroUpdateManyMutationInput, semilleroUncheckedUpdateManyWithoutPrograma_academicoInput>
  }

  export type semilleroScalarWhereInput = {
    AND?: semilleroScalarWhereInput | semilleroScalarWhereInput[]
    OR?: semilleroScalarWhereInput[]
    NOT?: semilleroScalarWhereInput | semilleroScalarWhereInput[]
    id?: IntFilter<"semillero"> | number
    id_prog_acad?: IntFilter<"semillero"> | number
    id_docente?: IntFilter<"semillero"> | number
    nombre?: StringFilter<"semillero"> | string
    descripcion?: StringNullableFilter<"semillero"> | string | null
    cupo?: IntFilter<"semillero"> | number
    fecha_limite_inscripcion?: DateTimeFilter<"semillero"> | Date | string
    fecha_inicio?: DateTimeFilter<"semillero"> | Date | string
    fecha_fin?: DateTimeFilter<"semillero"> | Date | string
    cant_act_aprobatoria?: IntFilter<"semillero"> | number
    estado?: IntFilter<"semillero"> | number
    creado_en?: DateTimeFilter<"semillero"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"semillero"> | Date | string | null
  }

  export type actividadCreateWithoutSemilleroInput = {
    nombre: string
    descripcion?: string | null
    url?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    estudiante_actividad?: estudiante_actividadCreateNestedManyWithoutActividadInput
  }

  export type actividadUncheckedCreateWithoutSemilleroInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    url?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedCreateNestedManyWithoutActividadInput
  }

  export type actividadCreateOrConnectWithoutSemilleroInput = {
    where: actividadWhereUniqueInput
    create: XOR<actividadCreateWithoutSemilleroInput, actividadUncheckedCreateWithoutSemilleroInput>
  }

  export type actividadCreateManySemilleroInputEnvelope = {
    data: actividadCreateManySemilleroInput | actividadCreateManySemilleroInput[]
    skipDuplicates?: boolean
  }

  export type programa_academicoCreateWithoutSemilleroInput = {
    nombre: string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    usuario: usuarioCreateNestedOneWithoutPrograma_academicoInput
  }

  export type programa_academicoUncheckedCreateWithoutSemilleroInput = {
    id?: number
    id_director: number
    nombre: string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
  }

  export type programa_academicoCreateOrConnectWithoutSemilleroInput = {
    where: programa_academicoWhereUniqueInput
    create: XOR<programa_academicoCreateWithoutSemilleroInput, programa_academicoUncheckedCreateWithoutSemilleroInput>
  }

  export type usuarioCreateWithoutSemilleroInput = {
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo?: string | null
    token_reseteo_expiracion?: number | null
    creado_en: Date | string
    eliminado_en?: Date | string | null
    estudiante_actividad?: estudiante_actividadCreateNestedManyWithoutUsuarioInput
    programa_academico?: programa_academicoCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioUncheckedCreateWithoutSemilleroInput = {
    id?: number
    id_rol: number
    nombre_completo: string
    correo_personal: string
    correo_institucional: string
    telefono: string
    contrasena: string
    estado: number
    token_reseteo?: string | null
    token_reseteo_expiracion?: number | null
    creado_en: Date | string
    eliminado_en?: Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedCreateNestedManyWithoutUsuarioInput
    programa_academico?: programa_academicoUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type usuarioCreateOrConnectWithoutSemilleroInput = {
    where: usuarioWhereUniqueInput
    create: XOR<usuarioCreateWithoutSemilleroInput, usuarioUncheckedCreateWithoutSemilleroInput>
  }

  export type actividadUpsertWithWhereUniqueWithoutSemilleroInput = {
    where: actividadWhereUniqueInput
    update: XOR<actividadUpdateWithoutSemilleroInput, actividadUncheckedUpdateWithoutSemilleroInput>
    create: XOR<actividadCreateWithoutSemilleroInput, actividadUncheckedCreateWithoutSemilleroInput>
  }

  export type actividadUpdateWithWhereUniqueWithoutSemilleroInput = {
    where: actividadWhereUniqueInput
    data: XOR<actividadUpdateWithoutSemilleroInput, actividadUncheckedUpdateWithoutSemilleroInput>
  }

  export type actividadUpdateManyWithWhereWithoutSemilleroInput = {
    where: actividadScalarWhereInput
    data: XOR<actividadUpdateManyMutationInput, actividadUncheckedUpdateManyWithoutSemilleroInput>
  }

  export type actividadScalarWhereInput = {
    AND?: actividadScalarWhereInput | actividadScalarWhereInput[]
    OR?: actividadScalarWhereInput[]
    NOT?: actividadScalarWhereInput | actividadScalarWhereInput[]
    id?: IntFilter<"actividad"> | number
    id_semillero?: IntFilter<"actividad"> | number
    nombre?: StringFilter<"actividad"> | string
    descripcion?: StringNullableFilter<"actividad"> | string | null
    url?: StringNullableFilter<"actividad"> | string | null
    fecha_inicio?: DateTimeFilter<"actividad"> | Date | string
    fecha_fin?: DateTimeFilter<"actividad"> | Date | string
    estado?: IntFilter<"actividad"> | number
    creado_en?: DateTimeFilter<"actividad"> | Date | string
    eliminado_en?: DateTimeNullableFilter<"actividad"> | Date | string | null
  }

  export type programa_academicoUpsertWithoutSemilleroInput = {
    update: XOR<programa_academicoUpdateWithoutSemilleroInput, programa_academicoUncheckedUpdateWithoutSemilleroInput>
    create: XOR<programa_academicoCreateWithoutSemilleroInput, programa_academicoUncheckedCreateWithoutSemilleroInput>
    where?: programa_academicoWhereInput
  }

  export type programa_academicoUpdateToOneWithWhereWithoutSemilleroInput = {
    where?: programa_academicoWhereInput
    data: XOR<programa_academicoUpdateWithoutSemilleroInput, programa_academicoUncheckedUpdateWithoutSemilleroInput>
  }

  export type programa_academicoUpdateWithoutSemilleroInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usuario?: usuarioUpdateOneRequiredWithoutPrograma_academicoNestedInput
  }

  export type programa_academicoUncheckedUpdateWithoutSemilleroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_director?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usuarioUpsertWithoutSemilleroInput = {
    update: XOR<usuarioUpdateWithoutSemilleroInput, usuarioUncheckedUpdateWithoutSemilleroInput>
    create: XOR<usuarioCreateWithoutSemilleroInput, usuarioUncheckedCreateWithoutSemilleroInput>
    where?: usuarioWhereInput
  }

  export type usuarioUpdateToOneWithWhereWithoutSemilleroInput = {
    where?: usuarioWhereInput
    data: XOR<usuarioUpdateWithoutSemilleroInput, usuarioUncheckedUpdateWithoutSemilleroInput>
  }

  export type usuarioUpdateWithoutSemilleroInput = {
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante_actividad?: estudiante_actividadUpdateManyWithoutUsuarioNestedInput
    programa_academico?: programa_academicoUpdateOneWithoutUsuarioNestedInput
  }

  export type usuarioUncheckedUpdateWithoutSemilleroInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_rol?: IntFieldUpdateOperationsInput | number
    nombre_completo?: StringFieldUpdateOperationsInput | string
    correo_personal?: StringFieldUpdateOperationsInput | string
    correo_institucional?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    token_reseteo?: NullableStringFieldUpdateOperationsInput | string | null
    token_reseteo_expiracion?: NullableIntFieldUpdateOperationsInput | number | null
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedUpdateManyWithoutUsuarioNestedInput
    programa_academico?: programa_academicoUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type estudiante_actividadCreateWithoutUsuarioInput = {
    estado: number
    actividad: actividadCreateNestedOneWithoutEstudiante_actividadInput
  }

  export type estudiante_actividadUncheckedCreateWithoutUsuarioInput = {
    id?: number
    id_actividad: number
    estado: number
  }

  export type estudiante_actividadCreateOrConnectWithoutUsuarioInput = {
    where: estudiante_actividadWhereUniqueInput
    create: XOR<estudiante_actividadCreateWithoutUsuarioInput, estudiante_actividadUncheckedCreateWithoutUsuarioInput>
  }

  export type estudiante_actividadCreateManyUsuarioInputEnvelope = {
    data: estudiante_actividadCreateManyUsuarioInput | estudiante_actividadCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type programa_academicoCreateWithoutUsuarioInput = {
    nombre: string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    semillero?: semilleroCreateNestedManyWithoutPrograma_academicoInput
  }

  export type programa_academicoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    semillero?: semilleroUncheckedCreateNestedManyWithoutPrograma_academicoInput
  }

  export type programa_academicoCreateOrConnectWithoutUsuarioInput = {
    where: programa_academicoWhereUniqueInput
    create: XOR<programa_academicoCreateWithoutUsuarioInput, programa_academicoUncheckedCreateWithoutUsuarioInput>
  }

  export type semilleroCreateWithoutUsuarioInput = {
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    actividad?: actividadCreateNestedManyWithoutSemilleroInput
    programa_academico: programa_academicoCreateNestedOneWithoutSemilleroInput
  }

  export type semilleroUncheckedCreateWithoutUsuarioInput = {
    id?: number
    id_prog_acad: number
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
    actividad?: actividadUncheckedCreateNestedManyWithoutSemilleroInput
  }

  export type semilleroCreateOrConnectWithoutUsuarioInput = {
    where: semilleroWhereUniqueInput
    create: XOR<semilleroCreateWithoutUsuarioInput, semilleroUncheckedCreateWithoutUsuarioInput>
  }

  export type estudiante_actividadUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: estudiante_actividadWhereUniqueInput
    update: XOR<estudiante_actividadUpdateWithoutUsuarioInput, estudiante_actividadUncheckedUpdateWithoutUsuarioInput>
    create: XOR<estudiante_actividadCreateWithoutUsuarioInput, estudiante_actividadUncheckedCreateWithoutUsuarioInput>
  }

  export type estudiante_actividadUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: estudiante_actividadWhereUniqueInput
    data: XOR<estudiante_actividadUpdateWithoutUsuarioInput, estudiante_actividadUncheckedUpdateWithoutUsuarioInput>
  }

  export type estudiante_actividadUpdateManyWithWhereWithoutUsuarioInput = {
    where: estudiante_actividadScalarWhereInput
    data: XOR<estudiante_actividadUpdateManyMutationInput, estudiante_actividadUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type programa_academicoUpsertWithoutUsuarioInput = {
    update: XOR<programa_academicoUpdateWithoutUsuarioInput, programa_academicoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<programa_academicoCreateWithoutUsuarioInput, programa_academicoUncheckedCreateWithoutUsuarioInput>
    where?: programa_academicoWhereInput
  }

  export type programa_academicoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: programa_academicoWhereInput
    data: XOR<programa_academicoUpdateWithoutUsuarioInput, programa_academicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type programa_academicoUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    semillero?: semilleroUpdateManyWithoutPrograma_academicoNestedInput
  }

  export type programa_academicoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    semillero?: semilleroUncheckedUpdateManyWithoutPrograma_academicoNestedInput
  }

  export type semilleroUpsertWithoutUsuarioInput = {
    update: XOR<semilleroUpdateWithoutUsuarioInput, semilleroUncheckedUpdateWithoutUsuarioInput>
    create: XOR<semilleroCreateWithoutUsuarioInput, semilleroUncheckedCreateWithoutUsuarioInput>
    where?: semilleroWhereInput
  }

  export type semilleroUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: semilleroWhereInput
    data: XOR<semilleroUpdateWithoutUsuarioInput, semilleroUncheckedUpdateWithoutUsuarioInput>
  }

  export type semilleroUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actividad?: actividadUpdateManyWithoutSemilleroNestedInput
    programa_academico?: programa_academicoUpdateOneRequiredWithoutSemilleroNestedInput
  }

  export type semilleroUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_prog_acad?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actividad?: actividadUncheckedUpdateManyWithoutSemilleroNestedInput
  }

  export type estudiante_actividadCreateManyActividadInput = {
    id?: number
    id_estudiante: number
    estado: number
  }

  export type estudiante_actividadUpdateWithoutActividadInput = {
    estado?: IntFieldUpdateOperationsInput | number
    usuario?: usuarioUpdateOneRequiredWithoutEstudiante_actividadNestedInput
  }

  export type estudiante_actividadUncheckedUpdateWithoutActividadInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type estudiante_actividadUncheckedUpdateManyWithoutActividadInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_estudiante?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type semilleroCreateManyPrograma_academicoInput = {
    id?: number
    id_docente: number
    nombre: string
    descripcion?: string | null
    cupo: number
    fecha_limite_inscripcion: Date | string
    fecha_inicio: Date | string
    fecha_fin: Date | string
    cant_act_aprobatoria: number
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
  }

  export type semilleroUpdateWithoutPrograma_academicoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actividad?: actividadUpdateManyWithoutSemilleroNestedInput
    usuario?: usuarioUpdateOneRequiredWithoutSemilleroNestedInput
  }

  export type semilleroUncheckedUpdateWithoutPrograma_academicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_docente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actividad?: actividadUncheckedUpdateManyWithoutSemilleroNestedInput
  }

  export type semilleroUncheckedUpdateManyWithoutPrograma_academicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_docente?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    cupo?: IntFieldUpdateOperationsInput | number
    fecha_limite_inscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    cant_act_aprobatoria?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type actividadCreateManySemilleroInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    url?: string | null
    fecha_inicio: Date | string
    fecha_fin: Date | string
    estado: number
    creado_en: Date | string
    eliminado_en?: Date | string | null
  }

  export type actividadUpdateWithoutSemilleroInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante_actividad?: estudiante_actividadUpdateManyWithoutActividadNestedInput
  }

  export type actividadUncheckedUpdateWithoutSemilleroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estudiante_actividad?: estudiante_actividadUncheckedUpdateManyWithoutActividadNestedInput
  }

  export type actividadUncheckedUpdateManyWithoutSemilleroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    creado_en?: DateTimeFieldUpdateOperationsInput | Date | string
    eliminado_en?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type estudiante_actividadCreateManyUsuarioInput = {
    id?: number
    id_actividad: number
    estado: number
  }

  export type estudiante_actividadUpdateWithoutUsuarioInput = {
    estado?: IntFieldUpdateOperationsInput | number
    actividad?: actividadUpdateOneRequiredWithoutEstudiante_actividadNestedInput
  }

  export type estudiante_actividadUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type estudiante_actividadUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_actividad?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}