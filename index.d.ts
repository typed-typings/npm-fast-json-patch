
declare module 'fast-json-patch' {
    export type Operation = 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';

    export interface JsonPatch {
        op: Operation;
        path: string;
        value?: any;
        from?: string;
    }

    export class JsonPatchError extends Error {
        name: string;
        message: string;
        index: number;
        operation: Operation;
        tree: any;
        constructor(message: string, name:string, index?:number, operation?:any, tree?:any);
    }

    export interface Observer<T> {
        object: T;
        patches: JsonPatch[];
        unobserve(): void;
    }

    /**
     * Apply a json-patch operation on an object tree
     * Returns an array of results of operations.
     * Each element can either be a boolean (if op == 'test') or
     * the removed object (operations that remove things)
     * or just be undefined
     */
    export function apply(tree: any, patches: JsonPatch[], validate?: boolean): Array<any>;

    /**
     * Observes changes made to an object, which can then be retieved using generate
     */
    export function observe<T>(object: T, callback?: () => void): Observer<T>;

    /**
     * Detach an observer from an object
     */
    export function unobserve<T>(object: T, observer: Observer<T>): never;

    /**
     * Generate an array of patches from an observer
     */
    export function generate<T>(observer: Observer<T>): JsonPatch[];

    /**
     * Create an array of patches from the differences in two objects
     */
    export function compare(object1: any, object2: any): JsonPatch[];

    /**
     * Ensure a set of patch instructions is valid
     */
    export function validate(sequence: JsonPatch[], tree?: any): JsonPatchError | undefined;

    /**
     * Validates a single operation. Called from `jsonpatch.validate`. Throws `JsonPatchError` in case of an error
     */
    export function validator(operation: any, index: number, tree?: any, existingPathFragment?: string): never;
}
