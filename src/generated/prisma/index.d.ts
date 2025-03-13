
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AvailabilitySchedule
 * 
 */
export type AvailabilitySchedule = $Result.DefaultSelection<Prisma.$AvailabilitySchedulePayload>
/**
 * Model EventType
 * 
 */
export type EventType = $Result.DefaultSelection<Prisma.$EventTypePayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model BookingQuestion
 * 
 */
export type BookingQuestion = $Result.DefaultSelection<Prisma.$BookingQuestionPayload>
/**
 * Model BookingAnswer
 * 
 */
export type BookingAnswer = $Result.DefaultSelection<Prisma.$BookingAnswerPayload>
/**
 * Model DateOverride
 * 
 */
export type DateOverride = $Result.DefaultSelection<Prisma.$DateOverridePayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model WorkflowStep
 * 
 */
export type WorkflowStep = $Result.DefaultSelection<Prisma.$WorkflowStepPayload>
/**
 * Model CallHistory
 * 
 */
export type CallHistory = $Result.DefaultSelection<Prisma.$CallHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BookingStatus: {
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]

}

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availabilitySchedule`: Exposes CRUD operations for the **AvailabilitySchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailabilitySchedules
    * const availabilitySchedules = await prisma.availabilitySchedule.findMany()
    * ```
    */
  get availabilitySchedule(): Prisma.AvailabilityScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventType`: Exposes CRUD operations for the **EventType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventTypes
    * const eventTypes = await prisma.eventType.findMany()
    * ```
    */
  get eventType(): Prisma.EventTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingQuestion`: Exposes CRUD operations for the **BookingQuestion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingQuestions
    * const bookingQuestions = await prisma.bookingQuestion.findMany()
    * ```
    */
  get bookingQuestion(): Prisma.BookingQuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookingAnswer`: Exposes CRUD operations for the **BookingAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingAnswers
    * const bookingAnswers = await prisma.bookingAnswer.findMany()
    * ```
    */
  get bookingAnswer(): Prisma.BookingAnswerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dateOverride`: Exposes CRUD operations for the **DateOverride** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DateOverrides
    * const dateOverrides = await prisma.dateOverride.findMany()
    * ```
    */
  get dateOverride(): Prisma.DateOverrideDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflowStep`: Exposes CRUD operations for the **WorkflowStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkflowSteps
    * const workflowSteps = await prisma.workflowStep.findMany()
    * ```
    */
  get workflowStep(): Prisma.WorkflowStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.callHistory`: Exposes CRUD operations for the **CallHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CallHistories
    * const callHistories = await prisma.callHistory.findMany()
    * ```
    */
  get callHistory(): Prisma.CallHistoryDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    AvailabilitySchedule: 'AvailabilitySchedule',
    EventType: 'EventType',
    Availability: 'Availability',
    BookingQuestion: 'BookingQuestion',
    BookingAnswer: 'BookingAnswer',
    DateOverride: 'DateOverride',
    Booking: 'Booking',
    Workflow: 'Workflow',
    WorkflowStep: 'WorkflowStep',
    CallHistory: 'CallHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "availabilitySchedule" | "eventType" | "availability" | "bookingQuestion" | "bookingAnswer" | "dateOverride" | "booking" | "workflow" | "workflowStep" | "callHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AvailabilitySchedule: {
        payload: Prisma.$AvailabilitySchedulePayload<ExtArgs>
        fields: Prisma.AvailabilityScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload>
          }
          findFirst: {
            args: Prisma.AvailabilityScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload>
          }
          findMany: {
            args: Prisma.AvailabilityScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload>[]
          }
          create: {
            args: Prisma.AvailabilityScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload>
          }
          createMany: {
            args: Prisma.AvailabilityScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload>[]
          }
          delete: {
            args: Prisma.AvailabilityScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload>
          }
          update: {
            args: Prisma.AvailabilityScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilitySchedulePayload>
          }
          aggregate: {
            args: Prisma.AvailabilityScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailabilitySchedule>
          }
          groupBy: {
            args: Prisma.AvailabilityScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityScheduleCountAggregateOutputType> | number
          }
        }
      }
      EventType: {
        payload: Prisma.$EventTypePayload<ExtArgs>
        fields: Prisma.EventTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          findFirst: {
            args: Prisma.EventTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          findMany: {
            args: Prisma.EventTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>[]
          }
          create: {
            args: Prisma.EventTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          createMany: {
            args: Prisma.EventTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>[]
          }
          delete: {
            args: Prisma.EventTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          update: {
            args: Prisma.EventTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          deleteMany: {
            args: Prisma.EventTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>[]
          }
          upsert: {
            args: Prisma.EventTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventTypePayload>
          }
          aggregate: {
            args: Prisma.EventTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventType>
          }
          groupBy: {
            args: Prisma.EventTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventTypeCountArgs<ExtArgs>
            result: $Utils.Optional<EventTypeCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      BookingQuestion: {
        payload: Prisma.$BookingQuestionPayload<ExtArgs>
        fields: Prisma.BookingQuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingQuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingQuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload>
          }
          findFirst: {
            args: Prisma.BookingQuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingQuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload>
          }
          findMany: {
            args: Prisma.BookingQuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload>[]
          }
          create: {
            args: Prisma.BookingQuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload>
          }
          createMany: {
            args: Prisma.BookingQuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingQuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload>[]
          }
          delete: {
            args: Prisma.BookingQuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload>
          }
          update: {
            args: Prisma.BookingQuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload>
          }
          deleteMany: {
            args: Prisma.BookingQuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingQuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingQuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload>[]
          }
          upsert: {
            args: Prisma.BookingQuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingQuestionPayload>
          }
          aggregate: {
            args: Prisma.BookingQuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingQuestion>
          }
          groupBy: {
            args: Prisma.BookingQuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingQuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingQuestionCountArgs<ExtArgs>
            result: $Utils.Optional<BookingQuestionCountAggregateOutputType> | number
          }
        }
      }
      BookingAnswer: {
        payload: Prisma.$BookingAnswerPayload<ExtArgs>
        fields: Prisma.BookingAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload>
          }
          findFirst: {
            args: Prisma.BookingAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload>
          }
          findMany: {
            args: Prisma.BookingAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload>[]
          }
          create: {
            args: Prisma.BookingAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload>
          }
          createMany: {
            args: Prisma.BookingAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload>[]
          }
          delete: {
            args: Prisma.BookingAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload>
          }
          update: {
            args: Prisma.BookingAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload>
          }
          deleteMany: {
            args: Prisma.BookingAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingAnswerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload>[]
          }
          upsert: {
            args: Prisma.BookingAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingAnswerPayload>
          }
          aggregate: {
            args: Prisma.BookingAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingAnswer>
          }
          groupBy: {
            args: Prisma.BookingAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<BookingAnswerCountAggregateOutputType> | number
          }
        }
      }
      DateOverride: {
        payload: Prisma.$DateOverridePayload<ExtArgs>
        fields: Prisma.DateOverrideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DateOverrideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DateOverrideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload>
          }
          findFirst: {
            args: Prisma.DateOverrideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DateOverrideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload>
          }
          findMany: {
            args: Prisma.DateOverrideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload>[]
          }
          create: {
            args: Prisma.DateOverrideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload>
          }
          createMany: {
            args: Prisma.DateOverrideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DateOverrideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload>[]
          }
          delete: {
            args: Prisma.DateOverrideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload>
          }
          update: {
            args: Prisma.DateOverrideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload>
          }
          deleteMany: {
            args: Prisma.DateOverrideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DateOverrideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DateOverrideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload>[]
          }
          upsert: {
            args: Prisma.DateOverrideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DateOverridePayload>
          }
          aggregate: {
            args: Prisma.DateOverrideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDateOverride>
          }
          groupBy: {
            args: Prisma.DateOverrideGroupByArgs<ExtArgs>
            result: $Utils.Optional<DateOverrideGroupByOutputType>[]
          }
          count: {
            args: Prisma.DateOverrideCountArgs<ExtArgs>
            result: $Utils.Optional<DateOverrideCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      WorkflowStep: {
        payload: Prisma.$WorkflowStepPayload<ExtArgs>
        fields: Prisma.WorkflowStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload>
          }
          findFirst: {
            args: Prisma.WorkflowStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload>
          }
          findMany: {
            args: Prisma.WorkflowStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload>[]
          }
          create: {
            args: Prisma.WorkflowStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload>
          }
          createMany: {
            args: Prisma.WorkflowStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload>[]
          }
          delete: {
            args: Prisma.WorkflowStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload>
          }
          update: {
            args: Prisma.WorkflowStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowStepPayload>
          }
          aggregate: {
            args: Prisma.WorkflowStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflowStep>
          }
          groupBy: {
            args: Prisma.WorkflowStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowStepCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowStepCountAggregateOutputType> | number
          }
        }
      }
      CallHistory: {
        payload: Prisma.$CallHistoryPayload<ExtArgs>
        fields: Prisma.CallHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CallHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CallHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          findFirst: {
            args: Prisma.CallHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CallHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          findMany: {
            args: Prisma.CallHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>[]
          }
          create: {
            args: Prisma.CallHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          createMany: {
            args: Prisma.CallHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CallHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>[]
          }
          delete: {
            args: Prisma.CallHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          update: {
            args: Prisma.CallHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          deleteMany: {
            args: Prisma.CallHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CallHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CallHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>[]
          }
          upsert: {
            args: Prisma.CallHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CallHistoryPayload>
          }
          aggregate: {
            args: Prisma.CallHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCallHistory>
          }
          groupBy: {
            args: Prisma.CallHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CallHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CallHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<CallHistoryCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    availabilitySchedule?: AvailabilityScheduleOmit
    eventType?: EventTypeOmit
    availability?: AvailabilityOmit
    bookingQuestion?: BookingQuestionOmit
    bookingAnswer?: BookingAnswerOmit
    dateOverride?: DateOverrideOmit
    booking?: BookingOmit
    workflow?: WorkflowOmit
    workflowStep?: WorkflowStepOmit
    callHistory?: CallHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    eventTypes: number
    availability: number
    schedules: number
    workflows: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventTypes?: boolean | UserCountOutputTypeCountEventTypesArgs
    availability?: boolean | UserCountOutputTypeCountAvailabilityArgs
    schedules?: boolean | UserCountOutputTypeCountSchedulesArgs
    workflows?: boolean | UserCountOutputTypeCountWorkflowsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTypeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityScheduleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }


  /**
   * Count Type AvailabilityScheduleCountOutputType
   */

  export type AvailabilityScheduleCountOutputType = {
    availability: number
  }

  export type AvailabilityScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    availability?: boolean | AvailabilityScheduleCountOutputTypeCountAvailabilityArgs
  }

  // Custom InputTypes
  /**
   * AvailabilityScheduleCountOutputType without action
   */
  export type AvailabilityScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilityScheduleCountOutputType
     */
    select?: AvailabilityScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailabilityScheduleCountOutputType without action
   */
  export type AvailabilityScheduleCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }


  /**
   * Count Type EventTypeCountOutputType
   */

  export type EventTypeCountOutputType = {
    bookings: number
    questions: number
    overrides: number
  }

  export type EventTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | EventTypeCountOutputTypeCountBookingsArgs
    questions?: boolean | EventTypeCountOutputTypeCountQuestionsArgs
    overrides?: boolean | EventTypeCountOutputTypeCountOverridesArgs
  }

  // Custom InputTypes
  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventTypeCountOutputType
     */
    select?: EventTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingQuestionWhereInput
  }

  /**
   * EventTypeCountOutputType without action
   */
  export type EventTypeCountOutputTypeCountOverridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DateOverrideWhereInput
  }


  /**
   * Count Type BookingQuestionCountOutputType
   */

  export type BookingQuestionCountOutputType = {
    answers: number
  }

  export type BookingQuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | BookingQuestionCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * BookingQuestionCountOutputType without action
   */
  export type BookingQuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestionCountOutputType
     */
    select?: BookingQuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingQuestionCountOutputType without action
   */
  export type BookingQuestionCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingAnswerWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    answers: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    answers?: boolean | BookingCountOutputTypeCountAnswersArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingAnswerWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    steps: number
    callHistory: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | WorkflowCountOutputTypeCountStepsArgs
    callHistory?: boolean | WorkflowCountOutputTypeCountCallHistoryArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowStepWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountCallHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    username: string | null
    bio: string | null
    timezone: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    username: string | null
    bio: string | null
    timezone: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    username: number
    bio: number
    timezone: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    bio?: true
    timezone?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    bio?: true
    timezone?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    username?: true
    bio?: true
    timezone?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    username: string
    bio: string | null
    timezone: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    bio?: boolean
    timezone?: boolean
    createdAt?: boolean
    eventTypes?: boolean | User$eventTypesArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    bio?: boolean
    timezone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    bio?: boolean
    timezone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    username?: boolean
    bio?: boolean
    timezone?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "username" | "bio" | "timezone" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventTypes?: boolean | User$eventTypesArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    schedules?: boolean | User$schedulesArgs<ExtArgs>
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      eventTypes: Prisma.$EventTypePayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
      schedules: Prisma.$AvailabilitySchedulePayload<ExtArgs>[]
      workflows: Prisma.$WorkflowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      username: string
      bio: string | null
      timezone: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventTypes<T extends User$eventTypesArgs<ExtArgs> = {}>(args?: Subset<T, User$eventTypesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends User$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends User$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, User$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workflows<T extends User$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, User$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly timezone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.eventTypes
   */
  export type User$eventTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    where?: EventTypeWhereInput
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    cursor?: EventTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * User.availability
   */
  export type User$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * User.schedules
   */
  export type User$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    where?: AvailabilityScheduleWhereInput
    orderBy?: AvailabilityScheduleOrderByWithRelationInput | AvailabilityScheduleOrderByWithRelationInput[]
    cursor?: AvailabilityScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScheduleScalarFieldEnum | AvailabilityScheduleScalarFieldEnum[]
  }

  /**
   * User.workflows
   */
  export type User$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AvailabilitySchedule
   */

  export type AggregateAvailabilitySchedule = {
    _count: AvailabilityScheduleCountAggregateOutputType | null
    _min: AvailabilityScheduleMinAggregateOutputType | null
    _max: AvailabilityScheduleMaxAggregateOutputType | null
  }

  export type AvailabilityScheduleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    isDefault: boolean | null
    timezone: string | null
    createdAt: Date | null
  }

  export type AvailabilityScheduleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    isDefault: boolean | null
    timezone: string | null
    createdAt: Date | null
  }

  export type AvailabilityScheduleCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    isDefault: number
    timezone: number
    createdAt: number
    _all: number
  }


  export type AvailabilityScheduleMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isDefault?: true
    timezone?: true
    createdAt?: true
  }

  export type AvailabilityScheduleMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isDefault?: true
    timezone?: true
    createdAt?: true
  }

  export type AvailabilityScheduleCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    isDefault?: true
    timezone?: true
    createdAt?: true
    _all?: true
  }

  export type AvailabilityScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySchedule to aggregate.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: AvailabilityScheduleOrderByWithRelationInput | AvailabilityScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailabilitySchedules
    **/
    _count?: true | AvailabilityScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityScheduleMaxAggregateInputType
  }

  export type GetAvailabilityScheduleAggregateType<T extends AvailabilityScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailabilitySchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailabilitySchedule[P]>
      : GetScalarType<T[P], AggregateAvailabilitySchedule[P]>
  }




  export type AvailabilityScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityScheduleWhereInput
    orderBy?: AvailabilityScheduleOrderByWithAggregationInput | AvailabilityScheduleOrderByWithAggregationInput[]
    by: AvailabilityScheduleScalarFieldEnum[] | AvailabilityScheduleScalarFieldEnum
    having?: AvailabilityScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityScheduleCountAggregateInputType | true
    _min?: AvailabilityScheduleMinAggregateInputType
    _max?: AvailabilityScheduleMaxAggregateInputType
  }

  export type AvailabilityScheduleGroupByOutputType = {
    id: string
    userId: string
    name: string
    isDefault: boolean
    timezone: string
    createdAt: Date
    _count: AvailabilityScheduleCountAggregateOutputType | null
    _min: AvailabilityScheduleMinAggregateOutputType | null
    _max: AvailabilityScheduleMaxAggregateOutputType | null
  }

  type GetAvailabilityScheduleGroupByPayload<T extends AvailabilityScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityScheduleGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilityScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isDefault?: boolean
    timezone?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    availability?: boolean | AvailabilitySchedule$availabilityArgs<ExtArgs>
    _count?: boolean | AvailabilityScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySchedule"]>

  export type AvailabilityScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isDefault?: boolean
    timezone?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySchedule"]>

  export type AvailabilityScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    isDefault?: boolean
    timezone?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availabilitySchedule"]>

  export type AvailabilityScheduleSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    isDefault?: boolean
    timezone?: boolean
    createdAt?: boolean
  }

  export type AvailabilityScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "isDefault" | "timezone" | "createdAt", ExtArgs["result"]["availabilitySchedule"]>
  export type AvailabilityScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    availability?: boolean | AvailabilitySchedule$availabilityArgs<ExtArgs>
    _count?: boolean | AvailabilityScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailabilityScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AvailabilityScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AvailabilitySchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailabilitySchedule"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      isDefault: boolean
      timezone: string
      createdAt: Date
    }, ExtArgs["result"]["availabilitySchedule"]>
    composites: {}
  }

  type AvailabilityScheduleGetPayload<S extends boolean | null | undefined | AvailabilityScheduleDefaultArgs> = $Result.GetResult<Prisma.$AvailabilitySchedulePayload, S>

  type AvailabilityScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityScheduleCountAggregateInputType | true
    }

  export interface AvailabilityScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailabilitySchedule'], meta: { name: 'AvailabilitySchedule' } }
    /**
     * Find zero or one AvailabilitySchedule that matches the filter.
     * @param {AvailabilityScheduleFindUniqueArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityScheduleFindUniqueArgs>(args: SelectSubset<T, AvailabilityScheduleFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityScheduleClient<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailabilitySchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityScheduleFindUniqueOrThrowArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityScheduleClient<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleFindFirstArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityScheduleFindFirstArgs>(args?: SelectSubset<T, AvailabilityScheduleFindFirstArgs<ExtArgs>>): Prisma__AvailabilityScheduleClient<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailabilitySchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleFindFirstOrThrowArgs} args - Arguments to find a AvailabilitySchedule
     * @example
     * // Get one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityScheduleClient<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailabilitySchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailabilitySchedules
     * const availabilitySchedules = await prisma.availabilitySchedule.findMany()
     * 
     * // Get first 10 AvailabilitySchedules
     * const availabilitySchedules = await prisma.availabilitySchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityScheduleWithIdOnly = await prisma.availabilitySchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityScheduleFindManyArgs>(args?: SelectSubset<T, AvailabilityScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailabilitySchedule.
     * @param {AvailabilityScheduleCreateArgs} args - Arguments to create a AvailabilitySchedule.
     * @example
     * // Create one AvailabilitySchedule
     * const AvailabilitySchedule = await prisma.availabilitySchedule.create({
     *   data: {
     *     // ... data to create a AvailabilitySchedule
     *   }
     * })
     * 
     */
    create<T extends AvailabilityScheduleCreateArgs>(args: SelectSubset<T, AvailabilityScheduleCreateArgs<ExtArgs>>): Prisma__AvailabilityScheduleClient<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailabilitySchedules.
     * @param {AvailabilityScheduleCreateManyArgs} args - Arguments to create many AvailabilitySchedules.
     * @example
     * // Create many AvailabilitySchedules
     * const availabilitySchedule = await prisma.availabilitySchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityScheduleCreateManyArgs>(args?: SelectSubset<T, AvailabilityScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailabilitySchedules and returns the data saved in the database.
     * @param {AvailabilityScheduleCreateManyAndReturnArgs} args - Arguments to create many AvailabilitySchedules.
     * @example
     * // Create many AvailabilitySchedules
     * const availabilitySchedule = await prisma.availabilitySchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailabilitySchedules and only return the `id`
     * const availabilityScheduleWithIdOnly = await prisma.availabilitySchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailabilitySchedule.
     * @param {AvailabilityScheduleDeleteArgs} args - Arguments to delete one AvailabilitySchedule.
     * @example
     * // Delete one AvailabilitySchedule
     * const AvailabilitySchedule = await prisma.availabilitySchedule.delete({
     *   where: {
     *     // ... filter to delete one AvailabilitySchedule
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityScheduleDeleteArgs>(args: SelectSubset<T, AvailabilityScheduleDeleteArgs<ExtArgs>>): Prisma__AvailabilityScheduleClient<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailabilitySchedule.
     * @param {AvailabilityScheduleUpdateArgs} args - Arguments to update one AvailabilitySchedule.
     * @example
     * // Update one AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityScheduleUpdateArgs>(args: SelectSubset<T, AvailabilityScheduleUpdateArgs<ExtArgs>>): Prisma__AvailabilityScheduleClient<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailabilitySchedules.
     * @param {AvailabilityScheduleDeleteManyArgs} args - Arguments to filter AvailabilitySchedules to delete.
     * @example
     * // Delete a few AvailabilitySchedules
     * const { count } = await prisma.availabilitySchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityScheduleDeleteManyArgs>(args?: SelectSubset<T, AvailabilityScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailabilitySchedules
     * const availabilitySchedule = await prisma.availabilitySchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityScheduleUpdateManyArgs>(args: SelectSubset<T, AvailabilityScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailabilitySchedules and returns the data updated in the database.
     * @param {AvailabilityScheduleUpdateManyAndReturnArgs} args - Arguments to update many AvailabilitySchedules.
     * @example
     * // Update many AvailabilitySchedules
     * const availabilitySchedule = await prisma.availabilitySchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailabilitySchedules and only return the `id`
     * const availabilityScheduleWithIdOnly = await prisma.availabilitySchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilityScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailabilitySchedule.
     * @param {AvailabilityScheduleUpsertArgs} args - Arguments to update or create a AvailabilitySchedule.
     * @example
     * // Update or create a AvailabilitySchedule
     * const availabilitySchedule = await prisma.availabilitySchedule.upsert({
     *   create: {
     *     // ... data to create a AvailabilitySchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailabilitySchedule we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityScheduleUpsertArgs>(args: SelectSubset<T, AvailabilityScheduleUpsertArgs<ExtArgs>>): Prisma__AvailabilityScheduleClient<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailabilitySchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleCountArgs} args - Arguments to filter AvailabilitySchedules to count.
     * @example
     * // Count the number of AvailabilitySchedules
     * const count = await prisma.availabilitySchedule.count({
     *   where: {
     *     // ... the filter for the AvailabilitySchedules we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityScheduleCountArgs>(
      args?: Subset<T, AvailabilityScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailabilitySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityScheduleAggregateArgs>(args: Subset<T, AvailabilityScheduleAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityScheduleAggregateType<T>>

    /**
     * Group by AvailabilitySchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityScheduleGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityScheduleGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailabilitySchedule model
   */
  readonly fields: AvailabilityScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailabilitySchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availability<T extends AvailabilitySchedule$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, AvailabilitySchedule$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AvailabilitySchedule model
   */
  interface AvailabilityScheduleFieldRefs {
    readonly id: FieldRef<"AvailabilitySchedule", 'String'>
    readonly userId: FieldRef<"AvailabilitySchedule", 'String'>
    readonly name: FieldRef<"AvailabilitySchedule", 'String'>
    readonly isDefault: FieldRef<"AvailabilitySchedule", 'Boolean'>
    readonly timezone: FieldRef<"AvailabilitySchedule", 'String'>
    readonly createdAt: FieldRef<"AvailabilitySchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AvailabilitySchedule findUnique
   */
  export type AvailabilityScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }

  /**
   * AvailabilitySchedule findUniqueOrThrow
   */
  export type AvailabilityScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }

  /**
   * AvailabilitySchedule findFirst
   */
  export type AvailabilityScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: AvailabilityScheduleOrderByWithRelationInput | AvailabilityScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySchedules.
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySchedules.
     */
    distinct?: AvailabilityScheduleScalarFieldEnum | AvailabilityScheduleScalarFieldEnum[]
  }

  /**
   * AvailabilitySchedule findFirstOrThrow
   */
  export type AvailabilityScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySchedule to fetch.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: AvailabilityScheduleOrderByWithRelationInput | AvailabilityScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailabilitySchedules.
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySchedules.
     */
    distinct?: AvailabilityScheduleScalarFieldEnum | AvailabilityScheduleScalarFieldEnum[]
  }

  /**
   * AvailabilitySchedule findMany
   */
  export type AvailabilityScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    /**
     * Filter, which AvailabilitySchedules to fetch.
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailabilitySchedules to fetch.
     */
    orderBy?: AvailabilityScheduleOrderByWithRelationInput | AvailabilityScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailabilitySchedules.
     */
    cursor?: AvailabilityScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailabilitySchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailabilitySchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailabilitySchedules.
     */
    distinct?: AvailabilityScheduleScalarFieldEnum | AvailabilityScheduleScalarFieldEnum[]
  }

  /**
   * AvailabilitySchedule create
   */
  export type AvailabilityScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailabilitySchedule.
     */
    data: XOR<AvailabilityScheduleCreateInput, AvailabilityScheduleUncheckedCreateInput>
  }

  /**
   * AvailabilitySchedule createMany
   */
  export type AvailabilityScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailabilitySchedules.
     */
    data: AvailabilityScheduleCreateManyInput | AvailabilityScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailabilitySchedule createManyAndReturn
   */
  export type AvailabilityScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many AvailabilitySchedules.
     */
    data: AvailabilityScheduleCreateManyInput | AvailabilityScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySchedule update
   */
  export type AvailabilityScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailabilitySchedule.
     */
    data: XOR<AvailabilityScheduleUpdateInput, AvailabilityScheduleUncheckedUpdateInput>
    /**
     * Choose, which AvailabilitySchedule to update.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }

  /**
   * AvailabilitySchedule updateMany
   */
  export type AvailabilityScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailabilitySchedules.
     */
    data: XOR<AvailabilityScheduleUpdateManyMutationInput, AvailabilityScheduleUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySchedules to update
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * Limit how many AvailabilitySchedules to update.
     */
    limit?: number
  }

  /**
   * AvailabilitySchedule updateManyAndReturn
   */
  export type AvailabilityScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * The data used to update AvailabilitySchedules.
     */
    data: XOR<AvailabilityScheduleUpdateManyMutationInput, AvailabilityScheduleUncheckedUpdateManyInput>
    /**
     * Filter which AvailabilitySchedules to update
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * Limit how many AvailabilitySchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AvailabilitySchedule upsert
   */
  export type AvailabilityScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailabilitySchedule to update in case it exists.
     */
    where: AvailabilityScheduleWhereUniqueInput
    /**
     * In case the AvailabilitySchedule found by the `where` argument doesn't exist, create a new AvailabilitySchedule with this data.
     */
    create: XOR<AvailabilityScheduleCreateInput, AvailabilityScheduleUncheckedCreateInput>
    /**
     * In case the AvailabilitySchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityScheduleUpdateInput, AvailabilityScheduleUncheckedUpdateInput>
  }

  /**
   * AvailabilitySchedule delete
   */
  export type AvailabilityScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    /**
     * Filter which AvailabilitySchedule to delete.
     */
    where: AvailabilityScheduleWhereUniqueInput
  }

  /**
   * AvailabilitySchedule deleteMany
   */
  export type AvailabilityScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailabilitySchedules to delete
     */
    where?: AvailabilityScheduleWhereInput
    /**
     * Limit how many AvailabilitySchedules to delete.
     */
    limit?: number
  }

  /**
   * AvailabilitySchedule.availability
   */
  export type AvailabilitySchedule$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * AvailabilitySchedule without action
   */
  export type AvailabilityScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
  }


  /**
   * Model EventType
   */

  export type AggregateEventType = {
    _count: EventTypeCountAggregateOutputType | null
    _avg: EventTypeAvgAggregateOutputType | null
    _sum: EventTypeSumAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  export type EventTypeAvgAggregateOutputType = {
    duration: number | null
    bufferMinutes: number | null
  }

  export type EventTypeSumAggregateOutputType = {
    duration: number | null
    bufferMinutes: number | null
  }

  export type EventTypeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    duration: number | null
    slug: string | null
    isActive: boolean | null
    color: string | null
    bufferMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    duration: number | null
    slug: string | null
    isActive: boolean | null
    color: string | null
    bufferMinutes: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventTypeCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    duration: number
    slug: number
    isActive: number
    color: number
    bufferMinutes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventTypeAvgAggregateInputType = {
    duration?: true
    bufferMinutes?: true
  }

  export type EventTypeSumAggregateInputType = {
    duration?: true
    bufferMinutes?: true
  }

  export type EventTypeMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    duration?: true
    slug?: true
    isActive?: true
    color?: true
    bufferMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    duration?: true
    slug?: true
    isActive?: true
    color?: true
    bufferMinutes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventTypeCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    duration?: true
    slug?: true
    isActive?: true
    color?: true
    bufferMinutes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EventTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventType to aggregate.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventTypes
    **/
    _count?: true | EventTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventTypeMaxAggregateInputType
  }

  export type GetEventTypeAggregateType<T extends EventTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventType[P]>
      : GetScalarType<T[P], AggregateEventType[P]>
  }




  export type EventTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventTypeWhereInput
    orderBy?: EventTypeOrderByWithAggregationInput | EventTypeOrderByWithAggregationInput[]
    by: EventTypeScalarFieldEnum[] | EventTypeScalarFieldEnum
    having?: EventTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventTypeCountAggregateInputType | true
    _avg?: EventTypeAvgAggregateInputType
    _sum?: EventTypeSumAggregateInputType
    _min?: EventTypeMinAggregateInputType
    _max?: EventTypeMaxAggregateInputType
  }

  export type EventTypeGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    duration: number
    slug: string
    isActive: boolean
    color: string
    bufferMinutes: number
    createdAt: Date
    updatedAt: Date
    _count: EventTypeCountAggregateOutputType | null
    _avg: EventTypeAvgAggregateOutputType | null
    _sum: EventTypeSumAggregateOutputType | null
    _min: EventTypeMinAggregateOutputType | null
    _max: EventTypeMaxAggregateOutputType | null
  }

  type GetEventTypeGroupByPayload<T extends EventTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
            : GetScalarType<T[P], EventTypeGroupByOutputType[P]>
        }
      >
    >


  export type EventTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    slug?: boolean
    isActive?: boolean
    color?: boolean
    bufferMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | EventType$bookingsArgs<ExtArgs>
    questions?: boolean | EventType$questionsArgs<ExtArgs>
    overrides?: boolean | EventType$overridesArgs<ExtArgs>
    _count?: boolean | EventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventType"]>

  export type EventTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    slug?: boolean
    isActive?: boolean
    color?: boolean
    bufferMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventType"]>

  export type EventTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    slug?: boolean
    isActive?: boolean
    color?: boolean
    bufferMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventType"]>

  export type EventTypeSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    duration?: boolean
    slug?: boolean
    isActive?: boolean
    color?: boolean
    bufferMinutes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "duration" | "slug" | "isActive" | "color" | "bufferMinutes" | "createdAt" | "updatedAt", ExtArgs["result"]["eventType"]>
  export type EventTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | EventType$bookingsArgs<ExtArgs>
    questions?: boolean | EventType$questionsArgs<ExtArgs>
    overrides?: boolean | EventType$overridesArgs<ExtArgs>
    _count?: boolean | EventTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventType"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      questions: Prisma.$BookingQuestionPayload<ExtArgs>[]
      overrides: Prisma.$DateOverridePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      duration: number
      slug: string
      isActive: boolean
      color: string
      bufferMinutes: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["eventType"]>
    composites: {}
  }

  type EventTypeGetPayload<S extends boolean | null | undefined | EventTypeDefaultArgs> = $Result.GetResult<Prisma.$EventTypePayload, S>

  type EventTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventTypeCountAggregateInputType | true
    }

  export interface EventTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventType'], meta: { name: 'EventType' } }
    /**
     * Find zero or one EventType that matches the filter.
     * @param {EventTypeFindUniqueArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventTypeFindUniqueArgs>(args: SelectSubset<T, EventTypeFindUniqueArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventTypeFindUniqueOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventTypeFindFirstArgs>(args?: SelectSubset<T, EventTypeFindFirstArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindFirstOrThrowArgs} args - Arguments to find a EventType
     * @example
     * // Get one EventType
     * const eventType = await prisma.eventType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventTypes
     * const eventTypes = await prisma.eventType.findMany()
     * 
     * // Get first 10 EventTypes
     * const eventTypes = await prisma.eventType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventTypeWithIdOnly = await prisma.eventType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventTypeFindManyArgs>(args?: SelectSubset<T, EventTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventType.
     * @param {EventTypeCreateArgs} args - Arguments to create a EventType.
     * @example
     * // Create one EventType
     * const EventType = await prisma.eventType.create({
     *   data: {
     *     // ... data to create a EventType
     *   }
     * })
     * 
     */
    create<T extends EventTypeCreateArgs>(args: SelectSubset<T, EventTypeCreateArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventTypes.
     * @param {EventTypeCreateManyArgs} args - Arguments to create many EventTypes.
     * @example
     * // Create many EventTypes
     * const eventType = await prisma.eventType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventTypeCreateManyArgs>(args?: SelectSubset<T, EventTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventTypes and returns the data saved in the database.
     * @param {EventTypeCreateManyAndReturnArgs} args - Arguments to create many EventTypes.
     * @example
     * // Create many EventTypes
     * const eventType = await prisma.eventType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventTypes and only return the `id`
     * const eventTypeWithIdOnly = await prisma.eventType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventType.
     * @param {EventTypeDeleteArgs} args - Arguments to delete one EventType.
     * @example
     * // Delete one EventType
     * const EventType = await prisma.eventType.delete({
     *   where: {
     *     // ... filter to delete one EventType
     *   }
     * })
     * 
     */
    delete<T extends EventTypeDeleteArgs>(args: SelectSubset<T, EventTypeDeleteArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventType.
     * @param {EventTypeUpdateArgs} args - Arguments to update one EventType.
     * @example
     * // Update one EventType
     * const eventType = await prisma.eventType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventTypeUpdateArgs>(args: SelectSubset<T, EventTypeUpdateArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventTypes.
     * @param {EventTypeDeleteManyArgs} args - Arguments to filter EventTypes to delete.
     * @example
     * // Delete a few EventTypes
     * const { count } = await prisma.eventType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventTypeDeleteManyArgs>(args?: SelectSubset<T, EventTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventTypes
     * const eventType = await prisma.eventType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventTypeUpdateManyArgs>(args: SelectSubset<T, EventTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventTypes and returns the data updated in the database.
     * @param {EventTypeUpdateManyAndReturnArgs} args - Arguments to update many EventTypes.
     * @example
     * // Update many EventTypes
     * const eventType = await prisma.eventType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventTypes and only return the `id`
     * const eventTypeWithIdOnly = await prisma.eventType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, EventTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventType.
     * @param {EventTypeUpsertArgs} args - Arguments to update or create a EventType.
     * @example
     * // Update or create a EventType
     * const eventType = await prisma.eventType.upsert({
     *   create: {
     *     // ... data to create a EventType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventType we want to update
     *   }
     * })
     */
    upsert<T extends EventTypeUpsertArgs>(args: SelectSubset<T, EventTypeUpsertArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeCountArgs} args - Arguments to filter EventTypes to count.
     * @example
     * // Count the number of EventTypes
     * const count = await prisma.eventType.count({
     *   where: {
     *     // ... the filter for the EventTypes we want to count
     *   }
     * })
    **/
    count<T extends EventTypeCountArgs>(
      args?: Subset<T, EventTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventTypeAggregateArgs>(args: Subset<T, EventTypeAggregateArgs>): Prisma.PrismaPromise<GetEventTypeAggregateType<T>>

    /**
     * Group by EventType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventTypeGroupByArgs} args - Group by arguments.
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
      T extends EventTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventTypeGroupByArgs['orderBy'] }
        : { orderBy?: EventTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventType model
   */
  readonly fields: EventTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bookings<T extends EventType$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, EventType$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends EventType$questionsArgs<ExtArgs> = {}>(args?: Subset<T, EventType$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    overrides<T extends EventType$overridesArgs<ExtArgs> = {}>(args?: Subset<T, EventType$overridesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EventType model
   */
  interface EventTypeFieldRefs {
    readonly id: FieldRef<"EventType", 'String'>
    readonly userId: FieldRef<"EventType", 'String'>
    readonly title: FieldRef<"EventType", 'String'>
    readonly description: FieldRef<"EventType", 'String'>
    readonly duration: FieldRef<"EventType", 'Int'>
    readonly slug: FieldRef<"EventType", 'String'>
    readonly isActive: FieldRef<"EventType", 'Boolean'>
    readonly color: FieldRef<"EventType", 'String'>
    readonly bufferMinutes: FieldRef<"EventType", 'Int'>
    readonly createdAt: FieldRef<"EventType", 'DateTime'>
    readonly updatedAt: FieldRef<"EventType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventType findUnique
   */
  export type EventTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType findUniqueOrThrow
   */
  export type EventTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType findFirst
   */
  export type EventTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * EventType findFirstOrThrow
   */
  export type EventTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventType to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * EventType findMany
   */
  export type EventTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter, which EventTypes to fetch.
     */
    where?: EventTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventTypes to fetch.
     */
    orderBy?: EventTypeOrderByWithRelationInput | EventTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventTypes.
     */
    cursor?: EventTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventTypes.
     */
    distinct?: EventTypeScalarFieldEnum | EventTypeScalarFieldEnum[]
  }

  /**
   * EventType create
   */
  export type EventTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventType.
     */
    data: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
  }

  /**
   * EventType createMany
   */
  export type EventTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventTypes.
     */
    data: EventTypeCreateManyInput | EventTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventType createManyAndReturn
   */
  export type EventTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * The data used to create many EventTypes.
     */
    data: EventTypeCreateManyInput | EventTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventType update
   */
  export type EventTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventType.
     */
    data: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
    /**
     * Choose, which EventType to update.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType updateMany
   */
  export type EventTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventTypes.
     */
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyInput>
    /**
     * Filter which EventTypes to update
     */
    where?: EventTypeWhereInput
    /**
     * Limit how many EventTypes to update.
     */
    limit?: number
  }

  /**
   * EventType updateManyAndReturn
   */
  export type EventTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * The data used to update EventTypes.
     */
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyInput>
    /**
     * Filter which EventTypes to update
     */
    where?: EventTypeWhereInput
    /**
     * Limit how many EventTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventType upsert
   */
  export type EventTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventType to update in case it exists.
     */
    where: EventTypeWhereUniqueInput
    /**
     * In case the EventType found by the `where` argument doesn't exist, create a new EventType with this data.
     */
    create: XOR<EventTypeCreateInput, EventTypeUncheckedCreateInput>
    /**
     * In case the EventType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventTypeUpdateInput, EventTypeUncheckedUpdateInput>
  }

  /**
   * EventType delete
   */
  export type EventTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
    /**
     * Filter which EventType to delete.
     */
    where: EventTypeWhereUniqueInput
  }

  /**
   * EventType deleteMany
   */
  export type EventTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventTypes to delete
     */
    where?: EventTypeWhereInput
    /**
     * Limit how many EventTypes to delete.
     */
    limit?: number
  }

  /**
   * EventType.bookings
   */
  export type EventType$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * EventType.questions
   */
  export type EventType$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    where?: BookingQuestionWhereInput
    orderBy?: BookingQuestionOrderByWithRelationInput | BookingQuestionOrderByWithRelationInput[]
    cursor?: BookingQuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingQuestionScalarFieldEnum | BookingQuestionScalarFieldEnum[]
  }

  /**
   * EventType.overrides
   */
  export type EventType$overridesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    where?: DateOverrideWhereInput
    orderBy?: DateOverrideOrderByWithRelationInput | DateOverrideOrderByWithRelationInput[]
    cursor?: DateOverrideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DateOverrideScalarFieldEnum | DateOverrideScalarFieldEnum[]
  }

  /**
   * EventType without action
   */
  export type EventTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventType
     */
    select?: EventTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventType
     */
    omit?: EventTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventTypeInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    scheduleId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    timezone: string | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    scheduleId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    timezone: string | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    userId: number
    scheduleId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    timezone: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilitySumAggregateInputType = {
    dayOfWeek?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    userId?: true
    scheduleId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    timezone?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    userId?: true
    scheduleId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    timezone?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    userId?: true
    scheduleId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    timezone?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    userId: string
    scheduleId: string | null
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone: string
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scheduleId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | Availability$scheduleArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scheduleId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | Availability$scheduleArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    scheduleId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | Availability$scheduleArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    userId?: boolean
    scheduleId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "scheduleId" | "dayOfWeek" | "startTime" | "endTime" | "timezone", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | Availability$scheduleArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | Availability$scheduleArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    schedule?: boolean | Availability$scheduleArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      schedule: Prisma.$AvailabilitySchedulePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      scheduleId: string | null
      dayOfWeek: number
      startTime: string
      endTime: string
      timezone: string
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedule<T extends Availability$scheduleArgs<ExtArgs> = {}>(args?: Subset<T, Availability$scheduleArgs<ExtArgs>>): Prisma__AvailabilityScheduleClient<$Result.GetResult<Prisma.$AvailabilitySchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly userId: FieldRef<"Availability", 'String'>
    readonly scheduleId: FieldRef<"Availability", 'String'>
    readonly dayOfWeek: FieldRef<"Availability", 'Int'>
    readonly startTime: FieldRef<"Availability", 'String'>
    readonly endTime: FieldRef<"Availability", 'String'>
    readonly timezone: FieldRef<"Availability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability.schedule
   */
  export type Availability$scheduleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailabilitySchedule
     */
    select?: AvailabilityScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailabilitySchedule
     */
    omit?: AvailabilityScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityScheduleInclude<ExtArgs> | null
    where?: AvailabilityScheduleWhereInput
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model BookingQuestion
   */

  export type AggregateBookingQuestion = {
    _count: BookingQuestionCountAggregateOutputType | null
    _avg: BookingQuestionAvgAggregateOutputType | null
    _sum: BookingQuestionSumAggregateOutputType | null
    _min: BookingQuestionMinAggregateOutputType | null
    _max: BookingQuestionMaxAggregateOutputType | null
  }

  export type BookingQuestionAvgAggregateOutputType = {
    order: number | null
  }

  export type BookingQuestionSumAggregateOutputType = {
    order: number | null
  }

  export type BookingQuestionMinAggregateOutputType = {
    id: string | null
    eventTypeId: string | null
    label: string | null
    placeholder: string | null
    type: string | null
    required: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type BookingQuestionMaxAggregateOutputType = {
    id: string | null
    eventTypeId: string | null
    label: string | null
    placeholder: string | null
    type: string | null
    required: boolean | null
    order: number | null
    createdAt: Date | null
  }

  export type BookingQuestionCountAggregateOutputType = {
    id: number
    eventTypeId: number
    label: number
    placeholder: number
    type: number
    required: number
    order: number
    createdAt: number
    _all: number
  }


  export type BookingQuestionAvgAggregateInputType = {
    order?: true
  }

  export type BookingQuestionSumAggregateInputType = {
    order?: true
  }

  export type BookingQuestionMinAggregateInputType = {
    id?: true
    eventTypeId?: true
    label?: true
    placeholder?: true
    type?: true
    required?: true
    order?: true
    createdAt?: true
  }

  export type BookingQuestionMaxAggregateInputType = {
    id?: true
    eventTypeId?: true
    label?: true
    placeholder?: true
    type?: true
    required?: true
    order?: true
    createdAt?: true
  }

  export type BookingQuestionCountAggregateInputType = {
    id?: true
    eventTypeId?: true
    label?: true
    placeholder?: true
    type?: true
    required?: true
    order?: true
    createdAt?: true
    _all?: true
  }

  export type BookingQuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingQuestion to aggregate.
     */
    where?: BookingQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingQuestions to fetch.
     */
    orderBy?: BookingQuestionOrderByWithRelationInput | BookingQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingQuestions
    **/
    _count?: true | BookingQuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingQuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingQuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingQuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingQuestionMaxAggregateInputType
  }

  export type GetBookingQuestionAggregateType<T extends BookingQuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingQuestion[P]>
      : GetScalarType<T[P], AggregateBookingQuestion[P]>
  }




  export type BookingQuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingQuestionWhereInput
    orderBy?: BookingQuestionOrderByWithAggregationInput | BookingQuestionOrderByWithAggregationInput[]
    by: BookingQuestionScalarFieldEnum[] | BookingQuestionScalarFieldEnum
    having?: BookingQuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingQuestionCountAggregateInputType | true
    _avg?: BookingQuestionAvgAggregateInputType
    _sum?: BookingQuestionSumAggregateInputType
    _min?: BookingQuestionMinAggregateInputType
    _max?: BookingQuestionMaxAggregateInputType
  }

  export type BookingQuestionGroupByOutputType = {
    id: string
    eventTypeId: string
    label: string
    placeholder: string | null
    type: string
    required: boolean
    order: number
    createdAt: Date
    _count: BookingQuestionCountAggregateOutputType | null
    _avg: BookingQuestionAvgAggregateOutputType | null
    _sum: BookingQuestionSumAggregateOutputType | null
    _min: BookingQuestionMinAggregateOutputType | null
    _max: BookingQuestionMaxAggregateOutputType | null
  }

  type GetBookingQuestionGroupByPayload<T extends BookingQuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingQuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingQuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingQuestionGroupByOutputType[P]>
            : GetScalarType<T[P], BookingQuestionGroupByOutputType[P]>
        }
      >
    >


  export type BookingQuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypeId?: boolean
    label?: boolean
    placeholder?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    createdAt?: boolean
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
    answers?: boolean | BookingQuestion$answersArgs<ExtArgs>
    _count?: boolean | BookingQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingQuestion"]>

  export type BookingQuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypeId?: boolean
    label?: boolean
    placeholder?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    createdAt?: boolean
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingQuestion"]>

  export type BookingQuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypeId?: boolean
    label?: boolean
    placeholder?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    createdAt?: boolean
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingQuestion"]>

  export type BookingQuestionSelectScalar = {
    id?: boolean
    eventTypeId?: boolean
    label?: boolean
    placeholder?: boolean
    type?: boolean
    required?: boolean
    order?: boolean
    createdAt?: boolean
  }

  export type BookingQuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventTypeId" | "label" | "placeholder" | "type" | "required" | "order" | "createdAt", ExtArgs["result"]["bookingQuestion"]>
  export type BookingQuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
    answers?: boolean | BookingQuestion$answersArgs<ExtArgs>
    _count?: boolean | BookingQuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingQuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }
  export type BookingQuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }

  export type $BookingQuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingQuestion"
    objects: {
      eventType: Prisma.$EventTypePayload<ExtArgs>
      answers: Prisma.$BookingAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventTypeId: string
      label: string
      placeholder: string | null
      type: string
      required: boolean
      order: number
      createdAt: Date
    }, ExtArgs["result"]["bookingQuestion"]>
    composites: {}
  }

  type BookingQuestionGetPayload<S extends boolean | null | undefined | BookingQuestionDefaultArgs> = $Result.GetResult<Prisma.$BookingQuestionPayload, S>

  type BookingQuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingQuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingQuestionCountAggregateInputType | true
    }

  export interface BookingQuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingQuestion'], meta: { name: 'BookingQuestion' } }
    /**
     * Find zero or one BookingQuestion that matches the filter.
     * @param {BookingQuestionFindUniqueArgs} args - Arguments to find a BookingQuestion
     * @example
     * // Get one BookingQuestion
     * const bookingQuestion = await prisma.bookingQuestion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingQuestionFindUniqueArgs>(args: SelectSubset<T, BookingQuestionFindUniqueArgs<ExtArgs>>): Prisma__BookingQuestionClient<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingQuestion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingQuestionFindUniqueOrThrowArgs} args - Arguments to find a BookingQuestion
     * @example
     * // Get one BookingQuestion
     * const bookingQuestion = await prisma.bookingQuestion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingQuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingQuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingQuestionClient<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingQuestion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingQuestionFindFirstArgs} args - Arguments to find a BookingQuestion
     * @example
     * // Get one BookingQuestion
     * const bookingQuestion = await prisma.bookingQuestion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingQuestionFindFirstArgs>(args?: SelectSubset<T, BookingQuestionFindFirstArgs<ExtArgs>>): Prisma__BookingQuestionClient<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingQuestion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingQuestionFindFirstOrThrowArgs} args - Arguments to find a BookingQuestion
     * @example
     * // Get one BookingQuestion
     * const bookingQuestion = await prisma.bookingQuestion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingQuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingQuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingQuestionClient<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingQuestions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingQuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingQuestions
     * const bookingQuestions = await prisma.bookingQuestion.findMany()
     * 
     * // Get first 10 BookingQuestions
     * const bookingQuestions = await prisma.bookingQuestion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingQuestionWithIdOnly = await prisma.bookingQuestion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingQuestionFindManyArgs>(args?: SelectSubset<T, BookingQuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingQuestion.
     * @param {BookingQuestionCreateArgs} args - Arguments to create a BookingQuestion.
     * @example
     * // Create one BookingQuestion
     * const BookingQuestion = await prisma.bookingQuestion.create({
     *   data: {
     *     // ... data to create a BookingQuestion
     *   }
     * })
     * 
     */
    create<T extends BookingQuestionCreateArgs>(args: SelectSubset<T, BookingQuestionCreateArgs<ExtArgs>>): Prisma__BookingQuestionClient<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingQuestions.
     * @param {BookingQuestionCreateManyArgs} args - Arguments to create many BookingQuestions.
     * @example
     * // Create many BookingQuestions
     * const bookingQuestion = await prisma.bookingQuestion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingQuestionCreateManyArgs>(args?: SelectSubset<T, BookingQuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingQuestions and returns the data saved in the database.
     * @param {BookingQuestionCreateManyAndReturnArgs} args - Arguments to create many BookingQuestions.
     * @example
     * // Create many BookingQuestions
     * const bookingQuestion = await prisma.bookingQuestion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingQuestions and only return the `id`
     * const bookingQuestionWithIdOnly = await prisma.bookingQuestion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingQuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingQuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingQuestion.
     * @param {BookingQuestionDeleteArgs} args - Arguments to delete one BookingQuestion.
     * @example
     * // Delete one BookingQuestion
     * const BookingQuestion = await prisma.bookingQuestion.delete({
     *   where: {
     *     // ... filter to delete one BookingQuestion
     *   }
     * })
     * 
     */
    delete<T extends BookingQuestionDeleteArgs>(args: SelectSubset<T, BookingQuestionDeleteArgs<ExtArgs>>): Prisma__BookingQuestionClient<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingQuestion.
     * @param {BookingQuestionUpdateArgs} args - Arguments to update one BookingQuestion.
     * @example
     * // Update one BookingQuestion
     * const bookingQuestion = await prisma.bookingQuestion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingQuestionUpdateArgs>(args: SelectSubset<T, BookingQuestionUpdateArgs<ExtArgs>>): Prisma__BookingQuestionClient<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingQuestions.
     * @param {BookingQuestionDeleteManyArgs} args - Arguments to filter BookingQuestions to delete.
     * @example
     * // Delete a few BookingQuestions
     * const { count } = await prisma.bookingQuestion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingQuestionDeleteManyArgs>(args?: SelectSubset<T, BookingQuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingQuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingQuestions
     * const bookingQuestion = await prisma.bookingQuestion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingQuestionUpdateManyArgs>(args: SelectSubset<T, BookingQuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingQuestions and returns the data updated in the database.
     * @param {BookingQuestionUpdateManyAndReturnArgs} args - Arguments to update many BookingQuestions.
     * @example
     * // Update many BookingQuestions
     * const bookingQuestion = await prisma.bookingQuestion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingQuestions and only return the `id`
     * const bookingQuestionWithIdOnly = await prisma.bookingQuestion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingQuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingQuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingQuestion.
     * @param {BookingQuestionUpsertArgs} args - Arguments to update or create a BookingQuestion.
     * @example
     * // Update or create a BookingQuestion
     * const bookingQuestion = await prisma.bookingQuestion.upsert({
     *   create: {
     *     // ... data to create a BookingQuestion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingQuestion we want to update
     *   }
     * })
     */
    upsert<T extends BookingQuestionUpsertArgs>(args: SelectSubset<T, BookingQuestionUpsertArgs<ExtArgs>>): Prisma__BookingQuestionClient<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingQuestions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingQuestionCountArgs} args - Arguments to filter BookingQuestions to count.
     * @example
     * // Count the number of BookingQuestions
     * const count = await prisma.bookingQuestion.count({
     *   where: {
     *     // ... the filter for the BookingQuestions we want to count
     *   }
     * })
    **/
    count<T extends BookingQuestionCountArgs>(
      args?: Subset<T, BookingQuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingQuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingQuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingQuestionAggregateArgs>(args: Subset<T, BookingQuestionAggregateArgs>): Prisma.PrismaPromise<GetBookingQuestionAggregateType<T>>

    /**
     * Group by BookingQuestion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingQuestionGroupByArgs} args - Group by arguments.
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
      T extends BookingQuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingQuestionGroupByArgs['orderBy'] }
        : { orderBy?: BookingQuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingQuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingQuestion model
   */
  readonly fields: BookingQuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingQuestion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingQuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventType<T extends EventTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventTypeDefaultArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends BookingQuestion$answersArgs<ExtArgs> = {}>(args?: Subset<T, BookingQuestion$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the BookingQuestion model
   */
  interface BookingQuestionFieldRefs {
    readonly id: FieldRef<"BookingQuestion", 'String'>
    readonly eventTypeId: FieldRef<"BookingQuestion", 'String'>
    readonly label: FieldRef<"BookingQuestion", 'String'>
    readonly placeholder: FieldRef<"BookingQuestion", 'String'>
    readonly type: FieldRef<"BookingQuestion", 'String'>
    readonly required: FieldRef<"BookingQuestion", 'Boolean'>
    readonly order: FieldRef<"BookingQuestion", 'Int'>
    readonly createdAt: FieldRef<"BookingQuestion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingQuestion findUnique
   */
  export type BookingQuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BookingQuestion to fetch.
     */
    where: BookingQuestionWhereUniqueInput
  }

  /**
   * BookingQuestion findUniqueOrThrow
   */
  export type BookingQuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BookingQuestion to fetch.
     */
    where: BookingQuestionWhereUniqueInput
  }

  /**
   * BookingQuestion findFirst
   */
  export type BookingQuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BookingQuestion to fetch.
     */
    where?: BookingQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingQuestions to fetch.
     */
    orderBy?: BookingQuestionOrderByWithRelationInput | BookingQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingQuestions.
     */
    cursor?: BookingQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingQuestions.
     */
    distinct?: BookingQuestionScalarFieldEnum | BookingQuestionScalarFieldEnum[]
  }

  /**
   * BookingQuestion findFirstOrThrow
   */
  export type BookingQuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BookingQuestion to fetch.
     */
    where?: BookingQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingQuestions to fetch.
     */
    orderBy?: BookingQuestionOrderByWithRelationInput | BookingQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingQuestions.
     */
    cursor?: BookingQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingQuestions.
     */
    distinct?: BookingQuestionScalarFieldEnum | BookingQuestionScalarFieldEnum[]
  }

  /**
   * BookingQuestion findMany
   */
  export type BookingQuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    /**
     * Filter, which BookingQuestions to fetch.
     */
    where?: BookingQuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingQuestions to fetch.
     */
    orderBy?: BookingQuestionOrderByWithRelationInput | BookingQuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingQuestions.
     */
    cursor?: BookingQuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingQuestions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingQuestions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingQuestions.
     */
    distinct?: BookingQuestionScalarFieldEnum | BookingQuestionScalarFieldEnum[]
  }

  /**
   * BookingQuestion create
   */
  export type BookingQuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingQuestion.
     */
    data: XOR<BookingQuestionCreateInput, BookingQuestionUncheckedCreateInput>
  }

  /**
   * BookingQuestion createMany
   */
  export type BookingQuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingQuestions.
     */
    data: BookingQuestionCreateManyInput | BookingQuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingQuestion createManyAndReturn
   */
  export type BookingQuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * The data used to create many BookingQuestions.
     */
    data: BookingQuestionCreateManyInput | BookingQuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingQuestion update
   */
  export type BookingQuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingQuestion.
     */
    data: XOR<BookingQuestionUpdateInput, BookingQuestionUncheckedUpdateInput>
    /**
     * Choose, which BookingQuestion to update.
     */
    where: BookingQuestionWhereUniqueInput
  }

  /**
   * BookingQuestion updateMany
   */
  export type BookingQuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingQuestions.
     */
    data: XOR<BookingQuestionUpdateManyMutationInput, BookingQuestionUncheckedUpdateManyInput>
    /**
     * Filter which BookingQuestions to update
     */
    where?: BookingQuestionWhereInput
    /**
     * Limit how many BookingQuestions to update.
     */
    limit?: number
  }

  /**
   * BookingQuestion updateManyAndReturn
   */
  export type BookingQuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * The data used to update BookingQuestions.
     */
    data: XOR<BookingQuestionUpdateManyMutationInput, BookingQuestionUncheckedUpdateManyInput>
    /**
     * Filter which BookingQuestions to update
     */
    where?: BookingQuestionWhereInput
    /**
     * Limit how many BookingQuestions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingQuestion upsert
   */
  export type BookingQuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingQuestion to update in case it exists.
     */
    where: BookingQuestionWhereUniqueInput
    /**
     * In case the BookingQuestion found by the `where` argument doesn't exist, create a new BookingQuestion with this data.
     */
    create: XOR<BookingQuestionCreateInput, BookingQuestionUncheckedCreateInput>
    /**
     * In case the BookingQuestion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingQuestionUpdateInput, BookingQuestionUncheckedUpdateInput>
  }

  /**
   * BookingQuestion delete
   */
  export type BookingQuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
    /**
     * Filter which BookingQuestion to delete.
     */
    where: BookingQuestionWhereUniqueInput
  }

  /**
   * BookingQuestion deleteMany
   */
  export type BookingQuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingQuestions to delete
     */
    where?: BookingQuestionWhereInput
    /**
     * Limit how many BookingQuestions to delete.
     */
    limit?: number
  }

  /**
   * BookingQuestion.answers
   */
  export type BookingQuestion$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    where?: BookingAnswerWhereInput
    orderBy?: BookingAnswerOrderByWithRelationInput | BookingAnswerOrderByWithRelationInput[]
    cursor?: BookingAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingAnswerScalarFieldEnum | BookingAnswerScalarFieldEnum[]
  }

  /**
   * BookingQuestion without action
   */
  export type BookingQuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingQuestion
     */
    select?: BookingQuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingQuestion
     */
    omit?: BookingQuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingQuestionInclude<ExtArgs> | null
  }


  /**
   * Model BookingAnswer
   */

  export type AggregateBookingAnswer = {
    _count: BookingAnswerCountAggregateOutputType | null
    _min: BookingAnswerMinAggregateOutputType | null
    _max: BookingAnswerMaxAggregateOutputType | null
  }

  export type BookingAnswerMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    questionId: string | null
    answer: string | null
  }

  export type BookingAnswerMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    questionId: string | null
    answer: string | null
  }

  export type BookingAnswerCountAggregateOutputType = {
    id: number
    bookingId: number
    questionId: number
    answer: number
    _all: number
  }


  export type BookingAnswerMinAggregateInputType = {
    id?: true
    bookingId?: true
    questionId?: true
    answer?: true
  }

  export type BookingAnswerMaxAggregateInputType = {
    id?: true
    bookingId?: true
    questionId?: true
    answer?: true
  }

  export type BookingAnswerCountAggregateInputType = {
    id?: true
    bookingId?: true
    questionId?: true
    answer?: true
    _all?: true
  }

  export type BookingAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingAnswer to aggregate.
     */
    where?: BookingAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingAnswers to fetch.
     */
    orderBy?: BookingAnswerOrderByWithRelationInput | BookingAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingAnswers
    **/
    _count?: true | BookingAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingAnswerMaxAggregateInputType
  }

  export type GetBookingAnswerAggregateType<T extends BookingAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingAnswer[P]>
      : GetScalarType<T[P], AggregateBookingAnswer[P]>
  }




  export type BookingAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingAnswerWhereInput
    orderBy?: BookingAnswerOrderByWithAggregationInput | BookingAnswerOrderByWithAggregationInput[]
    by: BookingAnswerScalarFieldEnum[] | BookingAnswerScalarFieldEnum
    having?: BookingAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingAnswerCountAggregateInputType | true
    _min?: BookingAnswerMinAggregateInputType
    _max?: BookingAnswerMaxAggregateInputType
  }

  export type BookingAnswerGroupByOutputType = {
    id: string
    bookingId: string
    questionId: string
    answer: string
    _count: BookingAnswerCountAggregateOutputType | null
    _min: BookingAnswerMinAggregateOutputType | null
    _max: BookingAnswerMaxAggregateOutputType | null
  }

  type GetBookingAnswerGroupByPayload<T extends BookingAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], BookingAnswerGroupByOutputType[P]>
        }
      >
    >


  export type BookingAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    questionId?: boolean
    answer?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    question?: boolean | BookingQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingAnswer"]>

  export type BookingAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    questionId?: boolean
    answer?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    question?: boolean | BookingQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingAnswer"]>

  export type BookingAnswerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    questionId?: boolean
    answer?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    question?: boolean | BookingQuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingAnswer"]>

  export type BookingAnswerSelectScalar = {
    id?: boolean
    bookingId?: boolean
    questionId?: boolean
    answer?: boolean
  }

  export type BookingAnswerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "questionId" | "answer", ExtArgs["result"]["bookingAnswer"]>
  export type BookingAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    question?: boolean | BookingQuestionDefaultArgs<ExtArgs>
  }
  export type BookingAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    question?: boolean | BookingQuestionDefaultArgs<ExtArgs>
  }
  export type BookingAnswerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    question?: boolean | BookingQuestionDefaultArgs<ExtArgs>
  }

  export type $BookingAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingAnswer"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      question: Prisma.$BookingQuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      questionId: string
      answer: string
    }, ExtArgs["result"]["bookingAnswer"]>
    composites: {}
  }

  type BookingAnswerGetPayload<S extends boolean | null | undefined | BookingAnswerDefaultArgs> = $Result.GetResult<Prisma.$BookingAnswerPayload, S>

  type BookingAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingAnswerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingAnswerCountAggregateInputType | true
    }

  export interface BookingAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingAnswer'], meta: { name: 'BookingAnswer' } }
    /**
     * Find zero or one BookingAnswer that matches the filter.
     * @param {BookingAnswerFindUniqueArgs} args - Arguments to find a BookingAnswer
     * @example
     * // Get one BookingAnswer
     * const bookingAnswer = await prisma.bookingAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingAnswerFindUniqueArgs>(args: SelectSubset<T, BookingAnswerFindUniqueArgs<ExtArgs>>): Prisma__BookingAnswerClient<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookingAnswer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingAnswerFindUniqueOrThrowArgs} args - Arguments to find a BookingAnswer
     * @example
     * // Get one BookingAnswer
     * const bookingAnswer = await prisma.bookingAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingAnswerClient<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAnswerFindFirstArgs} args - Arguments to find a BookingAnswer
     * @example
     * // Get one BookingAnswer
     * const bookingAnswer = await prisma.bookingAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingAnswerFindFirstArgs>(args?: SelectSubset<T, BookingAnswerFindFirstArgs<ExtArgs>>): Prisma__BookingAnswerClient<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookingAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAnswerFindFirstOrThrowArgs} args - Arguments to find a BookingAnswer
     * @example
     * // Get one BookingAnswer
     * const bookingAnswer = await prisma.bookingAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingAnswerClient<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookingAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingAnswers
     * const bookingAnswers = await prisma.bookingAnswer.findMany()
     * 
     * // Get first 10 BookingAnswers
     * const bookingAnswers = await prisma.bookingAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingAnswerWithIdOnly = await prisma.bookingAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingAnswerFindManyArgs>(args?: SelectSubset<T, BookingAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookingAnswer.
     * @param {BookingAnswerCreateArgs} args - Arguments to create a BookingAnswer.
     * @example
     * // Create one BookingAnswer
     * const BookingAnswer = await prisma.bookingAnswer.create({
     *   data: {
     *     // ... data to create a BookingAnswer
     *   }
     * })
     * 
     */
    create<T extends BookingAnswerCreateArgs>(args: SelectSubset<T, BookingAnswerCreateArgs<ExtArgs>>): Prisma__BookingAnswerClient<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookingAnswers.
     * @param {BookingAnswerCreateManyArgs} args - Arguments to create many BookingAnswers.
     * @example
     * // Create many BookingAnswers
     * const bookingAnswer = await prisma.bookingAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingAnswerCreateManyArgs>(args?: SelectSubset<T, BookingAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingAnswers and returns the data saved in the database.
     * @param {BookingAnswerCreateManyAndReturnArgs} args - Arguments to create many BookingAnswers.
     * @example
     * // Create many BookingAnswers
     * const bookingAnswer = await prisma.bookingAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingAnswers and only return the `id`
     * const bookingAnswerWithIdOnly = await prisma.bookingAnswer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BookingAnswer.
     * @param {BookingAnswerDeleteArgs} args - Arguments to delete one BookingAnswer.
     * @example
     * // Delete one BookingAnswer
     * const BookingAnswer = await prisma.bookingAnswer.delete({
     *   where: {
     *     // ... filter to delete one BookingAnswer
     *   }
     * })
     * 
     */
    delete<T extends BookingAnswerDeleteArgs>(args: SelectSubset<T, BookingAnswerDeleteArgs<ExtArgs>>): Prisma__BookingAnswerClient<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookingAnswer.
     * @param {BookingAnswerUpdateArgs} args - Arguments to update one BookingAnswer.
     * @example
     * // Update one BookingAnswer
     * const bookingAnswer = await prisma.bookingAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingAnswerUpdateArgs>(args: SelectSubset<T, BookingAnswerUpdateArgs<ExtArgs>>): Prisma__BookingAnswerClient<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookingAnswers.
     * @param {BookingAnswerDeleteManyArgs} args - Arguments to filter BookingAnswers to delete.
     * @example
     * // Delete a few BookingAnswers
     * const { count } = await prisma.bookingAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingAnswerDeleteManyArgs>(args?: SelectSubset<T, BookingAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingAnswers
     * const bookingAnswer = await prisma.bookingAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingAnswerUpdateManyArgs>(args: SelectSubset<T, BookingAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingAnswers and returns the data updated in the database.
     * @param {BookingAnswerUpdateManyAndReturnArgs} args - Arguments to update many BookingAnswers.
     * @example
     * // Update many BookingAnswers
     * const bookingAnswer = await prisma.bookingAnswer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BookingAnswers and only return the `id`
     * const bookingAnswerWithIdOnly = await prisma.bookingAnswer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingAnswerUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingAnswerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BookingAnswer.
     * @param {BookingAnswerUpsertArgs} args - Arguments to update or create a BookingAnswer.
     * @example
     * // Update or create a BookingAnswer
     * const bookingAnswer = await prisma.bookingAnswer.upsert({
     *   create: {
     *     // ... data to create a BookingAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingAnswer we want to update
     *   }
     * })
     */
    upsert<T extends BookingAnswerUpsertArgs>(args: SelectSubset<T, BookingAnswerUpsertArgs<ExtArgs>>): Prisma__BookingAnswerClient<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookingAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAnswerCountArgs} args - Arguments to filter BookingAnswers to count.
     * @example
     * // Count the number of BookingAnswers
     * const count = await prisma.bookingAnswer.count({
     *   where: {
     *     // ... the filter for the BookingAnswers we want to count
     *   }
     * })
    **/
    count<T extends BookingAnswerCountArgs>(
      args?: Subset<T, BookingAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAnswerAggregateArgs>(args: Subset<T, BookingAnswerAggregateArgs>): Prisma.PrismaPromise<GetBookingAnswerAggregateType<T>>

    /**
     * Group by BookingAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAnswerGroupByArgs} args - Group by arguments.
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
      T extends BookingAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingAnswerGroupByArgs['orderBy'] }
        : { orderBy?: BookingAnswerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingAnswer model
   */
  readonly fields: BookingAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    question<T extends BookingQuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingQuestionDefaultArgs<ExtArgs>>): Prisma__BookingQuestionClient<$Result.GetResult<Prisma.$BookingQuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BookingAnswer model
   */
  interface BookingAnswerFieldRefs {
    readonly id: FieldRef<"BookingAnswer", 'String'>
    readonly bookingId: FieldRef<"BookingAnswer", 'String'>
    readonly questionId: FieldRef<"BookingAnswer", 'String'>
    readonly answer: FieldRef<"BookingAnswer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BookingAnswer findUnique
   */
  export type BookingAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    /**
     * Filter, which BookingAnswer to fetch.
     */
    where: BookingAnswerWhereUniqueInput
  }

  /**
   * BookingAnswer findUniqueOrThrow
   */
  export type BookingAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    /**
     * Filter, which BookingAnswer to fetch.
     */
    where: BookingAnswerWhereUniqueInput
  }

  /**
   * BookingAnswer findFirst
   */
  export type BookingAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    /**
     * Filter, which BookingAnswer to fetch.
     */
    where?: BookingAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingAnswers to fetch.
     */
    orderBy?: BookingAnswerOrderByWithRelationInput | BookingAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingAnswers.
     */
    cursor?: BookingAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingAnswers.
     */
    distinct?: BookingAnswerScalarFieldEnum | BookingAnswerScalarFieldEnum[]
  }

  /**
   * BookingAnswer findFirstOrThrow
   */
  export type BookingAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    /**
     * Filter, which BookingAnswer to fetch.
     */
    where?: BookingAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingAnswers to fetch.
     */
    orderBy?: BookingAnswerOrderByWithRelationInput | BookingAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingAnswers.
     */
    cursor?: BookingAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingAnswers.
     */
    distinct?: BookingAnswerScalarFieldEnum | BookingAnswerScalarFieldEnum[]
  }

  /**
   * BookingAnswer findMany
   */
  export type BookingAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    /**
     * Filter, which BookingAnswers to fetch.
     */
    where?: BookingAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingAnswers to fetch.
     */
    orderBy?: BookingAnswerOrderByWithRelationInput | BookingAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingAnswers.
     */
    cursor?: BookingAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingAnswers.
     */
    distinct?: BookingAnswerScalarFieldEnum | BookingAnswerScalarFieldEnum[]
  }

  /**
   * BookingAnswer create
   */
  export type BookingAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingAnswer.
     */
    data: XOR<BookingAnswerCreateInput, BookingAnswerUncheckedCreateInput>
  }

  /**
   * BookingAnswer createMany
   */
  export type BookingAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingAnswers.
     */
    data: BookingAnswerCreateManyInput | BookingAnswerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookingAnswer createManyAndReturn
   */
  export type BookingAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * The data used to create many BookingAnswers.
     */
    data: BookingAnswerCreateManyInput | BookingAnswerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingAnswer update
   */
  export type BookingAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingAnswer.
     */
    data: XOR<BookingAnswerUpdateInput, BookingAnswerUncheckedUpdateInput>
    /**
     * Choose, which BookingAnswer to update.
     */
    where: BookingAnswerWhereUniqueInput
  }

  /**
   * BookingAnswer updateMany
   */
  export type BookingAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingAnswers.
     */
    data: XOR<BookingAnswerUpdateManyMutationInput, BookingAnswerUncheckedUpdateManyInput>
    /**
     * Filter which BookingAnswers to update
     */
    where?: BookingAnswerWhereInput
    /**
     * Limit how many BookingAnswers to update.
     */
    limit?: number
  }

  /**
   * BookingAnswer updateManyAndReturn
   */
  export type BookingAnswerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * The data used to update BookingAnswers.
     */
    data: XOR<BookingAnswerUpdateManyMutationInput, BookingAnswerUncheckedUpdateManyInput>
    /**
     * Filter which BookingAnswers to update
     */
    where?: BookingAnswerWhereInput
    /**
     * Limit how many BookingAnswers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingAnswer upsert
   */
  export type BookingAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingAnswer to update in case it exists.
     */
    where: BookingAnswerWhereUniqueInput
    /**
     * In case the BookingAnswer found by the `where` argument doesn't exist, create a new BookingAnswer with this data.
     */
    create: XOR<BookingAnswerCreateInput, BookingAnswerUncheckedCreateInput>
    /**
     * In case the BookingAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingAnswerUpdateInput, BookingAnswerUncheckedUpdateInput>
  }

  /**
   * BookingAnswer delete
   */
  export type BookingAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    /**
     * Filter which BookingAnswer to delete.
     */
    where: BookingAnswerWhereUniqueInput
  }

  /**
   * BookingAnswer deleteMany
   */
  export type BookingAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingAnswers to delete
     */
    where?: BookingAnswerWhereInput
    /**
     * Limit how many BookingAnswers to delete.
     */
    limit?: number
  }

  /**
   * BookingAnswer without action
   */
  export type BookingAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
  }


  /**
   * Model DateOverride
   */

  export type AggregateDateOverride = {
    _count: DateOverrideCountAggregateOutputType | null
    _min: DateOverrideMinAggregateOutputType | null
    _max: DateOverrideMaxAggregateOutputType | null
  }

  export type DateOverrideMinAggregateOutputType = {
    id: string | null
    eventTypeId: string | null
    date: Date | null
    isBlocked: boolean | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
  }

  export type DateOverrideMaxAggregateOutputType = {
    id: string | null
    eventTypeId: string | null
    date: Date | null
    isBlocked: boolean | null
    startTime: string | null
    endTime: string | null
    createdAt: Date | null
  }

  export type DateOverrideCountAggregateOutputType = {
    id: number
    eventTypeId: number
    date: number
    isBlocked: number
    startTime: number
    endTime: number
    createdAt: number
    _all: number
  }


  export type DateOverrideMinAggregateInputType = {
    id?: true
    eventTypeId?: true
    date?: true
    isBlocked?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type DateOverrideMaxAggregateInputType = {
    id?: true
    eventTypeId?: true
    date?: true
    isBlocked?: true
    startTime?: true
    endTime?: true
    createdAt?: true
  }

  export type DateOverrideCountAggregateInputType = {
    id?: true
    eventTypeId?: true
    date?: true
    isBlocked?: true
    startTime?: true
    endTime?: true
    createdAt?: true
    _all?: true
  }

  export type DateOverrideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateOverride to aggregate.
     */
    where?: DateOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateOverrides to fetch.
     */
    orderBy?: DateOverrideOrderByWithRelationInput | DateOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DateOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DateOverrides
    **/
    _count?: true | DateOverrideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DateOverrideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DateOverrideMaxAggregateInputType
  }

  export type GetDateOverrideAggregateType<T extends DateOverrideAggregateArgs> = {
        [P in keyof T & keyof AggregateDateOverride]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDateOverride[P]>
      : GetScalarType<T[P], AggregateDateOverride[P]>
  }




  export type DateOverrideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DateOverrideWhereInput
    orderBy?: DateOverrideOrderByWithAggregationInput | DateOverrideOrderByWithAggregationInput[]
    by: DateOverrideScalarFieldEnum[] | DateOverrideScalarFieldEnum
    having?: DateOverrideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DateOverrideCountAggregateInputType | true
    _min?: DateOverrideMinAggregateInputType
    _max?: DateOverrideMaxAggregateInputType
  }

  export type DateOverrideGroupByOutputType = {
    id: string
    eventTypeId: string
    date: Date
    isBlocked: boolean
    startTime: string | null
    endTime: string | null
    createdAt: Date
    _count: DateOverrideCountAggregateOutputType | null
    _min: DateOverrideMinAggregateOutputType | null
    _max: DateOverrideMaxAggregateOutputType | null
  }

  type GetDateOverrideGroupByPayload<T extends DateOverrideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DateOverrideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DateOverrideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DateOverrideGroupByOutputType[P]>
            : GetScalarType<T[P], DateOverrideGroupByOutputType[P]>
        }
      >
    >


  export type DateOverrideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypeId?: boolean
    date?: boolean
    isBlocked?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateOverride"]>

  export type DateOverrideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypeId?: boolean
    date?: boolean
    isBlocked?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateOverride"]>

  export type DateOverrideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypeId?: boolean
    date?: boolean
    isBlocked?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dateOverride"]>

  export type DateOverrideSelectScalar = {
    id?: boolean
    eventTypeId?: boolean
    date?: boolean
    isBlocked?: boolean
    startTime?: boolean
    endTime?: boolean
    createdAt?: boolean
  }

  export type DateOverrideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventTypeId" | "date" | "isBlocked" | "startTime" | "endTime" | "createdAt", ExtArgs["result"]["dateOverride"]>
  export type DateOverrideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }
  export type DateOverrideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }
  export type DateOverrideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }

  export type $DateOverridePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DateOverride"
    objects: {
      eventType: Prisma.$EventTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventTypeId: string
      date: Date
      isBlocked: boolean
      startTime: string | null
      endTime: string | null
      createdAt: Date
    }, ExtArgs["result"]["dateOverride"]>
    composites: {}
  }

  type DateOverrideGetPayload<S extends boolean | null | undefined | DateOverrideDefaultArgs> = $Result.GetResult<Prisma.$DateOverridePayload, S>

  type DateOverrideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DateOverrideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DateOverrideCountAggregateInputType | true
    }

  export interface DateOverrideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DateOverride'], meta: { name: 'DateOverride' } }
    /**
     * Find zero or one DateOverride that matches the filter.
     * @param {DateOverrideFindUniqueArgs} args - Arguments to find a DateOverride
     * @example
     * // Get one DateOverride
     * const dateOverride = await prisma.dateOverride.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DateOverrideFindUniqueArgs>(args: SelectSubset<T, DateOverrideFindUniqueArgs<ExtArgs>>): Prisma__DateOverrideClient<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DateOverride that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DateOverrideFindUniqueOrThrowArgs} args - Arguments to find a DateOverride
     * @example
     * // Get one DateOverride
     * const dateOverride = await prisma.dateOverride.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DateOverrideFindUniqueOrThrowArgs>(args: SelectSubset<T, DateOverrideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DateOverrideClient<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateOverride that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOverrideFindFirstArgs} args - Arguments to find a DateOverride
     * @example
     * // Get one DateOverride
     * const dateOverride = await prisma.dateOverride.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DateOverrideFindFirstArgs>(args?: SelectSubset<T, DateOverrideFindFirstArgs<ExtArgs>>): Prisma__DateOverrideClient<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DateOverride that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOverrideFindFirstOrThrowArgs} args - Arguments to find a DateOverride
     * @example
     * // Get one DateOverride
     * const dateOverride = await prisma.dateOverride.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DateOverrideFindFirstOrThrowArgs>(args?: SelectSubset<T, DateOverrideFindFirstOrThrowArgs<ExtArgs>>): Prisma__DateOverrideClient<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DateOverrides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOverrideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DateOverrides
     * const dateOverrides = await prisma.dateOverride.findMany()
     * 
     * // Get first 10 DateOverrides
     * const dateOverrides = await prisma.dateOverride.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dateOverrideWithIdOnly = await prisma.dateOverride.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DateOverrideFindManyArgs>(args?: SelectSubset<T, DateOverrideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DateOverride.
     * @param {DateOverrideCreateArgs} args - Arguments to create a DateOverride.
     * @example
     * // Create one DateOverride
     * const DateOverride = await prisma.dateOverride.create({
     *   data: {
     *     // ... data to create a DateOverride
     *   }
     * })
     * 
     */
    create<T extends DateOverrideCreateArgs>(args: SelectSubset<T, DateOverrideCreateArgs<ExtArgs>>): Prisma__DateOverrideClient<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DateOverrides.
     * @param {DateOverrideCreateManyArgs} args - Arguments to create many DateOverrides.
     * @example
     * // Create many DateOverrides
     * const dateOverride = await prisma.dateOverride.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DateOverrideCreateManyArgs>(args?: SelectSubset<T, DateOverrideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DateOverrides and returns the data saved in the database.
     * @param {DateOverrideCreateManyAndReturnArgs} args - Arguments to create many DateOverrides.
     * @example
     * // Create many DateOverrides
     * const dateOverride = await prisma.dateOverride.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DateOverrides and only return the `id`
     * const dateOverrideWithIdOnly = await prisma.dateOverride.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DateOverrideCreateManyAndReturnArgs>(args?: SelectSubset<T, DateOverrideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DateOverride.
     * @param {DateOverrideDeleteArgs} args - Arguments to delete one DateOverride.
     * @example
     * // Delete one DateOverride
     * const DateOverride = await prisma.dateOverride.delete({
     *   where: {
     *     // ... filter to delete one DateOverride
     *   }
     * })
     * 
     */
    delete<T extends DateOverrideDeleteArgs>(args: SelectSubset<T, DateOverrideDeleteArgs<ExtArgs>>): Prisma__DateOverrideClient<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DateOverride.
     * @param {DateOverrideUpdateArgs} args - Arguments to update one DateOverride.
     * @example
     * // Update one DateOverride
     * const dateOverride = await prisma.dateOverride.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DateOverrideUpdateArgs>(args: SelectSubset<T, DateOverrideUpdateArgs<ExtArgs>>): Prisma__DateOverrideClient<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DateOverrides.
     * @param {DateOverrideDeleteManyArgs} args - Arguments to filter DateOverrides to delete.
     * @example
     * // Delete a few DateOverrides
     * const { count } = await prisma.dateOverride.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DateOverrideDeleteManyArgs>(args?: SelectSubset<T, DateOverrideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateOverrides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOverrideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DateOverrides
     * const dateOverride = await prisma.dateOverride.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DateOverrideUpdateManyArgs>(args: SelectSubset<T, DateOverrideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DateOverrides and returns the data updated in the database.
     * @param {DateOverrideUpdateManyAndReturnArgs} args - Arguments to update many DateOverrides.
     * @example
     * // Update many DateOverrides
     * const dateOverride = await prisma.dateOverride.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DateOverrides and only return the `id`
     * const dateOverrideWithIdOnly = await prisma.dateOverride.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DateOverrideUpdateManyAndReturnArgs>(args: SelectSubset<T, DateOverrideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DateOverride.
     * @param {DateOverrideUpsertArgs} args - Arguments to update or create a DateOverride.
     * @example
     * // Update or create a DateOverride
     * const dateOverride = await prisma.dateOverride.upsert({
     *   create: {
     *     // ... data to create a DateOverride
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DateOverride we want to update
     *   }
     * })
     */
    upsert<T extends DateOverrideUpsertArgs>(args: SelectSubset<T, DateOverrideUpsertArgs<ExtArgs>>): Prisma__DateOverrideClient<$Result.GetResult<Prisma.$DateOverridePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DateOverrides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOverrideCountArgs} args - Arguments to filter DateOverrides to count.
     * @example
     * // Count the number of DateOverrides
     * const count = await prisma.dateOverride.count({
     *   where: {
     *     // ... the filter for the DateOverrides we want to count
     *   }
     * })
    **/
    count<T extends DateOverrideCountArgs>(
      args?: Subset<T, DateOverrideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DateOverrideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DateOverride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOverrideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DateOverrideAggregateArgs>(args: Subset<T, DateOverrideAggregateArgs>): Prisma.PrismaPromise<GetDateOverrideAggregateType<T>>

    /**
     * Group by DateOverride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DateOverrideGroupByArgs} args - Group by arguments.
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
      T extends DateOverrideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DateOverrideGroupByArgs['orderBy'] }
        : { orderBy?: DateOverrideGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DateOverrideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDateOverrideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DateOverride model
   */
  readonly fields: DateOverrideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DateOverride.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DateOverrideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventType<T extends EventTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventTypeDefaultArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DateOverride model
   */
  interface DateOverrideFieldRefs {
    readonly id: FieldRef<"DateOverride", 'String'>
    readonly eventTypeId: FieldRef<"DateOverride", 'String'>
    readonly date: FieldRef<"DateOverride", 'DateTime'>
    readonly isBlocked: FieldRef<"DateOverride", 'Boolean'>
    readonly startTime: FieldRef<"DateOverride", 'String'>
    readonly endTime: FieldRef<"DateOverride", 'String'>
    readonly createdAt: FieldRef<"DateOverride", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DateOverride findUnique
   */
  export type DateOverrideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    /**
     * Filter, which DateOverride to fetch.
     */
    where: DateOverrideWhereUniqueInput
  }

  /**
   * DateOverride findUniqueOrThrow
   */
  export type DateOverrideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    /**
     * Filter, which DateOverride to fetch.
     */
    where: DateOverrideWhereUniqueInput
  }

  /**
   * DateOverride findFirst
   */
  export type DateOverrideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    /**
     * Filter, which DateOverride to fetch.
     */
    where?: DateOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateOverrides to fetch.
     */
    orderBy?: DateOverrideOrderByWithRelationInput | DateOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateOverrides.
     */
    cursor?: DateOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateOverrides.
     */
    distinct?: DateOverrideScalarFieldEnum | DateOverrideScalarFieldEnum[]
  }

  /**
   * DateOverride findFirstOrThrow
   */
  export type DateOverrideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    /**
     * Filter, which DateOverride to fetch.
     */
    where?: DateOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateOverrides to fetch.
     */
    orderBy?: DateOverrideOrderByWithRelationInput | DateOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DateOverrides.
     */
    cursor?: DateOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateOverrides.
     */
    distinct?: DateOverrideScalarFieldEnum | DateOverrideScalarFieldEnum[]
  }

  /**
   * DateOverride findMany
   */
  export type DateOverrideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    /**
     * Filter, which DateOverrides to fetch.
     */
    where?: DateOverrideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DateOverrides to fetch.
     */
    orderBy?: DateOverrideOrderByWithRelationInput | DateOverrideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DateOverrides.
     */
    cursor?: DateOverrideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DateOverrides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DateOverrides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DateOverrides.
     */
    distinct?: DateOverrideScalarFieldEnum | DateOverrideScalarFieldEnum[]
  }

  /**
   * DateOverride create
   */
  export type DateOverrideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    /**
     * The data needed to create a DateOverride.
     */
    data: XOR<DateOverrideCreateInput, DateOverrideUncheckedCreateInput>
  }

  /**
   * DateOverride createMany
   */
  export type DateOverrideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DateOverrides.
     */
    data: DateOverrideCreateManyInput | DateOverrideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DateOverride createManyAndReturn
   */
  export type DateOverrideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * The data used to create many DateOverrides.
     */
    data: DateOverrideCreateManyInput | DateOverrideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DateOverride update
   */
  export type DateOverrideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    /**
     * The data needed to update a DateOverride.
     */
    data: XOR<DateOverrideUpdateInput, DateOverrideUncheckedUpdateInput>
    /**
     * Choose, which DateOverride to update.
     */
    where: DateOverrideWhereUniqueInput
  }

  /**
   * DateOverride updateMany
   */
  export type DateOverrideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DateOverrides.
     */
    data: XOR<DateOverrideUpdateManyMutationInput, DateOverrideUncheckedUpdateManyInput>
    /**
     * Filter which DateOverrides to update
     */
    where?: DateOverrideWhereInput
    /**
     * Limit how many DateOverrides to update.
     */
    limit?: number
  }

  /**
   * DateOverride updateManyAndReturn
   */
  export type DateOverrideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * The data used to update DateOverrides.
     */
    data: XOR<DateOverrideUpdateManyMutationInput, DateOverrideUncheckedUpdateManyInput>
    /**
     * Filter which DateOverrides to update
     */
    where?: DateOverrideWhereInput
    /**
     * Limit how many DateOverrides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DateOverride upsert
   */
  export type DateOverrideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    /**
     * The filter to search for the DateOverride to update in case it exists.
     */
    where: DateOverrideWhereUniqueInput
    /**
     * In case the DateOverride found by the `where` argument doesn't exist, create a new DateOverride with this data.
     */
    create: XOR<DateOverrideCreateInput, DateOverrideUncheckedCreateInput>
    /**
     * In case the DateOverride was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DateOverrideUpdateInput, DateOverrideUncheckedUpdateInput>
  }

  /**
   * DateOverride delete
   */
  export type DateOverrideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
    /**
     * Filter which DateOverride to delete.
     */
    where: DateOverrideWhereUniqueInput
  }

  /**
   * DateOverride deleteMany
   */
  export type DateOverrideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DateOverrides to delete
     */
    where?: DateOverrideWhereInput
    /**
     * Limit how many DateOverrides to delete.
     */
    limit?: number
  }

  /**
   * DateOverride without action
   */
  export type DateOverrideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DateOverride
     */
    select?: DateOverrideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DateOverride
     */
    omit?: DateOverrideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DateOverrideInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    eventTypeId: string | null
    bookerName: string | null
    bookerEmail: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.BookingStatus | null
    cancelledAt: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    eventTypeId: string | null
    bookerName: string | null
    bookerEmail: string | null
    startTime: Date | null
    endTime: Date | null
    status: $Enums.BookingStatus | null
    cancelledAt: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    eventTypeId: number
    bookerName: number
    bookerEmail: number
    startTime: number
    endTime: number
    status: number
    cancelledAt: number
    notes: number
    createdAt: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    eventTypeId?: true
    bookerName?: true
    bookerEmail?: true
    startTime?: true
    endTime?: true
    status?: true
    cancelledAt?: true
    notes?: true
    createdAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    eventTypeId?: true
    bookerName?: true
    bookerEmail?: true
    startTime?: true
    endTime?: true
    status?: true
    cancelledAt?: true
    notes?: true
    createdAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    eventTypeId?: true
    bookerName?: true
    bookerEmail?: true
    startTime?: true
    endTime?: true
    status?: true
    cancelledAt?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    eventTypeId: string
    bookerName: string
    bookerEmail: string
    startTime: Date
    endTime: Date
    status: $Enums.BookingStatus
    cancelledAt: Date | null
    notes: string | null
    createdAt: Date
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypeId?: boolean
    bookerName?: boolean
    bookerEmail?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    cancelledAt?: boolean
    notes?: boolean
    createdAt?: boolean
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
    answers?: boolean | Booking$answersArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypeId?: boolean
    bookerName?: boolean
    bookerEmail?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    cancelledAt?: boolean
    notes?: boolean
    createdAt?: boolean
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventTypeId?: boolean
    bookerName?: boolean
    bookerEmail?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    cancelledAt?: boolean
    notes?: boolean
    createdAt?: boolean
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    eventTypeId?: boolean
    bookerName?: boolean
    bookerEmail?: boolean
    startTime?: boolean
    endTime?: boolean
    status?: boolean
    cancelledAt?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventTypeId" | "bookerName" | "bookerEmail" | "startTime" | "endTime" | "status" | "cancelledAt" | "notes" | "createdAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
    answers?: boolean | Booking$answersArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventType?: boolean | EventTypeDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      eventType: Prisma.$EventTypePayload<ExtArgs>
      answers: Prisma.$BookingAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventTypeId: string
      bookerName: string
      bookerEmail: string
      startTime: Date
      endTime: Date
      status: $Enums.BookingStatus
      cancelledAt: Date | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventType<T extends EventTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventTypeDefaultArgs<ExtArgs>>): Prisma__EventTypeClient<$Result.GetResult<Prisma.$EventTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    answers<T extends Booking$answersArgs<ExtArgs> = {}>(args?: Subset<T, Booking$answersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingAnswerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly eventTypeId: FieldRef<"Booking", 'String'>
    readonly bookerName: FieldRef<"Booking", 'String'>
    readonly bookerEmail: FieldRef<"Booking", 'String'>
    readonly startTime: FieldRef<"Booking", 'DateTime'>
    readonly endTime: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly cancelledAt: FieldRef<"Booking", 'DateTime'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.answers
   */
  export type Booking$answersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingAnswer
     */
    select?: BookingAnswerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookingAnswer
     */
    omit?: BookingAnswerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingAnswerInclude<ExtArgs> | null
    where?: BookingAnswerWhereInput
    orderBy?: BookingAnswerOrderByWithRelationInput | BookingAnswerOrderByWithRelationInput[]
    cursor?: BookingAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingAnswerScalarFieldEnum | BookingAnswerScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowAvgAggregateOutputType = {
    timeValue: number | null
  }

  export type WorkflowSumAggregateOutputType = {
    timeValue: number | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    trigger: string | null
    action: string | null
    timeValue: number | null
    timeUnit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    isActive: boolean | null
    trigger: string | null
    action: string | null
    timeValue: number | null
    timeUnit: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    isActive: number
    trigger: number
    action: number
    timeValue: number
    timeUnit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowAvgAggregateInputType = {
    timeValue?: true
  }

  export type WorkflowSumAggregateInputType = {
    timeValue?: true
  }

  export type WorkflowMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    isActive?: true
    trigger?: true
    action?: true
    timeValue?: true
    timeUnit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    isActive?: true
    trigger?: true
    action?: true
    timeValue?: true
    timeUnit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    isActive?: true
    trigger?: true
    action?: true
    timeValue?: true
    timeUnit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _avg?: WorkflowAvgAggregateInputType
    _sum?: WorkflowSumAggregateInputType
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string | null
    isActive: boolean
    trigger: string
    action: string
    timeValue: number
    timeUnit: string
    createdAt: Date
    updatedAt: Date
    _count: WorkflowCountAggregateOutputType | null
    _avg: WorkflowAvgAggregateOutputType | null
    _sum: WorkflowSumAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    trigger?: boolean
    action?: boolean
    timeValue?: boolean
    timeUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    steps?: boolean | Workflow$stepsArgs<ExtArgs>
    callHistory?: boolean | Workflow$callHistoryArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    trigger?: boolean
    action?: boolean
    timeValue?: boolean
    timeUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    trigger?: boolean
    action?: boolean
    timeValue?: boolean
    timeUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    isActive?: boolean
    trigger?: boolean
    action?: boolean
    timeValue?: boolean
    timeUnit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "isActive" | "trigger" | "action" | "timeValue" | "timeUnit" | "createdAt" | "updatedAt", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    steps?: boolean | Workflow$stepsArgs<ExtArgs>
    callHistory?: boolean | Workflow$callHistoryArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      steps: Prisma.$WorkflowStepPayload<ExtArgs>[]
      callHistory: Prisma.$CallHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string | null
      isActive: boolean
      trigger: string
      action: string
      timeValue: number
      timeUnit: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
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
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    steps<T extends Workflow$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    callHistory<T extends Workflow$callHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$callHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'String'>
    readonly userId: FieldRef<"Workflow", 'String'>
    readonly title: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly isActive: FieldRef<"Workflow", 'Boolean'>
    readonly trigger: FieldRef<"Workflow", 'String'>
    readonly action: FieldRef<"Workflow", 'String'>
    readonly timeValue: FieldRef<"Workflow", 'Int'>
    readonly timeUnit: FieldRef<"Workflow", 'String'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow updateManyAndReturn
   */
  export type WorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.steps
   */
  export type Workflow$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    where?: WorkflowStepWhereInput
    orderBy?: WorkflowStepOrderByWithRelationInput | WorkflowStepOrderByWithRelationInput[]
    cursor?: WorkflowStepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowStepScalarFieldEnum | WorkflowStepScalarFieldEnum[]
  }

  /**
   * Workflow.callHistory
   */
  export type Workflow$callHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    where?: CallHistoryWhereInput
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    cursor?: CallHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model WorkflowStep
   */

  export type AggregateWorkflowStep = {
    _count: WorkflowStepCountAggregateOutputType | null
    _avg: WorkflowStepAvgAggregateOutputType | null
    _sum: WorkflowStepSumAggregateOutputType | null
    _min: WorkflowStepMinAggregateOutputType | null
    _max: WorkflowStepMaxAggregateOutputType | null
  }

  export type WorkflowStepAvgAggregateOutputType = {
    stepOrder: number | null
  }

  export type WorkflowStepSumAggregateOutputType = {
    stepOrder: number | null
  }

  export type WorkflowStepMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    stepOrder: number | null
    action: string | null
    template: string | null
    createdAt: Date | null
  }

  export type WorkflowStepMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    stepOrder: number | null
    action: string | null
    template: string | null
    createdAt: Date | null
  }

  export type WorkflowStepCountAggregateOutputType = {
    id: number
    workflowId: number
    stepOrder: number
    action: number
    template: number
    createdAt: number
    _all: number
  }


  export type WorkflowStepAvgAggregateInputType = {
    stepOrder?: true
  }

  export type WorkflowStepSumAggregateInputType = {
    stepOrder?: true
  }

  export type WorkflowStepMinAggregateInputType = {
    id?: true
    workflowId?: true
    stepOrder?: true
    action?: true
    template?: true
    createdAt?: true
  }

  export type WorkflowStepMaxAggregateInputType = {
    id?: true
    workflowId?: true
    stepOrder?: true
    action?: true
    template?: true
    createdAt?: true
  }

  export type WorkflowStepCountAggregateInputType = {
    id?: true
    workflowId?: true
    stepOrder?: true
    action?: true
    template?: true
    createdAt?: true
    _all?: true
  }

  export type WorkflowStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowStep to aggregate.
     */
    where?: WorkflowStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowSteps to fetch.
     */
    orderBy?: WorkflowStepOrderByWithRelationInput | WorkflowStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkflowSteps
    **/
    _count?: true | WorkflowStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkflowStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkflowStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowStepMaxAggregateInputType
  }

  export type GetWorkflowStepAggregateType<T extends WorkflowStepAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflowStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflowStep[P]>
      : GetScalarType<T[P], AggregateWorkflowStep[P]>
  }




  export type WorkflowStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowStepWhereInput
    orderBy?: WorkflowStepOrderByWithAggregationInput | WorkflowStepOrderByWithAggregationInput[]
    by: WorkflowStepScalarFieldEnum[] | WorkflowStepScalarFieldEnum
    having?: WorkflowStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowStepCountAggregateInputType | true
    _avg?: WorkflowStepAvgAggregateInputType
    _sum?: WorkflowStepSumAggregateInputType
    _min?: WorkflowStepMinAggregateInputType
    _max?: WorkflowStepMaxAggregateInputType
  }

  export type WorkflowStepGroupByOutputType = {
    id: string
    workflowId: string
    stepOrder: number
    action: string
    template: string | null
    createdAt: Date
    _count: WorkflowStepCountAggregateOutputType | null
    _avg: WorkflowStepAvgAggregateOutputType | null
    _sum: WorkflowStepSumAggregateOutputType | null
    _min: WorkflowStepMinAggregateOutputType | null
    _max: WorkflowStepMaxAggregateOutputType | null
  }

  type GetWorkflowStepGroupByPayload<T extends WorkflowStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowStepGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowStepGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    stepOrder?: boolean
    action?: boolean
    template?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowStep"]>

  export type WorkflowStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    stepOrder?: boolean
    action?: boolean
    template?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowStep"]>

  export type WorkflowStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    stepOrder?: boolean
    action?: boolean
    template?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflowStep"]>

  export type WorkflowStepSelectScalar = {
    id?: boolean
    workflowId?: boolean
    stepOrder?: boolean
    action?: boolean
    template?: boolean
    createdAt?: boolean
  }

  export type WorkflowStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "stepOrder" | "action" | "template" | "createdAt", ExtArgs["result"]["workflowStep"]>
  export type WorkflowStepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowStepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type WorkflowStepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $WorkflowStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkflowStep"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      stepOrder: number
      action: string
      template: string | null
      createdAt: Date
    }, ExtArgs["result"]["workflowStep"]>
    composites: {}
  }

  type WorkflowStepGetPayload<S extends boolean | null | undefined | WorkflowStepDefaultArgs> = $Result.GetResult<Prisma.$WorkflowStepPayload, S>

  type WorkflowStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowStepCountAggregateInputType | true
    }

  export interface WorkflowStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkflowStep'], meta: { name: 'WorkflowStep' } }
    /**
     * Find zero or one WorkflowStep that matches the filter.
     * @param {WorkflowStepFindUniqueArgs} args - Arguments to find a WorkflowStep
     * @example
     * // Get one WorkflowStep
     * const workflowStep = await prisma.workflowStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowStepFindUniqueArgs>(args: SelectSubset<T, WorkflowStepFindUniqueArgs<ExtArgs>>): Prisma__WorkflowStepClient<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkflowStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowStepFindUniqueOrThrowArgs} args - Arguments to find a WorkflowStep
     * @example
     * // Get one WorkflowStep
     * const workflowStep = await prisma.workflowStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowStepFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowStepClient<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStepFindFirstArgs} args - Arguments to find a WorkflowStep
     * @example
     * // Get one WorkflowStep
     * const workflowStep = await prisma.workflowStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowStepFindFirstArgs>(args?: SelectSubset<T, WorkflowStepFindFirstArgs<ExtArgs>>): Prisma__WorkflowStepClient<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkflowStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStepFindFirstOrThrowArgs} args - Arguments to find a WorkflowStep
     * @example
     * // Get one WorkflowStep
     * const workflowStep = await prisma.workflowStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowStepFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowStepClient<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkflowSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkflowSteps
     * const workflowSteps = await prisma.workflowStep.findMany()
     * 
     * // Get first 10 WorkflowSteps
     * const workflowSteps = await prisma.workflowStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowStepWithIdOnly = await prisma.workflowStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowStepFindManyArgs>(args?: SelectSubset<T, WorkflowStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkflowStep.
     * @param {WorkflowStepCreateArgs} args - Arguments to create a WorkflowStep.
     * @example
     * // Create one WorkflowStep
     * const WorkflowStep = await prisma.workflowStep.create({
     *   data: {
     *     // ... data to create a WorkflowStep
     *   }
     * })
     * 
     */
    create<T extends WorkflowStepCreateArgs>(args: SelectSubset<T, WorkflowStepCreateArgs<ExtArgs>>): Prisma__WorkflowStepClient<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkflowSteps.
     * @param {WorkflowStepCreateManyArgs} args - Arguments to create many WorkflowSteps.
     * @example
     * // Create many WorkflowSteps
     * const workflowStep = await prisma.workflowStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowStepCreateManyArgs>(args?: SelectSubset<T, WorkflowStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkflowSteps and returns the data saved in the database.
     * @param {WorkflowStepCreateManyAndReturnArgs} args - Arguments to create many WorkflowSteps.
     * @example
     * // Create many WorkflowSteps
     * const workflowStep = await prisma.workflowStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkflowSteps and only return the `id`
     * const workflowStepWithIdOnly = await prisma.workflowStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowStepCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkflowStep.
     * @param {WorkflowStepDeleteArgs} args - Arguments to delete one WorkflowStep.
     * @example
     * // Delete one WorkflowStep
     * const WorkflowStep = await prisma.workflowStep.delete({
     *   where: {
     *     // ... filter to delete one WorkflowStep
     *   }
     * })
     * 
     */
    delete<T extends WorkflowStepDeleteArgs>(args: SelectSubset<T, WorkflowStepDeleteArgs<ExtArgs>>): Prisma__WorkflowStepClient<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkflowStep.
     * @param {WorkflowStepUpdateArgs} args - Arguments to update one WorkflowStep.
     * @example
     * // Update one WorkflowStep
     * const workflowStep = await prisma.workflowStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowStepUpdateArgs>(args: SelectSubset<T, WorkflowStepUpdateArgs<ExtArgs>>): Prisma__WorkflowStepClient<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkflowSteps.
     * @param {WorkflowStepDeleteManyArgs} args - Arguments to filter WorkflowSteps to delete.
     * @example
     * // Delete a few WorkflowSteps
     * const { count } = await prisma.workflowStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowStepDeleteManyArgs>(args?: SelectSubset<T, WorkflowStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkflowSteps
     * const workflowStep = await prisma.workflowStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowStepUpdateManyArgs>(args: SelectSubset<T, WorkflowStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkflowSteps and returns the data updated in the database.
     * @param {WorkflowStepUpdateManyAndReturnArgs} args - Arguments to update many WorkflowSteps.
     * @example
     * // Update many WorkflowSteps
     * const workflowStep = await prisma.workflowStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkflowSteps and only return the `id`
     * const workflowStepWithIdOnly = await prisma.workflowStep.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowStepUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkflowStep.
     * @param {WorkflowStepUpsertArgs} args - Arguments to update or create a WorkflowStep.
     * @example
     * // Update or create a WorkflowStep
     * const workflowStep = await prisma.workflowStep.upsert({
     *   create: {
     *     // ... data to create a WorkflowStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkflowStep we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowStepUpsertArgs>(args: SelectSubset<T, WorkflowStepUpsertArgs<ExtArgs>>): Prisma__WorkflowStepClient<$Result.GetResult<Prisma.$WorkflowStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkflowSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStepCountArgs} args - Arguments to filter WorkflowSteps to count.
     * @example
     * // Count the number of WorkflowSteps
     * const count = await prisma.workflowStep.count({
     *   where: {
     *     // ... the filter for the WorkflowSteps we want to count
     *   }
     * })
    **/
    count<T extends WorkflowStepCountArgs>(
      args?: Subset<T, WorkflowStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkflowStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowStepAggregateArgs>(args: Subset<T, WorkflowStepAggregateArgs>): Prisma.PrismaPromise<GetWorkflowStepAggregateType<T>>

    /**
     * Group by WorkflowStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowStepGroupByArgs} args - Group by arguments.
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
      T extends WorkflowStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowStepGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkflowStep model
   */
  readonly fields: WorkflowStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkflowStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WorkflowStep model
   */
  interface WorkflowStepFieldRefs {
    readonly id: FieldRef<"WorkflowStep", 'String'>
    readonly workflowId: FieldRef<"WorkflowStep", 'String'>
    readonly stepOrder: FieldRef<"WorkflowStep", 'Int'>
    readonly action: FieldRef<"WorkflowStep", 'String'>
    readonly template: FieldRef<"WorkflowStep", 'String'>
    readonly createdAt: FieldRef<"WorkflowStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkflowStep findUnique
   */
  export type WorkflowStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowStep to fetch.
     */
    where: WorkflowStepWhereUniqueInput
  }

  /**
   * WorkflowStep findUniqueOrThrow
   */
  export type WorkflowStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowStep to fetch.
     */
    where: WorkflowStepWhereUniqueInput
  }

  /**
   * WorkflowStep findFirst
   */
  export type WorkflowStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowStep to fetch.
     */
    where?: WorkflowStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowSteps to fetch.
     */
    orderBy?: WorkflowStepOrderByWithRelationInput | WorkflowStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowSteps.
     */
    cursor?: WorkflowStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowSteps.
     */
    distinct?: WorkflowStepScalarFieldEnum | WorkflowStepScalarFieldEnum[]
  }

  /**
   * WorkflowStep findFirstOrThrow
   */
  export type WorkflowStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowStep to fetch.
     */
    where?: WorkflowStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowSteps to fetch.
     */
    orderBy?: WorkflowStepOrderByWithRelationInput | WorkflowStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkflowSteps.
     */
    cursor?: WorkflowStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowSteps.
     */
    distinct?: WorkflowStepScalarFieldEnum | WorkflowStepScalarFieldEnum[]
  }

  /**
   * WorkflowStep findMany
   */
  export type WorkflowStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    /**
     * Filter, which WorkflowSteps to fetch.
     */
    where?: WorkflowStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkflowSteps to fetch.
     */
    orderBy?: WorkflowStepOrderByWithRelationInput | WorkflowStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkflowSteps.
     */
    cursor?: WorkflowStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkflowSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkflowSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkflowSteps.
     */
    distinct?: WorkflowStepScalarFieldEnum | WorkflowStepScalarFieldEnum[]
  }

  /**
   * WorkflowStep create
   */
  export type WorkflowStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkflowStep.
     */
    data: XOR<WorkflowStepCreateInput, WorkflowStepUncheckedCreateInput>
  }

  /**
   * WorkflowStep createMany
   */
  export type WorkflowStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkflowSteps.
     */
    data: WorkflowStepCreateManyInput | WorkflowStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkflowStep createManyAndReturn
   */
  export type WorkflowStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * The data used to create many WorkflowSteps.
     */
    data: WorkflowStepCreateManyInput | WorkflowStepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowStep update
   */
  export type WorkflowStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkflowStep.
     */
    data: XOR<WorkflowStepUpdateInput, WorkflowStepUncheckedUpdateInput>
    /**
     * Choose, which WorkflowStep to update.
     */
    where: WorkflowStepWhereUniqueInput
  }

  /**
   * WorkflowStep updateMany
   */
  export type WorkflowStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkflowSteps.
     */
    data: XOR<WorkflowStepUpdateManyMutationInput, WorkflowStepUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowSteps to update
     */
    where?: WorkflowStepWhereInput
    /**
     * Limit how many WorkflowSteps to update.
     */
    limit?: number
  }

  /**
   * WorkflowStep updateManyAndReturn
   */
  export type WorkflowStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * The data used to update WorkflowSteps.
     */
    data: XOR<WorkflowStepUpdateManyMutationInput, WorkflowStepUncheckedUpdateManyInput>
    /**
     * Filter which WorkflowSteps to update
     */
    where?: WorkflowStepWhereInput
    /**
     * Limit how many WorkflowSteps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkflowStep upsert
   */
  export type WorkflowStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkflowStep to update in case it exists.
     */
    where: WorkflowStepWhereUniqueInput
    /**
     * In case the WorkflowStep found by the `where` argument doesn't exist, create a new WorkflowStep with this data.
     */
    create: XOR<WorkflowStepCreateInput, WorkflowStepUncheckedCreateInput>
    /**
     * In case the WorkflowStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowStepUpdateInput, WorkflowStepUncheckedUpdateInput>
  }

  /**
   * WorkflowStep delete
   */
  export type WorkflowStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
    /**
     * Filter which WorkflowStep to delete.
     */
    where: WorkflowStepWhereUniqueInput
  }

  /**
   * WorkflowStep deleteMany
   */
  export type WorkflowStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkflowSteps to delete
     */
    where?: WorkflowStepWhereInput
    /**
     * Limit how many WorkflowSteps to delete.
     */
    limit?: number
  }

  /**
   * WorkflowStep without action
   */
  export type WorkflowStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowStep
     */
    select?: WorkflowStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkflowStep
     */
    omit?: WorkflowStepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowStepInclude<ExtArgs> | null
  }


  /**
   * Model CallHistory
   */

  export type AggregateCallHistory = {
    _count: CallHistoryCountAggregateOutputType | null
    _avg: CallHistoryAvgAggregateOutputType | null
    _sum: CallHistorySumAggregateOutputType | null
    _min: CallHistoryMinAggregateOutputType | null
    _max: CallHistoryMaxAggregateOutputType | null
  }

  export type CallHistoryAvgAggregateOutputType = {
    duration: number | null
  }

  export type CallHistorySumAggregateOutputType = {
    duration: number | null
  }

  export type CallHistoryMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    bookingId: string | null
    callerName: string | null
    callerPhone: string | null
    callerEmail: string | null
    callType: string | null
    status: string | null
    duration: number | null
    startedAt: Date | null
    endedAt: Date | null
    notes: string | null
  }

  export type CallHistoryMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    bookingId: string | null
    callerName: string | null
    callerPhone: string | null
    callerEmail: string | null
    callType: string | null
    status: string | null
    duration: number | null
    startedAt: Date | null
    endedAt: Date | null
    notes: string | null
  }

  export type CallHistoryCountAggregateOutputType = {
    id: number
    workflowId: number
    bookingId: number
    callerName: number
    callerPhone: number
    callerEmail: number
    callType: number
    status: number
    duration: number
    startedAt: number
    endedAt: number
    notes: number
    _all: number
  }


  export type CallHistoryAvgAggregateInputType = {
    duration?: true
  }

  export type CallHistorySumAggregateInputType = {
    duration?: true
  }

  export type CallHistoryMinAggregateInputType = {
    id?: true
    workflowId?: true
    bookingId?: true
    callerName?: true
    callerPhone?: true
    callerEmail?: true
    callType?: true
    status?: true
    duration?: true
    startedAt?: true
    endedAt?: true
    notes?: true
  }

  export type CallHistoryMaxAggregateInputType = {
    id?: true
    workflowId?: true
    bookingId?: true
    callerName?: true
    callerPhone?: true
    callerEmail?: true
    callType?: true
    status?: true
    duration?: true
    startedAt?: true
    endedAt?: true
    notes?: true
  }

  export type CallHistoryCountAggregateInputType = {
    id?: true
    workflowId?: true
    bookingId?: true
    callerName?: true
    callerPhone?: true
    callerEmail?: true
    callType?: true
    status?: true
    duration?: true
    startedAt?: true
    endedAt?: true
    notes?: true
    _all?: true
  }

  export type CallHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallHistory to aggregate.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CallHistories
    **/
    _count?: true | CallHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CallHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CallHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CallHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CallHistoryMaxAggregateInputType
  }

  export type GetCallHistoryAggregateType<T extends CallHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCallHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCallHistory[P]>
      : GetScalarType<T[P], AggregateCallHistory[P]>
  }




  export type CallHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CallHistoryWhereInput
    orderBy?: CallHistoryOrderByWithAggregationInput | CallHistoryOrderByWithAggregationInput[]
    by: CallHistoryScalarFieldEnum[] | CallHistoryScalarFieldEnum
    having?: CallHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CallHistoryCountAggregateInputType | true
    _avg?: CallHistoryAvgAggregateInputType
    _sum?: CallHistorySumAggregateInputType
    _min?: CallHistoryMinAggregateInputType
    _max?: CallHistoryMaxAggregateInputType
  }

  export type CallHistoryGroupByOutputType = {
    id: string
    workflowId: string
    bookingId: string | null
    callerName: string
    callerPhone: string | null
    callerEmail: string | null
    callType: string
    status: string
    duration: number
    startedAt: Date
    endedAt: Date | null
    notes: string | null
    _count: CallHistoryCountAggregateOutputType | null
    _avg: CallHistoryAvgAggregateOutputType | null
    _sum: CallHistorySumAggregateOutputType | null
    _min: CallHistoryMinAggregateOutputType | null
    _max: CallHistoryMaxAggregateOutputType | null
  }

  type GetCallHistoryGroupByPayload<T extends CallHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CallHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CallHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CallHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], CallHistoryGroupByOutputType[P]>
        }
      >
    >


  export type CallHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    bookingId?: boolean
    callerName?: boolean
    callerPhone?: boolean
    callerEmail?: boolean
    callType?: boolean
    status?: boolean
    duration?: boolean
    startedAt?: boolean
    endedAt?: boolean
    notes?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callHistory"]>

  export type CallHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    bookingId?: boolean
    callerName?: boolean
    callerPhone?: boolean
    callerEmail?: boolean
    callType?: boolean
    status?: boolean
    duration?: boolean
    startedAt?: boolean
    endedAt?: boolean
    notes?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callHistory"]>

  export type CallHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    bookingId?: boolean
    callerName?: boolean
    callerPhone?: boolean
    callerEmail?: boolean
    callType?: boolean
    status?: boolean
    duration?: boolean
    startedAt?: boolean
    endedAt?: boolean
    notes?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["callHistory"]>

  export type CallHistorySelectScalar = {
    id?: boolean
    workflowId?: boolean
    bookingId?: boolean
    callerName?: boolean
    callerPhone?: boolean
    callerEmail?: boolean
    callType?: boolean
    status?: boolean
    duration?: boolean
    startedAt?: boolean
    endedAt?: boolean
    notes?: boolean
  }

  export type CallHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "bookingId" | "callerName" | "callerPhone" | "callerEmail" | "callType" | "status" | "duration" | "startedAt" | "endedAt" | "notes", ExtArgs["result"]["callHistory"]>
  export type CallHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type CallHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type CallHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $CallHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CallHistory"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      bookingId: string | null
      callerName: string
      callerPhone: string | null
      callerEmail: string | null
      callType: string
      status: string
      duration: number
      startedAt: Date
      endedAt: Date | null
      notes: string | null
    }, ExtArgs["result"]["callHistory"]>
    composites: {}
  }

  type CallHistoryGetPayload<S extends boolean | null | undefined | CallHistoryDefaultArgs> = $Result.GetResult<Prisma.$CallHistoryPayload, S>

  type CallHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CallHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CallHistoryCountAggregateInputType | true
    }

  export interface CallHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CallHistory'], meta: { name: 'CallHistory' } }
    /**
     * Find zero or one CallHistory that matches the filter.
     * @param {CallHistoryFindUniqueArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CallHistoryFindUniqueArgs>(args: SelectSubset<T, CallHistoryFindUniqueArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CallHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CallHistoryFindUniqueOrThrowArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CallHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CallHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryFindFirstArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CallHistoryFindFirstArgs>(args?: SelectSubset<T, CallHistoryFindFirstArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CallHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryFindFirstOrThrowArgs} args - Arguments to find a CallHistory
     * @example
     * // Get one CallHistory
     * const callHistory = await prisma.callHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CallHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CallHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CallHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CallHistories
     * const callHistories = await prisma.callHistory.findMany()
     * 
     * // Get first 10 CallHistories
     * const callHistories = await prisma.callHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const callHistoryWithIdOnly = await prisma.callHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CallHistoryFindManyArgs>(args?: SelectSubset<T, CallHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CallHistory.
     * @param {CallHistoryCreateArgs} args - Arguments to create a CallHistory.
     * @example
     * // Create one CallHistory
     * const CallHistory = await prisma.callHistory.create({
     *   data: {
     *     // ... data to create a CallHistory
     *   }
     * })
     * 
     */
    create<T extends CallHistoryCreateArgs>(args: SelectSubset<T, CallHistoryCreateArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CallHistories.
     * @param {CallHistoryCreateManyArgs} args - Arguments to create many CallHistories.
     * @example
     * // Create many CallHistories
     * const callHistory = await prisma.callHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CallHistoryCreateManyArgs>(args?: SelectSubset<T, CallHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CallHistories and returns the data saved in the database.
     * @param {CallHistoryCreateManyAndReturnArgs} args - Arguments to create many CallHistories.
     * @example
     * // Create many CallHistories
     * const callHistory = await prisma.callHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CallHistories and only return the `id`
     * const callHistoryWithIdOnly = await prisma.callHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CallHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CallHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CallHistory.
     * @param {CallHistoryDeleteArgs} args - Arguments to delete one CallHistory.
     * @example
     * // Delete one CallHistory
     * const CallHistory = await prisma.callHistory.delete({
     *   where: {
     *     // ... filter to delete one CallHistory
     *   }
     * })
     * 
     */
    delete<T extends CallHistoryDeleteArgs>(args: SelectSubset<T, CallHistoryDeleteArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CallHistory.
     * @param {CallHistoryUpdateArgs} args - Arguments to update one CallHistory.
     * @example
     * // Update one CallHistory
     * const callHistory = await prisma.callHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CallHistoryUpdateArgs>(args: SelectSubset<T, CallHistoryUpdateArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CallHistories.
     * @param {CallHistoryDeleteManyArgs} args - Arguments to filter CallHistories to delete.
     * @example
     * // Delete a few CallHistories
     * const { count } = await prisma.callHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CallHistoryDeleteManyArgs>(args?: SelectSubset<T, CallHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CallHistories
     * const callHistory = await prisma.callHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CallHistoryUpdateManyArgs>(args: SelectSubset<T, CallHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CallHistories and returns the data updated in the database.
     * @param {CallHistoryUpdateManyAndReturnArgs} args - Arguments to update many CallHistories.
     * @example
     * // Update many CallHistories
     * const callHistory = await prisma.callHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CallHistories and only return the `id`
     * const callHistoryWithIdOnly = await prisma.callHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CallHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CallHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CallHistory.
     * @param {CallHistoryUpsertArgs} args - Arguments to update or create a CallHistory.
     * @example
     * // Update or create a CallHistory
     * const callHistory = await prisma.callHistory.upsert({
     *   create: {
     *     // ... data to create a CallHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CallHistory we want to update
     *   }
     * })
     */
    upsert<T extends CallHistoryUpsertArgs>(args: SelectSubset<T, CallHistoryUpsertArgs<ExtArgs>>): Prisma__CallHistoryClient<$Result.GetResult<Prisma.$CallHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CallHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryCountArgs} args - Arguments to filter CallHistories to count.
     * @example
     * // Count the number of CallHistories
     * const count = await prisma.callHistory.count({
     *   where: {
     *     // ... the filter for the CallHistories we want to count
     *   }
     * })
    **/
    count<T extends CallHistoryCountArgs>(
      args?: Subset<T, CallHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CallHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CallHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CallHistoryAggregateArgs>(args: Subset<T, CallHistoryAggregateArgs>): Prisma.PrismaPromise<GetCallHistoryAggregateType<T>>

    /**
     * Group by CallHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CallHistoryGroupByArgs} args - Group by arguments.
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
      T extends CallHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CallHistoryGroupByArgs['orderBy'] }
        : { orderBy?: CallHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CallHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCallHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CallHistory model
   */
  readonly fields: CallHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CallHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CallHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CallHistory model
   */
  interface CallHistoryFieldRefs {
    readonly id: FieldRef<"CallHistory", 'String'>
    readonly workflowId: FieldRef<"CallHistory", 'String'>
    readonly bookingId: FieldRef<"CallHistory", 'String'>
    readonly callerName: FieldRef<"CallHistory", 'String'>
    readonly callerPhone: FieldRef<"CallHistory", 'String'>
    readonly callerEmail: FieldRef<"CallHistory", 'String'>
    readonly callType: FieldRef<"CallHistory", 'String'>
    readonly status: FieldRef<"CallHistory", 'String'>
    readonly duration: FieldRef<"CallHistory", 'Int'>
    readonly startedAt: FieldRef<"CallHistory", 'DateTime'>
    readonly endedAt: FieldRef<"CallHistory", 'DateTime'>
    readonly notes: FieldRef<"CallHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CallHistory findUnique
   */
  export type CallHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory findUniqueOrThrow
   */
  export type CallHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory findFirst
   */
  export type CallHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallHistories.
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallHistories.
     */
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * CallHistory findFirstOrThrow
   */
  export type CallHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistory to fetch.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CallHistories.
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallHistories.
     */
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * CallHistory findMany
   */
  export type CallHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter, which CallHistories to fetch.
     */
    where?: CallHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CallHistories to fetch.
     */
    orderBy?: CallHistoryOrderByWithRelationInput | CallHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CallHistories.
     */
    cursor?: CallHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CallHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CallHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CallHistories.
     */
    distinct?: CallHistoryScalarFieldEnum | CallHistoryScalarFieldEnum[]
  }

  /**
   * CallHistory create
   */
  export type CallHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a CallHistory.
     */
    data: XOR<CallHistoryCreateInput, CallHistoryUncheckedCreateInput>
  }

  /**
   * CallHistory createMany
   */
  export type CallHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CallHistories.
     */
    data: CallHistoryCreateManyInput | CallHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CallHistory createManyAndReturn
   */
  export type CallHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many CallHistories.
     */
    data: CallHistoryCreateManyInput | CallHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallHistory update
   */
  export type CallHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a CallHistory.
     */
    data: XOR<CallHistoryUpdateInput, CallHistoryUncheckedUpdateInput>
    /**
     * Choose, which CallHistory to update.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory updateMany
   */
  export type CallHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CallHistories.
     */
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CallHistories to update
     */
    where?: CallHistoryWhereInput
    /**
     * Limit how many CallHistories to update.
     */
    limit?: number
  }

  /**
   * CallHistory updateManyAndReturn
   */
  export type CallHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * The data used to update CallHistories.
     */
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyInput>
    /**
     * Filter which CallHistories to update
     */
    where?: CallHistoryWhereInput
    /**
     * Limit how many CallHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CallHistory upsert
   */
  export type CallHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the CallHistory to update in case it exists.
     */
    where: CallHistoryWhereUniqueInput
    /**
     * In case the CallHistory found by the `where` argument doesn't exist, create a new CallHistory with this data.
     */
    create: XOR<CallHistoryCreateInput, CallHistoryUncheckedCreateInput>
    /**
     * In case the CallHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CallHistoryUpdateInput, CallHistoryUncheckedUpdateInput>
  }

  /**
   * CallHistory delete
   */
  export type CallHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
    /**
     * Filter which CallHistory to delete.
     */
    where: CallHistoryWhereUniqueInput
  }

  /**
   * CallHistory deleteMany
   */
  export type CallHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CallHistories to delete
     */
    where?: CallHistoryWhereInput
    /**
     * Limit how many CallHistories to delete.
     */
    limit?: number
  }

  /**
   * CallHistory without action
   */
  export type CallHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CallHistory
     */
    select?: CallHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CallHistory
     */
    omit?: CallHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CallHistoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    username: 'username',
    bio: 'bio',
    timezone: 'timezone',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AvailabilityScheduleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    isDefault: 'isDefault',
    timezone: 'timezone',
    createdAt: 'createdAt'
  };

  export type AvailabilityScheduleScalarFieldEnum = (typeof AvailabilityScheduleScalarFieldEnum)[keyof typeof AvailabilityScheduleScalarFieldEnum]


  export const EventTypeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    duration: 'duration',
    slug: 'slug',
    isActive: 'isActive',
    color: 'color',
    bufferMinutes: 'bufferMinutes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventTypeScalarFieldEnum = (typeof EventTypeScalarFieldEnum)[keyof typeof EventTypeScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    scheduleId: 'scheduleId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    timezone: 'timezone'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const BookingQuestionScalarFieldEnum: {
    id: 'id',
    eventTypeId: 'eventTypeId',
    label: 'label',
    placeholder: 'placeholder',
    type: 'type',
    required: 'required',
    order: 'order',
    createdAt: 'createdAt'
  };

  export type BookingQuestionScalarFieldEnum = (typeof BookingQuestionScalarFieldEnum)[keyof typeof BookingQuestionScalarFieldEnum]


  export const BookingAnswerScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    questionId: 'questionId',
    answer: 'answer'
  };

  export type BookingAnswerScalarFieldEnum = (typeof BookingAnswerScalarFieldEnum)[keyof typeof BookingAnswerScalarFieldEnum]


  export const DateOverrideScalarFieldEnum: {
    id: 'id',
    eventTypeId: 'eventTypeId',
    date: 'date',
    isBlocked: 'isBlocked',
    startTime: 'startTime',
    endTime: 'endTime',
    createdAt: 'createdAt'
  };

  export type DateOverrideScalarFieldEnum = (typeof DateOverrideScalarFieldEnum)[keyof typeof DateOverrideScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    eventTypeId: 'eventTypeId',
    bookerName: 'bookerName',
    bookerEmail: 'bookerEmail',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    cancelledAt: 'cancelledAt',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    isActive: 'isActive',
    trigger: 'trigger',
    action: 'action',
    timeValue: 'timeValue',
    timeUnit: 'timeUnit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const WorkflowStepScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    stepOrder: 'stepOrder',
    action: 'action',
    template: 'template',
    createdAt: 'createdAt'
  };

  export type WorkflowStepScalarFieldEnum = (typeof WorkflowStepScalarFieldEnum)[keyof typeof WorkflowStepScalarFieldEnum]


  export const CallHistoryScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    bookingId: 'bookingId',
    callerName: 'callerName',
    callerPhone: 'callerPhone',
    callerEmail: 'callerEmail',
    callType: 'callType',
    status: 'status',
    duration: 'duration',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    notes: 'notes'
  };

  export type CallHistoryScalarFieldEnum = (typeof CallHistoryScalarFieldEnum)[keyof typeof CallHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    timezone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    eventTypes?: EventTypeListRelationFilter
    availability?: AvailabilityListRelationFilter
    schedules?: AvailabilityScheduleListRelationFilter
    workflows?: WorkflowListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    bio?: SortOrderInput | SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    eventTypes?: EventTypeOrderByRelationAggregateInput
    availability?: AvailabilityOrderByRelationAggregateInput
    schedules?: AvailabilityScheduleOrderByRelationAggregateInput
    workflows?: WorkflowOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    bio?: StringNullableFilter<"User"> | string | null
    timezone?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    eventTypes?: EventTypeListRelationFilter
    availability?: AvailabilityListRelationFilter
    schedules?: AvailabilityScheduleListRelationFilter
    workflows?: WorkflowListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    bio?: SortOrderInput | SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    timezone?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AvailabilityScheduleWhereInput = {
    AND?: AvailabilityScheduleWhereInput | AvailabilityScheduleWhereInput[]
    OR?: AvailabilityScheduleWhereInput[]
    NOT?: AvailabilityScheduleWhereInput | AvailabilityScheduleWhereInput[]
    id?: StringFilter<"AvailabilitySchedule"> | string
    userId?: StringFilter<"AvailabilitySchedule"> | string
    name?: StringFilter<"AvailabilitySchedule"> | string
    isDefault?: BoolFilter<"AvailabilitySchedule"> | boolean
    timezone?: StringFilter<"AvailabilitySchedule"> | string
    createdAt?: DateTimeFilter<"AvailabilitySchedule"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availability?: AvailabilityListRelationFilter
  }

  export type AvailabilityScheduleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    availability?: AvailabilityOrderByRelationAggregateInput
  }

  export type AvailabilityScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityScheduleWhereInput | AvailabilityScheduleWhereInput[]
    OR?: AvailabilityScheduleWhereInput[]
    NOT?: AvailabilityScheduleWhereInput | AvailabilityScheduleWhereInput[]
    userId?: StringFilter<"AvailabilitySchedule"> | string
    name?: StringFilter<"AvailabilitySchedule"> | string
    isDefault?: BoolFilter<"AvailabilitySchedule"> | boolean
    timezone?: StringFilter<"AvailabilitySchedule"> | string
    createdAt?: DateTimeFilter<"AvailabilitySchedule"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availability?: AvailabilityListRelationFilter
  }, "id">

  export type AvailabilityScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    _count?: AvailabilityScheduleCountOrderByAggregateInput
    _max?: AvailabilityScheduleMaxOrderByAggregateInput
    _min?: AvailabilityScheduleMinOrderByAggregateInput
  }

  export type AvailabilityScheduleScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScheduleScalarWhereWithAggregatesInput | AvailabilityScheduleScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScheduleScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScheduleScalarWhereWithAggregatesInput | AvailabilityScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AvailabilitySchedule"> | string
    userId?: StringWithAggregatesFilter<"AvailabilitySchedule"> | string
    name?: StringWithAggregatesFilter<"AvailabilitySchedule"> | string
    isDefault?: BoolWithAggregatesFilter<"AvailabilitySchedule"> | boolean
    timezone?: StringWithAggregatesFilter<"AvailabilitySchedule"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AvailabilitySchedule"> | Date | string
  }

  export type EventTypeWhereInput = {
    AND?: EventTypeWhereInput | EventTypeWhereInput[]
    OR?: EventTypeWhereInput[]
    NOT?: EventTypeWhereInput | EventTypeWhereInput[]
    id?: StringFilter<"EventType"> | string
    userId?: StringFilter<"EventType"> | string
    title?: StringFilter<"EventType"> | string
    description?: StringNullableFilter<"EventType"> | string | null
    duration?: IntFilter<"EventType"> | number
    slug?: StringFilter<"EventType"> | string
    isActive?: BoolFilter<"EventType"> | boolean
    color?: StringFilter<"EventType"> | string
    bufferMinutes?: IntFilter<"EventType"> | number
    createdAt?: DateTimeFilter<"EventType"> | Date | string
    updatedAt?: DateTimeFilter<"EventType"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    questions?: BookingQuestionListRelationFilter
    overrides?: DateOverrideListRelationFilter
  }

  export type EventTypeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    color?: SortOrder
    bufferMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    questions?: BookingQuestionOrderByRelationAggregateInput
    overrides?: DateOverrideOrderByRelationAggregateInput
  }

  export type EventTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: EventTypeWhereInput | EventTypeWhereInput[]
    OR?: EventTypeWhereInput[]
    NOT?: EventTypeWhereInput | EventTypeWhereInput[]
    userId?: StringFilter<"EventType"> | string
    title?: StringFilter<"EventType"> | string
    description?: StringNullableFilter<"EventType"> | string | null
    duration?: IntFilter<"EventType"> | number
    isActive?: BoolFilter<"EventType"> | boolean
    color?: StringFilter<"EventType"> | string
    bufferMinutes?: IntFilter<"EventType"> | number
    createdAt?: DateTimeFilter<"EventType"> | Date | string
    updatedAt?: DateTimeFilter<"EventType"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    questions?: BookingQuestionListRelationFilter
    overrides?: DateOverrideListRelationFilter
  }, "id" | "slug">

  export type EventTypeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    duration?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    color?: SortOrder
    bufferMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventTypeCountOrderByAggregateInput
    _avg?: EventTypeAvgOrderByAggregateInput
    _max?: EventTypeMaxOrderByAggregateInput
    _min?: EventTypeMinOrderByAggregateInput
    _sum?: EventTypeSumOrderByAggregateInput
  }

  export type EventTypeScalarWhereWithAggregatesInput = {
    AND?: EventTypeScalarWhereWithAggregatesInput | EventTypeScalarWhereWithAggregatesInput[]
    OR?: EventTypeScalarWhereWithAggregatesInput[]
    NOT?: EventTypeScalarWhereWithAggregatesInput | EventTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventType"> | string
    userId?: StringWithAggregatesFilter<"EventType"> | string
    title?: StringWithAggregatesFilter<"EventType"> | string
    description?: StringNullableWithAggregatesFilter<"EventType"> | string | null
    duration?: IntWithAggregatesFilter<"EventType"> | number
    slug?: StringWithAggregatesFilter<"EventType"> | string
    isActive?: BoolWithAggregatesFilter<"EventType"> | boolean
    color?: StringWithAggregatesFilter<"EventType"> | string
    bufferMinutes?: IntWithAggregatesFilter<"EventType"> | number
    createdAt?: DateTimeWithAggregatesFilter<"EventType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"EventType"> | Date | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    userId?: StringFilter<"Availability"> | string
    scheduleId?: StringNullableFilter<"Availability"> | string | null
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    timezone?: StringFilter<"Availability"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<AvailabilityScheduleNullableScalarRelationFilter, AvailabilityScheduleWhereInput> | null
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrderInput | SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    user?: UserOrderByWithRelationInput
    schedule?: AvailabilityScheduleOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    userId?: StringFilter<"Availability"> | string
    scheduleId?: StringNullableFilter<"Availability"> | string | null
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    timezone?: StringFilter<"Availability"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    schedule?: XOR<AvailabilityScheduleNullableScalarRelationFilter, AvailabilityScheduleWhereInput> | null
  }, "id">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrderInput | SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    userId?: StringWithAggregatesFilter<"Availability"> | string
    scheduleId?: StringNullableWithAggregatesFilter<"Availability"> | string | null
    dayOfWeek?: IntWithAggregatesFilter<"Availability"> | number
    startTime?: StringWithAggregatesFilter<"Availability"> | string
    endTime?: StringWithAggregatesFilter<"Availability"> | string
    timezone?: StringWithAggregatesFilter<"Availability"> | string
  }

  export type BookingQuestionWhereInput = {
    AND?: BookingQuestionWhereInput | BookingQuestionWhereInput[]
    OR?: BookingQuestionWhereInput[]
    NOT?: BookingQuestionWhereInput | BookingQuestionWhereInput[]
    id?: StringFilter<"BookingQuestion"> | string
    eventTypeId?: StringFilter<"BookingQuestion"> | string
    label?: StringFilter<"BookingQuestion"> | string
    placeholder?: StringNullableFilter<"BookingQuestion"> | string | null
    type?: StringFilter<"BookingQuestion"> | string
    required?: BoolFilter<"BookingQuestion"> | boolean
    order?: IntFilter<"BookingQuestion"> | number
    createdAt?: DateTimeFilter<"BookingQuestion"> | Date | string
    eventType?: XOR<EventTypeScalarRelationFilter, EventTypeWhereInput>
    answers?: BookingAnswerListRelationFilter
  }

  export type BookingQuestionOrderByWithRelationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    label?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    eventType?: EventTypeOrderByWithRelationInput
    answers?: BookingAnswerOrderByRelationAggregateInput
  }

  export type BookingQuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingQuestionWhereInput | BookingQuestionWhereInput[]
    OR?: BookingQuestionWhereInput[]
    NOT?: BookingQuestionWhereInput | BookingQuestionWhereInput[]
    eventTypeId?: StringFilter<"BookingQuestion"> | string
    label?: StringFilter<"BookingQuestion"> | string
    placeholder?: StringNullableFilter<"BookingQuestion"> | string | null
    type?: StringFilter<"BookingQuestion"> | string
    required?: BoolFilter<"BookingQuestion"> | boolean
    order?: IntFilter<"BookingQuestion"> | number
    createdAt?: DateTimeFilter<"BookingQuestion"> | Date | string
    eventType?: XOR<EventTypeScalarRelationFilter, EventTypeWhereInput>
    answers?: BookingAnswerListRelationFilter
  }, "id">

  export type BookingQuestionOrderByWithAggregationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    label?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    _count?: BookingQuestionCountOrderByAggregateInput
    _avg?: BookingQuestionAvgOrderByAggregateInput
    _max?: BookingQuestionMaxOrderByAggregateInput
    _min?: BookingQuestionMinOrderByAggregateInput
    _sum?: BookingQuestionSumOrderByAggregateInput
  }

  export type BookingQuestionScalarWhereWithAggregatesInput = {
    AND?: BookingQuestionScalarWhereWithAggregatesInput | BookingQuestionScalarWhereWithAggregatesInput[]
    OR?: BookingQuestionScalarWhereWithAggregatesInput[]
    NOT?: BookingQuestionScalarWhereWithAggregatesInput | BookingQuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingQuestion"> | string
    eventTypeId?: StringWithAggregatesFilter<"BookingQuestion"> | string
    label?: StringWithAggregatesFilter<"BookingQuestion"> | string
    placeholder?: StringNullableWithAggregatesFilter<"BookingQuestion"> | string | null
    type?: StringWithAggregatesFilter<"BookingQuestion"> | string
    required?: BoolWithAggregatesFilter<"BookingQuestion"> | boolean
    order?: IntWithAggregatesFilter<"BookingQuestion"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BookingQuestion"> | Date | string
  }

  export type BookingAnswerWhereInput = {
    AND?: BookingAnswerWhereInput | BookingAnswerWhereInput[]
    OR?: BookingAnswerWhereInput[]
    NOT?: BookingAnswerWhereInput | BookingAnswerWhereInput[]
    id?: StringFilter<"BookingAnswer"> | string
    bookingId?: StringFilter<"BookingAnswer"> | string
    questionId?: StringFilter<"BookingAnswer"> | string
    answer?: StringFilter<"BookingAnswer"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    question?: XOR<BookingQuestionScalarRelationFilter, BookingQuestionWhereInput>
  }

  export type BookingAnswerOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    booking?: BookingOrderByWithRelationInput
    question?: BookingQuestionOrderByWithRelationInput
  }

  export type BookingAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingAnswerWhereInput | BookingAnswerWhereInput[]
    OR?: BookingAnswerWhereInput[]
    NOT?: BookingAnswerWhereInput | BookingAnswerWhereInput[]
    bookingId?: StringFilter<"BookingAnswer"> | string
    questionId?: StringFilter<"BookingAnswer"> | string
    answer?: StringFilter<"BookingAnswer"> | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    question?: XOR<BookingQuestionScalarRelationFilter, BookingQuestionWhereInput>
  }, "id">

  export type BookingAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
    _count?: BookingAnswerCountOrderByAggregateInput
    _max?: BookingAnswerMaxOrderByAggregateInput
    _min?: BookingAnswerMinOrderByAggregateInput
  }

  export type BookingAnswerScalarWhereWithAggregatesInput = {
    AND?: BookingAnswerScalarWhereWithAggregatesInput | BookingAnswerScalarWhereWithAggregatesInput[]
    OR?: BookingAnswerScalarWhereWithAggregatesInput[]
    NOT?: BookingAnswerScalarWhereWithAggregatesInput | BookingAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingAnswer"> | string
    bookingId?: StringWithAggregatesFilter<"BookingAnswer"> | string
    questionId?: StringWithAggregatesFilter<"BookingAnswer"> | string
    answer?: StringWithAggregatesFilter<"BookingAnswer"> | string
  }

  export type DateOverrideWhereInput = {
    AND?: DateOverrideWhereInput | DateOverrideWhereInput[]
    OR?: DateOverrideWhereInput[]
    NOT?: DateOverrideWhereInput | DateOverrideWhereInput[]
    id?: StringFilter<"DateOverride"> | string
    eventTypeId?: StringFilter<"DateOverride"> | string
    date?: DateTimeFilter<"DateOverride"> | Date | string
    isBlocked?: BoolFilter<"DateOverride"> | boolean
    startTime?: StringNullableFilter<"DateOverride"> | string | null
    endTime?: StringNullableFilter<"DateOverride"> | string | null
    createdAt?: DateTimeFilter<"DateOverride"> | Date | string
    eventType?: XOR<EventTypeScalarRelationFilter, EventTypeWhereInput>
  }

  export type DateOverrideOrderByWithRelationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    date?: SortOrder
    isBlocked?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventType?: EventTypeOrderByWithRelationInput
  }

  export type DateOverrideWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DateOverrideWhereInput | DateOverrideWhereInput[]
    OR?: DateOverrideWhereInput[]
    NOT?: DateOverrideWhereInput | DateOverrideWhereInput[]
    eventTypeId?: StringFilter<"DateOverride"> | string
    date?: DateTimeFilter<"DateOverride"> | Date | string
    isBlocked?: BoolFilter<"DateOverride"> | boolean
    startTime?: StringNullableFilter<"DateOverride"> | string | null
    endTime?: StringNullableFilter<"DateOverride"> | string | null
    createdAt?: DateTimeFilter<"DateOverride"> | Date | string
    eventType?: XOR<EventTypeScalarRelationFilter, EventTypeWhereInput>
  }, "id">

  export type DateOverrideOrderByWithAggregationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    date?: SortOrder
    isBlocked?: SortOrder
    startTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DateOverrideCountOrderByAggregateInput
    _max?: DateOverrideMaxOrderByAggregateInput
    _min?: DateOverrideMinOrderByAggregateInput
  }

  export type DateOverrideScalarWhereWithAggregatesInput = {
    AND?: DateOverrideScalarWhereWithAggregatesInput | DateOverrideScalarWhereWithAggregatesInput[]
    OR?: DateOverrideScalarWhereWithAggregatesInput[]
    NOT?: DateOverrideScalarWhereWithAggregatesInput | DateOverrideScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DateOverride"> | string
    eventTypeId?: StringWithAggregatesFilter<"DateOverride"> | string
    date?: DateTimeWithAggregatesFilter<"DateOverride"> | Date | string
    isBlocked?: BoolWithAggregatesFilter<"DateOverride"> | boolean
    startTime?: StringNullableWithAggregatesFilter<"DateOverride"> | string | null
    endTime?: StringNullableWithAggregatesFilter<"DateOverride"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"DateOverride"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    eventTypeId?: StringFilter<"Booking"> | string
    bookerName?: StringFilter<"Booking"> | string
    bookerEmail?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    eventType?: XOR<EventTypeScalarRelationFilter, EventTypeWhereInput>
    answers?: BookingAnswerListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    bookerName?: SortOrder
    bookerEmail?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    eventType?: EventTypeOrderByWithRelationInput
    answers?: BookingAnswerOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    eventTypeId?: StringFilter<"Booking"> | string
    bookerName?: StringFilter<"Booking"> | string
    bookerEmail?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    eventType?: XOR<EventTypeScalarRelationFilter, EventTypeWhereInput>
    answers?: BookingAnswerListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    bookerName?: SortOrder
    bookerEmail?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    eventTypeId?: StringWithAggregatesFilter<"Booking"> | string
    bookerName?: StringWithAggregatesFilter<"Booking"> | string
    bookerEmail?: StringWithAggregatesFilter<"Booking"> | string
    startTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Booking"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    title?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    isActive?: BoolFilter<"Workflow"> | boolean
    trigger?: StringFilter<"Workflow"> | string
    action?: StringFilter<"Workflow"> | string
    timeValue?: IntFilter<"Workflow"> | number
    timeUnit?: StringFilter<"Workflow"> | string
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    steps?: WorkflowStepListRelationFilter
    callHistory?: CallHistoryListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    timeValue?: SortOrder
    timeUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    steps?: WorkflowStepOrderByRelationAggregateInput
    callHistory?: CallHistoryOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    userId?: StringFilter<"Workflow"> | string
    title?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    isActive?: BoolFilter<"Workflow"> | boolean
    trigger?: StringFilter<"Workflow"> | string
    action?: StringFilter<"Workflow"> | string
    timeValue?: IntFilter<"Workflow"> | number
    timeUnit?: StringFilter<"Workflow"> | string
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    steps?: WorkflowStepListRelationFilter
    callHistory?: CallHistoryListRelationFilter
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    timeValue?: SortOrder
    timeUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _avg?: WorkflowAvgOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
    _sum?: WorkflowSumOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflow"> | string
    userId?: StringWithAggregatesFilter<"Workflow"> | string
    title?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    isActive?: BoolWithAggregatesFilter<"Workflow"> | boolean
    trigger?: StringWithAggregatesFilter<"Workflow"> | string
    action?: StringWithAggregatesFilter<"Workflow"> | string
    timeValue?: IntWithAggregatesFilter<"Workflow"> | number
    timeUnit?: StringWithAggregatesFilter<"Workflow"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type WorkflowStepWhereInput = {
    AND?: WorkflowStepWhereInput | WorkflowStepWhereInput[]
    OR?: WorkflowStepWhereInput[]
    NOT?: WorkflowStepWhereInput | WorkflowStepWhereInput[]
    id?: StringFilter<"WorkflowStep"> | string
    workflowId?: StringFilter<"WorkflowStep"> | string
    stepOrder?: IntFilter<"WorkflowStep"> | number
    action?: StringFilter<"WorkflowStep"> | string
    template?: StringNullableFilter<"WorkflowStep"> | string | null
    createdAt?: DateTimeFilter<"WorkflowStep"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type WorkflowStepOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepOrder?: SortOrder
    action?: SortOrder
    template?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type WorkflowStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowStepWhereInput | WorkflowStepWhereInput[]
    OR?: WorkflowStepWhereInput[]
    NOT?: WorkflowStepWhereInput | WorkflowStepWhereInput[]
    workflowId?: StringFilter<"WorkflowStep"> | string
    stepOrder?: IntFilter<"WorkflowStep"> | number
    action?: StringFilter<"WorkflowStep"> | string
    template?: StringNullableFilter<"WorkflowStep"> | string | null
    createdAt?: DateTimeFilter<"WorkflowStep"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type WorkflowStepOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepOrder?: SortOrder
    action?: SortOrder
    template?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkflowStepCountOrderByAggregateInput
    _avg?: WorkflowStepAvgOrderByAggregateInput
    _max?: WorkflowStepMaxOrderByAggregateInput
    _min?: WorkflowStepMinOrderByAggregateInput
    _sum?: WorkflowStepSumOrderByAggregateInput
  }

  export type WorkflowStepScalarWhereWithAggregatesInput = {
    AND?: WorkflowStepScalarWhereWithAggregatesInput | WorkflowStepScalarWhereWithAggregatesInput[]
    OR?: WorkflowStepScalarWhereWithAggregatesInput[]
    NOT?: WorkflowStepScalarWhereWithAggregatesInput | WorkflowStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkflowStep"> | string
    workflowId?: StringWithAggregatesFilter<"WorkflowStep"> | string
    stepOrder?: IntWithAggregatesFilter<"WorkflowStep"> | number
    action?: StringWithAggregatesFilter<"WorkflowStep"> | string
    template?: StringNullableWithAggregatesFilter<"WorkflowStep"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkflowStep"> | Date | string
  }

  export type CallHistoryWhereInput = {
    AND?: CallHistoryWhereInput | CallHistoryWhereInput[]
    OR?: CallHistoryWhereInput[]
    NOT?: CallHistoryWhereInput | CallHistoryWhereInput[]
    id?: StringFilter<"CallHistory"> | string
    workflowId?: StringFilter<"CallHistory"> | string
    bookingId?: StringNullableFilter<"CallHistory"> | string | null
    callerName?: StringFilter<"CallHistory"> | string
    callerPhone?: StringNullableFilter<"CallHistory"> | string | null
    callerEmail?: StringNullableFilter<"CallHistory"> | string | null
    callType?: StringFilter<"CallHistory"> | string
    status?: StringFilter<"CallHistory"> | string
    duration?: IntFilter<"CallHistory"> | number
    startedAt?: DateTimeFilter<"CallHistory"> | Date | string
    endedAt?: DateTimeNullableFilter<"CallHistory"> | Date | string | null
    notes?: StringNullableFilter<"CallHistory"> | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type CallHistoryOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    callerName?: SortOrder
    callerPhone?: SortOrderInput | SortOrder
    callerEmail?: SortOrderInput | SortOrder
    callType?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type CallHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CallHistoryWhereInput | CallHistoryWhereInput[]
    OR?: CallHistoryWhereInput[]
    NOT?: CallHistoryWhereInput | CallHistoryWhereInput[]
    workflowId?: StringFilter<"CallHistory"> | string
    bookingId?: StringNullableFilter<"CallHistory"> | string | null
    callerName?: StringFilter<"CallHistory"> | string
    callerPhone?: StringNullableFilter<"CallHistory"> | string | null
    callerEmail?: StringNullableFilter<"CallHistory"> | string | null
    callType?: StringFilter<"CallHistory"> | string
    status?: StringFilter<"CallHistory"> | string
    duration?: IntFilter<"CallHistory"> | number
    startedAt?: DateTimeFilter<"CallHistory"> | Date | string
    endedAt?: DateTimeNullableFilter<"CallHistory"> | Date | string | null
    notes?: StringNullableFilter<"CallHistory"> | string | null
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type CallHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    callerName?: SortOrder
    callerPhone?: SortOrderInput | SortOrder
    callerEmail?: SortOrderInput | SortOrder
    callType?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: CallHistoryCountOrderByAggregateInput
    _avg?: CallHistoryAvgOrderByAggregateInput
    _max?: CallHistoryMaxOrderByAggregateInput
    _min?: CallHistoryMinOrderByAggregateInput
    _sum?: CallHistorySumOrderByAggregateInput
  }

  export type CallHistoryScalarWhereWithAggregatesInput = {
    AND?: CallHistoryScalarWhereWithAggregatesInput | CallHistoryScalarWhereWithAggregatesInput[]
    OR?: CallHistoryScalarWhereWithAggregatesInput[]
    NOT?: CallHistoryScalarWhereWithAggregatesInput | CallHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CallHistory"> | string
    workflowId?: StringWithAggregatesFilter<"CallHistory"> | string
    bookingId?: StringNullableWithAggregatesFilter<"CallHistory"> | string | null
    callerName?: StringWithAggregatesFilter<"CallHistory"> | string
    callerPhone?: StringNullableWithAggregatesFilter<"CallHistory"> | string | null
    callerEmail?: StringNullableWithAggregatesFilter<"CallHistory"> | string | null
    callType?: StringWithAggregatesFilter<"CallHistory"> | string
    status?: StringWithAggregatesFilter<"CallHistory"> | string
    duration?: IntWithAggregatesFilter<"CallHistory"> | number
    startedAt?: DateTimeWithAggregatesFilter<"CallHistory"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"CallHistory"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"CallHistory"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    schedules?: AvailabilityScheduleCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    schedules?: AvailabilityScheduleUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    schedules?: AvailabilityScheduleUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    schedules?: AvailabilityScheduleUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityScheduleCreateInput = {
    id?: string
    name?: string
    isDefault?: boolean
    timezone?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSchedulesInput
    availability?: AvailabilityCreateNestedManyWithoutScheduleInput
  }

  export type AvailabilityScheduleUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string
    isDefault?: boolean
    timezone?: string
    createdAt?: Date | string
    availability?: AvailabilityUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type AvailabilityScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSchedulesNestedInput
    availability?: AvailabilityUpdateManyWithoutScheduleNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type AvailabilityScheduleCreateManyInput = {
    id?: string
    userId: string
    name?: string
    isDefault?: boolean
    timezone?: string
    createdAt?: Date | string
  }

  export type AvailabilityScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeCreateInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    bookings?: BookingCreateNestedManyWithoutEventTypeInput
    questions?: BookingQuestionCreateNestedManyWithoutEventTypeInput
    overrides?: DateOverrideCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutEventTypeInput
    questions?: BookingQuestionUncheckedCreateNestedManyWithoutEventTypeInput
    overrides?: DateOverrideUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    bookings?: BookingUpdateManyWithoutEventTypeNestedInput
    questions?: BookingQuestionUpdateManyWithoutEventTypeNestedInput
    overrides?: DateOverrideUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutEventTypeNestedInput
    questions?: BookingQuestionUncheckedUpdateManyWithoutEventTypeNestedInput
    overrides?: DateOverrideUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
    user: UserCreateNestedOneWithoutAvailabilityInput
    schedule?: AvailabilityScheduleCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    userId: string
    scheduleId?: string | null
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAvailabilityNestedInput
    schedule?: AvailabilityScheduleUpdateOneWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    userId: string
    scheduleId?: string | null
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type BookingQuestionCreateInput = {
    id?: string
    label: string
    placeholder?: string | null
    type?: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutQuestionsInput
    answers?: BookingAnswerCreateNestedManyWithoutQuestionInput
  }

  export type BookingQuestionUncheckedCreateInput = {
    id?: string
    eventTypeId: string
    label: string
    placeholder?: string | null
    type?: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    answers?: BookingAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type BookingQuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutQuestionsNestedInput
    answers?: BookingAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type BookingQuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: BookingAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type BookingQuestionCreateManyInput = {
    id?: string
    eventTypeId: string
    label: string
    placeholder?: string | null
    type?: string
    required?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type BookingQuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingQuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingAnswerCreateInput = {
    id?: string
    answer: string
    booking: BookingCreateNestedOneWithoutAnswersInput
    question: BookingQuestionCreateNestedOneWithoutAnswersInput
  }

  export type BookingAnswerUncheckedCreateInput = {
    id?: string
    bookingId: string
    questionId: string
    answer: string
  }

  export type BookingAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutAnswersNestedInput
    question?: BookingQuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type BookingAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type BookingAnswerCreateManyInput = {
    id?: string
    bookingId: string
    questionId: string
    answer: string
  }

  export type BookingAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type BookingAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type DateOverrideCreateInput = {
    id?: string
    date: Date | string
    isBlocked?: boolean
    startTime?: string | null
    endTime?: string | null
    createdAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutOverridesInput
  }

  export type DateOverrideUncheckedCreateInput = {
    id?: string
    eventTypeId: string
    date: Date | string
    isBlocked?: boolean
    startTime?: string | null
    endTime?: string | null
    createdAt?: Date | string
  }

  export type DateOverrideUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutOverridesNestedInput
  }

  export type DateOverrideUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOverrideCreateManyInput = {
    id?: string
    eventTypeId: string
    date: Date | string
    isBlocked?: boolean
    startTime?: string | null
    endTime?: string | null
    createdAt?: Date | string
  }

  export type DateOverrideUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOverrideUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypeId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    id?: string
    bookerName: string
    bookerEmail: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    cancelledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutBookingsInput
    answers?: BookingAnswerCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    eventTypeId: string
    bookerName: string
    bookerEmail: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    cancelledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    answers?: BookingAnswerUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookerName?: StringFieldUpdateOperationsInput | string
    bookerEmail?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutBookingsNestedInput
    answers?: BookingAnswerUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypeId?: StringFieldUpdateOperationsInput | string
    bookerName?: StringFieldUpdateOperationsInput | string
    bookerEmail?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: BookingAnswerUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    eventTypeId: string
    bookerName: string
    bookerEmail: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    cancelledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookerName?: StringFieldUpdateOperationsInput | string
    bookerEmail?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypeId?: StringFieldUpdateOperationsInput | string
    bookerName?: StringFieldUpdateOperationsInput | string
    bookerEmail?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    steps?: WorkflowStepCreateNestedManyWithoutWorkflowInput
    callHistory?: CallHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: WorkflowStepUncheckedCreateNestedManyWithoutWorkflowInput
    callHistory?: CallHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    steps?: WorkflowStepUpdateManyWithoutWorkflowNestedInput
    callHistory?: CallHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: WorkflowStepUncheckedUpdateManyWithoutWorkflowNestedInput
    callHistory?: CallHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowStepCreateInput = {
    id?: string
    stepOrder: number
    action: string
    template?: string | null
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutStepsInput
  }

  export type WorkflowStepUncheckedCreateInput = {
    id?: string
    workflowId: string
    stepOrder: number
    action: string
    template?: string | null
    createdAt?: Date | string
  }

  export type WorkflowStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    template?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutStepsNestedInput
  }

  export type WorkflowStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    template?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowStepCreateManyInput = {
    id?: string
    workflowId: string
    stepOrder: number
    action: string
    template?: string | null
    createdAt?: Date | string
  }

  export type WorkflowStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    template?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    template?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryCreateInput = {
    id?: string
    bookingId?: string | null
    callerName: string
    callerPhone?: string | null
    callerEmail?: string | null
    callType?: string
    status?: string
    duration?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    notes?: string | null
    workflow: WorkflowCreateNestedOneWithoutCallHistoryInput
  }

  export type CallHistoryUncheckedCreateInput = {
    id?: string
    workflowId: string
    bookingId?: string | null
    callerName: string
    callerPhone?: string | null
    callerEmail?: string | null
    callType?: string
    status?: string
    duration?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    notes?: string | null
  }

  export type CallHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    callerName?: StringFieldUpdateOperationsInput | string
    callerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    callerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    workflow?: WorkflowUpdateOneRequiredWithoutCallHistoryNestedInput
  }

  export type CallHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    callerName?: StringFieldUpdateOperationsInput | string
    callerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    callerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CallHistoryCreateManyInput = {
    id?: string
    workflowId: string
    bookingId?: string | null
    callerName: string
    callerPhone?: string | null
    callerEmail?: string | null
    callType?: string
    status?: string
    duration?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    notes?: string | null
  }

  export type CallHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    callerName?: StringFieldUpdateOperationsInput | string
    callerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    callerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CallHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    callerName?: StringFieldUpdateOperationsInput | string
    callerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    callerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventTypeListRelationFilter = {
    every?: EventTypeWhereInput
    some?: EventTypeWhereInput
    none?: EventTypeWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type AvailabilityScheduleListRelationFilter = {
    every?: AvailabilityScheduleWhereInput
    some?: AvailabilityScheduleWhereInput
    none?: AvailabilityScheduleWhereInput
  }

  export type WorkflowListRelationFilter = {
    every?: WorkflowWhereInput
    some?: WorkflowWhereInput
    none?: WorkflowWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AvailabilityScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type AvailabilityScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type AvailabilityScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type BookingQuestionListRelationFilter = {
    every?: BookingQuestionWhereInput
    some?: BookingQuestionWhereInput
    none?: BookingQuestionWhereInput
  }

  export type DateOverrideListRelationFilter = {
    every?: DateOverrideWhereInput
    some?: DateOverrideWhereInput
    none?: DateOverrideWhereInput
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingQuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DateOverrideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventTypeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    color?: SortOrder
    bufferMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeAvgOrderByAggregateInput = {
    duration?: SortOrder
    bufferMinutes?: SortOrder
  }

  export type EventTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    color?: SortOrder
    bufferMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    slug?: SortOrder
    isActive?: SortOrder
    color?: SortOrder
    bufferMinutes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventTypeSumOrderByAggregateInput = {
    duration?: SortOrder
    bufferMinutes?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type AvailabilityScheduleNullableScalarRelationFilter = {
    is?: AvailabilityScheduleWhereInput | null
    isNot?: AvailabilityScheduleWhereInput | null
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    scheduleId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type EventTypeScalarRelationFilter = {
    is?: EventTypeWhereInput
    isNot?: EventTypeWhereInput
  }

  export type BookingAnswerListRelationFilter = {
    every?: BookingAnswerWhereInput
    some?: BookingAnswerWhereInput
    none?: BookingAnswerWhereInput
  }

  export type BookingAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingQuestionCountOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    label?: SortOrder
    placeholder?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingQuestionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BookingQuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    label?: SortOrder
    placeholder?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingQuestionMinOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    label?: SortOrder
    placeholder?: SortOrder
    type?: SortOrder
    required?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingQuestionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BookingQuestionScalarRelationFilter = {
    is?: BookingQuestionWhereInput
    isNot?: BookingQuestionWhereInput
  }

  export type BookingAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
  }

  export type BookingAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
  }

  export type BookingAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    questionId?: SortOrder
    answer?: SortOrder
  }

  export type DateOverrideCountOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    date?: SortOrder
    isBlocked?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DateOverrideMaxOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    date?: SortOrder
    isBlocked?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type DateOverrideMinOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    date?: SortOrder
    isBlocked?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    bookerName?: SortOrder
    bookerEmail?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    cancelledAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    bookerName?: SortOrder
    bookerEmail?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    cancelledAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    eventTypeId?: SortOrder
    bookerName?: SortOrder
    bookerEmail?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    status?: SortOrder
    cancelledAt?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WorkflowStepListRelationFilter = {
    every?: WorkflowStepWhereInput
    some?: WorkflowStepWhereInput
    none?: WorkflowStepWhereInput
  }

  export type CallHistoryListRelationFilter = {
    every?: CallHistoryWhereInput
    some?: CallHistoryWhereInput
    none?: CallHistoryWhereInput
  }

  export type WorkflowStepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CallHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    timeValue?: SortOrder
    timeUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowAvgOrderByAggregateInput = {
    timeValue?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    timeValue?: SortOrder
    timeUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    trigger?: SortOrder
    action?: SortOrder
    timeValue?: SortOrder
    timeUnit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowSumOrderByAggregateInput = {
    timeValue?: SortOrder
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type WorkflowStepCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepOrder?: SortOrder
    action?: SortOrder
    template?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowStepAvgOrderByAggregateInput = {
    stepOrder?: SortOrder
  }

  export type WorkflowStepMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepOrder?: SortOrder
    action?: SortOrder
    template?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowStepMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    stepOrder?: SortOrder
    action?: SortOrder
    template?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkflowStepSumOrderByAggregateInput = {
    stepOrder?: SortOrder
  }

  export type CallHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    bookingId?: SortOrder
    callerName?: SortOrder
    callerPhone?: SortOrder
    callerEmail?: SortOrder
    callType?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    notes?: SortOrder
  }

  export type CallHistoryAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type CallHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    bookingId?: SortOrder
    callerName?: SortOrder
    callerPhone?: SortOrder
    callerEmail?: SortOrder
    callType?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    notes?: SortOrder
  }

  export type CallHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    bookingId?: SortOrder
    callerName?: SortOrder
    callerPhone?: SortOrder
    callerEmail?: SortOrder
    callType?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    notes?: SortOrder
  }

  export type CallHistorySumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EventTypeCreateNestedManyWithoutUserInput = {
    create?: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput> | EventTypeCreateWithoutUserInput[] | EventTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventTypeCreateOrConnectWithoutUserInput | EventTypeCreateOrConnectWithoutUserInput[]
    createMany?: EventTypeCreateManyUserInputEnvelope
    connect?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type AvailabilityScheduleCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutUserInput, AvailabilityScheduleUncheckedCreateWithoutUserInput> | AvailabilityScheduleCreateWithoutUserInput[] | AvailabilityScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutUserInput | AvailabilityScheduleCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityScheduleCreateManyUserInputEnvelope
    connect?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
  }

  export type WorkflowCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type EventTypeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput> | EventTypeCreateWithoutUserInput[] | EventTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventTypeCreateOrConnectWithoutUserInput | EventTypeCreateOrConnectWithoutUserInput[]
    createMany?: EventTypeCreateManyUserInputEnvelope
    connect?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type AvailabilityScheduleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutUserInput, AvailabilityScheduleUncheckedCreateWithoutUserInput> | AvailabilityScheduleCreateWithoutUserInput[] | AvailabilityScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutUserInput | AvailabilityScheduleCreateOrConnectWithoutUserInput[]
    createMany?: AvailabilityScheduleCreateManyUserInputEnvelope
    connect?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
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

  export type EventTypeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput> | EventTypeCreateWithoutUserInput[] | EventTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventTypeCreateOrConnectWithoutUserInput | EventTypeCreateOrConnectWithoutUserInput[]
    upsert?: EventTypeUpsertWithWhereUniqueWithoutUserInput | EventTypeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventTypeCreateManyUserInputEnvelope
    set?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
    disconnect?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
    delete?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
    connect?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
    update?: EventTypeUpdateWithWhereUniqueWithoutUserInput | EventTypeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventTypeUpdateManyWithWhereWithoutUserInput | EventTypeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventTypeScalarWhereInput | EventTypeScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type AvailabilityScheduleUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutUserInput, AvailabilityScheduleUncheckedCreateWithoutUserInput> | AvailabilityScheduleCreateWithoutUserInput[] | AvailabilityScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutUserInput | AvailabilityScheduleCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityScheduleUpsertWithWhereUniqueWithoutUserInput | AvailabilityScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityScheduleCreateManyUserInputEnvelope
    set?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
    disconnect?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
    delete?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
    connect?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
    update?: AvailabilityScheduleUpdateWithWhereUniqueWithoutUserInput | AvailabilityScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityScheduleUpdateManyWithWhereWithoutUserInput | AvailabilityScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScheduleScalarWhereInput | AvailabilityScheduleScalarWhereInput[]
  }

  export type WorkflowUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type EventTypeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput> | EventTypeCreateWithoutUserInput[] | EventTypeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventTypeCreateOrConnectWithoutUserInput | EventTypeCreateOrConnectWithoutUserInput[]
    upsert?: EventTypeUpsertWithWhereUniqueWithoutUserInput | EventTypeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventTypeCreateManyUserInputEnvelope
    set?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
    disconnect?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
    delete?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
    connect?: EventTypeWhereUniqueInput | EventTypeWhereUniqueInput[]
    update?: EventTypeUpdateWithWhereUniqueWithoutUserInput | EventTypeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventTypeUpdateManyWithWhereWithoutUserInput | EventTypeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventTypeScalarWhereInput | EventTypeScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityCreateManyUserInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type AvailabilityScheduleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutUserInput, AvailabilityScheduleUncheckedCreateWithoutUserInput> | AvailabilityScheduleCreateWithoutUserInput[] | AvailabilityScheduleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutUserInput | AvailabilityScheduleCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityScheduleUpsertWithWhereUniqueWithoutUserInput | AvailabilityScheduleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvailabilityScheduleCreateManyUserInputEnvelope
    set?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
    disconnect?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
    delete?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
    connect?: AvailabilityScheduleWhereUniqueInput | AvailabilityScheduleWhereUniqueInput[]
    update?: AvailabilityScheduleUpdateWithWhereUniqueWithoutUserInput | AvailabilityScheduleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityScheduleUpdateManyWithWhereWithoutUserInput | AvailabilityScheduleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScheduleScalarWhereInput | AvailabilityScheduleScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    connect?: UserWhereUniqueInput
  }

  export type AvailabilityCreateNestedManyWithoutScheduleInput = {
    create?: XOR<AvailabilityCreateWithoutScheduleInput, AvailabilityUncheckedCreateWithoutScheduleInput> | AvailabilityCreateWithoutScheduleInput[] | AvailabilityUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutScheduleInput | AvailabilityCreateOrConnectWithoutScheduleInput[]
    createMany?: AvailabilityCreateManyScheduleInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<AvailabilityCreateWithoutScheduleInput, AvailabilityUncheckedCreateWithoutScheduleInput> | AvailabilityCreateWithoutScheduleInput[] | AvailabilityUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutScheduleInput | AvailabilityCreateOrConnectWithoutScheduleInput[]
    createMany?: AvailabilityCreateManyScheduleInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSchedulesInput
    upsert?: UserUpsertWithoutSchedulesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSchedulesInput, UserUpdateWithoutSchedulesInput>, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type AvailabilityUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<AvailabilityCreateWithoutScheduleInput, AvailabilityUncheckedCreateWithoutScheduleInput> | AvailabilityCreateWithoutScheduleInput[] | AvailabilityUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutScheduleInput | AvailabilityCreateOrConnectWithoutScheduleInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutScheduleInput | AvailabilityUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: AvailabilityCreateManyScheduleInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutScheduleInput | AvailabilityUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutScheduleInput | AvailabilityUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<AvailabilityCreateWithoutScheduleInput, AvailabilityUncheckedCreateWithoutScheduleInput> | AvailabilityCreateWithoutScheduleInput[] | AvailabilityUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutScheduleInput | AvailabilityCreateOrConnectWithoutScheduleInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutScheduleInput | AvailabilityUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: AvailabilityCreateManyScheduleInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutScheduleInput | AvailabilityUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutScheduleInput | AvailabilityUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventTypesInput = {
    create?: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventTypesInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<BookingCreateWithoutEventTypeInput, BookingUncheckedCreateWithoutEventTypeInput> | BookingCreateWithoutEventTypeInput[] | BookingUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEventTypeInput | BookingCreateOrConnectWithoutEventTypeInput[]
    createMany?: BookingCreateManyEventTypeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingQuestionCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<BookingQuestionCreateWithoutEventTypeInput, BookingQuestionUncheckedCreateWithoutEventTypeInput> | BookingQuestionCreateWithoutEventTypeInput[] | BookingQuestionUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: BookingQuestionCreateOrConnectWithoutEventTypeInput | BookingQuestionCreateOrConnectWithoutEventTypeInput[]
    createMany?: BookingQuestionCreateManyEventTypeInputEnvelope
    connect?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
  }

  export type DateOverrideCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<DateOverrideCreateWithoutEventTypeInput, DateOverrideUncheckedCreateWithoutEventTypeInput> | DateOverrideCreateWithoutEventTypeInput[] | DateOverrideUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: DateOverrideCreateOrConnectWithoutEventTypeInput | DateOverrideCreateOrConnectWithoutEventTypeInput[]
    createMany?: DateOverrideCreateManyEventTypeInputEnvelope
    connect?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<BookingCreateWithoutEventTypeInput, BookingUncheckedCreateWithoutEventTypeInput> | BookingCreateWithoutEventTypeInput[] | BookingUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEventTypeInput | BookingCreateOrConnectWithoutEventTypeInput[]
    createMany?: BookingCreateManyEventTypeInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type BookingQuestionUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<BookingQuestionCreateWithoutEventTypeInput, BookingQuestionUncheckedCreateWithoutEventTypeInput> | BookingQuestionCreateWithoutEventTypeInput[] | BookingQuestionUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: BookingQuestionCreateOrConnectWithoutEventTypeInput | BookingQuestionCreateOrConnectWithoutEventTypeInput[]
    createMany?: BookingQuestionCreateManyEventTypeInputEnvelope
    connect?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
  }

  export type DateOverrideUncheckedCreateNestedManyWithoutEventTypeInput = {
    create?: XOR<DateOverrideCreateWithoutEventTypeInput, DateOverrideUncheckedCreateWithoutEventTypeInput> | DateOverrideCreateWithoutEventTypeInput[] | DateOverrideUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: DateOverrideCreateOrConnectWithoutEventTypeInput | DateOverrideCreateOrConnectWithoutEventTypeInput[]
    createMany?: DateOverrideCreateManyEventTypeInputEnvelope
    connect?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutEventTypesNestedInput = {
    create?: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventTypesInput
    upsert?: UserUpsertWithoutEventTypesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventTypesInput, UserUpdateWithoutEventTypesInput>, UserUncheckedUpdateWithoutEventTypesInput>
  }

  export type BookingUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<BookingCreateWithoutEventTypeInput, BookingUncheckedCreateWithoutEventTypeInput> | BookingCreateWithoutEventTypeInput[] | BookingUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEventTypeInput | BookingCreateOrConnectWithoutEventTypeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEventTypeInput | BookingUpsertWithWhereUniqueWithoutEventTypeInput[]
    createMany?: BookingCreateManyEventTypeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEventTypeInput | BookingUpdateWithWhereUniqueWithoutEventTypeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEventTypeInput | BookingUpdateManyWithWhereWithoutEventTypeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingQuestionUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<BookingQuestionCreateWithoutEventTypeInput, BookingQuestionUncheckedCreateWithoutEventTypeInput> | BookingQuestionCreateWithoutEventTypeInput[] | BookingQuestionUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: BookingQuestionCreateOrConnectWithoutEventTypeInput | BookingQuestionCreateOrConnectWithoutEventTypeInput[]
    upsert?: BookingQuestionUpsertWithWhereUniqueWithoutEventTypeInput | BookingQuestionUpsertWithWhereUniqueWithoutEventTypeInput[]
    createMany?: BookingQuestionCreateManyEventTypeInputEnvelope
    set?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
    disconnect?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
    delete?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
    connect?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
    update?: BookingQuestionUpdateWithWhereUniqueWithoutEventTypeInput | BookingQuestionUpdateWithWhereUniqueWithoutEventTypeInput[]
    updateMany?: BookingQuestionUpdateManyWithWhereWithoutEventTypeInput | BookingQuestionUpdateManyWithWhereWithoutEventTypeInput[]
    deleteMany?: BookingQuestionScalarWhereInput | BookingQuestionScalarWhereInput[]
  }

  export type DateOverrideUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<DateOverrideCreateWithoutEventTypeInput, DateOverrideUncheckedCreateWithoutEventTypeInput> | DateOverrideCreateWithoutEventTypeInput[] | DateOverrideUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: DateOverrideCreateOrConnectWithoutEventTypeInput | DateOverrideCreateOrConnectWithoutEventTypeInput[]
    upsert?: DateOverrideUpsertWithWhereUniqueWithoutEventTypeInput | DateOverrideUpsertWithWhereUniqueWithoutEventTypeInput[]
    createMany?: DateOverrideCreateManyEventTypeInputEnvelope
    set?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
    disconnect?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
    delete?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
    connect?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
    update?: DateOverrideUpdateWithWhereUniqueWithoutEventTypeInput | DateOverrideUpdateWithWhereUniqueWithoutEventTypeInput[]
    updateMany?: DateOverrideUpdateManyWithWhereWithoutEventTypeInput | DateOverrideUpdateManyWithWhereWithoutEventTypeInput[]
    deleteMany?: DateOverrideScalarWhereInput | DateOverrideScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<BookingCreateWithoutEventTypeInput, BookingUncheckedCreateWithoutEventTypeInput> | BookingCreateWithoutEventTypeInput[] | BookingUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutEventTypeInput | BookingCreateOrConnectWithoutEventTypeInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutEventTypeInput | BookingUpsertWithWhereUniqueWithoutEventTypeInput[]
    createMany?: BookingCreateManyEventTypeInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutEventTypeInput | BookingUpdateWithWhereUniqueWithoutEventTypeInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutEventTypeInput | BookingUpdateManyWithWhereWithoutEventTypeInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type BookingQuestionUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<BookingQuestionCreateWithoutEventTypeInput, BookingQuestionUncheckedCreateWithoutEventTypeInput> | BookingQuestionCreateWithoutEventTypeInput[] | BookingQuestionUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: BookingQuestionCreateOrConnectWithoutEventTypeInput | BookingQuestionCreateOrConnectWithoutEventTypeInput[]
    upsert?: BookingQuestionUpsertWithWhereUniqueWithoutEventTypeInput | BookingQuestionUpsertWithWhereUniqueWithoutEventTypeInput[]
    createMany?: BookingQuestionCreateManyEventTypeInputEnvelope
    set?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
    disconnect?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
    delete?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
    connect?: BookingQuestionWhereUniqueInput | BookingQuestionWhereUniqueInput[]
    update?: BookingQuestionUpdateWithWhereUniqueWithoutEventTypeInput | BookingQuestionUpdateWithWhereUniqueWithoutEventTypeInput[]
    updateMany?: BookingQuestionUpdateManyWithWhereWithoutEventTypeInput | BookingQuestionUpdateManyWithWhereWithoutEventTypeInput[]
    deleteMany?: BookingQuestionScalarWhereInput | BookingQuestionScalarWhereInput[]
  }

  export type DateOverrideUncheckedUpdateManyWithoutEventTypeNestedInput = {
    create?: XOR<DateOverrideCreateWithoutEventTypeInput, DateOverrideUncheckedCreateWithoutEventTypeInput> | DateOverrideCreateWithoutEventTypeInput[] | DateOverrideUncheckedCreateWithoutEventTypeInput[]
    connectOrCreate?: DateOverrideCreateOrConnectWithoutEventTypeInput | DateOverrideCreateOrConnectWithoutEventTypeInput[]
    upsert?: DateOverrideUpsertWithWhereUniqueWithoutEventTypeInput | DateOverrideUpsertWithWhereUniqueWithoutEventTypeInput[]
    createMany?: DateOverrideCreateManyEventTypeInputEnvelope
    set?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
    disconnect?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
    delete?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
    connect?: DateOverrideWhereUniqueInput | DateOverrideWhereUniqueInput[]
    update?: DateOverrideUpdateWithWhereUniqueWithoutEventTypeInput | DateOverrideUpdateWithWhereUniqueWithoutEventTypeInput[]
    updateMany?: DateOverrideUpdateManyWithWhereWithoutEventTypeInput | DateOverrideUpdateManyWithWhereWithoutEventTypeInput[]
    deleteMany?: DateOverrideScalarWhereInput | DateOverrideScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
  }

  export type AvailabilityScheduleCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutAvailabilityInput, AvailabilityScheduleUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutAvailabilityInput
    connect?: AvailabilityScheduleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    upsert?: UserUpsertWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilityInput, UserUpdateWithoutAvailabilityInput>, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type AvailabilityScheduleUpdateOneWithoutAvailabilityNestedInput = {
    create?: XOR<AvailabilityScheduleCreateWithoutAvailabilityInput, AvailabilityScheduleUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: AvailabilityScheduleCreateOrConnectWithoutAvailabilityInput
    upsert?: AvailabilityScheduleUpsertWithoutAvailabilityInput
    disconnect?: AvailabilityScheduleWhereInput | boolean
    delete?: AvailabilityScheduleWhereInput | boolean
    connect?: AvailabilityScheduleWhereUniqueInput
    update?: XOR<XOR<AvailabilityScheduleUpdateToOneWithWhereWithoutAvailabilityInput, AvailabilityScheduleUpdateWithoutAvailabilityInput>, AvailabilityScheduleUncheckedUpdateWithoutAvailabilityInput>
  }

  export type EventTypeCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<EventTypeCreateWithoutQuestionsInput, EventTypeUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutQuestionsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type BookingAnswerCreateNestedManyWithoutQuestionInput = {
    create?: XOR<BookingAnswerCreateWithoutQuestionInput, BookingAnswerUncheckedCreateWithoutQuestionInput> | BookingAnswerCreateWithoutQuestionInput[] | BookingAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: BookingAnswerCreateOrConnectWithoutQuestionInput | BookingAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: BookingAnswerCreateManyQuestionInputEnvelope
    connect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
  }

  export type BookingAnswerUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<BookingAnswerCreateWithoutQuestionInput, BookingAnswerUncheckedCreateWithoutQuestionInput> | BookingAnswerCreateWithoutQuestionInput[] | BookingAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: BookingAnswerCreateOrConnectWithoutQuestionInput | BookingAnswerCreateOrConnectWithoutQuestionInput[]
    createMany?: BookingAnswerCreateManyQuestionInputEnvelope
    connect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
  }

  export type EventTypeUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<EventTypeCreateWithoutQuestionsInput, EventTypeUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutQuestionsInput
    upsert?: EventTypeUpsertWithoutQuestionsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<XOR<EventTypeUpdateToOneWithWhereWithoutQuestionsInput, EventTypeUpdateWithoutQuestionsInput>, EventTypeUncheckedUpdateWithoutQuestionsInput>
  }

  export type BookingAnswerUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<BookingAnswerCreateWithoutQuestionInput, BookingAnswerUncheckedCreateWithoutQuestionInput> | BookingAnswerCreateWithoutQuestionInput[] | BookingAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: BookingAnswerCreateOrConnectWithoutQuestionInput | BookingAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: BookingAnswerUpsertWithWhereUniqueWithoutQuestionInput | BookingAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: BookingAnswerCreateManyQuestionInputEnvelope
    set?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    disconnect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    delete?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    connect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    update?: BookingAnswerUpdateWithWhereUniqueWithoutQuestionInput | BookingAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: BookingAnswerUpdateManyWithWhereWithoutQuestionInput | BookingAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: BookingAnswerScalarWhereInput | BookingAnswerScalarWhereInput[]
  }

  export type BookingAnswerUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<BookingAnswerCreateWithoutQuestionInput, BookingAnswerUncheckedCreateWithoutQuestionInput> | BookingAnswerCreateWithoutQuestionInput[] | BookingAnswerUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: BookingAnswerCreateOrConnectWithoutQuestionInput | BookingAnswerCreateOrConnectWithoutQuestionInput[]
    upsert?: BookingAnswerUpsertWithWhereUniqueWithoutQuestionInput | BookingAnswerUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: BookingAnswerCreateManyQuestionInputEnvelope
    set?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    disconnect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    delete?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    connect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    update?: BookingAnswerUpdateWithWhereUniqueWithoutQuestionInput | BookingAnswerUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: BookingAnswerUpdateManyWithWhereWithoutQuestionInput | BookingAnswerUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: BookingAnswerScalarWhereInput | BookingAnswerScalarWhereInput[]
  }

  export type BookingCreateNestedOneWithoutAnswersInput = {
    create?: XOR<BookingCreateWithoutAnswersInput, BookingUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAnswersInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingQuestionCreateNestedOneWithoutAnswersInput = {
    create?: XOR<BookingQuestionCreateWithoutAnswersInput, BookingQuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: BookingQuestionCreateOrConnectWithoutAnswersInput
    connect?: BookingQuestionWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<BookingCreateWithoutAnswersInput, BookingUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: BookingCreateOrConnectWithoutAnswersInput
    upsert?: BookingUpsertWithoutAnswersInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutAnswersInput, BookingUpdateWithoutAnswersInput>, BookingUncheckedUpdateWithoutAnswersInput>
  }

  export type BookingQuestionUpdateOneRequiredWithoutAnswersNestedInput = {
    create?: XOR<BookingQuestionCreateWithoutAnswersInput, BookingQuestionUncheckedCreateWithoutAnswersInput>
    connectOrCreate?: BookingQuestionCreateOrConnectWithoutAnswersInput
    upsert?: BookingQuestionUpsertWithoutAnswersInput
    connect?: BookingQuestionWhereUniqueInput
    update?: XOR<XOR<BookingQuestionUpdateToOneWithWhereWithoutAnswersInput, BookingQuestionUpdateWithoutAnswersInput>, BookingQuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type EventTypeCreateNestedOneWithoutOverridesInput = {
    create?: XOR<EventTypeCreateWithoutOverridesInput, EventTypeUncheckedCreateWithoutOverridesInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutOverridesInput
    connect?: EventTypeWhereUniqueInput
  }

  export type EventTypeUpdateOneRequiredWithoutOverridesNestedInput = {
    create?: XOR<EventTypeCreateWithoutOverridesInput, EventTypeUncheckedCreateWithoutOverridesInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutOverridesInput
    upsert?: EventTypeUpsertWithoutOverridesInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<XOR<EventTypeUpdateToOneWithWhereWithoutOverridesInput, EventTypeUpdateWithoutOverridesInput>, EventTypeUncheckedUpdateWithoutOverridesInput>
  }

  export type EventTypeCreateNestedOneWithoutBookingsInput = {
    create?: XOR<EventTypeCreateWithoutBookingsInput, EventTypeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutBookingsInput
    connect?: EventTypeWhereUniqueInput
  }

  export type BookingAnswerCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingAnswerCreateWithoutBookingInput, BookingAnswerUncheckedCreateWithoutBookingInput> | BookingAnswerCreateWithoutBookingInput[] | BookingAnswerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingAnswerCreateOrConnectWithoutBookingInput | BookingAnswerCreateOrConnectWithoutBookingInput[]
    createMany?: BookingAnswerCreateManyBookingInputEnvelope
    connect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
  }

  export type BookingAnswerUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingAnswerCreateWithoutBookingInput, BookingAnswerUncheckedCreateWithoutBookingInput> | BookingAnswerCreateWithoutBookingInput[] | BookingAnswerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingAnswerCreateOrConnectWithoutBookingInput | BookingAnswerCreateOrConnectWithoutBookingInput[]
    createMany?: BookingAnswerCreateManyBookingInputEnvelope
    connect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EventTypeUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<EventTypeCreateWithoutBookingsInput, EventTypeUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: EventTypeCreateOrConnectWithoutBookingsInput
    upsert?: EventTypeUpsertWithoutBookingsInput
    connect?: EventTypeWhereUniqueInput
    update?: XOR<XOR<EventTypeUpdateToOneWithWhereWithoutBookingsInput, EventTypeUpdateWithoutBookingsInput>, EventTypeUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingAnswerUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingAnswerCreateWithoutBookingInput, BookingAnswerUncheckedCreateWithoutBookingInput> | BookingAnswerCreateWithoutBookingInput[] | BookingAnswerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingAnswerCreateOrConnectWithoutBookingInput | BookingAnswerCreateOrConnectWithoutBookingInput[]
    upsert?: BookingAnswerUpsertWithWhereUniqueWithoutBookingInput | BookingAnswerUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingAnswerCreateManyBookingInputEnvelope
    set?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    disconnect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    delete?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    connect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    update?: BookingAnswerUpdateWithWhereUniqueWithoutBookingInput | BookingAnswerUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingAnswerUpdateManyWithWhereWithoutBookingInput | BookingAnswerUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingAnswerScalarWhereInput | BookingAnswerScalarWhereInput[]
  }

  export type BookingAnswerUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingAnswerCreateWithoutBookingInput, BookingAnswerUncheckedCreateWithoutBookingInput> | BookingAnswerCreateWithoutBookingInput[] | BookingAnswerUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingAnswerCreateOrConnectWithoutBookingInput | BookingAnswerCreateOrConnectWithoutBookingInput[]
    upsert?: BookingAnswerUpsertWithWhereUniqueWithoutBookingInput | BookingAnswerUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingAnswerCreateManyBookingInputEnvelope
    set?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    disconnect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    delete?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    connect?: BookingAnswerWhereUniqueInput | BookingAnswerWhereUniqueInput[]
    update?: BookingAnswerUpdateWithWhereUniqueWithoutBookingInput | BookingAnswerUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingAnswerUpdateManyWithWhereWithoutBookingInput | BookingAnswerUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingAnswerScalarWhereInput | BookingAnswerScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkflowStepCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowStepCreateWithoutWorkflowInput, WorkflowStepUncheckedCreateWithoutWorkflowInput> | WorkflowStepCreateWithoutWorkflowInput[] | WorkflowStepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowStepCreateOrConnectWithoutWorkflowInput | WorkflowStepCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowStepCreateManyWorkflowInputEnvelope
    connect?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
  }

  export type CallHistoryCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<CallHistoryCreateWithoutWorkflowInput, CallHistoryUncheckedCreateWithoutWorkflowInput> | CallHistoryCreateWithoutWorkflowInput[] | CallHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutWorkflowInput | CallHistoryCreateOrConnectWithoutWorkflowInput[]
    createMany?: CallHistoryCreateManyWorkflowInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type WorkflowStepUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<WorkflowStepCreateWithoutWorkflowInput, WorkflowStepUncheckedCreateWithoutWorkflowInput> | WorkflowStepCreateWithoutWorkflowInput[] | WorkflowStepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowStepCreateOrConnectWithoutWorkflowInput | WorkflowStepCreateOrConnectWithoutWorkflowInput[]
    createMany?: WorkflowStepCreateManyWorkflowInputEnvelope
    connect?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
  }

  export type CallHistoryUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<CallHistoryCreateWithoutWorkflowInput, CallHistoryUncheckedCreateWithoutWorkflowInput> | CallHistoryCreateWithoutWorkflowInput[] | CallHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutWorkflowInput | CallHistoryCreateOrConnectWithoutWorkflowInput[]
    createMany?: CallHistoryCreateManyWorkflowInputEnvelope
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    upsert?: UserUpsertWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowsInput, UserUpdateWithoutWorkflowsInput>, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type WorkflowStepUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowStepCreateWithoutWorkflowInput, WorkflowStepUncheckedCreateWithoutWorkflowInput> | WorkflowStepCreateWithoutWorkflowInput[] | WorkflowStepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowStepCreateOrConnectWithoutWorkflowInput | WorkflowStepCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowStepCreateManyWorkflowInputEnvelope
    set?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
    disconnect?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
    delete?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
    connect?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
    update?: WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowStepUpdateManyWithWhereWithoutWorkflowInput | WorkflowStepUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowStepScalarWhereInput | WorkflowStepScalarWhereInput[]
  }

  export type CallHistoryUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<CallHistoryCreateWithoutWorkflowInput, CallHistoryUncheckedCreateWithoutWorkflowInput> | CallHistoryCreateWithoutWorkflowInput[] | CallHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutWorkflowInput | CallHistoryCreateOrConnectWithoutWorkflowInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutWorkflowInput | CallHistoryUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: CallHistoryCreateManyWorkflowInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutWorkflowInput | CallHistoryUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutWorkflowInput | CallHistoryUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type WorkflowStepUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<WorkflowStepCreateWithoutWorkflowInput, WorkflowStepUncheckedCreateWithoutWorkflowInput> | WorkflowStepCreateWithoutWorkflowInput[] | WorkflowStepUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: WorkflowStepCreateOrConnectWithoutWorkflowInput | WorkflowStepCreateOrConnectWithoutWorkflowInput[]
    upsert?: WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput | WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: WorkflowStepCreateManyWorkflowInputEnvelope
    set?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
    disconnect?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
    delete?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
    connect?: WorkflowStepWhereUniqueInput | WorkflowStepWhereUniqueInput[]
    update?: WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput | WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: WorkflowStepUpdateManyWithWhereWithoutWorkflowInput | WorkflowStepUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: WorkflowStepScalarWhereInput | WorkflowStepScalarWhereInput[]
  }

  export type CallHistoryUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<CallHistoryCreateWithoutWorkflowInput, CallHistoryUncheckedCreateWithoutWorkflowInput> | CallHistoryCreateWithoutWorkflowInput[] | CallHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: CallHistoryCreateOrConnectWithoutWorkflowInput | CallHistoryCreateOrConnectWithoutWorkflowInput[]
    upsert?: CallHistoryUpsertWithWhereUniqueWithoutWorkflowInput | CallHistoryUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: CallHistoryCreateManyWorkflowInputEnvelope
    set?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    disconnect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    delete?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    connect?: CallHistoryWhereUniqueInput | CallHistoryWhereUniqueInput[]
    update?: CallHistoryUpdateWithWhereUniqueWithoutWorkflowInput | CallHistoryUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: CallHistoryUpdateManyWithWhereWithoutWorkflowInput | CallHistoryUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutStepsInput = {
    create?: XOR<WorkflowCreateWithoutStepsInput, WorkflowUncheckedCreateWithoutStepsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutStepsInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<WorkflowCreateWithoutStepsInput, WorkflowUncheckedCreateWithoutStepsInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutStepsInput
    upsert?: WorkflowUpsertWithoutStepsInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutStepsInput, WorkflowUpdateWithoutStepsInput>, WorkflowUncheckedUpdateWithoutStepsInput>
  }

  export type WorkflowCreateNestedOneWithoutCallHistoryInput = {
    create?: XOR<WorkflowCreateWithoutCallHistoryInput, WorkflowUncheckedCreateWithoutCallHistoryInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutCallHistoryInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutCallHistoryNestedInput = {
    create?: XOR<WorkflowCreateWithoutCallHistoryInput, WorkflowUncheckedCreateWithoutCallHistoryInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutCallHistoryInput
    upsert?: WorkflowUpsertWithoutCallHistoryInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutCallHistoryInput, WorkflowUpdateWithoutCallHistoryInput>, WorkflowUncheckedUpdateWithoutCallHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventTypeCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutEventTypeInput
    questions?: BookingQuestionCreateNestedManyWithoutEventTypeInput
    overrides?: DateOverrideCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutEventTypeInput
    questions?: BookingQuestionUncheckedCreateNestedManyWithoutEventTypeInput
    overrides?: DateOverrideUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutUserInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput>
  }

  export type EventTypeCreateManyUserInputEnvelope = {
    data: EventTypeCreateManyUserInput | EventTypeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityCreateWithoutUserInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
    schedule?: AvailabilityScheduleCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateWithoutUserInput = {
    id?: string
    scheduleId?: string | null
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
  }

  export type AvailabilityCreateOrConnectWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityCreateManyUserInputEnvelope = {
    data: AvailabilityCreateManyUserInput | AvailabilityCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AvailabilityScheduleCreateWithoutUserInput = {
    id?: string
    name?: string
    isDefault?: boolean
    timezone?: string
    createdAt?: Date | string
    availability?: AvailabilityCreateNestedManyWithoutScheduleInput
  }

  export type AvailabilityScheduleUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string
    isDefault?: boolean
    timezone?: string
    createdAt?: Date | string
    availability?: AvailabilityUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type AvailabilityScheduleCreateOrConnectWithoutUserInput = {
    where: AvailabilityScheduleWhereUniqueInput
    create: XOR<AvailabilityScheduleCreateWithoutUserInput, AvailabilityScheduleUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityScheduleCreateManyUserInputEnvelope = {
    data: AvailabilityScheduleCreateManyUserInput | AvailabilityScheduleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: WorkflowStepCreateNestedManyWithoutWorkflowInput
    callHistory?: CallHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: WorkflowStepUncheckedCreateNestedManyWithoutWorkflowInput
    callHistory?: CallHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowCreateManyUserInputEnvelope = {
    data: WorkflowCreateManyUserInput | WorkflowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventTypeUpsertWithWhereUniqueWithoutUserInput = {
    where: EventTypeWhereUniqueInput
    update: XOR<EventTypeUpdateWithoutUserInput, EventTypeUncheckedUpdateWithoutUserInput>
    create: XOR<EventTypeCreateWithoutUserInput, EventTypeUncheckedCreateWithoutUserInput>
  }

  export type EventTypeUpdateWithWhereUniqueWithoutUserInput = {
    where: EventTypeWhereUniqueInput
    data: XOR<EventTypeUpdateWithoutUserInput, EventTypeUncheckedUpdateWithoutUserInput>
  }

  export type EventTypeUpdateManyWithWhereWithoutUserInput = {
    where: EventTypeScalarWhereInput
    data: XOR<EventTypeUpdateManyMutationInput, EventTypeUncheckedUpdateManyWithoutUserInput>
  }

  export type EventTypeScalarWhereInput = {
    AND?: EventTypeScalarWhereInput | EventTypeScalarWhereInput[]
    OR?: EventTypeScalarWhereInput[]
    NOT?: EventTypeScalarWhereInput | EventTypeScalarWhereInput[]
    id?: StringFilter<"EventType"> | string
    userId?: StringFilter<"EventType"> | string
    title?: StringFilter<"EventType"> | string
    description?: StringNullableFilter<"EventType"> | string | null
    duration?: IntFilter<"EventType"> | number
    slug?: StringFilter<"EventType"> | string
    isActive?: BoolFilter<"EventType"> | boolean
    color?: StringFilter<"EventType"> | string
    bufferMinutes?: IntFilter<"EventType"> | number
    createdAt?: DateTimeFilter<"EventType"> | Date | string
    updatedAt?: DateTimeFilter<"EventType"> | Date | string
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutUserInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutUserInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    userId?: StringFilter<"Availability"> | string
    scheduleId?: StringNullableFilter<"Availability"> | string | null
    dayOfWeek?: IntFilter<"Availability"> | number
    startTime?: StringFilter<"Availability"> | string
    endTime?: StringFilter<"Availability"> | string
    timezone?: StringFilter<"Availability"> | string
  }

  export type AvailabilityScheduleUpsertWithWhereUniqueWithoutUserInput = {
    where: AvailabilityScheduleWhereUniqueInput
    update: XOR<AvailabilityScheduleUpdateWithoutUserInput, AvailabilityScheduleUncheckedUpdateWithoutUserInput>
    create: XOR<AvailabilityScheduleCreateWithoutUserInput, AvailabilityScheduleUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityScheduleUpdateWithWhereUniqueWithoutUserInput = {
    where: AvailabilityScheduleWhereUniqueInput
    data: XOR<AvailabilityScheduleUpdateWithoutUserInput, AvailabilityScheduleUncheckedUpdateWithoutUserInput>
  }

  export type AvailabilityScheduleUpdateManyWithWhereWithoutUserInput = {
    where: AvailabilityScheduleScalarWhereInput
    data: XOR<AvailabilityScheduleUpdateManyMutationInput, AvailabilityScheduleUncheckedUpdateManyWithoutUserInput>
  }

  export type AvailabilityScheduleScalarWhereInput = {
    AND?: AvailabilityScheduleScalarWhereInput | AvailabilityScheduleScalarWhereInput[]
    OR?: AvailabilityScheduleScalarWhereInput[]
    NOT?: AvailabilityScheduleScalarWhereInput | AvailabilityScheduleScalarWhereInput[]
    id?: StringFilter<"AvailabilitySchedule"> | string
    userId?: StringFilter<"AvailabilitySchedule"> | string
    name?: StringFilter<"AvailabilitySchedule"> | string
    isDefault?: BoolFilter<"AvailabilitySchedule"> | boolean
    timezone?: StringFilter<"AvailabilitySchedule"> | string
    createdAt?: DateTimeFilter<"AvailabilitySchedule"> | Date | string
  }

  export type WorkflowUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutUserInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkflowScalarWhereInput = {
    AND?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    OR?: WorkflowScalarWhereInput[]
    NOT?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    id?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    title?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    isActive?: BoolFilter<"Workflow"> | boolean
    trigger?: StringFilter<"Workflow"> | string
    action?: StringFilter<"Workflow"> | string
    timeValue?: IntFilter<"Workflow"> | number
    timeUnit?: StringFilter<"Workflow"> | string
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
  }

  export type UserCreateWithoutSchedulesInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSchedulesInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSchedulesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
  }

  export type AvailabilityCreateWithoutScheduleInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
    user: UserCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateWithoutScheduleInput = {
    id?: string
    userId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
  }

  export type AvailabilityCreateOrConnectWithoutScheduleInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutScheduleInput, AvailabilityUncheckedCreateWithoutScheduleInput>
  }

  export type AvailabilityCreateManyScheduleInputEnvelope = {
    data: AvailabilityCreateManyScheduleInput | AvailabilityCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSchedulesInput = {
    update: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
    create: XOR<UserCreateWithoutSchedulesInput, UserUncheckedCreateWithoutSchedulesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSchedulesInput, UserUncheckedUpdateWithoutSchedulesInput>
  }

  export type UserUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutScheduleInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutScheduleInput, AvailabilityUncheckedUpdateWithoutScheduleInput>
    create: XOR<AvailabilityCreateWithoutScheduleInput, AvailabilityUncheckedCreateWithoutScheduleInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutScheduleInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutScheduleInput, AvailabilityUncheckedUpdateWithoutScheduleInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutScheduleInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutScheduleInput>
  }

  export type UserCreateWithoutEventTypesInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    schedules?: AvailabilityScheduleCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventTypesInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    schedules?: AvailabilityScheduleUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventTypesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
  }

  export type BookingCreateWithoutEventTypeInput = {
    id?: string
    bookerName: string
    bookerEmail: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    cancelledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    answers?: BookingAnswerCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutEventTypeInput = {
    id?: string
    bookerName: string
    bookerEmail: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    cancelledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    answers?: BookingAnswerUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutEventTypeInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutEventTypeInput, BookingUncheckedCreateWithoutEventTypeInput>
  }

  export type BookingCreateManyEventTypeInputEnvelope = {
    data: BookingCreateManyEventTypeInput | BookingCreateManyEventTypeInput[]
    skipDuplicates?: boolean
  }

  export type BookingQuestionCreateWithoutEventTypeInput = {
    id?: string
    label: string
    placeholder?: string | null
    type?: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    answers?: BookingAnswerCreateNestedManyWithoutQuestionInput
  }

  export type BookingQuestionUncheckedCreateWithoutEventTypeInput = {
    id?: string
    label: string
    placeholder?: string | null
    type?: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    answers?: BookingAnswerUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type BookingQuestionCreateOrConnectWithoutEventTypeInput = {
    where: BookingQuestionWhereUniqueInput
    create: XOR<BookingQuestionCreateWithoutEventTypeInput, BookingQuestionUncheckedCreateWithoutEventTypeInput>
  }

  export type BookingQuestionCreateManyEventTypeInputEnvelope = {
    data: BookingQuestionCreateManyEventTypeInput | BookingQuestionCreateManyEventTypeInput[]
    skipDuplicates?: boolean
  }

  export type DateOverrideCreateWithoutEventTypeInput = {
    id?: string
    date: Date | string
    isBlocked?: boolean
    startTime?: string | null
    endTime?: string | null
    createdAt?: Date | string
  }

  export type DateOverrideUncheckedCreateWithoutEventTypeInput = {
    id?: string
    date: Date | string
    isBlocked?: boolean
    startTime?: string | null
    endTime?: string | null
    createdAt?: Date | string
  }

  export type DateOverrideCreateOrConnectWithoutEventTypeInput = {
    where: DateOverrideWhereUniqueInput
    create: XOR<DateOverrideCreateWithoutEventTypeInput, DateOverrideUncheckedCreateWithoutEventTypeInput>
  }

  export type DateOverrideCreateManyEventTypeInputEnvelope = {
    data: DateOverrideCreateManyEventTypeInput | DateOverrideCreateManyEventTypeInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventTypesInput = {
    update: XOR<UserUpdateWithoutEventTypesInput, UserUncheckedUpdateWithoutEventTypesInput>
    create: XOR<UserCreateWithoutEventTypesInput, UserUncheckedCreateWithoutEventTypesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventTypesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventTypesInput, UserUncheckedUpdateWithoutEventTypesInput>
  }

  export type UserUpdateWithoutEventTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    schedules?: AvailabilityScheduleUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventTypesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    schedules?: AvailabilityScheduleUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutEventTypeInput, BookingUncheckedUpdateWithoutEventTypeInput>
    create: XOR<BookingCreateWithoutEventTypeInput, BookingUncheckedCreateWithoutEventTypeInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutEventTypeInput, BookingUncheckedUpdateWithoutEventTypeInput>
  }

  export type BookingUpdateManyWithWhereWithoutEventTypeInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutEventTypeInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    eventTypeId?: StringFilter<"Booking"> | string
    bookerName?: StringFilter<"Booking"> | string
    bookerEmail?: StringFilter<"Booking"> | string
    startTime?: DateTimeFilter<"Booking"> | Date | string
    endTime?: DateTimeFilter<"Booking"> | Date | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    cancelledAt?: DateTimeNullableFilter<"Booking"> | Date | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type BookingQuestionUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: BookingQuestionWhereUniqueInput
    update: XOR<BookingQuestionUpdateWithoutEventTypeInput, BookingQuestionUncheckedUpdateWithoutEventTypeInput>
    create: XOR<BookingQuestionCreateWithoutEventTypeInput, BookingQuestionUncheckedCreateWithoutEventTypeInput>
  }

  export type BookingQuestionUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: BookingQuestionWhereUniqueInput
    data: XOR<BookingQuestionUpdateWithoutEventTypeInput, BookingQuestionUncheckedUpdateWithoutEventTypeInput>
  }

  export type BookingQuestionUpdateManyWithWhereWithoutEventTypeInput = {
    where: BookingQuestionScalarWhereInput
    data: XOR<BookingQuestionUpdateManyMutationInput, BookingQuestionUncheckedUpdateManyWithoutEventTypeInput>
  }

  export type BookingQuestionScalarWhereInput = {
    AND?: BookingQuestionScalarWhereInput | BookingQuestionScalarWhereInput[]
    OR?: BookingQuestionScalarWhereInput[]
    NOT?: BookingQuestionScalarWhereInput | BookingQuestionScalarWhereInput[]
    id?: StringFilter<"BookingQuestion"> | string
    eventTypeId?: StringFilter<"BookingQuestion"> | string
    label?: StringFilter<"BookingQuestion"> | string
    placeholder?: StringNullableFilter<"BookingQuestion"> | string | null
    type?: StringFilter<"BookingQuestion"> | string
    required?: BoolFilter<"BookingQuestion"> | boolean
    order?: IntFilter<"BookingQuestion"> | number
    createdAt?: DateTimeFilter<"BookingQuestion"> | Date | string
  }

  export type DateOverrideUpsertWithWhereUniqueWithoutEventTypeInput = {
    where: DateOverrideWhereUniqueInput
    update: XOR<DateOverrideUpdateWithoutEventTypeInput, DateOverrideUncheckedUpdateWithoutEventTypeInput>
    create: XOR<DateOverrideCreateWithoutEventTypeInput, DateOverrideUncheckedCreateWithoutEventTypeInput>
  }

  export type DateOverrideUpdateWithWhereUniqueWithoutEventTypeInput = {
    where: DateOverrideWhereUniqueInput
    data: XOR<DateOverrideUpdateWithoutEventTypeInput, DateOverrideUncheckedUpdateWithoutEventTypeInput>
  }

  export type DateOverrideUpdateManyWithWhereWithoutEventTypeInput = {
    where: DateOverrideScalarWhereInput
    data: XOR<DateOverrideUpdateManyMutationInput, DateOverrideUncheckedUpdateManyWithoutEventTypeInput>
  }

  export type DateOverrideScalarWhereInput = {
    AND?: DateOverrideScalarWhereInput | DateOverrideScalarWhereInput[]
    OR?: DateOverrideScalarWhereInput[]
    NOT?: DateOverrideScalarWhereInput | DateOverrideScalarWhereInput[]
    id?: StringFilter<"DateOverride"> | string
    eventTypeId?: StringFilter<"DateOverride"> | string
    date?: DateTimeFilter<"DateOverride"> | Date | string
    isBlocked?: BoolFilter<"DateOverride"> | boolean
    startTime?: StringNullableFilter<"DateOverride"> | string | null
    endTime?: StringNullableFilter<"DateOverride"> | string | null
    createdAt?: DateTimeFilter<"DateOverride"> | Date | string
  }

  export type UserCreateWithoutAvailabilityInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    schedules?: AvailabilityScheduleCreateNestedManyWithoutUserInput
    workflows?: WorkflowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    schedules?: AvailabilityScheduleUncheckedCreateNestedManyWithoutUserInput
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAvailabilityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
  }

  export type AvailabilityScheduleCreateWithoutAvailabilityInput = {
    id?: string
    name?: string
    isDefault?: boolean
    timezone?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSchedulesInput
  }

  export type AvailabilityScheduleUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    userId: string
    name?: string
    isDefault?: boolean
    timezone?: string
    createdAt?: Date | string
  }

  export type AvailabilityScheduleCreateOrConnectWithoutAvailabilityInput = {
    where: AvailabilityScheduleWhereUniqueInput
    create: XOR<AvailabilityScheduleCreateWithoutAvailabilityInput, AvailabilityScheduleUncheckedCreateWithoutAvailabilityInput>
  }

  export type UserUpsertWithoutAvailabilityInput = {
    update: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    schedules?: AvailabilityScheduleUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    schedules?: AvailabilityScheduleUncheckedUpdateManyWithoutUserNestedInput
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvailabilityScheduleUpsertWithoutAvailabilityInput = {
    update: XOR<AvailabilityScheduleUpdateWithoutAvailabilityInput, AvailabilityScheduleUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<AvailabilityScheduleCreateWithoutAvailabilityInput, AvailabilityScheduleUncheckedCreateWithoutAvailabilityInput>
    where?: AvailabilityScheduleWhereInput
  }

  export type AvailabilityScheduleUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: AvailabilityScheduleWhereInput
    data: XOR<AvailabilityScheduleUpdateWithoutAvailabilityInput, AvailabilityScheduleUncheckedUpdateWithoutAvailabilityInput>
  }

  export type AvailabilityScheduleUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    bookings?: BookingCreateNestedManyWithoutEventTypeInput
    overrides?: DateOverrideCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutQuestionsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutEventTypeInput
    overrides?: DateOverrideUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutQuestionsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutQuestionsInput, EventTypeUncheckedCreateWithoutQuestionsInput>
  }

  export type BookingAnswerCreateWithoutQuestionInput = {
    id?: string
    answer: string
    booking: BookingCreateNestedOneWithoutAnswersInput
  }

  export type BookingAnswerUncheckedCreateWithoutQuestionInput = {
    id?: string
    bookingId: string
    answer: string
  }

  export type BookingAnswerCreateOrConnectWithoutQuestionInput = {
    where: BookingAnswerWhereUniqueInput
    create: XOR<BookingAnswerCreateWithoutQuestionInput, BookingAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type BookingAnswerCreateManyQuestionInputEnvelope = {
    data: BookingAnswerCreateManyQuestionInput | BookingAnswerCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type EventTypeUpsertWithoutQuestionsInput = {
    update: XOR<EventTypeUpdateWithoutQuestionsInput, EventTypeUncheckedUpdateWithoutQuestionsInput>
    create: XOR<EventTypeCreateWithoutQuestionsInput, EventTypeUncheckedCreateWithoutQuestionsInput>
    where?: EventTypeWhereInput
  }

  export type EventTypeUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: EventTypeWhereInput
    data: XOR<EventTypeUpdateWithoutQuestionsInput, EventTypeUncheckedUpdateWithoutQuestionsInput>
  }

  export type EventTypeUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    bookings?: BookingUpdateManyWithoutEventTypeNestedInput
    overrides?: DateOverrideUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutEventTypeNestedInput
    overrides?: DateOverrideUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type BookingAnswerUpsertWithWhereUniqueWithoutQuestionInput = {
    where: BookingAnswerWhereUniqueInput
    update: XOR<BookingAnswerUpdateWithoutQuestionInput, BookingAnswerUncheckedUpdateWithoutQuestionInput>
    create: XOR<BookingAnswerCreateWithoutQuestionInput, BookingAnswerUncheckedCreateWithoutQuestionInput>
  }

  export type BookingAnswerUpdateWithWhereUniqueWithoutQuestionInput = {
    where: BookingAnswerWhereUniqueInput
    data: XOR<BookingAnswerUpdateWithoutQuestionInput, BookingAnswerUncheckedUpdateWithoutQuestionInput>
  }

  export type BookingAnswerUpdateManyWithWhereWithoutQuestionInput = {
    where: BookingAnswerScalarWhereInput
    data: XOR<BookingAnswerUpdateManyMutationInput, BookingAnswerUncheckedUpdateManyWithoutQuestionInput>
  }

  export type BookingAnswerScalarWhereInput = {
    AND?: BookingAnswerScalarWhereInput | BookingAnswerScalarWhereInput[]
    OR?: BookingAnswerScalarWhereInput[]
    NOT?: BookingAnswerScalarWhereInput | BookingAnswerScalarWhereInput[]
    id?: StringFilter<"BookingAnswer"> | string
    bookingId?: StringFilter<"BookingAnswer"> | string
    questionId?: StringFilter<"BookingAnswer"> | string
    answer?: StringFilter<"BookingAnswer"> | string
  }

  export type BookingCreateWithoutAnswersInput = {
    id?: string
    bookerName: string
    bookerEmail: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    cancelledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutBookingsInput
  }

  export type BookingUncheckedCreateWithoutAnswersInput = {
    id?: string
    eventTypeId: string
    bookerName: string
    bookerEmail: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    cancelledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BookingCreateOrConnectWithoutAnswersInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutAnswersInput, BookingUncheckedCreateWithoutAnswersInput>
  }

  export type BookingQuestionCreateWithoutAnswersInput = {
    id?: string
    label: string
    placeholder?: string | null
    type?: string
    required?: boolean
    order?: number
    createdAt?: Date | string
    eventType: EventTypeCreateNestedOneWithoutQuestionsInput
  }

  export type BookingQuestionUncheckedCreateWithoutAnswersInput = {
    id?: string
    eventTypeId: string
    label: string
    placeholder?: string | null
    type?: string
    required?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type BookingQuestionCreateOrConnectWithoutAnswersInput = {
    where: BookingQuestionWhereUniqueInput
    create: XOR<BookingQuestionCreateWithoutAnswersInput, BookingQuestionUncheckedCreateWithoutAnswersInput>
  }

  export type BookingUpsertWithoutAnswersInput = {
    update: XOR<BookingUpdateWithoutAnswersInput, BookingUncheckedUpdateWithoutAnswersInput>
    create: XOR<BookingCreateWithoutAnswersInput, BookingUncheckedCreateWithoutAnswersInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutAnswersInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutAnswersInput, BookingUncheckedUpdateWithoutAnswersInput>
  }

  export type BookingUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookerName?: StringFieldUpdateOperationsInput | string
    bookerEmail?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutBookingsNestedInput
  }

  export type BookingUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypeId?: StringFieldUpdateOperationsInput | string
    bookerName?: StringFieldUpdateOperationsInput | string
    bookerEmail?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingQuestionUpsertWithoutAnswersInput = {
    update: XOR<BookingQuestionUpdateWithoutAnswersInput, BookingQuestionUncheckedUpdateWithoutAnswersInput>
    create: XOR<BookingQuestionCreateWithoutAnswersInput, BookingQuestionUncheckedCreateWithoutAnswersInput>
    where?: BookingQuestionWhereInput
  }

  export type BookingQuestionUpdateToOneWithWhereWithoutAnswersInput = {
    where?: BookingQuestionWhereInput
    data: XOR<BookingQuestionUpdateWithoutAnswersInput, BookingQuestionUncheckedUpdateWithoutAnswersInput>
  }

  export type BookingQuestionUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventType?: EventTypeUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type BookingQuestionUncheckedUpdateWithoutAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventTypeId?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventTypeCreateWithoutOverridesInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    bookings?: BookingCreateNestedManyWithoutEventTypeInput
    questions?: BookingQuestionCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutOverridesInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutEventTypeInput
    questions?: BookingQuestionUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutOverridesInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutOverridesInput, EventTypeUncheckedCreateWithoutOverridesInput>
  }

  export type EventTypeUpsertWithoutOverridesInput = {
    update: XOR<EventTypeUpdateWithoutOverridesInput, EventTypeUncheckedUpdateWithoutOverridesInput>
    create: XOR<EventTypeCreateWithoutOverridesInput, EventTypeUncheckedCreateWithoutOverridesInput>
    where?: EventTypeWhereInput
  }

  export type EventTypeUpdateToOneWithWhereWithoutOverridesInput = {
    where?: EventTypeWhereInput
    data: XOR<EventTypeUpdateWithoutOverridesInput, EventTypeUncheckedUpdateWithoutOverridesInput>
  }

  export type EventTypeUpdateWithoutOverridesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    bookings?: BookingUpdateManyWithoutEventTypeNestedInput
    questions?: BookingQuestionUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutOverridesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutEventTypeNestedInput
    questions?: BookingQuestionUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeCreateWithoutBookingsInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEventTypesInput
    questions?: BookingQuestionCreateNestedManyWithoutEventTypeInput
    overrides?: DateOverrideCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeUncheckedCreateWithoutBookingsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: BookingQuestionUncheckedCreateNestedManyWithoutEventTypeInput
    overrides?: DateOverrideUncheckedCreateNestedManyWithoutEventTypeInput
  }

  export type EventTypeCreateOrConnectWithoutBookingsInput = {
    where: EventTypeWhereUniqueInput
    create: XOR<EventTypeCreateWithoutBookingsInput, EventTypeUncheckedCreateWithoutBookingsInput>
  }

  export type BookingAnswerCreateWithoutBookingInput = {
    id?: string
    answer: string
    question: BookingQuestionCreateNestedOneWithoutAnswersInput
  }

  export type BookingAnswerUncheckedCreateWithoutBookingInput = {
    id?: string
    questionId: string
    answer: string
  }

  export type BookingAnswerCreateOrConnectWithoutBookingInput = {
    where: BookingAnswerWhereUniqueInput
    create: XOR<BookingAnswerCreateWithoutBookingInput, BookingAnswerUncheckedCreateWithoutBookingInput>
  }

  export type BookingAnswerCreateManyBookingInputEnvelope = {
    data: BookingAnswerCreateManyBookingInput | BookingAnswerCreateManyBookingInput[]
    skipDuplicates?: boolean
  }

  export type EventTypeUpsertWithoutBookingsInput = {
    update: XOR<EventTypeUpdateWithoutBookingsInput, EventTypeUncheckedUpdateWithoutBookingsInput>
    create: XOR<EventTypeCreateWithoutBookingsInput, EventTypeUncheckedCreateWithoutBookingsInput>
    where?: EventTypeWhereInput
  }

  export type EventTypeUpdateToOneWithWhereWithoutBookingsInput = {
    where?: EventTypeWhereInput
    data: XOR<EventTypeUpdateWithoutBookingsInput, EventTypeUncheckedUpdateWithoutBookingsInput>
  }

  export type EventTypeUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEventTypesNestedInput
    questions?: BookingQuestionUpdateManyWithoutEventTypeNestedInput
    overrides?: DateOverrideUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: BookingQuestionUncheckedUpdateManyWithoutEventTypeNestedInput
    overrides?: DateOverrideUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type BookingAnswerUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingAnswerWhereUniqueInput
    update: XOR<BookingAnswerUpdateWithoutBookingInput, BookingAnswerUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingAnswerCreateWithoutBookingInput, BookingAnswerUncheckedCreateWithoutBookingInput>
  }

  export type BookingAnswerUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingAnswerWhereUniqueInput
    data: XOR<BookingAnswerUpdateWithoutBookingInput, BookingAnswerUncheckedUpdateWithoutBookingInput>
  }

  export type BookingAnswerUpdateManyWithWhereWithoutBookingInput = {
    where: BookingAnswerScalarWhereInput
    data: XOR<BookingAnswerUpdateManyMutationInput, BookingAnswerUncheckedUpdateManyWithoutBookingInput>
  }

  export type UserCreateWithoutWorkflowsInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    eventTypes?: EventTypeCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    schedules?: AvailabilityScheduleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowsInput = {
    id?: string
    name?: string
    email: string
    username: string
    bio?: string | null
    timezone?: string
    createdAt?: Date | string
    eventTypes?: EventTypeUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    schedules?: AvailabilityScheduleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
  }

  export type WorkflowStepCreateWithoutWorkflowInput = {
    id?: string
    stepOrder: number
    action: string
    template?: string | null
    createdAt?: Date | string
  }

  export type WorkflowStepUncheckedCreateWithoutWorkflowInput = {
    id?: string
    stepOrder: number
    action: string
    template?: string | null
    createdAt?: Date | string
  }

  export type WorkflowStepCreateOrConnectWithoutWorkflowInput = {
    where: WorkflowStepWhereUniqueInput
    create: XOR<WorkflowStepCreateWithoutWorkflowInput, WorkflowStepUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowStepCreateManyWorkflowInputEnvelope = {
    data: WorkflowStepCreateManyWorkflowInput | WorkflowStepCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type CallHistoryCreateWithoutWorkflowInput = {
    id?: string
    bookingId?: string | null
    callerName: string
    callerPhone?: string | null
    callerEmail?: string | null
    callType?: string
    status?: string
    duration?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    notes?: string | null
  }

  export type CallHistoryUncheckedCreateWithoutWorkflowInput = {
    id?: string
    bookingId?: string | null
    callerName: string
    callerPhone?: string | null
    callerEmail?: string | null
    callType?: string
    status?: string
    duration?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    notes?: string | null
  }

  export type CallHistoryCreateOrConnectWithoutWorkflowInput = {
    where: CallHistoryWhereUniqueInput
    create: XOR<CallHistoryCreateWithoutWorkflowInput, CallHistoryUncheckedCreateWithoutWorkflowInput>
  }

  export type CallHistoryCreateManyWorkflowInputEnvelope = {
    data: CallHistoryCreateManyWorkflowInput | CallHistoryCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkflowsInput = {
    update: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type UserUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    schedules?: AvailabilityScheduleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    eventTypes?: EventTypeUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    schedules?: AvailabilityScheduleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowStepUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowStepWhereUniqueInput
    update: XOR<WorkflowStepUpdateWithoutWorkflowInput, WorkflowStepUncheckedUpdateWithoutWorkflowInput>
    create: XOR<WorkflowStepCreateWithoutWorkflowInput, WorkflowStepUncheckedCreateWithoutWorkflowInput>
  }

  export type WorkflowStepUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: WorkflowStepWhereUniqueInput
    data: XOR<WorkflowStepUpdateWithoutWorkflowInput, WorkflowStepUncheckedUpdateWithoutWorkflowInput>
  }

  export type WorkflowStepUpdateManyWithWhereWithoutWorkflowInput = {
    where: WorkflowStepScalarWhereInput
    data: XOR<WorkflowStepUpdateManyMutationInput, WorkflowStepUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowStepScalarWhereInput = {
    AND?: WorkflowStepScalarWhereInput | WorkflowStepScalarWhereInput[]
    OR?: WorkflowStepScalarWhereInput[]
    NOT?: WorkflowStepScalarWhereInput | WorkflowStepScalarWhereInput[]
    id?: StringFilter<"WorkflowStep"> | string
    workflowId?: StringFilter<"WorkflowStep"> | string
    stepOrder?: IntFilter<"WorkflowStep"> | number
    action?: StringFilter<"WorkflowStep"> | string
    template?: StringNullableFilter<"WorkflowStep"> | string | null
    createdAt?: DateTimeFilter<"WorkflowStep"> | Date | string
  }

  export type CallHistoryUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: CallHistoryWhereUniqueInput
    update: XOR<CallHistoryUpdateWithoutWorkflowInput, CallHistoryUncheckedUpdateWithoutWorkflowInput>
    create: XOR<CallHistoryCreateWithoutWorkflowInput, CallHistoryUncheckedCreateWithoutWorkflowInput>
  }

  export type CallHistoryUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: CallHistoryWhereUniqueInput
    data: XOR<CallHistoryUpdateWithoutWorkflowInput, CallHistoryUncheckedUpdateWithoutWorkflowInput>
  }

  export type CallHistoryUpdateManyWithWhereWithoutWorkflowInput = {
    where: CallHistoryScalarWhereInput
    data: XOR<CallHistoryUpdateManyMutationInput, CallHistoryUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type CallHistoryScalarWhereInput = {
    AND?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
    OR?: CallHistoryScalarWhereInput[]
    NOT?: CallHistoryScalarWhereInput | CallHistoryScalarWhereInput[]
    id?: StringFilter<"CallHistory"> | string
    workflowId?: StringFilter<"CallHistory"> | string
    bookingId?: StringNullableFilter<"CallHistory"> | string | null
    callerName?: StringFilter<"CallHistory"> | string
    callerPhone?: StringNullableFilter<"CallHistory"> | string | null
    callerEmail?: StringNullableFilter<"CallHistory"> | string | null
    callType?: StringFilter<"CallHistory"> | string
    status?: StringFilter<"CallHistory"> | string
    duration?: IntFilter<"CallHistory"> | number
    startedAt?: DateTimeFilter<"CallHistory"> | Date | string
    endedAt?: DateTimeNullableFilter<"CallHistory"> | Date | string | null
    notes?: StringNullableFilter<"CallHistory"> | string | null
  }

  export type WorkflowCreateWithoutStepsInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    callHistory?: CallHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutStepsInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    callHistory?: CallHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutStepsInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutStepsInput, WorkflowUncheckedCreateWithoutStepsInput>
  }

  export type WorkflowUpsertWithoutStepsInput = {
    update: XOR<WorkflowUpdateWithoutStepsInput, WorkflowUncheckedUpdateWithoutStepsInput>
    create: XOR<WorkflowCreateWithoutStepsInput, WorkflowUncheckedCreateWithoutStepsInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutStepsInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutStepsInput, WorkflowUncheckedUpdateWithoutStepsInput>
  }

  export type WorkflowUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    callHistory?: CallHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutStepsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    callHistory?: CallHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateWithoutCallHistoryInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    steps?: WorkflowStepCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutCallHistoryInput = {
    id?: string
    userId: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    steps?: WorkflowStepUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutCallHistoryInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutCallHistoryInput, WorkflowUncheckedCreateWithoutCallHistoryInput>
  }

  export type WorkflowUpsertWithoutCallHistoryInput = {
    update: XOR<WorkflowUpdateWithoutCallHistoryInput, WorkflowUncheckedUpdateWithoutCallHistoryInput>
    create: XOR<WorkflowCreateWithoutCallHistoryInput, WorkflowUncheckedCreateWithoutCallHistoryInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutCallHistoryInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutCallHistoryInput, WorkflowUncheckedUpdateWithoutCallHistoryInput>
  }

  export type WorkflowUpdateWithoutCallHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    steps?: WorkflowStepUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutCallHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: WorkflowStepUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type EventTypeCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    duration: number
    slug: string
    isActive?: boolean
    color?: string
    bufferMinutes?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityCreateManyUserInput = {
    id?: string
    scheduleId?: string | null
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
  }

  export type AvailabilityScheduleCreateManyUserInput = {
    id?: string
    name?: string
    isDefault?: boolean
    timezone?: string
    createdAt?: Date | string
  }

  export type WorkflowCreateManyUserInput = {
    id?: string
    title: string
    description?: string | null
    isActive?: boolean
    trigger?: string
    action?: string
    timeValue?: number
    timeUnit?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventTypeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutEventTypeNestedInput
    questions?: BookingQuestionUpdateManyWithoutEventTypeNestedInput
    overrides?: DateOverrideUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutEventTypeNestedInput
    questions?: BookingQuestionUncheckedUpdateManyWithoutEventTypeNestedInput
    overrides?: DateOverrideUncheckedUpdateManyWithoutEventTypeNestedInput
  }

  export type EventTypeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    duration?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    color?: StringFieldUpdateOperationsInput | string
    bufferMinutes?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    schedule?: AvailabilityScheduleUpdateOneWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduleId?: NullableStringFieldUpdateOperationsInput | string | null
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityScheduleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityUpdateManyWithoutScheduleNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: AvailabilityUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type AvailabilityScheduleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: WorkflowStepUpdateManyWithoutWorkflowNestedInput
    callHistory?: CallHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: WorkflowStepUncheckedUpdateManyWithoutWorkflowNestedInput
    callHistory?: CallHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    trigger?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timeValue?: IntFieldUpdateOperationsInput | number
    timeUnit?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateManyScheduleInput = {
    id?: string
    userId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
  }

  export type AvailabilityUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type AvailabilityUncheckedUpdateManyWithoutScheduleInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type BookingCreateManyEventTypeInput = {
    id?: string
    bookerName: string
    bookerEmail: string
    startTime: Date | string
    endTime: Date | string
    status?: $Enums.BookingStatus
    cancelledAt?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type BookingQuestionCreateManyEventTypeInput = {
    id?: string
    label: string
    placeholder?: string | null
    type?: string
    required?: boolean
    order?: number
    createdAt?: Date | string
  }

  export type DateOverrideCreateManyEventTypeInput = {
    id?: string
    date: Date | string
    isBlocked?: boolean
    startTime?: string | null
    endTime?: string | null
    createdAt?: Date | string
  }

  export type BookingUpdateWithoutEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookerName?: StringFieldUpdateOperationsInput | string
    bookerEmail?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: BookingAnswerUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookerName?: StringFieldUpdateOperationsInput | string
    bookerEmail?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: BookingAnswerUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookerName?: StringFieldUpdateOperationsInput | string
    bookerEmail?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingQuestionUpdateWithoutEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: BookingAnswerUpdateManyWithoutQuestionNestedInput
  }

  export type BookingQuestionUncheckedUpdateWithoutEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    answers?: BookingAnswerUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type BookingQuestionUncheckedUpdateManyWithoutEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOverrideUpdateWithoutEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOverrideUncheckedUpdateWithoutEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DateOverrideUncheckedUpdateManyWithoutEventTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isBlocked?: BoolFieldUpdateOperationsInput | boolean
    startTime?: NullableStringFieldUpdateOperationsInput | string | null
    endTime?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingAnswerCreateManyQuestionInput = {
    id?: string
    bookingId: string
    answer: string
  }

  export type BookingAnswerUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    booking?: BookingUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type BookingAnswerUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type BookingAnswerUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type BookingAnswerCreateManyBookingInput = {
    id?: string
    questionId: string
    answer: string
  }

  export type BookingAnswerUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    question?: BookingQuestionUpdateOneRequiredWithoutAnswersNestedInput
  }

  export type BookingAnswerUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type BookingAnswerUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type WorkflowStepCreateManyWorkflowInput = {
    id?: string
    stepOrder: number
    action: string
    template?: string | null
    createdAt?: Date | string
  }

  export type CallHistoryCreateManyWorkflowInput = {
    id?: string
    bookingId?: string | null
    callerName: string
    callerPhone?: string | null
    callerEmail?: string | null
    callType?: string
    status?: string
    duration?: number
    startedAt?: Date | string
    endedAt?: Date | string | null
    notes?: string | null
  }

  export type WorkflowStepUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    template?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowStepUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    template?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowStepUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    stepOrder?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    template?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CallHistoryUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    callerName?: StringFieldUpdateOperationsInput | string
    callerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    callerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CallHistoryUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    callerName?: StringFieldUpdateOperationsInput | string
    callerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    callerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CallHistoryUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    callerName?: StringFieldUpdateOperationsInput | string
    callerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    callerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    callType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
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