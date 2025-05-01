
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
 * Model accounts
 * 
 */
export type accounts = $Result.DefaultSelection<Prisma.$accountsPayload>
/**
 * Model archive_installation
 * 
 */
export type archive_installation = $Result.DefaultSelection<Prisma.$archive_installationPayload>
/**
 * Model assets
 * 
 */
export type assets = $Result.DefaultSelection<Prisma.$assetsPayload>
/**
 * Model company
 * 
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>
/**
 * Model customer
 * 
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>
/**
 * Model device
 * 
 */
export type device = $Result.DefaultSelection<Prisma.$devicePayload>
/**
 * Model groups
 * 
 */
export type groups = $Result.DefaultSelection<Prisma.$groupsPayload>
/**
 * Model logs
 * 
 */
export type logs = $Result.DefaultSelection<Prisma.$logsPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model report_assets
 * 
 */
export type report_assets = $Result.DefaultSelection<Prisma.$report_assetsPayload>
/**
 * Model report_cash
 * 
 */
export type report_cash = $Result.DefaultSelection<Prisma.$report_cashPayload>
/**
 * Model transactions
 * 
 */
export type transactions = $Result.DefaultSelection<Prisma.$transactionsPayload>
/**
 * Model transfers
 * 
 */
export type transfers = $Result.DefaultSelection<Prisma.$transfersPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const user_role: {
  ADMIN: 'ADMIN',
  TECHNICIAN: 'TECHNICIAN',
  FINANCE: 'FINANCE'
};

export type user_role = (typeof user_role)[keyof typeof user_role]


export const transactions_type: {
  DEBIT: 'DEBIT',
  CREDIT: 'CREDIT'
};

export type transactions_type = (typeof transactions_type)[keyof typeof transactions_type]

}

export type user_role = $Enums.user_role

export const user_role: typeof $Enums.user_role

export type transactions_type = $Enums.transactions_type

export const transactions_type: typeof $Enums.transactions_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Accounts
 * const accounts = await prisma.accounts.findMany()
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
   * // Fetch zero or more Accounts
   * const accounts = await prisma.accounts.findMany()
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
   * `prisma.accounts`: Exposes CRUD operations for the **accounts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.accounts.findMany()
    * ```
    */
  get accounts(): Prisma.accountsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.archive_installation`: Exposes CRUD operations for the **archive_installation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archive_installations
    * const archive_installations = await prisma.archive_installation.findMany()
    * ```
    */
  get archive_installation(): Prisma.archive_installationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assets`: Exposes CRUD operations for the **assets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assets
    * const assets = await prisma.assets.findMany()
    * ```
    */
  get assets(): Prisma.assetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.companyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.customerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.deviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groups`: Exposes CRUD operations for the **groups** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.groups.findMany()
    * ```
    */
  get groups(): Prisma.groupsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logs`: Exposes CRUD operations for the **logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Logs
    * const logs = await prisma.logs.findMany()
    * ```
    */
  get logs(): Prisma.logsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report_assets`: Exposes CRUD operations for the **report_assets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Report_assets
    * const report_assets = await prisma.report_assets.findMany()
    * ```
    */
  get report_assets(): Prisma.report_assetsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report_cash`: Exposes CRUD operations for the **report_cash** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Report_cashes
    * const report_cashes = await prisma.report_cash.findMany()
    * ```
    */
  get report_cash(): Prisma.report_cashDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactions`: Exposes CRUD operations for the **transactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transactions.findMany()
    * ```
    */
  get transactions(): Prisma.transactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transfers`: Exposes CRUD operations for the **transfers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transfers
    * const transfers = await prisma.transfers.findMany()
    * ```
    */
  get transfers(): Prisma.transfersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    accounts: 'accounts',
    archive_installation: 'archive_installation',
    assets: 'assets',
    company: 'company',
    customer: 'customer',
    device: 'device',
    groups: 'groups',
    logs: 'logs',
    products: 'products',
    report_assets: 'report_assets',
    report_cash: 'report_cash',
    transactions: 'transactions',
    transfers: 'transfers',
    users: 'users'
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
      modelProps: "accounts" | "archive_installation" | "assets" | "company" | "customer" | "device" | "groups" | "logs" | "products" | "report_assets" | "report_cash" | "transactions" | "transfers" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      accounts: {
        payload: Prisma.$accountsPayload<ExtArgs>
        fields: Prisma.accountsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findFirst: {
            args: Prisma.accountsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          findMany: {
            args: Prisma.accountsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>[]
          }
          create: {
            args: Prisma.accountsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          createMany: {
            args: Prisma.accountsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.accountsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          update: {
            args: Prisma.accountsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          deleteMany: {
            args: Prisma.accountsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.accountsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountsPayload>
          }
          aggregate: {
            args: Prisma.AccountsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccounts>
          }
          groupBy: {
            args: Prisma.accountsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountsGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountsCountArgs<ExtArgs>
            result: $Utils.Optional<AccountsCountAggregateOutputType> | number
          }
        }
      }
      archive_installation: {
        payload: Prisma.$archive_installationPayload<ExtArgs>
        fields: Prisma.archive_installationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.archive_installationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archive_installationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.archive_installationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archive_installationPayload>
          }
          findFirst: {
            args: Prisma.archive_installationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archive_installationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.archive_installationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archive_installationPayload>
          }
          findMany: {
            args: Prisma.archive_installationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archive_installationPayload>[]
          }
          create: {
            args: Prisma.archive_installationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archive_installationPayload>
          }
          createMany: {
            args: Prisma.archive_installationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.archive_installationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archive_installationPayload>
          }
          update: {
            args: Prisma.archive_installationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archive_installationPayload>
          }
          deleteMany: {
            args: Prisma.archive_installationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.archive_installationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.archive_installationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$archive_installationPayload>
          }
          aggregate: {
            args: Prisma.Archive_installationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArchive_installation>
          }
          groupBy: {
            args: Prisma.archive_installationGroupByArgs<ExtArgs>
            result: $Utils.Optional<Archive_installationGroupByOutputType>[]
          }
          count: {
            args: Prisma.archive_installationCountArgs<ExtArgs>
            result: $Utils.Optional<Archive_installationCountAggregateOutputType> | number
          }
        }
      }
      assets: {
        payload: Prisma.$assetsPayload<ExtArgs>
        fields: Prisma.assetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.assetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.assetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetsPayload>
          }
          findFirst: {
            args: Prisma.assetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.assetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetsPayload>
          }
          findMany: {
            args: Prisma.assetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetsPayload>[]
          }
          create: {
            args: Prisma.assetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetsPayload>
          }
          createMany: {
            args: Prisma.assetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.assetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetsPayload>
          }
          update: {
            args: Prisma.assetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetsPayload>
          }
          deleteMany: {
            args: Prisma.assetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.assetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.assetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$assetsPayload>
          }
          aggregate: {
            args: Prisma.AssetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssets>
          }
          groupBy: {
            args: Prisma.assetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.assetsCountArgs<ExtArgs>
            result: $Utils.Optional<AssetsCountAggregateOutputType> | number
          }
        }
      }
      company: {
        payload: Prisma.$companyPayload<ExtArgs>
        fields: Prisma.companyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[]
          }
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$companyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.companyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>
        fields: Prisma.customerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[]
          }
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.customerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      device: {
        payload: Prisma.$devicePayload<ExtArgs>
        fields: Prisma.deviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.deviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.deviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          findFirst: {
            args: Prisma.deviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.deviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          findMany: {
            args: Prisma.deviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>[]
          }
          create: {
            args: Prisma.deviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          createMany: {
            args: Prisma.deviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.deviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          update: {
            args: Prisma.deviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          deleteMany: {
            args: Prisma.deviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.deviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.deviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$devicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.deviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.deviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      groups: {
        payload: Prisma.$groupsPayload<ExtArgs>
        fields: Prisma.groupsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.groupsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.groupsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findFirst: {
            args: Prisma.groupsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.groupsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          findMany: {
            args: Prisma.groupsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>[]
          }
          create: {
            args: Prisma.groupsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          createMany: {
            args: Prisma.groupsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.groupsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          update: {
            args: Prisma.groupsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          deleteMany: {
            args: Prisma.groupsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.groupsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.groupsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$groupsPayload>
          }
          aggregate: {
            args: Prisma.GroupsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroups>
          }
          groupBy: {
            args: Prisma.groupsGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupsGroupByOutputType>[]
          }
          count: {
            args: Prisma.groupsCountArgs<ExtArgs>
            result: $Utils.Optional<GroupsCountAggregateOutputType> | number
          }
        }
      }
      logs: {
        payload: Prisma.$logsPayload<ExtArgs>
        fields: Prisma.logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findFirst: {
            args: Prisma.logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          findMany: {
            args: Prisma.logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>[]
          }
          create: {
            args: Prisma.logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          createMany: {
            args: Prisma.logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          update: {
            args: Prisma.logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          deleteMany: {
            args: Prisma.logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$logsPayload>
          }
          aggregate: {
            args: Prisma.LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogs>
          }
          groupBy: {
            args: Prisma.logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.logsCountArgs<ExtArgs>
            result: $Utils.Optional<LogsCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      report_assets: {
        payload: Prisma.$report_assetsPayload<ExtArgs>
        fields: Prisma.report_assetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.report_assetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_assetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.report_assetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_assetsPayload>
          }
          findFirst: {
            args: Prisma.report_assetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_assetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.report_assetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_assetsPayload>
          }
          findMany: {
            args: Prisma.report_assetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_assetsPayload>[]
          }
          create: {
            args: Prisma.report_assetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_assetsPayload>
          }
          createMany: {
            args: Prisma.report_assetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.report_assetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_assetsPayload>
          }
          update: {
            args: Prisma.report_assetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_assetsPayload>
          }
          deleteMany: {
            args: Prisma.report_assetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.report_assetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.report_assetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_assetsPayload>
          }
          aggregate: {
            args: Prisma.Report_assetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport_assets>
          }
          groupBy: {
            args: Prisma.report_assetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Report_assetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.report_assetsCountArgs<ExtArgs>
            result: $Utils.Optional<Report_assetsCountAggregateOutputType> | number
          }
        }
      }
      report_cash: {
        payload: Prisma.$report_cashPayload<ExtArgs>
        fields: Prisma.report_cashFieldRefs
        operations: {
          findUnique: {
            args: Prisma.report_cashFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_cashPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.report_cashFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_cashPayload>
          }
          findFirst: {
            args: Prisma.report_cashFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_cashPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.report_cashFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_cashPayload>
          }
          findMany: {
            args: Prisma.report_cashFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_cashPayload>[]
          }
          create: {
            args: Prisma.report_cashCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_cashPayload>
          }
          createMany: {
            args: Prisma.report_cashCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.report_cashDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_cashPayload>
          }
          update: {
            args: Prisma.report_cashUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_cashPayload>
          }
          deleteMany: {
            args: Prisma.report_cashDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.report_cashUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.report_cashUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_cashPayload>
          }
          aggregate: {
            args: Prisma.Report_cashAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport_cash>
          }
          groupBy: {
            args: Prisma.report_cashGroupByArgs<ExtArgs>
            result: $Utils.Optional<Report_cashGroupByOutputType>[]
          }
          count: {
            args: Prisma.report_cashCountArgs<ExtArgs>
            result: $Utils.Optional<Report_cashCountAggregateOutputType> | number
          }
        }
      }
      transactions: {
        payload: Prisma.$transactionsPayload<ExtArgs>
        fields: Prisma.transactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findFirst: {
            args: Prisma.transactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          findMany: {
            args: Prisma.transactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>[]
          }
          create: {
            args: Prisma.transactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          createMany: {
            args: Prisma.transactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          update: {
            args: Prisma.transactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          deleteMany: {
            args: Prisma.transactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionsPayload>
          }
          aggregate: {
            args: Prisma.TransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactions>
          }
          groupBy: {
            args: Prisma.transactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionsCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionsCountAggregateOutputType> | number
          }
        }
      }
      transfers: {
        payload: Prisma.$transfersPayload<ExtArgs>
        fields: Prisma.transfersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transfersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transfersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          findFirst: {
            args: Prisma.transfersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transfersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          findMany: {
            args: Prisma.transfersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>[]
          }
          create: {
            args: Prisma.transfersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          createMany: {
            args: Prisma.transfersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.transfersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          update: {
            args: Prisma.transfersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          deleteMany: {
            args: Prisma.transfersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transfersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.transfersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transfersPayload>
          }
          aggregate: {
            args: Prisma.TransfersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransfers>
          }
          groupBy: {
            args: Prisma.transfersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransfersGroupByOutputType>[]
          }
          count: {
            args: Prisma.transfersCountArgs<ExtArgs>
            result: $Utils.Optional<TransfersCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    accounts?: accountsOmit
    archive_installation?: archive_installationOmit
    assets?: assetsOmit
    company?: companyOmit
    customer?: customerOmit
    device?: deviceOmit
    groups?: groupsOmit
    logs?: logsOmit
    products?: productsOmit
    report_assets?: report_assetsOmit
    report_cash?: report_cashOmit
    transactions?: transactionsOmit
    transfers?: transfersOmit
    users?: usersOmit
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
   * Count Type AccountsCountOutputType
   */

  export type AccountsCountOutputType = {
    transfers_transfers_from_account_idToaccounts: number
    transfers_transfers_to_account_idToaccounts: number
  }

  export type AccountsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transfers_transfers_from_account_idToaccounts?: boolean | AccountsCountOutputTypeCountTransfers_transfers_from_account_idToaccountsArgs
    transfers_transfers_to_account_idToaccounts?: boolean | AccountsCountOutputTypeCountTransfers_transfers_to_account_idToaccountsArgs
  }

  // Custom InputTypes
  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountsCountOutputType
     */
    select?: AccountsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransfers_transfers_from_account_idToaccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transfersWhereInput
  }

  /**
   * AccountsCountOutputType without action
   */
  export type AccountsCountOutputTypeCountTransfers_transfers_to_account_idToaccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transfersWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    customer: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CompanyCountOutputTypeCountCustomerArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    archive_installation: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archive_installation?: boolean | CustomerCountOutputTypeCountArchive_installationArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountArchive_installationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archive_installationWhereInput
  }


  /**
   * Count Type GroupsCountOutputType
   */

  export type GroupsCountOutputType = {
    customer: number
  }

  export type GroupsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | GroupsCountOutputTypeCountCustomerArgs
  }

  // Custom InputTypes
  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupsCountOutputType
     */
    select?: GroupsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupsCountOutputType without action
   */
  export type GroupsCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    log: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | UsersCountOutputTypeCountLogArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model accounts
   */

  export type AggregateAccounts = {
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  export type AccountsMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to aggregate.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountsMaxAggregateInputType
  }

  export type GetAccountsAggregateType<T extends AccountsAggregateArgs> = {
        [P in keyof T & keyof AggregateAccounts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccounts[P]>
      : GetScalarType<T[P], AggregateAccounts[P]>
  }




  export type accountsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountsWhereInput
    orderBy?: accountsOrderByWithAggregationInput | accountsOrderByWithAggregationInput[]
    by: AccountsScalarFieldEnum[] | AccountsScalarFieldEnum
    having?: accountsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountsCountAggregateInputType | true
    _min?: AccountsMinAggregateInputType
    _max?: AccountsMaxAggregateInputType
  }

  export type AccountsGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AccountsCountAggregateOutputType | null
    _min: AccountsMinAggregateOutputType | null
    _max: AccountsMaxAggregateOutputType | null
  }

  type GetAccountsGroupByPayload<T extends accountsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountsGroupByOutputType[P]>
            : GetScalarType<T[P], AccountsGroupByOutputType[P]>
        }
      >
    >


  export type accountsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transfers_transfers_from_account_idToaccounts?: boolean | accounts$transfers_transfers_from_account_idToaccountsArgs<ExtArgs>
    transfers_transfers_to_account_idToaccounts?: boolean | accounts$transfers_transfers_to_account_idToaccountsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accounts"]>



  export type accountsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type accountsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["accounts"]>
  export type accountsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transfers_transfers_from_account_idToaccounts?: boolean | accounts$transfers_transfers_from_account_idToaccountsArgs<ExtArgs>
    transfers_transfers_to_account_idToaccounts?: boolean | accounts$transfers_transfers_to_account_idToaccountsArgs<ExtArgs>
    _count?: boolean | AccountsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $accountsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "accounts"
    objects: {
      transfers_transfers_from_account_idToaccounts: Prisma.$transfersPayload<ExtArgs>[]
      transfers_transfers_to_account_idToaccounts: Prisma.$transfersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["accounts"]>
    composites: {}
  }

  type accountsGetPayload<S extends boolean | null | undefined | accountsDefaultArgs> = $Result.GetResult<Prisma.$accountsPayload, S>

  type accountsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountsCountAggregateInputType | true
    }

  export interface accountsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['accounts'], meta: { name: 'accounts' } }
    /**
     * Find zero or one Accounts that matches the filter.
     * @param {accountsFindUniqueArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountsFindUniqueArgs>(args: SelectSubset<T, accountsFindUniqueArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accounts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountsFindUniqueOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountsFindUniqueOrThrowArgs>(args: SelectSubset<T, accountsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountsFindFirstArgs>(args?: SelectSubset<T, accountsFindFirstArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accounts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindFirstOrThrowArgs} args - Arguments to find a Accounts
     * @example
     * // Get one Accounts
     * const accounts = await prisma.accounts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountsFindFirstOrThrowArgs>(args?: SelectSubset<T, accountsFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.accounts.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.accounts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountsWithIdOnly = await prisma.accounts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountsFindManyArgs>(args?: SelectSubset<T, accountsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accounts.
     * @param {accountsCreateArgs} args - Arguments to create a Accounts.
     * @example
     * // Create one Accounts
     * const Accounts = await prisma.accounts.create({
     *   data: {
     *     // ... data to create a Accounts
     *   }
     * })
     * 
     */
    create<T extends accountsCreateArgs>(args: SelectSubset<T, accountsCreateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountsCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const accounts = await prisma.accounts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountsCreateManyArgs>(args?: SelectSubset<T, accountsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Accounts.
     * @param {accountsDeleteArgs} args - Arguments to delete one Accounts.
     * @example
     * // Delete one Accounts
     * const Accounts = await prisma.accounts.delete({
     *   where: {
     *     // ... filter to delete one Accounts
     *   }
     * })
     * 
     */
    delete<T extends accountsDeleteArgs>(args: SelectSubset<T, accountsDeleteArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accounts.
     * @param {accountsUpdateArgs} args - Arguments to update one Accounts.
     * @example
     * // Update one Accounts
     * const accounts = await prisma.accounts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountsUpdateArgs>(args: SelectSubset<T, accountsUpdateArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountsDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.accounts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountsDeleteManyArgs>(args?: SelectSubset<T, accountsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const accounts = await prisma.accounts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountsUpdateManyArgs>(args: SelectSubset<T, accountsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Accounts.
     * @param {accountsUpsertArgs} args - Arguments to update or create a Accounts.
     * @example
     * // Update or create a Accounts
     * const accounts = await prisma.accounts.upsert({
     *   create: {
     *     // ... data to create a Accounts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accounts we want to update
     *   }
     * })
     */
    upsert<T extends accountsUpsertArgs>(args: SelectSubset<T, accountsUpsertArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.accounts.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountsCountArgs>(
      args?: Subset<T, accountsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountsAggregateArgs>(args: Subset<T, AccountsAggregateArgs>): Prisma.PrismaPromise<GetAccountsAggregateType<T>>

    /**
     * Group by Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountsGroupByArgs} args - Group by arguments.
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
      T extends accountsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountsGroupByArgs['orderBy'] }
        : { orderBy?: accountsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accountsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the accounts model
   */
  readonly fields: accountsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for accounts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transfers_transfers_from_account_idToaccounts<T extends accounts$transfers_transfers_from_account_idToaccountsArgs<ExtArgs> = {}>(args?: Subset<T, accounts$transfers_transfers_from_account_idToaccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transfers_transfers_to_account_idToaccounts<T extends accounts$transfers_transfers_to_account_idToaccountsArgs<ExtArgs> = {}>(args?: Subset<T, accounts$transfers_transfers_to_account_idToaccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the accounts model
   */
  interface accountsFieldRefs {
    readonly id: FieldRef<"accounts", 'String'>
    readonly name: FieldRef<"accounts", 'String'>
    readonly createdAt: FieldRef<"accounts", 'DateTime'>
    readonly updatedAt: FieldRef<"accounts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * accounts findUnique
   */
  export type accountsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findUniqueOrThrow
   */
  export type accountsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts findFirst
   */
  export type accountsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findFirstOrThrow
   */
  export type accountsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts findMany
   */
  export type accountsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountsOrderByWithRelationInput | accountsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountsScalarFieldEnum | AccountsScalarFieldEnum[]
  }

  /**
   * accounts create
   */
  export type accountsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to create a accounts.
     */
    data: XOR<accountsCreateInput, accountsUncheckedCreateInput>
  }

  /**
   * accounts createMany
   */
  export type accountsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountsCreateManyInput | accountsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * accounts update
   */
  export type accountsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The data needed to update a accounts.
     */
    data: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
    /**
     * Choose, which accounts to update.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts updateMany
   */
  export type accountsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountsUpdateManyMutationInput, accountsUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * accounts upsert
   */
  export type accountsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * The filter to search for the accounts to update in case it exists.
     */
    where: accountsWhereUniqueInput
    /**
     * In case the accounts found by the `where` argument doesn't exist, create a new accounts with this data.
     */
    create: XOR<accountsCreateInput, accountsUncheckedCreateInput>
    /**
     * In case the accounts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountsUpdateInput, accountsUncheckedUpdateInput>
  }

  /**
   * accounts delete
   */
  export type accountsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
    /**
     * Filter which accounts to delete.
     */
    where: accountsWhereUniqueInput
  }

  /**
   * accounts deleteMany
   */
  export type accountsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountsWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * accounts.transfers_transfers_from_account_idToaccounts
   */
  export type accounts$transfers_transfers_from_account_idToaccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    where?: transfersWhereInput
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    cursor?: transfersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransfersScalarFieldEnum | TransfersScalarFieldEnum[]
  }

  /**
   * accounts.transfers_transfers_to_account_idToaccounts
   */
  export type accounts$transfers_transfers_to_account_idToaccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    where?: transfersWhereInput
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    cursor?: transfersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransfersScalarFieldEnum | TransfersScalarFieldEnum[]
  }

  /**
   * accounts without action
   */
  export type accountsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the accounts
     */
    select?: accountsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the accounts
     */
    omit?: accountsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountsInclude<ExtArgs> | null
  }


  /**
   * Model archive_installation
   */

  export type AggregateArchive_installation = {
    _count: Archive_installationCountAggregateOutputType | null
    _avg: Archive_installationAvgAggregateOutputType | null
    _sum: Archive_installationSumAggregateOutputType | null
    _min: Archive_installationMinAggregateOutputType | null
    _max: Archive_installationMaxAggregateOutputType | null
  }

  export type Archive_installationAvgAggregateOutputType = {
    price: number | null
  }

  export type Archive_installationSumAggregateOutputType = {
    price: number | null
  }

  export type Archive_installationMinAggregateOutputType = {
    id: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    customer_id: string | null
    names: string | null
  }

  export type Archive_installationMaxAggregateOutputType = {
    id: string | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    customer_id: string | null
    names: string | null
  }

  export type Archive_installationCountAggregateOutputType = {
    id: number
    price: number
    createdAt: number
    updatedAt: number
    customer_id: number
    names: number
    _all: number
  }


  export type Archive_installationAvgAggregateInputType = {
    price?: true
  }

  export type Archive_installationSumAggregateInputType = {
    price?: true
  }

  export type Archive_installationMinAggregateInputType = {
    id?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    customer_id?: true
    names?: true
  }

  export type Archive_installationMaxAggregateInputType = {
    id?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    customer_id?: true
    names?: true
  }

  export type Archive_installationCountAggregateInputType = {
    id?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    customer_id?: true
    names?: true
    _all?: true
  }

  export type Archive_installationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archive_installation to aggregate.
     */
    where?: archive_installationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archive_installations to fetch.
     */
    orderBy?: archive_installationOrderByWithRelationInput | archive_installationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: archive_installationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archive_installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archive_installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned archive_installations
    **/
    _count?: true | Archive_installationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Archive_installationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Archive_installationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Archive_installationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Archive_installationMaxAggregateInputType
  }

  export type GetArchive_installationAggregateType<T extends Archive_installationAggregateArgs> = {
        [P in keyof T & keyof AggregateArchive_installation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchive_installation[P]>
      : GetScalarType<T[P], AggregateArchive_installation[P]>
  }




  export type archive_installationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: archive_installationWhereInput
    orderBy?: archive_installationOrderByWithAggregationInput | archive_installationOrderByWithAggregationInput[]
    by: Archive_installationScalarFieldEnum[] | Archive_installationScalarFieldEnum
    having?: archive_installationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Archive_installationCountAggregateInputType | true
    _avg?: Archive_installationAvgAggregateInputType
    _sum?: Archive_installationSumAggregateInputType
    _min?: Archive_installationMinAggregateInputType
    _max?: Archive_installationMaxAggregateInputType
  }

  export type Archive_installationGroupByOutputType = {
    id: string
    price: number
    createdAt: Date
    updatedAt: Date
    customer_id: string | null
    names: string
    _count: Archive_installationCountAggregateOutputType | null
    _avg: Archive_installationAvgAggregateOutputType | null
    _sum: Archive_installationSumAggregateOutputType | null
    _min: Archive_installationMinAggregateOutputType | null
    _max: Archive_installationMaxAggregateOutputType | null
  }

  type GetArchive_installationGroupByPayload<T extends archive_installationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Archive_installationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Archive_installationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Archive_installationGroupByOutputType[P]>
            : GetScalarType<T[P], Archive_installationGroupByOutputType[P]>
        }
      >
    >


  export type archive_installationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer_id?: boolean
    names?: boolean
    customer?: boolean | archive_installation$customerArgs<ExtArgs>
  }, ExtArgs["result"]["archive_installation"]>



  export type archive_installationSelectScalar = {
    id?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer_id?: boolean
    names?: boolean
  }

  export type archive_installationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "createdAt" | "updatedAt" | "customer_id" | "names", ExtArgs["result"]["archive_installation"]>
  export type archive_installationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | archive_installation$customerArgs<ExtArgs>
  }

  export type $archive_installationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "archive_installation"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      price: number
      createdAt: Date
      updatedAt: Date
      customer_id: string | null
      names: string
    }, ExtArgs["result"]["archive_installation"]>
    composites: {}
  }

  type archive_installationGetPayload<S extends boolean | null | undefined | archive_installationDefaultArgs> = $Result.GetResult<Prisma.$archive_installationPayload, S>

  type archive_installationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<archive_installationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Archive_installationCountAggregateInputType | true
    }

  export interface archive_installationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['archive_installation'], meta: { name: 'archive_installation' } }
    /**
     * Find zero or one Archive_installation that matches the filter.
     * @param {archive_installationFindUniqueArgs} args - Arguments to find a Archive_installation
     * @example
     * // Get one Archive_installation
     * const archive_installation = await prisma.archive_installation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends archive_installationFindUniqueArgs>(args: SelectSubset<T, archive_installationFindUniqueArgs<ExtArgs>>): Prisma__archive_installationClient<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Archive_installation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {archive_installationFindUniqueOrThrowArgs} args - Arguments to find a Archive_installation
     * @example
     * // Get one Archive_installation
     * const archive_installation = await prisma.archive_installation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends archive_installationFindUniqueOrThrowArgs>(args: SelectSubset<T, archive_installationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__archive_installationClient<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archive_installation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archive_installationFindFirstArgs} args - Arguments to find a Archive_installation
     * @example
     * // Get one Archive_installation
     * const archive_installation = await prisma.archive_installation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends archive_installationFindFirstArgs>(args?: SelectSubset<T, archive_installationFindFirstArgs<ExtArgs>>): Prisma__archive_installationClient<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Archive_installation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archive_installationFindFirstOrThrowArgs} args - Arguments to find a Archive_installation
     * @example
     * // Get one Archive_installation
     * const archive_installation = await prisma.archive_installation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends archive_installationFindFirstOrThrowArgs>(args?: SelectSubset<T, archive_installationFindFirstOrThrowArgs<ExtArgs>>): Prisma__archive_installationClient<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Archive_installations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archive_installationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archive_installations
     * const archive_installations = await prisma.archive_installation.findMany()
     * 
     * // Get first 10 Archive_installations
     * const archive_installations = await prisma.archive_installation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const archive_installationWithIdOnly = await prisma.archive_installation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends archive_installationFindManyArgs>(args?: SelectSubset<T, archive_installationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Archive_installation.
     * @param {archive_installationCreateArgs} args - Arguments to create a Archive_installation.
     * @example
     * // Create one Archive_installation
     * const Archive_installation = await prisma.archive_installation.create({
     *   data: {
     *     // ... data to create a Archive_installation
     *   }
     * })
     * 
     */
    create<T extends archive_installationCreateArgs>(args: SelectSubset<T, archive_installationCreateArgs<ExtArgs>>): Prisma__archive_installationClient<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Archive_installations.
     * @param {archive_installationCreateManyArgs} args - Arguments to create many Archive_installations.
     * @example
     * // Create many Archive_installations
     * const archive_installation = await prisma.archive_installation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends archive_installationCreateManyArgs>(args?: SelectSubset<T, archive_installationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Archive_installation.
     * @param {archive_installationDeleteArgs} args - Arguments to delete one Archive_installation.
     * @example
     * // Delete one Archive_installation
     * const Archive_installation = await prisma.archive_installation.delete({
     *   where: {
     *     // ... filter to delete one Archive_installation
     *   }
     * })
     * 
     */
    delete<T extends archive_installationDeleteArgs>(args: SelectSubset<T, archive_installationDeleteArgs<ExtArgs>>): Prisma__archive_installationClient<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Archive_installation.
     * @param {archive_installationUpdateArgs} args - Arguments to update one Archive_installation.
     * @example
     * // Update one Archive_installation
     * const archive_installation = await prisma.archive_installation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends archive_installationUpdateArgs>(args: SelectSubset<T, archive_installationUpdateArgs<ExtArgs>>): Prisma__archive_installationClient<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Archive_installations.
     * @param {archive_installationDeleteManyArgs} args - Arguments to filter Archive_installations to delete.
     * @example
     * // Delete a few Archive_installations
     * const { count } = await prisma.archive_installation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends archive_installationDeleteManyArgs>(args?: SelectSubset<T, archive_installationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archive_installations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archive_installationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archive_installations
     * const archive_installation = await prisma.archive_installation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends archive_installationUpdateManyArgs>(args: SelectSubset<T, archive_installationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Archive_installation.
     * @param {archive_installationUpsertArgs} args - Arguments to update or create a Archive_installation.
     * @example
     * // Update or create a Archive_installation
     * const archive_installation = await prisma.archive_installation.upsert({
     *   create: {
     *     // ... data to create a Archive_installation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archive_installation we want to update
     *   }
     * })
     */
    upsert<T extends archive_installationUpsertArgs>(args: SelectSubset<T, archive_installationUpsertArgs<ExtArgs>>): Prisma__archive_installationClient<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Archive_installations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archive_installationCountArgs} args - Arguments to filter Archive_installations to count.
     * @example
     * // Count the number of Archive_installations
     * const count = await prisma.archive_installation.count({
     *   where: {
     *     // ... the filter for the Archive_installations we want to count
     *   }
     * })
    **/
    count<T extends archive_installationCountArgs>(
      args?: Subset<T, archive_installationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Archive_installationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archive_installation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Archive_installationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Archive_installationAggregateArgs>(args: Subset<T, Archive_installationAggregateArgs>): Prisma.PrismaPromise<GetArchive_installationAggregateType<T>>

    /**
     * Group by Archive_installation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {archive_installationGroupByArgs} args - Group by arguments.
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
      T extends archive_installationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: archive_installationGroupByArgs['orderBy'] }
        : { orderBy?: archive_installationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, archive_installationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchive_installationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the archive_installation model
   */
  readonly fields: archive_installationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for archive_installation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__archive_installationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends archive_installation$customerArgs<ExtArgs> = {}>(args?: Subset<T, archive_installation$customerArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the archive_installation model
   */
  interface archive_installationFieldRefs {
    readonly id: FieldRef<"archive_installation", 'String'>
    readonly price: FieldRef<"archive_installation", 'Float'>
    readonly createdAt: FieldRef<"archive_installation", 'DateTime'>
    readonly updatedAt: FieldRef<"archive_installation", 'DateTime'>
    readonly customer_id: FieldRef<"archive_installation", 'String'>
    readonly names: FieldRef<"archive_installation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * archive_installation findUnique
   */
  export type archive_installationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    /**
     * Filter, which archive_installation to fetch.
     */
    where: archive_installationWhereUniqueInput
  }

  /**
   * archive_installation findUniqueOrThrow
   */
  export type archive_installationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    /**
     * Filter, which archive_installation to fetch.
     */
    where: archive_installationWhereUniqueInput
  }

  /**
   * archive_installation findFirst
   */
  export type archive_installationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    /**
     * Filter, which archive_installation to fetch.
     */
    where?: archive_installationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archive_installations to fetch.
     */
    orderBy?: archive_installationOrderByWithRelationInput | archive_installationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archive_installations.
     */
    cursor?: archive_installationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archive_installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archive_installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archive_installations.
     */
    distinct?: Archive_installationScalarFieldEnum | Archive_installationScalarFieldEnum[]
  }

  /**
   * archive_installation findFirstOrThrow
   */
  export type archive_installationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    /**
     * Filter, which archive_installation to fetch.
     */
    where?: archive_installationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archive_installations to fetch.
     */
    orderBy?: archive_installationOrderByWithRelationInput | archive_installationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for archive_installations.
     */
    cursor?: archive_installationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archive_installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archive_installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of archive_installations.
     */
    distinct?: Archive_installationScalarFieldEnum | Archive_installationScalarFieldEnum[]
  }

  /**
   * archive_installation findMany
   */
  export type archive_installationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    /**
     * Filter, which archive_installations to fetch.
     */
    where?: archive_installationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of archive_installations to fetch.
     */
    orderBy?: archive_installationOrderByWithRelationInput | archive_installationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing archive_installations.
     */
    cursor?: archive_installationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` archive_installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` archive_installations.
     */
    skip?: number
    distinct?: Archive_installationScalarFieldEnum | Archive_installationScalarFieldEnum[]
  }

  /**
   * archive_installation create
   */
  export type archive_installationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    /**
     * The data needed to create a archive_installation.
     */
    data: XOR<archive_installationCreateInput, archive_installationUncheckedCreateInput>
  }

  /**
   * archive_installation createMany
   */
  export type archive_installationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many archive_installations.
     */
    data: archive_installationCreateManyInput | archive_installationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * archive_installation update
   */
  export type archive_installationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    /**
     * The data needed to update a archive_installation.
     */
    data: XOR<archive_installationUpdateInput, archive_installationUncheckedUpdateInput>
    /**
     * Choose, which archive_installation to update.
     */
    where: archive_installationWhereUniqueInput
  }

  /**
   * archive_installation updateMany
   */
  export type archive_installationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update archive_installations.
     */
    data: XOR<archive_installationUpdateManyMutationInput, archive_installationUncheckedUpdateManyInput>
    /**
     * Filter which archive_installations to update
     */
    where?: archive_installationWhereInput
    /**
     * Limit how many archive_installations to update.
     */
    limit?: number
  }

  /**
   * archive_installation upsert
   */
  export type archive_installationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    /**
     * The filter to search for the archive_installation to update in case it exists.
     */
    where: archive_installationWhereUniqueInput
    /**
     * In case the archive_installation found by the `where` argument doesn't exist, create a new archive_installation with this data.
     */
    create: XOR<archive_installationCreateInput, archive_installationUncheckedCreateInput>
    /**
     * In case the archive_installation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<archive_installationUpdateInput, archive_installationUncheckedUpdateInput>
  }

  /**
   * archive_installation delete
   */
  export type archive_installationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    /**
     * Filter which archive_installation to delete.
     */
    where: archive_installationWhereUniqueInput
  }

  /**
   * archive_installation deleteMany
   */
  export type archive_installationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which archive_installations to delete
     */
    where?: archive_installationWhereInput
    /**
     * Limit how many archive_installations to delete.
     */
    limit?: number
  }

  /**
   * archive_installation.customer
   */
  export type archive_installation$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    where?: customerWhereInput
  }

  /**
   * archive_installation without action
   */
  export type archive_installationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
  }


  /**
   * Model assets
   */

  export type AggregateAssets = {
    _count: AssetsCountAggregateOutputType | null
    _avg: AssetsAvgAggregateOutputType | null
    _sum: AssetsSumAggregateOutputType | null
    _min: AssetsMinAggregateOutputType | null
    _max: AssetsMaxAggregateOutputType | null
  }

  export type AssetsAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type AssetsSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type AssetsMinAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssetsCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    price: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssetsAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type AssetsSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type AssetsMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetsMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssetsCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assets to aggregate.
     */
    where?: assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assets to fetch.
     */
    orderBy?: assetsOrderByWithRelationInput | assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned assets
    **/
    _count?: true | AssetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssetsMaxAggregateInputType
  }

  export type GetAssetsAggregateType<T extends AssetsAggregateArgs> = {
        [P in keyof T & keyof AggregateAssets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssets[P]>
      : GetScalarType<T[P], AggregateAssets[P]>
  }




  export type assetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: assetsWhereInput
    orderBy?: assetsOrderByWithAggregationInput | assetsOrderByWithAggregationInput[]
    by: AssetsScalarFieldEnum[] | AssetsScalarFieldEnum
    having?: assetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssetsCountAggregateInputType | true
    _avg?: AssetsAvgAggregateInputType
    _sum?: AssetsSumAggregateInputType
    _min?: AssetsMinAggregateInputType
    _max?: AssetsMaxAggregateInputType
  }

  export type AssetsGroupByOutputType = {
    id: string
    name: string
    quantity: number
    price: number
    createdAt: Date
    updatedAt: Date
    _count: AssetsCountAggregateOutputType | null
    _avg: AssetsAvgAggregateOutputType | null
    _sum: AssetsSumAggregateOutputType | null
    _min: AssetsMinAggregateOutputType | null
    _max: AssetsMaxAggregateOutputType | null
  }

  type GetAssetsGroupByPayload<T extends assetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssetsGroupByOutputType[P]>
            : GetScalarType<T[P], AssetsGroupByOutputType[P]>
        }
      >
    >


  export type assetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    report_assets?: boolean | assets$report_assetsArgs<ExtArgs>
  }, ExtArgs["result"]["assets"]>



  export type assetsSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type assetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "price" | "createdAt" | "updatedAt", ExtArgs["result"]["assets"]>
  export type assetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    report_assets?: boolean | assets$report_assetsArgs<ExtArgs>
  }

  export type $assetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "assets"
    objects: {
      report_assets: Prisma.$report_assetsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      quantity: number
      price: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assets"]>
    composites: {}
  }

  type assetsGetPayload<S extends boolean | null | undefined | assetsDefaultArgs> = $Result.GetResult<Prisma.$assetsPayload, S>

  type assetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<assetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssetsCountAggregateInputType | true
    }

  export interface assetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['assets'], meta: { name: 'assets' } }
    /**
     * Find zero or one Assets that matches the filter.
     * @param {assetsFindUniqueArgs} args - Arguments to find a Assets
     * @example
     * // Get one Assets
     * const assets = await prisma.assets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends assetsFindUniqueArgs>(args: SelectSubset<T, assetsFindUniqueArgs<ExtArgs>>): Prisma__assetsClient<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {assetsFindUniqueOrThrowArgs} args - Arguments to find a Assets
     * @example
     * // Get one Assets
     * const assets = await prisma.assets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends assetsFindUniqueOrThrowArgs>(args: SelectSubset<T, assetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__assetsClient<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetsFindFirstArgs} args - Arguments to find a Assets
     * @example
     * // Get one Assets
     * const assets = await prisma.assets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends assetsFindFirstArgs>(args?: SelectSubset<T, assetsFindFirstArgs<ExtArgs>>): Prisma__assetsClient<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetsFindFirstOrThrowArgs} args - Arguments to find a Assets
     * @example
     * // Get one Assets
     * const assets = await prisma.assets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends assetsFindFirstOrThrowArgs>(args?: SelectSubset<T, assetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__assetsClient<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assets
     * const assets = await prisma.assets.findMany()
     * 
     * // Get first 10 Assets
     * const assets = await prisma.assets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assetsWithIdOnly = await prisma.assets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends assetsFindManyArgs>(args?: SelectSubset<T, assetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assets.
     * @param {assetsCreateArgs} args - Arguments to create a Assets.
     * @example
     * // Create one Assets
     * const Assets = await prisma.assets.create({
     *   data: {
     *     // ... data to create a Assets
     *   }
     * })
     * 
     */
    create<T extends assetsCreateArgs>(args: SelectSubset<T, assetsCreateArgs<ExtArgs>>): Prisma__assetsClient<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assets.
     * @param {assetsCreateManyArgs} args - Arguments to create many Assets.
     * @example
     * // Create many Assets
     * const assets = await prisma.assets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends assetsCreateManyArgs>(args?: SelectSubset<T, assetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Assets.
     * @param {assetsDeleteArgs} args - Arguments to delete one Assets.
     * @example
     * // Delete one Assets
     * const Assets = await prisma.assets.delete({
     *   where: {
     *     // ... filter to delete one Assets
     *   }
     * })
     * 
     */
    delete<T extends assetsDeleteArgs>(args: SelectSubset<T, assetsDeleteArgs<ExtArgs>>): Prisma__assetsClient<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assets.
     * @param {assetsUpdateArgs} args - Arguments to update one Assets.
     * @example
     * // Update one Assets
     * const assets = await prisma.assets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends assetsUpdateArgs>(args: SelectSubset<T, assetsUpdateArgs<ExtArgs>>): Prisma__assetsClient<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assets.
     * @param {assetsDeleteManyArgs} args - Arguments to filter Assets to delete.
     * @example
     * // Delete a few Assets
     * const { count } = await prisma.assets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends assetsDeleteManyArgs>(args?: SelectSubset<T, assetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assets
     * const assets = await prisma.assets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends assetsUpdateManyArgs>(args: SelectSubset<T, assetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assets.
     * @param {assetsUpsertArgs} args - Arguments to update or create a Assets.
     * @example
     * // Update or create a Assets
     * const assets = await prisma.assets.upsert({
     *   create: {
     *     // ... data to create a Assets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assets we want to update
     *   }
     * })
     */
    upsert<T extends assetsUpsertArgs>(args: SelectSubset<T, assetsUpsertArgs<ExtArgs>>): Prisma__assetsClient<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetsCountArgs} args - Arguments to filter Assets to count.
     * @example
     * // Count the number of Assets
     * const count = await prisma.assets.count({
     *   where: {
     *     // ... the filter for the Assets we want to count
     *   }
     * })
    **/
    count<T extends assetsCountArgs>(
      args?: Subset<T, assetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssetsAggregateArgs>(args: Subset<T, AssetsAggregateArgs>): Prisma.PrismaPromise<GetAssetsAggregateType<T>>

    /**
     * Group by Assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {assetsGroupByArgs} args - Group by arguments.
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
      T extends assetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: assetsGroupByArgs['orderBy'] }
        : { orderBy?: assetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, assetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the assets model
   */
  readonly fields: assetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for assets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__assetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    report_assets<T extends assets$report_assetsArgs<ExtArgs> = {}>(args?: Subset<T, assets$report_assetsArgs<ExtArgs>>): Prisma__report_assetsClient<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the assets model
   */
  interface assetsFieldRefs {
    readonly id: FieldRef<"assets", 'String'>
    readonly name: FieldRef<"assets", 'String'>
    readonly quantity: FieldRef<"assets", 'Int'>
    readonly price: FieldRef<"assets", 'Float'>
    readonly createdAt: FieldRef<"assets", 'DateTime'>
    readonly updatedAt: FieldRef<"assets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * assets findUnique
   */
  export type assetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
    /**
     * Filter, which assets to fetch.
     */
    where: assetsWhereUniqueInput
  }

  /**
   * assets findUniqueOrThrow
   */
  export type assetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
    /**
     * Filter, which assets to fetch.
     */
    where: assetsWhereUniqueInput
  }

  /**
   * assets findFirst
   */
  export type assetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
    /**
     * Filter, which assets to fetch.
     */
    where?: assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assets to fetch.
     */
    orderBy?: assetsOrderByWithRelationInput | assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assets.
     */
    cursor?: assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assets.
     */
    distinct?: AssetsScalarFieldEnum | AssetsScalarFieldEnum[]
  }

  /**
   * assets findFirstOrThrow
   */
  export type assetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
    /**
     * Filter, which assets to fetch.
     */
    where?: assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assets to fetch.
     */
    orderBy?: assetsOrderByWithRelationInput | assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for assets.
     */
    cursor?: assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of assets.
     */
    distinct?: AssetsScalarFieldEnum | AssetsScalarFieldEnum[]
  }

  /**
   * assets findMany
   */
  export type assetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
    /**
     * Filter, which assets to fetch.
     */
    where?: assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of assets to fetch.
     */
    orderBy?: assetsOrderByWithRelationInput | assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing assets.
     */
    cursor?: assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` assets.
     */
    skip?: number
    distinct?: AssetsScalarFieldEnum | AssetsScalarFieldEnum[]
  }

  /**
   * assets create
   */
  export type assetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
    /**
     * The data needed to create a assets.
     */
    data: XOR<assetsCreateInput, assetsUncheckedCreateInput>
  }

  /**
   * assets createMany
   */
  export type assetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many assets.
     */
    data: assetsCreateManyInput | assetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * assets update
   */
  export type assetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
    /**
     * The data needed to update a assets.
     */
    data: XOR<assetsUpdateInput, assetsUncheckedUpdateInput>
    /**
     * Choose, which assets to update.
     */
    where: assetsWhereUniqueInput
  }

  /**
   * assets updateMany
   */
  export type assetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update assets.
     */
    data: XOR<assetsUpdateManyMutationInput, assetsUncheckedUpdateManyInput>
    /**
     * Filter which assets to update
     */
    where?: assetsWhereInput
    /**
     * Limit how many assets to update.
     */
    limit?: number
  }

  /**
   * assets upsert
   */
  export type assetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
    /**
     * The filter to search for the assets to update in case it exists.
     */
    where: assetsWhereUniqueInput
    /**
     * In case the assets found by the `where` argument doesn't exist, create a new assets with this data.
     */
    create: XOR<assetsCreateInput, assetsUncheckedCreateInput>
    /**
     * In case the assets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<assetsUpdateInput, assetsUncheckedUpdateInput>
  }

  /**
   * assets delete
   */
  export type assetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
    /**
     * Filter which assets to delete.
     */
    where: assetsWhereUniqueInput
  }

  /**
   * assets deleteMany
   */
  export type assetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which assets to delete
     */
    where?: assetsWhereInput
    /**
     * Limit how many assets to delete.
     */
    limit?: number
  }

  /**
   * assets.report_assets
   */
  export type assets$report_assetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    where?: report_assetsWhereInput
  }

  /**
   * assets without action
   */
  export type assetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the assets
     */
    select?: assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the assets
     */
    omit?: assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: assetsInclude<ExtArgs> | null
  }


  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    email: string | null
    phone: string | null
    logo_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    email: string | null
    phone: string | null
    logo_url: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    url: number
    email: number
    phone: number
    logo_url: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    email?: true
    phone?: true
    logo_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    email?: true
    phone?: true
    logo_url?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    email?: true
    phone?: true
    logo_url?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: companyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    url: string
    email: string
    phone: string
    logo_url: string
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    email?: boolean
    phone?: boolean
    logo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | company$customerArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>



  export type companySelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    email?: boolean
    phone?: boolean
    logo_url?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type companyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "email" | "phone" | "logo_url" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>
  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | company$customerArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "company"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      email: string
      phone: string
      logo_url: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<Prisma.$companyPayload, S>

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<companyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company'], meta: { name: 'company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends companyFindUniqueArgs>(args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs>(args: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends companyFindFirstArgs>(args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs>(args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends companyFindManyArgs>(args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends companyCreateArgs>(args: SelectSubset<T, companyCreateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {companyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends companyCreateManyArgs>(args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends companyDeleteArgs>(args: SelectSubset<T, companyDeleteArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends companyUpdateArgs>(args: SelectSubset<T, companyUpdateArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends companyDeleteManyArgs>(args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends companyUpdateManyArgs>(args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends companyUpsertArgs>(args: SelectSubset<T, companyUpsertArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the company model
   */
  readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends company$customerArgs<ExtArgs> = {}>(args?: Subset<T, company$customerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<"company", 'String'>
    readonly name: FieldRef<"company", 'String'>
    readonly url: FieldRef<"company", 'String'>
    readonly email: FieldRef<"company", 'String'>
    readonly phone: FieldRef<"company", 'String'>
    readonly logo_url: FieldRef<"company", 'String'>
    readonly createdAt: FieldRef<"company", 'DateTime'>
    readonly updatedAt: FieldRef<"company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>
  }

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to update.
     */
    limit?: number
  }

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>
  }

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput
  }

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput
    /**
     * Limit how many companies to delete.
     */
    limit?: number
  }

  /**
   * company.customer
   */
  export type company$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    where?: customerWhereInput
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    cursor?: customerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null
    /**
     * Omit specific fields from the company
     */
    omit?: companyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: companyInclude<ExtArgs> | null
  }


  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    address: string | null
    installation_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    city: string | null
    code_postal: string | null
    company_id: string | null
    country: string | null
    fullname: string | null
    group_id: string | null
    location: string | null
    password: string | null
    state_region: string | null
    surname: string | null
    tag: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    address: string | null
    installation_date: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    city: string | null
    code_postal: string | null
    company_id: string | null
    country: string | null
    fullname: string | null
    group_id: string | null
    location: string | null
    password: string | null
    state_region: string | null
    surname: string | null
    tag: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    address: number
    installation_date: number
    createdAt: number
    updatedAt: number
    city: number
    code_postal: number
    company_id: number
    country: number
    fullname: number
    group_id: number
    location: number
    password: number
    state_region: number
    surname: number
    tag: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    address?: true
    installation_date?: true
    createdAt?: true
    updatedAt?: true
    city?: true
    code_postal?: true
    company_id?: true
    country?: true
    fullname?: true
    group_id?: true
    location?: true
    password?: true
    state_region?: true
    surname?: true
    tag?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    address?: true
    installation_date?: true
    createdAt?: true
    updatedAt?: true
    city?: true
    code_postal?: true
    company_id?: true
    country?: true
    fullname?: true
    group_id?: true
    location?: true
    password?: true
    state_region?: true
    surname?: true
    tag?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    address?: true
    installation_date?: true
    createdAt?: true
    updatedAt?: true
    city?: true
    code_postal?: true
    company_id?: true
    country?: true
    fullname?: true
    group_id?: true
    location?: true
    password?: true
    state_region?: true
    surname?: true
    tag?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: customerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date
    createdAt: Date
    updatedAt: Date
    city: string
    code_postal: string
    company_id: string
    country: string
    fullname: string
    group_id: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    installation_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean
    code_postal?: boolean
    company_id?: boolean
    country?: boolean
    fullname?: boolean
    group_id?: boolean
    location?: boolean
    password?: boolean
    state_region?: boolean
    surname?: boolean
    tag?: boolean
    archive_installation?: boolean | customer$archive_installationArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>



  export type customerSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    installation_date?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    city?: boolean
    code_postal?: boolean
    company_id?: boolean
    country?: boolean
    fullname?: boolean
    group_id?: boolean
    location?: boolean
    password?: boolean
    state_region?: boolean
    surname?: boolean
    tag?: boolean
  }

  export type customerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "address" | "installation_date" | "createdAt" | "updatedAt" | "city" | "code_postal" | "company_id" | "country" | "fullname" | "group_id" | "location" | "password" | "state_region" | "surname" | "tag", ExtArgs["result"]["customer"]>
  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    archive_installation?: boolean | customer$archive_installationArgs<ExtArgs>
    company?: boolean | companyDefaultArgs<ExtArgs>
    groups?: boolean | groupsDefaultArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customer"
    objects: {
      archive_installation: Prisma.$archive_installationPayload<ExtArgs>[]
      company: Prisma.$companyPayload<ExtArgs>
      groups: Prisma.$groupsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string
      address: string
      installation_date: Date
      createdAt: Date
      updatedAt: Date
      city: string
      code_postal: string
      company_id: string
      country: string
      fullname: string
      group_id: string
      location: string
      password: string
      state_region: string
      surname: string
      tag: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<Prisma.$customerPayload, S>

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer'], meta: { name: 'customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customerFindUniqueArgs>(args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs>(args: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customerFindFirstArgs>(args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs>(args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends customerFindManyArgs>(args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends customerCreateArgs>(args: SelectSubset<T, customerCreateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customerCreateManyArgs>(args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends customerDeleteArgs>(args: SelectSubset<T, customerDeleteArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customerUpdateArgs>(args: SelectSubset<T, customerUpdateArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customerDeleteManyArgs>(args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customerUpdateManyArgs>(args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends customerUpsertArgs>(args: SelectSubset<T, customerUpsertArgs<ExtArgs>>): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
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
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customer model
   */
  readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    archive_installation<T extends customer$archive_installationArgs<ExtArgs> = {}>(args?: Subset<T, customer$archive_installationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$archive_installationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    company<T extends companyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, companyDefaultArgs<ExtArgs>>): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    groups<T extends groupsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, groupsDefaultArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<"customer", 'String'>
    readonly email: FieldRef<"customer", 'String'>
    readonly phone: FieldRef<"customer", 'String'>
    readonly address: FieldRef<"customer", 'String'>
    readonly installation_date: FieldRef<"customer", 'DateTime'>
    readonly createdAt: FieldRef<"customer", 'DateTime'>
    readonly updatedAt: FieldRef<"customer", 'DateTime'>
    readonly city: FieldRef<"customer", 'String'>
    readonly code_postal: FieldRef<"customer", 'String'>
    readonly company_id: FieldRef<"customer", 'String'>
    readonly country: FieldRef<"customer", 'String'>
    readonly fullname: FieldRef<"customer", 'String'>
    readonly group_id: FieldRef<"customer", 'String'>
    readonly location: FieldRef<"customer", 'String'>
    readonly password: FieldRef<"customer", 'String'>
    readonly state_region: FieldRef<"customer", 'String'>
    readonly surname: FieldRef<"customer", 'String'>
    readonly tag: FieldRef<"customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>
  }

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>
  }

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput
  }

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customer.archive_installation
   */
  export type customer$archive_installationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the archive_installation
     */
    select?: archive_installationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the archive_installation
     */
    omit?: archive_installationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: archive_installationInclude<ExtArgs> | null
    where?: archive_installationWhereInput
    orderBy?: archive_installationOrderByWithRelationInput | archive_installationOrderByWithRelationInput[]
    cursor?: archive_installationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Archive_installationScalarFieldEnum | Archive_installationScalarFieldEnum[]
  }

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
  }


  /**
   * Model device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which device to aggregate.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type deviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: deviceWhereInput
    orderBy?: deviceOrderByWithAggregationInput | deviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: deviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends deviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type deviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["device"]>



  export type deviceSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type deviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["device"]>

  export type $devicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "device"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type deviceGetPayload<S extends boolean | null | undefined | deviceDefaultArgs> = $Result.GetResult<Prisma.$devicePayload, S>

  type deviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<deviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface deviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['device'], meta: { name: 'device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {deviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends deviceFindUniqueArgs>(args: SelectSubset<T, deviceFindUniqueArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {deviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends deviceFindUniqueOrThrowArgs>(args: SelectSubset<T, deviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends deviceFindFirstArgs>(args?: SelectSubset<T, deviceFindFirstArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends deviceFindFirstOrThrowArgs>(args?: SelectSubset<T, deviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends deviceFindManyArgs>(args?: SelectSubset<T, deviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {deviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends deviceCreateArgs>(args: SelectSubset<T, deviceCreateArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {deviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends deviceCreateManyArgs>(args?: SelectSubset<T, deviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Device.
     * @param {deviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends deviceDeleteArgs>(args: SelectSubset<T, deviceDeleteArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {deviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends deviceUpdateArgs>(args: SelectSubset<T, deviceUpdateArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {deviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends deviceDeleteManyArgs>(args?: SelectSubset<T, deviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends deviceUpdateManyArgs>(args: SelectSubset<T, deviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {deviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends deviceUpsertArgs>(args: SelectSubset<T, deviceUpsertArgs<ExtArgs>>): Prisma__deviceClient<$Result.GetResult<Prisma.$devicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends deviceCountArgs>(
      args?: Subset<T, deviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {deviceGroupByArgs} args - Group by arguments.
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
      T extends deviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: deviceGroupByArgs['orderBy'] }
        : { orderBy?: deviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, deviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the device model
   */
  readonly fields: deviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__deviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the device model
   */
  interface deviceFieldRefs {
    readonly id: FieldRef<"device", 'String'>
    readonly name: FieldRef<"device", 'String'>
    readonly createdAt: FieldRef<"device", 'DateTime'>
    readonly updatedAt: FieldRef<"device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * device findUnique
   */
  export type deviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device findUniqueOrThrow
   */
  export type deviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device findFirst
   */
  export type deviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device findFirstOrThrow
   */
  export type deviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Filter, which device to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device findMany
   */
  export type deviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Filter, which devices to fetch.
     */
    where?: deviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of devices to fetch.
     */
    orderBy?: deviceOrderByWithRelationInput | deviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing devices.
     */
    cursor?: deviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * device create
   */
  export type deviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * The data needed to create a device.
     */
    data: XOR<deviceCreateInput, deviceUncheckedCreateInput>
  }

  /**
   * device createMany
   */
  export type deviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many devices.
     */
    data: deviceCreateManyInput | deviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * device update
   */
  export type deviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * The data needed to update a device.
     */
    data: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>
    /**
     * Choose, which device to update.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device updateMany
   */
  export type deviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update devices.
     */
    data: XOR<deviceUpdateManyMutationInput, deviceUncheckedUpdateManyInput>
    /**
     * Filter which devices to update
     */
    where?: deviceWhereInput
    /**
     * Limit how many devices to update.
     */
    limit?: number
  }

  /**
   * device upsert
   */
  export type deviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * The filter to search for the device to update in case it exists.
     */
    where: deviceWhereUniqueInput
    /**
     * In case the device found by the `where` argument doesn't exist, create a new device with this data.
     */
    create: XOR<deviceCreateInput, deviceUncheckedCreateInput>
    /**
     * In case the device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<deviceUpdateInput, deviceUncheckedUpdateInput>
  }

  /**
   * device delete
   */
  export type deviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
    /**
     * Filter which device to delete.
     */
    where: deviceWhereUniqueInput
  }

  /**
   * device deleteMany
   */
  export type deviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which devices to delete
     */
    where?: deviceWhereInput
    /**
     * Limit how many devices to delete.
     */
    limit?: number
  }

  /**
   * device without action
   */
  export type deviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the device
     */
    select?: deviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the device
     */
    omit?: deviceOmit<ExtArgs> | null
  }


  /**
   * Model groups
   */

  export type AggregateGroups = {
    _count: GroupsCountAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  export type GroupsMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to aggregate.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned groups
    **/
    _count?: true | GroupsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupsMaxAggregateInputType
  }

  export type GetGroupsAggregateType<T extends GroupsAggregateArgs> = {
        [P in keyof T & keyof AggregateGroups]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroups[P]>
      : GetScalarType<T[P], AggregateGroups[P]>
  }




  export type groupsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: groupsWhereInput
    orderBy?: groupsOrderByWithAggregationInput | groupsOrderByWithAggregationInput[]
    by: GroupsScalarFieldEnum[] | GroupsScalarFieldEnum
    having?: groupsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupsCountAggregateInputType | true
    _min?: GroupsMinAggregateInputType
    _max?: GroupsMaxAggregateInputType
  }

  export type GroupsGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: GroupsCountAggregateOutputType | null
    _min: GroupsMinAggregateOutputType | null
    _max: GroupsMaxAggregateOutputType | null
  }

  type GetGroupsGroupByPayload<T extends groupsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupsGroupByOutputType[P]>
            : GetScalarType<T[P], GroupsGroupByOutputType[P]>
        }
      >
    >


  export type groupsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | groups$customerArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groups"]>



  export type groupsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type groupsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["groups"]>
  export type groupsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | groups$customerArgs<ExtArgs>
    _count?: boolean | GroupsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $groupsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "groups"
    objects: {
      customer: Prisma.$customerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["groups"]>
    composites: {}
  }

  type groupsGetPayload<S extends boolean | null | undefined | groupsDefaultArgs> = $Result.GetResult<Prisma.$groupsPayload, S>

  type groupsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<groupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupsCountAggregateInputType | true
    }

  export interface groupsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['groups'], meta: { name: 'groups' } }
    /**
     * Find zero or one Groups that matches the filter.
     * @param {groupsFindUniqueArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends groupsFindUniqueArgs>(args: SelectSubset<T, groupsFindUniqueArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Groups that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {groupsFindUniqueOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends groupsFindUniqueOrThrowArgs>(args: SelectSubset<T, groupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends groupsFindFirstArgs>(args?: SelectSubset<T, groupsFindFirstArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Groups that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindFirstOrThrowArgs} args - Arguments to find a Groups
     * @example
     * // Get one Groups
     * const groups = await prisma.groups.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends groupsFindFirstOrThrowArgs>(args?: SelectSubset<T, groupsFindFirstOrThrowArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.groups.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.groups.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupsWithIdOnly = await prisma.groups.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends groupsFindManyArgs>(args?: SelectSubset<T, groupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Groups.
     * @param {groupsCreateArgs} args - Arguments to create a Groups.
     * @example
     * // Create one Groups
     * const Groups = await prisma.groups.create({
     *   data: {
     *     // ... data to create a Groups
     *   }
     * })
     * 
     */
    create<T extends groupsCreateArgs>(args: SelectSubset<T, groupsCreateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {groupsCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const groups = await prisma.groups.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends groupsCreateManyArgs>(args?: SelectSubset<T, groupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Groups.
     * @param {groupsDeleteArgs} args - Arguments to delete one Groups.
     * @example
     * // Delete one Groups
     * const Groups = await prisma.groups.delete({
     *   where: {
     *     // ... filter to delete one Groups
     *   }
     * })
     * 
     */
    delete<T extends groupsDeleteArgs>(args: SelectSubset<T, groupsDeleteArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Groups.
     * @param {groupsUpdateArgs} args - Arguments to update one Groups.
     * @example
     * // Update one Groups
     * const groups = await prisma.groups.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends groupsUpdateArgs>(args: SelectSubset<T, groupsUpdateArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {groupsDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.groups.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends groupsDeleteManyArgs>(args?: SelectSubset<T, groupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const groups = await prisma.groups.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends groupsUpdateManyArgs>(args: SelectSubset<T, groupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Groups.
     * @param {groupsUpsertArgs} args - Arguments to update or create a Groups.
     * @example
     * // Update or create a Groups
     * const groups = await prisma.groups.upsert({
     *   create: {
     *     // ... data to create a Groups
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groups we want to update
     *   }
     * })
     */
    upsert<T extends groupsUpsertArgs>(args: SelectSubset<T, groupsUpsertArgs<ExtArgs>>): Prisma__groupsClient<$Result.GetResult<Prisma.$groupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.groups.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends groupsCountArgs>(
      args?: Subset<T, groupsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupsAggregateArgs>(args: Subset<T, GroupsAggregateArgs>): Prisma.PrismaPromise<GetGroupsAggregateType<T>>

    /**
     * Group by Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {groupsGroupByArgs} args - Group by arguments.
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
      T extends groupsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: groupsGroupByArgs['orderBy'] }
        : { orderBy?: groupsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, groupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the groups model
   */
  readonly fields: groupsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for groups.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__groupsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends groups$customerArgs<ExtArgs> = {}>(args?: Subset<T, groups$customerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the groups model
   */
  interface groupsFieldRefs {
    readonly id: FieldRef<"groups", 'String'>
    readonly name: FieldRef<"groups", 'String'>
    readonly createdAt: FieldRef<"groups", 'DateTime'>
    readonly updatedAt: FieldRef<"groups", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * groups findUnique
   */
  export type groupsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findUniqueOrThrow
   */
  export type groupsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups findFirst
   */
  export type groupsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findFirstOrThrow
   */
  export type groupsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of groups.
     */
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups findMany
   */
  export type groupsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter, which groups to fetch.
     */
    where?: groupsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of groups to fetch.
     */
    orderBy?: groupsOrderByWithRelationInput | groupsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing groups.
     */
    cursor?: groupsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` groups.
     */
    skip?: number
    distinct?: GroupsScalarFieldEnum | GroupsScalarFieldEnum[]
  }

  /**
   * groups create
   */
  export type groupsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to create a groups.
     */
    data: XOR<groupsCreateInput, groupsUncheckedCreateInput>
  }

  /**
   * groups createMany
   */
  export type groupsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many groups.
     */
    data: groupsCreateManyInput | groupsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * groups update
   */
  export type groupsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The data needed to update a groups.
     */
    data: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
    /**
     * Choose, which groups to update.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups updateMany
   */
  export type groupsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update groups.
     */
    data: XOR<groupsUpdateManyMutationInput, groupsUncheckedUpdateManyInput>
    /**
     * Filter which groups to update
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to update.
     */
    limit?: number
  }

  /**
   * groups upsert
   */
  export type groupsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * The filter to search for the groups to update in case it exists.
     */
    where: groupsWhereUniqueInput
    /**
     * In case the groups found by the `where` argument doesn't exist, create a new groups with this data.
     */
    create: XOR<groupsCreateInput, groupsUncheckedCreateInput>
    /**
     * In case the groups was found with the provided `where` argument, update it with this data.
     */
    update: XOR<groupsUpdateInput, groupsUncheckedUpdateInput>
  }

  /**
   * groups delete
   */
  export type groupsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
    /**
     * Filter which groups to delete.
     */
    where: groupsWhereUniqueInput
  }

  /**
   * groups deleteMany
   */
  export type groupsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which groups to delete
     */
    where?: groupsWhereInput
    /**
     * Limit how many groups to delete.
     */
    limit?: number
  }

  /**
   * groups.customer
   */
  export type groups$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customer
     */
    omit?: customerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customerInclude<ExtArgs> | null
    where?: customerWhereInput
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[]
    cursor?: customerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * groups without action
   */
  export type groupsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the groups
     */
    select?: groupsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the groups
     */
    omit?: groupsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: groupsInclude<ExtArgs> | null
  }


  /**
   * Model logs
   */

  export type AggregateLogs = {
    _count: LogsCountAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  export type LogsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    action: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LogsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    action: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LogsCountAggregateOutputType = {
    id: number
    user_id: number
    action: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LogsMinAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LogsMaxAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LogsCountAggregateInputType = {
    id?: true
    user_id?: true
    action?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to aggregate.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned logs
    **/
    _count?: true | LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsMaxAggregateInputType
  }

  export type GetLogsAggregateType<T extends LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateLogs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogs[P]>
      : GetScalarType<T[P], AggregateLogs[P]>
  }




  export type logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: logsWhereInput
    orderBy?: logsOrderByWithAggregationInput | logsOrderByWithAggregationInput[]
    by: LogsScalarFieldEnum[] | LogsScalarFieldEnum
    having?: logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsCountAggregateInputType | true
    _min?: LogsMinAggregateInputType
    _max?: LogsMaxAggregateInputType
  }

  export type LogsGroupByOutputType = {
    id: string
    user_id: string
    action: string
    createdAt: Date
    updatedAt: Date
    _count: LogsCountAggregateOutputType | null
    _min: LogsMinAggregateOutputType | null
    _max: LogsMaxAggregateOutputType | null
  }

  type GetLogsGroupByPayload<T extends logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsGroupByOutputType[P]>
            : GetScalarType<T[P], LogsGroupByOutputType[P]>
        }
      >
    >


  export type logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    action?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logs"]>



  export type logsSelectScalar = {
    id?: boolean
    user_id?: boolean
    action?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "action" | "createdAt" | "updatedAt", ExtArgs["result"]["logs"]>
  export type logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "logs"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      action: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["logs"]>
    composites: {}
  }

  type logsGetPayload<S extends boolean | null | undefined | logsDefaultArgs> = $Result.GetResult<Prisma.$logsPayload, S>

  type logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsCountAggregateInputType | true
    }

  export interface logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['logs'], meta: { name: 'logs' } }
    /**
     * Find zero or one Logs that matches the filter.
     * @param {logsFindUniqueArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends logsFindUniqueArgs>(args: SelectSubset<T, logsFindUniqueArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {logsFindUniqueOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends logsFindUniqueOrThrowArgs>(args: SelectSubset<T, logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends logsFindFirstArgs>(args?: SelectSubset<T, logsFindFirstArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindFirstOrThrowArgs} args - Arguments to find a Logs
     * @example
     * // Get one Logs
     * const logs = await prisma.logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends logsFindFirstOrThrowArgs>(args?: SelectSubset<T, logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Logs
     * const logs = await prisma.logs.findMany()
     * 
     * // Get first 10 Logs
     * const logs = await prisma.logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const logsWithIdOnly = await prisma.logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends logsFindManyArgs>(args?: SelectSubset<T, logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Logs.
     * @param {logsCreateArgs} args - Arguments to create a Logs.
     * @example
     * // Create one Logs
     * const Logs = await prisma.logs.create({
     *   data: {
     *     // ... data to create a Logs
     *   }
     * })
     * 
     */
    create<T extends logsCreateArgs>(args: SelectSubset<T, logsCreateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Logs.
     * @param {logsCreateManyArgs} args - Arguments to create many Logs.
     * @example
     * // Create many Logs
     * const logs = await prisma.logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends logsCreateManyArgs>(args?: SelectSubset<T, logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Logs.
     * @param {logsDeleteArgs} args - Arguments to delete one Logs.
     * @example
     * // Delete one Logs
     * const Logs = await prisma.logs.delete({
     *   where: {
     *     // ... filter to delete one Logs
     *   }
     * })
     * 
     */
    delete<T extends logsDeleteArgs>(args: SelectSubset<T, logsDeleteArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Logs.
     * @param {logsUpdateArgs} args - Arguments to update one Logs.
     * @example
     * // Update one Logs
     * const logs = await prisma.logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends logsUpdateArgs>(args: SelectSubset<T, logsUpdateArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Logs.
     * @param {logsDeleteManyArgs} args - Arguments to filter Logs to delete.
     * @example
     * // Delete a few Logs
     * const { count } = await prisma.logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends logsDeleteManyArgs>(args?: SelectSubset<T, logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Logs
     * const logs = await prisma.logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends logsUpdateManyArgs>(args: SelectSubset<T, logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Logs.
     * @param {logsUpsertArgs} args - Arguments to update or create a Logs.
     * @example
     * // Update or create a Logs
     * const logs = await prisma.logs.upsert({
     *   create: {
     *     // ... data to create a Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Logs we want to update
     *   }
     * })
     */
    upsert<T extends logsUpsertArgs>(args: SelectSubset<T, logsUpsertArgs<ExtArgs>>): Prisma__logsClient<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsCountArgs} args - Arguments to filter Logs to count.
     * @example
     * // Count the number of Logs
     * const count = await prisma.logs.count({
     *   where: {
     *     // ... the filter for the Logs we want to count
     *   }
     * })
    **/
    count<T extends logsCountArgs>(
      args?: Subset<T, logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogsAggregateArgs>(args: Subset<T, LogsAggregateArgs>): Prisma.PrismaPromise<GetLogsAggregateType<T>>

    /**
     * Group by Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {logsGroupByArgs} args - Group by arguments.
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
      T extends logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: logsGroupByArgs['orderBy'] }
        : { orderBy?: logsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the logs model
   */
  readonly fields: logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the logs model
   */
  interface logsFieldRefs {
    readonly id: FieldRef<"logs", 'String'>
    readonly user_id: FieldRef<"logs", 'String'>
    readonly action: FieldRef<"logs", 'String'>
    readonly createdAt: FieldRef<"logs", 'DateTime'>
    readonly updatedAt: FieldRef<"logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * logs findUnique
   */
  export type logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findUniqueOrThrow
   */
  export type logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs findFirst
   */
  export type logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findFirstOrThrow
   */
  export type logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of logs.
     */
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs findMany
   */
  export type logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter, which logs to fetch.
     */
    where?: logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of logs to fetch.
     */
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing logs.
     */
    cursor?: logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` logs.
     */
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * logs create
   */
  export type logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to create a logs.
     */
    data: XOR<logsCreateInput, logsUncheckedCreateInput>
  }

  /**
   * logs createMany
   */
  export type logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many logs.
     */
    data: logsCreateManyInput | logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * logs update
   */
  export type logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The data needed to update a logs.
     */
    data: XOR<logsUpdateInput, logsUncheckedUpdateInput>
    /**
     * Choose, which logs to update.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs updateMany
   */
  export type logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update logs.
     */
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyInput>
    /**
     * Filter which logs to update
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to update.
     */
    limit?: number
  }

  /**
   * logs upsert
   */
  export type logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * The filter to search for the logs to update in case it exists.
     */
    where: logsWhereUniqueInput
    /**
     * In case the logs found by the `where` argument doesn't exist, create a new logs with this data.
     */
    create: XOR<logsCreateInput, logsUncheckedCreateInput>
    /**
     * In case the logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<logsUpdateInput, logsUncheckedUpdateInput>
  }

  /**
   * logs delete
   */
  export type logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    /**
     * Filter which logs to delete.
     */
    where: logsWhereUniqueInput
  }

  /**
   * logs deleteMany
   */
  export type logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which logs to delete
     */
    where?: logsWhereInput
    /**
     * Limit how many logs to delete.
     */
    limit?: number
  }

  /**
   * logs without action
   */
  export type logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: bigint | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: bigint | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: bigint | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    price: bigint
    description: string
    createdAt: Date
    updatedAt: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["products"]>



  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["products"]>

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: bigint
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'BigInt'>
    readonly description: FieldRef<"products", 'String'>
    readonly createdAt: FieldRef<"products", 'DateTime'>
    readonly updatedAt: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
  }


  /**
   * Model report_assets
   */

  export type AggregateReport_assets = {
    _count: Report_assetsCountAggregateOutputType | null
    _avg: Report_assetsAvgAggregateOutputType | null
    _sum: Report_assetsSumAggregateOutputType | null
    _min: Report_assetsMinAggregateOutputType | null
    _max: Report_assetsMaxAggregateOutputType | null
  }

  export type Report_assetsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type Report_assetsSumAggregateOutputType = {
    quantity: bigint | null
  }

  export type Report_assetsMinAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Report_assetsMaxAggregateOutputType = {
    id: string | null
    description: string | null
    quantity: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Report_assetsCountAggregateOutputType = {
    id: number
    description: number
    quantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Report_assetsAvgAggregateInputType = {
    quantity?: true
  }

  export type Report_assetsSumAggregateInputType = {
    quantity?: true
  }

  export type Report_assetsMinAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Report_assetsMaxAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Report_assetsCountAggregateInputType = {
    id?: true
    description?: true
    quantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Report_assetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report_assets to aggregate.
     */
    where?: report_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_assets to fetch.
     */
    orderBy?: report_assetsOrderByWithRelationInput | report_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: report_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned report_assets
    **/
    _count?: true | Report_assetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Report_assetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Report_assetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Report_assetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Report_assetsMaxAggregateInputType
  }

  export type GetReport_assetsAggregateType<T extends Report_assetsAggregateArgs> = {
        [P in keyof T & keyof AggregateReport_assets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport_assets[P]>
      : GetScalarType<T[P], AggregateReport_assets[P]>
  }




  export type report_assetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: report_assetsWhereInput
    orderBy?: report_assetsOrderByWithAggregationInput | report_assetsOrderByWithAggregationInput[]
    by: Report_assetsScalarFieldEnum[] | Report_assetsScalarFieldEnum
    having?: report_assetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Report_assetsCountAggregateInputType | true
    _avg?: Report_assetsAvgAggregateInputType
    _sum?: Report_assetsSumAggregateInputType
    _min?: Report_assetsMinAggregateInputType
    _max?: Report_assetsMaxAggregateInputType
  }

  export type Report_assetsGroupByOutputType = {
    id: string
    description: string
    quantity: bigint
    createdAt: Date
    updatedAt: Date
    _count: Report_assetsCountAggregateOutputType | null
    _avg: Report_assetsAvgAggregateOutputType | null
    _sum: Report_assetsSumAggregateOutputType | null
    _min: Report_assetsMinAggregateOutputType | null
    _max: Report_assetsMaxAggregateOutputType | null
  }

  type GetReport_assetsGroupByPayload<T extends report_assetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Report_assetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Report_assetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Report_assetsGroupByOutputType[P]>
            : GetScalarType<T[P], Report_assetsGroupByOutputType[P]>
        }
      >
    >


  export type report_assetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assets?: boolean | assetsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report_assets"]>



  export type report_assetsSelectScalar = {
    id?: boolean
    description?: boolean
    quantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type report_assetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "quantity" | "createdAt" | "updatedAt", ExtArgs["result"]["report_assets"]>
  export type report_assetsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assets?: boolean | assetsDefaultArgs<ExtArgs>
  }

  export type $report_assetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report_assets"
    objects: {
      assets: Prisma.$assetsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      quantity: bigint
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["report_assets"]>
    composites: {}
  }

  type report_assetsGetPayload<S extends boolean | null | undefined | report_assetsDefaultArgs> = $Result.GetResult<Prisma.$report_assetsPayload, S>

  type report_assetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<report_assetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Report_assetsCountAggregateInputType | true
    }

  export interface report_assetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report_assets'], meta: { name: 'report_assets' } }
    /**
     * Find zero or one Report_assets that matches the filter.
     * @param {report_assetsFindUniqueArgs} args - Arguments to find a Report_assets
     * @example
     * // Get one Report_assets
     * const report_assets = await prisma.report_assets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends report_assetsFindUniqueArgs>(args: SelectSubset<T, report_assetsFindUniqueArgs<ExtArgs>>): Prisma__report_assetsClient<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report_assets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {report_assetsFindUniqueOrThrowArgs} args - Arguments to find a Report_assets
     * @example
     * // Get one Report_assets
     * const report_assets = await prisma.report_assets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends report_assetsFindUniqueOrThrowArgs>(args: SelectSubset<T, report_assetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__report_assetsClient<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report_assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_assetsFindFirstArgs} args - Arguments to find a Report_assets
     * @example
     * // Get one Report_assets
     * const report_assets = await prisma.report_assets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends report_assetsFindFirstArgs>(args?: SelectSubset<T, report_assetsFindFirstArgs<ExtArgs>>): Prisma__report_assetsClient<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report_assets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_assetsFindFirstOrThrowArgs} args - Arguments to find a Report_assets
     * @example
     * // Get one Report_assets
     * const report_assets = await prisma.report_assets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends report_assetsFindFirstOrThrowArgs>(args?: SelectSubset<T, report_assetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__report_assetsClient<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Report_assets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_assetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Report_assets
     * const report_assets = await prisma.report_assets.findMany()
     * 
     * // Get first 10 Report_assets
     * const report_assets = await prisma.report_assets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const report_assetsWithIdOnly = await prisma.report_assets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends report_assetsFindManyArgs>(args?: SelectSubset<T, report_assetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report_assets.
     * @param {report_assetsCreateArgs} args - Arguments to create a Report_assets.
     * @example
     * // Create one Report_assets
     * const Report_assets = await prisma.report_assets.create({
     *   data: {
     *     // ... data to create a Report_assets
     *   }
     * })
     * 
     */
    create<T extends report_assetsCreateArgs>(args: SelectSubset<T, report_assetsCreateArgs<ExtArgs>>): Prisma__report_assetsClient<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Report_assets.
     * @param {report_assetsCreateManyArgs} args - Arguments to create many Report_assets.
     * @example
     * // Create many Report_assets
     * const report_assets = await prisma.report_assets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends report_assetsCreateManyArgs>(args?: SelectSubset<T, report_assetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report_assets.
     * @param {report_assetsDeleteArgs} args - Arguments to delete one Report_assets.
     * @example
     * // Delete one Report_assets
     * const Report_assets = await prisma.report_assets.delete({
     *   where: {
     *     // ... filter to delete one Report_assets
     *   }
     * })
     * 
     */
    delete<T extends report_assetsDeleteArgs>(args: SelectSubset<T, report_assetsDeleteArgs<ExtArgs>>): Prisma__report_assetsClient<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report_assets.
     * @param {report_assetsUpdateArgs} args - Arguments to update one Report_assets.
     * @example
     * // Update one Report_assets
     * const report_assets = await prisma.report_assets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends report_assetsUpdateArgs>(args: SelectSubset<T, report_assetsUpdateArgs<ExtArgs>>): Prisma__report_assetsClient<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Report_assets.
     * @param {report_assetsDeleteManyArgs} args - Arguments to filter Report_assets to delete.
     * @example
     * // Delete a few Report_assets
     * const { count } = await prisma.report_assets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends report_assetsDeleteManyArgs>(args?: SelectSubset<T, report_assetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Report_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_assetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Report_assets
     * const report_assets = await prisma.report_assets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends report_assetsUpdateManyArgs>(args: SelectSubset<T, report_assetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report_assets.
     * @param {report_assetsUpsertArgs} args - Arguments to update or create a Report_assets.
     * @example
     * // Update or create a Report_assets
     * const report_assets = await prisma.report_assets.upsert({
     *   create: {
     *     // ... data to create a Report_assets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report_assets we want to update
     *   }
     * })
     */
    upsert<T extends report_assetsUpsertArgs>(args: SelectSubset<T, report_assetsUpsertArgs<ExtArgs>>): Prisma__report_assetsClient<$Result.GetResult<Prisma.$report_assetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Report_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_assetsCountArgs} args - Arguments to filter Report_assets to count.
     * @example
     * // Count the number of Report_assets
     * const count = await prisma.report_assets.count({
     *   where: {
     *     // ... the filter for the Report_assets we want to count
     *   }
     * })
    **/
    count<T extends report_assetsCountArgs>(
      args?: Subset<T, report_assetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Report_assetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_assetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Report_assetsAggregateArgs>(args: Subset<T, Report_assetsAggregateArgs>): Prisma.PrismaPromise<GetReport_assetsAggregateType<T>>

    /**
     * Group by Report_assets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_assetsGroupByArgs} args - Group by arguments.
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
      T extends report_assetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: report_assetsGroupByArgs['orderBy'] }
        : { orderBy?: report_assetsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, report_assetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReport_assetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report_assets model
   */
  readonly fields: report_assetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report_assets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__report_assetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assets<T extends assetsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, assetsDefaultArgs<ExtArgs>>): Prisma__assetsClient<$Result.GetResult<Prisma.$assetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the report_assets model
   */
  interface report_assetsFieldRefs {
    readonly id: FieldRef<"report_assets", 'String'>
    readonly description: FieldRef<"report_assets", 'String'>
    readonly quantity: FieldRef<"report_assets", 'BigInt'>
    readonly createdAt: FieldRef<"report_assets", 'DateTime'>
    readonly updatedAt: FieldRef<"report_assets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * report_assets findUnique
   */
  export type report_assetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    /**
     * Filter, which report_assets to fetch.
     */
    where: report_assetsWhereUniqueInput
  }

  /**
   * report_assets findUniqueOrThrow
   */
  export type report_assetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    /**
     * Filter, which report_assets to fetch.
     */
    where: report_assetsWhereUniqueInput
  }

  /**
   * report_assets findFirst
   */
  export type report_assetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    /**
     * Filter, which report_assets to fetch.
     */
    where?: report_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_assets to fetch.
     */
    orderBy?: report_assetsOrderByWithRelationInput | report_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_assets.
     */
    cursor?: report_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_assets.
     */
    distinct?: Report_assetsScalarFieldEnum | Report_assetsScalarFieldEnum[]
  }

  /**
   * report_assets findFirstOrThrow
   */
  export type report_assetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    /**
     * Filter, which report_assets to fetch.
     */
    where?: report_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_assets to fetch.
     */
    orderBy?: report_assetsOrderByWithRelationInput | report_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_assets.
     */
    cursor?: report_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_assets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_assets.
     */
    distinct?: Report_assetsScalarFieldEnum | Report_assetsScalarFieldEnum[]
  }

  /**
   * report_assets findMany
   */
  export type report_assetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    /**
     * Filter, which report_assets to fetch.
     */
    where?: report_assetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_assets to fetch.
     */
    orderBy?: report_assetsOrderByWithRelationInput | report_assetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing report_assets.
     */
    cursor?: report_assetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_assets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_assets.
     */
    skip?: number
    distinct?: Report_assetsScalarFieldEnum | Report_assetsScalarFieldEnum[]
  }

  /**
   * report_assets create
   */
  export type report_assetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    /**
     * The data needed to create a report_assets.
     */
    data: XOR<report_assetsCreateInput, report_assetsUncheckedCreateInput>
  }

  /**
   * report_assets createMany
   */
  export type report_assetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many report_assets.
     */
    data: report_assetsCreateManyInput | report_assetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * report_assets update
   */
  export type report_assetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    /**
     * The data needed to update a report_assets.
     */
    data: XOR<report_assetsUpdateInput, report_assetsUncheckedUpdateInput>
    /**
     * Choose, which report_assets to update.
     */
    where: report_assetsWhereUniqueInput
  }

  /**
   * report_assets updateMany
   */
  export type report_assetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update report_assets.
     */
    data: XOR<report_assetsUpdateManyMutationInput, report_assetsUncheckedUpdateManyInput>
    /**
     * Filter which report_assets to update
     */
    where?: report_assetsWhereInput
    /**
     * Limit how many report_assets to update.
     */
    limit?: number
  }

  /**
   * report_assets upsert
   */
  export type report_assetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    /**
     * The filter to search for the report_assets to update in case it exists.
     */
    where: report_assetsWhereUniqueInput
    /**
     * In case the report_assets found by the `where` argument doesn't exist, create a new report_assets with this data.
     */
    create: XOR<report_assetsCreateInput, report_assetsUncheckedCreateInput>
    /**
     * In case the report_assets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<report_assetsUpdateInput, report_assetsUncheckedUpdateInput>
  }

  /**
   * report_assets delete
   */
  export type report_assetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
    /**
     * Filter which report_assets to delete.
     */
    where: report_assetsWhereUniqueInput
  }

  /**
   * report_assets deleteMany
   */
  export type report_assetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report_assets to delete
     */
    where?: report_assetsWhereInput
    /**
     * Limit how many report_assets to delete.
     */
    limit?: number
  }

  /**
   * report_assets without action
   */
  export type report_assetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_assets
     */
    select?: report_assetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_assets
     */
    omit?: report_assetsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_assetsInclude<ExtArgs> | null
  }


  /**
   * Model report_cash
   */

  export type AggregateReport_cash = {
    _count: Report_cashCountAggregateOutputType | null
    _avg: Report_cashAvgAggregateOutputType | null
    _sum: Report_cashSumAggregateOutputType | null
    _min: Report_cashMinAggregateOutputType | null
    _max: Report_cashMaxAggregateOutputType | null
  }

  export type Report_cashAvgAggregateOutputType = {
    credit: number | null
    debit: number | null
  }

  export type Report_cashSumAggregateOutputType = {
    credit: bigint | null
    debit: bigint | null
  }

  export type Report_cashMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    credit: bigint | null
    debit: bigint | null
    description: string | null
  }

  export type Report_cashMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    credit: bigint | null
    debit: bigint | null
    description: string | null
  }

  export type Report_cashCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    credit: number
    debit: number
    description: number
    _all: number
  }


  export type Report_cashAvgAggregateInputType = {
    credit?: true
    debit?: true
  }

  export type Report_cashSumAggregateInputType = {
    credit?: true
    debit?: true
  }

  export type Report_cashMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    credit?: true
    debit?: true
    description?: true
  }

  export type Report_cashMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    credit?: true
    debit?: true
    description?: true
  }

  export type Report_cashCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    credit?: true
    debit?: true
    description?: true
    _all?: true
  }

  export type Report_cashAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report_cash to aggregate.
     */
    where?: report_cashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_cashes to fetch.
     */
    orderBy?: report_cashOrderByWithRelationInput | report_cashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: report_cashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_cashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_cashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned report_cashes
    **/
    _count?: true | Report_cashCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Report_cashAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Report_cashSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Report_cashMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Report_cashMaxAggregateInputType
  }

  export type GetReport_cashAggregateType<T extends Report_cashAggregateArgs> = {
        [P in keyof T & keyof AggregateReport_cash]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport_cash[P]>
      : GetScalarType<T[P], AggregateReport_cash[P]>
  }




  export type report_cashGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: report_cashWhereInput
    orderBy?: report_cashOrderByWithAggregationInput | report_cashOrderByWithAggregationInput[]
    by: Report_cashScalarFieldEnum[] | Report_cashScalarFieldEnum
    having?: report_cashScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Report_cashCountAggregateInputType | true
    _avg?: Report_cashAvgAggregateInputType
    _sum?: Report_cashSumAggregateInputType
    _min?: Report_cashMinAggregateInputType
    _max?: Report_cashMaxAggregateInputType
  }

  export type Report_cashGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    credit: bigint
    debit: bigint
    description: string
    _count: Report_cashCountAggregateOutputType | null
    _avg: Report_cashAvgAggregateOutputType | null
    _sum: Report_cashSumAggregateOutputType | null
    _min: Report_cashMinAggregateOutputType | null
    _max: Report_cashMaxAggregateOutputType | null
  }

  type GetReport_cashGroupByPayload<T extends report_cashGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Report_cashGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Report_cashGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Report_cashGroupByOutputType[P]>
            : GetScalarType<T[P], Report_cashGroupByOutputType[P]>
        }
      >
    >


  export type report_cashSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credit?: boolean
    debit?: boolean
    description?: boolean
  }, ExtArgs["result"]["report_cash"]>



  export type report_cashSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    credit?: boolean
    debit?: boolean
    description?: boolean
  }

  export type report_cashOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "credit" | "debit" | "description", ExtArgs["result"]["report_cash"]>

  export type $report_cashPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report_cash"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      credit: bigint
      debit: bigint
      description: string
    }, ExtArgs["result"]["report_cash"]>
    composites: {}
  }

  type report_cashGetPayload<S extends boolean | null | undefined | report_cashDefaultArgs> = $Result.GetResult<Prisma.$report_cashPayload, S>

  type report_cashCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<report_cashFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Report_cashCountAggregateInputType | true
    }

  export interface report_cashDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report_cash'], meta: { name: 'report_cash' } }
    /**
     * Find zero or one Report_cash that matches the filter.
     * @param {report_cashFindUniqueArgs} args - Arguments to find a Report_cash
     * @example
     * // Get one Report_cash
     * const report_cash = await prisma.report_cash.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends report_cashFindUniqueArgs>(args: SelectSubset<T, report_cashFindUniqueArgs<ExtArgs>>): Prisma__report_cashClient<$Result.GetResult<Prisma.$report_cashPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report_cash that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {report_cashFindUniqueOrThrowArgs} args - Arguments to find a Report_cash
     * @example
     * // Get one Report_cash
     * const report_cash = await prisma.report_cash.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends report_cashFindUniqueOrThrowArgs>(args: SelectSubset<T, report_cashFindUniqueOrThrowArgs<ExtArgs>>): Prisma__report_cashClient<$Result.GetResult<Prisma.$report_cashPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report_cash that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_cashFindFirstArgs} args - Arguments to find a Report_cash
     * @example
     * // Get one Report_cash
     * const report_cash = await prisma.report_cash.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends report_cashFindFirstArgs>(args?: SelectSubset<T, report_cashFindFirstArgs<ExtArgs>>): Prisma__report_cashClient<$Result.GetResult<Prisma.$report_cashPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report_cash that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_cashFindFirstOrThrowArgs} args - Arguments to find a Report_cash
     * @example
     * // Get one Report_cash
     * const report_cash = await prisma.report_cash.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends report_cashFindFirstOrThrowArgs>(args?: SelectSubset<T, report_cashFindFirstOrThrowArgs<ExtArgs>>): Prisma__report_cashClient<$Result.GetResult<Prisma.$report_cashPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Report_cashes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_cashFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Report_cashes
     * const report_cashes = await prisma.report_cash.findMany()
     * 
     * // Get first 10 Report_cashes
     * const report_cashes = await prisma.report_cash.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const report_cashWithIdOnly = await prisma.report_cash.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends report_cashFindManyArgs>(args?: SelectSubset<T, report_cashFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$report_cashPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report_cash.
     * @param {report_cashCreateArgs} args - Arguments to create a Report_cash.
     * @example
     * // Create one Report_cash
     * const Report_cash = await prisma.report_cash.create({
     *   data: {
     *     // ... data to create a Report_cash
     *   }
     * })
     * 
     */
    create<T extends report_cashCreateArgs>(args: SelectSubset<T, report_cashCreateArgs<ExtArgs>>): Prisma__report_cashClient<$Result.GetResult<Prisma.$report_cashPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Report_cashes.
     * @param {report_cashCreateManyArgs} args - Arguments to create many Report_cashes.
     * @example
     * // Create many Report_cashes
     * const report_cash = await prisma.report_cash.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends report_cashCreateManyArgs>(args?: SelectSubset<T, report_cashCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report_cash.
     * @param {report_cashDeleteArgs} args - Arguments to delete one Report_cash.
     * @example
     * // Delete one Report_cash
     * const Report_cash = await prisma.report_cash.delete({
     *   where: {
     *     // ... filter to delete one Report_cash
     *   }
     * })
     * 
     */
    delete<T extends report_cashDeleteArgs>(args: SelectSubset<T, report_cashDeleteArgs<ExtArgs>>): Prisma__report_cashClient<$Result.GetResult<Prisma.$report_cashPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report_cash.
     * @param {report_cashUpdateArgs} args - Arguments to update one Report_cash.
     * @example
     * // Update one Report_cash
     * const report_cash = await prisma.report_cash.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends report_cashUpdateArgs>(args: SelectSubset<T, report_cashUpdateArgs<ExtArgs>>): Prisma__report_cashClient<$Result.GetResult<Prisma.$report_cashPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Report_cashes.
     * @param {report_cashDeleteManyArgs} args - Arguments to filter Report_cashes to delete.
     * @example
     * // Delete a few Report_cashes
     * const { count } = await prisma.report_cash.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends report_cashDeleteManyArgs>(args?: SelectSubset<T, report_cashDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Report_cashes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_cashUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Report_cashes
     * const report_cash = await prisma.report_cash.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends report_cashUpdateManyArgs>(args: SelectSubset<T, report_cashUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report_cash.
     * @param {report_cashUpsertArgs} args - Arguments to update or create a Report_cash.
     * @example
     * // Update or create a Report_cash
     * const report_cash = await prisma.report_cash.upsert({
     *   create: {
     *     // ... data to create a Report_cash
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report_cash we want to update
     *   }
     * })
     */
    upsert<T extends report_cashUpsertArgs>(args: SelectSubset<T, report_cashUpsertArgs<ExtArgs>>): Prisma__report_cashClient<$Result.GetResult<Prisma.$report_cashPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Report_cashes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_cashCountArgs} args - Arguments to filter Report_cashes to count.
     * @example
     * // Count the number of Report_cashes
     * const count = await prisma.report_cash.count({
     *   where: {
     *     // ... the filter for the Report_cashes we want to count
     *   }
     * })
    **/
    count<T extends report_cashCountArgs>(
      args?: Subset<T, report_cashCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Report_cashCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report_cash.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_cashAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Report_cashAggregateArgs>(args: Subset<T, Report_cashAggregateArgs>): Prisma.PrismaPromise<GetReport_cashAggregateType<T>>

    /**
     * Group by Report_cash.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_cashGroupByArgs} args - Group by arguments.
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
      T extends report_cashGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: report_cashGroupByArgs['orderBy'] }
        : { orderBy?: report_cashGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, report_cashGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReport_cashGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report_cash model
   */
  readonly fields: report_cashFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report_cash.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__report_cashClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the report_cash model
   */
  interface report_cashFieldRefs {
    readonly id: FieldRef<"report_cash", 'String'>
    readonly createdAt: FieldRef<"report_cash", 'DateTime'>
    readonly updatedAt: FieldRef<"report_cash", 'DateTime'>
    readonly credit: FieldRef<"report_cash", 'BigInt'>
    readonly debit: FieldRef<"report_cash", 'BigInt'>
    readonly description: FieldRef<"report_cash", 'String'>
  }
    

  // Custom InputTypes
  /**
   * report_cash findUnique
   */
  export type report_cashFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
    /**
     * Filter, which report_cash to fetch.
     */
    where: report_cashWhereUniqueInput
  }

  /**
   * report_cash findUniqueOrThrow
   */
  export type report_cashFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
    /**
     * Filter, which report_cash to fetch.
     */
    where: report_cashWhereUniqueInput
  }

  /**
   * report_cash findFirst
   */
  export type report_cashFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
    /**
     * Filter, which report_cash to fetch.
     */
    where?: report_cashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_cashes to fetch.
     */
    orderBy?: report_cashOrderByWithRelationInput | report_cashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_cashes.
     */
    cursor?: report_cashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_cashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_cashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_cashes.
     */
    distinct?: Report_cashScalarFieldEnum | Report_cashScalarFieldEnum[]
  }

  /**
   * report_cash findFirstOrThrow
   */
  export type report_cashFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
    /**
     * Filter, which report_cash to fetch.
     */
    where?: report_cashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_cashes to fetch.
     */
    orderBy?: report_cashOrderByWithRelationInput | report_cashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_cashes.
     */
    cursor?: report_cashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_cashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_cashes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_cashes.
     */
    distinct?: Report_cashScalarFieldEnum | Report_cashScalarFieldEnum[]
  }

  /**
   * report_cash findMany
   */
  export type report_cashFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
    /**
     * Filter, which report_cashes to fetch.
     */
    where?: report_cashWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_cashes to fetch.
     */
    orderBy?: report_cashOrderByWithRelationInput | report_cashOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing report_cashes.
     */
    cursor?: report_cashWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_cashes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_cashes.
     */
    skip?: number
    distinct?: Report_cashScalarFieldEnum | Report_cashScalarFieldEnum[]
  }

  /**
   * report_cash create
   */
  export type report_cashCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
    /**
     * The data needed to create a report_cash.
     */
    data: XOR<report_cashCreateInput, report_cashUncheckedCreateInput>
  }

  /**
   * report_cash createMany
   */
  export type report_cashCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many report_cashes.
     */
    data: report_cashCreateManyInput | report_cashCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * report_cash update
   */
  export type report_cashUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
    /**
     * The data needed to update a report_cash.
     */
    data: XOR<report_cashUpdateInput, report_cashUncheckedUpdateInput>
    /**
     * Choose, which report_cash to update.
     */
    where: report_cashWhereUniqueInput
  }

  /**
   * report_cash updateMany
   */
  export type report_cashUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update report_cashes.
     */
    data: XOR<report_cashUpdateManyMutationInput, report_cashUncheckedUpdateManyInput>
    /**
     * Filter which report_cashes to update
     */
    where?: report_cashWhereInput
    /**
     * Limit how many report_cashes to update.
     */
    limit?: number
  }

  /**
   * report_cash upsert
   */
  export type report_cashUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
    /**
     * The filter to search for the report_cash to update in case it exists.
     */
    where: report_cashWhereUniqueInput
    /**
     * In case the report_cash found by the `where` argument doesn't exist, create a new report_cash with this data.
     */
    create: XOR<report_cashCreateInput, report_cashUncheckedCreateInput>
    /**
     * In case the report_cash was found with the provided `where` argument, update it with this data.
     */
    update: XOR<report_cashUpdateInput, report_cashUncheckedUpdateInput>
  }

  /**
   * report_cash delete
   */
  export type report_cashDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
    /**
     * Filter which report_cash to delete.
     */
    where: report_cashWhereUniqueInput
  }

  /**
   * report_cash deleteMany
   */
  export type report_cashDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report_cashes to delete
     */
    where?: report_cashWhereInput
    /**
     * Limit how many report_cashes to delete.
     */
    limit?: number
  }

  /**
   * report_cash without action
   */
  export type report_cashDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_cash
     */
    select?: report_cashSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_cash
     */
    omit?: report_cashOmit<ExtArgs> | null
  }


  /**
   * Model transactions
   */

  export type AggregateTransactions = {
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  export type TransactionsAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionsSumAggregateOutputType = {
    amount: bigint | null
  }

  export type TransactionsMinAggregateOutputType = {
    id: string | null
    account_id: string | null
    date: Date | null
    description: string | null
    amount: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.transactions_type | null
  }

  export type TransactionsMaxAggregateOutputType = {
    id: string | null
    account_id: string | null
    date: Date | null
    description: string | null
    amount: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
    type: $Enums.transactions_type | null
  }

  export type TransactionsCountAggregateOutputType = {
    id: number
    account_id: number
    date: number
    description: number
    amount: number
    createdAt: number
    updatedAt: number
    type: number
    _all: number
  }


  export type TransactionsAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionsSumAggregateInputType = {
    amount?: true
  }

  export type TransactionsMinAggregateInputType = {
    id?: true
    account_id?: true
    date?: true
    description?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type TransactionsMaxAggregateInputType = {
    id?: true
    account_id?: true
    date?: true
    description?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    type?: true
  }

  export type TransactionsCountAggregateInputType = {
    id?: true
    account_id?: true
    date?: true
    description?: true
    amount?: true
    createdAt?: true
    updatedAt?: true
    type?: true
    _all?: true
  }

  export type TransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to aggregate.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionsMaxAggregateInputType
  }

  export type GetTransactionsAggregateType<T extends TransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactions[P]>
      : GetScalarType<T[P], AggregateTransactions[P]>
  }




  export type transactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionsWhereInput
    orderBy?: transactionsOrderByWithAggregationInput | transactionsOrderByWithAggregationInput[]
    by: TransactionsScalarFieldEnum[] | TransactionsScalarFieldEnum
    having?: transactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionsCountAggregateInputType | true
    _avg?: TransactionsAvgAggregateInputType
    _sum?: TransactionsSumAggregateInputType
    _min?: TransactionsMinAggregateInputType
    _max?: TransactionsMaxAggregateInputType
  }

  export type TransactionsGroupByOutputType = {
    id: string
    account_id: string
    date: Date
    description: string
    amount: bigint
    createdAt: Date
    updatedAt: Date
    type: $Enums.transactions_type
    _count: TransactionsCountAggregateOutputType | null
    _avg: TransactionsAvgAggregateOutputType | null
    _sum: TransactionsSumAggregateOutputType | null
    _min: TransactionsMinAggregateOutputType | null
    _max: TransactionsMaxAggregateOutputType | null
  }

  type GetTransactionsGroupByPayload<T extends transactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionsGroupByOutputType[P]>
        }
      >
    >


  export type transactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    account_id?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
  }, ExtArgs["result"]["transactions"]>



  export type transactionsSelectScalar = {
    id?: boolean
    account_id?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    type?: boolean
  }

  export type transactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "account_id" | "date" | "description" | "amount" | "createdAt" | "updatedAt" | "type", ExtArgs["result"]["transactions"]>

  export type $transactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transactions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      account_id: string
      date: Date
      description: string
      amount: bigint
      createdAt: Date
      updatedAt: Date
      type: $Enums.transactions_type
    }, ExtArgs["result"]["transactions"]>
    composites: {}
  }

  type transactionsGetPayload<S extends boolean | null | undefined | transactionsDefaultArgs> = $Result.GetResult<Prisma.$transactionsPayload, S>

  type transactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionsCountAggregateInputType | true
    }

  export interface transactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transactions'], meta: { name: 'transactions' } }
    /**
     * Find zero or one Transactions that matches the filter.
     * @param {transactionsFindUniqueArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionsFindUniqueArgs>(args: SelectSubset<T, transactionsFindUniqueArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionsFindUniqueOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionsFindFirstArgs>(args?: SelectSubset<T, transactionsFindFirstArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindFirstOrThrowArgs} args - Arguments to find a Transactions
     * @example
     * // Get one Transactions
     * const transactions = await prisma.transactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transactions.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionsWithIdOnly = await prisma.transactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionsFindManyArgs>(args?: SelectSubset<T, transactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transactions.
     * @param {transactionsCreateArgs} args - Arguments to create a Transactions.
     * @example
     * // Create one Transactions
     * const Transactions = await prisma.transactions.create({
     *   data: {
     *     // ... data to create a Transactions
     *   }
     * })
     * 
     */
    create<T extends transactionsCreateArgs>(args: SelectSubset<T, transactionsCreateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionsCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transactions = await prisma.transactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionsCreateManyArgs>(args?: SelectSubset<T, transactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transactions.
     * @param {transactionsDeleteArgs} args - Arguments to delete one Transactions.
     * @example
     * // Delete one Transactions
     * const Transactions = await prisma.transactions.delete({
     *   where: {
     *     // ... filter to delete one Transactions
     *   }
     * })
     * 
     */
    delete<T extends transactionsDeleteArgs>(args: SelectSubset<T, transactionsDeleteArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transactions.
     * @param {transactionsUpdateArgs} args - Arguments to update one Transactions.
     * @example
     * // Update one Transactions
     * const transactions = await prisma.transactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionsUpdateArgs>(args: SelectSubset<T, transactionsUpdateArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionsDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionsDeleteManyArgs>(args?: SelectSubset<T, transactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transactions = await prisma.transactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionsUpdateManyArgs>(args: SelectSubset<T, transactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transactions.
     * @param {transactionsUpsertArgs} args - Arguments to update or create a Transactions.
     * @example
     * // Update or create a Transactions
     * const transactions = await prisma.transactions.upsert({
     *   create: {
     *     // ... data to create a Transactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transactions we want to update
     *   }
     * })
     */
    upsert<T extends transactionsUpsertArgs>(args: SelectSubset<T, transactionsUpsertArgs<ExtArgs>>): Prisma__transactionsClient<$Result.GetResult<Prisma.$transactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transactions.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionsCountArgs>(
      args?: Subset<T, transactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionsAggregateArgs>(args: Subset<T, TransactionsAggregateArgs>): Prisma.PrismaPromise<GetTransactionsAggregateType<T>>

    /**
     * Group by Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionsGroupByArgs} args - Group by arguments.
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
      T extends transactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionsGroupByArgs['orderBy'] }
        : { orderBy?: transactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transactions model
   */
  readonly fields: transactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the transactions model
   */
  interface transactionsFieldRefs {
    readonly id: FieldRef<"transactions", 'String'>
    readonly account_id: FieldRef<"transactions", 'String'>
    readonly date: FieldRef<"transactions", 'DateTime'>
    readonly description: FieldRef<"transactions", 'String'>
    readonly amount: FieldRef<"transactions", 'BigInt'>
    readonly createdAt: FieldRef<"transactions", 'DateTime'>
    readonly updatedAt: FieldRef<"transactions", 'DateTime'>
    readonly type: FieldRef<"transactions", 'transactions_type'>
  }
    

  // Custom InputTypes
  /**
   * transactions findUnique
   */
  export type transactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findUniqueOrThrow
   */
  export type transactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions findFirst
   */
  export type transactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findFirstOrThrow
   */
  export type transactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions findMany
   */
  export type transactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionsOrderByWithRelationInput | transactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionsScalarFieldEnum | TransactionsScalarFieldEnum[]
  }

  /**
   * transactions create
   */
  export type transactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data needed to create a transactions.
     */
    data: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
  }

  /**
   * transactions createMany
   */
  export type transactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionsCreateManyInput | transactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transactions update
   */
  export type transactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The data needed to update a transactions.
     */
    data: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
    /**
     * Choose, which transactions to update.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions updateMany
   */
  export type transactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionsUpdateManyMutationInput, transactionsUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transactions upsert
   */
  export type transactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * The filter to search for the transactions to update in case it exists.
     */
    where: transactionsWhereUniqueInput
    /**
     * In case the transactions found by the `where` argument doesn't exist, create a new transactions with this data.
     */
    create: XOR<transactionsCreateInput, transactionsUncheckedCreateInput>
    /**
     * In case the transactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionsUpdateInput, transactionsUncheckedUpdateInput>
  }

  /**
   * transactions delete
   */
  export type transactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
    /**
     * Filter which transactions to delete.
     */
    where: transactionsWhereUniqueInput
  }

  /**
   * transactions deleteMany
   */
  export type transactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionsWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transactions without action
   */
  export type transactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transactions
     */
    select?: transactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transactions
     */
    omit?: transactionsOmit<ExtArgs> | null
  }


  /**
   * Model transfers
   */

  export type AggregateTransfers = {
    _count: TransfersCountAggregateOutputType | null
    _avg: TransfersAvgAggregateOutputType | null
    _sum: TransfersSumAggregateOutputType | null
    _min: TransfersMinAggregateOutputType | null
    _max: TransfersMaxAggregateOutputType | null
  }

  export type TransfersAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransfersSumAggregateOutputType = {
    amount: bigint | null
  }

  export type TransfersMinAggregateOutputType = {
    id: string | null
    from_account_id: string | null
    to_account_id: string | null
    date: Date | null
    description: string | null
    amount: bigint | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransfersMaxAggregateOutputType = {
    id: string | null
    from_account_id: string | null
    to_account_id: string | null
    date: Date | null
    description: string | null
    amount: bigint | null
    tags: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransfersCountAggregateOutputType = {
    id: number
    from_account_id: number
    to_account_id: number
    date: number
    description: number
    amount: number
    tags: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransfersAvgAggregateInputType = {
    amount?: true
  }

  export type TransfersSumAggregateInputType = {
    amount?: true
  }

  export type TransfersMinAggregateInputType = {
    id?: true
    from_account_id?: true
    to_account_id?: true
    date?: true
    description?: true
    amount?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransfersMaxAggregateInputType = {
    id?: true
    from_account_id?: true
    to_account_id?: true
    date?: true
    description?: true
    amount?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransfersCountAggregateInputType = {
    id?: true
    from_account_id?: true
    to_account_id?: true
    date?: true
    description?: true
    amount?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransfersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transfers to aggregate.
     */
    where?: transfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfers to fetch.
     */
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transfers
    **/
    _count?: true | TransfersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransfersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransfersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransfersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransfersMaxAggregateInputType
  }

  export type GetTransfersAggregateType<T extends TransfersAggregateArgs> = {
        [P in keyof T & keyof AggregateTransfers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransfers[P]>
      : GetScalarType<T[P], AggregateTransfers[P]>
  }




  export type transfersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transfersWhereInput
    orderBy?: transfersOrderByWithAggregationInput | transfersOrderByWithAggregationInput[]
    by: TransfersScalarFieldEnum[] | TransfersScalarFieldEnum
    having?: transfersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransfersCountAggregateInputType | true
    _avg?: TransfersAvgAggregateInputType
    _sum?: TransfersSumAggregateInputType
    _min?: TransfersMinAggregateInputType
    _max?: TransfersMaxAggregateInputType
  }

  export type TransfersGroupByOutputType = {
    id: string
    from_account_id: string
    to_account_id: string
    date: Date
    description: string
    amount: bigint
    tags: string
    createdAt: Date
    updatedAt: Date
    _count: TransfersCountAggregateOutputType | null
    _avg: TransfersAvgAggregateOutputType | null
    _sum: TransfersSumAggregateOutputType | null
    _min: TransfersMinAggregateOutputType | null
    _max: TransfersMaxAggregateOutputType | null
  }

  type GetTransfersGroupByPayload<T extends transfersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransfersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransfersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransfersGroupByOutputType[P]>
            : GetScalarType<T[P], TransfersGroupByOutputType[P]>
        }
      >
    >


  export type transfersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from_account_id?: boolean
    to_account_id?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts_transfers_from_account_idToaccounts?: boolean | accountsDefaultArgs<ExtArgs>
    accounts_transfers_to_account_idToaccounts?: boolean | accountsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transfers"]>



  export type transfersSelectScalar = {
    id?: boolean
    from_account_id?: boolean
    to_account_id?: boolean
    date?: boolean
    description?: boolean
    amount?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type transfersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "from_account_id" | "to_account_id" | "date" | "description" | "amount" | "tags" | "createdAt" | "updatedAt", ExtArgs["result"]["transfers"]>
  export type transfersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts_transfers_from_account_idToaccounts?: boolean | accountsDefaultArgs<ExtArgs>
    accounts_transfers_to_account_idToaccounts?: boolean | accountsDefaultArgs<ExtArgs>
  }

  export type $transfersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transfers"
    objects: {
      accounts_transfers_from_account_idToaccounts: Prisma.$accountsPayload<ExtArgs>
      accounts_transfers_to_account_idToaccounts: Prisma.$accountsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      from_account_id: string
      to_account_id: string
      date: Date
      description: string
      amount: bigint
      tags: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transfers"]>
    composites: {}
  }

  type transfersGetPayload<S extends boolean | null | undefined | transfersDefaultArgs> = $Result.GetResult<Prisma.$transfersPayload, S>

  type transfersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transfersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransfersCountAggregateInputType | true
    }

  export interface transfersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transfers'], meta: { name: 'transfers' } }
    /**
     * Find zero or one Transfers that matches the filter.
     * @param {transfersFindUniqueArgs} args - Arguments to find a Transfers
     * @example
     * // Get one Transfers
     * const transfers = await prisma.transfers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transfersFindUniqueArgs>(args: SelectSubset<T, transfersFindUniqueArgs<ExtArgs>>): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transfers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transfersFindUniqueOrThrowArgs} args - Arguments to find a Transfers
     * @example
     * // Get one Transfers
     * const transfers = await prisma.transfers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transfersFindUniqueOrThrowArgs>(args: SelectSubset<T, transfersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersFindFirstArgs} args - Arguments to find a Transfers
     * @example
     * // Get one Transfers
     * const transfers = await prisma.transfers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transfersFindFirstArgs>(args?: SelectSubset<T, transfersFindFirstArgs<ExtArgs>>): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transfers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersFindFirstOrThrowArgs} args - Arguments to find a Transfers
     * @example
     * // Get one Transfers
     * const transfers = await prisma.transfers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transfersFindFirstOrThrowArgs>(args?: SelectSubset<T, transfersFindFirstOrThrowArgs<ExtArgs>>): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transfers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transfers
     * const transfers = await prisma.transfers.findMany()
     * 
     * // Get first 10 Transfers
     * const transfers = await prisma.transfers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transfersWithIdOnly = await prisma.transfers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transfersFindManyArgs>(args?: SelectSubset<T, transfersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transfers.
     * @param {transfersCreateArgs} args - Arguments to create a Transfers.
     * @example
     * // Create one Transfers
     * const Transfers = await prisma.transfers.create({
     *   data: {
     *     // ... data to create a Transfers
     *   }
     * })
     * 
     */
    create<T extends transfersCreateArgs>(args: SelectSubset<T, transfersCreateArgs<ExtArgs>>): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transfers.
     * @param {transfersCreateManyArgs} args - Arguments to create many Transfers.
     * @example
     * // Create many Transfers
     * const transfers = await prisma.transfers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transfersCreateManyArgs>(args?: SelectSubset<T, transfersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Transfers.
     * @param {transfersDeleteArgs} args - Arguments to delete one Transfers.
     * @example
     * // Delete one Transfers
     * const Transfers = await prisma.transfers.delete({
     *   where: {
     *     // ... filter to delete one Transfers
     *   }
     * })
     * 
     */
    delete<T extends transfersDeleteArgs>(args: SelectSubset<T, transfersDeleteArgs<ExtArgs>>): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transfers.
     * @param {transfersUpdateArgs} args - Arguments to update one Transfers.
     * @example
     * // Update one Transfers
     * const transfers = await prisma.transfers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transfersUpdateArgs>(args: SelectSubset<T, transfersUpdateArgs<ExtArgs>>): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transfers.
     * @param {transfersDeleteManyArgs} args - Arguments to filter Transfers to delete.
     * @example
     * // Delete a few Transfers
     * const { count } = await prisma.transfers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transfersDeleteManyArgs>(args?: SelectSubset<T, transfersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transfers
     * const transfers = await prisma.transfers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transfersUpdateManyArgs>(args: SelectSubset<T, transfersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transfers.
     * @param {transfersUpsertArgs} args - Arguments to update or create a Transfers.
     * @example
     * // Update or create a Transfers
     * const transfers = await prisma.transfers.upsert({
     *   create: {
     *     // ... data to create a Transfers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transfers we want to update
     *   }
     * })
     */
    upsert<T extends transfersUpsertArgs>(args: SelectSubset<T, transfersUpsertArgs<ExtArgs>>): Prisma__transfersClient<$Result.GetResult<Prisma.$transfersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersCountArgs} args - Arguments to filter Transfers to count.
     * @example
     * // Count the number of Transfers
     * const count = await prisma.transfers.count({
     *   where: {
     *     // ... the filter for the Transfers we want to count
     *   }
     * })
    **/
    count<T extends transfersCountArgs>(
      args?: Subset<T, transfersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransfersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransfersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransfersAggregateArgs>(args: Subset<T, TransfersAggregateArgs>): Prisma.PrismaPromise<GetTransfersAggregateType<T>>

    /**
     * Group by Transfers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transfersGroupByArgs} args - Group by arguments.
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
      T extends transfersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transfersGroupByArgs['orderBy'] }
        : { orderBy?: transfersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transfersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransfersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transfers model
   */
  readonly fields: transfersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transfers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transfersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts_transfers_from_account_idToaccounts<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accounts_transfers_to_account_idToaccounts<T extends accountsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountsDefaultArgs<ExtArgs>>): Prisma__accountsClient<$Result.GetResult<Prisma.$accountsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transfers model
   */
  interface transfersFieldRefs {
    readonly id: FieldRef<"transfers", 'String'>
    readonly from_account_id: FieldRef<"transfers", 'String'>
    readonly to_account_id: FieldRef<"transfers", 'String'>
    readonly date: FieldRef<"transfers", 'DateTime'>
    readonly description: FieldRef<"transfers", 'String'>
    readonly amount: FieldRef<"transfers", 'BigInt'>
    readonly tags: FieldRef<"transfers", 'String'>
    readonly createdAt: FieldRef<"transfers", 'DateTime'>
    readonly updatedAt: FieldRef<"transfers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transfers findUnique
   */
  export type transfersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where: transfersWhereUniqueInput
  }

  /**
   * transfers findUniqueOrThrow
   */
  export type transfersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where: transfersWhereUniqueInput
  }

  /**
   * transfers findFirst
   */
  export type transfersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where?: transfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfers to fetch.
     */
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transfers.
     */
    cursor?: transfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transfers.
     */
    distinct?: TransfersScalarFieldEnum | TransfersScalarFieldEnum[]
  }

  /**
   * transfers findFirstOrThrow
   */
  export type transfersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where?: transfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfers to fetch.
     */
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transfers.
     */
    cursor?: transfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transfers.
     */
    distinct?: TransfersScalarFieldEnum | TransfersScalarFieldEnum[]
  }

  /**
   * transfers findMany
   */
  export type transfersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    /**
     * Filter, which transfers to fetch.
     */
    where?: transfersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transfers to fetch.
     */
    orderBy?: transfersOrderByWithRelationInput | transfersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transfers.
     */
    cursor?: transfersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transfers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transfers.
     */
    skip?: number
    distinct?: TransfersScalarFieldEnum | TransfersScalarFieldEnum[]
  }

  /**
   * transfers create
   */
  export type transfersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    /**
     * The data needed to create a transfers.
     */
    data: XOR<transfersCreateInput, transfersUncheckedCreateInput>
  }

  /**
   * transfers createMany
   */
  export type transfersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transfers.
     */
    data: transfersCreateManyInput | transfersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transfers update
   */
  export type transfersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    /**
     * The data needed to update a transfers.
     */
    data: XOR<transfersUpdateInput, transfersUncheckedUpdateInput>
    /**
     * Choose, which transfers to update.
     */
    where: transfersWhereUniqueInput
  }

  /**
   * transfers updateMany
   */
  export type transfersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transfers.
     */
    data: XOR<transfersUpdateManyMutationInput, transfersUncheckedUpdateManyInput>
    /**
     * Filter which transfers to update
     */
    where?: transfersWhereInput
    /**
     * Limit how many transfers to update.
     */
    limit?: number
  }

  /**
   * transfers upsert
   */
  export type transfersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    /**
     * The filter to search for the transfers to update in case it exists.
     */
    where: transfersWhereUniqueInput
    /**
     * In case the transfers found by the `where` argument doesn't exist, create a new transfers with this data.
     */
    create: XOR<transfersCreateInput, transfersUncheckedCreateInput>
    /**
     * In case the transfers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transfersUpdateInput, transfersUncheckedUpdateInput>
  }

  /**
   * transfers delete
   */
  export type transfersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
    /**
     * Filter which transfers to delete.
     */
    where: transfersWhereUniqueInput
  }

  /**
   * transfers deleteMany
   */
  export type transfersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transfers to delete
     */
    where?: transfersWhereInput
    /**
     * Limit how many transfers to delete.
     */
    limit?: number
  }

  /**
   * transfers without action
   */
  export type transfersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transfers
     */
    select?: transfersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transfers
     */
    omit?: transfersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transfersInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.user_role | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.user_role | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    token: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    token?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    role: $Enums.user_role
    token: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    log?: boolean | users$logArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "token" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log?: boolean | users$logArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      log: Prisma.$logsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      role: $Enums.user_role
      token: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    log<T extends users$logArgs<ExtArgs> = {}>(args?: Subset<T, users$logArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'user_role'>
    readonly token: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.log
   */
  export type users$logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the logs
     */
    select?: logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the logs
     */
    omit?: logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: logsInclude<ExtArgs> | null
    where?: logsWhereInput
    orderBy?: logsOrderByWithRelationInput | logsOrderByWithRelationInput[]
    cursor?: logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsScalarFieldEnum | LogsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const AccountsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountsScalarFieldEnum = (typeof AccountsScalarFieldEnum)[keyof typeof AccountsScalarFieldEnum]


  export const Archive_installationScalarFieldEnum: {
    id: 'id',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    customer_id: 'customer_id',
    names: 'names'
  };

  export type Archive_installationScalarFieldEnum = (typeof Archive_installationScalarFieldEnum)[keyof typeof Archive_installationScalarFieldEnum]


  export const AssetsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssetsScalarFieldEnum = (typeof AssetsScalarFieldEnum)[keyof typeof AssetsScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    email: 'email',
    phone: 'phone',
    logo_url: 'logo_url',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    address: 'address',
    installation_date: 'installation_date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    city: 'city',
    code_postal: 'code_postal',
    company_id: 'company_id',
    country: 'country',
    fullname: 'fullname',
    group_id: 'group_id',
    location: 'location',
    password: 'password',
    state_region: 'state_region',
    surname: 'surname',
    tag: 'tag'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const GroupsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupsScalarFieldEnum = (typeof GroupsScalarFieldEnum)[keyof typeof GroupsScalarFieldEnum]


  export const LogsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LogsScalarFieldEnum = (typeof LogsScalarFieldEnum)[keyof typeof LogsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const Report_assetsScalarFieldEnum: {
    id: 'id',
    description: 'description',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Report_assetsScalarFieldEnum = (typeof Report_assetsScalarFieldEnum)[keyof typeof Report_assetsScalarFieldEnum]


  export const Report_cashScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    credit: 'credit',
    debit: 'debit',
    description: 'description'
  };

  export type Report_cashScalarFieldEnum = (typeof Report_cashScalarFieldEnum)[keyof typeof Report_cashScalarFieldEnum]


  export const TransactionsScalarFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    date: 'date',
    description: 'description',
    amount: 'amount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    type: 'type'
  };

  export type TransactionsScalarFieldEnum = (typeof TransactionsScalarFieldEnum)[keyof typeof TransactionsScalarFieldEnum]


  export const TransfersScalarFieldEnum: {
    id: 'id',
    from_account_id: 'from_account_id',
    to_account_id: 'to_account_id',
    date: 'date',
    description: 'description',
    amount: 'amount',
    tags: 'tags',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransfersScalarFieldEnum = (typeof TransfersScalarFieldEnum)[keyof typeof TransfersScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const accountsOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type accountsOrderByRelevanceFieldEnum = (typeof accountsOrderByRelevanceFieldEnum)[keyof typeof accountsOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const archive_installationOrderByRelevanceFieldEnum: {
    id: 'id',
    customer_id: 'customer_id',
    names: 'names'
  };

  export type archive_installationOrderByRelevanceFieldEnum = (typeof archive_installationOrderByRelevanceFieldEnum)[keyof typeof archive_installationOrderByRelevanceFieldEnum]


  export const assetsOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type assetsOrderByRelevanceFieldEnum = (typeof assetsOrderByRelevanceFieldEnum)[keyof typeof assetsOrderByRelevanceFieldEnum]


  export const companyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    email: 'email',
    phone: 'phone',
    logo_url: 'logo_url'
  };

  export type companyOrderByRelevanceFieldEnum = (typeof companyOrderByRelevanceFieldEnum)[keyof typeof companyOrderByRelevanceFieldEnum]


  export const customerOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    address: 'address',
    city: 'city',
    code_postal: 'code_postal',
    company_id: 'company_id',
    country: 'country',
    fullname: 'fullname',
    group_id: 'group_id',
    location: 'location',
    password: 'password',
    state_region: 'state_region',
    surname: 'surname',
    tag: 'tag'
  };

  export type customerOrderByRelevanceFieldEnum = (typeof customerOrderByRelevanceFieldEnum)[keyof typeof customerOrderByRelevanceFieldEnum]


  export const deviceOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type deviceOrderByRelevanceFieldEnum = (typeof deviceOrderByRelevanceFieldEnum)[keyof typeof deviceOrderByRelevanceFieldEnum]


  export const groupsOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type groupsOrderByRelevanceFieldEnum = (typeof groupsOrderByRelevanceFieldEnum)[keyof typeof groupsOrderByRelevanceFieldEnum]


  export const logsOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    action: 'action'
  };

  export type logsOrderByRelevanceFieldEnum = (typeof logsOrderByRelevanceFieldEnum)[keyof typeof logsOrderByRelevanceFieldEnum]


  export const productsOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type productsOrderByRelevanceFieldEnum = (typeof productsOrderByRelevanceFieldEnum)[keyof typeof productsOrderByRelevanceFieldEnum]


  export const report_assetsOrderByRelevanceFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type report_assetsOrderByRelevanceFieldEnum = (typeof report_assetsOrderByRelevanceFieldEnum)[keyof typeof report_assetsOrderByRelevanceFieldEnum]


  export const report_cashOrderByRelevanceFieldEnum: {
    id: 'id',
    description: 'description'
  };

  export type report_cashOrderByRelevanceFieldEnum = (typeof report_cashOrderByRelevanceFieldEnum)[keyof typeof report_cashOrderByRelevanceFieldEnum]


  export const transactionsOrderByRelevanceFieldEnum: {
    id: 'id',
    account_id: 'account_id',
    description: 'description'
  };

  export type transactionsOrderByRelevanceFieldEnum = (typeof transactionsOrderByRelevanceFieldEnum)[keyof typeof transactionsOrderByRelevanceFieldEnum]


  export const transfersOrderByRelevanceFieldEnum: {
    id: 'id',
    from_account_id: 'from_account_id',
    to_account_id: 'to_account_id',
    description: 'description',
    tags: 'tags'
  };

  export type transfersOrderByRelevanceFieldEnum = (typeof transfersOrderByRelevanceFieldEnum)[keyof typeof transfersOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    token: 'token'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'transactions_type'
   */
  export type Enumtransactions_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'transactions_type'>
    


  /**
   * Reference to a field of type 'user_role'
   */
  export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>
    
  /**
   * Deep Input Types
   */


  export type accountsWhereInput = {
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    id?: StringFilter<"accounts"> | string
    name?: StringFilter<"accounts"> | string
    createdAt?: DateTimeFilter<"accounts"> | Date | string
    updatedAt?: DateTimeFilter<"accounts"> | Date | string
    transfers_transfers_from_account_idToaccounts?: TransfersListRelationFilter
    transfers_transfers_to_account_idToaccounts?: TransfersListRelationFilter
  }

  export type accountsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transfers_transfers_from_account_idToaccounts?: transfersOrderByRelationAggregateInput
    transfers_transfers_to_account_idToaccounts?: transfersOrderByRelationAggregateInput
    _relevance?: accountsOrderByRelevanceInput
  }

  export type accountsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: accountsWhereInput | accountsWhereInput[]
    OR?: accountsWhereInput[]
    NOT?: accountsWhereInput | accountsWhereInput[]
    name?: StringFilter<"accounts"> | string
    createdAt?: DateTimeFilter<"accounts"> | Date | string
    updatedAt?: DateTimeFilter<"accounts"> | Date | string
    transfers_transfers_from_account_idToaccounts?: TransfersListRelationFilter
    transfers_transfers_to_account_idToaccounts?: TransfersListRelationFilter
  }, "id">

  export type accountsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: accountsCountOrderByAggregateInput
    _max?: accountsMaxOrderByAggregateInput
    _min?: accountsMinOrderByAggregateInput
  }

  export type accountsScalarWhereWithAggregatesInput = {
    AND?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    OR?: accountsScalarWhereWithAggregatesInput[]
    NOT?: accountsScalarWhereWithAggregatesInput | accountsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"accounts"> | string
    name?: StringWithAggregatesFilter<"accounts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"accounts"> | Date | string
  }

  export type archive_installationWhereInput = {
    AND?: archive_installationWhereInput | archive_installationWhereInput[]
    OR?: archive_installationWhereInput[]
    NOT?: archive_installationWhereInput | archive_installationWhereInput[]
    id?: StringFilter<"archive_installation"> | string
    price?: FloatFilter<"archive_installation"> | number
    createdAt?: DateTimeFilter<"archive_installation"> | Date | string
    updatedAt?: DateTimeFilter<"archive_installation"> | Date | string
    customer_id?: StringNullableFilter<"archive_installation"> | string | null
    names?: StringFilter<"archive_installation"> | string
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
  }

  export type archive_installationOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    names?: SortOrder
    customer?: customerOrderByWithRelationInput
    _relevance?: archive_installationOrderByRelevanceInput
  }

  export type archive_installationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: archive_installationWhereInput | archive_installationWhereInput[]
    OR?: archive_installationWhereInput[]
    NOT?: archive_installationWhereInput | archive_installationWhereInput[]
    price?: FloatFilter<"archive_installation"> | number
    createdAt?: DateTimeFilter<"archive_installation"> | Date | string
    updatedAt?: DateTimeFilter<"archive_installation"> | Date | string
    customer_id?: StringNullableFilter<"archive_installation"> | string | null
    names?: StringFilter<"archive_installation"> | string
    customer?: XOR<CustomerNullableScalarRelationFilter, customerWhereInput> | null
  }, "id">

  export type archive_installationOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    names?: SortOrder
    _count?: archive_installationCountOrderByAggregateInput
    _avg?: archive_installationAvgOrderByAggregateInput
    _max?: archive_installationMaxOrderByAggregateInput
    _min?: archive_installationMinOrderByAggregateInput
    _sum?: archive_installationSumOrderByAggregateInput
  }

  export type archive_installationScalarWhereWithAggregatesInput = {
    AND?: archive_installationScalarWhereWithAggregatesInput | archive_installationScalarWhereWithAggregatesInput[]
    OR?: archive_installationScalarWhereWithAggregatesInput[]
    NOT?: archive_installationScalarWhereWithAggregatesInput | archive_installationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"archive_installation"> | string
    price?: FloatWithAggregatesFilter<"archive_installation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"archive_installation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"archive_installation"> | Date | string
    customer_id?: StringNullableWithAggregatesFilter<"archive_installation"> | string | null
    names?: StringWithAggregatesFilter<"archive_installation"> | string
  }

  export type assetsWhereInput = {
    AND?: assetsWhereInput | assetsWhereInput[]
    OR?: assetsWhereInput[]
    NOT?: assetsWhereInput | assetsWhereInput[]
    id?: StringFilter<"assets"> | string
    name?: StringFilter<"assets"> | string
    quantity?: IntFilter<"assets"> | number
    price?: FloatFilter<"assets"> | number
    createdAt?: DateTimeFilter<"assets"> | Date | string
    updatedAt?: DateTimeFilter<"assets"> | Date | string
    report_assets?: XOR<Report_assetsNullableScalarRelationFilter, report_assetsWhereInput> | null
  }

  export type assetsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    report_assets?: report_assetsOrderByWithRelationInput
    _relevance?: assetsOrderByRelevanceInput
  }

  export type assetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: assetsWhereInput | assetsWhereInput[]
    OR?: assetsWhereInput[]
    NOT?: assetsWhereInput | assetsWhereInput[]
    name?: StringFilter<"assets"> | string
    quantity?: IntFilter<"assets"> | number
    price?: FloatFilter<"assets"> | number
    createdAt?: DateTimeFilter<"assets"> | Date | string
    updatedAt?: DateTimeFilter<"assets"> | Date | string
    report_assets?: XOR<Report_assetsNullableScalarRelationFilter, report_assetsWhereInput> | null
  }, "id">

  export type assetsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: assetsCountOrderByAggregateInput
    _avg?: assetsAvgOrderByAggregateInput
    _max?: assetsMaxOrderByAggregateInput
    _min?: assetsMinOrderByAggregateInput
    _sum?: assetsSumOrderByAggregateInput
  }

  export type assetsScalarWhereWithAggregatesInput = {
    AND?: assetsScalarWhereWithAggregatesInput | assetsScalarWhereWithAggregatesInput[]
    OR?: assetsScalarWhereWithAggregatesInput[]
    NOT?: assetsScalarWhereWithAggregatesInput | assetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"assets"> | string
    name?: StringWithAggregatesFilter<"assets"> | string
    quantity?: IntWithAggregatesFilter<"assets"> | number
    price?: FloatWithAggregatesFilter<"assets"> | number
    createdAt?: DateTimeWithAggregatesFilter<"assets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"assets"> | Date | string
  }

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    id?: StringFilter<"company"> | string
    name?: StringFilter<"company"> | string
    url?: StringFilter<"company"> | string
    email?: StringFilter<"company"> | string
    phone?: StringFilter<"company"> | string
    logo_url?: StringFilter<"company"> | string
    createdAt?: DateTimeFilter<"company"> | Date | string
    updatedAt?: DateTimeFilter<"company"> | Date | string
    customer?: CustomerListRelationFilter
  }

  export type companyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: customerOrderByRelationAggregateInput
    _relevance?: companyOrderByRelevanceInput
  }

  export type companyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: companyWhereInput | companyWhereInput[]
    OR?: companyWhereInput[]
    NOT?: companyWhereInput | companyWhereInput[]
    name?: StringFilter<"company"> | string
    url?: StringFilter<"company"> | string
    email?: StringFilter<"company"> | string
    phone?: StringFilter<"company"> | string
    logo_url?: StringFilter<"company"> | string
    createdAt?: DateTimeFilter<"company"> | Date | string
    updatedAt?: DateTimeFilter<"company"> | Date | string
    customer?: CustomerListRelationFilter
  }, "id">

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: companyCountOrderByAggregateInput
    _max?: companyMaxOrderByAggregateInput
    _min?: companyMinOrderByAggregateInput
  }

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    OR?: companyScalarWhereWithAggregatesInput[]
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"company"> | string
    name?: StringWithAggregatesFilter<"company"> | string
    url?: StringWithAggregatesFilter<"company"> | string
    email?: StringWithAggregatesFilter<"company"> | string
    phone?: StringWithAggregatesFilter<"company"> | string
    logo_url?: StringWithAggregatesFilter<"company"> | string
    createdAt?: DateTimeWithAggregatesFilter<"company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"company"> | Date | string
  }

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    id?: StringFilter<"customer"> | string
    email?: StringFilter<"customer"> | string
    phone?: StringFilter<"customer"> | string
    address?: StringFilter<"customer"> | string
    installation_date?: DateTimeFilter<"customer"> | Date | string
    createdAt?: DateTimeFilter<"customer"> | Date | string
    updatedAt?: DateTimeFilter<"customer"> | Date | string
    city?: StringFilter<"customer"> | string
    code_postal?: StringFilter<"customer"> | string
    company_id?: StringFilter<"customer"> | string
    country?: StringFilter<"customer"> | string
    fullname?: StringFilter<"customer"> | string
    group_id?: StringFilter<"customer"> | string
    location?: StringFilter<"customer"> | string
    password?: StringFilter<"customer"> | string
    state_region?: StringFilter<"customer"> | string
    surname?: StringFilter<"customer"> | string
    tag?: StringFilter<"customer"> | string
    archive_installation?: Archive_installationListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }

  export type customerOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    installation_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: SortOrder
    code_postal?: SortOrder
    company_id?: SortOrder
    country?: SortOrder
    fullname?: SortOrder
    group_id?: SortOrder
    location?: SortOrder
    password?: SortOrder
    state_region?: SortOrder
    surname?: SortOrder
    tag?: SortOrder
    archive_installation?: archive_installationOrderByRelationAggregateInput
    company?: companyOrderByWithRelationInput
    groups?: groupsOrderByWithRelationInput
    _relevance?: customerOrderByRelevanceInput
  }

  export type customerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: customerWhereInput | customerWhereInput[]
    OR?: customerWhereInput[]
    NOT?: customerWhereInput | customerWhereInput[]
    email?: StringFilter<"customer"> | string
    phone?: StringFilter<"customer"> | string
    address?: StringFilter<"customer"> | string
    installation_date?: DateTimeFilter<"customer"> | Date | string
    createdAt?: DateTimeFilter<"customer"> | Date | string
    updatedAt?: DateTimeFilter<"customer"> | Date | string
    city?: StringFilter<"customer"> | string
    code_postal?: StringFilter<"customer"> | string
    company_id?: StringFilter<"customer"> | string
    country?: StringFilter<"customer"> | string
    fullname?: StringFilter<"customer"> | string
    group_id?: StringFilter<"customer"> | string
    location?: StringFilter<"customer"> | string
    password?: StringFilter<"customer"> | string
    state_region?: StringFilter<"customer"> | string
    surname?: StringFilter<"customer"> | string
    tag?: StringFilter<"customer"> | string
    archive_installation?: Archive_installationListRelationFilter
    company?: XOR<CompanyScalarRelationFilter, companyWhereInput>
    groups?: XOR<GroupsScalarRelationFilter, groupsWhereInput>
  }, "id">

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    installation_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: SortOrder
    code_postal?: SortOrder
    company_id?: SortOrder
    country?: SortOrder
    fullname?: SortOrder
    group_id?: SortOrder
    location?: SortOrder
    password?: SortOrder
    state_region?: SortOrder
    surname?: SortOrder
    tag?: SortOrder
    _count?: customerCountOrderByAggregateInput
    _max?: customerMaxOrderByAggregateInput
    _min?: customerMinOrderByAggregateInput
  }

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    OR?: customerScalarWhereWithAggregatesInput[]
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"customer"> | string
    email?: StringWithAggregatesFilter<"customer"> | string
    phone?: StringWithAggregatesFilter<"customer"> | string
    address?: StringWithAggregatesFilter<"customer"> | string
    installation_date?: DateTimeWithAggregatesFilter<"customer"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"customer"> | Date | string
    city?: StringWithAggregatesFilter<"customer"> | string
    code_postal?: StringWithAggregatesFilter<"customer"> | string
    company_id?: StringWithAggregatesFilter<"customer"> | string
    country?: StringWithAggregatesFilter<"customer"> | string
    fullname?: StringWithAggregatesFilter<"customer"> | string
    group_id?: StringWithAggregatesFilter<"customer"> | string
    location?: StringWithAggregatesFilter<"customer"> | string
    password?: StringWithAggregatesFilter<"customer"> | string
    state_region?: StringWithAggregatesFilter<"customer"> | string
    surname?: StringWithAggregatesFilter<"customer"> | string
    tag?: StringWithAggregatesFilter<"customer"> | string
  }

  export type deviceWhereInput = {
    AND?: deviceWhereInput | deviceWhereInput[]
    OR?: deviceWhereInput[]
    NOT?: deviceWhereInput | deviceWhereInput[]
    id?: StringFilter<"device"> | string
    name?: StringFilter<"device"> | string
    createdAt?: DateTimeFilter<"device"> | Date | string
    updatedAt?: DateTimeFilter<"device"> | Date | string
  }

  export type deviceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: deviceOrderByRelevanceInput
  }

  export type deviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: deviceWhereInput | deviceWhereInput[]
    OR?: deviceWhereInput[]
    NOT?: deviceWhereInput | deviceWhereInput[]
    name?: StringFilter<"device"> | string
    createdAt?: DateTimeFilter<"device"> | Date | string
    updatedAt?: DateTimeFilter<"device"> | Date | string
  }, "id">

  export type deviceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: deviceCountOrderByAggregateInput
    _max?: deviceMaxOrderByAggregateInput
    _min?: deviceMinOrderByAggregateInput
  }

  export type deviceScalarWhereWithAggregatesInput = {
    AND?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[]
    OR?: deviceScalarWhereWithAggregatesInput[]
    NOT?: deviceScalarWhereWithAggregatesInput | deviceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"device"> | string
    name?: StringWithAggregatesFilter<"device"> | string
    createdAt?: DateTimeWithAggregatesFilter<"device"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"device"> | Date | string
  }

  export type groupsWhereInput = {
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    id?: StringFilter<"groups"> | string
    name?: StringFilter<"groups"> | string
    createdAt?: DateTimeFilter<"groups"> | Date | string
    updatedAt?: DateTimeFilter<"groups"> | Date | string
    customer?: CustomerListRelationFilter
  }

  export type groupsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: customerOrderByRelationAggregateInput
    _relevance?: groupsOrderByRelevanceInput
  }

  export type groupsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: groupsWhereInput | groupsWhereInput[]
    OR?: groupsWhereInput[]
    NOT?: groupsWhereInput | groupsWhereInput[]
    name?: StringFilter<"groups"> | string
    createdAt?: DateTimeFilter<"groups"> | Date | string
    updatedAt?: DateTimeFilter<"groups"> | Date | string
    customer?: CustomerListRelationFilter
  }, "id">

  export type groupsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: groupsCountOrderByAggregateInput
    _max?: groupsMaxOrderByAggregateInput
    _min?: groupsMinOrderByAggregateInput
  }

  export type groupsScalarWhereWithAggregatesInput = {
    AND?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    OR?: groupsScalarWhereWithAggregatesInput[]
    NOT?: groupsScalarWhereWithAggregatesInput | groupsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"groups"> | string
    name?: StringWithAggregatesFilter<"groups"> | string
    createdAt?: DateTimeWithAggregatesFilter<"groups"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"groups"> | Date | string
  }

  export type logsWhereInput = {
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    id?: StringFilter<"logs"> | string
    user_id?: StringFilter<"logs"> | string
    action?: StringFilter<"logs"> | string
    createdAt?: DateTimeFilter<"logs"> | Date | string
    updatedAt?: DateTimeFilter<"logs"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type logsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
    _relevance?: logsOrderByRelevanceInput
  }

  export type logsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: logsWhereInput | logsWhereInput[]
    OR?: logsWhereInput[]
    NOT?: logsWhereInput | logsWhereInput[]
    user_id?: StringFilter<"logs"> | string
    action?: StringFilter<"logs"> | string
    createdAt?: DateTimeFilter<"logs"> | Date | string
    updatedAt?: DateTimeFilter<"logs"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type logsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: logsCountOrderByAggregateInput
    _max?: logsMaxOrderByAggregateInput
    _min?: logsMinOrderByAggregateInput
  }

  export type logsScalarWhereWithAggregatesInput = {
    AND?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    OR?: logsScalarWhereWithAggregatesInput[]
    NOT?: logsScalarWhereWithAggregatesInput | logsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"logs"> | string
    user_id?: StringWithAggregatesFilter<"logs"> | string
    action?: StringWithAggregatesFilter<"logs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"logs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"logs"> | Date | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: StringFilter<"products"> | string
    name?: StringFilter<"products"> | string
    price?: BigIntFilter<"products"> | bigint | number
    description?: StringFilter<"products"> | string
    createdAt?: DateTimeFilter<"products"> | Date | string
    updatedAt?: DateTimeFilter<"products"> | Date | string
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: productsOrderByRelevanceInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    price?: BigIntFilter<"products"> | bigint | number
    description?: StringFilter<"products"> | string
    createdAt?: DateTimeFilter<"products"> | Date | string
    updatedAt?: DateTimeFilter<"products"> | Date | string
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"products"> | string
    name?: StringWithAggregatesFilter<"products"> | string
    price?: BigIntWithAggregatesFilter<"products"> | bigint | number
    description?: StringWithAggregatesFilter<"products"> | string
    createdAt?: DateTimeWithAggregatesFilter<"products"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"products"> | Date | string
  }

  export type report_assetsWhereInput = {
    AND?: report_assetsWhereInput | report_assetsWhereInput[]
    OR?: report_assetsWhereInput[]
    NOT?: report_assetsWhereInput | report_assetsWhereInput[]
    id?: StringFilter<"report_assets"> | string
    description?: StringFilter<"report_assets"> | string
    quantity?: BigIntFilter<"report_assets"> | bigint | number
    createdAt?: DateTimeFilter<"report_assets"> | Date | string
    updatedAt?: DateTimeFilter<"report_assets"> | Date | string
    assets?: XOR<AssetsScalarRelationFilter, assetsWhereInput>
  }

  export type report_assetsOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assets?: assetsOrderByWithRelationInput
    _relevance?: report_assetsOrderByRelevanceInput
  }

  export type report_assetsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: report_assetsWhereInput | report_assetsWhereInput[]
    OR?: report_assetsWhereInput[]
    NOT?: report_assetsWhereInput | report_assetsWhereInput[]
    description?: StringFilter<"report_assets"> | string
    quantity?: BigIntFilter<"report_assets"> | bigint | number
    createdAt?: DateTimeFilter<"report_assets"> | Date | string
    updatedAt?: DateTimeFilter<"report_assets"> | Date | string
    assets?: XOR<AssetsScalarRelationFilter, assetsWhereInput>
  }, "id">

  export type report_assetsOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: report_assetsCountOrderByAggregateInput
    _avg?: report_assetsAvgOrderByAggregateInput
    _max?: report_assetsMaxOrderByAggregateInput
    _min?: report_assetsMinOrderByAggregateInput
    _sum?: report_assetsSumOrderByAggregateInput
  }

  export type report_assetsScalarWhereWithAggregatesInput = {
    AND?: report_assetsScalarWhereWithAggregatesInput | report_assetsScalarWhereWithAggregatesInput[]
    OR?: report_assetsScalarWhereWithAggregatesInput[]
    NOT?: report_assetsScalarWhereWithAggregatesInput | report_assetsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"report_assets"> | string
    description?: StringWithAggregatesFilter<"report_assets"> | string
    quantity?: BigIntWithAggregatesFilter<"report_assets"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"report_assets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"report_assets"> | Date | string
  }

  export type report_cashWhereInput = {
    AND?: report_cashWhereInput | report_cashWhereInput[]
    OR?: report_cashWhereInput[]
    NOT?: report_cashWhereInput | report_cashWhereInput[]
    id?: StringFilter<"report_cash"> | string
    createdAt?: DateTimeFilter<"report_cash"> | Date | string
    updatedAt?: DateTimeFilter<"report_cash"> | Date | string
    credit?: BigIntFilter<"report_cash"> | bigint | number
    debit?: BigIntFilter<"report_cash"> | bigint | number
    description?: StringFilter<"report_cash"> | string
  }

  export type report_cashOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    description?: SortOrder
    _relevance?: report_cashOrderByRelevanceInput
  }

  export type report_cashWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: report_cashWhereInput | report_cashWhereInput[]
    OR?: report_cashWhereInput[]
    NOT?: report_cashWhereInput | report_cashWhereInput[]
    createdAt?: DateTimeFilter<"report_cash"> | Date | string
    updatedAt?: DateTimeFilter<"report_cash"> | Date | string
    credit?: BigIntFilter<"report_cash"> | bigint | number
    debit?: BigIntFilter<"report_cash"> | bigint | number
    description?: StringFilter<"report_cash"> | string
  }, "id">

  export type report_cashOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    description?: SortOrder
    _count?: report_cashCountOrderByAggregateInput
    _avg?: report_cashAvgOrderByAggregateInput
    _max?: report_cashMaxOrderByAggregateInput
    _min?: report_cashMinOrderByAggregateInput
    _sum?: report_cashSumOrderByAggregateInput
  }

  export type report_cashScalarWhereWithAggregatesInput = {
    AND?: report_cashScalarWhereWithAggregatesInput | report_cashScalarWhereWithAggregatesInput[]
    OR?: report_cashScalarWhereWithAggregatesInput[]
    NOT?: report_cashScalarWhereWithAggregatesInput | report_cashScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"report_cash"> | string
    createdAt?: DateTimeWithAggregatesFilter<"report_cash"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"report_cash"> | Date | string
    credit?: BigIntWithAggregatesFilter<"report_cash"> | bigint | number
    debit?: BigIntWithAggregatesFilter<"report_cash"> | bigint | number
    description?: StringWithAggregatesFilter<"report_cash"> | string
  }

  export type transactionsWhereInput = {
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    id?: StringFilter<"transactions"> | string
    account_id?: StringFilter<"transactions"> | string
    date?: DateTimeFilter<"transactions"> | Date | string
    description?: StringFilter<"transactions"> | string
    amount?: BigIntFilter<"transactions"> | bigint | number
    createdAt?: DateTimeFilter<"transactions"> | Date | string
    updatedAt?: DateTimeFilter<"transactions"> | Date | string
    type?: Enumtransactions_typeFilter<"transactions"> | $Enums.transactions_type
  }

  export type transactionsOrderByWithRelationInput = {
    id?: SortOrder
    account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    _relevance?: transactionsOrderByRelevanceInput
  }

  export type transactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transactionsWhereInput | transactionsWhereInput[]
    OR?: transactionsWhereInput[]
    NOT?: transactionsWhereInput | transactionsWhereInput[]
    account_id?: StringFilter<"transactions"> | string
    date?: DateTimeFilter<"transactions"> | Date | string
    description?: StringFilter<"transactions"> | string
    amount?: BigIntFilter<"transactions"> | bigint | number
    createdAt?: DateTimeFilter<"transactions"> | Date | string
    updatedAt?: DateTimeFilter<"transactions"> | Date | string
    type?: Enumtransactions_typeFilter<"transactions"> | $Enums.transactions_type
  }, "id">

  export type transactionsOrderByWithAggregationInput = {
    id?: SortOrder
    account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
    _count?: transactionsCountOrderByAggregateInput
    _avg?: transactionsAvgOrderByAggregateInput
    _max?: transactionsMaxOrderByAggregateInput
    _min?: transactionsMinOrderByAggregateInput
    _sum?: transactionsSumOrderByAggregateInput
  }

  export type transactionsScalarWhereWithAggregatesInput = {
    AND?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    OR?: transactionsScalarWhereWithAggregatesInput[]
    NOT?: transactionsScalarWhereWithAggregatesInput | transactionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transactions"> | string
    account_id?: StringWithAggregatesFilter<"transactions"> | string
    date?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    description?: StringWithAggregatesFilter<"transactions"> | string
    amount?: BigIntWithAggregatesFilter<"transactions"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"transactions"> | Date | string
    type?: Enumtransactions_typeWithAggregatesFilter<"transactions"> | $Enums.transactions_type
  }

  export type transfersWhereInput = {
    AND?: transfersWhereInput | transfersWhereInput[]
    OR?: transfersWhereInput[]
    NOT?: transfersWhereInput | transfersWhereInput[]
    id?: StringFilter<"transfers"> | string
    from_account_id?: StringFilter<"transfers"> | string
    to_account_id?: StringFilter<"transfers"> | string
    date?: DateTimeFilter<"transfers"> | Date | string
    description?: StringFilter<"transfers"> | string
    amount?: BigIntFilter<"transfers"> | bigint | number
    tags?: StringFilter<"transfers"> | string
    createdAt?: DateTimeFilter<"transfers"> | Date | string
    updatedAt?: DateTimeFilter<"transfers"> | Date | string
    accounts_transfers_from_account_idToaccounts?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
    accounts_transfers_to_account_idToaccounts?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
  }

  export type transfersOrderByWithRelationInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts_transfers_from_account_idToaccounts?: accountsOrderByWithRelationInput
    accounts_transfers_to_account_idToaccounts?: accountsOrderByWithRelationInput
    _relevance?: transfersOrderByRelevanceInput
  }

  export type transfersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: transfersWhereInput | transfersWhereInput[]
    OR?: transfersWhereInput[]
    NOT?: transfersWhereInput | transfersWhereInput[]
    from_account_id?: StringFilter<"transfers"> | string
    to_account_id?: StringFilter<"transfers"> | string
    date?: DateTimeFilter<"transfers"> | Date | string
    description?: StringFilter<"transfers"> | string
    amount?: BigIntFilter<"transfers"> | bigint | number
    tags?: StringFilter<"transfers"> | string
    createdAt?: DateTimeFilter<"transfers"> | Date | string
    updatedAt?: DateTimeFilter<"transfers"> | Date | string
    accounts_transfers_from_account_idToaccounts?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
    accounts_transfers_to_account_idToaccounts?: XOR<AccountsScalarRelationFilter, accountsWhereInput>
  }, "id">

  export type transfersOrderByWithAggregationInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: transfersCountOrderByAggregateInput
    _avg?: transfersAvgOrderByAggregateInput
    _max?: transfersMaxOrderByAggregateInput
    _min?: transfersMinOrderByAggregateInput
    _sum?: transfersSumOrderByAggregateInput
  }

  export type transfersScalarWhereWithAggregatesInput = {
    AND?: transfersScalarWhereWithAggregatesInput | transfersScalarWhereWithAggregatesInput[]
    OR?: transfersScalarWhereWithAggregatesInput[]
    NOT?: transfersScalarWhereWithAggregatesInput | transfersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transfers"> | string
    from_account_id?: StringWithAggregatesFilter<"transfers"> | string
    to_account_id?: StringWithAggregatesFilter<"transfers"> | string
    date?: DateTimeWithAggregatesFilter<"transfers"> | Date | string
    description?: StringWithAggregatesFilter<"transfers"> | string
    amount?: BigIntWithAggregatesFilter<"transfers"> | bigint | number
    tags?: StringWithAggregatesFilter<"transfers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"transfers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"transfers"> | Date | string
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    role?: Enumuser_roleFilter<"users"> | $Enums.user_role
    token?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    log?: LogsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    log?: logsOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringNullableFilter<"users"> | string | null
    password?: StringFilter<"users"> | string
    role?: Enumuser_roleFilter<"users"> | $Enums.user_role
    token?: StringNullableFilter<"users"> | string | null
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    log?: LogsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    token?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    password?: StringWithAggregatesFilter<"users"> | string
    role?: Enumuser_roleWithAggregatesFilter<"users"> | $Enums.user_role
    token?: StringNullableWithAggregatesFilter<"users"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type accountsCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
    transfers_transfers_from_account_idToaccounts?: transfersCreateNestedManyWithoutAccounts_transfers_from_account_idToaccountsInput
    transfers_transfers_to_account_idToaccounts?: transfersCreateNestedManyWithoutAccounts_transfers_to_account_idToaccountsInput
  }

  export type accountsUncheckedCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
    transfers_transfers_from_account_idToaccounts?: transfersUncheckedCreateNestedManyWithoutAccounts_transfers_from_account_idToaccountsInput
    transfers_transfers_to_account_idToaccounts?: transfersUncheckedCreateNestedManyWithoutAccounts_transfers_to_account_idToaccountsInput
  }

  export type accountsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers_transfers_from_account_idToaccounts?: transfersUpdateManyWithoutAccounts_transfers_from_account_idToaccountsNestedInput
    transfers_transfers_to_account_idToaccounts?: transfersUpdateManyWithoutAccounts_transfers_to_account_idToaccountsNestedInput
  }

  export type accountsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers_transfers_from_account_idToaccounts?: transfersUncheckedUpdateManyWithoutAccounts_transfers_from_account_idToaccountsNestedInput
    transfers_transfers_to_account_idToaccounts?: transfersUncheckedUpdateManyWithoutAccounts_transfers_to_account_idToaccountsNestedInput
  }

  export type accountsCreateManyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type accountsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type archive_installationCreateInput = {
    id: string
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    names: string
    customer?: customerCreateNestedOneWithoutArchive_installationInput
  }

  export type archive_installationUncheckedCreateInput = {
    id: string
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    customer_id?: string | null
    names: string
  }

  export type archive_installationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    names?: StringFieldUpdateOperationsInput | string
    customer?: customerUpdateOneWithoutArchive_installationNestedInput
  }

  export type archive_installationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    names?: StringFieldUpdateOperationsInput | string
  }

  export type archive_installationCreateManyInput = {
    id: string
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    customer_id?: string | null
    names: string
  }

  export type archive_installationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    names?: StringFieldUpdateOperationsInput | string
  }

  export type archive_installationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer_id?: NullableStringFieldUpdateOperationsInput | string | null
    names?: StringFieldUpdateOperationsInput | string
  }

  export type assetsCreateInput = {
    id: string
    name: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    report_assets?: report_assetsCreateNestedOneWithoutAssetsInput
  }

  export type assetsUncheckedCreateInput = {
    id: string
    name: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    report_assets?: report_assetsUncheckedCreateNestedOneWithoutAssetsInput
  }

  export type assetsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report_assets?: report_assetsUpdateOneWithoutAssetsNestedInput
  }

  export type assetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    report_assets?: report_assetsUncheckedUpdateOneWithoutAssetsNestedInput
  }

  export type assetsCreateManyInput = {
    id: string
    name: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type assetsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyCreateInput = {
    id: string
    name: string
    url: string
    email: string
    phone: string
    logo_url: string
    createdAt?: Date | string
    updatedAt: Date | string
    customer?: customerCreateNestedManyWithoutCompanyInput
  }

  export type companyUncheckedCreateInput = {
    id: string
    name: string
    url: string
    email: string
    phone: string
    logo_url: string
    createdAt?: Date | string
    updatedAt: Date | string
    customer?: customerUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateManyWithoutCompanyNestedInput
  }

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type companyCreateManyInput = {
    id: string
    name: string
    url: string
    email: string
    phone: string
    logo_url: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerCreateInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    country: string
    fullname: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
    archive_installation?: archive_installationCreateNestedManyWithoutCustomerInput
    company: companyCreateNestedOneWithoutCustomerInput
    groups: groupsCreateNestedOneWithoutCustomerInput
  }

  export type customerUncheckedCreateInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    company_id: string
    country: string
    fullname: string
    group_id: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
    archive_installation?: archive_installationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    archive_installation?: archive_installationUpdateManyWithoutCustomerNestedInput
    company?: companyUpdateOneRequiredWithoutCustomerNestedInput
    groups?: groupsUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    archive_installation?: archive_installationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerCreateManyInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    company_id: string
    country: string
    fullname: string
    group_id: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
  }

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type deviceCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type deviceUncheckedCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type deviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type deviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type deviceCreateManyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type deviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type deviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
    customer?: customerCreateNestedManyWithoutGroupsInput
  }

  export type groupsUncheckedCreateInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
    customer?: customerUncheckedCreateNestedManyWithoutGroupsInput
  }

  export type groupsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUpdateManyWithoutGroupsNestedInput
  }

  export type groupsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: customerUncheckedUpdateManyWithoutGroupsNestedInput
  }

  export type groupsCreateManyInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type groupsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsCreateInput = {
    id: string
    action: string
    createdAt?: Date | string
    updatedAt: Date | string
    user: usersCreateNestedOneWithoutLogInput
  }

  export type logsUncheckedCreateInput = {
    id: string
    user_id: string
    action: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type logsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutLogNestedInput
  }

  export type logsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsCreateManyInput = {
    id: string
    user_id: string
    action: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type logsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateInput = {
    id: string
    name: string
    price: bigint | number
    description: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type productsUncheckedCreateInput = {
    id: string
    name: string
    price: bigint | number
    description: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateManyInput = {
    id: string
    name: string
    price: bigint | number
    description: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type report_assetsCreateInput = {
    description: string
    quantity: bigint | number
    createdAt?: Date | string
    updatedAt: Date | string
    assets: assetsCreateNestedOneWithoutReport_assetsInput
  }

  export type report_assetsUncheckedCreateInput = {
    id: string
    description: string
    quantity: bigint | number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type report_assetsUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assets?: assetsUpdateOneRequiredWithoutReport_assetsNestedInput
  }

  export type report_assetsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type report_assetsCreateManyInput = {
    id: string
    description: string
    quantity: bigint | number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type report_assetsUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type report_assetsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type report_cashCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    credit: bigint | number
    debit: bigint | number
    description: string
  }

  export type report_cashUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    credit: bigint | number
    debit: bigint | number
    description: string
  }

  export type report_cashUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credit?: BigIntFieldUpdateOperationsInput | bigint | number
    debit?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type report_cashUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credit?: BigIntFieldUpdateOperationsInput | bigint | number
    debit?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type report_cashCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt: Date | string
    credit: bigint | number
    debit: bigint | number
    description: string
  }

  export type report_cashUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credit?: BigIntFieldUpdateOperationsInput | bigint | number
    debit?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type report_cashUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credit?: BigIntFieldUpdateOperationsInput | bigint | number
    debit?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type transactionsCreateInput = {
    id: string
    account_id: string
    date: Date | string
    description: string
    amount: bigint | number
    createdAt?: Date | string
    updatedAt: Date | string
    type: $Enums.transactions_type
  }

  export type transactionsUncheckedCreateInput = {
    id: string
    account_id: string
    date: Date | string
    description: string
    amount: bigint | number
    createdAt?: Date | string
    updatedAt: Date | string
    type: $Enums.transactions_type
  }

  export type transactionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
  }

  export type transactionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
  }

  export type transactionsCreateManyInput = {
    id: string
    account_id: string
    date: Date | string
    description: string
    amount: bigint | number
    createdAt?: Date | string
    updatedAt: Date | string
    type: $Enums.transactions_type
  }

  export type transactionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
  }

  export type transactionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: Enumtransactions_typeFieldUpdateOperationsInput | $Enums.transactions_type
  }

  export type transfersCreateInput = {
    id: string
    date: Date | string
    description: string
    amount: bigint | number
    tags: string
    createdAt?: Date | string
    updatedAt: Date | string
    accounts_transfers_from_account_idToaccounts: accountsCreateNestedOneWithoutTransfers_transfers_from_account_idToaccountsInput
    accounts_transfers_to_account_idToaccounts: accountsCreateNestedOneWithoutTransfers_transfers_to_account_idToaccountsInput
  }

  export type transfersUncheckedCreateInput = {
    id: string
    from_account_id: string
    to_account_id: string
    date: Date | string
    description: string
    amount: bigint | number
    tags: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type transfersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts_transfers_from_account_idToaccounts?: accountsUpdateOneRequiredWithoutTransfers_transfers_from_account_idToaccountsNestedInput
    accounts_transfers_to_account_idToaccounts?: accountsUpdateOneRequiredWithoutTransfers_transfers_to_account_idToaccountsNestedInput
  }

  export type transfersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transfersCreateManyInput = {
    id: string
    from_account_id: string
    to_account_id: string
    date: Date | string
    description: string
    amount: bigint | number
    tags: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type transfersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transfersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersCreateInput = {
    id: string
    email: string
    name?: string | null
    password: string
    role: $Enums.user_role
    token?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    log?: logsCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    email: string
    name?: string | null
    password: string
    role: $Enums.user_role
    token?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    log?: logsUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: logsUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    log?: logsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    email: string
    name?: string | null
    password: string
    role: $Enums.user_role
    token?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TransfersListRelationFilter = {
    every?: transfersWhereInput
    some?: transfersWhereInput
    none?: transfersWhereInput
  }

  export type transfersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountsOrderByRelevanceInput = {
    fields: accountsOrderByRelevanceFieldEnum | accountsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type accountsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type CustomerNullableScalarRelationFilter = {
    is?: customerWhereInput | null
    isNot?: customerWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type archive_installationOrderByRelevanceInput = {
    fields: archive_installationOrderByRelevanceFieldEnum | archive_installationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type archive_installationCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_id?: SortOrder
    names?: SortOrder
  }

  export type archive_installationAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type archive_installationMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_id?: SortOrder
    names?: SortOrder
  }

  export type archive_installationMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer_id?: SortOrder
    names?: SortOrder
  }

  export type archive_installationSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type Report_assetsNullableScalarRelationFilter = {
    is?: report_assetsWhereInput | null
    isNot?: report_assetsWhereInput | null
  }

  export type assetsOrderByRelevanceInput = {
    fields: assetsOrderByRelevanceFieldEnum | assetsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type assetsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type assetsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type assetsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type assetsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type assetsSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
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

  export type CustomerListRelationFilter = {
    every?: customerWhereInput
    some?: customerWhereInput
    none?: customerWhereInput
  }

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type companyOrderByRelevanceInput = {
    fields: companyOrderByRelevanceFieldEnum | companyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    logo_url?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Archive_installationListRelationFilter = {
    every?: archive_installationWhereInput
    some?: archive_installationWhereInput
    none?: archive_installationWhereInput
  }

  export type CompanyScalarRelationFilter = {
    is?: companyWhereInput
    isNot?: companyWhereInput
  }

  export type GroupsScalarRelationFilter = {
    is?: groupsWhereInput
    isNot?: groupsWhereInput
  }

  export type archive_installationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customerOrderByRelevanceInput = {
    fields: customerOrderByRelevanceFieldEnum | customerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    installation_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: SortOrder
    code_postal?: SortOrder
    company_id?: SortOrder
    country?: SortOrder
    fullname?: SortOrder
    group_id?: SortOrder
    location?: SortOrder
    password?: SortOrder
    state_region?: SortOrder
    surname?: SortOrder
    tag?: SortOrder
  }

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    installation_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: SortOrder
    code_postal?: SortOrder
    company_id?: SortOrder
    country?: SortOrder
    fullname?: SortOrder
    group_id?: SortOrder
    location?: SortOrder
    password?: SortOrder
    state_region?: SortOrder
    surname?: SortOrder
    tag?: SortOrder
  }

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    installation_date?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    city?: SortOrder
    code_postal?: SortOrder
    company_id?: SortOrder
    country?: SortOrder
    fullname?: SortOrder
    group_id?: SortOrder
    location?: SortOrder
    password?: SortOrder
    state_region?: SortOrder
    surname?: SortOrder
    tag?: SortOrder
  }

  export type deviceOrderByRelevanceInput = {
    fields: deviceOrderByRelevanceFieldEnum | deviceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type deviceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type deviceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type deviceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupsOrderByRelevanceInput = {
    fields: groupsOrderByRelevanceFieldEnum | groupsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type groupsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type groupsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type logsOrderByRelevanceInput = {
    fields: logsOrderByRelevanceFieldEnum | logsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type logsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type logsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type logsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type productsOrderByRelevanceInput = {
    fields: productsOrderByRelevanceFieldEnum | productsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type AssetsScalarRelationFilter = {
    is?: assetsWhereInput
    isNot?: assetsWhereInput
  }

  export type report_assetsOrderByRelevanceInput = {
    fields: report_assetsOrderByRelevanceFieldEnum | report_assetsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type report_assetsCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type report_assetsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type report_assetsMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type report_assetsMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type report_assetsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type report_cashOrderByRelevanceInput = {
    fields: report_cashOrderByRelevanceFieldEnum | report_cashOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type report_cashCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    description?: SortOrder
  }

  export type report_cashAvgOrderByAggregateInput = {
    credit?: SortOrder
    debit?: SortOrder
  }

  export type report_cashMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    description?: SortOrder
  }

  export type report_cashMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    credit?: SortOrder
    debit?: SortOrder
    description?: SortOrder
  }

  export type report_cashSumOrderByAggregateInput = {
    credit?: SortOrder
    debit?: SortOrder
  }

  export type Enumtransactions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeFilter<$PrismaModel> | $Enums.transactions_type
  }

  export type transactionsOrderByRelevanceInput = {
    fields: transactionsOrderByRelevanceFieldEnum | transactionsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type transactionsCountOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type transactionsAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type transactionsMinOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    type?: SortOrder
  }

  export type transactionsSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type Enumtransactions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeWithAggregatesFilter<$PrismaModel> | $Enums.transactions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransactions_typeFilter<$PrismaModel>
    _max?: NestedEnumtransactions_typeFilter<$PrismaModel>
  }

  export type AccountsScalarRelationFilter = {
    is?: accountsWhereInput
    isNot?: accountsWhereInput
  }

  export type transfersOrderByRelevanceInput = {
    fields: transfersOrderByRelevanceFieldEnum | transfersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type transfersCountOrderByAggregateInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transfersAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transfersMaxOrderByAggregateInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transfersMinOrderByAggregateInput = {
    id?: SortOrder
    from_account_id?: SortOrder
    to_account_id?: SortOrder
    date?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transfersSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type Enumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type LogsListRelationFilter = {
    every?: logsWhereInput
    some?: logsWhereInput
    none?: logsWhereInput
  }

  export type logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Enumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type transfersCreateNestedManyWithoutAccounts_transfers_from_account_idToaccountsInput = {
    create?: XOR<transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput> | transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput[] | transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput[]
    connectOrCreate?: transfersCreateOrConnectWithoutAccounts_transfers_from_account_idToaccountsInput | transfersCreateOrConnectWithoutAccounts_transfers_from_account_idToaccountsInput[]
    createMany?: transfersCreateManyAccounts_transfers_from_account_idToaccountsInputEnvelope
    connect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
  }

  export type transfersCreateNestedManyWithoutAccounts_transfers_to_account_idToaccountsInput = {
    create?: XOR<transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput> | transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput[] | transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput[]
    connectOrCreate?: transfersCreateOrConnectWithoutAccounts_transfers_to_account_idToaccountsInput | transfersCreateOrConnectWithoutAccounts_transfers_to_account_idToaccountsInput[]
    createMany?: transfersCreateManyAccounts_transfers_to_account_idToaccountsInputEnvelope
    connect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
  }

  export type transfersUncheckedCreateNestedManyWithoutAccounts_transfers_from_account_idToaccountsInput = {
    create?: XOR<transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput> | transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput[] | transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput[]
    connectOrCreate?: transfersCreateOrConnectWithoutAccounts_transfers_from_account_idToaccountsInput | transfersCreateOrConnectWithoutAccounts_transfers_from_account_idToaccountsInput[]
    createMany?: transfersCreateManyAccounts_transfers_from_account_idToaccountsInputEnvelope
    connect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
  }

  export type transfersUncheckedCreateNestedManyWithoutAccounts_transfers_to_account_idToaccountsInput = {
    create?: XOR<transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput> | transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput[] | transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput[]
    connectOrCreate?: transfersCreateOrConnectWithoutAccounts_transfers_to_account_idToaccountsInput | transfersCreateOrConnectWithoutAccounts_transfers_to_account_idToaccountsInput[]
    createMany?: transfersCreateManyAccounts_transfers_to_account_idToaccountsInputEnvelope
    connect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type transfersUpdateManyWithoutAccounts_transfers_from_account_idToaccountsNestedInput = {
    create?: XOR<transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput> | transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput[] | transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput[]
    connectOrCreate?: transfersCreateOrConnectWithoutAccounts_transfers_from_account_idToaccountsInput | transfersCreateOrConnectWithoutAccounts_transfers_from_account_idToaccountsInput[]
    upsert?: transfersUpsertWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput | transfersUpsertWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput[]
    createMany?: transfersCreateManyAccounts_transfers_from_account_idToaccountsInputEnvelope
    set?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    disconnect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    delete?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    connect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    update?: transfersUpdateWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput | transfersUpdateWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput[]
    updateMany?: transfersUpdateManyWithWhereWithoutAccounts_transfers_from_account_idToaccountsInput | transfersUpdateManyWithWhereWithoutAccounts_transfers_from_account_idToaccountsInput[]
    deleteMany?: transfersScalarWhereInput | transfersScalarWhereInput[]
  }

  export type transfersUpdateManyWithoutAccounts_transfers_to_account_idToaccountsNestedInput = {
    create?: XOR<transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput> | transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput[] | transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput[]
    connectOrCreate?: transfersCreateOrConnectWithoutAccounts_transfers_to_account_idToaccountsInput | transfersCreateOrConnectWithoutAccounts_transfers_to_account_idToaccountsInput[]
    upsert?: transfersUpsertWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput | transfersUpsertWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput[]
    createMany?: transfersCreateManyAccounts_transfers_to_account_idToaccountsInputEnvelope
    set?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    disconnect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    delete?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    connect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    update?: transfersUpdateWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput | transfersUpdateWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput[]
    updateMany?: transfersUpdateManyWithWhereWithoutAccounts_transfers_to_account_idToaccountsInput | transfersUpdateManyWithWhereWithoutAccounts_transfers_to_account_idToaccountsInput[]
    deleteMany?: transfersScalarWhereInput | transfersScalarWhereInput[]
  }

  export type transfersUncheckedUpdateManyWithoutAccounts_transfers_from_account_idToaccountsNestedInput = {
    create?: XOR<transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput> | transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput[] | transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput[]
    connectOrCreate?: transfersCreateOrConnectWithoutAccounts_transfers_from_account_idToaccountsInput | transfersCreateOrConnectWithoutAccounts_transfers_from_account_idToaccountsInput[]
    upsert?: transfersUpsertWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput | transfersUpsertWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput[]
    createMany?: transfersCreateManyAccounts_transfers_from_account_idToaccountsInputEnvelope
    set?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    disconnect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    delete?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    connect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    update?: transfersUpdateWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput | transfersUpdateWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput[]
    updateMany?: transfersUpdateManyWithWhereWithoutAccounts_transfers_from_account_idToaccountsInput | transfersUpdateManyWithWhereWithoutAccounts_transfers_from_account_idToaccountsInput[]
    deleteMany?: transfersScalarWhereInput | transfersScalarWhereInput[]
  }

  export type transfersUncheckedUpdateManyWithoutAccounts_transfers_to_account_idToaccountsNestedInput = {
    create?: XOR<transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput> | transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput[] | transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput[]
    connectOrCreate?: transfersCreateOrConnectWithoutAccounts_transfers_to_account_idToaccountsInput | transfersCreateOrConnectWithoutAccounts_transfers_to_account_idToaccountsInput[]
    upsert?: transfersUpsertWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput | transfersUpsertWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput[]
    createMany?: transfersCreateManyAccounts_transfers_to_account_idToaccountsInputEnvelope
    set?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    disconnect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    delete?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    connect?: transfersWhereUniqueInput | transfersWhereUniqueInput[]
    update?: transfersUpdateWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput | transfersUpdateWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput[]
    updateMany?: transfersUpdateManyWithWhereWithoutAccounts_transfers_to_account_idToaccountsInput | transfersUpdateManyWithWhereWithoutAccounts_transfers_to_account_idToaccountsInput[]
    deleteMany?: transfersScalarWhereInput | transfersScalarWhereInput[]
  }

  export type customerCreateNestedOneWithoutArchive_installationInput = {
    create?: XOR<customerCreateWithoutArchive_installationInput, customerUncheckedCreateWithoutArchive_installationInput>
    connectOrCreate?: customerCreateOrConnectWithoutArchive_installationInput
    connect?: customerWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type customerUpdateOneWithoutArchive_installationNestedInput = {
    create?: XOR<customerCreateWithoutArchive_installationInput, customerUncheckedCreateWithoutArchive_installationInput>
    connectOrCreate?: customerCreateOrConnectWithoutArchive_installationInput
    upsert?: customerUpsertWithoutArchive_installationInput
    disconnect?: customerWhereInput | boolean
    delete?: customerWhereInput | boolean
    connect?: customerWhereUniqueInput
    update?: XOR<XOR<customerUpdateToOneWithWhereWithoutArchive_installationInput, customerUpdateWithoutArchive_installationInput>, customerUncheckedUpdateWithoutArchive_installationInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type report_assetsCreateNestedOneWithoutAssetsInput = {
    create?: XOR<report_assetsCreateWithoutAssetsInput, report_assetsUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: report_assetsCreateOrConnectWithoutAssetsInput
    connect?: report_assetsWhereUniqueInput
  }

  export type report_assetsUncheckedCreateNestedOneWithoutAssetsInput = {
    create?: XOR<report_assetsCreateWithoutAssetsInput, report_assetsUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: report_assetsCreateOrConnectWithoutAssetsInput
    connect?: report_assetsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type report_assetsUpdateOneWithoutAssetsNestedInput = {
    create?: XOR<report_assetsCreateWithoutAssetsInput, report_assetsUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: report_assetsCreateOrConnectWithoutAssetsInput
    upsert?: report_assetsUpsertWithoutAssetsInput
    disconnect?: report_assetsWhereInput | boolean
    delete?: report_assetsWhereInput | boolean
    connect?: report_assetsWhereUniqueInput
    update?: XOR<XOR<report_assetsUpdateToOneWithWhereWithoutAssetsInput, report_assetsUpdateWithoutAssetsInput>, report_assetsUncheckedUpdateWithoutAssetsInput>
  }

  export type report_assetsUncheckedUpdateOneWithoutAssetsNestedInput = {
    create?: XOR<report_assetsCreateWithoutAssetsInput, report_assetsUncheckedCreateWithoutAssetsInput>
    connectOrCreate?: report_assetsCreateOrConnectWithoutAssetsInput
    upsert?: report_assetsUpsertWithoutAssetsInput
    disconnect?: report_assetsWhereInput | boolean
    delete?: report_assetsWhereInput | boolean
    connect?: report_assetsWhereUniqueInput
    update?: XOR<XOR<report_assetsUpdateToOneWithWhereWithoutAssetsInput, report_assetsUpdateWithoutAssetsInput>, report_assetsUncheckedUpdateWithoutAssetsInput>
  }

  export type customerCreateNestedManyWithoutCompanyInput = {
    create?: XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput> | customerCreateWithoutCompanyInput[] | customerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: customerCreateOrConnectWithoutCompanyInput | customerCreateOrConnectWithoutCompanyInput[]
    createMany?: customerCreateManyCompanyInputEnvelope
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[]
  }

  export type customerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput> | customerCreateWithoutCompanyInput[] | customerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: customerCreateOrConnectWithoutCompanyInput | customerCreateOrConnectWithoutCompanyInput[]
    createMany?: customerCreateManyCompanyInputEnvelope
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[]
  }

  export type customerUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput> | customerCreateWithoutCompanyInput[] | customerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: customerCreateOrConnectWithoutCompanyInput | customerCreateOrConnectWithoutCompanyInput[]
    upsert?: customerUpsertWithWhereUniqueWithoutCompanyInput | customerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: customerCreateManyCompanyInputEnvelope
    set?: customerWhereUniqueInput | customerWhereUniqueInput[]
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[]
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[]
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[]
    update?: customerUpdateWithWhereUniqueWithoutCompanyInput | customerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: customerUpdateManyWithWhereWithoutCompanyInput | customerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[]
  }

  export type customerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput> | customerCreateWithoutCompanyInput[] | customerUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: customerCreateOrConnectWithoutCompanyInput | customerCreateOrConnectWithoutCompanyInput[]
    upsert?: customerUpsertWithWhereUniqueWithoutCompanyInput | customerUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: customerCreateManyCompanyInputEnvelope
    set?: customerWhereUniqueInput | customerWhereUniqueInput[]
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[]
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[]
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[]
    update?: customerUpdateWithWhereUniqueWithoutCompanyInput | customerUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: customerUpdateManyWithWhereWithoutCompanyInput | customerUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[]
  }

  export type archive_installationCreateNestedManyWithoutCustomerInput = {
    create?: XOR<archive_installationCreateWithoutCustomerInput, archive_installationUncheckedCreateWithoutCustomerInput> | archive_installationCreateWithoutCustomerInput[] | archive_installationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: archive_installationCreateOrConnectWithoutCustomerInput | archive_installationCreateOrConnectWithoutCustomerInput[]
    createMany?: archive_installationCreateManyCustomerInputEnvelope
    connect?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
  }

  export type companyCreateNestedOneWithoutCustomerInput = {
    create?: XOR<companyCreateWithoutCustomerInput, companyUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: companyCreateOrConnectWithoutCustomerInput
    connect?: companyWhereUniqueInput
  }

  export type groupsCreateNestedOneWithoutCustomerInput = {
    create?: XOR<groupsCreateWithoutCustomerInput, groupsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: groupsCreateOrConnectWithoutCustomerInput
    connect?: groupsWhereUniqueInput
  }

  export type archive_installationUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<archive_installationCreateWithoutCustomerInput, archive_installationUncheckedCreateWithoutCustomerInput> | archive_installationCreateWithoutCustomerInput[] | archive_installationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: archive_installationCreateOrConnectWithoutCustomerInput | archive_installationCreateOrConnectWithoutCustomerInput[]
    createMany?: archive_installationCreateManyCustomerInputEnvelope
    connect?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
  }

  export type archive_installationUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<archive_installationCreateWithoutCustomerInput, archive_installationUncheckedCreateWithoutCustomerInput> | archive_installationCreateWithoutCustomerInput[] | archive_installationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: archive_installationCreateOrConnectWithoutCustomerInput | archive_installationCreateOrConnectWithoutCustomerInput[]
    upsert?: archive_installationUpsertWithWhereUniqueWithoutCustomerInput | archive_installationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: archive_installationCreateManyCustomerInputEnvelope
    set?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
    disconnect?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
    delete?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
    connect?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
    update?: archive_installationUpdateWithWhereUniqueWithoutCustomerInput | archive_installationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: archive_installationUpdateManyWithWhereWithoutCustomerInput | archive_installationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: archive_installationScalarWhereInput | archive_installationScalarWhereInput[]
  }

  export type companyUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<companyCreateWithoutCustomerInput, companyUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: companyCreateOrConnectWithoutCustomerInput
    upsert?: companyUpsertWithoutCustomerInput
    connect?: companyWhereUniqueInput
    update?: XOR<XOR<companyUpdateToOneWithWhereWithoutCustomerInput, companyUpdateWithoutCustomerInput>, companyUncheckedUpdateWithoutCustomerInput>
  }

  export type groupsUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<groupsCreateWithoutCustomerInput, groupsUncheckedCreateWithoutCustomerInput>
    connectOrCreate?: groupsCreateOrConnectWithoutCustomerInput
    upsert?: groupsUpsertWithoutCustomerInput
    connect?: groupsWhereUniqueInput
    update?: XOR<XOR<groupsUpdateToOneWithWhereWithoutCustomerInput, groupsUpdateWithoutCustomerInput>, groupsUncheckedUpdateWithoutCustomerInput>
  }

  export type archive_installationUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<archive_installationCreateWithoutCustomerInput, archive_installationUncheckedCreateWithoutCustomerInput> | archive_installationCreateWithoutCustomerInput[] | archive_installationUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: archive_installationCreateOrConnectWithoutCustomerInput | archive_installationCreateOrConnectWithoutCustomerInput[]
    upsert?: archive_installationUpsertWithWhereUniqueWithoutCustomerInput | archive_installationUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: archive_installationCreateManyCustomerInputEnvelope
    set?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
    disconnect?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
    delete?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
    connect?: archive_installationWhereUniqueInput | archive_installationWhereUniqueInput[]
    update?: archive_installationUpdateWithWhereUniqueWithoutCustomerInput | archive_installationUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: archive_installationUpdateManyWithWhereWithoutCustomerInput | archive_installationUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: archive_installationScalarWhereInput | archive_installationScalarWhereInput[]
  }

  export type customerCreateNestedManyWithoutGroupsInput = {
    create?: XOR<customerCreateWithoutGroupsInput, customerUncheckedCreateWithoutGroupsInput> | customerCreateWithoutGroupsInput[] | customerUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: customerCreateOrConnectWithoutGroupsInput | customerCreateOrConnectWithoutGroupsInput[]
    createMany?: customerCreateManyGroupsInputEnvelope
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[]
  }

  export type customerUncheckedCreateNestedManyWithoutGroupsInput = {
    create?: XOR<customerCreateWithoutGroupsInput, customerUncheckedCreateWithoutGroupsInput> | customerCreateWithoutGroupsInput[] | customerUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: customerCreateOrConnectWithoutGroupsInput | customerCreateOrConnectWithoutGroupsInput[]
    createMany?: customerCreateManyGroupsInputEnvelope
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[]
  }

  export type customerUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<customerCreateWithoutGroupsInput, customerUncheckedCreateWithoutGroupsInput> | customerCreateWithoutGroupsInput[] | customerUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: customerCreateOrConnectWithoutGroupsInput | customerCreateOrConnectWithoutGroupsInput[]
    upsert?: customerUpsertWithWhereUniqueWithoutGroupsInput | customerUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: customerCreateManyGroupsInputEnvelope
    set?: customerWhereUniqueInput | customerWhereUniqueInput[]
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[]
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[]
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[]
    update?: customerUpdateWithWhereUniqueWithoutGroupsInput | customerUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: customerUpdateManyWithWhereWithoutGroupsInput | customerUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[]
  }

  export type customerUncheckedUpdateManyWithoutGroupsNestedInput = {
    create?: XOR<customerCreateWithoutGroupsInput, customerUncheckedCreateWithoutGroupsInput> | customerCreateWithoutGroupsInput[] | customerUncheckedCreateWithoutGroupsInput[]
    connectOrCreate?: customerCreateOrConnectWithoutGroupsInput | customerCreateOrConnectWithoutGroupsInput[]
    upsert?: customerUpsertWithWhereUniqueWithoutGroupsInput | customerUpsertWithWhereUniqueWithoutGroupsInput[]
    createMany?: customerCreateManyGroupsInputEnvelope
    set?: customerWhereUniqueInput | customerWhereUniqueInput[]
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[]
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[]
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[]
    update?: customerUpdateWithWhereUniqueWithoutGroupsInput | customerUpdateWithWhereUniqueWithoutGroupsInput[]
    updateMany?: customerUpdateManyWithWhereWithoutGroupsInput | customerUpdateManyWithWhereWithoutGroupsInput[]
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutLogInput = {
    create?: XOR<usersCreateWithoutLogInput, usersUncheckedCreateWithoutLogInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutLogNestedInput = {
    create?: XOR<usersCreateWithoutLogInput, usersUncheckedCreateWithoutLogInput>
    connectOrCreate?: usersCreateOrConnectWithoutLogInput
    upsert?: usersUpsertWithoutLogInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLogInput, usersUpdateWithoutLogInput>, usersUncheckedUpdateWithoutLogInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type assetsCreateNestedOneWithoutReport_assetsInput = {
    create?: XOR<assetsCreateWithoutReport_assetsInput, assetsUncheckedCreateWithoutReport_assetsInput>
    connectOrCreate?: assetsCreateOrConnectWithoutReport_assetsInput
    connect?: assetsWhereUniqueInput
  }

  export type assetsUpdateOneRequiredWithoutReport_assetsNestedInput = {
    create?: XOR<assetsCreateWithoutReport_assetsInput, assetsUncheckedCreateWithoutReport_assetsInput>
    connectOrCreate?: assetsCreateOrConnectWithoutReport_assetsInput
    upsert?: assetsUpsertWithoutReport_assetsInput
    connect?: assetsWhereUniqueInput
    update?: XOR<XOR<assetsUpdateToOneWithWhereWithoutReport_assetsInput, assetsUpdateWithoutReport_assetsInput>, assetsUncheckedUpdateWithoutReport_assetsInput>
  }

  export type Enumtransactions_typeFieldUpdateOperationsInput = {
    set?: $Enums.transactions_type
  }

  export type accountsCreateNestedOneWithoutTransfers_transfers_from_account_idToaccountsInput = {
    create?: XOR<accountsCreateWithoutTransfers_transfers_from_account_idToaccountsInput, accountsUncheckedCreateWithoutTransfers_transfers_from_account_idToaccountsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransfers_transfers_from_account_idToaccountsInput
    connect?: accountsWhereUniqueInput
  }

  export type accountsCreateNestedOneWithoutTransfers_transfers_to_account_idToaccountsInput = {
    create?: XOR<accountsCreateWithoutTransfers_transfers_to_account_idToaccountsInput, accountsUncheckedCreateWithoutTransfers_transfers_to_account_idToaccountsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransfers_transfers_to_account_idToaccountsInput
    connect?: accountsWhereUniqueInput
  }

  export type accountsUpdateOneRequiredWithoutTransfers_transfers_from_account_idToaccountsNestedInput = {
    create?: XOR<accountsCreateWithoutTransfers_transfers_from_account_idToaccountsInput, accountsUncheckedCreateWithoutTransfers_transfers_from_account_idToaccountsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransfers_transfers_from_account_idToaccountsInput
    upsert?: accountsUpsertWithoutTransfers_transfers_from_account_idToaccountsInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutTransfers_transfers_from_account_idToaccountsInput, accountsUpdateWithoutTransfers_transfers_from_account_idToaccountsInput>, accountsUncheckedUpdateWithoutTransfers_transfers_from_account_idToaccountsInput>
  }

  export type accountsUpdateOneRequiredWithoutTransfers_transfers_to_account_idToaccountsNestedInput = {
    create?: XOR<accountsCreateWithoutTransfers_transfers_to_account_idToaccountsInput, accountsUncheckedCreateWithoutTransfers_transfers_to_account_idToaccountsInput>
    connectOrCreate?: accountsCreateOrConnectWithoutTransfers_transfers_to_account_idToaccountsInput
    upsert?: accountsUpsertWithoutTransfers_transfers_to_account_idToaccountsInput
    connect?: accountsWhereUniqueInput
    update?: XOR<XOR<accountsUpdateToOneWithWhereWithoutTransfers_transfers_to_account_idToaccountsInput, accountsUpdateWithoutTransfers_transfers_to_account_idToaccountsInput>, accountsUncheckedUpdateWithoutTransfers_transfers_to_account_idToaccountsInput>
  }

  export type logsCreateNestedManyWithoutUserInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type logsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
  }

  export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role
  }

  export type logsUpdateManyWithoutUserNestedInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUserInput | logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUserInput | logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUserInput | logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
  }

  export type logsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput> | logsCreateWithoutUserInput[] | logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: logsCreateOrConnectWithoutUserInput | logsCreateOrConnectWithoutUserInput[]
    upsert?: logsUpsertWithWhereUniqueWithoutUserInput | logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: logsCreateManyUserInputEnvelope
    set?: logsWhereUniqueInput | logsWhereUniqueInput[]
    disconnect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    delete?: logsWhereUniqueInput | logsWhereUniqueInput[]
    connect?: logsWhereUniqueInput | logsWhereUniqueInput[]
    update?: logsUpdateWithWhereUniqueWithoutUserInput | logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: logsUpdateManyWithWhereWithoutUserInput | logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: logsScalarWhereInput | logsScalarWhereInput[]
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedEnumtransactions_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeFilter<$PrismaModel> | $Enums.transactions_type
  }

  export type NestedEnumtransactions_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.transactions_type | Enumtransactions_typeFieldRefInput<$PrismaModel>
    in?: $Enums.transactions_type[]
    notIn?: $Enums.transactions_type[]
    not?: NestedEnumtransactions_typeWithAggregatesFilter<$PrismaModel> | $Enums.transactions_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumtransactions_typeFilter<$PrismaModel>
    _max?: NestedEnumtransactions_typeFilter<$PrismaModel>
  }

  export type NestedEnumuser_roleFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleFilter<$PrismaModel> | $Enums.user_role
  }

  export type NestedEnumuser_roleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.user_role | Enumuser_roleFieldRefInput<$PrismaModel>
    in?: $Enums.user_role[]
    notIn?: $Enums.user_role[]
    not?: NestedEnumuser_roleWithAggregatesFilter<$PrismaModel> | $Enums.user_role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumuser_roleFilter<$PrismaModel>
    _max?: NestedEnumuser_roleFilter<$PrismaModel>
  }

  export type transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput = {
    id: string
    date: Date | string
    description: string
    amount: bigint | number
    tags: string
    createdAt?: Date | string
    updatedAt: Date | string
    accounts_transfers_to_account_idToaccounts: accountsCreateNestedOneWithoutTransfers_transfers_to_account_idToaccountsInput
  }

  export type transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput = {
    id: string
    to_account_id: string
    date: Date | string
    description: string
    amount: bigint | number
    tags: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type transfersCreateOrConnectWithoutAccounts_transfers_from_account_idToaccountsInput = {
    where: transfersWhereUniqueInput
    create: XOR<transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput>
  }

  export type transfersCreateManyAccounts_transfers_from_account_idToaccountsInputEnvelope = {
    data: transfersCreateManyAccounts_transfers_from_account_idToaccountsInput | transfersCreateManyAccounts_transfers_from_account_idToaccountsInput[]
    skipDuplicates?: boolean
  }

  export type transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput = {
    id: string
    date: Date | string
    description: string
    amount: bigint | number
    tags: string
    createdAt?: Date | string
    updatedAt: Date | string
    accounts_transfers_from_account_idToaccounts: accountsCreateNestedOneWithoutTransfers_transfers_from_account_idToaccountsInput
  }

  export type transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput = {
    id: string
    from_account_id: string
    date: Date | string
    description: string
    amount: bigint | number
    tags: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type transfersCreateOrConnectWithoutAccounts_transfers_to_account_idToaccountsInput = {
    where: transfersWhereUniqueInput
    create: XOR<transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput>
  }

  export type transfersCreateManyAccounts_transfers_to_account_idToaccountsInputEnvelope = {
    data: transfersCreateManyAccounts_transfers_to_account_idToaccountsInput | transfersCreateManyAccounts_transfers_to_account_idToaccountsInput[]
    skipDuplicates?: boolean
  }

  export type transfersUpsertWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput = {
    where: transfersWhereUniqueInput
    update: XOR<transfersUpdateWithoutAccounts_transfers_from_account_idToaccountsInput, transfersUncheckedUpdateWithoutAccounts_transfers_from_account_idToaccountsInput>
    create: XOR<transfersCreateWithoutAccounts_transfers_from_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_from_account_idToaccountsInput>
  }

  export type transfersUpdateWithWhereUniqueWithoutAccounts_transfers_from_account_idToaccountsInput = {
    where: transfersWhereUniqueInput
    data: XOR<transfersUpdateWithoutAccounts_transfers_from_account_idToaccountsInput, transfersUncheckedUpdateWithoutAccounts_transfers_from_account_idToaccountsInput>
  }

  export type transfersUpdateManyWithWhereWithoutAccounts_transfers_from_account_idToaccountsInput = {
    where: transfersScalarWhereInput
    data: XOR<transfersUpdateManyMutationInput, transfersUncheckedUpdateManyWithoutAccounts_transfers_from_account_idToaccountsInput>
  }

  export type transfersScalarWhereInput = {
    AND?: transfersScalarWhereInput | transfersScalarWhereInput[]
    OR?: transfersScalarWhereInput[]
    NOT?: transfersScalarWhereInput | transfersScalarWhereInput[]
    id?: StringFilter<"transfers"> | string
    from_account_id?: StringFilter<"transfers"> | string
    to_account_id?: StringFilter<"transfers"> | string
    date?: DateTimeFilter<"transfers"> | Date | string
    description?: StringFilter<"transfers"> | string
    amount?: BigIntFilter<"transfers"> | bigint | number
    tags?: StringFilter<"transfers"> | string
    createdAt?: DateTimeFilter<"transfers"> | Date | string
    updatedAt?: DateTimeFilter<"transfers"> | Date | string
  }

  export type transfersUpsertWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput = {
    where: transfersWhereUniqueInput
    update: XOR<transfersUpdateWithoutAccounts_transfers_to_account_idToaccountsInput, transfersUncheckedUpdateWithoutAccounts_transfers_to_account_idToaccountsInput>
    create: XOR<transfersCreateWithoutAccounts_transfers_to_account_idToaccountsInput, transfersUncheckedCreateWithoutAccounts_transfers_to_account_idToaccountsInput>
  }

  export type transfersUpdateWithWhereUniqueWithoutAccounts_transfers_to_account_idToaccountsInput = {
    where: transfersWhereUniqueInput
    data: XOR<transfersUpdateWithoutAccounts_transfers_to_account_idToaccountsInput, transfersUncheckedUpdateWithoutAccounts_transfers_to_account_idToaccountsInput>
  }

  export type transfersUpdateManyWithWhereWithoutAccounts_transfers_to_account_idToaccountsInput = {
    where: transfersScalarWhereInput
    data: XOR<transfersUpdateManyMutationInput, transfersUncheckedUpdateManyWithoutAccounts_transfers_to_account_idToaccountsInput>
  }

  export type customerCreateWithoutArchive_installationInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    country: string
    fullname: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
    company: companyCreateNestedOneWithoutCustomerInput
    groups: groupsCreateNestedOneWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutArchive_installationInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    company_id: string
    country: string
    fullname: string
    group_id: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
  }

  export type customerCreateOrConnectWithoutArchive_installationInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutArchive_installationInput, customerUncheckedCreateWithoutArchive_installationInput>
  }

  export type customerUpsertWithoutArchive_installationInput = {
    update: XOR<customerUpdateWithoutArchive_installationInput, customerUncheckedUpdateWithoutArchive_installationInput>
    create: XOR<customerCreateWithoutArchive_installationInput, customerUncheckedCreateWithoutArchive_installationInput>
    where?: customerWhereInput
  }

  export type customerUpdateToOneWithWhereWithoutArchive_installationInput = {
    where?: customerWhereInput
    data: XOR<customerUpdateWithoutArchive_installationInput, customerUncheckedUpdateWithoutArchive_installationInput>
  }

  export type customerUpdateWithoutArchive_installationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    company?: companyUpdateOneRequiredWithoutCustomerNestedInput
    groups?: groupsUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutArchive_installationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type report_assetsCreateWithoutAssetsInput = {
    description: string
    quantity: bigint | number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type report_assetsUncheckedCreateWithoutAssetsInput = {
    description: string
    quantity: bigint | number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type report_assetsCreateOrConnectWithoutAssetsInput = {
    where: report_assetsWhereUniqueInput
    create: XOR<report_assetsCreateWithoutAssetsInput, report_assetsUncheckedCreateWithoutAssetsInput>
  }

  export type report_assetsUpsertWithoutAssetsInput = {
    update: XOR<report_assetsUpdateWithoutAssetsInput, report_assetsUncheckedUpdateWithoutAssetsInput>
    create: XOR<report_assetsCreateWithoutAssetsInput, report_assetsUncheckedCreateWithoutAssetsInput>
    where?: report_assetsWhereInput
  }

  export type report_assetsUpdateToOneWithWhereWithoutAssetsInput = {
    where?: report_assetsWhereInput
    data: XOR<report_assetsUpdateWithoutAssetsInput, report_assetsUncheckedUpdateWithoutAssetsInput>
  }

  export type report_assetsUpdateWithoutAssetsInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type report_assetsUncheckedUpdateWithoutAssetsInput = {
    description?: StringFieldUpdateOperationsInput | string
    quantity?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerCreateWithoutCompanyInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    country: string
    fullname: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
    archive_installation?: archive_installationCreateNestedManyWithoutCustomerInput
    groups: groupsCreateNestedOneWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutCompanyInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    country: string
    fullname: string
    group_id: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
    archive_installation?: archive_installationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutCompanyInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput>
  }

  export type customerCreateManyCompanyInputEnvelope = {
    data: customerCreateManyCompanyInput | customerCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type customerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: customerWhereUniqueInput
    update: XOR<customerUpdateWithoutCompanyInput, customerUncheckedUpdateWithoutCompanyInput>
    create: XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput>
  }

  export type customerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: customerWhereUniqueInput
    data: XOR<customerUpdateWithoutCompanyInput, customerUncheckedUpdateWithoutCompanyInput>
  }

  export type customerUpdateManyWithWhereWithoutCompanyInput = {
    where: customerScalarWhereInput
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutCompanyInput>
  }

  export type customerScalarWhereInput = {
    AND?: customerScalarWhereInput | customerScalarWhereInput[]
    OR?: customerScalarWhereInput[]
    NOT?: customerScalarWhereInput | customerScalarWhereInput[]
    id?: StringFilter<"customer"> | string
    email?: StringFilter<"customer"> | string
    phone?: StringFilter<"customer"> | string
    address?: StringFilter<"customer"> | string
    installation_date?: DateTimeFilter<"customer"> | Date | string
    createdAt?: DateTimeFilter<"customer"> | Date | string
    updatedAt?: DateTimeFilter<"customer"> | Date | string
    city?: StringFilter<"customer"> | string
    code_postal?: StringFilter<"customer"> | string
    company_id?: StringFilter<"customer"> | string
    country?: StringFilter<"customer"> | string
    fullname?: StringFilter<"customer"> | string
    group_id?: StringFilter<"customer"> | string
    location?: StringFilter<"customer"> | string
    password?: StringFilter<"customer"> | string
    state_region?: StringFilter<"customer"> | string
    surname?: StringFilter<"customer"> | string
    tag?: StringFilter<"customer"> | string
  }

  export type archive_installationCreateWithoutCustomerInput = {
    id: string
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    names: string
  }

  export type archive_installationUncheckedCreateWithoutCustomerInput = {
    id: string
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    names: string
  }

  export type archive_installationCreateOrConnectWithoutCustomerInput = {
    where: archive_installationWhereUniqueInput
    create: XOR<archive_installationCreateWithoutCustomerInput, archive_installationUncheckedCreateWithoutCustomerInput>
  }

  export type archive_installationCreateManyCustomerInputEnvelope = {
    data: archive_installationCreateManyCustomerInput | archive_installationCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type companyCreateWithoutCustomerInput = {
    id: string
    name: string
    url: string
    email: string
    phone: string
    logo_url: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type companyUncheckedCreateWithoutCustomerInput = {
    id: string
    name: string
    url: string
    email: string
    phone: string
    logo_url: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type companyCreateOrConnectWithoutCustomerInput = {
    where: companyWhereUniqueInput
    create: XOR<companyCreateWithoutCustomerInput, companyUncheckedCreateWithoutCustomerInput>
  }

  export type groupsCreateWithoutCustomerInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type groupsUncheckedCreateWithoutCustomerInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type groupsCreateOrConnectWithoutCustomerInput = {
    where: groupsWhereUniqueInput
    create: XOR<groupsCreateWithoutCustomerInput, groupsUncheckedCreateWithoutCustomerInput>
  }

  export type archive_installationUpsertWithWhereUniqueWithoutCustomerInput = {
    where: archive_installationWhereUniqueInput
    update: XOR<archive_installationUpdateWithoutCustomerInput, archive_installationUncheckedUpdateWithoutCustomerInput>
    create: XOR<archive_installationCreateWithoutCustomerInput, archive_installationUncheckedCreateWithoutCustomerInput>
  }

  export type archive_installationUpdateWithWhereUniqueWithoutCustomerInput = {
    where: archive_installationWhereUniqueInput
    data: XOR<archive_installationUpdateWithoutCustomerInput, archive_installationUncheckedUpdateWithoutCustomerInput>
  }

  export type archive_installationUpdateManyWithWhereWithoutCustomerInput = {
    where: archive_installationScalarWhereInput
    data: XOR<archive_installationUpdateManyMutationInput, archive_installationUncheckedUpdateManyWithoutCustomerInput>
  }

  export type archive_installationScalarWhereInput = {
    AND?: archive_installationScalarWhereInput | archive_installationScalarWhereInput[]
    OR?: archive_installationScalarWhereInput[]
    NOT?: archive_installationScalarWhereInput | archive_installationScalarWhereInput[]
    id?: StringFilter<"archive_installation"> | string
    price?: FloatFilter<"archive_installation"> | number
    createdAt?: DateTimeFilter<"archive_installation"> | Date | string
    updatedAt?: DateTimeFilter<"archive_installation"> | Date | string
    customer_id?: StringNullableFilter<"archive_installation"> | string | null
    names?: StringFilter<"archive_installation"> | string
  }

  export type companyUpsertWithoutCustomerInput = {
    update: XOR<companyUpdateWithoutCustomerInput, companyUncheckedUpdateWithoutCustomerInput>
    create: XOR<companyCreateWithoutCustomerInput, companyUncheckedCreateWithoutCustomerInput>
    where?: companyWhereInput
  }

  export type companyUpdateToOneWithWhereWithoutCustomerInput = {
    where?: companyWhereInput
    data: XOR<companyUpdateWithoutCustomerInput, companyUncheckedUpdateWithoutCustomerInput>
  }

  export type companyUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type companyUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    logo_url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsUpsertWithoutCustomerInput = {
    update: XOR<groupsUpdateWithoutCustomerInput, groupsUncheckedUpdateWithoutCustomerInput>
    create: XOR<groupsCreateWithoutCustomerInput, groupsUncheckedCreateWithoutCustomerInput>
    where?: groupsWhereInput
  }

  export type groupsUpdateToOneWithWhereWithoutCustomerInput = {
    where?: groupsWhereInput
    data: XOR<groupsUpdateWithoutCustomerInput, groupsUncheckedUpdateWithoutCustomerInput>
  }

  export type groupsUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type groupsUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerCreateWithoutGroupsInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    country: string
    fullname: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
    archive_installation?: archive_installationCreateNestedManyWithoutCustomerInput
    company: companyCreateNestedOneWithoutCustomerInput
  }

  export type customerUncheckedCreateWithoutGroupsInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    company_id: string
    country: string
    fullname: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
    archive_installation?: archive_installationUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type customerCreateOrConnectWithoutGroupsInput = {
    where: customerWhereUniqueInput
    create: XOR<customerCreateWithoutGroupsInput, customerUncheckedCreateWithoutGroupsInput>
  }

  export type customerCreateManyGroupsInputEnvelope = {
    data: customerCreateManyGroupsInput | customerCreateManyGroupsInput[]
    skipDuplicates?: boolean
  }

  export type customerUpsertWithWhereUniqueWithoutGroupsInput = {
    where: customerWhereUniqueInput
    update: XOR<customerUpdateWithoutGroupsInput, customerUncheckedUpdateWithoutGroupsInput>
    create: XOR<customerCreateWithoutGroupsInput, customerUncheckedCreateWithoutGroupsInput>
  }

  export type customerUpdateWithWhereUniqueWithoutGroupsInput = {
    where: customerWhereUniqueInput
    data: XOR<customerUpdateWithoutGroupsInput, customerUncheckedUpdateWithoutGroupsInput>
  }

  export type customerUpdateManyWithWhereWithoutGroupsInput = {
    where: customerScalarWhereInput
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutGroupsInput>
  }

  export type usersCreateWithoutLogInput = {
    id: string
    email: string
    name?: string | null
    password: string
    role: $Enums.user_role
    token?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type usersUncheckedCreateWithoutLogInput = {
    id: string
    email: string
    name?: string | null
    password: string
    role: $Enums.user_role
    token?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type usersCreateOrConnectWithoutLogInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLogInput, usersUncheckedCreateWithoutLogInput>
  }

  export type usersUpsertWithoutLogInput = {
    update: XOR<usersUpdateWithoutLogInput, usersUncheckedUpdateWithoutLogInput>
    create: XOR<usersCreateWithoutLogInput, usersUncheckedCreateWithoutLogInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLogInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLogInput, usersUncheckedUpdateWithoutLogInput>
  }

  export type usersUpdateWithoutLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role
    token?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assetsCreateWithoutReport_assetsInput = {
    id: string
    name: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type assetsUncheckedCreateWithoutReport_assetsInput = {
    id: string
    name: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type assetsCreateOrConnectWithoutReport_assetsInput = {
    where: assetsWhereUniqueInput
    create: XOR<assetsCreateWithoutReport_assetsInput, assetsUncheckedCreateWithoutReport_assetsInput>
  }

  export type assetsUpsertWithoutReport_assetsInput = {
    update: XOR<assetsUpdateWithoutReport_assetsInput, assetsUncheckedUpdateWithoutReport_assetsInput>
    create: XOR<assetsCreateWithoutReport_assetsInput, assetsUncheckedCreateWithoutReport_assetsInput>
    where?: assetsWhereInput
  }

  export type assetsUpdateToOneWithWhereWithoutReport_assetsInput = {
    where?: assetsWhereInput
    data: XOR<assetsUpdateWithoutReport_assetsInput, assetsUncheckedUpdateWithoutReport_assetsInput>
  }

  export type assetsUpdateWithoutReport_assetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type assetsUncheckedUpdateWithoutReport_assetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountsCreateWithoutTransfers_transfers_from_account_idToaccountsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
    transfers_transfers_to_account_idToaccounts?: transfersCreateNestedManyWithoutAccounts_transfers_to_account_idToaccountsInput
  }

  export type accountsUncheckedCreateWithoutTransfers_transfers_from_account_idToaccountsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
    transfers_transfers_to_account_idToaccounts?: transfersUncheckedCreateNestedManyWithoutAccounts_transfers_to_account_idToaccountsInput
  }

  export type accountsCreateOrConnectWithoutTransfers_transfers_from_account_idToaccountsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutTransfers_transfers_from_account_idToaccountsInput, accountsUncheckedCreateWithoutTransfers_transfers_from_account_idToaccountsInput>
  }

  export type accountsCreateWithoutTransfers_transfers_to_account_idToaccountsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
    transfers_transfers_from_account_idToaccounts?: transfersCreateNestedManyWithoutAccounts_transfers_from_account_idToaccountsInput
  }

  export type accountsUncheckedCreateWithoutTransfers_transfers_to_account_idToaccountsInput = {
    id: string
    name: string
    createdAt?: Date | string
    updatedAt: Date | string
    transfers_transfers_from_account_idToaccounts?: transfersUncheckedCreateNestedManyWithoutAccounts_transfers_from_account_idToaccountsInput
  }

  export type accountsCreateOrConnectWithoutTransfers_transfers_to_account_idToaccountsInput = {
    where: accountsWhereUniqueInput
    create: XOR<accountsCreateWithoutTransfers_transfers_to_account_idToaccountsInput, accountsUncheckedCreateWithoutTransfers_transfers_to_account_idToaccountsInput>
  }

  export type accountsUpsertWithoutTransfers_transfers_from_account_idToaccountsInput = {
    update: XOR<accountsUpdateWithoutTransfers_transfers_from_account_idToaccountsInput, accountsUncheckedUpdateWithoutTransfers_transfers_from_account_idToaccountsInput>
    create: XOR<accountsCreateWithoutTransfers_transfers_from_account_idToaccountsInput, accountsUncheckedCreateWithoutTransfers_transfers_from_account_idToaccountsInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutTransfers_transfers_from_account_idToaccountsInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutTransfers_transfers_from_account_idToaccountsInput, accountsUncheckedUpdateWithoutTransfers_transfers_from_account_idToaccountsInput>
  }

  export type accountsUpdateWithoutTransfers_transfers_from_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers_transfers_to_account_idToaccounts?: transfersUpdateManyWithoutAccounts_transfers_to_account_idToaccountsNestedInput
  }

  export type accountsUncheckedUpdateWithoutTransfers_transfers_from_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers_transfers_to_account_idToaccounts?: transfersUncheckedUpdateManyWithoutAccounts_transfers_to_account_idToaccountsNestedInput
  }

  export type accountsUpsertWithoutTransfers_transfers_to_account_idToaccountsInput = {
    update: XOR<accountsUpdateWithoutTransfers_transfers_to_account_idToaccountsInput, accountsUncheckedUpdateWithoutTransfers_transfers_to_account_idToaccountsInput>
    create: XOR<accountsCreateWithoutTransfers_transfers_to_account_idToaccountsInput, accountsUncheckedCreateWithoutTransfers_transfers_to_account_idToaccountsInput>
    where?: accountsWhereInput
  }

  export type accountsUpdateToOneWithWhereWithoutTransfers_transfers_to_account_idToaccountsInput = {
    where?: accountsWhereInput
    data: XOR<accountsUpdateWithoutTransfers_transfers_to_account_idToaccountsInput, accountsUncheckedUpdateWithoutTransfers_transfers_to_account_idToaccountsInput>
  }

  export type accountsUpdateWithoutTransfers_transfers_to_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers_transfers_from_account_idToaccounts?: transfersUpdateManyWithoutAccounts_transfers_from_account_idToaccountsNestedInput
  }

  export type accountsUncheckedUpdateWithoutTransfers_transfers_to_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transfers_transfers_from_account_idToaccounts?: transfersUncheckedUpdateManyWithoutAccounts_transfers_from_account_idToaccountsNestedInput
  }

  export type logsCreateWithoutUserInput = {
    id: string
    action: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type logsUncheckedCreateWithoutUserInput = {
    id: string
    action: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type logsCreateOrConnectWithoutUserInput = {
    where: logsWhereUniqueInput
    create: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput>
  }

  export type logsCreateManyUserInputEnvelope = {
    data: logsCreateManyUserInput | logsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type logsUpsertWithWhereUniqueWithoutUserInput = {
    where: logsWhereUniqueInput
    update: XOR<logsUpdateWithoutUserInput, logsUncheckedUpdateWithoutUserInput>
    create: XOR<logsCreateWithoutUserInput, logsUncheckedCreateWithoutUserInput>
  }

  export type logsUpdateWithWhereUniqueWithoutUserInput = {
    where: logsWhereUniqueInput
    data: XOR<logsUpdateWithoutUserInput, logsUncheckedUpdateWithoutUserInput>
  }

  export type logsUpdateManyWithWhereWithoutUserInput = {
    where: logsScalarWhereInput
    data: XOR<logsUpdateManyMutationInput, logsUncheckedUpdateManyWithoutUserInput>
  }

  export type logsScalarWhereInput = {
    AND?: logsScalarWhereInput | logsScalarWhereInput[]
    OR?: logsScalarWhereInput[]
    NOT?: logsScalarWhereInput | logsScalarWhereInput[]
    id?: StringFilter<"logs"> | string
    user_id?: StringFilter<"logs"> | string
    action?: StringFilter<"logs"> | string
    createdAt?: DateTimeFilter<"logs"> | Date | string
    updatedAt?: DateTimeFilter<"logs"> | Date | string
  }

  export type transfersCreateManyAccounts_transfers_from_account_idToaccountsInput = {
    id: string
    to_account_id: string
    date: Date | string
    description: string
    amount: bigint | number
    tags: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type transfersCreateManyAccounts_transfers_to_account_idToaccountsInput = {
    id: string
    from_account_id: string
    date: Date | string
    description: string
    amount: bigint | number
    tags: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type transfersUpdateWithoutAccounts_transfers_from_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts_transfers_to_account_idToaccounts?: accountsUpdateOneRequiredWithoutTransfers_transfers_to_account_idToaccountsNestedInput
  }

  export type transfersUncheckedUpdateWithoutAccounts_transfers_from_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transfersUncheckedUpdateManyWithoutAccounts_transfers_from_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    to_account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transfersUpdateWithoutAccounts_transfers_to_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts_transfers_from_account_idToaccounts?: accountsUpdateOneRequiredWithoutTransfers_transfers_from_account_idToaccountsNestedInput
  }

  export type transfersUncheckedUpdateWithoutAccounts_transfers_to_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transfersUncheckedUpdateManyWithoutAccounts_transfers_to_account_idToaccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    from_account_id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: BigIntFieldUpdateOperationsInput | bigint | number
    tags?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type customerCreateManyCompanyInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    country: string
    fullname: string
    group_id: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
  }

  export type customerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    archive_installation?: archive_installationUpdateManyWithoutCustomerNestedInput
    groups?: groupsUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    archive_installation?: archive_installationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    group_id?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type archive_installationCreateManyCustomerInput = {
    id: string
    price: number
    createdAt?: Date | string
    updatedAt: Date | string
    names: string
  }

  export type archive_installationUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    names?: StringFieldUpdateOperationsInput | string
  }

  export type archive_installationUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    names?: StringFieldUpdateOperationsInput | string
  }

  export type archive_installationUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    names?: StringFieldUpdateOperationsInput | string
  }

  export type customerCreateManyGroupsInput = {
    id: string
    email: string
    phone: string
    address: string
    installation_date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    city: string
    code_postal: string
    company_id: string
    country: string
    fullname: string
    location: string
    password: string
    state_region: string
    surname: string
    tag: string
  }

  export type customerUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    archive_installation?: archive_installationUpdateManyWithoutCustomerNestedInput
    company?: companyUpdateOneRequiredWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
    archive_installation?: archive_installationUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type customerUncheckedUpdateManyWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    installation_date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: StringFieldUpdateOperationsInput | string
    code_postal?: StringFieldUpdateOperationsInput | string
    company_id?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    fullname?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    state_region?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    tag?: StringFieldUpdateOperationsInput | string
  }

  export type logsCreateManyUserInput = {
    id: string
    action: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type logsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type logsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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