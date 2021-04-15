
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model PrismaOneProduct
 */

export type PrismaOneProduct = {
  id: string
  name: string
  description: string
  image: string
  price: number
  sku: string
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PrismaOneProducts
 * const prismaOneProducts = await prisma.prismaOneProduct.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PrismaOneProducts
   * const prismaOneProducts = await prisma.prismaOneProduct.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.prismaOneProduct`: Exposes CRUD operations for the **PrismaOneProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrismaOneProducts
    * const prismaOneProducts = await prisma.prismaOneProduct.findMany()
    * ```
    */
  get prismaOneProduct(): Prisma.PrismaOneProductDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.21.1
   * Query Engine version: e421996c87d5f3c8f7eeadd502d4ad402c89464d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  export type Union = any

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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
    U = Omit<T, 'avg' | 'sum' | 'count' | 'min' | 'max'>
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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    PrismaOneProduct: 'PrismaOneProduct'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model PrismaOneProduct
   */


  export type AggregatePrismaOneProduct = {
    count: PrismaOneProductCountAggregateOutputType | null
    avg: PrismaOneProductAvgAggregateOutputType | null
    sum: PrismaOneProductSumAggregateOutputType | null
    min: PrismaOneProductMinAggregateOutputType | null
    max: PrismaOneProductMaxAggregateOutputType | null
  }

  export type PrismaOneProductAvgAggregateOutputType = {
    price: number | null
  }

  export type PrismaOneProductSumAggregateOutputType = {
    price: number | null
  }

  export type PrismaOneProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    price: number | null
    sku: string | null
  }

  export type PrismaOneProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    image: string | null
    price: number | null
    sku: string | null
  }

  export type PrismaOneProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    price: number
    sku: number
    _all: number
  }


  export type PrismaOneProductAvgAggregateInputType = {
    price?: true
  }

  export type PrismaOneProductSumAggregateInputType = {
    price?: true
  }

  export type PrismaOneProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    price?: true
    sku?: true
  }

  export type PrismaOneProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    price?: true
    sku?: true
  }

  export type PrismaOneProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    price?: true
    sku?: true
    _all?: true
  }

  export type PrismaOneProductAggregateArgs = {
    /**
     * Filter which PrismaOneProduct to aggregate.
    **/
    where?: PrismaOneProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaOneProducts to fetch.
    **/
    orderBy?: Enumerable<PrismaOneProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
    **/
    cursor?: PrismaOneProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaOneProducts from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaOneProducts.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrismaOneProducts
    **/
    count?: true | PrismaOneProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    avg?: PrismaOneProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    sum?: PrismaOneProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    min?: PrismaOneProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    max?: PrismaOneProductMaxAggregateInputType
  }

  export type GetPrismaOneProductAggregateType<T extends PrismaOneProductAggregateArgs> = {
    [P in keyof T & keyof AggregatePrismaOneProduct]: P extends 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrismaOneProduct[P]>
      : GetScalarType<T[P], AggregatePrismaOneProduct[P]>
  }


    
    
  export type PrismaOneProductGroupByArgs = {
    where?: PrismaOneProductWhereInput
    orderBy?: Enumerable<PrismaOneProductOrderByInput>
    by: Array<PrismaOneProductScalarFieldEnum>
    having?: PrismaOneProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    count?: PrismaOneProductCountAggregateInputType | true
    avg?: PrismaOneProductAvgAggregateInputType
    sum?: PrismaOneProductSumAggregateInputType
    min?: PrismaOneProductMinAggregateInputType
    max?: PrismaOneProductMaxAggregateInputType
  }


  export type PrismaOneProductGroupByOutputType = {
    id: string
    name: string
    description: string
    image: string
    price: number
    sku: string
    count: PrismaOneProductCountAggregateOutputType | null
    avg: PrismaOneProductAvgAggregateOutputType | null
    sum: PrismaOneProductSumAggregateOutputType | null
    min: PrismaOneProductMinAggregateOutputType | null
    max: PrismaOneProductMaxAggregateOutputType | null
  }

  type GetPrismaOneProductGroupByPayload<T extends PrismaOneProductGroupByArgs> = Promise<Array<
    PickArray<PrismaOneProductGroupByOutputType, T['by']> & {
      [P in ((keyof T) & (keyof PrismaOneProductGroupByOutputType))]: GetScalarType<T[P], PrismaOneProductGroupByOutputType[P]>
    }
  >>
    

  export type PrismaOneProductSelect = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    sku?: boolean
  }

  export type PrismaOneProductGetPayload<
    S extends boolean | null | undefined | PrismaOneProductArgs,
    U = keyof S
      > = S extends true
        ? PrismaOneProduct
    : S extends undefined
    ? never
    : S extends PrismaOneProductArgs | PrismaOneProductFindManyArgs
    ?'include' extends U
    ? PrismaOneProduct 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PrismaOneProduct ?PrismaOneProduct [P]
  : 
     never
  } 
    : PrismaOneProduct
  : PrismaOneProduct


  type PrismaOneProductCountArgs = Merge<
    Omit<PrismaOneProductFindManyArgs, 'select' | 'include'> & {
      select?: PrismaOneProductCountAggregateInputType | true
    }
  >

  export interface PrismaOneProductDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PrismaOneProduct that matches the filter.
     * @param {PrismaOneProductFindUniqueArgs} args - Arguments to find a PrismaOneProduct
     * @example
     * // Get one PrismaOneProduct
     * const prismaOneProduct = await prisma.prismaOneProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PrismaOneProductFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PrismaOneProductFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PrismaOneProduct'> extends True ? CheckSelect<T, Prisma__PrismaOneProductClient<PrismaOneProduct>, Prisma__PrismaOneProductClient<PrismaOneProductGetPayload<T>>> : CheckSelect<T, Prisma__PrismaOneProductClient<PrismaOneProduct | null >, Prisma__PrismaOneProductClient<PrismaOneProductGetPayload<T> | null >>

    /**
     * Find the first PrismaOneProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaOneProductFindFirstArgs} args - Arguments to find a PrismaOneProduct
     * @example
     * // Get one PrismaOneProduct
     * const prismaOneProduct = await prisma.prismaOneProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PrismaOneProductFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PrismaOneProductFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PrismaOneProduct'> extends True ? CheckSelect<T, Prisma__PrismaOneProductClient<PrismaOneProduct>, Prisma__PrismaOneProductClient<PrismaOneProductGetPayload<T>>> : CheckSelect<T, Prisma__PrismaOneProductClient<PrismaOneProduct | null >, Prisma__PrismaOneProductClient<PrismaOneProductGetPayload<T> | null >>

    /**
     * Find zero or more PrismaOneProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaOneProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrismaOneProducts
     * const prismaOneProducts = await prisma.prismaOneProduct.findMany()
     * 
     * // Get first 10 PrismaOneProducts
     * const prismaOneProducts = await prisma.prismaOneProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prismaOneProductWithIdOnly = await prisma.prismaOneProduct.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PrismaOneProductFindManyArgs>(
      args?: SelectSubset<T, PrismaOneProductFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PrismaOneProduct>>, PrismaPromise<Array<PrismaOneProductGetPayload<T>>>>

    /**
     * Create a PrismaOneProduct.
     * @param {PrismaOneProductCreateArgs} args - Arguments to create a PrismaOneProduct.
     * @example
     * // Create one PrismaOneProduct
     * const PrismaOneProduct = await prisma.prismaOneProduct.create({
     *   data: {
     *     // ... data to create a PrismaOneProduct
     *   }
     * })
     * 
    **/
    create<T extends PrismaOneProductCreateArgs>(
      args: SelectSubset<T, PrismaOneProductCreateArgs>
    ): CheckSelect<T, Prisma__PrismaOneProductClient<PrismaOneProduct>, Prisma__PrismaOneProductClient<PrismaOneProductGetPayload<T>>>

    /**
     * Delete a PrismaOneProduct.
     * @param {PrismaOneProductDeleteArgs} args - Arguments to delete one PrismaOneProduct.
     * @example
     * // Delete one PrismaOneProduct
     * const PrismaOneProduct = await prisma.prismaOneProduct.delete({
     *   where: {
     *     // ... filter to delete one PrismaOneProduct
     *   }
     * })
     * 
    **/
    delete<T extends PrismaOneProductDeleteArgs>(
      args: SelectSubset<T, PrismaOneProductDeleteArgs>
    ): CheckSelect<T, Prisma__PrismaOneProductClient<PrismaOneProduct>, Prisma__PrismaOneProductClient<PrismaOneProductGetPayload<T>>>

    /**
     * Update one PrismaOneProduct.
     * @param {PrismaOneProductUpdateArgs} args - Arguments to update one PrismaOneProduct.
     * @example
     * // Update one PrismaOneProduct
     * const prismaOneProduct = await prisma.prismaOneProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PrismaOneProductUpdateArgs>(
      args: SelectSubset<T, PrismaOneProductUpdateArgs>
    ): CheckSelect<T, Prisma__PrismaOneProductClient<PrismaOneProduct>, Prisma__PrismaOneProductClient<PrismaOneProductGetPayload<T>>>

    /**
     * Delete zero or more PrismaOneProducts.
     * @param {PrismaOneProductDeleteManyArgs} args - Arguments to filter PrismaOneProducts to delete.
     * @example
     * // Delete a few PrismaOneProducts
     * const { count } = await prisma.prismaOneProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PrismaOneProductDeleteManyArgs>(
      args?: SelectSubset<T, PrismaOneProductDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrismaOneProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaOneProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrismaOneProducts
     * const prismaOneProduct = await prisma.prismaOneProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PrismaOneProductUpdateManyArgs>(
      args: SelectSubset<T, PrismaOneProductUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PrismaOneProduct.
     * @param {PrismaOneProductUpsertArgs} args - Arguments to update or create a PrismaOneProduct.
     * @example
     * // Update or create a PrismaOneProduct
     * const prismaOneProduct = await prisma.prismaOneProduct.upsert({
     *   create: {
     *     // ... data to create a PrismaOneProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrismaOneProduct we want to update
     *   }
     * })
    **/
    upsert<T extends PrismaOneProductUpsertArgs>(
      args: SelectSubset<T, PrismaOneProductUpsertArgs>
    ): CheckSelect<T, Prisma__PrismaOneProductClient<PrismaOneProduct>, Prisma__PrismaOneProductClient<PrismaOneProductGetPayload<T>>>

    /**
     * Count the number of PrismaOneProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaOneProductCountArgs} args - Arguments to filter PrismaOneProducts to count.
     * @example
     * // Count the number of PrismaOneProducts
     * const count = await prisma.prismaOneProduct.count({
     *   where: {
     *     // ... the filter for the PrismaOneProducts we want to count
     *   }
     * })
    **/
    count<T extends PrismaOneProductCountArgs>(
      args?: Subset<T, PrismaOneProductCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrismaOneProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrismaOneProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaOneProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
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
    aggregate<T extends PrismaOneProductAggregateArgs>(args: Subset<T, PrismaOneProductAggregateArgs>): PrismaPromise<GetPrismaOneProductAggregateType<T>>

    /**
     * Group by PrismaOneProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrismaOneProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrismaOneProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrismaOneProductGroupByArgs['orderBy'] }
        : { orderBy?: PrismaOneProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PrismaOneProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrismaOneProductGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrismaOneProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PrismaOneProductClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PrismaOneProduct findUnique
   */
  export type PrismaOneProductFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PrismaOneProduct
    **/
    select?: PrismaOneProductSelect | null
    /**
     * Throw an Error if a PrismaOneProduct can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PrismaOneProduct to fetch.
    **/
    where: PrismaOneProductWhereUniqueInput
  }


  /**
   * PrismaOneProduct findFirst
   */
  export type PrismaOneProductFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PrismaOneProduct
    **/
    select?: PrismaOneProductSelect | null
    /**
     * Throw an Error if a PrismaOneProduct can't be found
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PrismaOneProduct to fetch.
    **/
    where?: PrismaOneProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaOneProducts to fetch.
    **/
    orderBy?: Enumerable<PrismaOneProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrismaOneProducts.
    **/
    cursor?: PrismaOneProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaOneProducts from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaOneProducts.
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrismaOneProducts.
    **/
    distinct?: Enumerable<PrismaOneProductScalarFieldEnum>
  }


  /**
   * PrismaOneProduct findMany
   */
  export type PrismaOneProductFindManyArgs = {
    /**
     * Select specific fields to fetch from the PrismaOneProduct
    **/
    select?: PrismaOneProductSelect | null
    /**
     * Filter, which PrismaOneProducts to fetch.
    **/
    where?: PrismaOneProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrismaOneProducts to fetch.
    **/
    orderBy?: Enumerable<PrismaOneProductOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrismaOneProducts.
    **/
    cursor?: PrismaOneProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrismaOneProducts from the position of the cursor.
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrismaOneProducts.
    **/
    skip?: number
    distinct?: Enumerable<PrismaOneProductScalarFieldEnum>
  }


  /**
   * PrismaOneProduct create
   */
  export type PrismaOneProductCreateArgs = {
    /**
     * Select specific fields to fetch from the PrismaOneProduct
    **/
    select?: PrismaOneProductSelect | null
    /**
     * The data needed to create a PrismaOneProduct.
    **/
    data: XOR<PrismaOneProductCreateInput, PrismaOneProductUncheckedCreateInput>
  }


  /**
   * PrismaOneProduct update
   */
  export type PrismaOneProductUpdateArgs = {
    /**
     * Select specific fields to fetch from the PrismaOneProduct
    **/
    select?: PrismaOneProductSelect | null
    /**
     * The data needed to update a PrismaOneProduct.
    **/
    data: XOR<PrismaOneProductUpdateInput, PrismaOneProductUncheckedUpdateInput>
    /**
     * Choose, which PrismaOneProduct to update.
    **/
    where: PrismaOneProductWhereUniqueInput
  }


  /**
   * PrismaOneProduct updateMany
   */
  export type PrismaOneProductUpdateManyArgs = {
    data: XOR<PrismaOneProductUpdateManyMutationInput, PrismaOneProductUncheckedUpdateManyInput>
    where?: PrismaOneProductWhereInput
  }


  /**
   * PrismaOneProduct upsert
   */
  export type PrismaOneProductUpsertArgs = {
    /**
     * Select specific fields to fetch from the PrismaOneProduct
    **/
    select?: PrismaOneProductSelect | null
    /**
     * The filter to search for the PrismaOneProduct to update in case it exists.
    **/
    where: PrismaOneProductWhereUniqueInput
    /**
     * In case the PrismaOneProduct found by the `where` argument doesn't exist, create a new PrismaOneProduct with this data.
    **/
    create: XOR<PrismaOneProductCreateInput, PrismaOneProductUncheckedCreateInput>
    /**
     * In case the PrismaOneProduct was found with the provided `where` argument, update it with this data.
    **/
    update: XOR<PrismaOneProductUpdateInput, PrismaOneProductUncheckedUpdateInput>
  }


  /**
   * PrismaOneProduct delete
   */
  export type PrismaOneProductDeleteArgs = {
    /**
     * Select specific fields to fetch from the PrismaOneProduct
    **/
    select?: PrismaOneProductSelect | null
    /**
     * Filter which PrismaOneProduct to delete.
    **/
    where: PrismaOneProductWhereUniqueInput
  }


  /**
   * PrismaOneProduct deleteMany
   */
  export type PrismaOneProductDeleteManyArgs = {
    where?: PrismaOneProductWhereInput
  }


  /**
   * PrismaOneProduct without action
   */
  export type PrismaOneProductArgs = {
    /**
     * Select specific fields to fetch from the PrismaOneProduct
    **/
    select?: PrismaOneProductSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PrismaOneProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    price: 'price',
    sku: 'sku'
  };

  export type PrismaOneProductScalarFieldEnum = (typeof PrismaOneProductScalarFieldEnum)[keyof typeof PrismaOneProductScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type PrismaOneProductWhereInput = {
    AND?: Enumerable<PrismaOneProductWhereInput>
    OR?: Enumerable<PrismaOneProductWhereInput>
    NOT?: Enumerable<PrismaOneProductWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    image?: StringFilter | string
    price?: IntFilter | number
    sku?: StringFilter | string
  }

  export type PrismaOneProductOrderByInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    sku?: SortOrder
  }

  export type PrismaOneProductWhereUniqueInput = {
    id?: string
  }

  export type PrismaOneProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PrismaOneProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<PrismaOneProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PrismaOneProductScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    price?: IntWithAggregatesFilter | number
    sku?: StringWithAggregatesFilter | string
  }

  export type PrismaOneProductCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    price: number
    sku: string
  }

  export type PrismaOneProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    image: string
    price: number
    sku: string
  }

  export type PrismaOneProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaOneProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaOneProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
  }

  export type PrismaOneProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    sku?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    count?: NestedIntFilter
    min?: NestedStringFilter
    max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    count?: NestedIntFilter
    avg?: NestedFloatFilter
    sum?: NestedIntFilter
    min?: NestedIntFilter
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
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
  export const dmmf: runtime.DMMF.Document;
}