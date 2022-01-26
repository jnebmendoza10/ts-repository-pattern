export interface Read<T> {
    find (): Promise<T[]>;
    findOne (_id: string): Promise<T>;
}